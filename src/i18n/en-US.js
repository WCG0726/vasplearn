export default {
  nav: {
    home: 'Home',
    theory: 'Theory',
    input: 'Input Files',
    tasks: 'Tasks',
    output: 'Output',
    errors: 'Error Diagnosis',
    tools: 'Tools',
    calculator: 'Calculator',
    inputGenerator: 'Input Generator',
    batchScript: 'Batch Script',
    structureViewer: '3D Viewer',
    caseLibrary: 'Case Library',
    materialsDB: 'Materials Project',
    cheatsheet: 'Cheat Sheet'
  },
  home: {
    title: 'VASP Materials\nLearning Platform',
    subtitle: 'From Density Functional Theory to First-Principles Calculations. Master VASP usage systematically with tutorials, advanced tasks, and complete error diagnostics.',
    stats: {
      coreTopics: 'Core Topics',
      tutorials: 'Tutorials',
      diagnostics: 'Diagnostics',
      materials: 'Materials'
    },
    learningPath: 'Learning Path',
    learningPathDesc: 'Follow the recommended order to master materials calculation step by step',
    vaspWorkflow: 'VASP Calculation Workflow'
  },
  calculator: {
    title: 'VASP Calculation Tools',
    encut: 'ENCUT Cutoff Calculator',
    kpoints: 'K-point Density Calculator',
    memory: 'Memory Estimator',
    formation: 'Formation Energy Calculator',
    adsorption: 'Adsorption Energy Calculator'
  },
  inputGenerator: {
    title: 'VASP Input File Generator',
    subtitle: 'Interactively generate VASP input files with parameter validation and real-time preview.',
    incar: 'INCAR',
    poscar: 'POSCAR',
    kpoints: 'KPOINTS',
    copy: 'Copy',
    download: 'Download'
  },
  batchScript: {
    title: 'Batch Script Generator',
    subtitle: 'Auto-generate PBS/SLURM job scripts for batch VASP calculations.',
    pbs: 'PBS Script',
    slurm: 'SLURM Script',
    batch: 'Batch Tasks'
  },
  structureViewer: {
    title: '3D Structure Viewer',
    subtitle: 'Upload POSCAR files or input structure data to visualize crystal structures in real-time.',
    uploadFile: 'Upload File',
    pasteText: 'Paste Text',
    presetStructure: 'Preset Structure',
    ballStick: 'Ball & Stick',
    spaceFill: 'Space Fill',
    wireframe: 'Wireframe',
    polyhedra: 'Polyhedra'
  },
  caseLibrary: {
    title: 'Calculation Case Library',
    subtitle: 'Real calculation cases with complete input files, output analysis, and physical explanations.',
    filterMaterial: 'Material Type',
    filterCalc: 'Calculation Type',
    filterDifficulty: 'Difficulty',
    all: 'All',
    metal: 'Metal',
    semiconductor: 'Semiconductor',
    oxide: 'Oxide',
    twoD: '2D Material',
    molecule: 'Molecule',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced'
  },
  materialsDB: {
    title: 'Materials Project Database',
    subtitle: 'Query material properties, crystal structures, and electronic structure data.',
    apiKey: 'API Key',
    searchByFormula: 'Search by Formula',
    searchByMPID: 'Search by MP ID',
    searchByElements: 'Search by Elements',
    downloadStructure: 'Download Structure',
    viewDetails: 'View Details'
  },
  errors: {
    title: 'Error Diagnosis',
    scf: 'SCF Not Converging',
    ion: 'Ionic Step Issues',
    memory: 'Memory & Performance',
    files: 'File Errors',
    output: 'Output Anomalies'
  }
}
