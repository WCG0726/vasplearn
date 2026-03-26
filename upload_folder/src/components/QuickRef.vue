<template>
  <div class="quick-ref">
    <h3>快速参考</h3>
    <div class="ref-tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="ref-tab"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        {{ tab.name }}
      </button>
    </div>
    <div class="ref-content">
      <div v-if="activeTab === 'incar'" class="ref-table">
        <div class="ref-row header">
          <div class="ref-cell">参数</div>
          <div class="ref-cell">说明</div>
          <div class="ref-cell">常用值</div>
        </div>
        <div v-for="param in incarParams" :key="param.name" class="ref-row">
          <div class="ref-cell code">{{ param.name }}</div>
          <div class="ref-cell">{{ param.desc }}</div>
          <div class="ref-cell code">{{ param.value }}</div>
        </div>
      </div>
      <div v-if="activeTab === 'ismear'" class="ref-table">
        <div class="ref-row header">
          <div class="ref-cell">ISMEAR</div>
          <div class="ref-cell">方法</div>
          <div class="ref-cell">适用场景</div>
          <div class="ref-cell">SIGMA</div>
        </div>
        <div v-for="item in ismearParams" :key="item.value" class="ref-row">
          <div class="ref-cell code">{{ item.value }}</div>
          <div class="ref-cell">{{ item.method }}</div>
          <div class="ref-cell">{{ item.use }}</div>
          <div class="ref-cell code">{{ item.sigma }}</div>
        </div>
      </div>
      <div v-if="activeTab === 'ibrion'" class="ref-table">
        <div class="ref-row header">
          <div class="ref-cell">IBRION</div>
          <div class="ref-cell">方法</div>
          <div class="ref-cell">说明</div>
        </div>
        <div v-for="item in ibrionParams" :key="item.value" class="ref-row">
          <div class="ref-cell code">{{ item.value }}</div>
          <div class="ref-cell">{{ item.method }}</div>
          <div class="ref-cell">{{ item.desc }}</div>
        </div>
      </div>
      <div v-if="activeTab === 'isif'" class="ref-table">
        <div class="ref-row header">
          <div class="ref-cell">ISIF</div>
          <div class="ref-cell">优化内容</div>
          <div class="ref-cell">适用场景</div>
        </div>
        <div v-for="item in isifParams" :key="item.value" class="ref-row">
          <div class="ref-cell code">{{ item.value }}</div>
          <div class="ref-cell">{{ item.optimize }}</div>
          <div class="ref-cell">{{ item.use }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuickRef',
  data() {
    return {
      activeTab: 'incar',
      tabs: [
        { id: 'incar', name: 'INCAR' },
        { id: 'ismear', name: 'ISMEAR' },
        { id: 'ibrion', name: 'IBRION' },
        { id: 'isif', name: 'ISIF' }
      ],
      incarParams: [
        { name: 'ENCUT', desc: '平面波截断能', value: '400-600 eV' },
        { name: 'EDIFF', desc: '电子步收敛标准', value: '1E-6' },
        { name: 'EDIFFG', desc: '离子步收敛标准', value: '-0.02 eV/Å' },
        { name: 'PREC', desc: '计算精度', value: 'Accurate' },
        { name: 'NSW', desc: '最大离子步数', value: '100-200' },
        { name: 'NELM', desc: '最大电子步数', value: '60-200' },
        { name: 'NBANDS', desc: '能带数目', value: 'auto 或 NELECT/2+N' },
        { name: 'LREAL', desc: '实空间投影', value: 'Auto (>50原子)' }
      ],
      ismearParams: [
        { value: '-5', method: '四面体法', use: '绝缘体/半导体 DOS', sigma: '自动' },
        { value: '-4', method: '四面体+Blochl', use: '金属 DOS', sigma: '自动' },
        { value: '0', method: 'Gaussian', use: '半导体/绝缘体', sigma: '0.05' },
        { value: '1', method: 'MP 展宽', use: '金属', sigma: '0.2' },
        { value: '2', method: 'MP 改进', use: '金属 (更平滑)', sigma: '0.2' }
      ],
      ibrionParams: [
        { value: '-1', method: '不动', desc: '静态计算或 MD' },
        { value: '0', method: 'MD', desc: '分子动力学' },
        { value: '1', method: 'RMM-DIIS', desc: '准牛顿法 (推荐)' },
        { value: '2', method: 'CG', desc: '共轭梯度法' },
        { value: '3', method: 'Damped MD', desc: '阻尼分子动力学' }
      ],
      isifParams: [
        { value: '2', optimize: '仅离子位置', use: '表面计算、分子吸附' },
        { value: '3', optimize: '离子+晶格(体积+形状)', use: '体相优化 (最常用)' },
        { value: '4', optimize: '离子+晶格形状', use: '固定体积优化' },
        { value: '5', optimize: '仅晶格(体积+形状)', use: '固定离子' },
        { value: '6', optimize: '仅晶格形状', use: '固定体积+离子' },
        { value: '7', optimize: '仅晶格体积', use: '固定形状+离子' }
      ]
    }
  }
}
</script>

<style scoped>
.quick-ref {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--rl);
  padding: 20px;
  margin: 20px 0;
}

.quick-ref h3 {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
}

.ref-tabs {
  display: flex;
  gap: 4px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--border);
  padding-bottom: 8px;
}

.ref-tab {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: all .15s;
}

.ref-tab:hover {
  color: var(--text-primary);
  background: var(--bg-hover);
}

.ref-tab.active {
  color: var(--accent);
  background: var(--accent-glow);
}

.ref-table {
  width: 100%;
}

.ref-row {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 12px;
}

.ref-row:nth-child(odd) {
  background: var(--bg-elevated);
}

.ref-row.header {
  background: var(--bg-hover);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-muted);
}

.ref-cell {
  color: var(--text-secondary);
}

.ref-cell.code {
  font-family: var(--font-mono);
  color: var(--accent);
}
</style>
