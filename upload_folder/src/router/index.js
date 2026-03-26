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
