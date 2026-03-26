import { ref, watch } from 'vue'

const STORAGE_KEY = 'vasp-learn-progress'

// 从 localStorage 加载进度
const loadProgress = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : {}
  } catch {
    return {}
  }
}

// 保存进度到 localStorage
const saveProgress = (progress) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch (e) {
    console.warn('Failed to save progress:', e)
  }
}

// 学习进度状态
const progress = ref(loadProgress())

// 所有可学习的项目
const learnableItems = {
  theory: {
    title: '理论基础',
    items: [
      { id: 'theory-dft', title: 'DFT 基本原理', path: '/theory' },
      { id: 'theory-functional', title: '交换关联泛函', path: '/theory' },
      { id: 'theory-paw', title: '赝势与基组', path: '/theory' },
      { id: 'theory-kpoint', title: 'K 点采样', path: '/theory' }
    ]
  },
  input: {
    title: '输入文件',
    items: [
      { id: 'input-incar', title: 'INCAR 文件', path: '/input' },
      { id: 'input-poscar', title: 'POSCAR 文件', path: '/input' },
      { id: 'input-kpoints', title: 'KPOINTS 文件', path: '/input' },
      { id: 'input-potcar', title: 'POTCAR 文件', path: '/input' }
    ]
  },
  tasks: {
    title: '计算任务',
    items: [
      { id: 'tasks-relax', title: '结构优化', path: '/tasks' },
      { id: 'tasks-dos', title: '态密度计算', path: '/tasks' },
      { id: 'tasks-band', title: '能带结构', path: '/tasks' },
      { id: 'tasks-surface', title: '表面计算', path: '/tasks' },
      { id: 'tasks-defect', title: '缺陷计算', path: '/tasks' },
      { id: 'tasks-phonon', title: '声子计算', path: '/tasks' }
    ]
  },
  errors: {
    title: '错误诊断',
    items: [
      { id: 'errors-scf', title: 'SCF 不收敛', path: '/errors' },
      { id: 'errors-ion', title: '离子步问题', path: '/errors' },
      { id: 'errors-memory', title: '内存问题', path: '/errors' },
      { id: 'errors-files', title: '文件错误', path: '/errors' }
    ]
  }
}

export function useProgress() {
  // 标记项目为已完成
  const markComplete = (itemId) => {
    progress.value = {
      ...progress.value,
      [itemId]: {
        completed: true,
        completedAt: new Date().toISOString()
      }
    }
    saveProgress(progress.value)
  }

  // 标记项目为未完成
  const markIncomplete = (itemId) => {
    const newProgress = { ...progress.value }
    delete newProgress[itemId]
    progress.value = newProgress
    saveProgress(progress.value)
  }

  // 切换完成状态
  const toggleComplete = (itemId) => {
    if (isComplete(itemId)) {
      markIncomplete(itemId)
    } else {
      markComplete(itemId)
    }
  }

  // 检查项目是否完成
  const isComplete = (itemId) => {
    return !!progress.value[itemId]?.completed
  }

  // 计算总进度
  const getTotalProgress = () => {
    const totalItems = Object.values(learnableItems).reduce(
      (acc, category) => acc + category.items.length,
      0
    )
    const completedItems = Object.values(progress.value).filter(p => p.completed).length
    return {
      total: totalItems,
      completed: completedItems,
      percentage: totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0
    }
  }

  // 获取分类进度
  const getCategoryProgress = (category) => {
    if (!learnableItems[category]) return { total: 0, completed: 0, percentage: 0 }
    const items = learnableItems[category].items
    const completed = items.filter(item => isComplete(item.id)).length
    return {
      total: items.length,
      completed,
      percentage: Math.round((completed / items.length) * 100)
    }
  }

  // 重置所有进度
  const resetProgress = () => {
    progress.value = {}
    saveProgress(progress.value)
  }

  return {
    progress,
    learnableItems,
    markComplete,
    markIncomplete,
    toggleComplete,
    isComplete,
    getTotalProgress,
    getCategoryProgress,
    resetProgress
  }
}
