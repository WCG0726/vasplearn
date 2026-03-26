<template>
  <div>
    <div class="sbov" :class="{ show: isOpen }" @click="closeSidebar"></div>
    <aside class="sb" :class="{ open: isOpen }">
      <div class="sb-sec">
        <div class="sb-lbl">入门指南</div>
        <router-link to="/theory" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">📐</span>理论基础
          </div>
        </router-link>
        <router-link to="/input" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">📁</span>输入文件
          </div>
        </router-link>
        <router-link to="/tasks" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">📊</span>计算任务
          </div>
        </router-link>
        <router-link to="/surface" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">🧊</span>表面计算<span class="bd bd-new">NEW</span>
          </div>
        </router-link>
        <router-link to="/defect" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">💎</span>缺陷计算<span class="bd bd-new">NEW</span>
          </div>
        </router-link>
        <router-link to="/phonon" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">🔊</span>声子计算<span class="bd bd-new">NEW</span>
          </div>
        </router-link>
        <router-link to="/thermoelectric" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">⚡</span>热电计算<span class="bd bd-new">NEW</span>
          </div>
        </router-link>
      </div>
      <div class="sb-sec">
        <div class="sb-lbl">Gaussian 教程</div>
        <router-link to="/gaussian" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">🔬</span>Gaussian 概述<span class="bd bd-new">NEW</span>
          </div>
        </router-link>
        <router-link to="/gaussian/install" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">📦</span>安装配置
          </div>
        </router-link>
        <router-link to="/gaussian/input" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">📝</span>输入文件
          </div>
        </router-link>
        <router-link to="/gaussian/params" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">⚙️</span>参数详解
          </div>
        </router-link>
        <router-link to="/gaussian/tasks" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">📊</span>计算任务
          </div>
        </router-link>
        <router-link to="/gaussian/output" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">📋</span>输出分析
          </div>
        </router-link>
        <router-link to="/gaussian/visual" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">🎨</span>可视化
          </div>
        </router-link>
        <router-link to="/gaussian/faq" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">❓</span>常见问题
          </div>
        </router-link>
        <router-link to="/gaussian/glossary" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">📖</span>名词解释
          </div>
        </router-link>
        <router-link to="/gaussian/vasp-compare" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">🔄</span>与 VASP 对比
          </div>
        </router-link>
      </div>
      <div class="sb-sec">
        <div class="sb-lbl">结果分析</div>
        <router-link to="/output" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">📋</span>输出文件
          </div>
        </router-link>
        <router-link to="/convergence" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">🎯</span>收敛性测试
          </div>
        </router-link>
      </div>
      <div class="sb-sec">
        <div class="sb-lbl">错误诊断</div>
        <router-link to="/errors" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">🚨</span>诊断总览<span class="bd bd-hot">重要</span>
          </div>
        </router-link>
        <router-link to="/errors/scf" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">⚡</span>SCF 不收敛<span class="bd bd-hot">高频</span>
          </div>
        </router-link>
        <router-link to="/errors/ion" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">💥</span>离子步问题
          </div>
        </router-link>
        <router-link to="/errors/memory" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">💾</span>内存与性能
          </div>
        </router-link>
        <router-link to="/errors/files" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">📂</span>文件错误
          </div>
        </router-link>
        <router-link to="/errors/output" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">🔍</span>输出异常
          </div>
        </router-link>
      </div>
      <div class="sb-sec">
        <div class="sb-lbl">工具与资源</div>
        <router-link to="/tools" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">🛠️</span>辅助工具
          </div>
        </router-link>
        <router-link to="/cheatsheet" custom v-slot="{ navigate, isActive }">
          <div class="sb-it" :class="{ active: isActive }" @click="navigate">
            <span class="ic">📝</span>速查手册
          </div>
        </router-link>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'SidebarNav',
  props: {
    isOpen: Boolean
  },
  methods: {
    closeSidebar() {
      this.$emit('close-sidebar')
    }
  }
}
</script>

<style scoped>
.sb {
  position: fixed;
  top: var(--header-h);
  left: 0;
  width: var(--sidebar-w);
  height: calc(100vh - var(--header-h));
  background: var(--bg-primary);
  border-right: 1px solid var(--border);
  overflow-y: auto;
  padding: 16px 0;
  z-index: 90;
  transition: transform .3s
}

.sb-sec {
  padding: 0 16px;
  margin-bottom: 8px
}

.sb-lbl {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: var(--text-muted);
  padding: 12px 12px 6px
}

.sb-it {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all .15s;
  color: var(--text-secondary);
  font-size: 13.5px;
  user-select: none;
  text-decoration: none
}

.sb-it:hover {
  background: var(--bg-hover);
  color: var(--text-primary)
}

.sb-it.active {
  background: var(--accent-glow);
  color: var(--accent);
  font-weight: 500
}

.sb-it .ic {
  width: 20px;
  text-align: center;
  font-size: 14px;
  flex-shrink: 0
}

.sb-it .bd {
  margin-left: auto;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px
}

.bd-new {
  background: var(--accent-glow);
  color: var(--accent)
}

.bd-hot {
  background: var(--red-dim);
  color: var(--red)
}

.bd-base {
  background: var(--green-dim);
  color: var(--green)
}

.sbov {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.5);
  z-index: 85
}

.sbov.show {
  display: block
}

@media(max-width:900px) {
  .sb {
    transform: translateX(-100%)
  }

  .sb.open {
    transform: translateX(0);
    box-shadow: 4px 0 20px rgba(0,0,0,.5)
  }
}
</style>
