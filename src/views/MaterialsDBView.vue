<template>
  <div class="materials-db">
    <h1 class="page-title">Materials Project 数据库</h1>
    <p class="page-desc">查询材料性质、晶体结构和电子结构数据。</p>

    <div class="api-notice">
      <p>⚠️ 此功能需要 Materials Project API 密钥。请在 <a href="https://next.materialsproject.org/" target="_blank">Materials Project</a> 注册获取。</p>
      <div class="api-key-input">
        <input
          v-model="apiKey"
          type="password"
          placeholder="输入 API 密钥..."
          class="api-input"
        >
        <button class="btn btn-primary" @click="saveApiKey">保存密钥</button>
      </div>
    </div>

    <div class="search-section">
      <h2>🔍 搜索材料</h2>
      <div class="search-options">
        <div class="search-tabs">
          <button
            v-for="tab in searchTabs"
            :key="tab.id"
            :class="['tab-btn', { active: activeSearchTab === tab.id }]"
            @click="activeSearchTab = tab.id"
          >
            {{ tab.icon }} {{ tab.name }}
          </button>
        </div>

        <div v-if="activeSearchTab === 'formula'" class="search-form">
          <div class="param-row">
            <label>化学式:</label>
            <input v-model="searchFormula" placeholder="例如: SiO2, GaAs, Fe2O3">
          </div>
          <button class="btn btn-primary" @click="searchByFormula">搜索</button>
        </div>

        <div v-if="activeSearchTab === 'mpid'" class="search-form">
          <div class="param-row">
            <label>Materials Project ID:</label>
            <input v-model="searchMPID" placeholder="例如: mp-149">
          </div>
          <button class="btn btn-primary" @click="searchByMPID">搜索</button>
        </div>

        <div v-if="activeSearchTab === 'elements'" class="search-form">
          <div class="param-row">
            <label>元素:</label>
            <input v-model="searchElements" placeholder="例如: Si, O 或 Si-O">
          </div>
          <button class="btn btn-primary" @click="searchByElements">搜索</button>
        </div>
      </div>
    </div>

    <!-- 搜索结果 -->
    <div v-if="searchResults.length > 0" class="results-section">
      <h2>📋 搜索结果 ({{ searchResults.length }} 个材料)</h2>
      <div class="results-grid">
        <div v-for="result in searchResults" :key="result.material_id" class="result-card" @click="selectMaterial(result)">
          <div class="result-header">
            <span class="mpid">{{ result.material_id }}</span>
            <span class="formula">{{ result.formula }}</span>
          </div>
          <div class="result-info">
            <div class="info-row">
              <span class="label">空间群:</span>
              <span class="value">{{ result.space_group }}</span>
            </div>
            <div class="info-row">
              <span class="label">晶系:</span>
              <span class="value">{{ result.crystal_system }}</span>
            </div>
            <div class="info-row">
              <span class="label">能量:</span>
              <span class="value">{{ result.energy_per_atom?.toFixed(3) }} eV/atom</span>
            </div>
            <div class="info-row" v-if="result.band_gap !== undefined">
              <span class="label">带隙:</span>
              <span class="value">{{ result.band_gap?.toFixed(3) }} eV</span>
            </div>
          </div>
          <div class="result-actions">
            <button class="btn btn-small" @click.stop="downloadPOSCAR(result)">下载结构</button>
            <button class="btn btn-small" @click.stop="viewDetails(result)">查看详情</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 材料详情 -->
    <div v-if="selectedMaterial" class="detail-section">
      <h2>📊 材料详情: {{ selectedMaterial.formula }}</h2>

      <div class="detail-grid">
        <div class="detail-panel">
          <h3>基本性质</h3>
          <div class="property-list">
            <div class="property-item">
              <span class="label">Materials Project ID:</span>
              <span class="value">{{ selectedMaterial.material_id }}</span>
            </div>
            <div class="property-item">
              <span class="label">化学式:</span>
              <span class="value">{{ selectedMaterial.formula }}</span>
            </div>
            <div class="property-item">
              <span class="label">空间群:</span>
              <span class="value">{{ selectedMaterial.space_group }}</span>
            </div>
            <div class="property-item">
              <span class="label">晶系:</span>
              <span class="value">{{ selectedMaterial.crystal_system }}</span>
            </div>
            <div class="property-item">
              <span class="label">密度:</span>
              <span class="value">{{ selectedMaterial.density?.toFixed(3) }} g/cm³</span>
            </div>
            <div class="property-item">
              <span class="label">能量:</span>
              <span class="value">{{ selectedMaterial.energy_per_atom?.toFixed(3) }} eV/atom</span>
            </div>
            <div class="property-item">
              <span class="label">形成能:</span>
              <span class="value">{{ selectedMaterial.formation_energy_per_atom?.toFixed(3) }} eV/atom</span>
            </div>
          </div>
        </div>

        <div class="detail-panel">
          <h3>电子结构</h3>
          <div class="property-list">
            <div class="property-item">
              <span class="label">带隙:</span>
              <span class="value">{{ selectedMaterial.band_gap?.toFixed(3) }} eV</span>
            </div>
            <div class="property-item">
              <span class="label">是否金属:</span>
              <span class="value">{{ selectedMaterial.is_metal ? '是' : '否' }}</span>
            </div>
            <div class="property-item">
              <span class="label">是否半导体:</span>
              <span class="value">{{ selectedMaterial.is_semiconductor ? '是' : '否' }}</span>
            </div>
            <div class="property-item">
              <span class="label">磁矩:</span>
              <span class="value">{{ selectedMaterial.total_magnetization?.toFixed(3) }} μB</span>
            </div>
          </div>
        </div>

        <div class="detail-panel">
          <h3>晶格参数</h3>
          <div class="property-list">
            <div class="property-item">
              <span class="label">a:</span>
              <span class="value">{{ selectedMaterial.lattice?.a?.toFixed(4) }} Å</span>
            </div>
            <div class="property-item">
              <span class="label">b:</span>
              <span class="value">{{ selectedMaterial.lattice?.b?.toFixed(4) }} Å</span>
            </div>
            <div class="property-item">
              <span class="label">c:</span>
              <span class="value">{{ selectedMaterial.lattice?.c?.toFixed(4) }} Å</span>
            </div>
            <div class="property-item">
              <span class="label">α:</span>
              <span class="value">{{ selectedMaterial.lattice?.alpha?.toFixed(2) }}°</span>
            </div>
            <div class="property-item">
              <span class="label">β:</span>
              <span class="value">{{ selectedMaterial.lattice?.beta?.toFixed(2) }}°</span>
            </div>
            <div class="property-item">
              <span class="label">γ:</span>
              <span class="value">{{ selectedMaterial.lattice?.gamma?.toFixed(2) }}°</span>
            </div>
          </div>
        </div>
      </div>

      <div class="detail-actions">
        <button class="btn btn-primary" @click="downloadPOSCAR(selectedMaterial)">📄 下载 POSCAR</button>
        <button class="btn btn-secondary" @click="viewInStructureViewer">🧬 在结构查看器中打开</button>
        <button class="btn btn-secondary" @click="exportData">📊 导出数据</button>
      </div>
    </div>

    <!-- 加载状态 -->
    <div v-if="isLoading" class="loading">
      <div class="spinner"></div>
      <p>正在查询 Materials Project...</p>
    </div>

    <!-- 错误信息 -->
    <div v-if="errorMessage" class="error-message">
      <p>❌ {{ errorMessage }}</p>
      <button class="btn btn-secondary" @click="errorMessage = ''">关闭</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MaterialsDBView',
  data() {
    return {
      apiKey: '',
      activeSearchTab: 'formula',
      searchTabs: [
        { id: 'formula', name: '化学式', icon: '📝' },
        { id: 'mpid', name: 'MP ID', icon: '🔢' },
        { id: 'elements', name: '元素', icon: '⚛️' }
      ],
      searchFormula: '',
      searchMPID: '',
      searchElements: '',
      searchResults: [],
      selectedMaterial: null,
      isLoading: false,
      errorMessage: ''
    }
  },
  methods: {
    saveApiKey() {
      if (this.apiKey) {
        localStorage.setItem('mp_api_key', this.apiKey);
        alert('API 密钥已保存!');
      }
    },
    async searchByFormula() {
      if (!this.apiKey) {
        this.errorMessage = '请先输入 API 密钥';
        return;
      }

      this.isLoading = true;
      this.errorMessage = '';

      try {
        const response = await fetch(
          `https://api.materialsproject.org/materials/summary?formula=${this.searchFormula}&fields=material_id,formula,space_group,crystal_system,energy_per_atom,band_gap,formation_energy_per_atom,density,is_metal,is_semiconductor,lattice`,
          {
            headers: {
              'X-API-KEY': this.apiKey,
              'Content-Type': 'application/json'
            }
          }
        );

        if (!response.ok) {
          throw new Error(`API 请求失败: ${response.status}`);
        }

        const data = await response.json();
        this.searchResults = data.data || [];
      } catch (error) {
        this.errorMessage = `搜索失败: ${error.message}`;
      } finally {
        this.isLoading = false;
      }
    },
    async searchByMPID() {
      if (!this.apiKey) {
        this.errorMessage = '请先输入 API 密钥';
        return;
      }

      this.isLoading = true;
      this.errorMessage = '';

      try {
        const response = await fetch(
          `https://api.materialsproject.org/materials/summary?material_ids=${this.searchMPID}&fields=material_id,formula,space_group,crystal_system,energy_per_atom,band_gap,formation_energy_per_atom,density,is_metal,is_semiconductor,lattice,total_magnetization`,
          {
            headers: {
              'X-API-KEY': this.apiKey,
              'Content-Type': 'application/json'
            }
          }
        );

        if (!response.ok) {
          throw new Error(`API 请求失败: ${response.status}`);
        }

        const data = await response.json();
        this.searchResults = data.data || [];
      } catch (error) {
        this.errorMessage = `搜索失败: ${error.message}`;
      } finally {
        this.isLoading = false;
      }
    },
    async searchByElements() {
      if (!this.apiKey) {
        this.errorMessage = '请先输入 API 密钥';
        return;
      }

      this.isLoading = true;
      this.errorMessage = '';

      try {
        const elements = this.searchElements.split('-').join(',');
        const response = await fetch(
          `https://api.materialsproject.org/materials/summary?elements=${elements}&fields=material_id,formula,space_group,crystal_system,energy_per_atom,band_gap,formation_energy_per_atom,density,is_metal,is_semiconductor,lattice`,
          {
            headers: {
              'X-API-KEY': this.apiKey,
              'Content-Type': 'application/json'
            }
          }
        );

        if (!response.ok) {
          throw new Error(`API 请求失败: ${response.status}`);
        }

        const data = await response.json();
        this.searchResults = data.data || [];
      } catch (error) {
        this.errorMessage = `搜索失败: ${error.message}`;
      } finally {
        this.isLoading = false;
      }
    },
    selectMaterial(material) {
      this.selectedMaterial = material;
    },
    viewDetails(material) {
      this.selectedMaterial = material;
    },
    async downloadPOSCAR(material) {
      if (!this.apiKey) {
        this.errorMessage = '请先输入 API 密钥';
        return;
      }

      try {
        const response = await fetch(
          `https://api.materialsproject.org/materials/structure?material_ids=${material.material_id}`,
          {
            headers: {
              'X-API-KEY': this.apiKey,
              'Content-Type': 'application/json'
            }
          }
        );

        if (!response.ok) {
          throw new Error(`获取结构失败: ${response.status}`);
        }

        const data = await response.json();
        const structure = data.data?.[0];

        if (structure) {
          const poscar = this.generatePoscar(structure, material.formula);
          const blob = new Blob([poscar], { type: 'text/plain' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `POSCAR_${material.material_id}`;
          a.click();
          URL.revokeObjectURL(url);
        }
      } catch (error) {
        this.errorMessage = `下载失败: ${error.message}`;
      }
    },
    generatePoscar(structure, formula) {
      let poscar = `${formula} - ${structure.material_id}\n`;
      poscar += `1.0\n`;

      const lattice = structure.lattice;
      poscar += `${lattice.a} 0 0\n`;
      poscar += `0 ${lattice.b} 0\n`;
      poscar += `0 0 ${lattice.c}\n`;

      const elements = [...new Set(structure.sites.map(s => s.species[0].element))];
      poscar += `${elements.join(' ')}\n`;

      elements.forEach(el => {
        const count = structure.sites.filter(s => s.species[0].element === el).length;
        poscar += `${count} `;
      });
      poscar += '\n';

      poscar += 'Direct\n';

      structure.sites.forEach(site => {
        const frac = site.frac_coords;
        poscar += `${frac[0]} ${frac[1]} ${frac[2]}\n`;
      });

      return poscar;
    },
    viewInStructureViewer() {
      if (this.selectedMaterial) {
        this.$router.push('/tools/structure-viewer');
      }
    },
    exportData() {
      if (this.selectedMaterial) {
        const data = JSON.stringify(this.selectedMaterial, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `material_${this.selectedMaterial.material_id}.json`;
        a.click();
        URL.revokeObjectURL(url);
      }
    }
  },
  mounted() {
    const savedApiKey = localStorage.getItem('mp_api_key');
    if (savedApiKey) {
      this.apiKey = savedApiKey;
    }
  }
}
</script>

<style scoped>
.materials-db {
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

.api-notice {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid var(--border);
  margin-bottom: 30px;
}

.api-notice p {
  margin-bottom: 15px;
  color: var(--text-secondary);
}

.api-notice a {
  color: var(--primary);
  text-decoration: none;
}

.api-key-input {
  display: flex;
  gap: 10px;
}

.api-input {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 14px;
}

.search-section {
  margin-bottom: 40px;
}

.search-section h2 {
  color: var(--primary);
  margin-bottom: 20px;
}

.search-tabs {
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
  font-size: 14px;
  transition: all 0.3s;
}

.tab-btn.active {
  background: var(--primary);
  color: white;
}

.search-form {
  display: flex;
  gap: 15px;
  align-items: flex-end;
}

.param-row {
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
}

.param-row label {
  color: var(--text-secondary);
  font-size: 14px;
}

.param-row input {
  padding: 10px 15px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 14px;
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
}

.results-section {
  margin-bottom: 40px;
}

.results-section h2 {
  color: var(--primary);
  margin-bottom: 20px;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.result-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.result-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.mpid {
  background: var(--primary);
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.formula {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
}

.result-info {
  margin-bottom: 15px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
}

.info-row .label {
  color: var(--text-secondary);
}

.info-row .value {
  color: var(--text-primary);
  font-weight: 500;
}

.result-actions {
  display: flex;
  gap: 10px;
}

.detail-section {
  margin-bottom: 40px;
}

.detail-section h2 {
  color: var(--primary);
  margin-bottom: 20px;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.detail-panel {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
}

.detail-panel h3 {
  color: var(--primary);
  margin-bottom: 15px;
  font-size: 16px;
}

.property-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.property-item {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.property-item .label {
  color: var(--text-secondary);
}

.property-item .value {
  color: var(--text-primary);
  font-weight: 500;
}

.detail-actions {
  display: flex;
  gap: 15px;
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--border);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 15px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error-message {
  background: var(--red-dim);
  color: var(--red);
  padding: 20px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.error-message p {
  margin: 0;
}

@media (max-width: 768px) {
  .search-form {
    flex-direction: column;
  }

  .results-grid {
    grid-template-columns: 1fr;
  }

  .detail-grid {
    grid-template-columns: 1fr;
  }

  .detail-actions {
    flex-direction: column;
  }
}
</style>
