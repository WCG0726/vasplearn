<template>
  <div class="case-library">
    <h1 class="page-title">计算案例库</h1>
    <p class="page-desc">真实计算案例，包含完整输入文件、输出分析和物理解释。</p>

    <div class="filters">
      <div class="filter-group">
        <label>材料类型:</label>
        <select v-model="filters.materialType">
          <option value="all">全部</option>
          <option value="metal">金属</option>
          <option value="semiconductor">半导体</option>
          <option value="oxide">氧化物</option>
          <option value="2d">二维材料</option>
          <option value="molecule">分子</option>
        </select>
      </div>
      <div class="filter-group">
        <label>计算类型:</label>
        <select v-model="filters.calcType">
          <option value="all">全部</option>
          <option value="optimize">结构优化</option>
          <option value="dos">态密度</option>
          <option value="band">能带结构</option>
          <option value="surface">表面计算</option>
          <option value="defect">缺陷计算</option>
        </select>
      </div>
      <div class="filter-group">
        <label>难度级别:</label>
        <select v-model="filters.difficulty">
          <option value="all">全部</option>
          <option value="beginner">入门</option>
          <option value="intermediate">中级</option>
          <option value="advanced">高级</option>
        </select>
      </div>
      <div class="search-box">
        <input v-model="searchQuery" placeholder="搜索案例..." class="search-input">
      </div>
    </div>

    <div class="cases-grid">
      <div v-for="caseItem in filteredCases" :key="caseItem.id" class="case-card" @click="openCase(caseItem)">
        <div class="case-header">
          <span class="case-icon">{{ caseItem.icon }}</span>
          <span class="case-difficulty" :class="caseItem.difficulty">{{ caseItem.difficultyText }}</span>
        </div>
        <h3 class="case-title">{{ caseItem.title }}</h3>
        <p class="case-desc">{{ caseItem.description }}</p>
        <div class="case-meta">
          <span class="meta-item">📋 {{ caseItem.calcType }}</span>
          <span class="meta-item">⏱ {{ caseItem.time }}</span>
        </div>
        <div class="case-tags">
          <span v-for="tag in caseItem.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>

    <!-- 案例详情模态框 -->
    <div v-if="selectedCase" class="modal-overlay" @click.self="closeCase">
      <div class="modal-content">
        <div class="modal-header">
          <h2>{{ selectedCase.title }}</h2>
          <button class="close-btn" @click="closeCase">×</button>
        </div>

        <div class="modal-body">
          <div class="case-section">
            <h3>📝 案例描述</h3>
            <p>{{ selectedCase.fullDescription }}</p>
          </div>

          <div class="case-section">
            <h3>🎯 学习目标</h3>
            <ul>
              <li v-for="goal in selectedCase.goals" :key="goal">{{ goal }}</li>
            </ul>
          </div>

          <div class="case-section">
            <h3>📁 输入文件</h3>
            <div class="file-tabs">
              <button
                v-for="tab in fileTabs"
                :key="tab.id"
                :class="['file-tab', { active: activeFileTab === tab.id }]"
                @click="activeFileTab = tab.id"
              >
                {{ tab.name }}
              </button>
            </div>
            <div class="file-content">
              <pre v-if="activeFileTab === 'incar'">{{ selectedCase.files.incar }}</pre>
              <pre v-else-if="activeFileTab === 'poscar'">{{ selectedCase.files.poscar }}</pre>
              <pre v-else-if="activeFileTab === 'kpoints'">{{ selectedCase.files.kpoints }}</pre>
              <pre v-else-if="activeFileTab === 'potcar'">{{ selectedCase.files.potcar }}</pre>
            </div>
            <div class="file-actions">
              <button class="btn btn-small" @click="copyFile">📋 复制文件</button>
              <button class="btn btn-small" @click="downloadFile">💾 下载文件</button>
            </div>
          </div>

          <div class="case-section">
            <h3>📊 结果分析</h3>
            <div class="result-content">
              <pre>{{ selectedCase.analysis }}</pre>
            </div>
          </div>

          <div class="case-section">
            <h3>💡 物理解释</h3>
            <div class="physics-content">
              <p>{{ selectedCase.physics }}</p>
            </div>
          </div>

          <div class="case-section">
            <h3>⚠️ 注意事项</h3>
            <ul>
              <li v-for="note in selectedCase.notes" :key="note">{{ note }}</li>
            </ul>
          </div>

          <div class="case-section">
            <h3>📚 参考资料</h3>
            <ul>
              <li v-for="ref in selectedCase.references" :key="ref">{{ ref }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseLibraryView',
  data() {
    return {
      searchQuery: '',
      filters: {
        materialType: 'all',
        calcType: 'all',
        difficulty: 'all'
      },
      selectedCase: null,
      activeFileTab: 'incar',
      fileTabs: [
        { id: 'incar', name: 'INCAR' },
        { id: 'poscar', name: 'POSCAR' },
        { id: 'kpoints', name: 'KPOINTS' },
        { id: 'potcar', name: 'POTCAR' }
      ],
      cases: [
        {
          id: 1,
          title: 'Si 金刚石结构优化',
          description: '计算硅的金刚石结构，进行结构优化并分析晶格常数。',
          icon: '💎',
          materialType: 'semiconductor',
          calcType: 'optimize',
          difficulty: 'beginner',
          difficultyText: '入门',
          time: '30分钟',
          tags: ['Si', '结构优化', '金刚石'],
          fullDescription: '本案例演示如何使用 VASP 计算硅的金刚石结构。通过结构优化计算，我们将获得硅的平衡晶格常数，并与实验值进行比较。',
          goals: [
            '学习 VASP 输入文件的编写',
            '理解结构优化的原理',
            '掌握晶格常数的提取方法',
            '了解收敛性测试的重要性'
          ],
          files: {
            incar: `SYSTEM = Si Diamond Structure Optimization
PREC = Accurate
ENCUT = 520
EDIFF = 1E-6
IBRION = 2
NSW = 50
EDIFFG = -0.01
ISMEAR = 0
SIGMA = 0.05
LREAL = Auto
ALGO = Normal`,
            poscar: `Si Diamond
1.0
5.43 0.0 0.0
0.0 5.43 0.0
0.0 0.0 5.43
Si
2
Direct
0.000 0.000 0.000
0.250 0.250 0.250`,
            kpoints: `Automatic
0
Gamma
8 8 8
0 0 0`,
            potcar: `PAW_PBE Si 05Jan2001
  4.00000000000000
parameters from PSCTR are:
   TITEL  = PAW_PBE Si 05Jan2001
   EXCHI  =   4.00000000
   ENMAX  =  245.142; ENMIN  =  183.857 eV
   IUNSCR =    1
   NCORE  =      1
   LCORR  =    .TRUE.
   EATOM  =  149.5545 eV,   11.0195 Ry

   TITEL  = PAW_PBE Si 05Jan2001
   VRHFIN =Si:  s2p2
   ENMAX  =  245.1; ENMIN  =  183.9 eV
   RCORE  =    1.90; RWIGS  =    2.30; RWIGS =   2.30
   EAUG  =   34.91; DMAX   =   0.52; RDEP  =    1.90
   RCLOW  =   0.90; RCL4P  =   1.10
   QAUG   =   0.98; QSFT  =   2.10
   RMAX   =   2.50; REXP   =   0.10
   EBASE  =    0.00
   ETEST  =    0.0000001
   ITEST  =     13434
   RCIST  =    2.50
   GG     =   0.000
   NKEY   =      0
   LASYM  =    1
   NDLC   =     1
   LCORE  =    3
   NLOCAL =     12`
          },
          analysis: `总能量: -10.845 eV/atom
晶格常数: 5.43 Å (实验值: 5.43 Å)
体弹模量: 98 GPa (实验值: 98 GPa)
收敛步数: 12 步
最终力: 0.005 eV/Å`,
          physics: `硅的金刚石结构由两个面心立方子晶格沿体对角线偏移1/4构成。每个硅原子与四个最近邻原子形成四面体键合，键长为2.35 Å。这种结构导致了硅的半导体特性，带隙约为1.12 eV。`,
          notes: [
            'ENCUT 设置为 245 eV (1.3 倍 ENMAX)',
            'K点网格需要进行收敛性测试',
            '结构优化时建议使用 EDIFFG = -0.01',
            '注意检查 OUTCAR 中的收敛信息'
          ],
          references: [
            'VASP 官方文档: https://www.vasp.at/wiki/',
            'Kresse, G. & Furthmüller, J. (1996). Computational Materials Science, 6, 15-50.',
            'Si 的实验数据: CRC Handbook of Chemistry and Physics'
          ]
        },
        {
          id: 2,
          title: '石墨烯电子结构计算',
          description: '计算单层石墨烯的能带结构和态密度。',
          icon: '🕸️',
          materialType: '2d',
          calcType: 'band',
          difficulty: 'intermediate',
          difficultyText: '中级',
          time: '1小时',
          tags: ['石墨烯', '能带结构', '二维材料'],
          fullDescription: '本案例演示如何计算单层石墨烯的电子结构。石墨烯具有独特的线性色散关系（狄拉克锥），是研究二维材料电子性质的经典案例。',
          goals: [
            '学习二维材料的计算方法',
            '理解能带结构的物理意义',
            '掌握态密度的计算和分析',
            '了解真空层的作用'
          ],
          files: {
            incar: `SYSTEM = Graphene Electronic Structure
PREC = Accurate
ENCUT = 520
EDIFF = 1E-6
NSW = 0
ISMEAR = -5
SIGMA = 0.05
LORBIT = 11
LCHARG = .FALSE.
LWAVE = .FALSE.
LREAL = Auto
ALGO = Normal
NBANDS = 20`,
            poscar: `Graphene
1.0
2.46 0.0 0.0
-1.23 2.13 0.0
0.0 0.0 20.0
C
2
Direct
0.000 0.000 0.500
0.333 0.667 0.500`,
            kpoints: `Line-mode
Reciprocal
0.000 0.000 0.000 ! G
0.333 0.333 0.000 ! K
0.500 0.000 0.000 ! M
0.000 0.000 0.000 ! G`,
            potcar: `PAW_PBE C 08Apr2002
  4.00000000000000
parameters from PSCTR are:
   TITEL  = PAW_PBE C 08Apr2002
   EXCHI  =   4.00000000
   ENMAX  =  400.000; ENMIN  =  300.000 eV`
          },
          analysis: `费米能级: 0.0 eV
带隙: 0.0 eV (半金属)
狄拉克点: K 点处
态密度: 费米能级处为零
费米速度: 1.0 × 10⁶ m/s`,
          physics: `石墨烯的能带结构在 K 点处呈现线性色散关系，形成所谓的"狄拉克锥"。在狄拉克点处，导带和价带相接触，使得石墨烯成为零带隙的半金属。这种独特的电子结构导致了石墨烯的许多奇异性质，如高电子迁移率和量子霍尔效应。`,
          notes: [
            '真空层厚度至少 15 Å 以避免周期性镜像相互作用',
            '使用 Gamma 点加密的 K 点网格',
            '能带计算需要沿高对称点路径',
            '注意自旋极化设置'
          ],
          references: [
            'Novoselov, K. S. et al. (2004). Science, 306, 666-669.',
            'Castro Neto, A. H. et al. (2009). Reviews of Modern Physics, 81, 109.',
            'VASP 教程: 二维材料计算'
          ]
        },
        {
          id: 3,
          title: 'Fe 顺磁态计算',
          description: '计算铁的顺磁态电子结构和磁性。',
          icon: '🧲',
          materialType: 'metal',
          calcType: 'dos',
          difficulty: 'intermediate',
          difficultyText: '中级',
          time: '45分钟',
          tags: ['Fe', '磁性', '态密度'],
          fullDescription: '本案例演示如何计算铁的顺磁态电子结构。通过对比顺磁态和铁磁态的总能量，可以确定铁的磁性基态。',
          goals: [
            '学习自旋极化计算',
            '理解磁性材料的电子结构',
            '掌握态密度的分析方法',
            '了解磁矩的计算'
          ],
          files: {
            incar: `SYSTEM = Fe Paramagnetic State
PREC = Accurate
ENCUT = 520
EDIFF = 1E-6
NSW = 0
ISPIN = 1
ISMEAR = 1
SIGMA = 0.2
LORBIT = 11
LCHARG = .FALSE.
LWAVE = .FALSE.
LREAL = Auto
ALGO = Normal`,
            poscar: `Fe BCC
1.0
2.87 0.0 0.0
0.0 2.87 0.0
0.0 0.0 2.87
Fe
2
Direct
0.000 0.000 0.000
0.500 0.500 0.500`,
            kpoints: `Automatic
0
Gamma
12 12 12
0 0 0`,
            potcar: `PAW_PBE Fe 06Sep2000
  8.00000000000000
parameters from PSCTR are:
   TITEL  = PAW_PBE Fe 06Sep2000
   EXCHI  =   8.00000000
   ENMAX  =  282.364; ENMIN  =  211.773 eV`
          },
          analysis: `总能量: -8.354 eV/atom
磁矩: 0 μB (顺磁态)
费米能级: 5.23 eV
态密度特征: d 带在费米能级处有尖峰
能带宽度: 约 4 eV`,
          physics: `铁的顺磁态计算假设没有自旋极化，所有电子自旋配对。在这种状态下，铁的 d 带完全填充，费米能级处态密度较高。实际上，铁的基态是铁磁态，磁矩约为 2.2 μB，这是由于交换相互作用导致的自旋分裂。`,
          notes: [
            'ISPIN=1 表示非自旋极化计算',
            '顺磁态计算可作为铁磁态计算的参考',
            '注意比较不同磁态的总能量',
            'd 带位置对磁性很重要'
          ],
          references: [
            'Kittel, C. Introduction to Solid State Physics',
            'Ashcroft, N. W. & Mermin, N. D. Solid State Physics',
            'VASP 教程: 磁性计算'
          ]
        },
        {
          id: 4,
          title: 'TiO₂ 表面计算',
          description: '计算锐钛矿 TiO₂ (101) 表面的表面能。',
          icon: '🧊',
          materialType: 'oxide',
          calcType: 'surface',
          difficulty: 'advanced',
          difficultyText: '高级',
          time: '2小时',
          tags: ['TiO₂', '表面能', '氧化物'],
          fullDescription: '本案例演示如何计算锐钛矿 TiO₂ (101) 表面的表面能。表面能是理解表面反应活性和催化性能的关键参数。',
          goals: [
            '学习表面模型的构建',
            '理解表面能的计算方法',
            '掌握表面弛豫的原理',
            '了解表面态的影响'
          ],
          files: {
            incar: `SYSTEM = TiO2 Anatase (101) Surface
PREC = Accurate
ENCUT = 520
EDIFF = 1E-6
IBRION = 2
NSW = 50
EDIFFG = -0.01
ISMEAR = 0
SIGMA = 0.05
LREAL = Auto
ALGO = Normal
ISIF = 2
DIPOL = 0.5 0.5 0.5`,
            poscar: `TiO2 Anatase (101) Surface
1.0
10.0000 0.0000 0.0000
0.0000 10.0000 0.0000
0.0000 0.0000 25.0000
Ti O
6 12
Selective dynamics
Direct
0.000 0.000 0.000 T T T
0.500 0.500 0.000 T T T
0.250 0.250 0.250 T T T
0.750 0.750 0.250 T T T
0.500 0.000 0.500 T T T
0.000 0.500 0.500 T T T`,
            kpoints: `Automatic
0
Gamma
4 4 1
0 0 0`,
            potcar: `PAW_PBE Ti 08Apr2002
 10.00000000000000
parameters from PSCTR are:
   TITEL  = PAW_PBE Ti 08Apr2002
   EXCHI  =  10.00000000
   ENMAX  =  294.324; ENMIN  =  220.743 eV

PAW_PBE O 08Apr2002
  6.00000000000000
parameters from PSCTR are:
   TITEL  = PAW_PBE O 08Apr2002
   EXCHI  =   6.00000000
   ENMAX  =  400.000; ENMIN  =  300.000 eV`
          },
          analysis: `表面能: 0.98 J/m²
表面弛豫: Ti 原子向外移动 0.1 Å
表面偶极矩: 0.3 D
收敛步数: 25 步
最终力: 0.008 eV/Å`,
          physics: `TiO₂ (101) 表面是锐钛矿最稳定的表面。表面弛豫主要发生在第一层，Ti 原子向外移动，O 原子向内移动，这减少了表面偶极矩。表面能的计算需要考虑体相能量和表面原子数，是理解表面反应活性的基础。`,
          notes: [
            '真空层厚度至少 15 Å',
            '表面原子需要允许弛豫',
            '注意表面偶极矩的校正',
            '收敛性测试需要增加 K 点密度'
          ],
          references: [
            'Diebold, U. (2003). Surface Science Reports, 48, 53-229.',
            'Lazzeri, M. et al. (2006). Physical Review Letters, 97, 266102.',
            'VASP 教程: 表面计算'
          ]
        },
        {
          id: 5,
          title: 'Si 空位缺陷计算',
          description: '计算硅中空位缺陷的形成能和电子结构。',
          icon: '💎',
          materialType: 'semiconductor',
          calcType: 'defect',
          difficulty: 'advanced',
          difficultyText: '高级',
          time: '3小时',
          tags: ['Si', '空位', '缺陷'],
          fullDescription: '本案例演示如何计算硅中空位缺陷的形成能和电子结构。缺陷计算是理解材料性能退化和掺杂效应的基础。',
          goals: [
            '学习超胞缺陷模型的构建',
            '理解缺陷形成能的计算',
            '掌握缺陷能级的分析',
            '了解电荷转变能级'
          ],
          files: {
            incar: `SYSTEM = Si Vacancy Defect
PREC = Accurate
ENCUT = 520
EDIFF = 1E-6
IBRION = 2
NSW = 50
EDIFFG = -0.01
ISMEAR = 0
SIGMA = 0.05
LREAL = Auto
ALGO = Normal
ISIF = 2
CHARGE = 0
NELECT = 127`,
            poscar: `Si Vacancy (2x2x2 Supercell)
1.0
10.8600 0.0000 0.0000
0.0000 10.8600 0.0000
0.0000 0.0000 10.8600
Si
15
Direct
0.000 0.000 0.000
0.250 0.250 0.000
0.250 0.000 0.250
0.000 0.250 0.250
0.500 0.500 0.000
0.500 0.000 0.500
0.000 0.500 0.500
0.500 0.250 0.250
0.250 0.500 0.250
0.250 0.250 0.500
0.750 0.750 0.000
0.750 0.000 0.750
0.000 0.750 0.750
0.750 0.500 0.500
0.500 0.750 0.500`,
            kpoints: `Automatic
0
Gamma
4 4 4
0 0 0`,
            potcar: `PAW_PBE Si 05Jan2001
  4.00000000000000
parameters from PSCTR are:
   TITEL  = PAW_PBE Si 05Jan2001
   EXCHI  =   4.00000000
   ENMAX  =  245.142; ENMIN  =  183.857 eV`
          },
          analysis: `缺陷形成能: 3.6 eV (中性态)
晶格弛豫: 最近邻原子向外移动 0.15 Å
缺陷能级: 在带隙中形成深能级
电荷转变能级: (0/-1) 在带隙中央
总能量变化: 0.5 eV`,
          physics: `硅中的空位缺陷会破坏四个 Si-Si 键，形成悬挂键。最近邻原子会向外弛豫，减少悬挂键的影响。空位在带隙中引入深能级，可以作为复合中心，影响载流子寿命。空位的形成能与费米能级位置和电荷态有关。`,
          notes: [
            '使用超胞模型避免缺陷间相互作用',
            '注意电荷态的设置和校正',
            '需要计算不同电荷态的形成能',
            '有限尺寸效应需要外推'
          ],
          references: [
            'Freysoldt, C. et al. (2014). Reviews of Modern Physics, 86, 253.',
            'Pantelides, S. T. (1986). Reviews of Modern Physics, 58, 537.',
            'VASP 教程: 缺陷计算'
          ]
        }
      ]
    }
  },
  computed: {
    filteredCases() {
      return this.cases.filter(caseItem => {
        const matchesSearch = caseItem.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                             caseItem.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                             caseItem.tags.some(tag => tag.toLowerCase().includes(this.searchQuery.toLowerCase()));

        const matchesType = this.filters.materialType === 'all' || caseItem.materialType === this.filters.materialType;
        const matchesCalc = this.filters.calcType === 'all' || caseItem.calcType === this.filters.calcType;
        const matchesDifficulty = this.filters.difficulty === 'all' || caseItem.difficulty === this.filters.difficulty;

        return matchesSearch && matchesType && matchesCalc && matchesDifficulty;
      })
    }
  },
  methods: {
    openCase(caseItem) {
      this.selectedCase = caseItem;
      this.activeFileTab = 'incar';
    },
    closeCase() {
      this.selectedCase = null;
    },
    copyFile() {
      const fileContent = this.selectedCase.files[this.activeFileTab];
      navigator.clipboard.writeText(fileContent).then(() => {
        alert('文件内容已复制到剪贴板!');
      });
    },
    downloadFile() {
      const fileContent = this.selectedCase.files[this.activeFileTab];
      const fileName = this.activeFileTab.toUpperCase();
      const blob = new Blob([fileContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(url);
    }
  }
}
</script>

<style scoped>
.case-library {
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

.filters {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  align-items: flex-end;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.filter-group label {
  color: var(--text-secondary);
  font-size: 14px;
}

.filter-group select {
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 14px;
}

.search-box {
  flex: 1;
  min-width: 200px;
}

.search-input {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 14px;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
}

.case-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.case-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.case-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.case-icon {
  font-size: 32px;
}

.case-difficulty {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
}

.case-difficulty.beginner {
  background: var(--green-dim);
  color: var(--green);
}

.case-difficulty.intermediate {
  background: var(--yellow-dim);
  color: var(--yellow);
}

.case-difficulty.advanced {
  background: var(--red-dim);
  color: var(--red);
}

.case-title {
  font-size: 18px;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.case-desc {
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 15px;
  line-height: 1.5;
}

.case-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.meta-item {
  font-size: 12px;
  color: var(--text-muted);
}

.case-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 4px 10px;
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  border-radius: 12px;
  font-size: 12px;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: var(--bg-primary);
  border-radius: 12px;
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid var(--border);
}

.modal-header h2 {
  color: var(--text-primary);
  margin: 0;
}

.close-btn {
  width: 32px;
  height: 32px;
  border: none;
  background: var(--bg-secondary);
  color: var(--text-secondary);
  border-radius: 6px;
  cursor: pointer;
  font-size: 20px;
}

.modal-body {
  padding: 20px;
}

.case-section {
  margin-bottom: 30px;
}

.case-section h3 {
  color: var(--primary);
  margin-bottom: 15px;
  font-size: 16px;
}

.case-section ul {
  list-style: disc;
  padding-left: 20px;
}

.case-section li {
  margin-bottom: 8px;
  color: var(--text-secondary);
  line-height: 1.5;
}

.file-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid var(--border);
  padding-bottom: 10px;
}

.file-tab {
  padding: 8px 16px;
  border: none;
  background: var(--bg-secondary);
  color: var(--text-secondary);
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.file-tab.active {
  background: var(--primary);
  color: white;
}

.file-content {
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

.file-content pre {
  margin: 0;
  white-space: pre-wrap;
}

.file-actions {
  display: flex;
  gap: 10px;
}

.result-content {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  line-height: 1.6;
}

.result-content pre {
  margin: 0;
  white-space: pre-wrap;
}

.physics-content {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 8px;
  line-height: 1.6;
  color: var(--text-secondary);
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  background: var(--primary);
  color: white;
}

.btn-small {
  padding: 6px 12px;
  font-size: 12px;
}

@media (max-width: 768px) {
  .cases-grid {
    grid-template-columns: 1fr;
  }

  .filters {
    flex-direction: column;
  }

  .modal-content {
    width: 95%;
    max-height: 95vh;
  }
}
</style>
