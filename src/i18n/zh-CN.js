export default {
  nav: {
    home: '首页',
    theory: '理论基础',
    input: '输入文件',
    tasks: '计算任务',
    output: '输出文件',
    errors: '错误诊断',
    tools: '工具与资源',
    calculator: '计算器',
    inputGenerator: '输入文件生成器',
    batchScript: '批量脚本生成器',
    structureViewer: '3D 结构可视化',
    caseLibrary: '计算案例库',
    materialsDB: 'Materials Project',
    cheatsheet: '速查手册'
  },
  home: {
    title: 'VASP 材料计算\n学习平台',
    subtitle: '从密度泛函理论到第一性原理计算，系统掌握 VASP 的使用方法。包含基础教程、进阶计算任务和完整的错误诊断系统。',
    stats: {
      coreTopics: '核心知识点',
      tutorials: '计算任务教程',
      diagnostics: '错误诊断方案',
      materials: '可探索的材料'
    },
    learningPath: '学习路径',
    learningPathDesc: '按照推荐顺序学习，循序渐进地掌握材料计算',
    vaspWorkflow: 'VASP 计算流程'
  },
  calculator: {
    title: 'VASP 计算工具',
    encut: 'ENCUT 截断能计算器',
    kpoints: 'K 点密度计算器',
    memory: '内存估算器',
    formation: '形成能计算器',
    adsorption: '吸附能计算器'
  },
  inputGenerator: {
    title: 'VASP 输入文件生成器',
    subtitle: '交互式生成 VASP 计算所需的输入文件，支持参数校验和实时预览。',
    incar: 'INCAR',
    poscar: 'POSCAR',
    kpoints: 'KPOINTS',
    copy: '复制',
    download: '下载'
  },
  batchScript: {
    title: '批量计算脚本生成器',
    subtitle: '自动生成 PBS/SLURM 作业脚本，支持批量提交多个 VASP 计算任务。',
    pbs: 'PBS 脚本',
    slurm: 'SLURM 脚本',
    batch: '批量任务'
  },
  structureViewer: {
    title: '3D 结构可视化',
    subtitle: '上传 POSCAR 文件或输入结构数据，实时查看晶体结构。',
    uploadFile: '上传文件',
    pasteText: '粘贴文本',
    presetStructure: '预设结构',
    ballStick: '球棍模型',
    spaceFill: '空间填充',
    wireframe: '线框模型',
    polyhedra: '多面体'
  },
  caseLibrary: {
    title: '计算案例库',
    subtitle: '真实计算案例，包含完整输入文件、输出分析和物理解释。',
    filterMaterial: '材料类型',
    filterCalc: '计算类型',
    filterDifficulty: '难度级别',
    all: '全部',
    metal: '金属',
    semiconductor: '半导体',
    oxide: '氧化物',
    twoD: '二维材料',
    molecule: '分子',
    beginner: '入门',
    intermediate: '中级',
    advanced: '高级'
  },
  materialsDB: {
    title: 'Materials Project 数据库',
    subtitle: '查询材料性质、晶体结构和电子结构数据。',
    apiKey: 'API 密钥',
    searchByFormula: '按化学式搜索',
    searchByMPID: '按 MP ID 搜索',
    searchByElements: '按元素搜索',
    downloadStructure: '下载结构',
    viewDetails: '查看详情'
  },
  errors: {
    title: '错误诊断',
    scf: 'SCF 不收敛',
    ion: '离子步问题',
    memory: '内存与性能',
    files: '文件错误',
    output: '输出异常'
  }
}
