<template>
  <div class="theme-toggle" @click="toggleTheme">
    <span class="theme-icon">{{ isDark ? '☀️' : '🌙' }}</span>
    <span class="theme-label">{{ isDark ? '浅色模式' : '深色模式' }}</span>
  </div>
</template>

<script>
export default {
  name: 'ThemeToggle',
  data() {
    return {
      isDark: false
    }
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
      this.applyTheme();
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    },
    applyTheme() {
      if (this.isDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    }
  },
  mounted() {
    // 检查本地存储的主题偏好
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDark = savedTheme === 'dark';
    } else {
      // 检查系统偏好
      this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.applyTheme();
  }
}
</script>

<style scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.theme-toggle:hover {
  background: var(--bg-hover);
}

.theme-icon {
  font-size: 16px;
}

.theme-label {
  font-size: 13px;
  color: var(--text-secondary);
}
</style>
