<template>
  <div class="math-container" v-html="renderedContent"></div>
</template>

<script>
export default {
  name: 'MathRenderer',
  props: {
    content: {
      type: String,
      required: true
    },
    display: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    renderedContent() {
      // 处理 LaTeX 公式
      let processed = this.content

      // 处理行内公式 $...$
      processed = processed.replace(/\$([^$]+)\$/g, '<span class="math-inline">$1</span>')

      // 处理块级公式 $$...$$
      processed = processed.replace(/\$\$([^$]+)\$\$/g, '<div class="math-display">$$1$$</div>')

      // 处理 \(...\) 行内公式
      processed = processed.replace(/\\\(([^)]+)\\\)/g, '<span class="math-inline">\\($1\\)</span>')

      // 处理 \[...\] 块级公式
      processed = processed.replace(/\\\[([^\]]+)\\\]/g, '<div class="math-display">\\[$1\\]</div>')

      // 处理换行
      processed = processed.replace(/\n/g, '<br>')

      return processed
    }
  },
  watch: {
    content: {
      handler() {
        this.$nextTick(() => {
          this.typesetMath()
        })
      },
      immediate: true
    }
  },
  methods: {
    typesetMath() {
      if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
        MathJax.typesetPromise([this.$el]).catch((err) => console.log('MathJax typeset error:', err))
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.typesetMath()
    })
  }
}
</script>

<style scoped>
.math-container {
  line-height: 1.8;
}

.math-inline {
  display: inline;
  padding: 0 2px;
}

.math-display {
  display: block;
  text-align: center;
  margin: 16px 0;
  padding: 12px;
  background: var(--bg-surface);
  border-radius: 8px;
  overflow-x: auto;
}

/* MathJax 样式优化 */
:deep(.MathJax) {
  font-size: 1.1em !important;
}

:deep(.MathJax_Display) {
  margin: 0 !important;
  padding: 8px 0;
}

:deep(.mjx-chtml) {
  font-size: 105% !important;
}

:deep(.mjx-math) {
  color: var(--text-primary) !important;
}
</style>
