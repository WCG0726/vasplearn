<template>
  <div class="input-generator">
    <h1 class="page-title">VASP 输入文件生成器</h1>
    <p class="page-desc">交互式生成 VASP 计算所需的输入文件，支持参数校验和实时预览。</p>

    <div class="generator-tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="['tab-btn', { active: activeTab === tab.id }]"
        @click="activeTab = tab.id"
      >
        {{ tab.icon }} {{ tab.name }}
      </button>
    </div>

    <div class="generator-content">
      <!-- INCAR 生成器 -->
      <div v-if="activeTab === 'incar'" class="generator-panel">
        <div class="panel-left">
          <h3>INCAR 参数配置</h3>

          <div class="param-group">
            <h4>基本参数</h4>
            <div class="param-row">
              <label>计算类型:</label>
              <select v-model="incar.calculation">
                <option value="single">单点计算 (NSW=0)</option>
                <option value="relax">结构优化 (NSW=50)</option>
                <option value="cell">晶胞优化 (NSW=50, ISIF=3)</option>
                <option value="md">分子动力学 (NSW=100)</option>
              </select>
            </div>
            <div class="param-row">
              <label>交换关联泛函:</label>
              <select v-model="incar.functional">
                <option value="PBE">PBE</option>
                <option value="LDA">LDA</option>
                <option value="PBE+U">PBE+U</option>
                <option value="HSE06">HSE06</option>
              </select>
            </div>
            <div class="param-row">
              <label>ENCUT (eV):</label>
              <input type="number" v-model.number="incar.encut" min="100" max="1000">
            </div>
          </div>

          <div class="param-group">
            <h4>收敛参数</h4>
            <div class="param-row">
              <label>电子步:</label>
              <input type="number" v-model.number="incar.nelm" min="1" max="500">
            </div>
            <div class="param-row">
              <label>EDIFF:</label>
              <select v-model="incar.ediff">
                <option value="1E-4">1E-4 (快速)</option>
                <option value="1E-5">1E-5 (标准)</option>
                <option value="1E-6">1E-6 (精确)</option>
                <option value="1E-7">1E-7 (高精度)</option>
              </select>
            </div>
            <div class="param-row">
              <label>EDIFFG:</label>
              <select v-model="incar.ediffg">
                <option value="-0.01">-0.01 (标准)</option>
                <option value="-0.001">-0.001 (精确)</option>
                <option value="-0.02">-0.02 (快速)</option>
              </select>
            </div>
          </div>

          <div class="param-group">
            <h4>展宽方法</h4>
            <div class="param-row">
              <label>ISMEAR:</label>
              <select v-model.number="incar.ismear">
                <option value="-5">-5 (四面体法，适合能带)</option>
                <option value="0">0 (高斯展宽)</option>
                <option value="1">1 (Methfessel-Paxton)</option>
                <option value="-1">-1 (费米展宽)</option>
              </select>
            </div>
            <div class="param-row">
              <label>SIGMA (eV):</label>
              <input type="number" v-model.number="incar.sigma" min="0.01" max="0.5" step="0.01">
            </div>
          </div>

          <div class="param-group">
            <h4>磁性设置</h4>
            <div class="param-row">
              <label>自旋极化:</label>
              <select v-model="incar.ispin">
                <option value="1">非自旋极化</option>
                <option value="2">自旋极化</option>
              </select>
            </div>
            <div class="param-row" v-if="incar.ispin === '2'">
              <label>初始磁矩:</label>
              <input type="number" v-model.number="incar.magmom" min="-10" max="10" step="0.1">
            </div>
          </div>

          <div class="param-group">
            <h4>其他选项</h4>
            <div class="param-row">
              <label>态密度计算:</label>
              <select v-model="incar.lorbit">
                <option value="0">不计算</option>
                <option value="10">PDOS (投影态密度)</option>
                <option value="11">PDOS + 相位</option>
                <option value="2">COHP (晶体轨道哈密顿布居)</option>
              </select>
            </div>
            <div class="param-row">
              <label>电荷密度:</label>
              <select v-model="incar.lcharge">
                <option value=".FALSE.">不输出</option>
                <option value=".TRUE.">输出 CHGCAR</option>
              </select>
            </div>
            <div class="param-row">
              <label>波函数:</label>
              <select v-model="incar.lwave">
                <option value=".FALSE.">不输出</option>
                <option value=".TRUE.">输出 WAVECAR</option>
              </select>
            </div>
          </div>
        </div>

        <div class="panel-right">
          <h3>INCAR 预览</h3>
          <div class="code-preview">
            <pre>{{ generateIncar() }}</pre>
          </div>
          <div class="preview-actions">
            <button class="btn btn-primary" @click="copyToClipboard('incar')">复制 INCAR</button>
            <button class="btn btn-secondary" @click="downloadFile('INCAR', generateIncar())">下载 INCAR</button>
          </div>
          <div class="validation-messages" v-if="validationMessages.length > 0">
            <div class="validation-item" v-for="(msg, index) in validationMessages" :key="index">
              <span :class="['severity', msg.type]">{{ msg.type === 'error' ? '❌' : '⚠️' }}</span>
              {{ msg.text }}
            </div>
          </div>
        </div>
      </div>

      <!-- POSCAR 生成器 -->
      <div v-if="activeTab === 'poscar'" class="generator-panel">
        <div class="panel-left">
          <h3>POSCAR 结构配置</h3>

          <div class="param-group">
            <h4>预设结构</h4>
            <div class="param-row">
              <label>选择结构:</label>
              <select v-model="poscar.preset" @change="loadPreset">
                <option value="custom">自定义结构</option>
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

          <div class="param-group">
            <h4>晶格常数</h4>
            <div class="param-row">
              <label>缩放因子:</label>
              <input type="number" v-model.number="poscar.scale" min="0.1" max="100" step="0.1">
            </div>
            <div class="param-row">
              <label>a (Å):</label>
              <input type="number" v-model.number="poscar.a" min="0.1" max="100" step="0.01">
            </div>
            <div class="param-row">
              <label>b (Å):</label>
              <input type="number" v-model.number="poscar.b" min="0.1" max="100" step="0.01">
            </div>
            <div class="param-row">
              <label>c (Å):</label>
              <input type="number" v-model.number="poscar.c" min="0.1" max="100" step="0.01">
            </div>
            <div class="param-row">
              <label>α (°):</label>
              <input type="number" v-model.number="poscar.alpha" min="1" max="179" step="0.1">
            </div>
            <div class="param-row">
              <label>β (°):</label>
              <input type="number" v-model.number="poscar.beta" min="1" max="179" step="0.1">
            </div>
            <div class="param-row">
              <label>γ (°):</label>
              <input type="number" v-model.number="poscar.gamma" min="1" max="179" step="0.1">
            </div>
          </div>

          <div class="param-group">
            <h4>原子坐标</h4>
            <div class="param-row">
              <label>坐标类型:</label>
              <select v-model="poscar.cartesian">
                <option :value="true">笛卡尔坐标 (Cartesian)</option>
                <option :value="false">分数坐标 (Direct)</option>
              </select>
            </div>
            <div class="atoms-list">
              <div v-for="(atom, index) in poscar.atoms" :key="index" class="atom-row">
                <input v-model="atom.element" placeholder="元素符号" class="element-input">
                <input v-model.number="atom.x" placeholder="x" type="number" step="0.001">
                <input v-model.number="atom.y" placeholder="y" type="number" step="0.001">
                <input v-model.number="atom.z" placeholder="z" type="number" step="0.001">
                <button class="btn-icon" @click="removeAtom(index)">×</button>
              </div>
              <button class="btn btn-small" @click="addAtom">+ 添加原子</button>
            </div>
          </div>
        </div>

        <div class="panel-right">
          <h3>POSCAR 预览</h3>
          <div class="code-preview">
            <pre>{{ generatePoscar() }}</pre>
          </div>
          <div class="preview-actions">
            <button class="btn btn-primary" @click="copyToClipboard('poscar')">复制 POSCAR</button>
            <button class="btn btn-secondary" @click="downloadFile('POSCAR', generatePoscar())">下载 POSCAR</button>
          </div>
        </div>
      </div>

      <!-- KPOINTS 生成器 -->
      <div v-if="activeTab === 'kpoints'" class="generator-panel">
        <div class="panel-left">
          <h3>K点网格配置</h3>

          <div class="param-group">
            <h4>计算类型</h4>
            <div class="param-row">
              <label>自动网格:</label>
              <select v-model="kpoints.mode">
                <option value="gamma">Gamma 点 (Monkhorst-Pack)</option>
                <option value="monkhorst">Monkhorst-Pack</option>
                <option value="auto">自动 (推荐)</option>
                <option value="line">高对称点路径</option>
              </select>
            </div>
          </div>

          <div class="param-group" v-if="kpoints.mode !== 'line'">
            <h4>K点网格</h4>
            <div class="param-row">
              <label>Kx:</label>
              <input type="number" v-model.number="kpoints.kx" min="1" max="30">
            </div>
            <div class="param-row">
              <label>Ky:</label>
              <input type="number" v-model.number="kpoints.ky" min="1" max="30">
            </div>
            <div class="param-row">
              <label>Kz:</label>
              <input type="number" v-model.number="kpoints.kz" min="1" max="30">
            </div>
            <div class="param-row">
              <label>偏移量:</label>
              <select v-model="kpoints.shift">
                <option value="0 0 0">无偏移 (Gamma 点)</option>
                <option value="0.5 0.5 0.5">1/2 偏移</option>
                <option value="0.5 0.0 0.0">1/2 0 0 偏移</option>
              </select>
            </div>
          </div>

          <div class="param-group" v-if="kpoints.mode === 'line'">
            <h4>高对称点路径</h4>
            <div class="param-row">
              <label>选择晶系:</label>
              <select v-model="kpoints.lattice">
                <option value="cubic">立方晶系</option>
                <option value="fcc">面心立方</option>
                <option value="bcc">体心立方</option>
                <option value="hex">六方晶系</option>
                <option value="orthorhombic">正交晶系</option>
              </select>
            </div>
            <div class="symmetry-points">
              <div v-for="(point, index) in kpoints.path" :key="index" class="point-row">
                <input v-model="point.label" placeholder="标签" class="point-label">
                <input v-model.number="point.x" placeholder="x" type="number" step="0.01">
                <input v-model.number="point.y" placeholder="y" type="number" step="0.01">
                <input v-model.number="point.z" placeholder="z" type="number" step="0.01">
                <button class="btn-icon" @click="removePoint(index)">×</button>
              </div>
              <button class="btn btn-small" @click="addPoint">+ 添加点</button>
            </div>
          </div>

          <div class="param-group">
            <h4>快速推荐</h4>
            <p class="hint">根据晶格常数推荐K点网格:</p>
            <div class="recommendation">
              <div v-if="kpoints.recommendation" class="rec-item">
                <strong>推荐 K点:</strong> {{ kpoints.recommendation }}
              </div>
            </div>
          </div>
        </div>

        <div class="panel-right">
          <h3>KPOINTS 预览</h3>
          <div class="code-preview">
            <pre>{{ generateKpoints() }}</pre>
          </div>
          <div class="preview-actions">
            <button class="btn btn-primary" @click="copyToClipboard('kpoints')">复制 KPOINTS</button>
            <button class="btn btn-secondary" @click="downloadFile('KPOINTS', generateKpoints())">下载 KPOINTS</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputGeneratorView',
  data() {
    return {
      activeTab: 'incar',
      tabs: [
        { id: 'incar', name: 'INCAR', icon: '⚙️' },
        { id: 'poscar', name: 'POSCAR', icon: '⚛️' },
        { id: 'kpoints', name: 'KPOINTS', icon: '🔲' }
      ],
      incar: {
        calculation: 'relax',
        functional: 'PBE',
        encut: 520,
        nelm: 60,
        ediff: '1E-5',
        ediffg: '-0.01',
        ismear: 0,
        sigma: 0.05,
        ispin: '1',
        magmom: 1.0,
        lorbit: '0',
        lcharge: '.FALSE.',
        lwave: '.FALSE.'
      },
      poscar: {
        preset: 'si-diamond',
        scale: 1.0,
        a: 5.43,
        b: 5.43,
        c: 5.43,
        alpha: 90,
        beta: 90,
        gamma: 90,
        cartesian: false,
        atoms: [
          { element: 'Si', x: 0.0, y: 0.0, z: 0.0 },
          { element: 'Si', x: 0.25, y: 0.25, z: 0.25 }
        ]
      },
      kpoints: {
        mode: 'gamma',
        kx: 8,
        ky: 8,
        kz: 8,
        shift: '0 0 0',
        lattice: 'cubic',
        path: [
          { label: 'G', x: 0, y: 0, z: 0 },
          { label: 'X', x: 0.5, y: 0, z: 0 },
          { label: 'M', x: 0.5, y: 0.5, z: 0 },
          { label: 'G', x: 0, y: 0, z: 0 }
        ],
        recommendation: null
      },
      validationMessages: []
    }
  },
  methods: {
    generateIncar() {
      let incar = '';
      incar += `SYSTEM = VASP Calculation\n`;
      incar += `PREC = Accurate\n`;
      incar += `ENCUT = ${this.incar.encut}\n`;
      incar += `EDIFF = ${this.incar.ediff}\n`;

      if (this.incar.calculation === 'relax') {
        incar += `IBRION = 2\n`;
        incar += `NSW = 50\n`;
        incar += `EDIFFG = ${this.incar.ediffg}\n`;
      } else if (this.incar.calculation === 'cell') {
        incar += `IBRION = 2\n`;
        incar += `NSW = 50\n`;
        incar += `ISIF = 3\n`;
        incar += `EDIFFG = ${this.incar.ediffg}\n`;
      } else if (this.incar.calculation === 'md') {
        incar += `IBRION = 0\n`;
        incar += `NSW = 100\n`;
        incar += `SMASS = 0\n`;
        incar += `MDALGO = 2\n`;
      } else {
        incar += `NSW = 0\n`;
      }

      incar += `NELM = ${this.incar.nelm}\n`;
      incar += `ISMEAR = ${this.incar.ismear}\n`;
      incar += `SIGMA = ${this.incar.sigma}\n`;
      incar += `ISPIN = ${this.incar.ispin}\n`;

      if (this.incar.ispin === '2') {
        incar += `MAGMOM = ${this.incar.magmom}\n`;
      }

      incar += `LORBIT = ${this.incar.lorbit}\n`;
      incar += `LCHARG = ${this.incar.lcharge}\n`;
      incar += `LWAVE = ${this.incar.lwave}\n`;
      incar += `LREAL = Auto\n`;
      incar += `ALGO = Normal\n`;

      this.validateIncar();
      return incar;
    },
    generatePoscar() {
      let poscar = '';
      poscar += `${this.poscar.preset === 'custom' ? 'Custom Structure' : this.poscar.preset}\n`;
      poscar += `${this.poscar.scale}\n`;

      // 晶格矢量 (简化为立方/正交)
      poscar += `${this.poscar.a} 0 0\n`;
      poscar += `0 ${this.poscar.b} 0\n`;
      poscar += `0 0 ${this.poscar.c}\n`;

      // 元素和数量
      const elements = [...new Set(this.poscar.atoms.map(a => a.element))];
      elements.forEach(el => {
        poscar += `${el} `;
      });
      poscar += '\n';

      elements.forEach(el => {
        const count = this.poscar.atoms.filter(a => a.element === el).length;
        poscar += `${count} `;
      });
      poscar += '\n';

      poscar += this.poscar.cartesian ? 'Cartesian\n' : 'Direct\n';

      this.poscar.atoms.forEach(atom => {
        poscar += `${atom.x} ${atom.y} ${atom.z}\n`;
      });

      return poscar;
    },
    generateKpoints() {
      if (this.kpoints.mode === 'line') {
        let kpoints = `Line-mode\n`;
        kpoints += `Reciprocal\n`;
        kpoints += `${this.kpoints.path[0].x} ${this.kpoints.path[0].y} ${this.kpoints.path[0].z} ! ${this.kpoints.path[0].label}\n`;
        for (let i = 1; i < this.kpoints.path.length; i++) {
          kpoints += `${this.kpoints.path[i].x} ${this.kpoints.path[i].y} ${this.kpoints.path[i].z} ! ${this.kpoints.path[i].label}\n`;
        }
        return kpoints;
      } else {
        return `Automatic\n0\n${this.kpoints.mode === 'gamma' ? 'Gamma' : 'Monkhorst-Pack'}\n${this.kpoints.kx} ${this.kpoints.ky} ${this.kpoints.kz}\n${this.kpoints.shift}\n`;
      }
    },
    validateIncar() {
      this.validationMessages = [];

      if (this.incar.encut < 400) {
        this.validationMessages.push({ type: 'warning', text: 'ENCUT < 400 eV 可能导致精度不足' });
      }

      if (this.incar.ismear === 0 && this.incar.sigma > 0.2) {
        this.validationMessages.push({ type: 'warning', text: '高斯展宽时 SIGMA > 0.2 eV 可能影响精度' });
      }

      if (this.incar.calculation !== 'single' && this.incar.ediffg === '-0.01' && this.incar.encut < 500) {
        this.validationMessages.push({ type: 'warning', text: '结构优化建议 ENCUT >= 500 eV' });
      }

      if (this.incar.ispin === '2' && !this.incar.magmom) {
        this.validationMessages.push({ type: 'error', text: '自旋极化计算需要设置初始磁矩' });
      }
    },
    loadPreset() {
      const presets = {
        'si-diamond': { a: 5.43, b: 5.43, c: 5.43, atoms: [{ element: 'Si', x: 0.0, y: 0.0, z: 0.0 }, { element: 'Si', x: 0.25, y: 0.25, z: 0.25 }] },
        'ga-as': { a: 5.65, b: 5.65, c: 5.65, atoms: [{ element: 'Ga', x: 0.0, y: 0.0, z: 0.0 }, { element: 'As', x: 0.25, y: 0.25, z: 0.25 }] },
        'na-cl': { a: 5.64, b: 5.64, c: 5.64, atoms: [{ element: 'Na', x: 0.0, y: 0.0, z: 0.0 }, { element: 'Cl', x: 0.5, y: 0.5, z: 0.5 }] },
        'ti-hex': { a: 2.95, b: 2.95, c: 4.68, alpha: 90, beta: 90, gamma: 120, atoms: [{ element: 'Ti', x: 0.0, y: 0.0, z: 0.0 }, { element: 'Ti', x: 0.333, y: 0.667, z: 0.5 }] },
        'al-fcc': { a: 4.05, b: 4.05, c: 4.05, atoms: [{ element: 'Al', x: 0.0, y: 0.0, z: 0.0 }, { element: 'Al', x: 0.5, y: 0.5, z: 0.0 }, { element: 'Al', x: 0.5, y: 0.0, z: 0.5 }, { element: 'Al', x: 0.0, y: 0.5, z: 0.5 }] },
        'fe-bcc': { a: 2.87, b: 2.87, c: 2.87, atoms: [{ element: 'Fe', x: 0.0, y: 0.0, z: 0.0 }, { element: 'Fe', x: 0.5, y: 0.5, z: 0.5 }] },
        'graphene': { a: 2.46, b: 2.46, c: 20.0, alpha: 90, beta: 90, gamma: 120, atoms: [{ element: 'C', x: 0.0, y: 0.0, z: 0.0 }, { element: 'C', x: 0.333, y: 0.667, z: 0.0 }] },
        'mos2': { a: 3.16, b: 3.16, c: 20.0, alpha: 90, beta: 90, gamma: 120, atoms: [{ element: 'Mo', x: 0.0, y: 0.0, z: 0.0 }, { element: 'S', x: 0.333, y: 0.667, z: 0.1 }, { element: 'S', x: 0.333, y: 0.667, z: -0.1 }] }
      };

      if (this.poscar.preset !== 'custom' && presets[this.poscar.preset]) {
        const preset = presets[this.poscar.preset];
        this.poscar.a = preset.a;
        this.poscar.b = preset.b;
        this.poscar.c = preset.c;
        this.poscar.atoms = JSON.parse(JSON.stringify(preset.atoms));
      }
    },
    addAtom() {
      this.poscar.atoms.push({ element: 'Si', x: 0.0, y: 0.0, z: 0.0 });
    },
    removeAtom(index) {
      this.poscar.atoms.splice(index, 1);
    },
    addPoint() {
      this.kpoints.path.push({ label: 'K', x: 0, y: 0, z: 0 });
    },
    removePoint(index) {
      this.kpoints.path.splice(index, 1);
    },
    copyToClipboard(type) {
      let content = '';
      if (type === 'incar') content = this.generateIncar();
      else if (type === 'poscar') content = this.generatePoscar();
      else if (type === 'kpoints') content = this.generateKpoints();

      navigator.clipboard.writeText(content).then(() => {
        alert('已复制到剪贴板!');
      });
    },
    downloadFile(filename, content) {
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    },
    calculateKpointRecommendation() {
      const avgLattice = (this.poscar.a + this.poscar.b + this.poscar.c) / 3;
      if (avgLattice > 10) {
        this.kpoints.recommendation = '大晶胞: 2×2×2 或 3×3×3';
      } else if (avgLattice > 5) {
        this.kpoints.recommendation = '中等晶胞: 4×4×4 或 6×6×6';
      } else {
        this.kpoints.recommendation = '小晶胞: 8×8×8 或 12×12×12';
      }
    }
  },
  watch: {
    'poscar.a': 'calculateKpointRecommendation',
    'poscar.b': 'calculateKpointRecommendation',
    'poscar.c': 'calculateKpointRecommendation'
  }
}
</script>

<style scoped>
.input-generator {
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

.generator-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  border-bottom: 2px solid var(--border);
  padding-bottom: 10px;
}

.tab-btn {
  padding: 10px 20px;
  border: none;
  background: var(--bg-secondary);
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}

.tab-btn.active {
  background: var(--primary);
  color: white;
}

.generator-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
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

.param-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.param-row label {
  min-width: 120px;
  color: var(--text-secondary);
}

.param-row input, .param-row select {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 14px;
}

.atoms-list, .symmetry-points {
  margin-top: 15px;
}

.atom-row, .point-row {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}

.element-input {
  width: 80px;
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

.code-preview {
  background: #1a1a2e;
  color: #e0e0e0;
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
}

.preview-actions {
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

.btn-small {
  padding: 6px 12px;
  font-size: 12px;
  background: var(--accent);
  color: white;
}

.validation-messages {
  margin-top: 20px;
  padding: 15px;
  background: var(--bg-tertiary);
  border-radius: 8px;
}

.validation-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  font-size: 14px;
}

.severity {
  font-size: 16px;
}

.severity.error {
  color: var(--danger);
}

.severity.warning {
  color: var(--warning);
}

.hint {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 10px;
}

.recommendation {
  padding: 10px;
  background: var(--bg-primary);
  border-radius: 6px;
}

.rec-item {
  color: var(--primary);
}

@media (max-width: 768px) {
  .generator-panel {
    grid-template-columns: 1fr;
  }
}
</style>
