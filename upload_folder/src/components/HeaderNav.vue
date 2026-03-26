<template>
  <header class="hdr">
    <button class="mtog" @click="toggleSidebar">☰</button>
    <router-link to="/" class="hdr-logo">
      <div class="ico">V</div>
      <div class="txt"><span>VASP</span>Learn</div>
    </router-link>
    <SearchBox />
    <nav class="hdr-nav">
      <router-link to="/" custom v-slot="{ navigate, isActive }">
        <button @click="navigate" :class="{ active: isActive }">首页</button>
      </router-link>
      <router-link to="/theory" custom v-slot="{ navigate, isActive }">
        <button @click="navigate" :class="{ active: isActive }">理论</button>
      </router-link>
      <router-link to="/input" custom v-slot="{ navigate, isActive }">
        <button @click="navigate" :class="{ active: isActive }">输入文件</button>
      </router-link>
      <router-link to="/output" custom v-slot="{ navigate, isActive }">
        <button @click="navigate" :class="{ active: isActive }">结果分析</button>
      </router-link>
      <router-link to="/errors" custom v-slot="{ navigate, isActive }">
        <button @click="navigate" :class="{ active: isActive }">错误诊断</button>
      </router-link>
      <router-link to="/tools" custom v-slot="{ navigate, isActive }">
        <button @click="navigate" :class="{ active: isActive }">工具</button>
      </router-link>
    </nav>
  </header>
</template>

<script>
import SearchBox from './SearchBox.vue'

export default {
  name: 'HeaderNav',
  components: {
    SearchBox
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar')
    }
  }
}
</script>

<style scoped>
.hdr {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-h);
  background: rgba(14,17,23,.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  padding: 0 24px;
  z-index: 100;
  gap: 20px
}

.hdr-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  flex-shrink: 0;
  text-decoration: none
}

.hdr-logo .ico {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg,var(--accent),var(--accent-dim));
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 14px;
  color: var(--bg-deep)
}

.hdr-logo .txt {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: .5px
}

.hdr-logo .txt span {
  color: var(--accent)
}

.hdr-nav {
  display: flex;
  gap: 4px;
  margin-left: auto;
  flex-wrap: wrap
}

.hdr-nav button {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all .2s;
  white-space: nowrap
}

.hdr-nav button:hover {
  color: var(--text-primary);
  background: var(--bg-hover)
}

.hdr-nav button.active {
  color: var(--accent);
  background: var(--accent-glow)
}

.mtog {
  display: none;
  background: none;
  border: 1px solid var(--border);
  color: var(--text-primary);
  width: 36px;
  height: 36px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  align-items: center;
  justify-content: center
}

@media(max-width:900px) {
  .mtog {
    display: flex
  }

  .hdr-nav {
    display: none
  }
}
</style>
