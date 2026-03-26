<template>
  <div class="disclaimer">
    <div class="disclaimer-content">
      <span class="disclaimer-icon">⚠️</span>
      <p><strong>免责声明：</strong>本站内容大部分由 AI 生成，仅供参考学习使用。如有疑问，请以官方文档或专业教材为准。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DisclaimerBanner'
}
</script>

<style scoped>
.disclaimer {
  position: fixed;
  bottom: 0;
  left: var(--sidebar-w);
  right: 0;
  background: linear-gradient(90deg, rgba(232, 168, 56, 0.15), rgba(232, 168, 56, 0.05));
  border-top: 1px solid var(--accent);
  padding: 8px 20px;
  z-index: 50;
  backdrop-filter: blur(10px);
}

.disclaimer-content {
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 960px;
  margin: 0 auto;
}

.disclaimer-icon {
  font-size: 16px;
  flex-shrink: 0;
}

.disclaimer p {
  margin: 0;
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.5;
}

.disclaimer strong {
  color: var(--accent);
}

@media(max-width:900px) {
  .disclaimer {
    left: 0;
  }
}
</style>
