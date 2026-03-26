<template>
  <div class="sec active">
    <div class="bread">
      <router-link to="/">首页</router-link>/
      <router-link to="/gaussian">Gaussian 教程</router-link>/
      <span>可视化教程</span>
    </div>
    
    <h2>Gaussian 结果可视化</h2>
    <p>本节介绍如何使用各种工具可视化 Gaussian 的计算结果。</p>

    <h3>1. 常用可视化工具</h3>
    <table class="tb">
      <thead><tr><th>工具</th><th>类型</th><th>价格</th><th>主要功能</th></tr></thead>
      <tbody>
        <tr><td><strong>GaussView</strong></td><td>官方 GUI</td><td>付费</td><td>分子构建、结果查看</td></tr>
        <tr><td><strong>Multiwfn</strong></td><td>波函数分析</td><td>免费</td><td>电子结构分析、绘图</td></tr>
        <tr><td><strong>Avogadro</strong></td><td>分子编辑</td><td>免费</td><td>分子构建、可视化</td></tr>
        <tr><td><strong>VMD</strong></td><td>分子动力学</td><td>免费</td><td>3D 可视化</td></tr>
        <tr><td><strong>VESTA</strong></td><td>晶体结构</td><td>免费</td><td>周期性结构</td></tr>
        <tr><td><strong>PyMOL</strong></td><td>分子图形</td><td>付费/免费</td><td>高质量图形</td></tr>
        <tr><td><strong>Chemcraft</strong></td><td>Gaussian 专用</td><td>付费</td><td>Gaussian 结果分析</td></tr>
      </tbody>
    </table>

    <h3>2. GaussView 使用</h3>
    <h4>安装</h4>
    <ul>
      <li>随 Gaussian 一起安装，或单独购买</li>
      <li>支持 Windows、Linux、macOS</li>
    </ul>

    <h4>打开输出文件</h4>
    <ol>
      <li>File → Open → 选择 .log 文件</li>
      <li>自动识别计算结果</li>
      <li>显示分子结构和结果</li>
    </ol>

    <h4>常用功能</h4>
    <table class="tb">
      <thead><tr><th>功能</th><th>操作</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>查看结构</td><td>直接打开</td><td>显示 3D 分子</td></tr>
        <tr><td>查看频率</td><td>Results → Vibrations</td><td>显示振动模式</td></tr>
        <tr><td>查看轨道</td><td>Results → Surfaces</td><td>显示分子轨道</td></tr>
        <tr><td>查看优化路径</td><td>Results → Optimization</td><td>显示优化过程</td></tr>
        <tr><td>导出图片</td><td>File → Save Image</td><td>保存为图片</td></tr>
        <tr><td>导出坐标</td><td>File → Save</td><td>保存为其他格式</td></tr>
      </tbody>
    </table>

    <h3>3. Multiwfn 使用</h3>
    <p>Multiwfn 是功能最强大的波函数分析工具，完全免费。</p>

    <h4>安装</h4>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 下载 Multiwfn</span>
<span class="cm"># http://sobereva.com/multiwfn/</span>

<span class="cm"># 解压后设置环境变量</span>
<span class="kw">export</span> Multiwfnpath=/path/to/Multiwfn
<span class="kw">export</span> PATH=$Multiwfnpath:$PATH</code></pre>
    </div>

    <h4>常用功能</h4>
    <table class="tb">
      <thead><tr><th>功能</th><th>菜单路径</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>查看分子</td><td>0 → 1</td><td>显示分子结构</td></tr>
        <tr><td>绘制静电势</td><td>4 → 1</td><td>分子表面静电势</td></tr>
        <tr><td>绘制电子密度</td><td>1 → 1</td><td>电子密度等值面</td></tr>
        <tr><td>绘制轨道</td><td>2 → 1</td><td>分子轨道可视化</td></tr>
        <tr><td>IR 光谱</td><td>10 → 1</td><td>红外光谱绘图</td></tr>
        <tr><td>UV-Vis 光谱</td><td>10 → 3</td><td>紫外可见光谱</td></tr>
        <tr><td>EDA 分析</td><td>7 → 1</td><td>能量分解分析</td></tr>
      </tbody>
    </table>

    <h4>绘制 IR 光谱示例</h4>
    <div class="cb">
      <div class="ch"><span class="la">Multiwfn</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 启动 Multiwfn</span>
Multiwfn output.log

<span class="cm"># 选择功能</span>
<span class="cm"># 10 → Spectrum and related properties</span>
<span class="cm"># 1 → IR spectrum</span>
<span class="cm"># 设置展宽 (推荐 4 cm⁻¹)</span>
<span class="cm"># 生成 spectrum.txt 和 spectrum_curve.png</span></code></pre>
    </div>

    <h3>4. Avogadro 使用</h3>
    <h4>安装</h4>
    <ul>
      <li>下载：https://avogadro.cc</li>
      <li>支持 Windows、Linux、macOS</li>
      <li>开源免费</li>
    </ul>

    <h4>打开 Gaussian 输出</h4>
    <ol>
      <li>File → Open → 选择 .log 文件</li>
      <li>自动识别并显示结构</li>
    </ol>

    <h4>常用功能</h4>
    <ul>
      <li><strong>旋转/缩放</strong>：鼠标拖动/滚轮</li>
      <li><strong>测量距离</strong>：Extensions → Measure → Distance</li>
      <li><strong>测量角度</strong>：Extensions → Measure → Angle</li>
      <li><strong>显示轨道</strong>：Extensions → Surfaces</li>
      <li><strong>导出图片</strong>：File → Export → Image</li>
    </ul>

    <h3>5. VMD 使用</h3>
    <h4>安装</h4>
    <ul>
      <li>下载：https://www.ks.uiuc.edu/Research/vmd/</li>
      <li>免费注册后下载</li>
    </ul>

    <h4>打开 Gaussian 输出</h4>
    <div class="cb">
      <div class="ch"><span class="la">tcl</span><span class="fn">VMD 脚本</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 在 VMD 控制台中</span>
<span class="cm"># 加载 Gaussian 输出</span>
mol load gaussian output.log

<span class="cm"># 或通过菜单</span>
<span class="cm"># File → New Molecule → Browse → 选择 .log</span></code></pre>
    </div>

    <h4>常用显示设置</h4>
    <table class="tb">
      <thead><tr><th>操作</th><th>路径</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>改变显示样式</td><td>Graphics → Representations</td><td>CPK, Licorice 等</td></tr>
        <tr><td>改变颜色</td><td>Graphics → Colors</td><td>按元素、残基等</td></tr>
        <tr><td>渲染图片</td><td>File → Render</td><td>生成高质量图片</td></tr>
      </tbody>
    </table>

    <h3>6. Python 可视化</h3>
    <h4>使用 cclib + py3Dmol</h4>
    <div class="cb">
      <div class="ch"><span class="la">python</span><span class="fn">visualize.py</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">import</span> cclib
<span class="kw">import</span> py3Dmol
<span class="kw">from</span> rdkit <span class="kw">import</span> Chem
<span class="kw">from</span> rdkit.Chem <span class="kw">import</span> AllChem, Draw

<span class="cm"># 读取 Gaussian 输出</span>
data = cclib.io.ccopen(<span class="st">"output.log"</span>).parse()

<span class="cm"># 获取最终坐标</span>
coords = data.atomcoords[-<span class="nu">1</span>]
elements = data.atomnos

<span class="cm"># 创建 XYZ 格式</span>
xyz = <span class="st">f"{len(elements)}\n\n"</span>
<span class="kw">for</span> i, (elem, coord) <span class="kw">in</span> <span class="fn2">enumerate</span>(<span class="fn2">zip</span>(elements, coords)):
    symbol = Chem.PeriodicTable.GetElementSymbol(elem)
    xyz += <span class="st">f"{symbol}  {coord[0]:.6f}  {coord[1]:.6f}  {coord[2]:.6f}\n"</span>

<span class="cm"># 3D 可视化</span>
view = py3Dmol.view(width=<span class="nu">400</span>, height=<span class="nu">400</span>)
view.addModel(xyz, <span class="st">"xyz"</span>)
view.setStyle({<span class="st">"stick"</span>: {}})
view.zoomTo()
view.show()</code></pre>
    </div>

    <h4>使用 ASE + matplotlib</h4>
    <div class="cb">
      <div class="ch"><span class="la">python</span><span class="fn">plot_mol.py</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">from</span> ase.io <span class="kw">import</span> read
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 Gaussian 输出</span>
atoms = read(<span class="st">"output.log"</span>)

<span class="cm"># 获取坐标</span>
positions = atoms.get_positions()
symbols = atoms.get_chemical_symbols()

<span class="cm"># 2D 投影绘图</span>
fig, ax = plt.subplots(figsize=(<span class="nu">8</span>, <span class="nu">8</span>))

<span class="cm"># 绘制原子</span>
<span class="kw">for</span> i, (pos, sym) <span class="kw">in</span> <span class="fn2">enumerate</span>(<span class="fn2">zip</span>(positions, symbols)):
    ax.plot(pos[<span class="nu">0</span>], pos[<span class="nu">1</span>], <span class="st">'o'</span>, markersize=<span class="nu">20</span>)
    ax.text(pos[<span class="nu">0</span>], pos[<span class="nu">1</span>], sym, ha=<span class="st">'center'</span>, va=<span class="st">'center'</span>)

ax.set_aspect(<span class="st">'equal'</span>)
ax.set_xlabel(<span class="st">'X (Å)'</span>)
ax.set_ylabel(<span class="st">'Y (Å)'</span>)
plt.savefig(<span class="st">'molecule_2d.png'</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>
    </div>

    <h3>7. 光谱可视化</h3>
    <h4>IR 光谱绘图</h4>
    <div class="cb">
      <div class="ch"><span class="la">python</span><span class="fn">plot_ir.py</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt
<span class="kw">import</span> re

<span class="kw">def</span> <span class="fn2">read_ir_spectrum</span>(filename):
    <span class="st">"""读取 Gaussian IR 光谱"""</span>
    <span class="kw">with</span> <span class="fn2">open</span>(filename, <span class="st">'r'</span>) <span class="kw">as</span> f:
        content = f.read()
    
    <span class="cm"># 提取频率和强度</span>
    freqs = re.findall(<span class="st">r'Frequencies\s+--\s+(.*)'</span>, content)
    intens = re.findall(<span class="st">r'IR Inten\s+--\s+(.*)'</span>, content)
    
    freq_list = [<span class="fn2">float</span>(f) <span class="kw">for</span> line <span class="kw">in</span> freqs <span class="kw">for</span> f <span class="kw">in</span> line.split()]
    intens_list = [<span class="fn2">float</span>(i) <span class="kw">for</span> line <span class="kw">in</span> intens <span class="kw">for</span> i <span class="kw">in</span> line.split()]
    
    <span class="kw">return</span> freq_list, intens_list

<span class="cm"># 读取数据</span>
freqs, intens = <span class="fn2">read_ir_spectrum</span>(<span class="st">"output.log"</span>)

<span class="cm"># 生成平滑曲线</span>
x = np.linspace(<span class="nu">0</span>, <span class="nu">4000</span>, <span class="nu">4000</span>)
y = np.zeros_like(x)

<span class="kw">for</span> freq, inten <span class="kw">in</span> <span class="fn2">zip</span>(freqs, intens):
    <span class="cm"># Lorentzian 展宽</span>
    gamma = <span class="nu">4</span>  <span class="cm"># cm⁻¹</span>
    y += inten * gamma**<span class="nu">2</span> / ((x - freq)**<span class="nu">2</span> + gamma**<span class="nu">2</span>)

<span class="cm"># 绘图</span>
fig, ax = plt.subplots(figsize=(<span class="nu">10</span>, <span class="nu">6</span>))
ax.plot(x, y, <span class="st">'b-'</span>, linewidth=<span class="nu">1.5</span>)
ax.set_xlabel(<span class="st">'Wavenumber (cm⁻¹)'</span>)
ax.set_ylabel(<span class="st">'Transmittance (a.u.)'</span>)
ax.set_xlim(<span class="nu">4000</span>, <span class="nu">0</span>)  <span class="cm"># IR 通常从右到左</span>
ax.set_title(<span class="st">'IR Spectrum'</span>)
plt.savefig(<span class="st">'ir_spectrum.png'</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>
    </div>

    <h4>UV-Vis 光谱绘图</h4>
    <div class="cb">
      <div class="ch"><span class="la">python</span><span class="fn">plot_uvvis.py</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt
<span class="kw">import</span> re

<span class="kw">def</span> <span class="fn2">read_tddft</span>(filename):
    <span class="st">"""读取 TDDFT 结果"""</span>
    <span class="kw">with</span> <span class="fn2">open</span>(filename, <span class="st">'r'</span>) <span class="kw">as</span> f:
        content = f.read()
    
    <span class="cm"># 提取激发能和振子强度</span>
    excitations = re.findall(
        <span class="st">r'Excited State\s+\d+:\s+.*?(\d+\.\d+) eV\s+.*?f=(\d+\.\d+)'</span>,
        content
    )
    
    energies = [<span class="fn2">float</span>(e) <span class="kw">for</span> e, _ <span class="kw">in</span> excitations]
    osc_strengths = [<span class="fn2">float</span>(f) <span class="kw">for</span> _, f <span class="kw">in</span> excitations]
    
    <span class="kw">return</span> energies, osc_strengths

<span class="cm"># 读取数据</span>
energies, osc = <span class="fn2">read_tddft</span>(<span class="st">"output.log"</span>)

<span class="cm"># 转换为波长</span>
wavelengths = [<span class="nu">1240</span> / e <span class="kw">for</span> e <span class="kw">in</span> energies]  <span class="cm"># nm</span>

<span class="cm"># 生成平滑光谱</span>
x = np.linspace(<span class="nu">200</span>, <span class="nu">800</span>, <span class="nu">600</span>)
y = np.zeros_like(x)

<span class="kw">for</span> wl, osc_str <span class="kw">in</span> <span class="fn2">zip</span>(wavelengths, osc):
    <span class="cm"># Gaussian 展宽</span>
    sigma = <span class="nu">20</span>  <span class="cm"># nm</span>
    y += osc_str * np.exp(-<span class="nu">0.5</span> * ((x - wl) / sigma)**<span class="nu">2</span>)

<span class="cm"># 绘图</span>
fig, ax = plt.subplots(figsize=(<span class="nu">10</span>, <span class="nu">6</span>))
ax.plot(x, y, <span class="st">'b-'</span>, linewidth=<span class="nu">1.5</span>)
ax.set_xlabel(<span class="st">'Wavelength (nm)'</span>)
ax.set_ylabel(<span class="st">'Oscillator Strength (a.u.)'</span>)
ax.set_title(<span class="st">'UV-Vis Spectrum'</span>)

<span class="cm"># 标记峰值</span>
<span class="kw">for</span> wl, osc_str <span class="kw">in</span> <span class="fn2">zip</span>(wavelengths, osc):
    ax.axvline(x=wl, color=<span class="st">'r'</span>, linestyle=<span class="st">'--'</span>, alpha=<span class="nu">0.5</span>)

plt.savefig(<span class="st">'uvvis_spectrum.png'</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>
    </div>

    <h3>8. 轨道可视化</h3>
    <h4>使用 Multiwfn 生成轨道立方文件</h4>
    <div class="cb">
      <div class="ch"><span class="la">Multiwfn</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 启动 Multiwfn</span>
Multiwfn output.log

<span class="cm"># 选择功能</span>
<span class="cm"># 2 → Output and plot specific molecular orbitals</span>
<span class="cm"># 输入轨道编号 (如 HOMO=-1, LUMO=1)</span>
<span class="cm"># 生成 .cube 文件</span>

<span class="cm"># 用 VESTA 或 VMD 打开 .cube 文件查看</span></code></pre>
    </div>

    <h4>使用 GaussView 查看轨道</h4>
    <ol>
      <li>打开 .log 文件</li>
      <li>Results → Surfaces</li>
      <li>选择 "MOs" 标签</li>
      <li>选择要查看的轨道</li>
      <li>点击 "Surface Actions" → "New Surface"</li>
    </ol>

    <h3>9. 导出高质量图片</h3>
    <div class="ib tip"><strong>建议：</strong>
      <ul>
        <li><strong>分辨率：</strong>至少 300 dpi，论文用 600 dpi</li>
        <li><strong>格式：</strong>PNG（通用）、PDF（矢量）、EPS（论文）</li>
        <li><strong>背景：</strong>白色背景更清晰</li>
        <li><strong>视角：</strong>展示分子主要特征</li>
      </ul>
    </div>

    <h3>10. 工具选择建议</h3>
    <table class="tb">
      <thead><tr><th>任务</th><th>推荐工具</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>快速查看结构</td><td>Avogadro</td><td>免费、易用</td></tr>
        <tr><td>波函数分析</td><td>Multiwfn</td><td>功能强大、免费</td></tr>
        <tr><td>高质量图片</td><td>GaussView / PyMOL</td><td>专业渲染</td></tr>
        <tr><td>光谱绘图</td><td>Python / Origin</td><td>自定义程度高</td></tr>
        <tr><td>轨道可视化</td><td>GaussView / VMD</td><td>交互性好</td></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'GaussianVisualView',
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
