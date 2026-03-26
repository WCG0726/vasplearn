<template>
  <div class="sec active">
    <div class="bread">
      <router-link to="/">首页</router-link>/
      <router-link to="/errors">错误诊断</router-link>/
      <span>离子步问题</span>
    </div>
    
    <h2>离子步问题诊断</h2>
    <p>离子步问题通常涉及结构优化不收敛、原子跑飞或力不收敛。</p>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🔴</span>
        <span class="et">问题 1：达到 NSW 上限仍未收敛</span>
        <span class="es sc">高频</span>
      </div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <p>计算正常结束，但 OUTCAR 中显示 "reached required accuracy" 未出现。</p>
        
        <h4>解决方案</h4>
        <div class="cb">
          <div class="ch"><span class="la">INCAR</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 方案 1：增大离子步数</span>
<span class="kw">NSW</span>      = <span class="nu">300</span>           <span class="cm">; 默认 0，建议 100-300</span>

<span class="cm"># 方案 2：放宽力收敛标准</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.05</span>         <span class="cm">; 默认 -0.01，常用 -0.02 到 -0.05</span>

<span class="cm"># 方案 3：换优化算法</span>
<span class="kw">IBRION</span>   = <span class="nu">1</span>             <span class="cm">; 2=CG, 1=RMM-DIIS（更快但不稳定）</span>

<span class="cm"># 方案 4：减小步长</span>
<span class="kw">POTIM</span>    = <span class="nu">0.2</span>           <span class="cm">; 默认 0.5，振荡时减小</span></code></pre>
        </div>
        
        <div class="ib tip"><strong>判断是否真的需要优化：</strong>查看 OSZICAR 中的能量是否在下降。如果能量已经稳定，可以适当放宽 EDIFFG。</div>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🔴</span>
        <span class="et">问题 2：原子跑飞 / 结构崩塌</span>
        <span class="es sc">高频</span>
      </div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <div class="esym">distance between some ions is very small !!<br>或能量突然增大到 10^6 eV</div>
        
        <h4>常见原因</h4>
        <ul>
          <li>初始结构原子距离太近（< 1.5 Å）</li>
          <li>POTIM 步长太大</li>
          <li>POSCAR 坐标类型写错（Direct 写成 Cartesian）</li>
          <li>POSCAR 和 POTCAR 元素顺序不一致</li>
        </ul>
        
        <h4>解决方案</h4>
        <div class="cb">
          <div class="ch"><span class="la">INCAR</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 缩小步长，增加稳定性</span>
<span class="kw">POTIM</span>    = <span class="nu">0.1</span>           <span class="cm">; 从 0.1 开始</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-4</span>          <span class="cm">; 放宽电子收敛</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.1</span>          <span class="cm">; 放宽力收敛</span></code></pre>
        </div>
        
        <div class="cb">
          <div class="ch"><span class="la">python</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 检查原子距离</span>
<span class="kw">from</span> ase.io <span class="kw">import</span> read
atoms = read(<span class="st">'POSCAR'</span>)
distances = atoms.get_all_distances()
<span class="fn2">print</span>(f<span class="st">"最小距离: {distances[distances > 0].min():.2f} Å"</span>)

<span class="cm"># 如果 < 1.5 Å，需要重新构建结构</span></code></pre>
        </div>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🟡</span>
        <span class="et">问题 3：力不收敛但能量收敛</span>
        <span class="es scm">常见</span>
      </div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <p>能量变化很小，但最大力仍然大于 EDIFFG 设置的阈值。</p>
        
        <h4>解决方案</h4>
        <ul>
          <li>降低 <code>EDIFF = 1E-7</code> 或更小</li>
          <li>增加 ENCUT（提高 30-50 eV）</li>
          <li>加密 K 点</li>
          <li>使用 <code>IBRION = 1</code>（RMM-DIIS 通常对力收敛更好）</li>
          <li>检查是否需要开启自旋（ISPIN=2）</li>
        </ul>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🟡</span>
        <span class="et">问题 4：ISIF=3 时晶格参数异常</span>
        <span class="es scm">常见</span>
      </div>
      <div class="ec-b" style="display:block">
        <table class="tb">
          <thead><tr><th>可能原因</th><th>解决</th><th>说明</th></tr></thead>
          <tbody>
            <tr><td>GGA-PBE 本身高估晶格</td><td>正常误差 ~1-2%</td><td>这是 PBE 泛函的特点</td></tr>
            <tr><td>需要杂化泛函</td><td>使用 HSE06</td><td>但计算量大 10-100 倍</td></tr>
            <tr><td>需要 +U</td><td>添加 LDAU 参数</td><td>含 3d/4f 金属的氧化物</td></tr>
            <tr><td>需要范德华修正</td><td>IVDW=11 或 IVDW=12</td><td>层状材料、分子晶体</td></tr>
            <tr><td>初始结构太差</td><td>重新构建初始结构</td><td>用实验值或文献值</td></tr>
          </tbody>
        </table>
        
        <div class="cb">
          <div class="ch"><span class="la">INCAR</span><span class="fn">晶格优化参数</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 基本晶格优化</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>             <span class="cm">; 优化离子位置+晶格</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.01</span>         <span class="cm">; 力收敛标准</span>

<span class="cm"># 添加范德华修正（层状材料）</span>
<span class="kw">IVDW</span>     = <span class="nu">11</span>            <span class="cm">; DFT-D3 方法</span>

<span class="cm"># 强关联体系</span>
<span class="kw">LDAU</span>     = <span class="nu">.TRUE.</span>
<span class="kw">LDAUTYPE</span> = <span class="nu">2</span>             <span class="cm">; Dudarev 方法</span>
<span class="kw">LDAUL</span>    = <span class="nu">2 -1 -1</span>       <span class="cm">; l 量子数，-1 表示不加 U</span>
<span class="kw">LDAUU</span>    = <span class="nu">4.0 0 0</span>       <span class="cm">; U 值 (eV)</span>
<span class="kw">LDAUJ</span>    = <span class="nu">0.0 0 0</span>       <span class="cm">; J 值</span></code></pre>
        </div>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🟡</span>
        <span class="et">问题 5：压力张量异常</span>
        <span class="es scm">常见</span>
      </div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <p>OUTCAR 中外部压力（external pressure）与期望值相差很大。</p>
        
        <h4>查看压力</h4>
        <div class="cb">
          <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="fn2">grep</span> <span class="st">"external pressure"</span> OUTCAR</code></pre>
        </div>
        
        <h4>解决方案</h4>
        <table class="tb">
          <thead><tr><th>情况</th><th>处理</th></tr></thead>
          <tbody>
            <tr><td>压力很大 (> 10 kbar)</td><td>继续优化，ISIF=3</td></tr>
            <tr><td>压力振荡</td><td>减小 POTIM</td></tr>
            <tr><td>压力趋于稳定但不为零</td><td>检查 ENCUT 和 K 点是否足够</td></tr>
            <tr><td>只要能量不要晶格</td><td>使用 ISIF=2</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorsIonView',
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
