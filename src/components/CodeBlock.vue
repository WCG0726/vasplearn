<template>
  <div class="code-block">
    <div class="code-header">
      <span class="code-label">{{ label }}</span>
      <span class="code-filename" v-if="filename">{{ filename }}</span>
      <button class="copy-btn" @click="copyCode" :class="{ copied: isCopied }">
        {{ isCopied ? '已复制!' : '复制' }}
      </button>
    </div>
    <div class="code-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CodeBlock',
  props: {
    label: {
      type: String,
      default: 'Code'
    },
    filename: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isCopied: false
    }
  },
  methods: {
    copyCode() {
      const codeElement = this.$el.querySelector('pre, code')
      if (codeElement) {
        navigator.clipboard.writeText(codeElement.textContent).then(() => {
          this.isCopied = true
          setTimeout(() => {
            this.isCopied = false
          }, 2000)
        })
      }
    }
  }
}
</script>

<style scoped>
.code-block {
  position: relative;
  margin: 16px 0 24px;
  border-radius: var(--r);
  overflow: hidden;
  border: 1px solid var(--border);
}

.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: var(--bg-elevated);
  border-bottom: 1px solid var(--border);
  font-size: 12px;
  color: var(--text-muted);
}

.code-label {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.code-filename {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-secondary);
  margin-left: auto;
  margin-right: 12px;
}

.copy-btn {
  background: var(--bg-hover);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 11px;
  cursor: pointer;
  font-family: var(--font-body);
  transition: color 0.15s, border-color 0.15s;
}

.copy-btn:hover {
  color: var(--text-primary);
  border-color: var(--border-light);
}

.copy-btn.copied {
  color: var(--green);
  border-color: var(--green);
}

.code-content {
  background: var(--bg-surface);
}

.code-content :deep(pre) {
  margin: 0;
  padding: 16px;
  overflow-x: auto;
}
</style>
