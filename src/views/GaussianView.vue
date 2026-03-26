<template>
  <div class="sec active">
    <div class="bread"><router-link to="/">首页</router-link>/<span>Gaussian 教程</span></div>
    
    <h2>Gaussian 量子化学计算</h2>
    <p>Gaussian 是最广泛使用的量子化学计算软件，专注于分子体系的电子结构计算。</p>

    <h3>1. Gaussian 简介</h3>
    <table class="tb">
      <thead><tr><th>特性</th><th>Gaussian</th><th>VASP</th></tr></thead>
      <tbody>
        <tr><td><strong>计算体系</strong></td><td>分子、团簇</td><td>周期性体系（晶体、表面）</td></tr>
        <tr><td><strong>基组</strong></td><td>高斯基组</td><td>平面波基组</td></tr>
        <tr><td><strong>赝势</strong></td><td>不需要</td><td>PAW 赝势</td></tr>
        <tr><td><strong>主要应用</strong></td><td>有机分子、反应机理</td><td>固体、材料</td></tr>
        <tr><td><strong>计算效率</strong></td><td>小体系快</td><td>大体系快</td></tr>
      </tbody>
    </table>

    <h3>2. Gaussian 核心功能</h3>
    <div class="pg">
      <div class="pc" style="--ca:var(--blue)">
        <div class="pc-i">🔬</div>
        <div class="pc-t">几何优化</div>
        <div class="pc-d">寻找分子的稳定构型</div>
      </div>
      <div class="pc" style="--ca:var(--green)">
        <div class="pc-i">⚡</div>
        <div class="pc-t">能量计算</div>
        <div class="pc-d">计算分子的总能量</div>
      </div>
      <div class="pc" style="--ca:var(--purple)">
        <div class="pc-i">📊</div>
        <div class="pc-t">频率计算</div>
        <div class="pc-d">振动频率和红外光谱</div>
      </div>
      <div class="pc" style="--ca:var(--accent)">
        <div class="pc-i">🔗</div>
        <div class="pc-t">反应路径</div>
        <div class="pc-d">过渡态搜索和IRC</div>
      </div>
    </div>

    <h3>3. 支持的计算方法</h3>
    <table class="tb">
      <thead><tr><th>方法</th><th>关键词</th><th>精度</th><th>计算成本</th><th>适用体系</th></tr></thead>
      <tbody>
        <tr><td><strong>HF</strong></td><td><code class="ic">HF</code></td><td>一般</td><td>低</td><td>定性分析</td></tr>
        <tr><td><strong>DFT</strong></td><td><code class="ic">B3LYP</code></td><td>较好</td><td>中</td><td>最常用</td></tr>
        <tr><td><strong>MP2</strong></td><td><code class="ic">MP2</code></td><td>好</td><td>高</td><td>弱相互作用</td></tr>
        <tr><td><strong>CCSD(T)</strong></td><td><code class="ic">CCSD(T)</code></td><td>极高</td><td>极高</td><td>高精度基准</td></tr>
        <tr><td><strong>TDDFT</strong></td><td><code class="ic">TD</code></td><td>较好</td><td>中</td><td>激发态</td></tr>
      </tbody>
    </table>

    <h3>4. 常用泛函推荐</h3>
    <table class="tb">
      <thead><tr><th>泛函</th><th>关键词</th><th>适用场景</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td><strong>B3LYP</strong></td><td><code class="ic">B3LYP</code></td><td>通用</td><td>最广泛使用</td></tr>
        <tr><td><strong>PBE0</strong></td><td><code class="ic">PBE0</code></td><td>通用</td><td>与 VASP PBE 对应</td></tr>
        <tr><td><strong>M06-2X</strong></td><td><code class="ic">M062X</code></td><td>有机分子</td><td>反应能垒准确</td></tr>
        <tr><td><strong>ωB97X-D</strong></td><td><code class="ic">wB97XD</code></td><td>非共价作用</td><td>包含色散修正</td></tr>
        <tr><td><strong>B2PLYP</strong></td><td><code class="ic">B2PLYP</code></td><td>高精度</td><td>双杂化泛函</td></tr>
      </tbody>
    </table>

    <h3>5. 基组选择指南</h3>
    <table class="tb">
      <thead><tr><th>基组</th><th>关键词</th><th>精度</th><th>适用场景</th></tr></thead>
      <tbody>
        <tr><td><strong>6-31G(d)</strong></td><td><code class="ic">6-31G(d)</code></td><td>中</td><td>常规计算</td></tr>
        <tr><td><strong>6-31+G(d,p)</strong></td><td><code class="ic">6-31+G(d,p)</code></td><td>较好</td><td>阴离子、电子亲和</td></tr>
        <tr><td><strong>6-311+G(2d,2p)</strong></td><td><code class="ic">6-311+G(2d,2p)</code></td><td>高</td><td>精确计算</td></tr>
        <tr><td><strong>cc-pVDZ</strong></td><td><code class="ic">cc-pVDZ</code></td><td>中</td><td>相关一致性</td></tr>
        <tr><td><strong>cc-pVTZ</strong></td><td><code class="ic">cc-pVTZ</code></td><td>高</td><td>高精度计算</td></tr>
        <tr><td><strong>def2-TZVP</strong></td><td><code class="ic">def2TZVP</code></td><td>高</td><td>通用高精度</td></tr>
      </tbody>
    </table>

    <div class="ib tip"><strong>推荐组合：</strong>
      <ul>
        <li>常规计算：<code class="ic">B3LYP/6-31G(d)</code></li>
        <li>精确计算：<code class="ic">M06-2X/6-311+G(2d,2p)</code></li>
        <li>弱相互作用：<code class="ic">ωB97X-D/def2-TZVP</code></li>
      </ul>
    </div>

    <h3>6. Gaussian 与 VASP 的配合使用</h3>
    <div class="db">
      <div class="db-t">互补应用场景</div>
      <ul>
        <li><strong>Gaussian</strong>：分子初始结构优化、反应机理研究</li>
        <li><strong>VASP</strong>：周期性体系、固体材料、表面计算</li>
        <li><strong>配合使用</strong>：用 Gaussian 优化分子，再放到 VASP 的周期性体系中</li>
      </ul>
    </div>

    <h3>7. 学习路径</h3>
    <div class="fc">
      <div class="fn2-node s">了解 Gaussian 基础</div><div class="fa"></div>
      <div class="fn2-node p">学习输入文件格式</div><div class="fa"></div>
      <div class="fn2-node p">掌握基本计算任务</div><div class="fa"></div>
      <div class="fn2-node p">进阶：过渡态、IRC</div><div class="fa"></div>
      <div class="fn2-node e">与 VASP 配合使用</div>
    </div>

    <h3>8. 学习内容</h3>
    <div class="pg">
      <router-link to="/gaussian/install" class="pc" style="--ca:var(--blue)">
        <div class="pc-i">📦</div>
        <div class="pc-t">安装配置</div>
        <div class="pc-d">Gaussian 安装和环境配置</div>
      </router-link>
      <router-link to="/gaussian/input" class="pc" style="--ca:var(--green)">
        <div class="pc-i">📝</div>
        <div class="pc-t">输入文件</div>
        <div class="pc-d">Gaussian 输入文件格式详解</div>
      </router-link>
      <router-link to="/gaussian/tasks" class="pc" style="--ca:var(--purple)">
        <div class="pc-i">📊</div>
        <div class="pc-t">计算任务</div>
        <div class="pc-d">几何优化、频率、IRC 等</div>
      </router-link>
      <router-link to="/gaussian/output" class="pc" style="--ca:var(--accent)">
        <div class="pc-i">📋</div>
        <div class="pc-t">输出分析</div>
        <div class="pc-d">结果提取和可视化</div>
      </router-link>
      <router-link to="/gaussian/vasp-compare" class="pc" style="--ca:var(--orange)">
        <div class="pc-i">🔄</div>
        <div class="pc-t">与 VASP 对比</div>
        <div class="pc-d">两种软件的异同和配合</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GaussianView'
}
</script>
