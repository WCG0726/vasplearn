<template>
  <div class="sec active">
    <div class="bread"><router-link to="/">首页</router-link>/<span>工具与资源</span></div>
    
    <h2>辅助工具</h2>
    <p>VASP 计算需要配合多种工具进行结构可视化、数据处理和后分析。</p>

    <div class="pg">
      <router-link to="/tools/calculator" class="pc" style="--ca:var(--cyan)">
        <div class="pc-i">🔧</div>
        <div class="pc-t">参数计算器</div>
        <div class="pc-d">ENCUT、K 点、形成能等计算工具</div>
      </router-link>
      <div class="pc" style="--ca:var(--blue)" @click="openLink('https://www.vasp.at/wiki/index.php/VESTA')">
        <div class="pc-i">🔬</div>
        <div class="pc-t">VESTA</div>
        <div class="pc-d">晶体结构可视化</div>
      </div>
      <div class="pc" style="--ca:var(--green)" @click="openLink('https://vaspkit.com')">
        <div class="pc-i">🛠️</div>
        <div class="pc-t">VASPKIT</div>
        <div class="pc-d">后处理工具包</div>
      </div>
      <div class="pc" style="--ca:var(--purple)" @click="openLink('https://pymatgen.org')">
        <div class="pc-i">🐍</div>
        <div class="pc-t">pymatgen</div>
        <div class="pc-d">Python 材料分析库</div>
      </div>
      <div class="pc" style="--ca:var(--orange)" @click="openLink('https://phonopy.github.io/phonopy')">
        <div class="pc-i">🔊</div>
        <div class="pc-t">phonopy</div>
        <div class="pc-d">声子计算工具</div>
      </div>
    </div>

    <h2>VESTA 使用入门</h2>
    <p>VESTA 是最常用的晶体结构可视化软件，支持多种格式。</p>

    <h3>1. 基本操作</h3>
    <table class="tb">
      <thead><tr><th>操作</th><th>方法</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>打开文件</td><td>File → Open → 选择 POSCAR</td><td>支持 VASP、CIF、XSF 等格式</td></tr>
        <tr><td>旋转结构</td><td>鼠标左键拖动</td><td>多角度查看</td></tr>
        <tr><td>缩放</td><td>鼠标滚轮</td><td>放大/缩小</td></tr>
        <tr><td>平移</td><td>鼠标右键拖动</td><td>移动视角</td></tr>
        <tr><td>测量距离</td><td>Utilities → Distance</td><td>点击两个原子</td></tr>
        <tr><td>测量角度</td><td>Utilities → Angle</td><td>点击三个原子</td></tr>
        <tr><td>截图</td><td>File → Export Raster Image</td><td>导出 PNG/JPG</td></tr>
      </tbody>
    </table>

    <h3>2. 显示设置</h3>
    <div class="cb">
      <div class="ch"><span class="la">VESTA</span><span class="fn">常用设置路径</span></div>
      <pre><code><span class="cm"># 修改原子大小和颜色</span>
Objects → Atoms → Properties

<span class="cm"># 显示晶胞边界</span>
Objects → Unit cell → Boundary

<span class="cm"># 显示键</span>
Objects → Bonds → Search bonds

<span class="cm"># 显示坐标轴</span>
Objects → Axes

<span class="cm"># 修改背景颜色</span>
View → Background color</code></pre>
    </div>

    <h3>3. 常用技巧</h3>
    <ul>
      <li><strong>显示超胞：</strong>Edit → Edit Data → Structure → Transform → 扩展晶胞</li>
      <li><strong>切表面：</strong>Utilities → Boundary → 设置截断平面</li>
      <li><strong>导出高分辨率图：</strong>File → Export → 设置 DPI ≥ 300</li>
      <li><strong>比较结构：</strong>File → Open → 选择多个文件同时显示</li>
    </ul>

    <h2>VASPKIT 使用指南</h2>
    <p>VASPKIT 是 VASP 后处理的瑞士军刀，提供 200+ 功能。</p>

    <h3>1. 安装与配置</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 下载安装</span>
<span class="fn2">git</span> clone https://github.com/vaspkit/VASPKIT.git
<span class="fn2">cd</span> VASPKIT
<span class="fn2">./setup.sh</span>

<span class="cm"># 配置环境变量（添加到 ~/.bashrc）</span>
<span class="fn2">export</span> PATH=$PATH:~/VASPKIT/bin

<span class="cm"># 验证安装</span>
<span class="fn2">vaspkit</span> -v</code></pre>
    </div>

    <h3>2. 常用功能速查</h3>
    <table class="tb">
      <thead><tr><th>功能</th><th>菜单路径</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>生成 K 路径</td><td>2 → 2 → 1</td><td>Line-mode KPOINTS</td></tr>
        <tr><td>处理 DOS</td><td>3 → 1 → 1</td><td>提取 DOS 数据</td></tr>
        <tr><td>处理能带</td><td>3 → 2 → 1</td><td>提取能带数据</td></tr>
        <tr><td>电荷密度</td><td>5 → 1</td><td>处理 CHGCAR</td></tr>
        <tr><td>结构转换</td><td>7 → 1</td><td>POSCAR ↔ CIF</td></tr>
        <tr><td>生成 POTCAR</td><td>1 → 1</td><td>自动拼接赝势</td></tr>
      </tbody>
    </table>

    <h3>3. 生成 K 点路径</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><span class="fn">vaspkit 生成能带 K 路径</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 运行 vaspkit</span>
<span class="fn2">vaspkit</span>

<span class="cm"># 选择菜单</span>
<span class="cm"># 2 → Material Science Utilities</span>
<span class="cm"># 2 → K-Path Generator</span>
<span class="cm"># 1 → Generate K-Path for Band Structure</span>

<span class="cm"># 自动识别高对称点并生成 KPOINTS</span></code></pre>
    </div>

    <h3>4. 处理 DOS 数据</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 提取总 DOS</span>
<span class="fn2">vaspkit</span> -task 311

<span class="cm"># 提取分波 DOS (PDOS)</span>
<span class="fn2">vaspkit</span> -task 312

<span class="cm"># 生成 DOS 数据文件（TOTEL_DOS.dat, PDOS_*.dat）</span>

<span class="cm"># 使用 origin 或 gnuplot 绘图</span></code></pre>
    </div>

    <h2>pymatgen Python 示例</h2>
    <p>pymatgen 是最强大的 Python 材料分析库，支持 VASP 输入输出处理。</p>

    <h3>1. 安装</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 安装 pymatgen</span>
<span class="fn2">pip</span> install pymatgen

<span class="cm"># 安装 VASP 接口依赖</span>
<span class="fn2">pip</span> install pymatgen-analysis-diffusion</code></pre>
    </div>

    <h3>2. 读取和处理结构</h3>
    <div class="cb">
      <div class="ch"><span class="la">python</span><span class="fn">read_structure.py</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">from</span> pymatgen.core <span class="kw">import</span> Structure
<span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Poscar

<span class="cm"># 读取 POSCAR</span>
structure = Structure.<span class="fn2">from_file</span>(<span class="st">"POSCAR"</span>)

<span class="cm"># 基本信息</span>
<span class="fn2">print</span>(f<span class="st">"化学式: {structure.formula}"</span>)
<span class="fn2">print</span>(f<span class="st">"原子数: {len(structure)}"</span>)
<span class="fn2">print</span>(f<span class="st">"晶格参数: {structure.lattice.abc}"</span>)
<span class="fn2">print</span>(f<span class="st">"体积: {structure.volume:.2f} Å³"</span>)

<span class="cm"># 获取原子距离</span>
distances = structure.<span class="fn2">distance_matrix</span>
<span class="fn2">print</span>(f<span class="st">"最小原子距离: {distances[distances > 0].min():.2f} Å"</span>)

<span class="cm"># 创建超胞</span>
supercell = structure * [<span class="nu">2</span>, <span class="nu">2</span>, <span class="nu">2</span>]
supercell.<span class="fn2">to</span>(filename=<span class="st">"POSCAR_supercell"</span>)</code></pre>
    </div>

    <h3>3. 处理 VASP 输出</h3>
    <div class="cb">
      <div class="ch"><span class="la">python</span><span class="fn">read_vasp_output.py</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Vasprun, Outcar

<span class="cm"># 读取 vasprun.xml（包含所有计算信息）</span>
vr = Vasprun(<span class="st">"vasprun.xml"</span>)

<span class="cm"># 获取最终能量</span>
<span class="fn2">print</span>(f<span class="st">"最终能量: {vr.final_energy:.6f} eV"</span>)
<span class="fn2">print</span>(f<span class="st">"每原子能量: {vr.final_energy / len(vr.final_structure):.6f} eV/atom"</span>)

<span class="cm"># 获取收敛结构</span>
final_structure = vr.final_structure
<span class="fn2">print</span>(f<span class="st">"最终晶格: {final_structure.lattice.abc}"</span>)

<span class="cm"># 检查是否收敛</span>
<span class="fn2">print</span>(f<span class="st">"电子步收敛: {vr.converged_electronic}"</span>)
<span class="fn2">print</span>(f<span class="st">"离子步收敛: {vr.converged_ionic}"</span>)

<span class="cm"># 读取 OUTCAR</span>
outcar = Outcar(<span class="st">"OUTCAR"</span>)

<span class="cm"># 获取最终力</span>
<span class="fn2">print</span>(f<span class="st">"最大力: {max(abs(f) <span class="kw">for</span> f <span class="kw">in</span> outcar.final_structure.forces):.6f} eV/Å"</span>)

<span class="cm"># 获取应力</span>
<span class="fn2">print</span>(f<span class="st">"应力张量: {outcar.stress}"</span>)

<span class="cm"># 获取费米能级</span>
<span class="fn2">print</span>(f<span class="st">"费米能级: {outcar.efermi:.4f} eV"</span>)</code></pre>
    </div>

    <h3>4. 处理 DOS 数据</h3>
    <div class="cb">
      <div class="ch"><span class="la">python</span><span class="fn">dos_analysis.py</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Vasprun
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 DOS 数据</span>
vr = Vasprun(<span class="st">"vasprun.xml"</span>, parse_dos=<span class="kw">True</span>)
dos = vr.complete_dos

<span class="cm"># 获取能隙</span>
bandgap = dos.get_band_gap()
<span class="fn2">print</span>(f<span class="st">"带隙: {bandgap['energy']:.3f} eV ({bandgap['transition']})"</span>)

<span class="cm"># 绘制总 DOS</span>
fig, ax = plt.subplots(figsize=(<span class="nu">8</span>, <span class="nu">6</span>))

<span class="cm"># 总 DOS</span>
energies = dos.energies - dos.efermi
densities = dos.densities
ax.plot(energies, densities, <span class="st">'b-'</span>, label=<span class="st">'Total DOS'</span>)

<span class="cm"># 分波 DOS</span>
<span class="kw">for</span> el, pdos <span class="kw">in</span> dos.get_element_dos().items():
    ax.plot(energies, pdos.densities, label=f<span class="st">'{el}'</span>)

ax.set_xlabel(<span class="st">'Energy - E<sub>F</sub> (eV)'</span>)
ax.set_ylabel(<span class="st">'DOS (states/eV)'</span>)
ax.legend()
ax.axvline(x=<span class="nu">0</span>, color=<span class="st">'k'</span>, linestyle=<span class="st">'--'</span>)
ax.set_xlim(-<span class="nu">5</span>, <span class="nu">5</span>)
plt.savefig(<span class="st">'dos_plot.png'</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>
    </div>

    <h3>5. 处理能带数据</h3>
    <div class="cb">
      <div class="ch"><span class="la">python</span><span class="fn">band_analysis.py</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> BSVasprun
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取能带计算结果</span>
vr = BSVasprun(<span class="st">"vasprun.xml"</span>)
bs = vr.get_band_structure(line_mode=<span class="kw">True</span>)

<span class="cm"># 基本信息</span>
<span class="fn2">print</span>(f<span class="st">"带隙: {bs.get_band_gap()['energy']:.3f} eV"</span>)
<span class="fn2">print</span>(f<span class="st">"价带顶: {bs.get_vbm()['energy']:.3f} eV"</span>)
<span class="fn2">print</span>(f<span class="st">"导带底: {bs.get_cbm()['energy']:.3f} eV"</span>)

<span class="cm"># 绘制能带图</span>
fig, ax = plt.subplots(figsize=(<span class="nu">8</span>, <span class="nu">6</span>))

<span class="cm"># 获取高对称点</span>
labels = [label <span class="kw">for</span> label <span class="kw">in</span> bs.branches[<span class="nu">0</span>][<span class="st">'name'</span>].split(<span class="st">'-'</span>)]

<span class="cm"># 绘制能带</span>
<span class="kw">for</span> band <span class="kw">in</span> bs.bands:
    ax.plot(band - bs.efermi, <span class="st">'b-'</span>, linewidth=<span class="nu">0.5</span>)

ax.axhline(y=<span class="nu">0</span>, color=<span class="st">'r'</span>, linestyle=<span class="st">'--'</span>, label=<span class="st">'E<sub>F</sub>'</span>)
ax.set_xlabel(<span class="st">'K-path'</span>)
ax.set_ylabel(<span class="st">'Energy - E<sub>F</sub> (eV)'</span>)
ax.set_ylim(-<span class="nu">5</span>, <span class="nu">5</span>)
ax.legend()
plt.savefig(<span class="st">'band_structure.png'</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>
    </div>

    <h2>phonopy 声子计算</h2>
    <p>phonopy 是计算声子谱的标准工具。</p>

    <h3>1. 安装</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 安装 phonopy</span>
<span class="fn2">pip</span> install phonopy

<span class="cm"># 验证安装</span>
<span class="fn2">phonopy</span> --version</code></pre>
    </div>

    <h3>2. 基本工作流</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><span class="fn">phonopy_workflow.sh</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">#!/bin/bash</span>

<span class="cm"># 步骤 1：从优化结构生成超胞</span>
<span class="fn2">cp</span> CONTCAR POSCAR-orig
<span class="fn2">phonopy</span> --vasp -d --dim=<span class="st">"3 3 3"</span>

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
<span class="fn2">phonopy</span> --dim=<span class="st">"3 3 3"</span> -c POSCAR-orig band.conf

<span class="cm"># 步骤 5：绘图</span>
<span class="fn2">phonopy-bandplot</span></code></pre>
    </div>

    <h3>3. band.conf 配置文件</h3>
    <div class="cb">
      <div class="ch"><span class="la">band.conf</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 声子谱计算配置</span>
ATOM_NAME = Si
DIM = 3 3 3

<span class="cm"># 高对称路径（立方晶系）</span>
BAND = 0.0 0.0 0.5  0.0 0.5 0.5  0.5 0.5 0.5  0.0 0.0 0.0
BAND_LABELS = X  W  L  Γ
BAND_POINTS = 51</code></pre>
    </div>

    <h2>常用后处理脚本</h2>

    <h3>1. 能量提取脚本</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><span class="fn">get_energy.sh</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># 批量提取多个目录的能量</span>

<span class="fn2">echo</span> <span class="st">"目录               能量(eV)        每原子(eV/atom)"</span>
<span class="fn2">echo</span> <span class="st">"------------------------------------------------"</span>

<span class="kw">for</span> dir <span class="kw">in</span> */; <span class="kw">do</span>
    <span class="kw">if</span> [ -f <span class="st">"$dir/OUTCAR"</span> ]; <span class="kw">then</span>
        e=$(<span class="fn2">grep</span> <span class="st">"free  energy"</span> $dir/OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">'{print $5}'</span>)
        natoms=$(<span class="fn2">grep</span> <span class="st">"NIONS"</span> $dir/OUTCAR | <span class="fn2">head</span> -1 | <span class="fn2">awk</span> <span class="st">'{print $NF}'</span>)
        per_atom=$(<span class="fn2">echo</span> <span class="st">"$e / $natoms"</span> | <span class="fn2">bc</span> -l)
        <span class="fn2">printf</span> <span class="st">"%-20s %12.6f %15.6f\n"</span> <span class="st">"$dir"</span> <span class="st">"$e"</span> <span class="st">"$per_atom"</span>
    <span class="kw">fi</span>
<span class="kw">done</span></code></pre>
    </div>

    <h3>2. DOS 绘图脚本</h3>
    <div class="cb">
      <div class="ch"><span class="la">python</span><span class="fn">plot_dos.py</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 DOSCAR</span>
<span class="kw">def</span> <span class="fn2">read_doscar</span>(filename=<span class="st">'DOSCAR'</span>):
    <span class="kw">with</span> <span class="fn2">open</span>(filename, <span class="st">'r'</span>) <span class="kw">as</span> f:
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
ax.plot(energy, dos, <span class="st">'b-'</span>, linewidth=<span class="nu">1.5</span>)
ax.fill_between(energy, dos, alpha=<span class="nu">0.3</span>)
ax.axvline(x=<span class="nu">0</span>, color=<span class="st">'r'</span>, linestyle=<span class="st">'--'</span>, label=<span class="st">'Fermi level'</span>)
ax.set_xlabel(<span class="st">'Energy - E<sub>F</sub> (eV)'</span>)
ax.set_ylabel(<span class="st">'DOS (states/eV)'</span>)
ax.set_xlim(-<span class="nu">5</span>, <span class="nu">5</span>)
ax.legend()
plt.savefig(<span class="st">'dos.png'</span>, dpi=<span class="nu">150</span>, bbox_inches=<span class="st">'tight'</span>)
plt.show()</code></pre>
    </div>

    <h3>3. 能带图绘制脚本</h3>
    <div class="cb">
      <div class="ch"><span class="la">python</span><span class="fn">plot_band.py</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 EIGENVAL</span>
<span class="kw">def</span> <span class="fn2">read_eigenval</span>(filename=<span class="st">'EIGENVAL'</span>):
    <span class="kw">with</span> <span class="fn2">open</span>(filename, <span class="st">'r'</span>) <span class="kw">as</span> f:
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
<span class="kw">with</span> <span class="fn2">open</span>(<span class="st">'OUTCAR'</span>, <span class="st">'r'</span>) <span class="kw">as</span> f:
    <span class="kw">for</span> line <span class="kw">in</span> f:
        <span class="kw">if</span> <span class="st">'E-fermi'</span> <span class="kw">in</span> line:
            efermi = <span class="fn2">float</span>(line.split()[<span class="nu">2</span>])
            <span class="kw">break</span>

fig, ax = plt.subplots(figsize=(<span class="nu">8</span>, <span class="nu">6</span>))
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn2">range</span>(nbands):
    ax.plot(kdist, eigenvals[:, i] - efermi, <span class="st">'b-'</span>, linewidth=<span class="nu">0.8</span>)

ax.axhline(y=<span class="nu">0</span>, color=<span class="st">'r'</span>, linestyle=<span class="st">'--'</span>, label=<span class="st">'Fermi level'</span>)
ax.set_xlabel(<span class="st">'K-path'</span>)
ax.set_ylabel(<span class="st">'Energy - E<sub>F</sub> (eV)'</span>)
ax.set_ylim(-<span class="nu">5</span>, <span class="nu">5</span>)
ax.legend()
plt.savefig(<span class="st">'band_structure.png'</span>, dpi=<span class="nu">150</span>, bbox_inches=<span class="st">'tight'</span>)
plt.show()</code></pre>
    </div>

    <h2>批量计算脚本模板</h2>

    <h3>1. 批量结构优化</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><span class="fn">batch_optimize.sh</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># 批量提交多个结构优化任务</span>

<span class="cm"># 任务列表</span>
structures=(<span class="st">"Si"</span> <span class="st">"Ge"</span> <span class="st">"GaAs"</span>)

<span class="kw">for</span> struct <span class="kw">in</span> ${structures[@]}; <span class="kw">do</span>
    <span class="fn2">mkdir</span> -p $struct
    <span class="fn2">cp</span> INCAR_opt KPOINTS POTCAR_${struct} $struct/POTCAR
    <span class="fn2">cp</span> POSCAR_${struct} $struct/POSCAR
    
    <span class="fn2">cd</span> $struct
    <span class="fn2">echo</span> <span class="st">"Submitting $struct ..."</span>
    <span class="fn2">sbatch</span> vasp_job.sh  <span class="cm"># 或 mpirun -np 16 vasp_std</span>
    <span class="fn2">cd</span> ..
<span class="kw">done</span>

<span class="fn2">echo</span> <span class="st">"All jobs submitted!"</span></code></pre>
    </div>

    <h3>2. ENCUT 收敛测试</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><span class="fn">encut_test.sh</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># ENCUT 收敛性测试</span>

<span class="kw">for</span> encut <span class="kw">in</span> <span class="nu">200 250 300 350 400 450 500</span>; <span class="kw">do</span>
    <span class="fn2">mkdir</span> ENCUT_${encut}
    <span class="fn2">cp</span> POSCAR KPOINTS POTCAR ENCUT_${encut}/
    
    <span class="cm"># 生成 INCAR</span>
    <span class="fn2">cat</span> > ENCUT_${encut}/INCAR << EOF
SYSTEM = ENCUT test
ENCUT = ${encut}
PREC = Accurate
EDIFF = 1E-6
IBRION = -1
NSW = 0
ISMEAR = 0
SIGMA = 0.05
EOF
    
    <span class="fn2">cd</span> ENCUT_${encut}
    <span class="fn2">mpirun</span> -np <span class="nu">4</span> vasp_std
    <span class="fn2">cd</span> ..
<span class="kw">done</span>

<span class="cm"># 提取结果</span>
<span class="fn2">echo</span> <span class="st">"ENCUT    Energy(eV)"</span>
<span class="kw">for</span> encut <span class="kw">in</span> <span class="nu">200 250 300 350 400 450 500</span>; <span class="kw">do</span>
    e=$(<span class="fn2">grep</span> <span class="st">"free  energy"</span> ENCUT_${encut}/OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">'{print $5}'</span>)
    <span class="fn2">echo</span> <span class="st">"${encut}      ${e}"</span>
<span class="kw">done</span></code></pre>
    </div>

    <h2>常用命令速查</h2>
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

<span class="cm"># 查看磁矩</span>
<span class="fn2">grep</span> <span class="st">"magnetization"</span> OUTCAR -A <span class="nu">20</span>

<span class="cm"># 查看 POTCAR 元素</span>
<span class="fn2">grep</span> TITEL POTCAR

<span class="cm"># 查看 NELECT</span>
<span class="fn2">grep</span> NELECT OUTCAR</code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToolsView',
  methods: {
    openLink(url) {
      window.open(url, '_blank')
    },
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
