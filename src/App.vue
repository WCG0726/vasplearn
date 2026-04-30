<template>
  <div id="app">
    <HeaderNav @toggle-sidebar="toggleSidebar" />
    <SidebarNav :isOpen="sidebarOpen" @close-sidebar="closeSidebar" />
    <main class="mn">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <DisclaimerBanner />

    <!-- 回到顶部按钮 -->
    <button
      v-show="showBackToTop"
      class="back-to-top"
      @click="scrollToTop"
      title="回到顶部"
    >
      ↑
    </button>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import SidebarNav from './components/SidebarNav.vue'
import DisclaimerBanner from './components/DisclaimerBanner.vue'

export default {
  name: 'App',
  components: {
    HeaderNav,
    SidebarNav,
    DisclaimerBanner
  },
  data() {
    return {
      sidebarOpen: false,
      showBackToTop: false
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },
    closeSidebar() {
      this.sidebarOpen = false
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    handleScroll() {
      this.showBackToTop = window.scrollY > 300
    }
  },
  watch: {
    '$route'() {
      this.sidebarOpen = false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
