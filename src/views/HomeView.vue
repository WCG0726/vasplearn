<template>
  <div class="hero active">
    <h1 class="hero-t" v-html="$t('home.title').replace('\n', '<br>')"></h1>
    <p class="hero-s">{{ $t('home.subtitle') }}</p>

    <ProgressWidget />

    <div class="stats">
      <div class="stat"><div class="stat-n">15</div><div class="stat-l">{{ $t('home.stats.coreTopics') }}</div></div>
      <div class="stat"><div class="stat-n">8</div><div class="stat-l">{{ $t('home.stats.tutorials') }}</div></div>
      <div class="stat"><div class="stat-n">20+</div><div class="stat-l">{{ $t('home.stats.diagnostics') }}</div></div>
      <div class="stat"><div class="stat-n">∞</div><div class="stat-l">{{ $t('home.stats.materials') }}</div></div>
    </div>
    <h2 class="stitle">{{ $t('home.learningPath') }}</h2>
    <p class="sdesc">{{ $t('home.learningPathDesc') }}</p>
    <div class="pg">
      <router-link to="/theory" class="pc" style="--ca:var(--blue)">
        <div class="pc-i">📐</div>
        <div class="pc-t">理论基础</div>
        <div class="pc-d">密度泛函理论、赝势方法、平面波基组</div>
        <div class="pc-m"><span>⏱ 约 2h</span><span>📖 3 章节</span></div>
      </router-link>
      <router-link to="/input" class="pc" style="--ca:var(--green)">
        <div class="pc-i">📁</div>
        <div class="pc-t">输入文件</div>
        <div class="pc-d">INCAR、POSCAR、KPOINTS、POTCAR 四大核心文件</div>
        <div class="pc-m"><span>⏱ 约 3h</span><span>📖 4 章节</span></div>
      </router-link>
      <router-link to="/tasks" class="pc" style="--ca:var(--purple)">
        <div class="pc-i">📊</div>
        <div class="pc-t">基础计算</div>
        <div class="pc-d">结构优化、态密度、能带结构</div>
        <div class="pc-m"><span>⏱ 约 4h</span><span>📖 3 章节</span></div>
      </router-link>
      <router-link to="/errors" class="pc" style="--ca:var(--red)">
        <div class="pc-i">🚨</div>
        <div class="pc-t">错误诊断</div>
        <div class="pc-d">SCF 不收敛、内存溢出、文件错误等</div>
        <div class="pc-m"><span>⏱ 按需查阅</span><span>📖 5 类问题</span></div>
      </router-link>
      <router-link to="/tools" class="pc" style="--ca:var(--accent)">
        <div class="pc-i">🛠️</div>
        <div class="pc-t">工具与速查</div>
        <div class="pc-d">VESTA、VASPKIT、pymatgen 等辅助工具</div>
        <div class="pc-m"><span>⏱ 约 1h</span></div>
      </router-link>
    </div>
    <h2 class="stitle">{{ $t('home.vaspWorkflow') }}</h2>
    <div class="fc">
      <div class="fn2-node s">🧱 确定材料结构</div><div class="fa"></div>
      <div class="fn2-node p">📝 编写 POSCAR</div><div class="fa"></div>
      <div class="fn2-node p">⚛️ 准备 POTCAR</div><div class="fa"></div>
      <div class="fn2-node p">🔲 设置 KPOINTS</div><div class="fa"></div>
      <div class="fn2-node p">⚙️ 配置 INCAR</div><div class="fa"></div>
      <div class="fn2-node p">🚀 提交计算</div><div class="fa"></div>
      <div class="fn2-node p">🔍 检查收敛</div><div class="fa"></div>
      <div class="fn2-node e">✅ 提取物理量</div>
    </div>
  </div>
</template>

<script>
import ProgressWidget from '../components/ProgressWidget.vue'

export default {
  name: 'HomeView',
  components: {
    ProgressWidget
  }
}
</script>
