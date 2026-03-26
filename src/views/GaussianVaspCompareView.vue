<template>
  <div class="sec active">
    <div class="bread">
      <router-link to="/">首页</router-link>/
      <router-link to="/gaussian">Gaussian 教程</router-link>/
      <span>与 VASP 对比</span>
    </div>
    
    <h2>Gaussian 与 VASP 对比</h2>
    <p>了解两种软件的特点和适用场景，选择合适的计算工具。</p>

    <h3>1. 基本对比</h3>
    <table class="tb">
      <thead><tr><th>特性</th><th>Gaussian</th><th>VASP</th></tr></thead>
      <tbody>
        <tr><td><strong>计算体系</strong></td><td>分子、团簇</td><td>周期性体系</td></tr>
        <tr><td><strong>基组类型</strong></td><td>高斯基组</td><td>平面波基组</td></tr>
        <tr><td><strong>边界条件</strong></td><td>开放边界</td><td>周期性边界</td></tr>
        <tr><td><strong>赝势</strong></td><td>不需要</td><td>PAW 赝势</td></tr>
        <tr><td><strong>K 点采样</strong></td><td>不需要</td><td>需要</td></tr>
        <tr><td><strong>适用体系大小</strong></td><td>小到中等</td><td>中等到大</td></tr>
      </tbody>
    </table>

    <h3>2. 应用场景对比</h3>
    <table class="tb">
      <thead><tr><th>应用场景</th><th>推荐软件</th><th>原因</th></tr></thead>
      <tbody>
        <tr><td>有机分子优化</td><td>Gaussian</td><td>分子专用，效率高</td></tr>
        <tr><td>反应机理研究</td><td>Gaussian</td><td>过渡态搜索方便</td></tr>
        <tr><td>晶体结构优化</td><td>VASP</td><td>周期性体系</td></tr>
        <tr><td>表面计算</td><td>VASP</td><td>slab 模型</td></tr>
        <tr><td>能带计算</td><td>VASP</td><td>周期性体系优势</td></tr>
        <tr><td>高精度分子能量</td><td>Gaussian</td><td>CCSD(T) 等方法</td></tr>
        <tr><td>大体系计算</td><td>VASP</td><td>平面波效率高</td></tr>
      </tbody>
    </table>

    <h3>3. 计算方法对比</h3>
    <table class="tb">
      <thead><tr><th>方法</th><th>Gaussian</th><th>VASP</th></tr></thead>
      <tbody>
        <tr><td><strong>DFT</strong></td><td>B3LYP, PBE0, M06 等</td><td>PBE, HSE06</td></tr>
        <tr><td><strong>HF</strong></td><td>支持</td><td>不常用</td></tr>
        <tr><td><strong>MP2</strong></td><td>支持</td><td>不支持</td></tr>
        <tr><td><strong>CCSD(T)</strong></td><td>支持</td><td>不支持</td></tr>
        <tr><td><strong>TDDFT</strong></td><td>支持</td><td>支持（GW/BSE）</td></tr>
        <tr><td><strong>杂化泛函</strong></td><td>丰富</td><td>HSE06, PBE0</td></tr>
      </tbody>
    </table>

    <h3>4. 输入文件对比</h3>
    <h4>Gaussian 输入</h4>
    <div class="cb">
      <div class="ch"><span class="la">input.gjf</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm">%chk=water.chk</span>
<span class="cm">%mem=4GB</span>
<span class="cm">%nproc=4</span>
<span class="cm">#p B3LYP/6-31G(d) opt freq</span>

<span class="vr">Water molecule</span>

<span class="nu">0 1</span>
<span class="vr">O</span>   <span class="nu">0.0  0.0  0.117</span>
<span class="vr">H</span>   <span class="nu">0.0  0.757 -0.469</span>
<span class="vr">H</span>   <span class="nu">0.0 -0.757 -0.469</span></code></pre>
    </div>

    <h4>VASP 输入</h4>
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">SYSTEM</span>   = <span class="st">H2O</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">100</span>
<span class="kw">ISIF</span>     = <span class="nu">2</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>
    </div>

    <h3>5. 配合使用策略</h3>
    <div class="db">
      <div class="db-t">典型配合使用场景</div>
      <h4>场景 1：分子吸附到表面</h4>
      <ol>
        <li><strong>Gaussian</strong>：优化分子构型</li>
        <li><strong>VASP</strong>：构建表面模型，放置分子，计算吸附能</li>
      </ol>

      <h4>场景 2：反应机理研究</h4>
      <ol>
        <li><strong>Gaussian</strong>：搜索过渡态，确认反应路径</li>
        <li><strong>VASP</strong>：计算周期性体系中的反应</li>
      </ol>

      <h4>场景 3：材料中的分子</h4>
      <ol>
        <li><strong>Gaussian</strong>：研究孤立分子性质</li>
        <li><strong>VASP</strong>：计算分子在材料中的行为</li>
      </ol>
    </div>

    <h3>6. 文件格式转换</h3>
    <h4>Gaussian → VASP</h4>
    <div class="cb">
      <div class="ch"><span class="la">python</span><span class="fn">gjf2poscar.py</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">from</span> ase.io <span class="kw">import</span> read, write

<span class="cm"># 读取 Gaussian 输出</span>
atoms = read(<span class="st">'output.log'</span>)

<span class="cm"># 转换为 POSCAR</span>
write(<span class="st">'POSCAR'</span>, atoms)

<span class="cm"># 对于周期性体系，需要添加晶胞</span>
<span class="kw">import</span> numpy <span class="kw">as</span> np
atoms.cell = np.diag([<span class="nu">15</span>, <span class="nu">15</span>, <span class="nu">15</span>])  <span class="cm"># 15Å 立方盒子</span>
atoms.pbc = <span class="kw">True</span>
write(<span class="st">'POSCAR'</span>, atoms)</code></pre>
    </div>

    <h4>VASP → Gaussian</h4>
    <div class="cb">
      <div class="ch"><span class="la">python</span><span class="fn">poscar2gjf.py</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">from</span> ase.io <span class="kw">import</span> read, write

<span class="cm"># 读取 POSCAR</span>
atoms = read(<span class="st">'POSCAR'</span>)

<span class="cm"># 转换为 Gaussian 输入</span>
write(<span class="st">'molecule.gjf'</span>, atoms)

<span class="cm"># 或手动创建</span>
<span class="kw">with</span> <span class="fn2">open</span>(<span class="st">'molecule.gjf'</span>, <span class="st">'w'</span>) <span class="kw">as</span> f:
    f.write(<span class="st">'%chk=molecule.chk\n'</span>)
    f.write(<span class="st">'%mem=4GB\n'</span>)
    f.write(<span class="st">'%nproc=4\n'</span>)
    f.write(<span class="st">'#p B3LYP/6-31G(d) opt\n\n'</span>)
    f.write(<span class="st">'Molecule\n\n0 1\n'</span>)
    <span class="kw">for</span> atom <span class="kw">in</span> atoms:
        f.write(<span class="st">f"{atom.symbol}  {atom.position[0]:.6f}  {atom.position[1]:.6f}  {atom.position[2]:.6f}\n"</span>)
    f.write(<span class="st">'\n'</span>)</code></pre>
    </div>

    <h3>7. 计算成本对比</h3>
    <table class="tb">
      <thead><tr><th>体系大小</th><th>Gaussian</th><th>VASP</th></tr></thead>
      <tbody>
        <tr><td>小分子（< 50 原子）</td><td>✅ 快</td><td>❌ 慢（真空计算）</td></tr>
        <tr><td>中等分子（50-200 原子）</td><td>⚠️ 中等</td><td>⚠️ 中等</td></tr>
        <tr><td>大体系（> 200 原子）</td><td>❌ 慢</td><td>✅ 快</td></tr>
        <tr><td>周期性体系</td><td>❌ 不适合</td><td>✅ 适合</td></tr>
      </tbody>
    </table>

    <h3>8. 选择建议</h3>
    <div class="ib tip"><strong>选择原则：</strong>
      <ul>
        <li><strong>分子体系</strong>：优先使用 Gaussian</li>
        <li><strong>周期性体系</strong>：使用 VASP</li>
        <li><strong>高精度基准</strong>：使用 Gaussian (CCSD(T))</li>
        <li><strong>大体系</strong>：使用 VASP</li>
        <li><strong>反应机理</strong>：使用 Gaussian（过渡态搜索）</li>
        <li><strong>能带/态密度</strong>：使用 VASP</li>
      </ul>
    </div>

    <h3>9. 常见问题</h3>
    <table class="tb">
      <thead><tr><th>问题</th><th>解答</th></tr></thead>
      <tbody>
        <tr><td>如何选择泛函？</td><td>Gaussian 用 B3LYP/M06，VASP 用 PBE/HSE06</td></tr>
        <tr><td>能量如何比较？</td><td>两种软件的能量不能直接比较</td></tr>
        <tr><td>如何验证结果？</td><td>与实验值对比，或用更高级方法验证</td></tr>
        <tr><td>可以联合使用吗？</td><td>可以，分别用于不同目的</td></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'GaussianVaspCompareView',
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
