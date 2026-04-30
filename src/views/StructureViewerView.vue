<template>
  <div class="structure-viewer">
    <h1 class="page-title">3D 结构可视化</h1>
    <p class="page-desc">上传 POSCAR 文件或输入结构数据，实时查看晶体结构。</p>

    <div class="viewer-container">
      <div class="panel-left">
        <div class="param-group">
          <h4>结构输入</h4>
          <div class="input-method">
            <button :class="['method-btn', { active: inputMethod === 'file' }]" @click="inputMethod = 'file'">
              📁 上传文件
            </button>
            <button :class="['method-btn', { active: inputMethod === 'text' }]" @click="inputMethod = 'text'">
              📝 粘贴文本
            </button>
            <button :class="['method-btn', { active: inputMethod === 'preset' }]" @click="inputMethod = 'preset'">
              🧪 预设结构
            </button>
          </div>

          <div v-if="inputMethod === 'file'" class="file-upload">
            <input type="file" @change="handleFileUpload" accept=".vasp,.poscar,.txt" class="file-input">
            <div class="file-info" v-if="fileName">
              <span>{{ fileName }}</span>
              <button class="btn-icon" @click="clearFile">×</button>
            </div>
          </div>

          <div v-if="inputMethod === 'text'" class="text-input">
            <textarea v-model="poscarText" placeholder="粘贴 POSCAR 内容..." rows="10"></textarea>
            <button class="btn btn-primary" @click="parsePoscarText">解析结构</button>
          </div>

          <div v-if="inputMethod === 'preset'" class="preset-select">
            <select v-model="selectedPreset" @change="loadPreset">
              <option value="">选择预设结构</option>
              <option value="si-diamond">Si (金刚石结构)</option>
              <option value="ga-as">GaAs (闪锌矿)</option>
              <option value="na-cl">NaCl (岩盐结构)</option>
              <option value="ti-hex">Ti (六方密堆)</option>
              <option value="al-fcc">Al (面心立方)</option>
              <option value="fe-bcc">Fe (体心立方)</option>
              <option value="graphene">石墨烯</option>
              <option value="mos2">MoS₂ (单层)</option>
            </select>
          </div>
        </div>

        <div class="param-group" v-if="structure">
          <h4>显示选项</h4>
          <div class="option-row">
            <label>显示模式:</label>
            <select v-model="displayMode">
              <option value="ball-stick">球棍模型</option>
              <option value="space-fill">空间填充</option>
              <option value="wireframe">线框模型</option>
              <option value="polyhedra">多面体</option>
            </select>
          </div>
          <div class="option-row">
            <label>原子大小:</label>
            <input type="range" v-model.number="atomSize" min="0.5" max="2" step="0.1">
            <span>{{ atomSize }}</span>
          </div>
          <div class="option-row">
            <label>键长:</label>
            <input type="range" v-model.number="bondLength" min="1" max="3" step="0.1">
            <span>{{ bondLength }} Å</span>
          </div>
          <div class="option-row">
            <label>显示晶胞:</label>
            <input type="checkbox" v-model="showCell">
          </div>
          <div class="option-row">
            <label>显示原子标签:</label>
            <input type="checkbox" v-model="showLabels">
          </div>
        </div>

        <div class="param-group" v-if="structure">
          <h4>结构信息</h4>
          <div class="info-list">
            <div class="info-item">
              <span class="label">元素:</span>
              <span class="value">{{ structure.elements.join(', ') }}</span>
            </div>
            <div class="info-item">
              <span class="label">原子数:</span>
              <span class="value">{{ structure.atoms.length }}</span>
            </div>
            <div class="info-item">
              <span class="label">晶格常数:</span>
              <span class="value">a={{ structure.lattice.a.toFixed(3) }} Å, b={{ structure.lattice.b.toFixed(3) }} Å, c={{ structure.lattice.c.toFixed(3) }} Å</span>
            </div>
            <div class="info-item">
              <span class="label">角度:</span>
              <span class="value">α={{ structure.lattice.alpha.toFixed(1) }}°, β={{ structure.lattice.beta.toFixed(1) }}°, γ={{ structure.lattice.gamma.toFixed(1) }}°</span>
            </div>
            <div class="info-item">
              <span class="label">体积:</span>
              <span class="value">{{ calculateVolume().toFixed(3) }} ų</span>
            </div>
          </div>
        </div>

        <div class="param-group">
          <h4>导出选项</h4>
          <div class="export-buttons">
            <button class="btn btn-primary" @click="exportImage">📷 导出图片</button>
            <button class="btn btn-secondary" @click="exportPoscar">📄 导出 POSCAR</button>
          </div>
        </div>
      </div>

      <div class="panel-right">
        <div class="viewer-wrapper">
          <canvas ref="canvas" class="viewer-canvas"></canvas>
          <div class="viewer-controls">
            <button class="control-btn" @click="resetView">🔄 重置视图</button>
            <button class="control-btn" @click="zoomIn">🔍+ 放大</button>
            <button class="control-btn" @click="zoomOut">🔍- 缩小</button>
          </div>
          <div class="viewer-info" v-if="structure">
            <div class="atom-count">
              <span v-for="(count, element) in elementCounts" :key="element" class="atom-badge">
                {{ element }}: {{ count }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StructureViewerView',
  data() {
    return {
      inputMethod: 'file',
      fileName: '',
      poscarText: '',
      selectedPreset: '',
      structure: null,
      displayMode: 'ball-stick',
      atomSize: 1.0,
      bondLength: 2.5,
      showCell: true,
      showLabels: false,
      canvas: null,
      ctx: null,
      camera: {
        x: 0,
        y: 0,
        z: 10,
        rotationX: 0,
        rotationY: 0,
        zoom: 1
      },
      isDragging: false,
      lastMouseX: 0,
      lastMouseY: 0,
      presets: {
        'si-diamond': {
          comment: 'Si Diamond Structure',
          scale: 1.0,
          lattice: { a: 5.43, b: 5.43, c: 5.43, alpha: 90, beta: 90, gamma: 90 },
          elements: ['Si'],
          atoms: [
            { element: 'Si', x: 0.0, y: 0.0, z: 0.0 },
            { element: 'Si', x: 0.25, y: 0.25, z: 0.25 },
            { element: 'Si', x: 0.5, y: 0.5, z: 0.0 },
            { element: 'Si', x: 0.75, y: 0.75, z: 0.25 },
            { element: 'Si', x: 0.5, y: 0.0, z: 0.5 },
            { element: 'Si', x: 0.75, y: 0.25, z: 0.75 },
            { element: 'Si', x: 0.0, y: 0.5, z: 0.5 },
            { element: 'Si', x: 0.25, y: 0.75, z: 0.75 }
          ]
        },
        'ga-as': {
          comment: 'GaAs Zinc Blende',
          scale: 1.0,
          lattice: { a: 5.65, b: 5.65, c: 5.65, alpha: 90, beta: 90, gamma: 90 },
          elements: ['Ga', 'As'],
          atoms: [
            { element: 'Ga', x: 0.0, y: 0.0, z: 0.0 },
            { element: 'Ga', x: 0.5, y: 0.5, z: 0.0 },
            { element: 'Ga', x: 0.5, y: 0.0, z: 0.5 },
            { element: 'Ga', x: 0.0, y: 0.5, z: 0.5 },
            { element: 'As', x: 0.25, y: 0.25, z: 0.25 },
            { element: 'As', x: 0.75, y: 0.75, z: 0.25 },
            { element: 'As', x: 0.75, y: 0.25, z: 0.75 },
            { element: 'As', x: 0.25, y: 0.75, z: 0.75 }
          ]
        },
        'na-cl': {
          comment: 'NaCl Rock Salt',
          scale: 1.0,
          lattice: { a: 5.64, b: 5.64, c: 5.64, alpha: 90, beta: 90, gamma: 90 },
          elements: ['Na', 'Cl'],
          atoms: [
            { element: 'Na', x: 0.0, y: 0.0, z: 0.0 },
            { element: 'Na', x: 0.5, y: 0.5, z: 0.0 },
            { element: 'Na', x: 0.5, y: 0.0, z: 0.5 },
            { element: 'Na', x: 0.0, y: 0.5, z: 0.5 },
            { element: 'Cl', x: 0.5, y: 0.0, z: 0.0 },
            { element: 'Cl', x: 0.0, y: 0.5, z: 0.0 },
            { element: 'Cl', x: 0.0, y: 0.0, z: 0.5 },
            { element: 'Cl', x: 0.5, y: 0.5, z: 0.5 }
          ]
        },
        'ti-hex': {
          comment: 'Ti HCP',
          scale: 1.0,
          lattice: { a: 2.95, b: 2.95, c: 4.68, alpha: 90, beta: 90, gamma: 120 },
          elements: ['Ti'],
          atoms: [
            { element: 'Ti', x: 0.0, y: 0.0, z: 0.0 },
            { element: 'Ti', x: 0.333, y: 0.667, z: 0.5 }
          ]
        },
        'al-fcc': {
          comment: 'Al FCC',
          scale: 1.0,
          lattice: { a: 4.05, b: 4.05, c: 4.05, alpha: 90, beta: 90, gamma: 90 },
          elements: ['Al'],
          atoms: [
            { element: 'Al', x: 0.0, y: 0.0, z: 0.0 },
            { element: 'Al', x: 0.5, y: 0.5, z: 0.0 },
            { element: 'Al', x: 0.5, y: 0.0, z: 0.5 },
            { element: 'Al', x: 0.0, y: 0.5, z: 0.5 }
          ]
        },
        'fe-bcc': {
          comment: 'Fe BCC',
          scale: 1.0,
          lattice: { a: 2.87, b: 2.87, c: 2.87, alpha: 90, beta: 90, gamma: 90 },
          elements: ['Fe'],
          atoms: [
            { element: 'Fe', x: 0.0, y: 0.0, z: 0.0 },
            { element: 'Fe', x: 0.5, y: 0.5, z: 0.5 }
          ]
        },
        'graphene': {
          comment: 'Graphene',
          scale: 1.0,
          lattice: { a: 2.46, b: 2.46, c: 20.0, alpha: 90, beta: 90, gamma: 120 },
          elements: ['C'],
          atoms: [
            { element: 'C', x: 0.0, y: 0.0, z: 0.0 },
            { element: 'C', x: 0.333, y: 0.667, z: 0.0 }
          ]
        },
        'mos2': {
          comment: 'MoS2 Monolayer',
          scale: 1.0,
          lattice: { a: 3.16, b: 3.16, c: 20.0, alpha: 90, beta: 90, gamma: 120 },
          elements: ['Mo', 'S'],
          atoms: [
            { element: 'Mo', x: 0.0, y: 0.0, z: 0.0 },
            { element: 'S', x: 0.333, y: 0.667, z: 0.1 },
            { element: 'S', x: 0.333, y: 0.667, z: -0.1 }
          ]
        }
      }
    }
  },
  computed: {
    elementCounts() {
      if (!this.structure) return {};
      const counts = {};
      this.structure.atoms.forEach(atom => {
        counts[atom.element] = (counts[atom.element] || 0) + 1;
      });
      return counts;
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileName = file.name;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.poscarText = e.target.result;
          this.parsePoscarText();
        };
        reader.readAsText(file);
      }
    },
    clearFile() {
      this.fileName = '';
      this.poscarText = '';
      this.structure = null;
    },
    parsePoscarText() {
      try {
        const lines = this.poscarText.trim().split('\n');
        let lineIndex = 0;

        // Comment line
        const comment = lines[lineIndex++];

        // Scale factor
        const scale = parseFloat(lines[lineIndex++]);

        // Lattice vectors
        const a = parseFloat(lines[lineIndex++].split(/\s+/)[0]) * scale;
        const b = parseFloat(lines[lineIndex++].split(/\s+/)[1]) * scale;
        const c = parseFloat(lines[lineIndex++].split(/\s+/)[2]) * scale;

        // Elements
        const elements = lines[lineIndex++].trim().split(/\s+/);

        // Atom counts
        const counts = lines[lineIndex++].trim().split(/\s+/).map(Number);

        // Coordinate type
        const coordType = lines[lineIndex++].trim().toLowerCase();
        const isDirect = coordType.startsWith('d');

        // Atoms
        const atoms = [];
        let atomIndex = 0;
        for (let i = 0; i < elements.length; i++) {
          for (let j = 0; j < counts[i]; j++) {
            const coords = lines[lineIndex++].trim().split(/\s+/).map(Number);
            atoms.push({
              element: elements[i],
              x: coords[0],
              y: coords[1],
              z: coords[2]
            });
            atomIndex++;
          }
        }

        this.structure = {
          comment,
          scale,
          lattice: { a, b, c, alpha: 90, beta: 90, gamma: 90 },
          elements,
          atoms
        };

        this.renderStructure();
      } catch (error) {
        alert('解析 POSCAR 文件失败: ' + error.message);
      }
    },
    loadPreset() {
      if (this.selectedPreset && this.presets[this.selectedPreset]) {
        this.structure = JSON.parse(JSON.stringify(this.presets[this.selectedPreset]));
        this.renderStructure();
      }
    },
    calculateVolume() {
      if (!this.structure) return 0;
      const { a, b, c, alpha, beta, gamma } = this.structure.lattice;
      const alphaRad = (alpha * Math.PI) / 180;
      const betaRad = (beta * Math.PI) / 180;
      const gammaRad = (gamma * Math.PI) / 180;

      const volume = a * b * c * Math.sqrt(
        1 - Math.cos(alphaRad) ** 2 - Math.cos(betaRad) ** 2 - Math.cos(gammaRad) ** 2 +
        2 * Math.cos(alphaRad) * Math.cos(betaRad) * Math.cos(gammaRad)
      );

      return volume;
    },
    renderStructure() {
      if (!this.structure || !this.$refs.canvas) return;

      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext('2d');

      // 设置画布大小
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      // 清空画布
      ctx.fillStyle = '#1a1a2e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 计算原子位置
      const atoms = this.structure.atoms.map(atom => {
        const x = atom.x * this.structure.lattice.a;
        const y = atom.y * this.structure.lattice.b;
        const z = atom.z * this.structure.lattice.c;
        return { ...atom, x, y, z };
      });

      // 投影到2D
      const projectedAtoms = atoms.map(atom => {
        const cosY = Math.cos(this.camera.rotationY);
        const sinY = Math.sin(this.camera.rotationY);
        const cosX = Math.cos(this.camera.rotationX);
        const sinX = Math.sin(this.camera.rotationX);

        // 旋转
        let x = atom.x * cosY - atom.z * sinY;
        let z = atom.x * sinY + atom.z * cosY;
        let y = atom.y * cosX - z * sinX;
        z = atom.y * sinX + z * cosX;

        // 缩放
        const scale = 100 * this.camera.zoom;
        const screenX = canvas.width / 2 + x * scale;
        const screenY = canvas.height / 2 - y * scale;

        return { ...atom, screenX, screenY, z };
      });

      // 按z深度排序
      projectedAtoms.sort((a, b) => a.z - b.z);

      // 绘制晶胞
      if (this.showCell) {
        this.drawUnitCell(ctx, canvas);
      }

      // 绘制键
      if (this.displayMode === 'ball-stick') {
        this.drawBonds(ctx, projectedAtoms);
      }

      // 绘制原子
      projectedAtoms.forEach(atom => {
        this.drawAtom(ctx, atom);
      });

      // 绘制标签
      if (this.showLabels) {
        projectedAtoms.forEach(atom => {
          ctx.fillStyle = '#ffffff';
          ctx.font = '12px Arial';
          ctx.fillText(atom.element, atom.screenX + 10, atom.screenY - 10);
        });
      }
    },
    drawUnitCell(ctx, canvas) {
      const { a, b, c, alpha, beta, gamma } = this.structure.lattice;

      // 计算晶胞顶点
      const vertices = [
        [0, 0, 0],
        [a, 0, 0],
        [0, b, 0],
        [0, 0, c],
        [a, b, 0],
        [a, 0, c],
        [0, b, c],
        [a, b, c]
      ];

      // 投影顶点
      const projected = vertices.map(v => {
        const cosY = Math.cos(this.camera.rotationY);
        const sinY = Math.sin(this.camera.rotationY);
        const cosX = Math.cos(this.camera.rotationX);
        const sinX = Math.sin(this.camera.rotationX);

        let x = v[0] * cosY - v[2] * sinY;
        let z = v[0] * sinY + v[2] * cosY;
        let y = v[1] * cosX - z * sinX;
        z = v[1] * sinX + z * cosX;

        const scale = 100 * this.camera.zoom;
        return {
          screenX: canvas.width / 2 + x * scale,
          screenY: canvas.height / 2 - y * scale
        };
      });

      // 绘制晶胞边
      ctx.strokeStyle = 'rgba(100, 100, 255, 0.3)';
      ctx.lineWidth = 1;

      const edges = [
        [0, 1], [0, 2], [0, 3],
        [1, 4], [1, 5],
        [2, 4], [2, 6],
        [3, 5], [3, 6],
        [4, 7], [5, 7], [6, 7]
      ];

      edges.forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(projected[i].screenX, projected[i].screenY);
        ctx.lineTo(projected[j].screenX, projected[j].screenY);
        ctx.stroke();
      });
    },
    drawBonds(ctx, atoms) {
      ctx.strokeStyle = 'rgba(200, 200, 200, 0.5)';
      ctx.lineWidth = 2;

      for (let i = 0; i < atoms.length; i++) {
        for (let j = i + 1; j < atoms.length; j++) {
          const dx = atoms[i].x - atoms[j].x;
          const dy = atoms[i].y - atoms[j].y;
          const dz = atoms[i].z - atoms[j].z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (distance < this.bondLength) {
            ctx.beginPath();
            ctx.moveTo(atoms[i].screenX, atoms[i].screenY);
            ctx.lineTo(atoms[j].screenX, atoms[j].screenY);
            ctx.stroke();
          }
        }
      }
    },
    drawAtom(ctx, atom) {
      const elementColors = {
        'H': '#ffffff',
        'He': '#d9ffff',
        'Li': '#cc80ff',
        'Be': '#c2ff00',
        'B': '#ffb5b5',
        'C': '#909090',
        'N': '#3050f8',
        'O': '#ff0d0d',
        'F': '#90e050',
        'Ne': '#b3e3f5',
        'Na': '#ab5cf2',
        'Mg': '#8aff00',
        'Al': '#bfa6a6',
        'Si': '#f0c8a0',
        'P': '#ff8000',
        'S': '#ffff30',
        'Cl': '#1ff01f',
        'Ar': '#80d1e3',
        'K': '#8f40d4',
        'Ca': '#3dff00',
        'Ti': '#bfc2c7',
        'Fe': '#e06633',
        'Co': '#f090a0',
        'Ni': '#50d050',
        'Cu': '#c88033',
        'Zn': '#7d80b0',
        'Ga': '#c28f8f',
        'As': '#bd80e3',
        'Se': '#ffa100',
        'Mo': '#54a1d4',
        'Ag': '#c0c0c0',
        'Au': '#ffd123',
        'Pb': '#575961'
      };

      const color = elementColors[atom.element] || '#ff6b6b';
      const radius = this.atomSize * 15;

      // 绘制原子球体
      const gradient = ctx.createRadialGradient(
        atom.screenX - radius / 3, atom.screenY - radius / 3, 0,
        atom.screenX, atom.screenY, radius
      );
      gradient.addColorStop(0, '#ffffff');
      gradient.addColorStop(0.3, color);
      gradient.addColorStop(1, this.darkenColor(color, 0.5));

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(atom.screenX, atom.screenY, radius, 0, Math.PI * 2);
      ctx.fill();
    },
    darkenColor(color, factor) {
      const hex = color.replace('#', '');
      const r = Math.floor(parseInt(hex.substr(0, 2), 16) * factor);
      const g = Math.floor(parseInt(hex.substr(2, 2), 16) * factor);
      const b = Math.floor(parseInt(hex.substr(4, 2), 16) * factor);
      return `rgb(${r}, ${g}, ${b})`;
    },
    resetView() {
      this.camera = {
        x: 0,
        y: 0,
        z: 10,
        rotationX: 0,
        rotationY: 0,
        zoom: 1
      };
      this.renderStructure();
    },
    zoomIn() {
      this.camera.zoom *= 1.2;
      this.renderStructure();
    },
    zoomOut() {
      this.camera.zoom /= 1.2;
      this.renderStructure();
    },
    exportImage() {
      const canvas = this.$refs.canvas;
      const link = document.createElement('a');
      link.download = 'structure.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    },
    exportPoscar() {
      if (!this.structure) return;

      let poscar = `${this.structure.comment}\n`;
      poscar += `${this.structure.scale}\n`;
      poscar += `${this.structure.lattice.a} 0 0\n`;
      poscar += `0 ${this.structure.lattice.b} 0\n`;
      poscar += `0 0 ${this.structure.lattice.c}\n`;
      poscar += `${this.structure.elements.join(' ')}\n`;

      const counts = {};
      this.structure.atoms.forEach(atom => {
        counts[atom.element] = (counts[atom.element] || 0) + 1;
      });
      poscar += `${Object.values(counts).join(' ')}\n`;
      poscar += 'Direct\n';

      this.structure.atoms.forEach(atom => {
        poscar += `${atom.x} ${atom.y} ${atom.z}\n`;
      });

      const blob = new Blob([poscar], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'POSCAR';
      a.click();
      URL.revokeObjectURL(url);
    }
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext('2d');

    // 设置画布大小
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;

    // 添加鼠标事件
    this.canvas.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.lastMouseX = e.clientX;
      this.lastMouseY = e.clientY;
    });

    this.canvas.addEventListener('mousemove', (e) => {
      if (this.isDragging) {
        const deltaX = e.clientX - this.lastMouseX;
        const deltaY = e.clientY - this.lastMouseY;

        this.camera.rotationY += deltaX * 0.01;
        this.camera.rotationX += deltaY * 0.01;

        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;

        this.renderStructure();
      }
    });

    this.canvas.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    this.canvas.addEventListener('mouseleave', () => {
      this.isDragging = false;
    });

    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (e.deltaY < 0) {
        this.zoomIn();
      } else {
        this.zoomOut();
      }
    });
  },
  watch: {
    displayMode() {
      this.renderStructure();
    },
    atomSize() {
      this.renderStructure();
    },
    bondLength() {
      this.renderStructure();
    },
    showCell() {
      this.renderStructure();
    },
    showLabels() {
      this.renderStructure();
    }
  }
}
</script>

<style scoped>
.structure-viewer {
  padding: 20px;
}

.page-title {
  color: var(--primary);
  margin-bottom: 10px;
}

.page-desc {
  color: var(--text-secondary);
  margin-bottom: 30px;
}

.viewer-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
}

.panel-left, .panel-right {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid var(--border);
}

.param-group {
  margin-bottom: 25px;
}

.param-group h4 {
  color: var(--primary);
  margin-bottom: 15px;
  border-bottom: 1px solid var(--border);
  padding-bottom: 8px;
}

.input-method {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.method-btn {
  flex: 1;
  padding: 10px;
  border: 1px solid var(--border);
  background: var(--bg-primary);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
}

.method-btn.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.file-upload {
  margin-bottom: 15px;
}

.file-input {
  width: 100%;
  padding: 10px;
  border: 2px dashed var(--border);
  border-radius: 8px;
  cursor: pointer;
}

.file-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: var(--bg-primary);
  border-radius: 6px;
  margin-top: 10px;
}

.text-input {
  margin-bottom: 15px;
}

.text-input textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-family: monospace;
  resize: vertical;
  margin-bottom: 10px;
}

.preset-select {
  margin-bottom: 15px;
}

.preset-select select {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--border);
  border-radius: 6px;
}

.option-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.option-row label {
  min-width: 120px;
  color: var(--text-secondary);
}

.option-row input[type="range"] {
  flex: 1;
}

.option-row input[type="checkbox"] {
  width: 18px;
  height: 18px;
}

.info-list {
  background: var(--bg-primary);
  padding: 15px;
  border-radius: 8px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
}

.info-item .label {
  color: var(--text-secondary);
}

.info-item .value {
  color: var(--text-primary);
  font-weight: 500;
}

.export-buttons {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-secondary {
  background: var(--bg-tertiary);
  color: var(--text);
}

.btn-icon {
  width: 30px;
  height: 30px;
  border: none;
  background: var(--danger);
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.viewer-wrapper {
  position: relative;
  height: 600px;
}

.viewer-canvas {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: #1a1a2e;
  cursor: grab;
}

.viewer-canvas:active {
  cursor: grabbing;
}

.viewer-controls {
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  gap: 10px;
}

.control-btn {
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
}

.viewer-info {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 6px;
}

.atom-count {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.atom-badge {
  padding: 4px 8px;
  background: var(--primary);
  color: white;
  border-radius: 4px;
  font-size: 12px;
}

@media (max-width: 768px) {
  .viewer-container {
    grid-template-columns: 1fr;
  }

  .viewer-wrapper {
    height: 400px;
  }
}
</style>
