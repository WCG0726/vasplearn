<template>
  <div id="app">
    <HeaderNav @toggle-sidebar="toggleSidebar" />
    <SidebarNav :isOpen="sidebarOpen" @close-sidebar="closeSidebar" />
    <main class="mn">
      <router-view />
    </main>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import SidebarNav from './components/SidebarNav.vue'

export default {
  name: 'App',
  components: {
    HeaderNav,
    SidebarNav
  },
  data() {
    return {
      sidebarOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },
    closeSidebar() {
      this.sidebarOpen = false
    }
  },
  watch: {
    '$route'() {
      this.sidebarOpen = false
    }
  }
}
</script>
