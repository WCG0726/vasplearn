<template>
  <div class="sec active">
    <div class="bread"><router-link to="/">首页</router-link>/<span>计算任务</span></div>
    
    <h2>计算任务总览</h2>
    <p>VASP 可以执行多种计算任务，每种任务有特定的参数设置和工作流程。</p>

    <h3>基础计算</h3>
    <div class="pg">
      <div class="pc" style="--ca:var(--blue)">
        <div class="pc-i">🔄</div>
        <div class="pc-t">结构优化</div>
        <div class="pc-d">弛豫原子位置和晶格参数</div>
      </div>
      <div class="pc" style="--ca:var(--green)">
        <div class="pc-i">📈</div>
        <div class="pc-t">态密度 DOS</div>
        <div class="pc-d">电子态在能量上的分布</div>
      </div>
      <div class="pc" style="--ca:var(--purple)">
        <div class="pc-i">📉</div>
        <div class="pc-t">能带结构</div>
        <div class="pc-d">沿高对称路径的能带色散</div>
      </div>
    </div>

    <h2>结构优化</h2>
    <p>结构优化是最基本的计算任务，目的是找到能量最低的原子构型。</p>

    <h3>1. 何时需要结构优化</h3>
    <ul>
      <li>从实验结构或文献结构开始计算</li>
      <li>构建了新的表面或缺陷结构</li>
      <li>需要计算准确的晶格参数</li>
      <li>后续计算（DOS、能带等）需要在优化结构上进行</li>
    </ul>

    <h3>2. 完整输入文件</h3>
    
    <h4>INCAR</h4>
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">体相结构优化</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si bulk relaxation</span>

<span class="cm"># 基本参数</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>              <span class="cm">; 截断能 (eV)</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>         <span class="cm">; 精度模式</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>             <span class="cm">; 电子步收敛标准</span>

<span class="cm"># 离子步参数</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>                <span class="cm">; CG 优化算法</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>              <span class="cm">; 最大离子步数</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>                <span class="cm">; 优化离子+晶格(体积+形状)</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.02</span>            <span class="cm">; 力收敛标准 (eV/Å)</span>

<span class="cm"># 展宽参数</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>                <span class="cm">; Gaussian 展宽（半导体）</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>             <span class="cm">; 展宽宽度 (eV)</span></code></pre>
    </div>

    <h4>POSCAR</h4>
    <div class="cb">
      <div class="ch"><span class="la">POSCAR</span><span class="fn">Si 金刚石</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="vr">Si diamond</span>                    <span class="cm">; 注释行</span>
<span class="nu">1.0</span>                           <span class="cm">; 缩放因子</span>
<span class="nu">5.43  0.00  0.00</span>             <span class="cm">; 晶格矢量 a</span>
<span class="nu">0.00  5.43  0.00</span>             <span class="cm">; 晶格矢量 b</span>
<span class="nu">0.00  0.00  5.43</span>             <span class="cm">; 晶格矢量 c</span>
<span class="vr">Si</span>                             <span class="cm">; 元素符号</span>
<span class="nu">2</span>                              <span class="cm">; 原子数</span>
<span class="kw">Direct</span>                         <span class="cm">; 分数坐标</span>
<span class="nu">0.00  0.00  0.00</span>             <span class="cm">; Si 原子 1</span>
<span class="nu">0.25  0.25  0.25</span>             <span class="cm">; Si 原子 2</span></code></pre>
    </div>

    <h4>KPOINTS</h4>
    <div class="cb">
      <div class="ch"><span class="la">KPOINTS</span><span class="fn">Gamma 中心</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="vr">Automatic mesh</span>
<span class="nu">0</span>
<span class="kw">Gamma</span>
<span class="nu">6  6  6</span>                <span class="cm">; K 点网格 (N_k × a ≈ 30)</span>
<span class="nu">0.0  0.0  0.0</span>         <span class="cm">; 偏移</span></code></pre>
    </div>

    <h3>3. ISIF 参数详解</h3>
    <table class="tb">
      <thead><tr><th>ISIF</th><th>离子位置</th><th>晶格体积</th><th>晶格形状</th><th>适用场景</th></tr></thead>
      <tbody>
        <tr><td><code>2</code></td><td>✓</td><td>✗</td><td>✗</td><td>表面、分子吸附、固定晶格</td></tr>
        <tr><td><code>3</code></td><td>✓</td><td>✓</td><td>✓</td><td>体相优化（最常用）</td></tr>
        <tr><td><code>4</code></td><td>✓</td><td>✗</td><td>✓</td><td>固定体积、优化形状</td></tr>
        <tr><td><code>5</code></td><td>✗</td><td>✓</td><td>✓</td><td>仅优化晶格、固定离子</td></tr>
      </tbody>
    </table>

    <h3>4. 结果验证</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><span class="fn">验证收敛</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 检查是否收敛</span>
<span class="fn2">grep</span> <span class="st">"reached required accuracy"</span> OUTCAR

<span class="cm"># 查看最终能量</span>
<span class="fn2">grep</span> <span class="st">"free  energy"</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 查看最大力</span>
<span class="fn2">grep</span> <span class="st">"TOTAL-FORCE"</span> OUTCAR -A <span class="nu">4</span>

<span class="cm"># 查看外部压力</span>
<span class="fn2">grep</span> <span class="st">"external pressure"</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 查看优化后的晶格常数</span>
<span class="fn2">head</span> -7 CONTCAR</code></pre>
    </div>

    <div class="ib tip"><strong>收敛标准：</strong>最大力 < 0.02 eV/Å，外部压力 < 1 kbar 表示优化收敛良好。</div>

    <h2>态密度 DOS 计算</h2>
    <p>DOS 计算需要两步：① 结构优化 ② 静态计算（密集 k 点）</p>

    <h3>1. 计算流程</h3>
    <div class="fc">
      <div class="fn2-node s">结构优化（获取 CONTCAR）</div><div class="fa"></div>
      <div class="fn2-node p">复制 CONTCAR → DOS 计算目录</div><div class="fa"></div>
      <div class="fn2-node p">设置密集 K 点（12×12×12）</div><div class="fa"></div>
      <div class="fn2-node p">运行静态计算</div><div class="fa"></div>
      <div class="fn2-node e">处理 DOSCAR 数据</div>
    </div>

    <h3>2. DOS 计算输入文件</h3>
    
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">DOS 静态计算</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si DOS calculation</span>

<span class="cm"># 基本参数</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>

<span class="cm"># 静态计算设置</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>               <span class="cm">; 不动离子</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>                <span class="cm">; 无离子步</span>

<span class="cm"># DOS 特殊设置</span>
<span class="kw">ISMEAR</span>   = <span class="nu">-5</span>               <span class="cm">; 四面体方法（最准确）</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span>               <span class="cm">; 输出分波 DOS</span>
<span class="kw">NEDOS</span>    = <span class="nu">2000</span>             <span class="cm">; DOS 能量点数</span>

<span class="cm"># 输出设置</span>
<span class="kw">LWAVE</span>    = <span class="nu">.TRUE.</span>            <span class="cm">; 保留波函数（用于能带）</span>
<span class="kw">LCHARG</span>   = <span class="nu">.TRUE.</span>            <span class="cm">; 保留电荷密度</span></code></pre>
    </div>

    <div class="cb">
      <div class="ch"><span class="la">KPOINTS</span><span class="fn">密集 K 点</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="vr">DOS k-points</span>
<span class="nu">0</span>
<span class="kw">Gamma</span>
<span class="nu">12  12  12</span>              <span class="cm">; DOS 需要更密集的 K 点</span>
<span class="nu">0.0  0.0  0.0</span></code></pre>
    </div>

    <div class="ib note"><strong>ISMEAR 选择：</strong>绝缘体/半导体用 -5（四面体），金属用 0（Gaussian）配合 SIGMA=0.05。</div>

    <h3>3. 处理 DOS 数据</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 使用 VASPKIT 提取 DOS</span>
<span class="fn2">vaspkit</span>
<span class="cm"># 3 → DOS Analysis</span>
<span class="cm"># 1 → Generate Total DOS</span>

<span class="cm"># 或使用 pymatgen</span>
<span class="fn2">python</span> -c "
<span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Vasprun
vr = Vasprun(<span class="st">'vasprun.xml'</span>, parse_dos=<span class="kw">True</span>)
dos = vr.complete_dos
<span class="fn2">print</span>(f<span class="st">'带隙: {dos.get_band_gap()[\"energy\"]:.3f} eV'</span>)
"</code></pre>
    </div>

    <h2>能带结构计算</h2>
    <p>能带计算需要：① 静态计算生成 WAVECAR ② 沿高对称路径非自洽计算</p>

    <h3>1. 计算流程</h3>
    <div class="fc">
      <div class="fn2-node s">结构优化（获取 CONTCAR）</div><div class="fa"></div>
      <div class="fn2-node p">静态计算（生成 WAVECAR）</div><div class="fa"></div>
      <div class="fn2-node p">生成 K 点路径</div><div class="fa"></div>
      <div class="fn2-node p">非自洽计算（ICHARG=11）</div><div class="fa"></div>
      <div class="fn2-node e">处理 EIGENVAL 数据</div>
    </div>

    <h3>2. 第一步：静态计算</h3>
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">能带前的静态计算</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si static for band</span>

<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>

<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>

<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 必须输出 WAVECAR</span>
<span class="kw">LWAVE</span>    = <span class="nu">.TRUE.</span></code></pre>
    </div>

    <h3>3. 第二步：能带计算</h3>
    
    <h4>生成 K 点路径</h4>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><span class="fn">使用 vaspkit 生成</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 方法 1：使用 vaspkit 自动生成</span>
<span class="fn2">vaspkit</span>
<span class="cm"># 2 → Material Science Utilities</span>
<span class="cm"># 2 → K-Path Generator</span>
<span class="cm"># 1 → Generate K-Path for Band Structure</span>

<span class="cm"># 自动生成带标签的 KPOINTS</span></code></pre>
    </div>

    <h4>手动编写 KPOINTS（以 Si 为例）</h4>
    <div class="cb">
      <div class="ch"><span class="la">KPOINTS</span><span class="fn">Line-mode</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="vr">k-points along high symmetry lines</span>
<span class="nu">20</span>                          <span class="cm">; 每条线段的点数</span>
<span class="kw">Line-mode</span>                   <span class="cm">; 线模式</span>
<span class="kw">Reciprocal</span>                  <span class="cm">; 倒空间坐标</span>

<span class="cm">; Γ → X</span>
<span class="nu">0.000  0.000  0.000</span>        <span class="cm">; 起点</span>
<span class="nu">0.500  0.000  0.000</span>        <span class="cm">; 终点</span>

<span class="cm">; X → W</span>
<span class="nu">0.500  0.000  0.000</span>
<span class="nu">0.500  0.250  0.000</span>

<span class="cm">; W → L</span>
<span class="nu">0.500  0.250  0.000</span>
<span class="nu">0.500  0.500  0.500</span>

<span class="cm">; L → Γ</span>
<span class="nu">0.500  0.500  0.500</span>
<span class="nu">0.000  0.000  0.000</span></code></pre>
    </div>

    <div class="ib warn"><strong>注意：</strong>Line-mode KPOINTS 需要空行分隔每条线段！</div>

    <h4>能带计算 INCAR</h4>
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">能带非自洽计算</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si band structure</span>

<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>

<span class="cm"># 关键：非自洽计算</span>
<span class="kw">ICHARG</span>   = <span class="nu">11</span>               <span class="cm">; 从 WAVECAR 读取电荷密度</span>

<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>

<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 输出投影能带</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span></code></pre>
    </div>

    <h3>4. 高对称点参考</h3>
    <table class="tb">
      <thead><tr><th>晶系</th><th>常用路径</th></tr></thead>
      <tbody>
        <tr><td>立方 (cubic)</td><td>Γ → X → M → Γ → R → X</td></tr>
        <tr><td>四方 (tetragonal)</td><td>Γ → X → M → Γ → Z → R → A</td></tr>
        <tr><td>六方 (hexagonal)</td><td>Γ → M → K → Γ → A → L</td></tr>
        <tr><td>正交 (orthorhombic)</td><td>Γ → X → S → Y → Γ → Z → U</td></tr>
      </tbody>
    </table>

    <h3>5. 处理能带数据</h3>
    <div class="cb">
      <div class="ch"><span class="la">python</span><span class="fn">plot_band.py</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 EIGENVAL</span>
<span class="kw">def</span> <span class="fn2">read_eigenval</span>():
    <span class="kw">with</span> <span class="fn2">open</span>(<span class="st">'EIGENVAL'</span>) <span class="kw">as</span> f:
        lines = f.readlines()
    
    nk, nb = <span class="fn2">int</span>(lines[<span class="nu">5</span>].split()[<span class="nu">1</span>]), <span class="fn2">int</span>(lines[<span class="nu">5</span>].split()[<span class="nu">2</span>])
    kpoints, bands = [], []
    
    i = <span class="nu">6</span>
    <span class="kw">for</span> _ <span class="kw">in</span> <span class="fn2">range</span>(nk):
        kpoints.append([<span class="fn2">float</span>(x) <span class="kw">for</span> x <span class="kw">in</span> lines[i].split()[:<span class="nu">3</span>]])
        i += <span class="nu">1</span>
        bands.append([<span class="fn2">float</span>(lines[i+j].split()[<span class="nu">1</span>]) <span class="kw">for</span> j <span class="kw">in</span> <span class="fn2">range</span>(nb)])
        i += nb
    
    <span class="kw">return</span> np.array(kpoints), np.array(bands)

<span class="cm"># 读取费米能级</span>
<span class="kw">def</span> <span class="fn2">get_efermi</span>():
    <span class="kw">with</span> <span class="fn2">open</span>(<span class="st">'OUTCAR'</span>) <span class="kw">as</span> f:
        <span class="kw">for</span> line <span class="kw">in</span> f:
            <span class="kw">if</span> <span class="st">'E-fermi'</span> <span class="kw">in</span> line:
                <span class="kw">return</span> <span class="fn2">float</span>(line.split()[<span class="nu">2</span>])

kpts, bands = <span class="fn2">read_eigenval</span>()
ef = <span class="fn2">get_efermi</span>()

<span class="cm"># 计算 k 距离</span>
kdist = np.concatenate([[<span class="nu">0</span>], np.cumsum(np.linalg.norm(np.diff(kpts, axis=<span class="nu">0</span>), axis=<span class="nu">1</span>))])

<span class="cm"># 绘图</span>
fig, ax = plt.subplots(figsize=(<span class="nu">8</span>, <span class="nu">6</span>))
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn2">range</span>(bands.shape[<span class="nu">1</span>]):
    ax.plot(kdist, bands[:, i] - ef, <span class="st">'b-'</span>, lw=<span class="nu">0.8</span>)

ax.axhline(<span class="nu">0</span>, color=<span class="st">'r'</span>, ls=<span class="st">'--'</span>, label=<span class="st">'E<sub>F</sub>'</span>)
ax.set_xlabel(<span class="st">'K-path'</span>)
ax.set_ylabel(<span class="st">'Energy - E<sub>F</sub> (eV)'</span>)
ax.set_ylim(-<span class="nu">5</span>, <span class="nu">5</span>)
ax.legend()
plt.savefig(<span class="st">'band.png'</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>
    </div>

    <h2>静态计算</h2>
    <p>静态计算用于在固定结构上计算电子性质，不改变原子位置。</p>

    <h3>INC AR 设置</h3>
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">静态计算</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si static calculation</span>

<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>

<span class="kw">IBRION</span>   = <span class="nu">-1</span>               <span class="cm">; 不动离子</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>                <span class="cm">; 无离子步</span>

<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>
    </div>

    <h2>任务类型对比</h2>
    <table class="tb">
      <thead><tr><th>任务类型</th><th>IBRION</th><th>NSW</th><th>ISIF</th><th>ISMEAR</th><th>输出</th></tr></thead>
      <tbody>
        <tr><td>结构优化</td><td>1 或 2</td><td>>0</td><td>2 或 3</td><td>0 或 1</td><td>CONTCAR</td></tr>
        <tr><td>静态计算</td><td>-1</td><td>0</td><td>-</td><td>0/-5</td><td>DOSCAR</td></tr>
        <tr><td>DOS 计算</td><td>-1</td><td>0</td><td>-</td><td>-5</td><td>DOSCAR</td></tr>
        <tr><td>能带计算</td><td>-1</td><td>0</td><td>-</td><td>0</td><td>EIGENVAL</td></tr>
      </tbody>
    </table>

    <h2>完整工作流示例</h2>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><span class="fn">workflow.sh</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># Si 完整计算工作流</span>

<span class="fn2">echo</span> <span class="st">"=== 步骤 1: 结构优化 ==="</span>
<span class="fn2">mkdir</span> 01_relax && <span class="fn2">cd</span> 01_relax
<span class="fn2">cp</span> ../POSCAR_init POSCAR
<span class="fn2">cp</span> ../POTCAR ../KPOINTS ./
<span class="fn2">cat</span> > INCAR << EOF
SYSTEM = Si relax
ENCUT = 400
PREC = Accurate
EDIFF = 1E-6
IBRION = 2
NSW = 200
ISIF = 3
ISMEAR = 0
SIGMA = 0.05
EOF
<span class="fn2">mpirun</span> -np <span class="nu">16</span> vasp_std
<span class="fn2">cd</span> ..

<span class="fn2">echo</span> <span class="st">"=== 步骤 2: DOS 计算 ==="</span>
<span class="fn2">mkdir</span> 02_dos && <span class="fn2">cd</span> 02_dos
<span class="fn2">cp</span> ../01_relax/CONTCAR POSCAR
<span class="fn2">cp</span> ../POTCAR ../KPOINTS_dos KPOINTS
<span class="fn2">cat</span> > INCAR << EOF
SYSTEM = Si DOS
ENCUT = 400
PREC = Accurate
EDIFF = 1E-6
IBRION = -1
NSW = 0
ISMEAR = -5
LORBIT = 11
NEDOS = 2000
EOF
<span class="fn2">mpirun</span> -np <span class="nu">16</span> vasp_std
<span class="fn2">cd</span> ..

<span class="fn2">echo</span> <span class="st">"=== 步骤 3: 能带计算 ==="</span>
<span class="fn2">mkdir</span> 03_band && <span class="fn2">cd</span> 03_band
<span class="fn2">cp</span> ../01_relax/CONTCAR POSCAR
<span class="fn2">cp</span> ../01_relax/WAVECAR ./
<span class="fn2">cp</span> ../POTCAR ../KPOINTS_band KPOINTS
<span class="fn2">cat</span> > INCAR << EOF
SYSTEM = Si band
ENCUT = 400
PREC = Accurate
ICHARG = 11
IBRION = -1
NSW = 0
ISMEAR = 0
SIGMA = 0.05
LORBIT = 11
EOF
<span class="fn2">mpirun</span> -np <span class="nu">16</span> vasp_std
<span class="fn2">cd</span> ..

<span class="fn2">echo</span> <span class="st">"=== 计算完成 ==="</span></code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TasksView',
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
