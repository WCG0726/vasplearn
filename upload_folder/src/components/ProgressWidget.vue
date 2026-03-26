<template>
  <div class="progress-widget">
    <div class="progress-header">
      <h3>学习进度</h3>
      <div class="progress-stats">
        <span class="progress-percentage">{{ totalProgress.percentage }}%</span>
        <span class="progress-detail">{{ totalProgress.completed }}/{{ totalProgress.total }} 完成</span>
      </div>
    </div>
    <div class="progress-bar-container">
      <div class="progress-bar" :style="{ width: totalProgress.percentage + '%' }"></div>
    </div>
    <div class="category-progress">
      <div
        v-for="(category, key) in learnableItems"
        :key="key"
        class="category-item"
      >
        <div class="category-info">
          <span class="category-name">{{ category.title }}</span>
          <span class="category-count">{{ getCategoryProgress(key).completed }}/{{ category.items.length }}</span>
        </div>
        <div class="category-bar-container">
          <div
            class="category-bar"
            :style="{ width: getCategoryProgress(key).percentage + '%' }"
          ></div>
        </div>
      </div>
    </div>
    <button v-if="totalProgress.completed > 0" class="reset-btn" @click="confirmReset">
      重置进度
    </button>
  </div>
</template>

<script>
import { useProgress } from '../composables/useProgress'

export default {
  name: 'ProgressWidget',
  setup() {
    const { learnableItems, getTotalProgress, getCategoryProgress, resetProgress } = useProgress()

    const totalProgress = getTotalProgress()

    const confirmReset = () => {
      if (confirm('确定要重置所有学习进度吗？此操作不可恢复。')) {
        resetProgress()
        // 刷新页面以更新显示
        window.location.reload()
      }
    }

    return {
      learnableItems,
      totalProgress,
      getCategoryProgress,
      confirmReset
    }
  }
}
</script>

<style scoped>
.progress-widget {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--rl);
  padding: 24px;
  margin-bottom: 24px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.progress-header h3 {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.progress-stats {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.progress-percentage {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 700;
  color: var(--accent);
}

.progress-detail {
  font-size: 12px;
  color: var(--text-muted);
}

.progress-bar-container {
  height: 8px;
  background: var(--bg-elevated);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 20px;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--green));
  border-radius: 4px;
  transition: width 0.5s ease;
}

.category-progress {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.category-item {
  padding: 0;
}

.category-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.category-name {
  font-size: 13px;
  color: var(--text-secondary);
}

.category-count {
  font-size: 12px;
  font-family: var(--font-mono);
  color: var(--text-muted);
}

.category-bar-container {
  height: 4px;
  background: var(--bg-elevated);
  border-radius: 2px;
  overflow: hidden;
}

.category-bar {
  height: 100%;
  background: var(--accent);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.reset-btn {
  margin-top: 16px;
  width: 100%;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-muted);
  padding: 8px 16px;
  border-radius: 6px;
  font-family: var(--font-body);
  font-size: 12px;
  cursor: pointer;
  transition: all .2s;
}

.reset-btn:hover {
  border-color: var(--red);
  color: var(--red);
}
</style>
