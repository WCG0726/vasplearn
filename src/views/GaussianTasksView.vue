<template>
  <div class="sec active">
    <div class="bread">
      <router-link to="/">首页</router-link>/
      <router-link to="/gaussian">Gaussian 教程</router-link>/
      <span>计算任务</span>
    </div>
    
    <h2>Gaussian 计算任务详解</h2>
    <p>本节介绍 Gaussian 常用的计算任务类型和设置方法。</p>

    <h3>1. 几何优化</h3>
    <p>寻找能量最低的分子构型。</p>
    
    <div class="cb">
      <div class="ch"><span class="la">input.gjf</span><span class="fn">几何优化</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm">%chk=opt.chk</span>
<span class="cm">%mem=8GB</span>
<span class="cm">%nproc=4</span>
<span class="cm">#p B3LYP/6-31G(d) opt</span>

<span class="vr">Water optimization</span>

<span class="nu">0 1</span>
<span class="vr">O</span>   <span class="nu">0.000000   0.000000   0.117300</span>
<span class="vr">H</span>   <span class="nu">0.000000   0.757200  -0.469200</span>
<span class="vr">H</span>   <span class="nu">0.000000  -0.757200  -0.469200</span></code></pre>
    </div>

    <h4>优化选项</h4>
    <table class="tb">
      <thead><tr><th>选项</th><th>说明</th><th>适用场景</th></tr></thead>
      <tbody>
        <tr><td><code class="ic">opt</code></td><td>默认优化</td><td>大多数情况</td></tr>
        <tr><td><code class="ic">opt=tight</code></td><td>严格收敛</td><td>高精度要求</td></tr>
        <tr><td><code class="ic">opt=loose</code></td><td>宽松收敛</td><td>初始粗优化</td></tr>
        <tr><td><code class="ic">opt=(maxstep=5)</code></td><td>最大步数</td><td>限制优化步数</td></tr>
        <tr><td><code class="ic">opt=(Z-Matrix)</code></td><td>Z-matrix 优化</td><td>有对称性要求</td></tr>
      </tbody>
    </table>

    <h3>2. 频率计算</h3>
    <p>计算振动频率，验证优化结果并获取热力学量。</p>
    
    <div class="cb">
      <div class="ch"><span class="la">input.gjf</span><span class="fn">频率计算</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm">%chk=freq.chk</span>
<span class="cm">%mem=8GB</span>
<span class="cm">%nproc=4</span>
<span class="cm">#p B3LYP/6-31G(d) freq</span>

<span class="vr">Water frequency</span>

<span class="nu">0 1</span>
<span class="cm">[优化后的坐标]</span></code></pre>
    </div>

    <h4>频率结果解读</h4>
    <table class="tb">
      <thead><tr><th>频率范围</th><th>含义</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>虚频（负值）</td><td>过渡态或高阶鞍点</td><td>需要检查结构</td></tr>
        <tr><td>0-100 cm⁻¹</td><td>低频振动</td><td>可能是虚频噪音</td></tr>
        <tr><td>100-400 cm⁻¹</td><td>骨架振动</td><td>分子变形</td></tr>
        <tr><td>400-1500 cm⁻¹</td><td>指纹区</td><td>官能团特征</td></tr>
        <tr><td>1500-4000 cm⁻¹</td><td>伸缩振动</td><td>化学键振动</td></tr>
      </tbody>
    </table>

    <h3>3. 过渡态搜索</h3>
    <p>寻找反应的过渡态结构。</p>
    
    <div class="cb">
      <div class="ch"><span class="la">input.gjf</span><span class="fn">过渡态搜索</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm">%chk=ts.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p M062X/6-311+G(d,p) opt=(ts,calcfc,noeigen) freq</span>

<span class="vr">Transition state search</span>

<span class="nu">0 1</span>
<span class="cm">[过渡态初始猜测坐标]</span></code></pre>
    </div>

    <h4>过渡态验证</h4>
    <ul>
      <li>必须有且仅有一个虚频</li>
      <li>虚频对应反应坐标</li>
      <li>需要 IRC 计算确认连接正确的反应物和产物</li>
    </ul>

    <h3>4. IRC 计算</h3>
    <p>跟踪反应路径，确认过渡态连接正确的反应物和产物。</p>
    
    <div class="cb">
      <div class="ch"><span class="la">input.gjf</span><span class="fn">IRC 正向</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm">%chk=irc.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p M062X/6-311+G(d,p) irc=(forward,calcfc)</span>

<span class="vr">IRC forward</span>

<span class="nu">0 1</span>
<span class="cm">[过渡态坐标]</span></code></pre>
    </div>

    <div class="cb">
      <div class="ch"><span class="la">input.gjf</span><span class="fn">IRC 反向</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm">#p M062X/6-311+G(d,p) irc=(reverse,calcfc)</span></code></pre>
    </div>

    <h3>5. TDDFT 激发态</h3>
    <p>计算分子的激发态性质，用于光谱预测。</p>
    
    <div class="cb">
      <div class="ch"><span class="la">input.gjf</span><span class="fn">TDDFT</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm">%chk=tddft.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p B3LYP/6-31+G(d,p) td=(nstates=10)</span>

<span class="vr">TDDFT calculation</span>

<span class="nu">0 1</span>
<span class="cm">[优化后的坐标]</span></code></pre>
    </div>

    <h4>TDDFT 选项</h4>
    <table class="tb">
      <thead><tr><th>选项</th><th>说明</th><th>示例</th></tr></thead>
      <tbody>
        <tr><td><code class="ic">nstates=N</code></td><td>计算 N 个激发态</td><td>td=(nstates=10)</td></tr>
        <tr><td><code class="ic">root=N</code></td><td>优化第 N 个激发态</td><td>td=(root=1)</td></tr>
        <tr><td><code class="ic">triplets</code></td><td>包含三重态</td><td>td=(nstates=5,triplets)</td></tr>
      </tbody>
    </table>

    <h3>6. 单点能计算</h3>
    <p>在固定几何上计算能量。</p>
    
    <div class="cb">
      <div class="ch"><span class="la">input.gjf</span><span class="fn">单点能</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm">%chk=sp.chk</span>
<span class="cm">%mem=32GB</span>
<span class="cm">%nproc=16</span>
<span class="cm">#p CCSD(T)/cc-pVTZ</span>

<span class="vr">High accuracy single point</span>

<span class="nu">0 1</span>
<span class="cm">[优化后的坐标]</span></code></pre>
    </div>

    <h3>7. 溶剂效应</h3>
    <p>使用隐式溶剂模型模拟溶剂环境。</p>
    
    <div class="cb">
      <div class="ch"><span class="la">input.gjf</span><span class="fn">PCM 溶剂</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm">%chk=solvent.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p B3LYP/6-31+G(d,p) opt scrf=(pcm,solvent=water)</span>

<span class="vr">Optimization in water</span>

<span class="nu">0 1</span>
<span class="cm">[分子坐标]</span></code></pre>
    </div>

    <h4>常用溶剂</h4>
    <table class="tb">
      <thead><tr><th>溶剂</th><th>关键词</th><th>介电常数</th></tr></thead>
      <tbody>
        <tr><td>水</td><td><code class="ic">solvent=water</code></td><td>78.4</td></tr>
        <tr><td>甲醇</td><td><code class="ic">solvent=methanol</code></td><td>32.7</td></tr>
        <tr><td>乙醇</td><td><code class="ic">solvent=ethanol</code></td><td>24.5</td></tr>
        <tr><td>DMSO</td><td><code class="ic">solvent=dmso</code></td><td>46.7</td></tr>
        <tr><td>氯仿</td><td><code class="ic">solvent=chloroform</code></td><td>4.8</td></tr>
        <tr><td>甲苯</td><td><code class="ic">solvent=toluene</code></td><td>2.4</td></tr>
      </tbody>
    </table>

    <h3>8. 自然键轨道（NBO）分析</h3>
    <p>分析化学键和电子结构。</p>
    
    <div class="cb">
      <div class="ch"><span class="la">input.gjf</span><span class="fn">NBO 分析</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm">%chk=nbo.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p B3LYP/6-31+G(d,p) pop=nboread</span>

<span class="vr">NBO analysis</span>

<span class="nu">0 1</span>
<span class="cm">[分子坐标]</span>

<span class="cm">$nbo</span>
<span class="cm">bndidx $end</span></code></pre>
    </div>

    <h3>9. 常见计算组合</h3>
    <table class="tb">
      <thead><tr><th>目的</th><th>推荐组合</th></tr></thead>
      <tbody>
        <tr><td>常规优化</td><td><code class="ic">B3LYP/6-31G(d) opt freq</code></td></tr>
        <tr><td>精确优化</td><td><code class="ic">M062X/6-311+G(d,p) opt freq</code></td></tr>
        <tr><td>弱相互作用</td><td><code class="ic">ωB97X-D/def2-TZVP opt freq</code></td></tr>
        <tr><td>过渡态</td><td><code class="ic">M062X/6-311+G(d,p) opt=(ts,calcfc) freq</code></td></tr>
        <tr><td>高精度能量</td><td><code class="ic">CCSD(T)/cc-pVTZ</code></td></tr>
        <tr><td>UV-Vis 光谱</td><td><code class="ic">B3LYP/6-31+G(d,p) td=(nstates=10)</code></td></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'GaussianTasksView',
  methods: {
    copy(e) {
      const pre = e.target.closest('.cb').querySelector('pre')
      const text = pre.textContent
      navigator.clipboard.writeText(text).then(() => {
        e.target.textContent = '已复制!'
        e.target.classList.add('ok')
        setTimeout(() => {
          e.target.textContent = '复制'
          e.target.classList.remove('ok')
        }, 2000)
      })
    }
  }
}
</script>
