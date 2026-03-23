<template>
  <div class="sec active">
    <div class="bread">
      <router-link to="/">首页</router-link>/
      <span>速查手册</span>
    </div>
    
    <h2>速查手册</h2>
    <p>VASP 常用参数、命令和设置的快速参考。</p>

    <h3>1. INCAR 参数速查</h3>
    <table class="tb">
      <thead><tr><th>参数</th><th>说明</th><th>常用值</th><th>默认值</th></tr></thead>
      <tbody>
        <tr><td><code>ENCUT</code></td><td>平面波截断能 (eV)</td><td>400-600</td><td>POTCAR ENMAX</td></tr>
        <tr><td><code>PREC</code></td><td>计算精度</td><td>Accurate</td><td>Normal</td></tr>
        <tr><td><code>EDIFF</code></td><td>电子步收敛标准</td><td>1E-6</td><td>1E-4</td></tr>
        <tr><td><code>EDIFFG</code></td><td>离子步收敛标准</td><td>-0.02 (eV/Å)</td><td>-0.01</td></tr>
        <tr><td><code>IBRION</code></td><td>离子弛豫方法</td><td>1 或 2</td><td>-1</td></tr>
        <tr><td><code>NSW</code></td><td>最大离子步数</td><td>100-300</td><td>0</td></tr>
        <tr><td><code>ISIF</code></td><td>优化类型</td><td>2 或 3</td><td>2</td></tr>
        <tr><td><code>ISMEAR</code></td><td>展宽方法</td><td>0, 1, -5</td><td>1</td></tr>
        <tr><td><code>SIGMA</code></td><td>展宽宽度 (eV)</td><td>0.05, 0.2</td><td>0.2</td></tr>
        <tr><td><code>NELM</code></td><td>最大电子步数</td><td>60-200</td><td>60</td></tr>
        <tr><td><code>ISPIN</code></td><td>自旋极化</td><td>1 或 2</td><td>1</td></tr>
        <tr><td><code>MAGMOM</code></td><td>初始磁矩</td><td>依体系</td><td>0</td></tr>
        <tr><td><code>LREAL</code></td><td>实空间投影</td><td>Auto, .FALSE.</td><td>.FALSE.</td></tr>
        <tr><td><code>ALGO</code></td><td>电子算法</td><td>Normal, Fast</td><td>Normal</td></tr>
      </tbody>
    </table>

    <h3>2. ISMEAR 展宽方法</h3>
    <table class="tb">
      <thead><tr><th>ISMEAR</th><th>方法</th><th>适用场景</th><th>SIGMA</th></tr></thead>
      <tbody>
        <tr><td><code>-5</code></td><td>四面体法</td><td>绝缘体/半导体 DOS</td><td>自动</td></tr>
        <tr><td><code>-4</code></td><td>四面体+Blochl</td><td>金属 DOS</td><td>自动</td></tr>
        <tr><td><code>0</code></td><td>Gaussian</td><td>半导体/绝缘体</td><td>0.05</td></tr>
        <tr><td><code>1</code></td><td>MP 展宽</td><td>金属</td><td>0.2</td></tr>
        <tr><td><code>2</code></td><td>MP 改进</td><td>金属（更平滑）</td><td>0.2</td></tr>
      </tbody>
    </table>

    <h3>3. IBRION 优化方法</h3>
    <table class="tb">
      <thead><tr><th>IBRION</th><th>方法</th><th>特点</th><th>推荐场景</th></tr></thead>
      <tbody>
        <tr><td><code>-1</code></td><td>不动</td><td>静态计算</td><td>DOS、能带等</td></tr>
        <tr><td><code>0</code></td><td>MD</td><td>分子动力学</td><td>温度效应</td></tr>
        <tr><td><code>1</code></td><td>RMM-DIIS</td><td>准牛顿法，快但不稳定</td><td>初始优化</td></tr>
        <tr><td><code>2</code></td><td>CG</td><td>共轭梯度，稳定</td><td>推荐默认</td></tr>
        <tr><td><code>3</code></td><td>Damped MD</td><td>阻尼MD</td><td>特殊体系</td></tr>
      </tbody>
    </table>

    <h3>4. ISIF 优化类型</h3>
    <table class="tb">
      <thead><tr><th>ISIF</th><th>离子位置</th><th>晶格体积</th><th>晶格形状</th><th>适用</th></tr></thead>
      <tbody>
        <tr><td><code>0</code></td><td>✓</td><td>✗</td><td>✗</td><td>MD</td></tr>
        <tr><td><code>1</code></td><td>✓</td><td>✓</td><td>✓</td><td>MD+晶格</td></tr>
        <tr><td><code>2</code></td><td>✓</td><td>✗</td><td>✗</td><td>表面、分子</td></tr>
        <tr><td><code>3</code></td><td>✓</td><td>✓</td><td>✓</td><td>体相优化</td></tr>
        <tr><td><code>4</code></td><td>✓</td><td>✗</td><td>✓</td><td>固定体积</td></tr>
        <tr><td><code>5</code></td><td>✗</td><td>✓</td><td>✓</td><td>仅晶格</td></tr>
        <tr><td><code>6</code></td><td>✗</td><td>✗</td><td>✓</td><td>仅形状</td></tr>
        <tr><td><code>7</code></td><td>✗</td><td>✓</td><td>✗</td><td>仅体积</td></tr>
      </tbody>
    </table>

    <h3>5. 常用 bash 命令</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 提取能量</span>
<span class="fn2">grep</span> <span class="st">"free  energy"</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 提取力</span>
<span class="fn2">grep</span> <span class="st">"TOTAL-FORCE"</span> OUTCAR -A <span class="nu">4</span>

<span class="cm"># 检查收敛</span>
<span class="fn2">grep</span> <span class="st">"reached required"</span> OUTCAR

<span class="cm"># 查看费米能级</span>
<span class="fn2">grep</span> <span class="st">"E-fermi"</span> OUTCAR

<span class="cm"># 查看外部压力</span>
<span class="fn2">grep</span> <span class="st">"external pressure"</span> OUTCAR

<span class="cm"># 查看应力</span>
<span class="fn2">grep</span> <span class="st">"in kB"</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 查看磁矩</span>
<span class="fn2">grep</span> <span class="st">"magnetization"</span> OUTCAR -A <span class="nu">20</span>

<span class="cm"># 查看 POTCAR 中的元素</span>
<span class="fn2">grep</span> TITEL POTCAR

<span class="cm"># 查看 POTCAR 中的 ENMAX</span>
<span class="fn2">grep</span> ENMAX POTCAR

<span class="cm"># 查看总电子数</span>
<span class="fn2">grep</span> NELECT OUTCAR

<span class="cm"># 快速诊断</span>
<span class="fn2">tail</span> -50 OUTCAR
<span class="fn2">grep</span> -i <span class="st">"error\|warning\|abort"</span> OUTCAR</code></pre>
    </div>

    <h3>6. 常见计算任务 INCAR 模板</h3>
    
    <h4>结构优化</h4>
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">体相优化</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">SYSTEM</span>   = <span class="st">Bulk optimization</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>
    </div>

    <h4>态密度计算</h4>
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">DOS</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">SYSTEM</span>   = <span class="st">DOS calculation</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>
<span class="kw">ISMEAR</span>   = <span class="nu">-5</span>           <span class="cm">; 四面体法</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span>           <span class="cm">; 投影 DOS</span>
<span class="kw">LWAVE</span>    = <span class="nu">.TRUE.</span>        <span class="cm">; 保留波函数</span></code></pre>
    </div>

    <h4>能带计算</h4>
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">Band structure</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">SYSTEM</span>   = <span class="st">Band structure</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">ICHARG</span>   = <span class="nu">11</span>           <span class="cm">; 从 WAVECAR 读取</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span>           <span class="cm">; 投影能带</span></code></pre>
    </div>

    <h3>7. POTCAR 选择指南</h3>
    <table class="tb">
      <thead><tr><th>后缀</th><th>说明</th><th>适用场景</th></tr></thead>
      <tbody>
        <tr><td><code>PAW_PBE</code></td><td>标准 PBE</td><td>最常用</td></tr>
        <tr><td><code>_sv</code></td><td>半芯态</td><td>3d 过渡金属</td></tr>
        <tr><td><code>_d</code></td><td>d 电子 p 区</td><td>Ga, Ge, As</td></tr>
        <tr><td><code>_GW</code></td><td>高精度</td><td>GW 计算</td></tr>
        <tr><td><code>_h</code></td><td>硬赝势</td><td>高截断能</td></tr>
      </tbody>
    </table>

    <h3>8. 单位换算</h3>
    <table class="tb">
      <thead><tr><th>物理量</th><th>VASP 单位</th><th>换算</th></tr></thead>
      <tbody>
        <tr><td>能量</td><td>eV</td><td>1 eV = 96.485 kJ/mol = 23.06 kcal/mol</td></tr>
        <tr><td>力</td><td>eV/Å</td><td>1 eV/Å = 16.02 nN</td></tr>
        <tr><td>压力</td><td>kbar</td><td>1 kbar = 0.1 GPa = 100 MPa</td></tr>
        <tr><td>距离</td><td>Å</td><td>1 Å = 0.1 nm</td></tr>
        <tr><td>磁矩</td><td>μB</td><td>玻尔磁子</td></tr>
        <tr><td>频率</td><td>THz</td><td>声子频率</td></tr>
      </tbody>
    </table>

    <h3>9. 文件大小估算</h3>
    <table class="tb">
      <thead><tr><th>文件</th><th>大小公式</th><th>典型值</th></tr></thead>
      <tbody>
        <tr><td><code>WAVECAR</code></td><td>~N<sup>3</sup> × N<sub>bands</sub> × N<sub>k</sub> × 8 bytes</td><td>1-100 GB</td></tr>
        <tr><td><code>CHGCAR</code></td><td>~N<sup>3</sup> × 50 bytes</td><td>100 MB - 10 GB</td></tr>
        <tr><td><code>OUTCAR</code></td><td>取决于 NSW 和 NWRITE</td><td>100 MB - 2 GB</td></tr>
      </tbody>
    </table>

    <h3>10. 错误信息速查</h3>
    <table class="tb">
      <thead><tr><th>错误信息</th><th>原因</th><th>解决</th></tr></thead>
      <tbody>
        <tr><td>DENTET</td><td>能带数不足</td><td>增加 NBANDS</td></tr>
        <tr><td>ZBRENT</td><td>线搜索失败</td><td>减小 POTIM 或换 IBRION=1</td></tr>
        <tr><td>SGRCON</td><td>晶格矢量错误</td><td>检查右手定则</td></tr>
        <tr><td>ROTK</td><td>对称性问题</td><td>ISYM=0 或微扰结构</td></tr>
        <tr><td>memory</td><td>内存不足</td><td>LREAL=Auto 或减少 NPAR</td></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CheatSheetView',
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
