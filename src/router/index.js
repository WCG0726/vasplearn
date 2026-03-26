import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheoryView from '../views/TheoryView.vue'
import InputView from '../views/InputView.vue'
import TasksView from '../views/TasksView.vue'
import OutputView from '../views/OutputView.vue'
import ErrorsView from '../views/ErrorsView.vue'
import ToolsView from '../views/ToolsView.vue'
import CalculatorView from '../views/CalculatorView.vue'
import SurfaceView from '../views/SurfaceView.vue'
import DefectView from '../views/DefectView.vue'
import PhononView from '../views/PhononView.vue'
import ConvergenceView from '../views/ConvergenceView.vue'
import CheatSheetView from '../views/CheatSheetView.vue'
import ErrorsScfView from '../views/ErrorsScfView.vue'
import ErrorsIonView from '../views/ErrorsIonView.vue'
import ErrorsMemoryView from '../views/ErrorsMemoryView.vue'
import ErrorsFilesView from '../views/ErrorsFilesView.vue'
import ErrorsOutputView from '../views/ErrorsOutputView.vue'
import ThermoelectricView from '../views/ThermoelectricView.vue'
import GaussianView from '../views/GaussianView.vue'
import GaussianInstallView from '../views/GaussianInstallView.vue'
import GaussianInputView from '../views/GaussianInputView.vue'
import GaussianTasksView from '../views/GaussianTasksView.vue'
import GaussianOutputView from '../views/GaussianOutputView.vue'
import GaussianVaspCompareView from '../views/GaussianVaspCompareView.vue'
import GaussianParamsView from '../views/GaussianParamsView.vue'
import GaussianVisualView from '../views/GaussianVisualView.vue'
import GaussianFAQView from '../views/GaussianFAQView.vue'
import GaussianGlossaryView from '../views/GaussianGlossaryView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/theory', name: 'theory', component: TheoryView },
  { path: '/input', name: 'input', component: InputView },
  { path: '/tasks', name: 'tasks', component: TasksView },
  { path: '/output', name: 'output', component: OutputView },
  { path: '/errors', name: 'errors', component: ErrorsView },
  { path: '/tools', name: 'tools', component: ToolsView },
  { path: '/tools/calculator', name: 'calculator', component: CalculatorView },
  
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
  routes
})

export default router
