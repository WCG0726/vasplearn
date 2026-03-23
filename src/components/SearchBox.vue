<template>
  <div class="search-container">
    <div class="search-box" :class="{ active: isFocused }">
      <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
      <input
        ref="searchInput"
        v-model="query"
        type="text"
        placeholder="搜索内容... (Ctrl+K)"
        @focus="isFocused = true"
        @blur="handleBlur"
        @input="search"
        @keydown.escape="close"
        @keydown.enter="navigateToFirst"
      />
      <kbd v-if="!isFocused" class="shortcut">Ctrl+K</kbd>
      <button v-else class="close-btn" @click="close">×</button>
    </div>
    <div v-if="showResults && results.length > 0" class="search-results">
      <div
        v-for="(result, index) in results"
        :key="index"
        class="search-result-item"
        :class="{ active: index === selectedIndex }"
        @click="navigateTo(result)"
        @mouseenter="selectedIndex = index"
      >
        <div class="result-icon">{{ result.icon }}</div>
        <div class="result-content">
          <div class="result-title">{{ result.title }}</div>
          <div class="result-path">{{ result.path }}</div>
        </div>
      </div>
    </div>
    <div v-if="showResults && query && results.length === 0" class="search-results">
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <div>未找到 "{{ query }}" 的相关内容</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data() {
    return {
      query: '',
      isFocused: false,
      showResults: false,
      selectedIndex: 0,
      results: []
    }
  },
  computed: {
    searchIndex() {
      return [
        { title: 'DFT 基本原理', path: '/theory', icon: '📐', keywords: 'dft 密度泛函 theory 理论 hohenberg kohn' },
        { title: '交换关联泛函', path: '/theory', icon: '📐', keywords: 'lda gga pbe hse 泛函 functional' },
        { title: '赝势与基组', path: '/theory', icon: '📐', keywords: '赝势 paw pseudopotential 基组 plane wave' },
        { title: 'K 点采样', path: '/theory', icon: '📐', keywords: 'kpoint k点 布里渊区 brillouin mesh' },
        { title: 'SCF 迭代', path: '/theory', icon: '📐', keywords: 'scf 自洽场 迭代 self consistent' },
        { title: 'INCAR 文件', path: '/input', icon: '📁', keywords: 'incar 参数 设置 encut ediff ibrion isif' },
        { title: 'POSCAR 文件', path: '/input', icon: '📁', keywords: 'poscar 结构 晶格 lattice 坐标 direct cartesian' },
        { title: 'KPOINTS 文件', path: '/input', icon: '📁', keywords: 'kpoints 网格 mesh gamma monkhorst' },
        { title: '结构优化', path: '/tasks', icon: '📊', keywords: 'relax 优化 弛豫 ion optimization' },
        { title: '态密度 DOS', path: '/tasks', icon: '📊', keywords: 'dos 密度 states density of states' },
        { title: '能带结构', path: '/tasks', icon: '📊', keywords: 'band 能带 bandstructure high symmetry' },
        { title: '表面计算', path: '/tasks', icon: '🧊', keywords: 'surface 表面 slab 模型 adsorption 吸附' },
        { title: '缺陷计算', path: '/tasks', icon: '💎', keywords: 'defect 缺陷 vacancy 空位 interstitial 间隙' },
        { title: '声子计算', path: '/tasks', icon: '🔊', keywords: 'phonon 声子 phonopy 振动 frequency 频率' },
        { title: '形成能计算', path: '/tasks', icon: '🧪', keywords: 'formation 形成能 energy thermodynamics 热力学' },
        { title: '吸附能计算', path: '/tasks', icon: '🧲', keywords: 'adsorption 吸附 binding 结合 energy 能量' },
        { title: '输出文件解读', path: '/output', icon: '📋', keywords: 'outcar oszicar contcar 输出 output 结果' },
        { title: '收敛性测试', path: '/output', icon: '🎯', keywords: 'convergence 收敛 encut kpoint 测试 test' },
        { title: 'SCF 不收敛', path: '/errors', icon: '🚨', keywords: 'scf 不收敛 convergence 失败 error 错误' },
        { title: 'DENTET 错误', path: '/errors', icon: '🚨', keywords: 'dentet nbands 能带 band 错误 error' },
        { title: 'ZBRENT 错误', path: '/errors', icon: '🚨', keywords: 'zbrent 线搜索 搜索失败 error' },
        { title: '内存不足', path: '/errors', icon: '🚨', keywords: 'memory 内存 oom out of killed' },
        { title: 'VESTA 工具', path: '/tools', icon: '🛠️', keywords: 'vesta 可视化 visualization 结构 structure' },
        { title: 'VASPKIT 工具', path: '/tools', icon: '🛠️', keywords: 'vaspkit 后处理 post process 处理工具' },
        { title: 'pymatgen', path: '/tools', icon: '🛠️', keywords: 'pymatgen python 材料 material 分析 analysis' },
        { title: 'phonopy', path: '/tools', icon: '🛠️', keywords: 'phonopy 声子 phonon 振动 vibration' },
        { title: 'ENCUT 计算器', path: '/tools/calculator', icon: '🔧', keywords: 'encut 截断能 cutoff 计算器 calculator' },
        { title: 'K 点生成器', path: '/tools/calculator', icon: '🔧', keywords: 'kpoint k点 生成器 generator 网格 mesh' }
      ]
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
  },
  methods: {
    handleKeydown(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        this.$refs.searchInput.focus()
      }
    },
    search() {
      if (!this.query.trim()) {
        this.results = []
        this.showResults = false
        return
      }
      
      const queryLower = this.query.toLowerCase()
      this.results = this.searchIndex.filter(item => {
        return item.title.toLowerCase().includes(queryLower) ||
               item.keywords.toLowerCase().includes(queryLower)
      }).slice(0, 8)
      
      this.showResults = true
      this.selectedIndex = 0
    },
    navigateTo(result) {
      this.$router.push(result.path)
      this.close()
    },
    navigateToFirst() {
      if (this.results.length > 0) {
        this.navigateTo(this.results[this.selectedIndex])
      }
    },
    handleBlur() {
      setTimeout(() => {
        this.isFocused = false
        this.showResults = false
      }, 200)
    },
    close() {
      this.query = ''
      this.showResults = false
      this.$refs.searchInput.blur()
    }
  }
}
</script>

<style scoped>
.search-container {
  position: relative;
  width: 280px;
}

.search-box {
  display: flex;
  align-items: center;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0 12px;
  transition: all .2s;
}

.search-box.active {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px var(--accent-glow);
}

.search-icon {
  width: 16px;
  height: 16px;
  color: var(--text-muted);
  flex-shrink: 0;
}

.search-box input {
  flex: 1;
  background: none;
  border: none;
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 13px;
  padding: 8px 10px;
  outline: none;
}

.search-box input::placeholder {
  color: var(--text-muted);
}

.shortcut {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 2px 6px;
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-muted);
}

.close-btn {
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 18px;
  cursor: pointer;
  padding: 0 4px;
  line-height: 1;
}

.close-btn:hover {
  color: var(--text-primary);
}

.search-results {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,.4);
  z-index: 200;
  max-height: 400px;
  overflow-y: auto;
}

.search-result-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  transition: background .15s;
}

.search-result-item:hover,
.search-result-item.active {
  background: var(--bg-hover);
}

.result-icon {
  font-size: 18px;
  flex-shrink: 0;
}

.result-content {
  flex: 1;
  min-width: 0;
}

.result-title {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
}

.result-path {
  font-size: 11px;
  color: var(--text-muted);
  margin-top: 2px;
}

.no-results {
  padding: 32px 16px;
  text-align: center;
  color: var(--text-muted);
  font-size: 13px;
}

.no-results-icon {
  font-size: 32px;
  margin-bottom: 12px;
  opacity: 0.5;
}

@media (max-width: 900px) {
  .search-container {
    display: none;
  }
}
</style>
