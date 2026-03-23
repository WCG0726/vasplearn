<template>
  <div class="sec active">
    <div class="bread">
      <router-link to="/">首页</router-link>/
      <router-link to="/tools">工具</router-link>/
      <span>计算工具</span>
    </div>
    
    <h2>实用计算工具</h2>
    <p>这些工具帮助你快速计算 VASP 所需的参数。</p>

    <h3>ENCUT 截断能计算器</h3>
    <p>根据 POTCAR 中的 ENMAX 值计算推荐的 ENCUT 设置。</p>
    
    <div class="calculator-card">
      <div class="calc-input-group">
        <label>ENMAX 最大值 (eV)</label>
        <input v-model.number="enmax" type="number" placeholder="例如: 250" />
      </div>
      <div class="calc-input-group">
        <label>安全系数</label>
        <select v-model.number="safetyFactor">
          <option :value="1.0">1.0 (标准)</option>
          <option :value="1.3">1.3 (推荐)</option>
          <option :value="1.5">1.5 (高精度)</option>
        </select>
      </div>
      <div class="calc-result">
        <div class="result-label">推荐 ENCUT</div>
        <div class="result-value">{{ recommendedEncut }} eV</div>
        <div class="result-note">ENMAX × {{ safetyFactor }}</div>
      </div>
      <div class="calc-formula">
        <code>ENCUT = ENMAX(max) × {{ safetyFactor }}</code>
      </div>
    </div>

    <h3>K 点密度计算器</h3>
    <p>根据晶格常数自动推荐 K 点网格。</p>
    
    <div class="calculator-card">
      <div class="calc-input-group">
        <label>晶格常数 a (Å)</label>
        <input v-model.number="latticeA" type="number" step="0.01" placeholder="例如: 5.43" />
      </div>
      <div class="calc-input-group">
        <label>晶格常数 b (Å)</label>
        <input v-model.number="latticeB" type="number" step="0.01" placeholder="例如: 5.43" />
      </div>
      <div class="calc-input-group">
        <label>晶格常数 c (Å)</label>
        <input v-model.number="latticeC" type="number" step="0.01" placeholder="例如: 5.43" />
      </div>
      <div class="calc-input-group">
        <label>目标 N×a</label>
        <select v-model.number="targetNa">
          <option :value="25">25 (快速)</option>
          <option :value="30">30 (标准)</option>
          <option :value="35">35 (高精度)</option>
        </select>
      </div>
      <div class="calc-result">
        <div class="result-label">推荐 K 点网格</div>
        <div class="result-value kpoints-grid">
          <span>{{ kpoints.a }} × {{ kpoints.b }} × {{ kpoints.c }}</span>
        </div>
        <div class="result-note">总 K 点数: {{ totalKpoints }}</div>
      </div>
      <div class="calc-formula">
        <code>N_k = round({{ targetNa }} / lattice_a)</code>
      </div>
    </div>

    <h3>内存估算器</h3>
    <p>估算 VASP 计算所需的大致内存。</p>
    
    <div class="calculator-card">
      <div class="calc-input-group">
        <label>原子数</label>
        <input v-model.number="numAtoms" type="number" placeholder="例如: 100" />
      </div>
      <div class="calc-input-group">
        <label>ENCUT (eV)</label>
        <input v-model.number="encutForMem" type="number" placeholder="例如: 400" />
      </div>
      <div class="calc-input-group">
        <label>K 点数</label>
        <input v-model.number="numKpoints" type="number" placeholder="例如: 64" />
      </div>
      <div class="calc-result">
        <div class="result-label">估算内存</div>
        <div class="result-value">{{ estimatedMemory }} GB</div>
        <div class="result-note">每原子约 50-200 MB</div>
      </div>
    </div>

    <h3>形成能计算器</h3>
    <p>快速计算化合物的形成能。</p>
    
    <div class="calculator-card">
      <div class="calc-input-group">
        <label>化合物能量 E(AB) (eV/atom)</label>
        <input v-model.number="eAB" type="number" step="0.001" placeholder="例如: -3.720" />
      </div>
      <div class="calc-input-group">
        <label>参考态 A 能量 E(A) (eV/atom)</label>
        <input v-model.number="eA" type="number" step="0.001" placeholder="例如: -3.500" />
      </div>
      <div class="calc-input-group">
        <label>参考态 B 能量 E(B) (eV/atom)</label>
        <input v-model.number="eB" type="number" step="0.001" placeholder="例如: -4.860" />
      </div>
      <div class="calc-input-group">
        <label>A 的摩尔分数 x</label>
        <input v-model.number="moleFraction" type="number" step="0.1" placeholder="例如: 0.5" />
      </div>
      <div class="calc-result">
        <div class="result-label">形成能 ΔH_f</div>
        <div class="result-value" :class="{ stable: formationEnergy < 0, unstable: formationEnergy > 0 }">
          {{ formationEnergy.toFixed(4) }} eV/atom
        </div>
        <div class="result-note">{{ formationEnergy < 0 ? '✓ 热力学稳定' : '✗ 热力学不稳定' }}</div>
      </div>
      <div class="calc-formula">
        <code>ΔH_f = E(AB) - x·E(A) - (1-x)·E(B)</code>
      </div>
    </div>

    <h3>吸附能计算器</h3>
    <p>计算分子在表面的吸附能。</p>
    
    <div class="calculator-card">
      <div class="calc-input-group">
        <label>吸附体系能量 E(slab+ads) (eV)</label>
        <input v-model.number="eSlabAds" type="number" step="0.001" placeholder="例如: -156.234" />
      </div>
      <div class="calc-input-group">
        <label>干净表面能量 E(slab) (eV)</label>
        <input v-model.number="eSlab" type="number" step="0.001" placeholder="例如: -148.500" />
      </div>
      <div class="calc-input-group">
        <label>自由分子能量 E(mol) (eV)</label>
        <input v-model.number="eMol" type="number" step="0.001" placeholder="例如: -9.860" />
      </div>
      <div class="calc-result">
        <div class="result-label">吸附能 E_ads</div>
        <div class="result-value" :class="{ stable: adsorptionEnergy < 0, unstable: adsorptionEnergy > 0 }">
          {{ adsorptionEnergy.toFixed(4) }} eV
        </div>
        <div class="result-note">{{ adsorptionEnergy < 0 ? '✓ 吸附放热（稳定）' : '✗ 吸附吸热（不稳定）' }}</div>
      </div>
      <div class="calc-formula">
        <code>E_ads = E(slab+ads) - E(slab) - E(mol)</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalculatorView',
  data() {
    return {
      // ENCUT calculator
      enmax: 250,
      safetyFactor: 1.3,
      
      // K-points calculator
      latticeA: 5.43,
      latticeB: 5.43,
      latticeC: 5.43,
      targetNa: 30,
      
      // Memory estimator
      numAtoms: 100,
      encutForMem: 400,
      numKpoints: 64,
      
      // Formation energy calculator
      eAB: -3.720,
      eA: -3.500,
      eB: -4.860,
      moleFraction: 0.5,
      
      // Adsorption energy calculator
      eSlabAds: -156.234,
      eSlab: -148.500,
      eMol: -9.860
    }
  },
  computed: {
    recommendedEncut() {
      return Math.round(this.enmax * this.safetyFactor)
    },
    kpoints() {
      const roundUp = (x) => Math.max(1, Math.ceil(x))
      return {
        a: roundUp(this.targetNa / this.latticeA),
        b: roundUp(this.targetNa / this.latticeB),
        c: roundUp(this.targetNa / this.latticeC)
      }
    },
    totalKpoints() {
      return this.kpoints.a * this.kpoints.b * this.kpoints.c
    },
    estimatedMemory() {
      // Rough estimation: memory scales with atoms, encut, and kpoints
      const basePerAtom = (this.encutForMem / 400) * 0.1 // GB per atom
      const memGB = this.numAtoms * basePerAtom * Math.sqrt(this.numKpoints)
      return Math.round(memGB * 10) / 10
    },
    formationEnergy() {
      return this.eAB - this.moleFraction * this.eA - (1 - this.moleFraction) * this.eB
    },
    adsorptionEnergy() {
      return this.eSlabAds - this.eSlab - this.eMol
    }
  }
}
</script>

<style scoped>
.calculator-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--rl);
  padding: 24px;
  margin: 16px 0;
}

.calc-input-group {
  margin-bottom: 16px;
}

.calc-input-group label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}

.calc-input-group input,
.calc-input-group select {
  width: 100%;
  max-width: 300px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 10px 12px;
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: 14px;
  transition: border-color .2s;
}

.calc-input-group input:focus,
.calc-input-group select:focus {
  outline: none;
  border-color: var(--accent);
}

.calc-result {
  background: var(--bg-elevated);
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  text-align: center;
}

.result-label {
  font-size: 12px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.result-value {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 700;
  color: var(--accent);
}

.result-value.stable {
  color: var(--green);
}

.result-value.unstable {
  color: var(--red);
}

.result-note {
  font-size: 13px;
  color: var(--text-secondary);
  margin-top: 8px;
}

.calc-formula {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 12px 16px;
  text-align: center;
}

.calc-formula code {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-secondary);
}

.kpoints-grid span {
  font-family: var(--font-mono);
}
</style>
