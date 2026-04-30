import{_ as c,o as u,c as m,a as n,e,w as r,h as l,f as p,g as f}from"./index-Bd4xWfQT.js";const w={name:"GaussianVisualView",methods:{copy(o){const d=o.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(d).then(()=>{o.target.textContent="已复制!",o.target.classList.add("ok"),setTimeout(()=>{o.target.textContent="复制",o.target.classList.remove("ok")},2e3)})}}},g={class:"sec active"},b={class:"bread"},h={class:"cb"},k={class:"ch"},y={class:"cb"},x={class:"ch"},v={class:"cb"},q={class:"ch"},M={class:"cb"},V={class:"ch"},G={class:"cb"},S={class:"ch"},C={class:"cb"},z={class:"ch"},D={class:"cb"},R={class:"ch"},O={class:"cb"},A={class:"ch"};function E(o,s,d,I,T,a){const i=f("router-link");return u(),m("div",g,[n("div",b,[e(i,{to:"/"},{default:r(()=>[...s[8]||(s[8]=[l("首页",-1)])]),_:1}),s[10]||(s[10]=l("/ ",-1)),e(i,{to:"/gaussian"},{default:r(()=>[...s[9]||(s[9]=[l("Gaussian 教程",-1)])]),_:1}),s[11]||(s[11]=l("/ ",-1)),s[12]||(s[12]=n("span",null,"可视化教程",-1))]),s[34]||(s[34]=p('<h2>Gaussian 结果可视化</h2><p>本节介绍如何使用各种工具可视化 Gaussian 的计算结果。</p><h3>1. 常用可视化工具</h3><table class="tb"><thead><tr><th>工具</th><th>类型</th><th>价格</th><th>主要功能</th></tr></thead><tbody><tr><td><strong>GaussView</strong></td><td>官方 GUI</td><td>付费</td><td>分子构建、结果查看</td></tr><tr><td><strong>Multiwfn</strong></td><td>波函数分析</td><td>免费</td><td>电子结构分析、绘图</td></tr><tr><td><strong>Avogadro</strong></td><td>分子编辑</td><td>免费</td><td>分子构建、可视化</td></tr><tr><td><strong>VMD</strong></td><td>分子动力学</td><td>免费</td><td>3D 可视化</td></tr><tr><td><strong>VESTA</strong></td><td>晶体结构</td><td>免费</td><td>周期性结构</td></tr><tr><td><strong>PyMOL</strong></td><td>分子图形</td><td>付费/免费</td><td>高质量图形</td></tr><tr><td><strong>Chemcraft</strong></td><td>Gaussian 专用</td><td>付费</td><td>Gaussian 结果分析</td></tr></tbody></table><h3>2. GaussView 使用</h3><h4>安装</h4><ul><li>随 Gaussian 一起安装，或单独购买</li><li>支持 Windows、Linux、macOS</li></ul><h4>打开输出文件</h4><ol><li>File → Open → 选择 .log 文件</li><li>自动识别计算结果</li><li>显示分子结构和结果</li></ol><h4>常用功能</h4><table class="tb"><thead><tr><th>功能</th><th>操作</th><th>说明</th></tr></thead><tbody><tr><td>查看结构</td><td>直接打开</td><td>显示 3D 分子</td></tr><tr><td>查看频率</td><td>Results → Vibrations</td><td>显示振动模式</td></tr><tr><td>查看轨道</td><td>Results → Surfaces</td><td>显示分子轨道</td></tr><tr><td>查看优化路径</td><td>Results → Optimization</td><td>显示优化过程</td></tr><tr><td>导出图片</td><td>File → Save Image</td><td>保存为图片</td></tr><tr><td>导出坐标</td><td>File → Save</td><td>保存为其他格式</td></tr></tbody></table><h3>3. Multiwfn 使用</h3><p>Multiwfn 是功能最强大的波函数分析工具，完全免费。</p><h4>安装</h4>',14)),n("div",h,[n("div",k,[s[13]||(s[13]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[0]||(s[0]=(...t)=>a.copy&&a.copy(...t))},"复制")]),s[14]||(s[14]=p(`<pre><code><span class="cm"># 下载 Multiwfn</span>
<span class="cm"># http://sobereva.com/multiwfn/</span>

<span class="cm"># 解压后设置环境变量</span>
<span class="kw">export</span> Multiwfnpath=/path/to/Multiwfn
<span class="kw">export</span> PATH=$Multiwfnpath:$PATH</code></pre>`,1))]),s[35]||(s[35]=p('<h4>常用功能</h4><table class="tb"><thead><tr><th>功能</th><th>菜单路径</th><th>说明</th></tr></thead><tbody><tr><td>查看分子</td><td>0 → 1</td><td>显示分子结构</td></tr><tr><td>绘制静电势</td><td>4 → 1</td><td>分子表面静电势</td></tr><tr><td>绘制电子密度</td><td>1 → 1</td><td>电子密度等值面</td></tr><tr><td>绘制轨道</td><td>2 → 1</td><td>分子轨道可视化</td></tr><tr><td>IR 光谱</td><td>10 → 1</td><td>红外光谱绘图</td></tr><tr><td>UV-Vis 光谱</td><td>10 → 3</td><td>紫外可见光谱</td></tr><tr><td>EDA 分析</td><td>7 → 1</td><td>能量分解分析</td></tr></tbody></table><h4>绘制 IR 光谱示例</h4>',3)),n("div",y,[n("div",x,[s[15]||(s[15]=n("span",{class:"la"},"Multiwfn",-1)),n("button",{class:"cpb",onClick:s[1]||(s[1]=(...t)=>a.copy&&a.copy(...t))},"复制")]),s[16]||(s[16]=p(`<pre><code><span class="cm"># 启动 Multiwfn</span>
Multiwfn output.log

<span class="cm"># 选择功能</span>
<span class="cm"># 10 → Spectrum and related properties</span>
<span class="cm"># 1 → IR spectrum</span>
<span class="cm"># 设置展宽 (推荐 4 cm⁻¹)</span>
<span class="cm"># 生成 spectrum.txt 和 spectrum_curve.png</span></code></pre>`,1))]),s[36]||(s[36]=p("<h3>4. Avogadro 使用</h3><h4>安装</h4><ul><li>下载：https://avogadro.cc</li><li>支持 Windows、Linux、macOS</li><li>开源免费</li></ul><h4>打开 Gaussian 输出</h4><ol><li>File → Open → 选择 .log 文件</li><li>自动识别并显示结构</li></ol><h4>常用功能</h4><ul><li><strong>旋转/缩放</strong>：鼠标拖动/滚轮</li><li><strong>测量距离</strong>：Extensions → Measure → Distance</li><li><strong>测量角度</strong>：Extensions → Measure → Angle</li><li><strong>显示轨道</strong>：Extensions → Surfaces</li><li><strong>导出图片</strong>：File → Export → Image</li></ul><h3>5. VMD 使用</h3><h4>安装</h4><ul><li>下载：https://www.ks.uiuc.edu/Research/vmd/</li><li>免费注册后下载</li></ul><h4>打开 Gaussian 输出</h4>",11)),n("div",v,[n("div",q,[s[17]||(s[17]=n("span",{class:"la"},"tcl",-1)),s[18]||(s[18]=n("span",{class:"fn"},"VMD 脚本",-1)),n("button",{class:"cpb",onClick:s[2]||(s[2]=(...t)=>a.copy&&a.copy(...t))},"复制")]),s[19]||(s[19]=n("pre",null,[n("code",null,[n("span",{class:"cm"},"# 在 VMD 控制台中"),l(`
`),n("span",{class:"cm"},"# 加载 Gaussian 输出"),l(`
mol load gaussian output.log

`),n("span",{class:"cm"},"# 或通过菜单"),l(`
`),n("span",{class:"cm"},"# File → New Molecule → Browse → 选择 .log")])],-1))]),s[37]||(s[37]=p('<h4>常用显示设置</h4><table class="tb"><thead><tr><th>操作</th><th>路径</th><th>说明</th></tr></thead><tbody><tr><td>改变显示样式</td><td>Graphics → Representations</td><td>CPK, Licorice 等</td></tr><tr><td>改变颜色</td><td>Graphics → Colors</td><td>按元素、残基等</td></tr><tr><td>渲染图片</td><td>File → Render</td><td>生成高质量图片</td></tr></tbody></table><h3>6. Python 可视化</h3><h4>使用 cclib + py3Dmol</h4>',4)),n("div",M,[n("div",V,[s[20]||(s[20]=n("span",{class:"la"},"python",-1)),s[21]||(s[21]=n("span",{class:"fn"},"visualize.py",-1)),n("button",{class:"cpb",onClick:s[3]||(s[3]=(...t)=>a.copy&&a.copy(...t))},"复制")]),s[22]||(s[22]=p(`<pre><code><span class="kw">import</span> cclib
<span class="kw">import</span> py3Dmol
<span class="kw">from</span> rdkit <span class="kw">import</span> Chem
<span class="kw">from</span> rdkit.Chem <span class="kw">import</span> AllChem, Draw

<span class="cm"># 读取 Gaussian 输出</span>
data = cclib.io.ccopen(<span class="st">&quot;output.log&quot;</span>).parse()

<span class="cm"># 获取最终坐标</span>
coords = data.atomcoords[-<span class="nu">1</span>]
elements = data.atomnos

<span class="cm"># 创建 XYZ 格式</span>
xyz = <span class="st">f&quot;{len(elements)}\\n\\n&quot;</span>
<span class="kw">for</span> i, (elem, coord) <span class="kw">in</span> <span class="fn2">enumerate</span>(<span class="fn2">zip</span>(elements, coords)):
    symbol = Chem.PeriodicTable.GetElementSymbol(elem)
    xyz += <span class="st">f&quot;{symbol}  {coord[0]:.6f}  {coord[1]:.6f}  {coord[2]:.6f}\\n&quot;</span>

<span class="cm"># 3D 可视化</span>
view = py3Dmol.view(width=<span class="nu">400</span>, height=<span class="nu">400</span>)
view.addModel(xyz, <span class="st">&quot;xyz&quot;</span>)
view.setStyle({<span class="st">&quot;stick&quot;</span>: {}})
view.zoomTo()
view.show()</code></pre>`,1))]),s[38]||(s[38]=n("h4",null,"使用 ASE + matplotlib",-1)),n("div",G,[n("div",S,[s[23]||(s[23]=n("span",{class:"la"},"python",-1)),s[24]||(s[24]=n("span",{class:"fn"},"plot_mol.py",-1)),n("button",{class:"cpb",onClick:s[4]||(s[4]=(...t)=>a.copy&&a.copy(...t))},"复制")]),s[25]||(s[25]=p(`<pre><code><span class="kw">from</span> ase.io <span class="kw">import</span> read
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 Gaussian 输出</span>
atoms = read(<span class="st">&quot;output.log&quot;</span>)

<span class="cm"># 获取坐标</span>
positions = atoms.get_positions()
symbols = atoms.get_chemical_symbols()

<span class="cm"># 2D 投影绘图</span>
fig, ax = plt.subplots(figsize=(<span class="nu">8</span>, <span class="nu">8</span>))

<span class="cm"># 绘制原子</span>
<span class="kw">for</span> i, (pos, sym) <span class="kw">in</span> <span class="fn2">enumerate</span>(<span class="fn2">zip</span>(positions, symbols)):
    ax.plot(pos[<span class="nu">0</span>], pos[<span class="nu">1</span>], <span class="st">&#39;o&#39;</span>, markersize=<span class="nu">20</span>)
    ax.text(pos[<span class="nu">0</span>], pos[<span class="nu">1</span>], sym, ha=<span class="st">&#39;center&#39;</span>, va=<span class="st">&#39;center&#39;</span>)

ax.set_aspect(<span class="st">&#39;equal&#39;</span>)
ax.set_xlabel(<span class="st">&#39;X (Å)&#39;</span>)
ax.set_ylabel(<span class="st">&#39;Y (Å)&#39;</span>)
plt.savefig(<span class="st">&#39;molecule_2d.png&#39;</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>`,1))]),s[39]||(s[39]=n("h3",null,"7. 光谱可视化",-1)),s[40]||(s[40]=n("h4",null,"IR 光谱绘图",-1)),n("div",C,[n("div",z,[s[26]||(s[26]=n("span",{class:"la"},"python",-1)),s[27]||(s[27]=n("span",{class:"fn"},"plot_ir.py",-1)),n("button",{class:"cpb",onClick:s[5]||(s[5]=(...t)=>a.copy&&a.copy(...t))},"复制")]),s[28]||(s[28]=p(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt
<span class="kw">import</span> re

<span class="kw">def</span> <span class="fn2">read_ir_spectrum</span>(filename):
    <span class="st">&quot;&quot;&quot;读取 Gaussian IR 光谱&quot;&quot;&quot;</span>
    <span class="kw">with</span> <span class="fn2">open</span>(filename, <span class="st">&#39;r&#39;</span>) <span class="kw">as</span> f:
        content = f.read()
    
    <span class="cm"># 提取频率和强度</span>
    freqs = re.findall(<span class="st">r&#39;Frequencies\\s+--\\s+(.*)&#39;</span>, content)
    intens = re.findall(<span class="st">r&#39;IR Inten\\s+--\\s+(.*)&#39;</span>, content)
    
    freq_list = [<span class="fn2">float</span>(f) <span class="kw">for</span> line <span class="kw">in</span> freqs <span class="kw">for</span> f <span class="kw">in</span> line.split()]
    intens_list = [<span class="fn2">float</span>(i) <span class="kw">for</span> line <span class="kw">in</span> intens <span class="kw">for</span> i <span class="kw">in</span> line.split()]
    
    <span class="kw">return</span> freq_list, intens_list

<span class="cm"># 读取数据</span>
freqs, intens = <span class="fn2">read_ir_spectrum</span>(<span class="st">&quot;output.log&quot;</span>)

<span class="cm"># 生成平滑曲线</span>
x = np.linspace(<span class="nu">0</span>, <span class="nu">4000</span>, <span class="nu">4000</span>)
y = np.zeros_like(x)

<span class="kw">for</span> freq, inten <span class="kw">in</span> <span class="fn2">zip</span>(freqs, intens):
    <span class="cm"># Lorentzian 展宽</span>
    gamma = <span class="nu">4</span>  <span class="cm"># cm⁻¹</span>
    y += inten * gamma**<span class="nu">2</span> / ((x - freq)**<span class="nu">2</span> + gamma**<span class="nu">2</span>)

<span class="cm"># 绘图</span>
fig, ax = plt.subplots(figsize=(<span class="nu">10</span>, <span class="nu">6</span>))
ax.plot(x, y, <span class="st">&#39;b-&#39;</span>, linewidth=<span class="nu">1.5</span>)
ax.set_xlabel(<span class="st">&#39;Wavenumber (cm⁻¹)&#39;</span>)
ax.set_ylabel(<span class="st">&#39;Transmittance (a.u.)&#39;</span>)
ax.set_xlim(<span class="nu">4000</span>, <span class="nu">0</span>)  <span class="cm"># IR 通常从右到左</span>
ax.set_title(<span class="st">&#39;IR Spectrum&#39;</span>)
plt.savefig(<span class="st">&#39;ir_spectrum.png&#39;</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>`,1))]),s[41]||(s[41]=n("h4",null,"UV-Vis 光谱绘图",-1)),n("div",D,[n("div",R,[s[29]||(s[29]=n("span",{class:"la"},"python",-1)),s[30]||(s[30]=n("span",{class:"fn"},"plot_uvvis.py",-1)),n("button",{class:"cpb",onClick:s[6]||(s[6]=(...t)=>a.copy&&a.copy(...t))},"复制")]),s[31]||(s[31]=p(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt
<span class="kw">import</span> re

<span class="kw">def</span> <span class="fn2">read_tddft</span>(filename):
    <span class="st">&quot;&quot;&quot;读取 TDDFT 结果&quot;&quot;&quot;</span>
    <span class="kw">with</span> <span class="fn2">open</span>(filename, <span class="st">&#39;r&#39;</span>) <span class="kw">as</span> f:
        content = f.read()
    
    <span class="cm"># 提取激发能和振子强度</span>
    excitations = re.findall(
        <span class="st">r&#39;Excited State\\s+\\d+:\\s+.*?(\\d+\\.\\d+) eV\\s+.*?f=(\\d+\\.\\d+)&#39;</span>,
        content
    )
    
    energies = [<span class="fn2">float</span>(e) <span class="kw">for</span> e, _ <span class="kw">in</span> excitations]
    osc_strengths = [<span class="fn2">float</span>(f) <span class="kw">for</span> _, f <span class="kw">in</span> excitations]
    
    <span class="kw">return</span> energies, osc_strengths

<span class="cm"># 读取数据</span>
energies, osc = <span class="fn2">read_tddft</span>(<span class="st">&quot;output.log&quot;</span>)

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
ax.plot(x, y, <span class="st">&#39;b-&#39;</span>, linewidth=<span class="nu">1.5</span>)
ax.set_xlabel(<span class="st">&#39;Wavelength (nm)&#39;</span>)
ax.set_ylabel(<span class="st">&#39;Oscillator Strength (a.u.)&#39;</span>)
ax.set_title(<span class="st">&#39;UV-Vis Spectrum&#39;</span>)

<span class="cm"># 标记峰值</span>
<span class="kw">for</span> wl, osc_str <span class="kw">in</span> <span class="fn2">zip</span>(wavelengths, osc):
    ax.axvline(x=wl, color=<span class="st">&#39;r&#39;</span>, linestyle=<span class="st">&#39;--&#39;</span>, alpha=<span class="nu">0.5</span>)

plt.savefig(<span class="st">&#39;uvvis_spectrum.png&#39;</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>`,1))]),s[42]||(s[42]=n("h3",null,"8. 轨道可视化",-1)),s[43]||(s[43]=n("h4",null,"使用 Multiwfn 生成轨道立方文件",-1)),n("div",O,[n("div",A,[s[32]||(s[32]=n("span",{class:"la"},"Multiwfn",-1)),n("button",{class:"cpb",onClick:s[7]||(s[7]=(...t)=>a.copy&&a.copy(...t))},"复制")]),s[33]||(s[33]=p(`<pre><code><span class="cm"># 启动 Multiwfn</span>
Multiwfn output.log

<span class="cm"># 选择功能</span>
<span class="cm"># 2 → Output and plot specific molecular orbitals</span>
<span class="cm"># 输入轨道编号 (如 HOMO=-1, LUMO=1)</span>
<span class="cm"># 生成 .cube 文件</span>

<span class="cm"># 用 VESTA 或 VMD 打开 .cube 文件查看</span></code></pre>`,1))]),s[44]||(s[44]=p('<h4>使用 GaussView 查看轨道</h4><ol><li>打开 .log 文件</li><li>Results → Surfaces</li><li>选择 &quot;MOs&quot; 标签</li><li>选择要查看的轨道</li><li>点击 &quot;Surface Actions&quot; → &quot;New Surface&quot;</li></ol><h3>9. 导出高质量图片</h3><div class="ib tip"><strong>建议：</strong><ul><li><strong>分辨率：</strong>至少 300 dpi，论文用 600 dpi</li><li><strong>格式：</strong>PNG（通用）、PDF（矢量）、EPS（论文）</li><li><strong>背景：</strong>白色背景更清晰</li><li><strong>视角：</strong>展示分子主要特征</li></ul></div><h3>10. 工具选择建议</h3><table class="tb"><thead><tr><th>任务</th><th>推荐工具</th><th>说明</th></tr></thead><tbody><tr><td>快速查看结构</td><td>Avogadro</td><td>免费、易用</td></tr><tr><td>波函数分析</td><td>Multiwfn</td><td>功能强大、免费</td></tr><tr><td>高质量图片</td><td>GaussView / PyMOL</td><td>专业渲染</td></tr><tr><td>光谱绘图</td><td>Python / Origin</td><td>自定义程度高</td></tr><tr><td>轨道可视化</td><td>GaussView / VMD</td><td>交互性好</td></tr></tbody></table>',6))])}const F=c(w,[["render",E]]);export{F as default};
