<template>
  <div class="formulas-view">
    <h1 class="page-title">常用公式速查</h1>
    <p class="page-desc">DFT 和 VASP 计算中常用的数学公式和物理方程。</p>

    <div class="formula-categories">
      <button
        v-for="cat in categories"
        :key="cat.id"
        :class="['cat-btn', { active: activeCategory === cat.id }]"
        @click="activeCategory = cat.id"
      >
        {{ cat.icon }} {{ cat.name }}
      </button>
    </div>

    <div class="formulas-grid">
      <div v-for="formula in filteredFormulas" :key="formula.id" class="formula-card">
        <div class="formula-header">
          <h3 class="formula-title">{{ formula.title }}</h3>
          <span class="formula-tag" :class="formula.category">{{ getCategoryName(formula.category) }}</span>
        </div>

        <div class="formula-content">
          <div class="formula-math" v-html="formula.latex"></div>
          <div class="formula-description">
            <p><strong>说明:</strong> {{ formula.description }}</p>
            <p v-if="formula.variables"><strong>变量:</strong> {{ formula.variables }}</p>
          </div>
        </div>

        <div class="formula-example" v-if="formula.example">
          <h4>应用示例</h4>
          <p>{{ formula.example }}</p>
        </div>

        <div class="formula-notes" v-if="formula.notes">
          <h4>注意事项</h4>
          <p>{{ formula.notes }}</p>
        </div>
      </div>
    </div>

    <!-- 公式计算器 -->
    <div class="calculator-section">
      <h2>🧮 快速计算器</h2>
      <div class="calculator-grid">
        <div class="calc-card">
          <h3>ENCUT 计算器</h3>
          <div class="calc-input">
            <label>ENMAX (eV):</label>
            <input type="number" v-model.number="calcEncut.enmax" placeholder="输入 ENMAX">
          </div>
          <div class="calc-result">
            <p>推荐 ENCUT: <strong>{{ calcEncut.result }} eV</strong></p>
            <p class="hint">通常取 ENMAX 的 1.2-1.3 倍</p>
          </div>
        </div>

        <div class="calc-card">
          <h3>能量换算</h3>
          <div class="calc-input">
            <label>能量 (eV):</label>
            <input type="number" v-model.number="calcEnergy.ev" placeholder="输入 eV">
          </div>
          <div class="calc-result">
            <p>焦耳 (J): <strong>{{ calcEnergy.joule }}</strong></p>
            <p>kcal/mol: <strong>{{ calcEnergy.kcal }}</strong></p>
            <p>K (温度): <strong>{{ calcEnergy.kelvin }}</strong></p>
          </div>
        </div>

        <div class="calc-card">
          <h3>晶格常数</h3>
          <div class="calc-input">
            <label>晶格常数 a (Å):</label>
            <input type="number" v-model.number="calcLattice.a" placeholder="输入 a">
            <label>原子数:</label>
            <input type="number" v-model.number="calcLattice.n" placeholder="输入原子数">
          </div>
          <div class="calc-result">
            <p>体积: <strong>{{ calcLattice.volume }} ų</strong></p>
            <p>密度因子: <strong>{{ calcLattice.density }}</strong></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormulasView',
  data() {
    return {
      activeCategory: 'all',
      categories: [
        { id: 'all', name: '全部', icon: '📚' },
        { id: 'dft', name: 'DFT 基础', icon: '⚛️' },
        { id: 'energy', name: '能量相关', icon: '⚡' },
        { id: 'structure', name: '结构相关', icon: '🔬' },
        { id: 'electronic', name: '电子结构', icon: '💡' },
        { id: 'phonon', name: '声子相关', icon: '🔊' },
        { id: 'thermodynamic', name: '热力学', icon: '🌡️' }
      ],
      formulas: [
        {
          id: 1,
          title: 'Kohn-Sham 方程',
          category: 'dft',
          latex: '<span class="math-inline">$\\left[-\\frac{\\hbar^2}{2m}\\nabla^2 + V_{eff}(\\mathbf{r})\\right]\\psi_i(\\mathbf{r}) = \\epsilon_i \\psi_i(\\mathbf{r})$</span>',
          description: 'Kohn-Sham 方程是 DFT 的核心方程，将多电子问题转化为单电子问题。',
          variables: '$\\psi_i$: 单电子波函数, $\\epsilon_i$: 轨道能量, $V_{eff}$: 有效势',
          example: '用于求解体系的电子结构和总能量。',
          notes: '有效势包含外势、Hartree 势和交换关联势。'
        },
        {
          id: 2,
          title: '总能量泛函',
          category: 'energy',
          latex: '<span class="math-inline">$E[\\rho] = T_s[\\rho] + E_{ext}[\\rho] + E_H[\\rho] + E_{xc}[\\rho]$</span>',
          description: 'DFT 总能量泛函的组成部分。',
          variables: '$T_s$: 无相互作用动能, $E_{ext}$: 外势能, $E_H$: Hartree 能, $E_{xc}$: 交换关联能',
          example: '用于计算材料的基态能量。',
          notes: '交换关联能的精确形式未知，需要近似处理。'
        },
        {
          id: 3,
          title: 'Hartree 能',
          category: 'energy',
          latex: '<span class="math-display">$$E_H = \\frac{1}{2}\\int\\int \\frac{\\rho(\\mathbf{r})\\rho(\\mathbf{r\'})}{|\\mathbf{r}-\\mathbf{r\'}|}d\\mathbf{r}d\\mathbf{r\'}$$</span>',
          description: '电子-电子之间的经典库仑相互作用能。',
          variables: '$\\rho$: 电子密度',
          example: '描述电子间的静电排斥作用。',
          notes: '包含自相互作用，需要在交换关联能中补偿。'
        },
        {
          id: 4,
          title: '交换关联能',
          category: 'energy',
          latex: '<span class="math-inline">$E_{xc}[\\rho] = \\int \\rho(\\mathbf{r}) \\epsilon_{xc}(\\rho) d\\mathbf{r}$</span>',
          description: '局域密度近似 (LDA) 下的交换关联能。',
          variables: '$\\epsilon_{xc}$: 交换关联能量密度',
          example: 'LDA 假设交换关联能只依赖于局部电子密度。',
          notes: '常用的近似包括 LDA、GGA、meta-GGA 和杂化泛函。'
        },
        {
          id: 5,
          title: '赝势方程',
          category: 'structure',
          latex: '<span class="math-inline">$V_{ps}(r) = V_{true}(r) + V_{nl}$</span>',
          description: '赝势将原子核和芯电子的势替换为有效势。',
          variables: '$V_{ps}$: 赝势, $V_{true}$: 真实势, $V_{nl}$: 非局域势',
          example: '减少平面波基组的数量，提高计算效率。',
          notes: 'VASP 使用投影缀加波 (PAW) 方法。'
        },
        {
          id: 6,
          title: '平面波展开',
          category: 'electronic',
          latex: '<span class="math-inline">$\\psi_{n\\mathbf{k}}(\\mathbf{r}) = \\sum_{\\mathbf{G}} c_{n\\mathbf{k}}(\\mathbf{G}) e^{i(\\mathbf{k}+\\mathbf{G})\\cdot\\mathbf{r}}$</span>',
          description: '波函数用平面波基组展开。',
          variables: '$\\mathbf{G}$: 倒格矢, $\\mathbf{k}$: 波矢, $c_{n\\mathbf{k}}$: 展开系数',
          example: '周期性体系的标准展开方法。',
          notes: '截断能 ENCUT 控制平面波的数量。'
        },
        {
          id: 7,
          title: '截断能',
          category: 'electronic',
          latex: '<span class="math-inline">$E_{cut} = \\frac{\\hbar^2}{2m}|\\mathbf{k}+\\mathbf{G}|^2_{max}$</span>',
          description: '平面波基组的截断能量。',
          variables: '$E_{cut}$: 截断能, $|\\mathbf{k}+\\mathbf{G}|_{max}$: 最大倒格矢长度',
          example: '决定计算精度和计算量。',
          notes: '通常取 1.2-1.3 倍的 ENMAX。'
        },
        {
          id: 8,
          title: '态密度 (DOS)',
          category: 'electronic',
          latex: '<span class="math-inline">$g(E) = \\sum_n \\delta(E - \\epsilon_n)$</span>',
          description: '电子态密度的定义。',
          variables: '$g(E)$: 态密度, $\\epsilon_n$: 第 n 个本征值',
          example: '用于分析电子结构和成键特性。',
          notes: '实际计算中使用高斯展宽或四面体方法。'
        },
        {
          id: 9,
          title: '能带结构',
          category: 'electronic',
          latex: '<span class="math-inline">$E_n(\\mathbf{k})$</span>',
          description: '能带结构表示能量随波矢的变化关系。',
          variables: '$E_n$: 第 n 条能带的能量, $\\mathbf{k}$: 波矢',
          example: '用于判断材料的金属性、半导体或绝缘体性质。',
          notes: '需要沿高对称点路径计算。'
        },
        {
          id: 10,
          title: '形成能',
          category: 'energy',
          latex: '<span class="math-inline">$E_f = E_{tot} - \\sum_i n_i \\mu_i$</span>',
          description: '材料的形成能计算公式。',
          variables: '$E_{tot}$: 总能量, $n_i$: 第 i 种原子的数量, $\\mu_i$: 化学势',
          example: '用于判断材料的热力学稳定性。',
          notes: '化学势需要从参考态计算。'
        },
        {
          id: 11,
          title: '吸附能',
          category: 'energy',
          latex: '<span class="math-inline">$E_{ads} = E_{slab+mol} - E_{slab} - E_{mol}$</span>',
          description: '分子在表面的吸附能。',
          variables: '$E_{slab+mol}$: 吸附体系总能量, $E_{slab}$: 表面能量, $E_{mol}$: 分子能量',
          example: '用于研究催化反应和表面化学。',
          notes: '负值表示吸附过程放热。'
        },
        {
          id: 12,
          title: '声子色散',
          category: 'phonon',
          latex: '<span class="math-inline">$\\omega(\\mathbf{q})$</span>',
          description: '声子频率随波矢的变化关系。',
          variables: '$\\omega$: 声子频率, $\\mathbf{q}$: 声子波矢',
          example: '用于研究晶格动力学和热力学性质。',
          notes: '虚频表示结构不稳定。'
        },
        {
          id: 13,
          title: '热容',
          category: 'thermodynamic',
          latex: '<span class="math-inline">$C_V = \\sum_{\\mathbf{q},\\nu} k_B \\left(\\frac{\\hbar\\omega_{\\mathbf{q}\\nu}}{k_B T}\\right)^2 \\frac{e^{\\hbar\\omega_{\\mathbf{q}\\nu}/k_B T}}{(e^{\\hbar\\omega_{\\mathbf{q}\\nu}/k_B T}-1)^2}$</span>',
          description: '声子对热容的贡献。',
          variables: '$\\omega_{\\mathbf{q}\\nu}$: 声子频率, $T$: 温度, $k_B$: 玻尔兹曼常数',
          example: '用于计算材料的热力学性质。',
          notes: '高温极限下趋近于 Dulong-Petit 值。'
        },
        {
          id: 14,
          title: '自由能',
          category: 'thermodynamic',
          latex: '<span class="math-inline">$F = E + PV - TS$</span>',
          description: 'Helmholtz 自由能。',
          variables: '$E$: 内能, $P$: 压强, $V$: 体积, $T$: 温度, $S$: 熵',
          example: '用于判断相稳定性和相变。',
          notes: '在恒温恒容条件下最小化。'
        },
        {
          id: 15,
          title: '表面能',
          category: 'structure',
          latex: '<span class="math-inline">$\\gamma = \\frac{1}{2A}(E_{slab} - N \\cdot E_{bulk})$</span>',
          description: '表面能的计算公式。',
          variables: '$E_{slab}$: slab 总能量, $N$: 原子数, $E_{bulk}$: 体相原子能量, $A$: 表面积',
          example: '用于研究表面稳定性和晶体形貌。',
          notes: '需要足够厚的真空层。'
        },
        {
          id: 16,
          title: '缺陷形成能',
          category: 'structure',
          latex: '<span class="math-inline">$E_f = E_{defect} - E_{perfect} + \\sum_i n_i \\mu_i + q(E_F + E_{VBM}) + E_{corr}$</span>',
          description: '点缺陷形成能的计算公式。',
          variables: '$E_{defect}$: 含缺陷体系能量, $E_{perfect}$: 完美体系能量, $q$: 电荷态, $E_F$: 费米能级',
          example: '用于研究缺陷的形成和电学性质。',
          notes: '需要考虑有限尺寸修正和电荷修正。'
        }
      ],
      calcEncut: {
        enmax: 400,
        result: 480
      },
      calcEnergy: {
        ev: 1,
        joule: '1.602e-19',
        kcal: '23.06',
        kelvin: '11604'
      },
      calcLattice: {
        a: 5.43,
        n: 8,
        volume: '160.1',
        density: '20.01'
      }
    }
  },
  computed: {
    filteredFormulas() {
      if (this.activeCategory === 'all') {
        return this.formulas
      }
      return this.formulas.filter(f => f.category === this.activeCategory)
    }
  },
  methods: {
    getCategoryName(category) {
      const cat = this.categories.find(c => c.id === category)
      return cat ? cat.name : category
    }
  },
  watch: {
    'calcEncut.enmax': {
      handler(val) {
        this.calcEncut.result = Math.round(val * 1.2)
      },
      immediate: true
    },
    'calcEnergy.ev': {
      handler(val) {
        this.calcEnergy.joule = (val * 1.602176634e-19).toExponential(3)
        this.calcEnergy.kcal = (val * 23.0605).toFixed(2)
        this.calcEnergy.kelvin = (val * 11604.5).toFixed(0)
      },
      immediate: true
    },
    'calcLattice.a': {
      handler() {
        this.calcLattice.volume = Math.pow(this.calcLattice.a, 3).toFixed(1)
        this.calcLattice.density = (this.calcLattice.n / (Math.pow(this.calcLattice.a, 3) * 6.022e23) * 1e24).toFixed(2)
      },
      immediate: true
    },
    'calcLattice.n': {
      handler() {
        this.calcLattice.density = (this.calcLattice.n / (Math.pow(this.calcLattice.a, 3) * 6.022e23) * 1e24).toFixed(2)
      },
      immediate: true
    }
  }
}
</script>

<style scoped>
.formulas-view {
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

.formula-categories {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.cat-btn {
  padding: 10px 20px;
  border: 1px solid var(--border);
  background: var(--bg-secondary);
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.cat-btn.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.cat-btn:hover:not(.active) {
  background: var(--bg-hover);
}

.formulas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
}

.formula-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s;
}

.formula-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.formula-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.formula-title {
  font-size: 16px;
  color: var(--text-primary);
  margin: 0;
}

.formula-tag {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
}

.formula-tag.dft {
  background: var(--purple-dim);
  color: var(--purple);
}

.formula-tag.energy {
  background: var(--yellow-dim);
  color: var(--yellow);
}

.formula-tag.structure {
  background: var(--cyan-dim);
  color: var(--cyan);
}

.formula-tag.electronic {
  background: var(--blue-dim);
  color: var(--blue);
}

.formula-tag.phonon {
  background: var(--green-dim);
  color: var(--green);
}

.formula-tag.thermodynamic {
  background: var(--orange-dim);
  color: var(--orange);
}

.formula-content {
  margin-bottom: 15px;
}

.formula-math {
  background: var(--bg-surface);
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 12px;
  overflow-x: auto;
  font-size: 16px;
}

.formula-description p {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 8px;
}

.formula-example,
.formula-notes {
  background: var(--bg-surface);
  padding: 12px;
  border-radius: 8px;
  margin-top: 12px;
}

.formula-example h4,
.formula-notes h4 {
  font-size: 12px;
  color: var(--primary);
  margin-bottom: 8px;
}

.formula-example p,
.formula-notes p {
  font-size: 12px;
  color: var(--text-secondary);
  margin: 0;
}

.calculator-section {
  margin-top: 50px;
}

.calculator-section h2 {
  color: var(--primary);
  margin-bottom: 20px;
}

.calculator-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.calc-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
}

.calc-card h3 {
  color: var(--text-primary);
  font-size: 16px;
  margin-bottom: 15px;
}

.calc-input {
  margin-bottom: 15px;
}

.calc-input label {
  display: block;
  color: var(--text-secondary);
  font-size: 13px;
  margin-bottom: 5px;
}

.calc-input input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 14px;
  margin-bottom: 10px;
}

.calc-result {
  background: var(--bg-surface);
  padding: 12px;
  border-radius: 8px;
}

.calc-result p {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 5px;
}

.calc-result strong {
  color: var(--primary);
}

.calc-result .hint {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 5px;
}

@media (max-width: 768px) {
  .formulas-grid {
    grid-template-columns: 1fr;
  }

  .calculator-grid {
    grid-template-columns: 1fr;
  }
}
</style>
