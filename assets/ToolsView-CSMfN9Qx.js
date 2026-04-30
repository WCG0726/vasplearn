import{_ as d,o as u,c as f,a as n,e,w as r,h as t,f as l,g as b}from"./index-Bd4xWfQT.js";const m={name:"ToolsView",methods:{openLink(c){window.open(c,"_blank")},copy(c){const o=c.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(o).then(()=>{c.target.textContent="已复制!",c.target.classList.add("ok"),setTimeout(()=>{c.target.textContent="复制",c.target.classList.remove("ok")},2e3)})}}},k={class:"sec active"},y={class:"bread"},v={class:"pg"},g={class:"cb"},w={class:"ch"},q={class:"cb"},C={class:"ch"},A={class:"cb"},S={class:"ch"},O={class:"cb"},x={class:"ch"},T={class:"cb"},E={class:"ch"},P={class:"cb"},V={class:"ch"},R={class:"cb"},N={class:"ch"},D={class:"cb"},I={class:"ch"},U={class:"cb"},F={class:"ch"},K={class:"cb"},L={class:"ch"},B={class:"cb"},G={class:"ch"},M={class:"cb"},j={class:"ch"},z={class:"cb"},h={class:"ch"},H={class:"cb"},$={class:"ch"},W={class:"cb"},X={class:"ch"},J={class:"cb"},Y={class:"ch"},Q={class:"cb"},Z={class:"ch"};function _(c,s,o,ss,ns,a){const i=b("router-link");return u(),f("div",k,[n("div",y,[e(i,{to:"/"},{default:r(()=>[...s[21]||(s[21]=[t("首页",-1)])]),_:1}),s[22]||(s[22]=t("/",-1)),s[23]||(s[23]=n("span",null,"工具与资源",-1))]),s[74]||(s[74]=n("h2",null,"辅助工具",-1)),s[75]||(s[75]=n("p",null,"VASP 计算需要配合多种工具进行结构可视化、数据处理和后分析。",-1)),n("div",v,[e(i,{to:"/tools/calculator",class:"pc",style:{"--ca":"var(--cyan)"}},{default:r(()=>[...s[24]||(s[24]=[n("div",{class:"pc-i"},"🔧",-1),n("div",{class:"pc-t"},"参数计算器",-1),n("div",{class:"pc-d"},"ENCUT、K 点、形成能等计算工具",-1)])]),_:1}),n("div",{class:"pc",style:{"--ca":"var(--blue)"},onClick:s[0]||(s[0]=p=>a.openLink("https://www.vasp.at/wiki/index.php/VESTA"))},[...s[25]||(s[25]=[n("div",{class:"pc-i"},"🔬",-1),n("div",{class:"pc-t"},"VESTA",-1),n("div",{class:"pc-d"},"晶体结构可视化",-1)])]),n("div",{class:"pc",style:{"--ca":"var(--green)"},onClick:s[1]||(s[1]=p=>a.openLink("https://vaspkit.com"))},[...s[26]||(s[26]=[n("div",{class:"pc-i"},"🛠️",-1),n("div",{class:"pc-t"},"VASPKIT",-1),n("div",{class:"pc-d"},"后处理工具包",-1)])]),n("div",{class:"pc",style:{"--ca":"var(--purple)"},onClick:s[2]||(s[2]=p=>a.openLink("https://pymatgen.org"))},[...s[27]||(s[27]=[n("div",{class:"pc-i"},"🐍",-1),n("div",{class:"pc-t"},"pymatgen",-1),n("div",{class:"pc-d"},"Python 材料分析库",-1)])]),n("div",{class:"pc",style:{"--ca":"var(--orange)"},onClick:s[3]||(s[3]=p=>a.openLink("https://phonopy.github.io/phonopy"))},[...s[28]||(s[28]=[n("div",{class:"pc-i"},"🔊",-1),n("div",{class:"pc-t"},"phonopy",-1),n("div",{class:"pc-d"},"声子计算工具",-1)])])]),s[76]||(s[76]=l(`<h2>VESTA 使用入门</h2><p>VESTA 是最常用的晶体结构可视化软件，支持多种格式。</p><h3>1. 基本操作</h3><table class="tb"><thead><tr><th>操作</th><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>打开文件</td><td>File → Open → 选择 POSCAR</td><td>支持 VASP、CIF、XSF 等格式</td></tr><tr><td>旋转结构</td><td>鼠标左键拖动</td><td>多角度查看</td></tr><tr><td>缩放</td><td>鼠标滚轮</td><td>放大/缩小</td></tr><tr><td>平移</td><td>鼠标右键拖动</td><td>移动视角</td></tr><tr><td>测量距离</td><td>Utilities → Distance</td><td>点击两个原子</td></tr><tr><td>测量角度</td><td>Utilities → Angle</td><td>点击三个原子</td></tr><tr><td>截图</td><td>File → Export Raster Image</td><td>导出 PNG/JPG</td></tr></tbody></table><h3>2. 显示设置</h3><div class="cb"><div class="ch"><span class="la">VESTA</span><span class="fn">常用设置路径</span></div><pre><code><span class="cm"># 修改原子大小和颜色</span>
Objects → Atoms → Properties

<span class="cm"># 显示晶胞边界</span>
Objects → Unit cell → Boundary

<span class="cm"># 显示键</span>
Objects → Bonds → Search bonds

<span class="cm"># 显示坐标轴</span>
Objects → Axes

<span class="cm"># 修改背景颜色</span>
View → Background color</code></pre></div><h3>3. 常用技巧</h3><ul><li><strong>显示超胞：</strong>Edit → Edit Data → Structure → Transform → 扩展晶胞</li><li><strong>切表面：</strong>Utilities → Boundary → 设置截断平面</li><li><strong>导出高分辨率图：</strong>File → Export → 设置 DPI ≥ 300</li><li><strong>比较结构：</strong>File → Open → 选择多个文件同时显示</li></ul><h2>VASPKIT 使用指南</h2><p>VASPKIT 是 VASP 后处理的瑞士军刀，提供 200+ 功能。</p><h3>1. 安装与配置</h3>`,11)),n("div",g,[n("div",w,[s[29]||(s[29]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[4]||(s[4]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[30]||(s[30]=l(`<pre><code><span class="cm"># 下载安装</span>
<span class="fn2">git</span> clone https://github.com/vaspkit/VASPKIT.git
<span class="fn2">cd</span> VASPKIT
<span class="fn2">./setup.sh</span>

<span class="cm"># 配置环境变量（添加到 ~/.bashrc）</span>
<span class="fn2">export</span> PATH=$PATH:~/VASPKIT/bin

<span class="cm"># 验证安装</span>
<span class="fn2">vaspkit</span> -v</code></pre>`,1))]),s[77]||(s[77]=l('<h3>2. 常用功能速查</h3><table class="tb"><thead><tr><th>功能</th><th>菜单路径</th><th>说明</th></tr></thead><tbody><tr><td>生成 K 路径</td><td>2 → 2 → 1</td><td>Line-mode KPOINTS</td></tr><tr><td>处理 DOS</td><td>3 → 1 → 1</td><td>提取 DOS 数据</td></tr><tr><td>处理能带</td><td>3 → 2 → 1</td><td>提取能带数据</td></tr><tr><td>电荷密度</td><td>5 → 1</td><td>处理 CHGCAR</td></tr><tr><td>结构转换</td><td>7 → 1</td><td>POSCAR ↔ CIF</td></tr><tr><td>生成 POTCAR</td><td>1 → 1</td><td>自动拼接赝势</td></tr></tbody></table><h3>3. 生成 K 点路径</h3>',3)),n("div",q,[n("div",C,[s[31]||(s[31]=n("span",{class:"la"},"bash",-1)),s[32]||(s[32]=n("span",{class:"fn"},"vaspkit 生成能带 K 路径",-1)),n("button",{class:"cpb",onClick:s[5]||(s[5]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[33]||(s[33]=l(`<pre><code><span class="cm"># 运行 vaspkit</span>
<span class="fn2">vaspkit</span>

<span class="cm"># 选择菜单</span>
<span class="cm"># 2 → Material Science Utilities</span>
<span class="cm"># 2 → K-Path Generator</span>
<span class="cm"># 1 → Generate K-Path for Band Structure</span>

<span class="cm"># 自动识别高对称点并生成 KPOINTS</span></code></pre>`,1))]),s[78]||(s[78]=n("h3",null,"4. 处理 DOS 数据",-1)),n("div",A,[n("div",S,[s[34]||(s[34]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[6]||(s[6]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[35]||(s[35]=l(`<pre><code><span class="cm"># 提取总 DOS</span>
<span class="fn2">vaspkit</span> -task 311

<span class="cm"># 提取分波 DOS (PDOS)</span>
<span class="fn2">vaspkit</span> -task 312

<span class="cm"># 生成 DOS 数据文件（TOTEL_DOS.dat, PDOS_*.dat）</span>

<span class="cm"># 使用 origin 或 gnuplot 绘图</span></code></pre>`,1))]),s[79]||(s[79]=n("h2",null,"pymatgen Python 示例",-1)),s[80]||(s[80]=n("p",null,"pymatgen 是最强大的 Python 材料分析库，支持 VASP 输入输出处理。",-1)),s[81]||(s[81]=n("h3",null,"1. 安装",-1)),n("div",O,[n("div",x,[s[36]||(s[36]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[7]||(s[7]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[37]||(s[37]=n("pre",null,[n("code",null,[n("span",{class:"cm"},"# 安装 pymatgen"),t(`
`),n("span",{class:"fn2"},"pip"),t(` install pymatgen

`),n("span",{class:"cm"},"# 安装 VASP 接口依赖"),t(`
`),n("span",{class:"fn2"},"pip"),t(" install pymatgen-analysis-diffusion")])],-1))]),s[82]||(s[82]=n("h3",null,"2. 读取和处理结构",-1)),n("div",T,[n("div",E,[s[38]||(s[38]=n("span",{class:"la"},"python",-1)),s[39]||(s[39]=n("span",{class:"fn"},"read_structure.py",-1)),n("button",{class:"cpb",onClick:s[8]||(s[8]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[40]||(s[40]=l(`<pre><code><span class="kw">from</span> pymatgen.core <span class="kw">import</span> Structure
<span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Poscar

<span class="cm"># 读取 POSCAR</span>
structure = Structure.<span class="fn2">from_file</span>(<span class="st">&quot;POSCAR&quot;</span>)

<span class="cm"># 基本信息</span>
<span class="fn2">print</span>(f<span class="st">&quot;化学式: {structure.formula}&quot;</span>)
<span class="fn2">print</span>(f<span class="st">&quot;原子数: {len(structure)}&quot;</span>)
<span class="fn2">print</span>(f<span class="st">&quot;晶格参数: {structure.lattice.abc}&quot;</span>)
<span class="fn2">print</span>(f<span class="st">&quot;体积: {structure.volume:.2f} Å³&quot;</span>)

<span class="cm"># 获取原子距离</span>
distances = structure.<span class="fn2">distance_matrix</span>
<span class="fn2">print</span>(f<span class="st">&quot;最小原子距离: {distances[distances &gt; 0].min():.2f} Å&quot;</span>)

<span class="cm"># 创建超胞</span>
supercell = structure * [<span class="nu">2</span>, <span class="nu">2</span>, <span class="nu">2</span>]
supercell.<span class="fn2">to</span>(filename=<span class="st">&quot;POSCAR_supercell&quot;</span>)</code></pre>`,1))]),s[83]||(s[83]=n("h3",null,"3. 处理 VASP 输出",-1)),n("div",P,[n("div",V,[s[41]||(s[41]=n("span",{class:"la"},"python",-1)),s[42]||(s[42]=n("span",{class:"fn"},"read_vasp_output.py",-1)),n("button",{class:"cpb",onClick:s[9]||(s[9]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[43]||(s[43]=l(`<pre><code><span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Vasprun, Outcar

<span class="cm"># 读取 vasprun.xml（包含所有计算信息）</span>
vr = Vasprun(<span class="st">&quot;vasprun.xml&quot;</span>)

<span class="cm"># 获取最终能量</span>
<span class="fn2">print</span>(f<span class="st">&quot;最终能量: {vr.final_energy:.6f} eV&quot;</span>)
<span class="fn2">print</span>(f<span class="st">&quot;每原子能量: {vr.final_energy / len(vr.final_structure):.6f} eV/atom&quot;</span>)

<span class="cm"># 获取收敛结构</span>
final_structure = vr.final_structure
<span class="fn2">print</span>(f<span class="st">&quot;最终晶格: {final_structure.lattice.abc}&quot;</span>)

<span class="cm"># 检查是否收敛</span>
<span class="fn2">print</span>(f<span class="st">&quot;电子步收敛: {vr.converged_electronic}&quot;</span>)
<span class="fn2">print</span>(f<span class="st">&quot;离子步收敛: {vr.converged_ionic}&quot;</span>)

<span class="cm"># 读取 OUTCAR</span>
outcar = Outcar(<span class="st">&quot;OUTCAR&quot;</span>)

<span class="cm"># 获取最终力</span>
<span class="fn2">print</span>(f<span class="st">&quot;最大力: {max(abs(f) <span class="kw">for</span> f <span class="kw">in</span> outcar.final_structure.forces):.6f} eV/Å&quot;</span>)

<span class="cm"># 获取应力</span>
<span class="fn2">print</span>(f<span class="st">&quot;应力张量: {outcar.stress}&quot;</span>)

<span class="cm"># 获取费米能级</span>
<span class="fn2">print</span>(f<span class="st">&quot;费米能级: {outcar.efermi:.4f} eV&quot;</span>)</code></pre>`,1))]),s[84]||(s[84]=n("h3",null,"4. 处理 DOS 数据",-1)),n("div",R,[n("div",N,[s[44]||(s[44]=n("span",{class:"la"},"python",-1)),s[45]||(s[45]=n("span",{class:"fn"},"dos_analysis.py",-1)),n("button",{class:"cpb",onClick:s[10]||(s[10]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[46]||(s[46]=l(`<pre><code><span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Vasprun
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 DOS 数据</span>
vr = Vasprun(<span class="st">&quot;vasprun.xml&quot;</span>, parse_dos=<span class="kw">True</span>)
dos = vr.complete_dos

<span class="cm"># 获取能隙</span>
bandgap = dos.get_band_gap()
<span class="fn2">print</span>(f<span class="st">&quot;带隙: {bandgap[&#39;energy&#39;]:.3f} eV ({bandgap[&#39;transition&#39;]})&quot;</span>)

<span class="cm"># 绘制总 DOS</span>
fig, ax = plt.subplots(figsize=(<span class="nu">8</span>, <span class="nu">6</span>))

<span class="cm"># 总 DOS</span>
energies = dos.energies - dos.efermi
densities = dos.densities
ax.plot(energies, densities, <span class="st">&#39;b-&#39;</span>, label=<span class="st">&#39;Total DOS&#39;</span>)

<span class="cm"># 分波 DOS</span>
<span class="kw">for</span> el, pdos <span class="kw">in</span> dos.get_element_dos().items():
    ax.plot(energies, pdos.densities, label=f<span class="st">&#39;{el}&#39;</span>)

ax.set_xlabel(<span class="st">&#39;Energy - E<sub>F</sub> (eV)&#39;</span>)
ax.set_ylabel(<span class="st">&#39;DOS (states/eV)&#39;</span>)
ax.legend()
ax.axvline(x=<span class="nu">0</span>, color=<span class="st">&#39;k&#39;</span>, linestyle=<span class="st">&#39;--&#39;</span>)
ax.set_xlim(-<span class="nu">5</span>, <span class="nu">5</span>)
plt.savefig(<span class="st">&#39;dos_plot.png&#39;</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>`,1))]),s[85]||(s[85]=n("h3",null,"5. 处理能带数据",-1)),n("div",D,[n("div",I,[s[47]||(s[47]=n("span",{class:"la"},"python",-1)),s[48]||(s[48]=n("span",{class:"fn"},"band_analysis.py",-1)),n("button",{class:"cpb",onClick:s[11]||(s[11]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[49]||(s[49]=l(`<pre><code><span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> BSVasprun
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取能带计算结果</span>
vr = BSVasprun(<span class="st">&quot;vasprun.xml&quot;</span>)
bs = vr.get_band_structure(line_mode=<span class="kw">True</span>)

<span class="cm"># 基本信息</span>
<span class="fn2">print</span>(f<span class="st">&quot;带隙: {bs.get_band_gap()[&#39;energy&#39;]:.3f} eV&quot;</span>)
<span class="fn2">print</span>(f<span class="st">&quot;价带顶: {bs.get_vbm()[&#39;energy&#39;]:.3f} eV&quot;</span>)
<span class="fn2">print</span>(f<span class="st">&quot;导带底: {bs.get_cbm()[&#39;energy&#39;]:.3f} eV&quot;</span>)

<span class="cm"># 绘制能带图</span>
fig, ax = plt.subplots(figsize=(<span class="nu">8</span>, <span class="nu">6</span>))

<span class="cm"># 获取高对称点</span>
labels = [label <span class="kw">for</span> label <span class="kw">in</span> bs.branches[<span class="nu">0</span>][<span class="st">&#39;name&#39;</span>].split(<span class="st">&#39;-&#39;</span>)]

<span class="cm"># 绘制能带</span>
<span class="kw">for</span> band <span class="kw">in</span> bs.bands:
    ax.plot(band - bs.efermi, <span class="st">&#39;b-&#39;</span>, linewidth=<span class="nu">0.5</span>)

ax.axhline(y=<span class="nu">0</span>, color=<span class="st">&#39;r&#39;</span>, linestyle=<span class="st">&#39;--&#39;</span>, label=<span class="st">&#39;E<sub>F</sub>&#39;</span>)
ax.set_xlabel(<span class="st">&#39;K-path&#39;</span>)
ax.set_ylabel(<span class="st">&#39;Energy - E<sub>F</sub> (eV)&#39;</span>)
ax.set_ylim(-<span class="nu">5</span>, <span class="nu">5</span>)
ax.legend()
plt.savefig(<span class="st">&#39;band_structure.png&#39;</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>`,1))]),s[86]||(s[86]=n("h2",null,"phonopy 声子计算",-1)),s[87]||(s[87]=n("p",null,"phonopy 是计算声子谱的标准工具。",-1)),s[88]||(s[88]=n("h3",null,"1. 安装",-1)),n("div",U,[n("div",F,[s[50]||(s[50]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[12]||(s[12]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[51]||(s[51]=n("pre",null,[n("code",null,[n("span",{class:"cm"},"# 安装 phonopy"),t(`
`),n("span",{class:"fn2"},"pip"),t(` install phonopy

`),n("span",{class:"cm"},"# 验证安装"),t(`
`),n("span",{class:"fn2"},"phonopy"),t(" --version")])],-1))]),s[89]||(s[89]=n("h3",null,"2. 基本工作流",-1)),n("div",K,[n("div",L,[s[52]||(s[52]=n("span",{class:"la"},"bash",-1)),s[53]||(s[53]=n("span",{class:"fn"},"phonopy_workflow.sh",-1)),n("button",{class:"cpb",onClick:s[13]||(s[13]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[54]||(s[54]=l(`<pre><code><span class="kw">#!/bin/bash</span>

<span class="cm"># 步骤 1：从优化结构生成超胞</span>
<span class="fn2">cp</span> CONTCAR POSCAR-orig
<span class="fn2">phonopy</span> --vasp -d --dim=<span class="st">&quot;3 3 3&quot;</span>

<span class="cm"># 步骤 2：对每个位移超胞计算力</span>
<span class="kw">for</span> d <span class="kw">in</span> DISP-*; <span class="kw">do</span>
    <span class="fn2">cd</span> $d
    <span class="fn2">cp</span> ../INCAR ../POTCAR ../KPOINTS ./
    <span class="fn2">mpirun</span> -np <span class="nu">16</span> vasp_std
    <span class="fn2">cd</span> ..
<span class="kw">done</span>

<span class="cm"># 步骤 3：提取力常数</span>
<span class="fn2">phonopy</span> -f DISP-*/vasprun.xml

<span class="cm"># 步骤 4：计算声子谱</span>
<span class="fn2">phonopy</span> --dim=<span class="st">&quot;3 3 3&quot;</span> -c POSCAR-orig band.conf

<span class="cm"># 步骤 5：绘图</span>
<span class="fn2">phonopy-bandplot</span></code></pre>`,1))]),s[90]||(s[90]=n("h3",null,"3. band.conf 配置文件",-1)),n("div",B,[n("div",G,[s[55]||(s[55]=n("span",{class:"la"},"band.conf",-1)),n("button",{class:"cpb",onClick:s[14]||(s[14]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[56]||(s[56]=n("pre",null,[n("code",null,[n("span",{class:"cm"},"# 声子谱计算配置"),t(`
ATOM_NAME = Si
DIM = 3 3 3

`),n("span",{class:"cm"},"# 高对称路径（立方晶系）"),t(`
BAND = 0.0 0.0 0.5  0.0 0.5 0.5  0.5 0.5 0.5  0.0 0.0 0.0
BAND_LABELS = X  W  L  Γ
BAND_POINTS = 51`)])],-1))]),s[91]||(s[91]=n("h2",null,"常用后处理脚本",-1)),s[92]||(s[92]=n("h3",null,"1. 能量提取脚本",-1)),n("div",M,[n("div",j,[s[57]||(s[57]=n("span",{class:"la"},"bash",-1)),s[58]||(s[58]=n("span",{class:"fn"},"get_energy.sh",-1)),n("button",{class:"cpb",onClick:s[15]||(s[15]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[59]||(s[59]=l(`<pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># 批量提取多个目录的能量</span>

<span class="fn2">echo</span> <span class="st">&quot;目录               能量(eV)        每原子(eV/atom)&quot;</span>
<span class="fn2">echo</span> <span class="st">&quot;------------------------------------------------&quot;</span>

<span class="kw">for</span> dir <span class="kw">in</span> */; <span class="kw">do</span>
    <span class="kw">if</span> [ -f <span class="st">&quot;$dir/OUTCAR&quot;</span> ]; <span class="kw">then</span>
        e=$(<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> $dir/OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $5}&#39;</span>)
        natoms=$(<span class="fn2">grep</span> <span class="st">&quot;NIONS&quot;</span> $dir/OUTCAR | <span class="fn2">head</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $NF}&#39;</span>)
        per_atom=$(<span class="fn2">echo</span> <span class="st">&quot;$e / $natoms&quot;</span> | <span class="fn2">bc</span> -l)
        <span class="fn2">printf</span> <span class="st">&quot;%-20s %12.6f %15.6f\\n&quot;</span> <span class="st">&quot;$dir&quot;</span> <span class="st">&quot;$e&quot;</span> <span class="st">&quot;$per_atom&quot;</span>
    <span class="kw">fi</span>
<span class="kw">done</span></code></pre>`,1))]),s[93]||(s[93]=n("h3",null,"2. DOS 绘图脚本",-1)),n("div",z,[n("div",h,[s[60]||(s[60]=n("span",{class:"la"},"python",-1)),s[61]||(s[61]=n("span",{class:"fn"},"plot_dos.py",-1)),n("button",{class:"cpb",onClick:s[16]||(s[16]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[62]||(s[62]=l(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 DOSCAR</span>
<span class="kw">def</span> <span class="fn2">read_doscar</span>(filename=<span class="st">&#39;DOSCAR&#39;</span>):
    <span class="kw">with</span> <span class="fn2">open</span>(filename, <span class="st">&#39;r&#39;</span>) <span class="kw">as</span> f:
        lines = f.readlines()
    
    natoms = <span class="fn2">int</span>(lines[<span class="nu">0</span>].split()[<span class="nu">0</span>])
    nedos = <span class="fn2">int</span>(lines[<span class="nu">5</span>].split()[<span class="nu">2</span>])
    efermi = <span class="fn2">float</span>(lines[<span class="nu">5</span>].split()[<span class="nu">3</span>])
    
    <span class="cm"># 总 DOS</span>
    dos_data = []
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn2">range</span>(<span class="nu">6</span>, <span class="nu">6</span> + nedos):
        dos_data.append([<span class="fn2">float</span>(x) <span class="kw">for</span> x <span class="kw">in</span> lines[i].split()])
    
    dos_data = np.array(dos_data)
    <span class="kw">return</span> dos_data[:, <span class="nu">0</span>] - efermi, dos_data[:, <span class="nu">1</span>], efermi

<span class="cm"># 绘制 DOS</span>
energy, dos, efermi = <span class="fn2">read_doscar</span>()

fig, ax = plt.subplots(figsize=(<span class="nu">8</span>, <span class="nu">6</span>))
ax.plot(energy, dos, <span class="st">&#39;b-&#39;</span>, linewidth=<span class="nu">1.5</span>)
ax.fill_between(energy, dos, alpha=<span class="nu">0.3</span>)
ax.axvline(x=<span class="nu">0</span>, color=<span class="st">&#39;r&#39;</span>, linestyle=<span class="st">&#39;--&#39;</span>, label=<span class="st">&#39;Fermi level&#39;</span>)
ax.set_xlabel(<span class="st">&#39;Energy - E<sub>F</sub> (eV)&#39;</span>)
ax.set_ylabel(<span class="st">&#39;DOS (states/eV)&#39;</span>)
ax.set_xlim(-<span class="nu">5</span>, <span class="nu">5</span>)
ax.legend()
plt.savefig(<span class="st">&#39;dos.png&#39;</span>, dpi=<span class="nu">150</span>, bbox_inches=<span class="st">&#39;tight&#39;</span>)
plt.show()</code></pre>`,1))]),s[94]||(s[94]=n("h3",null,"3. 能带图绘制脚本",-1)),n("div",H,[n("div",$,[s[63]||(s[63]=n("span",{class:"la"},"python",-1)),s[64]||(s[64]=n("span",{class:"fn"},"plot_band.py",-1)),n("button",{class:"cpb",onClick:s[17]||(s[17]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[65]||(s[65]=l(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 EIGENVAL</span>
<span class="kw">def</span> <span class="fn2">read_eigenval</span>(filename=<span class="st">&#39;EIGENVAL&#39;</span>):
    <span class="kw">with</span> <span class="fn2">open</span>(filename, <span class="st">&#39;r&#39;</span>) <span class="kw">as</span> f:
        lines = f.readlines()
    
    header = lines[<span class="nu">5</span>].split()
    nelect = <span class="fn2">int</span>(header[<span class="nu">0</span>])
    nkpoints = <span class="fn2">int</span>(header[<span class="nu">1</span>])
    nbands = <span class="fn2">int</span>(header[<span class="nu">2</span>])
    
    kpoints = []
    eigenvals = []
    
    idx = <span class="nu">6</span>
    <span class="kw">for</span> k <span class="kw">in</span> <span class="fn2">range</span>(nkpoints):
        kpoint = [<span class="fn2">float</span>(x) <span class="kw">for</span> x <span class="kw">in</span> lines[idx].split()[:<span class="nu">3</span>]]
        kpoints.append(kpoint)
        idx += <span class="nu">1</span>
        
        bands = []
        <span class="kw">for</span> b <span class="kw">in</span> <span class="fn2">range</span>(nbands):
            bands.append(<span class="fn2">float</span>(lines[idx].split()[<span class="nu">1</span>]))
            idx += <span class="nu">1</span>
        eigenvals.append(bands)
    
    <span class="kw">return</span> np.array(kpoints), np.array(eigenvals), nbands

<span class="cm"># 计算 k 距离</span>
<span class="kw">def</span> <span class="fn2">k_distance</span>(kpoints):
    dist = [<span class="nu">0</span>]
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn2">range</span>(<span class="nu">1</span>, <span class="fn2">len</span>(kpoints)):
        dk = np.linalg.norm(kpoints[i] - kpoints[i-<span class="nu">1</span>])
        dist.append(dist[-<span class="nu">1</span>] + dk)
    <span class="kw">return</span> np.array(dist)

<span class="cm"># 绘制能带</span>
kpoints, eigenvals, nbands = <span class="fn2">read_eigenval</span>()
kdist = <span class="fn2">k_distance</span>(kpoints)

<span class="cm"># 读取费米能级（从 OUTCAR）</span>
<span class="kw">with</span> <span class="fn2">open</span>(<span class="st">&#39;OUTCAR&#39;</span>, <span class="st">&#39;r&#39;</span>) <span class="kw">as</span> f:
    <span class="kw">for</span> line <span class="kw">in</span> f:
        <span class="kw">if</span> <span class="st">&#39;E-fermi&#39;</span> <span class="kw">in</span> line:
            efermi = <span class="fn2">float</span>(line.split()[<span class="nu">2</span>])
            <span class="kw">break</span>

fig, ax = plt.subplots(figsize=(<span class="nu">8</span>, <span class="nu">6</span>))
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn2">range</span>(nbands):
    ax.plot(kdist, eigenvals[:, i] - efermi, <span class="st">&#39;b-&#39;</span>, linewidth=<span class="nu">0.8</span>)

ax.axhline(y=<span class="nu">0</span>, color=<span class="st">&#39;r&#39;</span>, linestyle=<span class="st">&#39;--&#39;</span>, label=<span class="st">&#39;Fermi level&#39;</span>)
ax.set_xlabel(<span class="st">&#39;K-path&#39;</span>)
ax.set_ylabel(<span class="st">&#39;Energy - E<sub>F</sub> (eV)&#39;</span>)
ax.set_ylim(-<span class="nu">5</span>, <span class="nu">5</span>)
ax.legend()
plt.savefig(<span class="st">&#39;band_structure.png&#39;</span>, dpi=<span class="nu">150</span>, bbox_inches=<span class="st">&#39;tight&#39;</span>)
plt.show()</code></pre>`,1))]),s[95]||(s[95]=n("h2",null,"批量计算脚本模板",-1)),s[96]||(s[96]=n("h3",null,"1. 批量结构优化",-1)),n("div",W,[n("div",X,[s[66]||(s[66]=n("span",{class:"la"},"bash",-1)),s[67]||(s[67]=n("span",{class:"fn"},"batch_optimize.sh",-1)),n("button",{class:"cpb",onClick:s[18]||(s[18]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[68]||(s[68]=l(`<pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># 批量提交多个结构优化任务</span>

<span class="cm"># 任务列表</span>
structures=(<span class="st">&quot;Si&quot;</span> <span class="st">&quot;Ge&quot;</span> <span class="st">&quot;GaAs&quot;</span>)

<span class="kw">for</span> struct <span class="kw">in</span> \${structures[@]}; <span class="kw">do</span>
    <span class="fn2">mkdir</span> -p $struct
    <span class="fn2">cp</span> INCAR_opt KPOINTS POTCAR_\${struct} $struct/POTCAR
    <span class="fn2">cp</span> POSCAR_\${struct} $struct/POSCAR
    
    <span class="fn2">cd</span> $struct
    <span class="fn2">echo</span> <span class="st">&quot;Submitting $struct ...&quot;</span>
    <span class="fn2">sbatch</span> vasp_job.sh  <span class="cm"># 或 mpirun -np 16 vasp_std</span>
    <span class="fn2">cd</span> ..
<span class="kw">done</span>

<span class="fn2">echo</span> <span class="st">&quot;All jobs submitted!&quot;</span></code></pre>`,1))]),s[97]||(s[97]=n("h3",null,"2. ENCUT 收敛测试",-1)),n("div",J,[n("div",Y,[s[69]||(s[69]=n("span",{class:"la"},"bash",-1)),s[70]||(s[70]=n("span",{class:"fn"},"encut_test.sh",-1)),n("button",{class:"cpb",onClick:s[19]||(s[19]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[71]||(s[71]=l(`<pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># ENCUT 收敛性测试</span>

<span class="kw">for</span> encut <span class="kw">in</span> <span class="nu">200 250 300 350 400 450 500</span>; <span class="kw">do</span>
    <span class="fn2">mkdir</span> ENCUT_\${encut}
    <span class="fn2">cp</span> POSCAR KPOINTS POTCAR ENCUT_\${encut}/
    
    <span class="cm"># 生成 INCAR</span>
    <span class="fn2">cat</span> &gt; ENCUT_\${encut}/INCAR &lt;&lt; EOF
SYSTEM = ENCUT test
ENCUT = \${encut}
PREC = Accurate
EDIFF = 1E-6
IBRION = -1
NSW = 0
ISMEAR = 0
SIGMA = 0.05
EOF
    
    <span class="fn2">cd</span> ENCUT_\${encut}
    <span class="fn2">mpirun</span> -np <span class="nu">4</span> vasp_std
    <span class="fn2">cd</span> ..
<span class="kw">done</span>

<span class="cm"># 提取结果</span>
<span class="fn2">echo</span> <span class="st">&quot;ENCUT    Energy(eV)&quot;</span>
<span class="kw">for</span> encut <span class="kw">in</span> <span class="nu">200 250 300 350 400 450 500</span>; <span class="kw">do</span>
    e=$(<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> ENCUT_\${encut}/OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $5}&#39;</span>)
    <span class="fn2">echo</span> <span class="st">&quot;\${encut}      \${e}&quot;</span>
<span class="kw">done</span></code></pre>`,1))]),s[98]||(s[98]=n("h2",null,"常用命令速查",-1)),n("div",Q,[n("div",Z,[s[72]||(s[72]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[20]||(s[20]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[73]||(s[73]=l(`<pre><code><span class="cm"># 提取能量</span>
<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 提取力</span>
<span class="fn2">grep</span> <span class="st">&quot;TOTAL-FORCE&quot;</span> OUTCAR -A <span class="nu">4</span>

<span class="cm"># 检查收敛</span>
<span class="fn2">grep</span> <span class="st">&quot;reached required&quot;</span> OUTCAR

<span class="cm"># 查看费米能级</span>
<span class="fn2">grep</span> <span class="st">&quot;E-fermi&quot;</span> OUTCAR

<span class="cm"># 查看外部压力</span>
<span class="fn2">grep</span> <span class="st">&quot;external pressure&quot;</span> OUTCAR

<span class="cm"># 查看磁矩</span>
<span class="fn2">grep</span> <span class="st">&quot;magnetization&quot;</span> OUTCAR -A <span class="nu">20</span>

<span class="cm"># 查看 POTCAR 元素</span>
<span class="fn2">grep</span> TITEL POTCAR

<span class="cm"># 查看 NELECT</span>
<span class="fn2">grep</span> NELECT OUTCAR</code></pre>`,1))])])}const ps=d(m,[["render",_]]);export{ps as default};
