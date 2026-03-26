<template>
  <div class="sec active">
    <div class="bread">
      <router-link to="/">首页</router-link>/
      <router-link to="/errors">错误诊断</router-link>/
      <span>输出异常</span>
    </div>
    
    <h2>输出异常诊断</h2>
    <p>计算完成但结果不合理时，需要排查输出文件中的异常。</p>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🟡</span>
        <span class="et">问题 1：能量异常大或异常小</span>
        <span class="es scm">常见</span>
      </div>
      <div class="ec-b" style="display:block">
        <table class="tb">
          <thead><tr><th>现象</th><th>可能原因</th><th>解决方法</th></tr></thead>
          <tbody>
            <tr><td>能量 ~10⁶ eV</td><td>原子重叠（距离太近）</td><td>检查 POSCAR 原子距离</td></tr>
            <tr><td>能量比文献差很多</td><td>POTCAR 泛函不匹配</td><td>确认使用正确的泛函</td></tr>
            <tr><td>能量正数</td><td>严重结构错误</td><td>重新构建结构</td></tr>
            <tr><td>NaN / Infinity</td><td>数值溢出</td><td>降低 ENCUT</td></tr>
            <tr><td>能量不收敛</td><td>SCF 问题</td><td>参考 SCF 不收敛诊断</td></tr>
          </tbody>
        </table>
        
        <h4>查看能量</h4>
        <div class="cb">
          <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 查看自由能</span>
<span class="fn2">grep</span> <span class="st">"free  energy"</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 查看能量变化</span>
<span class="fn2">grep</span> <span class="st">"free  energy"</span> OUTCAR

<span class="cm"># 每原子能量（估算）</span>
<span class="fn2">grep</span> <span class="st">"free  energy"</span> OUTCAR | <span class="fn2">tail</span> -1
<span class="cm"># 手动除以原子数</span></code></pre>
        </div>
        
        <div class="ib tip"><strong>参考值：</strong>大多数材料的结合能在 -1 到 -10 eV/atom 范围内。如果偏离太多，需要检查计算设置。</div>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🟡</span>
        <span class="et">问题 2：力很大（> 1 eV/Å）</span>
        <span class="es scm">常见</span>
      </div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <p>优化收敛后力仍然很大，或优化过程中力振荡。</p>
        
        <h4>查看力</h4>
        <div class="cb">
          <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 查看最大力</span>
<span class="fn2">grep</span> <span class="st">"TOTAL-FORCE"</span> OUTCAR -A <span class="nu">20</span> | <span class="fn2">tail</span> -20

<span class="cm"># 查看力是否收敛</span>
<span class="fn2">grep</span> <span class="st">"reached required"</span> OUTCAR</code></pre>
        </div>
        
        <h4>正常值参考</h4>
        <table class="tb">
          <thead><tr><th>状态</th><th>最大力</th><th>说明</th></tr></thead>
          <tbody>
            <tr><td>良好收敛</td><td>< 0.01 eV/Å</td><td>高质量结果</td></tr>
            <tr><td>一般收敛</td><td>0.01 - 0.05 eV/Å</td><td>大多数应用足够</td></tr>
            <tr><td>勉强收敛</td><td>0.05 - 0.1 eV/Å</td><td>可接受但不理想</td></tr>
            <tr><td>未收敛</td><td>> 0.1 eV/Å</td><td>需要继续优化</td></tr>
            <tr><td>有问题</td><td>> 1.0 eV/Å</td><td>结构或计算有问题</td></tr>
          </tbody>
        </table>
        
        <h4>解决方案</h4>
        <ul>
          <li>检查原子距离是否合理</li>
          <li>增加 NSW 继续优化</li>
          <li>减小 POTIM</li>
          <li>降低 EDIFF 到 1E-7</li>
          <li>增加 ENCUT</li>
        </ul>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🟡</span>
        <span class="et">问题 3：磁矩不合理</span>
        <span class="es scm">常见</span>
      </div>
      <div class="ec-b" style="display:block">
        <h4>查看磁矩</h4>
        <div class="cb">
          <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 查看总磁矩</span>
<span class="fn2">grep</span> <span class="st">"number of electron"</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 查看每个原子的磁矩</span>
<span class="fn2">grep</span> <span class="st">"magnetization"</span> OUTCAR -A <span class="nu">20</span></code></pre>
        </div>
        
        <h4>常见问题</h4>
        <ul>
          <li><strong>磁矩为零但应有磁性</strong>：需要设置 ISPIN=2 和适当的 MAGMOM</li>
          <li><strong>磁矩振荡</strong>：MAGMOM 初始值设置不当，尝试不同的初始值</li>
          <li><strong>磁矩不合理</strong>：检查是否需要开启自旋轨道耦合（LSORBIT=.TRUE.）</li>
        </ul>
        
        <div class="cb">
          <div class="ch"><span class="la">INCAR</span><span class="fn">磁性计算</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 自旋极化计算</span>
<span class="kw">ISPIN</span>    = <span class="nu">2</span>             <span class="cm">; 开启自旋极化</span>

<span class="cm"># 初始磁矩设置</span>
<span class="kw">MAGMOM</span>   = <span class="nu">5 5 5 5</span>       <span class="cm">; 每个原子的初始磁矩 (μB)</span>

<span class="cm"># 过渡金属常见值</span>
<span class="cm"># Fe, Co, Ni: 3-5 μB</span>
<span class="cm"># Mn: 5 μB</span>
<span class="cm"># Cr: 3-5 μB</span>
<span class="cm"># Cu, Zn: 0 (d 满)</span></code></pre>
        </div>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🟡</span>
        <span class="et">问题 4：应力张量异常</span>
        <span class="es scm">常见</span>
      </div>
      <div class="ec-b" style="display:block">
        <h4>查看应力</h4>
        <div class="cb">
          <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 查看外部压力</span>
<span class="fn2">grep</span> <span class="st">"external pressure"</span> OUTCAR

<span class="cm"># 查看应力张量</span>
<span class="fn2">grep</span> <span class="st">"in kB"</span> OUTCAR | <span class="fn2">tail</span> -1</code></pre>
        </div>
        
        <h4>正常值参考</h4>
        <table class="tb">
          <thead><tr><th>压力</th><th>状态</th><th>说明</th></tr></thead>
          <tbody>
            <tr><td>< 1 kbar</td><td>很好</td><td>晶格已收敛</td></tr>
            <tr><td>1 - 5 kbar</td><td>良好</td><td>大多数应用足够</td></tr>
            <tr><td>5 - 20 kbar</td><td>一般</td><td>可接受但不理想</td></tr>
            <tr><td>> 20 kbar</td><td>差</td><td>需要继续优化</td></tr>
          </tbody>
        </table>
        
        <div class="ib tip"><strong>单位换算：</strong>1 kbar = 0.1 GPa = 100 MPa</div>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🟡</span>
        <span class="et">问题 5：能带带隙不合理</span>
        <span class="es scm">常见</span>
      </div>
      <div class="ec-b" style="display:block">
        <h4>问题分析</h4>
        <table class="tb">
          <thead><tr><th>现象</th><th>可能原因</th><th>解决方法</th></tr></thead>
          <tbody>
            <tr><td>半导体显示为金属</td><td>GGA-PBE 低估带隙</td><td>使用杂化泛函 HSE06</td></tr>
            <tr><td>带隙偏大</td><td>带隙计算方法问题</td><td>使用 ISMEAR=0 或 -5</td></tr>
            <tr><td>间接带隙变直接</td><td>K 点不足</td><td>加密 K 点</td></tr>
          </tbody>
        </table>
        
        <h4>准确计算带隙</h4>
        <div class="cb">
          <div class="ch"><span class="la">INCAR</span><span class="fn">带隙计算</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 方案 1：GGA-PBE（低估带隙）</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 方案 2：杂化泛函 HSE06（更准确但慢）</span>
<span class="kw">LHFCALC</span>  = <span class="nu">.TRUE.</span>
<span class="kw">AEXX</span>     = <span class="nu">0.25</span>
<span class="kw">HFSCREEN</span> = <span class="nu">0.2</span>
<span class="kw">ALGO</span>     = <span class="st">Damped</span>        <span class="cm">; HSE 推荐用 Damped</span>
<span class="kw">TIME</span>     = <span class="nu">0.4</span>

<span class="cm"># 方案 3：GW 计算（最准确但最慢）</span>
<span class="cm"># 需要分步进行，参考 VASP 手册</span></code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorsOutputView',
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
