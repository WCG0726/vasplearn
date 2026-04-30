import { createRouter, createWebHistory } from 'vue-router'

// 核心页面 - 使用懒加载
const HomeView = () => import('../views/HomeView.vue')
const TheoryView = () => import('../views/TheoryView.vue')
const InputView = () => import('../views/InputView.vue')
const TasksView = () => import('../views/TasksView.vue')
const OutputView = () => import('../views/OutputView.vue')
const ErrorsView = () => import('../views/ErrorsView.vue')
const ToolsView = () => import('../views/ToolsView.vue')

// 工具页面
const CalculatorView = () => import('../views/CalculatorView.vue')
const InputGeneratorView = () => import('../views/InputGeneratorView.vue')
const BatchScriptView = () => import('../views/BatchScriptView.vue')
const StructureViewerView = () => import('../views/StructureViewerView.vue')
const CaseLibraryView = () => import('../views/CaseLibraryView.vue')
const MaterialsDBView = () => import('../views/MaterialsDBView.vue')
const VideoTutorialsView = () => import('../views/VideoTutorialsView.vue')
const ShareResultsView = () => import('../views/ShareResultsView.vue')
const CheatSheetView = () => import('../views/CheatSheetView.vue')

// 计算任务详情页
const SurfaceView = () => import('../views/SurfaceView.vue')
const DefectView = () => import('../views/DefectView.vue')
const PhononView = () => import('../views/PhononView.vue')
const ConvergenceView = () => import('../views/ConvergenceView.vue')
const ThermoelectricView = () => import('../views/ThermoelectricView.vue')

// 错误诊断详情页
const ErrorsScfView = () => import('../views/ErrorsScfView.vue')
const ErrorsIonView = () => import('../views/ErrorsIonView.vue')
const ErrorsMemoryView = () => import('../views/ErrorsMemoryView.vue')
const ErrorsFilesView = () => import('../views/ErrorsFilesView.vue')
const ErrorsOutputView = () => import('../views/ErrorsOutputView.vue')

// Gaussian 教程
const GaussianView = () => import('../views/GaussianView.vue')
const GaussianInstallView = () => import('../views/GaussianInstallView.vue')
const GaussianInputView = () => import('../views/GaussianInputView.vue')
const GaussianTasksView = () => import('../views/GaussianTasksView.vue')
const GaussianOutputView = () => import('../views/GaussianOutputView.vue')
const GaussianVaspCompareView = () => import('../views/GaussianVaspCompareView.vue')
const GaussianParamsView = () => import('../views/GaussianParamsView.vue')
const GaussianVisualView = () => import('../views/GaussianVisualView.vue')
const GaussianFAQView = () => import('../views/GaussianFAQView.vue')
const GaussianGlossaryView = () => import('../views/GaussianGlossaryView.vue')

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/theory', name: 'theory', component: TheoryView },
  { path: '/input', name: 'input', component: InputView },
  { path: '/tasks', name: 'tasks', component: TasksView },
  { path: '/output', name: 'output', component: OutputView },
  { path: '/errors', name: 'errors', component: ErrorsView },
  { path: '/tools', name: 'tools', component: ToolsView },
  { path: '/tools/calculator', name: 'calculator', component: CalculatorView },
  { path: '/tools/input-generator', name: 'input-generator', component: InputGeneratorView },
  { path: '/tools/batch-script', name: 'batch-script', component: BatchScriptView },
  { path: '/tools/structure-viewer', name: 'structure-viewer', component: StructureViewerView },
  { path: '/tools/case-library', name: 'case-library', component: CaseLibraryView },
  { path: '/tools/materials-db', name: 'materials-db', component: MaterialsDBView },
  { path: '/tools/video-tutorials', name: 'video-tutorials', component: VideoTutorialsView },
  { path: '/tools/share-results', name: 'share-results', component: ShareResultsView },
  
  // 计算任务详情页
  { path: '/surface', name: 'surface', component: SurfaceView },
  { path: '/defect', name: 'defect', component: DefectView },
  { path: '/phonon', name: 'phonon', component: PhononView },
  { path: '/convergence', name: 'convergence', component: ConvergenceView },
  { path: '/cheatsheet', name: 'cheatsheet', component: CheatSheetView },
  { path: '/thermoelectric', name: 'thermoelectric', component: ThermoelectricView },
  
  // Gaussian 教程
  { path: '/gaussian', name: 'gaussian', component: GaussianView },
  { path: '/gaussian/install', name: 'gaussian-install', component: GaussianInstallView },
  { path: '/gaussian/input', name: 'gaussian-input', component: GaussianInputView },
  { path: '/gaussian/params', name: 'gaussian-params', component: GaussianParamsView },
  { path: '/gaussian/tasks', name: 'gaussian-tasks', component: GaussianTasksView },
  { path: '/gaussian/output', name: 'gaussian-output', component: GaussianOutputView },
  { path: '/gaussian/visual', name: 'gaussian-visual', component: GaussianVisualView },
  { path: '/gaussian/faq', name: 'gaussian-faq', component: GaussianFAQView },
  { path: '/gaussian/glossary', name: 'gaussian-glossary', component: GaussianGlossaryView },
  { path: '/gaussian/vasp-compare', name: 'gaussian-vasp-compare', component: GaussianVaspCompareView },
  
  // 错误诊断详情页
  { path: '/errors/scf', name: 'errors-scf', component: ErrorsScfView },
  { path: '/errors/ion', name: 'errors-ion', component: ErrorsIonView },
  { path: '/errors/memory', name: 'errors-memory', component: ErrorsMemoryView },
  { path: '/errors/files', name: 'errors-files', component: ErrorsFilesView },
  { path: '/errors/output', name: 'errors-output', component: ErrorsOutputView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 路由守卫 - 可以在这里添加页面加载进度条等功能
router.beforeEach((to, from, next) => {
  // 可以在这里添加页面标题更新
  document.title = to.name ? `${to.name} - VASP 学习平台` : 'VASP 学习平台'
  next()
})

export default router
