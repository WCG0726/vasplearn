<template>
  <div class="sec active">
    <div class="bread"><router-link to="/">首页</router-link>/<span>实战指南</span></div>

    <h2>VASP 实战计算指南</h2>
    <p>从零开始，手把手教你完成常见的 VASP 计算任务。每个案例包含完整的输入文件和详细解释。</p>

    <div class="prac-nav">
      <button
        v-for="t in tutorials"
        :key="t.id"
        :class="['cat-btn', { active: activeTutorial === t.id }]"
        @click="activeTutorial = t.id"
      >{{ t.icon }} {{ t.title }}</button>
    </div>

    <!-- 案例 1: Si 体相优化 -->
    <div v-if="activeTutorial === 'si-bulk'" class="prac-section">
      <h3>案例 1：硅（Si）体相结构优化</h3>
      <p>这是 VASP 入门的第一个计算任务——优化硅的晶格常数。</p>

      <h4>1.1 准备 POSCAR</h4>
      <p>硅是金刚石结构，每个晶胞有 8 个原子。从 Materials Project 获取初始结构。</p>
      <div class="cb">
        <div class="ch"><span class="la">POSCAR</span><span class="fn">Si 金刚石结构</span><button class="cpb" @click="copy">复制</button></div>
        <pre><code><span class="cm">Si8</span>
<span class="nu">1.0</span>
<span class="nu">  5.430000   0.000000   0.000000</span>
<span class="nu">  0.000000   5.430000   0.000000</span>
<span class="nu">  0.000000   0.000000   5.430000</span>
<span class="vr">Si</span>
<span class="nu">8</span>
<span class="vr">Direct</span>
<span class="nu">  0.000000   0.000000   0.000000</span>
<span class="nu">  0.250000   0.250000   0.250000</span>
<span class="nu">  0.500000   0.500000   0.000000</span>
<span class="nu">  0.500000   0.000000   0.500000</span>
<span class="nu">  0.000000   0.500000   0.500000</span>
<span class="nu">  0.750000   0.750000   0.250000</span>
<span class="nu">  0.750000   0.250000   0.750000</span>
<span class="nu">  0.250000   0.750000   0.750000</span></code></pre>
      </div>
      <div class="ib tip"><strong>说明：</strong>Direct 表示使用分数坐标（相对于晶格矢量），Cartesian 表示使用直角坐标（单位 Å）。</div>

      <h4>1.2 准备 KPOINTS</h4>
      <p>Si 是半导体，使用 Gamma-centered 网格。</p>
      <div class="cb">
        <div class="ch"><span class="la">KPOINTS</span><span class="fn">8×8×8 Gamma 网格</span><button class="cpb" @click="copy">复制</button></div>
        <pre><code><span class="cm">K-points</span>
<span class="nu">0</span>
<span class="vr">Gamma</span>
<span class="nu">8 8 8</span>
<span class="nu">0 0 0</span></code></pre>
      </div>

      <h4>1.3 准备 INCAR</h4>
      <div class="cb">
        <div class="ch"><span class="la">INCAR</span><span class="fn">结构优化</span><button class="cpb" @click="copy">复制</button></div>
        <pre><code><span class="cm"># 基本参数</span>
<span class="kw">SYSTEM</span>   = <span class="st">Si bulk optimization</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>

<span class="cm"># 离子步参数</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">100</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.01</span>

<span class="cm"># 展宽参数（半导体用 Gaussian）</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 输出控制</span>
<span class="kw">LWAVE</span>    = <span class="kw">.FALSE.</span>
<span class="kw">LCHARG</span>   = <span class="kw">.FALSE.</span></code></pre>
      </div>

      <h4>1.4 提交计算</h4>
      <div class="cb">
        <div class="ch"><span class="la">bash</span><span class="fn">提交脚本</span><button class="cpb" @click="copy">复制</button></div>
        <pre><code><span class="cm">#!/bin/bash</span>
<span class="cm">#PBS -l nodes=1:ppn=8</span>
<span class="cm">#PBS -l walltime=02:00:00</span>
<span class="cm">#PBS -N Si_opt</span>

<span class="kw">cd</span> $PBS_O_WORKDIR
<span class="fn2">mpirun</span> -np 8 vasp_std</code></pre>
      </div>

      <h4>1.5 检查结果</h4>
      <div class="cb">
        <div class="ch"><span class="la">bash</span><span class="fn">检查收敛</span><button class="cpb" @click="copy">复制</button></div>
        <pre><code><span class="cm"># 检查是否收敛</span>
<span class="fn2">grep</span> <span class="st">"reached required accuracy"</span> OSZICAR

<span class="cm"># 查看优化后的晶格常数</span>
<span class="fn2">tail</span> -20 CONTCAR

<span class="cm"># 提取能量</span>
<span class="fn2">grep</span> <span class="st">"free  energy TOTEN"</span> OSZICAR | <span class="fn2">tail</span> -1

<span class="cm"># 检查虚频（确保是稳定结构）</span>
<span class="cm"># 需要先复制 CONTCAR → POSCAR，然后设置 IBRION=-1 NSW=0 做频率计算</span></code></pre>
      </div>

      <h4>1.6 常见问题</h4>
      <table class="tb">
        <thead><tr><th>问题</th><th>原因</th><th>解决方案</th></tr></thead>
        <tbody>
          <tr><td>优化步数太多</td><td>初始结构偏离平衡态太远</td><td>先用更准确的初始结构</td></tr>
          <tr><td>能量震荡</td><td>ISMEAR 设置不当</td><td>半导体用 ISMEAR=0</td></tr>
          <tr><td>晶格常数偏差大</td><td>ENCUT 太小</td><td>增大 ENCUT 或做收敛测试</td></tr>
        </tbody>
      </table>
    </div>

    <!-- 案例 2: 能带和 DOS -->
    <div v-if="activeTutorial === 'band-dos'" class="prac-section">
      <h3>案例 2：硅的能带结构和态密度</h3>
      <p>在结构优化完成后，计算电子能带结构和态密度（DOS）。</p>

      <h4>2.1 准备静态计算</h4>
      <p>首先需要做一个静态自洽计算，生成正确的电荷密度。</p>
      <div class="cb">
        <div class="ch"><span class="la">INCAR</span><span class="fn">静态自洽计算</span><button class="cpb" @click="copy">复制</button></div>
        <pre><code><span class="cm"># 静态自洽计算</span>
<span class="kw">SYSTEM</span>   = <span class="st">Si static</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-8</span>

<span class="cm"># 静态计算（IBRION=-1, NSW=0）</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>

<span class="cm"># 展宽参数</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 输出电荷密度和波函数</span>
<span class="kw">LCHARG</span>   = <span class="kw">.TRUE.</span>
<span class="kw">LWAVE</span>    = <span class="kw">.TRUE.</span>

<span class="cm"># 态密度投影</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span></code></pre>
      </div>

      <h4>2.2 能带结构计算</h4>
      <p>使用非自洽计算（nscf）沿着高对称 k 点路径计算能带。</p>
      <div class="cb">
        <div class="ch"><span class="la">INCAR</span><span class="fn">能带结构</span><button class="cpb" @click="copy">复制</button></div>
        <pre><code><span class="cm"># 能带结构计算（非自洽）</span>
<span class="kw">SYSTEM</span>   = <span class="st">Si band structure</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-8</span>

<span class="cm"># 非自洽计算</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 从 CHGCAR 读取电荷密度</span>
<span class="kw">ICHARG</span>   = <span class="nu">11</span>

<span class="cm"># 不更新电荷密度</span>
<span class="kw">NELM</span>     = <span class="nu">1</span></code></pre>
      </div>

      <div class="cb">
        <div class="ch"><span class="la">KPOINTS</span><span class="fn">高对称点路径</span><button class="cpb" @click="copy">复制</button></div>
        <pre><code><span class="cm">Si band structure</span>
<span class="nu">40</span>
<span class="vr">Line</span>
<span class="nu">5</span>
<span class="vr">Gamma</span>   <span class="nu">0.000000   0.000000   0.000000</span>   <span class="cm">Γ</span>
<span class="vr">X</span>       <span class="nu">0.500000   0.000000   0.500000</span>   <span class="cm">X</span>
<span class="vr">U|K</span>     <span class="nu">0.625000   0.250000   0.625000</span>   <span class="cm">K</span>
<span class="vr">Gamma</span>   <span class="nu">0.000000   0.000000   0.000000</span>   <span class="cm">Γ</span>
<span class="vr">L</span>       <span class="nu">0.500000   0.500000   0.500000</span>   <span class="cm">L</span></code></pre>
      </div>

      <h4>2.3 提取能带数据</h4>
      <div class="cb">
        <div class="ch"><span class="la">python</span><span class="fn">plot_band.py</span><button class="cpb" @click="copy">复制</button></div>
        <pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 EIGENVAL</span>
<span class="kw">with</span> <span class="fn2">open</span>(<span class="st">'EIGENVAL'</span>, <span class="st">'r'</span>) <span class="kw">as</span> f:
    lines = f.readlines()

<span class="cm"># 解析</span>
nion, nkpts, nbands = <span class="fn2">map</span>(<span class="fn2">int</span>, lines[<span class="nu">0</span>].split())
kpoints = []
eigenvalues = []

<span class="kw">for</span> i <span class="kw">in</span> <span class="fn2">range</span>(<span class="nu">5</span>, <span class="fn2">len</span>(lines), nbands + <span class="nu">2</span>):
    kpoints.append(<span class="fn2">map</span>(<span class="fn2">float</span>, lines[i].split()[:<span class="nu">3</span>]))
    <span class="kw">for</span> j <span class="kw">in</span> <span class="fn2">range</span>(<span class="nu">1</span>, nbands + <span class="nu">1</span>):
        eigenvalues.append(<span class="fn2">float</span>(lines[i + j].split()[<span class="nu">1</span>]))

<span class="cm"># 绘图</span>
fig, ax = plt.subplots(figsize=(<span class="nu">8</span>, <span class="nu">6</span>))
<span class="cm"># ... 绘制能带图</span>
ax.set_ylabel(<span class="st">'Energy (eV)'</span>)
ax.set_title(<span class="st">'Si Band Structure'</span>)
plt.savefig(<span class="st">'band_structure.png'</span>, dpi=<span class="nu">150</span>)</code></pre>
      </div>
    </div>

    <!-- 案例 3: 表面计算 -->
    <div v-if="activeTutorial === 'surface'" class="prac-section">
      <h3>案例 3：Pt(111) 表面吸附能计算</h3>
      <p>计算 CO 分子在 Pt(111) 表面的吸附能。</p>

      <h4>3.1 构建表面 slab 模型</h4>
      <div class="cb">
        <div class="ch"><span class="la">POSCAR</span><span class="fn">Pt(111) 4层 slab</span><button class="cpb" @click="copy">复制</button></div>
        <pre><code><span class="cm">Pt(111) slab</span>
<span class="nu">1.0</span>
<span class="nu">  2.772000   0.000000   0.000000</span>
<span class="nu"> -1.386000   2.400450   0.000000</span>
<span class="nu">  0.000000   0.000000  20.000000</span>
<span class="vr">Pt</span>
<span class="nu">16</span>
<span class="vr">Direct</span>
<span class="nu">  0.000000   0.000000   0.100000</span>
<span class="nu">  0.333333   0.333333   0.100000</span>
<span class="nu">  0.000000   0.500000   0.100000</span>
<span class="nu">  0.500000   0.000000   0.100000</span>
<span class="cm">  ... 4层 Pt 原子 ...</span>
<span class="cm">  底部两层固定，顶部两层弛豫</span></code></pre>
      </div>

      <div class="ib warn"><strong>关键设置：</strong>
        <ul>
          <li>真空层厚度至少 15 Å，避免周期性镜像相互作用</li>
          <li>底部 2-3 层原子固定（使用 SELECTIVE DYNAMICS）</li>
          <li>表面计算必须用 ISIF=2（只优化原子位置）</li>
        </ul>
      </div>

      <h4>3.2 表面吸附 INCAR</h4>
      <div class="cb">
        <div class="ch"><span class="la">INCAR</span><span class="fn">吸附计算</span><button class="cpb" @click="copy">复制</button></div>
        <pre><code><span class="cm"># CO 吸附在 Pt(111)</span>
<span class="kw">SYSTEM</span>   = <span class="st">CO on Pt(111)</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>

<span class="cm"># 优化原子位置</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">100</span>
<span class="kw">ISIF</span>     = <span class="nu">2</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.02</span>

<span class="cm"># 展宽（金属用 Methfessel-Paxton）</span>
<span class="kw">ISMEAR</span>   = <span class="nu">1</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.2</span></code></pre>
      </div>

      <h4>3.3 吸附能计算</h4>
      <div class="cb">
        <div class="ch"><span class="la">bash</span><span class="fn">吸附能公式</span><button class="cpb" @click="copy">复制</button></div>
        <pre><code><span class="cm"># 吸附能公式</span>
<span class="cm"># E_ads = E(CO+Pt) - E(Pt) - E(CO)</span>

<span class="cm"># 提取各能量</span>
E_total=$(<span class="fn2">grep</span> <span class="st">"free  energy TOTEN"</span> adsorption/OSZICAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">'{print $5}'</span>)
E_slab=$(<span class="fn2">grep</span> <span class="st">"free  energy TOTEN"</span> slab/OSZICAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">'{print $5}'</span>)
E_mol=$(<span class="fn2">grep</span> <span class="st">"free  energy TOTEN"</span> molecule/OSZICAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">'{print $5}'</span>)

<span class="cm"># 计算吸附能（eV）</span>
<span class="fn2">echo</span> <span class="st">"吸附能: $(echo "$E_total - $E_slab - $E_mol" | bc) eV"</span></code></pre>
      </div>
    </div>

    <!-- 案例 4: DOS 和能带 -->
    <div v-if="activeTutorial === 'dos'" class="prac-section">
      <h3>案例 4：态密度（DOS）计算详解</h3>
      <p>详细讲解如何计算和分析投影态密度（PDOS）。</p>

      <h4>4.1 非自洽 DOS 计算</h4>
      <div class="cb">
        <div class="ch"><span class="la">INCAR</span><span class="fn">DOS 计算</span><button class="cpb" @click="copy">复制</button></div>
        <pre><code><span class="cm"># DOS 计算</span>
<span class="kw">SYSTEM</span>   = <span class="st">DOS calculation</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-8</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>
<span class="kw">ISMEAR</span>   = <span class="nu">-5</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.01</span>

<span class="cm"># 从 CHGCAR 读取</span>
<span class="kw">ICHARG</span>   = <span class="nu">11</span>
<span class="kw">NELM</span>     = <span class="nu">1</span>

<span class="cm"># 投影态密度</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span>

<span class="cm"># 精细 DOS（更多能量点）</span>
<span class="kw">NEDOS</span>    = <span class="nu">3001</span></code></pre>
      </div>

      <h4>4.2 KPOINTS 网格</h4>
      <div class="cb">
        <div class="ch"><span class="la">KPOINTS</span><span class="fn">稠密网格</span><button class="cpb" @click="copy">复制</button></div>
        <pre><code><span class="cm">DOS k-mesh</span>
<span class="nu">0</span>
<span class="vr">Gamma</span>
<span class="nu">16 16 16</span>
<span class="nu">0 0 0</span></code></pre>
      </div>

      <h4>4.3 分析 DOS</h4>
      <div class="cb">
        <div class="ch"><span class="la">python</span><span class="fn">plot_dos.py</span><button class="cpb" @click="copy">复制</button></div>
        <pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 DOSCAR</span>
<span class="kw">with</span> <span class="fn2">open</span>(<span class="st">'DOSCAR'</span>, <span class="st">'r'</span>) <span class="kw">as</span> f:
    lines = f.readlines()

<span class="cm"># 解析头信息</span>
header = lines[<span class="nu">4</span>].split()
efermi = <span class="fn2">float</span>(header[<span class="nu">3</span>])  <span class="cm"># 费米能级</span>

<span class="cm"># 读取总 DOS</span>
data = []
<span class="kw">for</span> line <span class="kw">in</span> lines[<span class="nu">5</span>:]:
    parts = line.split()
    <span class="kw">if</span> <span class="fn2">len</span>(parts) >= <span class="nu">2</span>:
        data.append([<span class="fn2">float</span>(parts[<span class="nu">0</span>]), <span class="fn2">float</span>(parts[<span class="nu">1</span>])])

data = np.array(data)
energy = data[:, <span class="nu">0</span>] - efermi  <span class="cm"># 相对费米能级</span>
dos = data[:, <span class="nu">1</span>]

<span class="cm"># 绘图</span>
fig, ax = plt.subplots(figsize=(<span class="nu">8</span>, <span class="nu">6</span>))
ax.plot(energy, dos, <span class="st">'b-'</span>)
ax.axvline(x=<span class="nu">0</span>, color=<span class="st">'r'</span>, linestyle=<span class="st">'--'</span>, label=<span class="st">'Fermi level'</span>)
ax.set_xlabel(<span class="st">'Energy (eV)'</span>)
ax.set_ylabel(<span class="st">'DOS (states/eV)'</span>)
ax.legend()
plt.savefig(<span class="st">'dos.png'</span>, dpi=<span class="nu">150</span>)</code></pre>
      </div>
    </div>

    <!-- 案例 5: 缺陷计算 -->
    <div v-if="activeTutorial === 'defect'" class="prac-section">
      <h3>案例 5：Si 空位缺陷形成能</h3>
      <p>计算硅中单空位的缺陷形成能。</p>

      <h4>5.1 构建超胞</h4>
      <p>使用 3×3×3 超胞（216 个原子），在中心移除一个 Si 原子。</p>

      <h4>5.2 缺陷形成能公式</h4>
      <div class="ib tip"><strong>缺陷形成能：</strong>
        <p>E_f = E_defect - E_perfect + n × μ_Si + q × (E_F + E_VBM) + E_corr</p>
        <ul>
          <li>E_defect：含缺陷体系的总能量</li>
          <li>E_perfect：完美体系的总能量</li>
          <li>μ_Si：Si 的化学势（从体相计算）</li>
          <li>q：电荷态，E_F：费米能级</li>
          <li>E_corr：有限尺寸修正</li>
        </ul>
      </div>

      <h4>5.3 INCAR 设置</h4>
      <div class="cb">
        <div class="ch"><span class="la">INCAR</span><span class="fn">中性空位</span><button class="cpb" @click="copy">复制</button></div>
        <pre><code><span class="cm"># Si 空位（中性）</span>
<span class="kw">SYSTEM</span>   = <span class="st">Si vacancy q=0</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">2</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.01</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 布居分析</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span></code></pre>
      </div>

      <div class="ib warn"><strong>注意：</strong>
        <ul>
          <li>带电缺陷需要加修正项（Lany-Zunger 或 Freysoldt 修正）</li>
          <li>超胞要足够大，避免缺陷间相互作用</li>
          <li>需要检查虚频确保结构稳定</li>
        </ul>
      </div>
    </div>

    <!-- 案例 6: 声子 -->
    <div v-if="activeTutorial === 'phonon'" class="prac-section">
      <h3>案例 6：声子谱计算</h3>
      <p>使用有限位移法计算声子色散关系。</p>

      <h4>6.1 方法概述</h4>
      <table class="tb">
        <thead><tr><th>方法</th><th>工具</th><th>特点</th></tr></thead>
        <tbody>
          <tr><td>有限位移法</td><td>Phonopy + VASP</td><td>简单可靠，推荐入门</td></tr>
          <tr><td>DFPT</td><td>VASP（LEPSILON=.TRUE.）</td><td>更高效，但功能有限</td></tr>
        </tbody>
      </table>

      <h4>6.2 Phonopy 工作流</h4>
      <div class="cb">
        <div class="ch"><span class="la">bash</span><span class="fn">声子计算流程</span><button class="cpb" @click="copy">复制</button></div>
        <pre><code><span class="cm"># 1. 生成超胞和位移结构</span>
phonopy -d --dim=<span class="st">"2 2 2"</span> -c POSCAR

<span class="cm"># 2. 对每个位移结构做 VASP 计算</span>
<span class="kw">for</span> d <span class="kw">in</span> POSCAR-*; <span class="kw">do</span>
    <span class="kw">cd</span> $d
    vasp_std
    <span class="kw">cd</span> ..
<span class="kw">done</span>

<span class="cm"># 3. 收集力常数</span>
phonopy --fc

<span class="cm"># 4. 计算声子色散</span>
phonopy -t -p mesh.conf

<span class="cm"># 5. 生成力常数文件</span>
phonopy --fc CONTCAR</code></pre>
      </div>

      <h4>6.3 检查虚频</h4>
      <div class="cb">
        <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
        <pre><code><span class="cm"># 检查 Gamma 点声子</span>
phonopy --dim=<span class="st">"2 2 2"</span> -c POSCAR -p band.conf

<span class="cm"># 虚频（负频率）表示结构不稳定</span>
<span class="cm"># 如果有小的虚频（< 50 cm⁻¹），可能是数值噪音</span></code></pre>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PracticalGuideView',
  data() {
    return {
      activeTutorial: 'si-bulk',
      tutorials: [
        { id: 'si-bulk', icon: '💎', title: 'Si 体相优化' },
        { id: 'band-dos', icon: '📊', title: '能带与 DOS' },
        { id: 'surface', icon: '🧊', title: '表面吸附' },
        { id: 'dos', icon: '💡', title: '态密度详解' },
        { id: 'defect', icon: '🔴', title: '缺陷形成能' },
        { id: 'phonon', icon: '🔊', title: '声子谱' }
      ]
    }
  },
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

<style scoped>
.prac-nav {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.prac-section {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
