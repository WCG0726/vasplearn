<template>
  <div class="sec active">
    <div class="bread"><router-link to="/">首页</router-link>/<span>结果分析</span></div>
    
    <h2>输出文件解读</h2>
    <p>理解 VASP 输出文件是成功完成计算的关键。本节详细介绍各输出文件的内容和分析方法。</p>

    <h3>输出文件总览</h3>
    <table class="tb">
      <thead><tr><th>文件</th><th>内容</th><th>大小</th><th>重要性</th></tr></thead>
      <tbody>
        <tr><td><code>OUTCAR</code></td><td>详细输出（所有计算信息）</td><td>大</td><td>★★★★★</td></tr>
        <tr><td><code>OSZICAR</code></td><td>迭代摘要（收敛曲线）</td><td>小</td><td>★★★★</td></tr>
        <tr><td><code>CONTCAR</code></td><td>最终结构（下一步 POSCAR）</td><td>小</td><td>★★★★★</td></tr>
        <tr><td><code>DOSCAR</code></td><td>态密度数据</td><td>中</td><td>★★★</td></tr>
        <tr><td><code>EIGENVAL</code></td><td>本征值（能带数据）</td><td>中</td><td>★★★</td></tr>
        <tr><td><code>CHGCAR</code></td><td>电荷密度</td><td>大</td><td>★★</td></tr>
        <tr><td><code>WAVECAR</code></td><td>波函数</td><td>很大</td><td>★★</td></tr>
        <tr><td><code>vasprun.xml</code></td><td>XML 格式完整输出</td><td>大</td><td>★★★★</td></tr>
      </tbody>
    </table>

    <h2>OUTCAR 详解</h2>
    <p>OUTCAR 包含 VASP 计算的所有详细信息，是最重要的输出文件。</p>

    <h3>1. 关键信息位置</h3>
    <table class="tb">
      <thead><tr><th>信息</th><th>grep 命令</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>总能量（自由能）</td><td><code>grep "free  energy" OUTCAR</code></td><td>最重要的能量</td></tr>
        <tr><td>总能量（无熵）</td><td><code>grep "energy  without" OUTCAR</code></td><td>更准确的能量</td></tr>
        <tr><td>力</td><td><code>grep "TOTAL-FORCE" OUTCAR</code></td><td>每个原子的力</td></tr>
        <tr><td>应力</td><td><code>grep "in kB" OUTCAR</code></td><td>应力张量</td></tr>
        <tr><td>外部压力</td><td><code>grep "external pressure" OUTCAR</code></td><td>标量压力</td></tr>
        <tr><td>费米能级</td><td><code>grep "E-fermi" OUTCAR</code></td><td>费米能</td></tr>
        <tr><td>磁矩</td><td><code>grep "magnetization" OUTCAR</code></td><td>自旋磁矩</td></tr>
        <tr><td>收敛检查</td><td><code>grep "reached required" OUTCAR</code></td><td>是否收敛</td></tr>
        <tr><td>计算时间</td><td><code>grep "Total CPU time" OUTCAR</code></td><td>总耗时</td></tr>
        <tr><td>NELECT</td><td><code>grep "NELECT" OUTCAR</code></td><td>总电子数</td></tr>
      </tbody>
    </table>

    <h3>2. 提取能量</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><span class="fn">提取能量</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 提取最终自由能</span>
<span class="fn2">grep</span> <span class="st">"free  energy"</span> OUTCAR | <span class="fn2">tail</span> -1
<span class="cm"># 输出: free  energy TOTEN  =      -156.23456789 eV</span>

<span class="cm"># 提取无熵能量（更准确）</span>
<span class="fn2">grep</span> <span class="st">"energy  without"</span> OUTCAR | <span class="fn2">tail</span> -1
<span class="cm"># 输出: energy  without entropy=     -156.234567  energy(sigma->0) =     -156.234567</span>

<span class="cm"># 提取数值</span>
e=$(<span class="fn2">grep</span> <span class="st">"free  energy"</span> OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">'{print $5}'</span>)
<span class="fn2">echo</span> <span class="st">"能量: $e eV"</span>

<span class="cm"># 每原子能量</span>
natoms=$(<span class="fn2">grep</span> <span class="st">"NIONS"</span> OUTCAR | <span class="fn2">head</span> -1 | <span class="fn2">awk</span> <span class="st">'{print $NF}'</span>)
per_atom=$(<span class="fn2">echo</span> <span class="st">"$e / $natoms"</span> | <span class="fn2">bc</span> -l)
<span class="fn2">echo</span> <span class="st">"每原子能量: $per_atom eV/atom"</span></code></pre>
    </div>

    <h3>3. 提取力和应力</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 查看最后一步的力</span>
<span class="fn2">grep</span> <span class="st">"TOTAL-FORCE"</span> OUTCAR -A <span class="nu">10</span> | <span class="fn2">tail</span> -12
<span class="cm"># 输出每个原子的 x y z 力分量</span>

<span class="cm"># 提取最大力</span>
<span class="fn2">grep</span> <span class="st">"TOTAL-FORCE"</span> OUTCAR -A <span class="nu">100</span> | <span class="fn2">grep</span> -v <span class="st">"TOTAL\|---"</span> | <span class="fn2">awk</span> <span class="st">'{print sqrt($4*$4+$5*$5+$6*$6)}'</span> | <span class="fn2">sort</span> -n | <span class="fn2">tail</span> -1

<span class="cm"># 查看应力张量</span>
<span class="fn2">grep</span> <span class="st">"in kB"</span> OUTCAR | <span class="fn2">tail</span> -1
<span class="cm"># 输出: XX YY ZZ XY YZ ZX</span>

<span class="cm"># 查看外部压力（标量）</span>
<span class="fn2">grep</span> <span class="st">"external pressure"</span> OUTCAR | <span class="fn2">tail</span> -1
<span class="cm"># 输出: external pressure =    -1.23 kB</span></code></pre>
    </div>

    <h3>4. 检查收敛状态</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 检查是否收敛（输出包含 "reached required" 表示收敛）</span>
<span class="fn2">grep</span> <span class="st">"reached required accuracy"</span> OUTCAR
<span class="cm"># 成功输出: reached required accuracy - stopping structural energy minimisation</span>

<span class="cm"># 检查电子步收敛</span>
<span class="fn2">grep</span> <span class="st">"EDIFF"</span> OUTCAR

<span class="cm"># 查看离子步数</span>
<span class="fn2">grep</span> <span class="st">"FREE ENERGIE"</span> OUTCAR | <span class="fn2">wc</span> -l</code></pre>
    </div>

    <div class="ib tip"><strong>收敛判断：</strong>看到 <code>reached required accuracy</code> 表示计算成功收敛。</div>

    <h3>5. 检查计算状态</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 检查是否有错误</span>
<span class="fn2">grep</span> -i <span class="st">"error\|warning\|abort"</span> OUTCAR

<span class="cm"># 查看计算时间</span>
<span class="fn2">grep</span> <span class="st">"Total CPU time"</span> OUTCAR

<span class="cm"># 查看并行效率</span>
<span class="fn2">grep</span> <span class="st">"LOOP:"</span> OUTCAR | <span class="fn2">tail</span> -5

<span class="cm"># 查看 K 点信息</span>
<span class="fn2">grep</span> <span class="st">"NKPTS"</span> OUTCAR | <span class="fn2">head</span> -1</code></pre>
    </div>

    <h2>OSZICAR 详解</h2>
    <p>OSZICAR 记录每次迭代的简要信息，用于监控收敛过程。</p>

    <h3>1. 文件格式</h3>
    <div class="cb">
      <div class="ch"><span class="la">OSZICAR</span><span class="fn">示例内容</span></div>
      <pre><code><span class="cm"># 列说明: N  E  dE  dep  dep2  ncg  rms  rms(cg)</span>
   1  F= -.156234E+03 E0= -.156234E+03  d E =-.156234E+03  mag=     0.0000
   2  F= -.156456E+03 E0= -.156456E+03  d E =-.222000E-01  mag=     0.0000
   3  F= -.156467E+03 E0= -.156467E+03  d E =-.110000E-02  mag=     0.0000
   4  F= -.156468E+03 E0= -.156468E+03  d E =-.100000E-04  mag=     0.0000
   5 F= -.156468E+03 E0= -.156468E+03  d E =-.980000E-06  mag=     0.0000</code></pre>
    </div>

    <table class="tb">
      <thead><tr><th>列</th><th>含义</th></tr></thead>
      <tbody>
        <tr><td>N</td><td>离子步数（或电子步数）</td></tr>
        <tr><td>F</td><td>总能量</td></tr>
        <tr><td>E0</td><td>无熵校正能量</td></tr>
        <tr><td>d E</td><td>能量变化</td></tr>
        <tr><td>mag</td><td>总磁矩</td></tr>
      </tbody>
    </table>

    <h3>2. 绘制收敛曲线</h3>
    <div class="cb">
      <div class="ch"><span class="la">python</span><span class="fn">plot_convergence.py</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 OSZICAR</span>
<span class="kw">def</span> <span class="fn2">read_oszicar</span>(filename=<span class="st">'OSZICAR'</span>):
    energies = []
    <span class="kw">with</span> <span class="fn2">open</span>(filename) <span class="kw">as</span> f:
        <span class="kw">for</span> line <span class="kw">in</span> f:
            <span class="kw">if</span> line.startswith(<span class="st">' '</span>) <span class="kw">and</span> <span class="st">'F='</span> <span class="kw">in</span> line:
                e = <span class="fn2">float</span>(line.split(<span class="st">'F='</span>)[<span class="nu">1</span>].split()[<span class="nu">0</span>])
                energies.append(e)
    <span class="kw">return</span> np.array(energies)

energies = <span class="fn2">read_oszicar</span>()

<span class="cm"># 绘制收敛曲线</span>
fig, (ax1, ax2) = plt.subplots(<span class="nu">2</span>, <span class="nu">1</span>, figsize=(<span class="nu">8</span>, <span class="nu">8</span>))

<span class="cm"># 能量 vs 步数</span>
ax1.plot(energies, <span class="st">'b-o'</span>, markersize=<span class="nu">4</span>)
ax1.set_xlabel(<span class="st">'Ion Step'</span>)
ax1.set_ylabel(<span class="st">'Energy (eV)'</span>)
ax1.set_title(<span class="st">'Energy Convergence'</span>)

<span class="cm"># 能量变化 vs 步数</span>
delta = np.diff(energies)
ax2.semilogy(<span class="fn2">abs</span>(delta), <span class="st">'r-s'</span>, markersize=<span class="nu">4</span>)
ax2.set_xlabel(<span class="st">'Ion Step'</span>)
ax2.set_ylabel(<span class="st">'|dE| (eV)'</span>)
ax2.set_title(<span class="st">'Energy Change'</span>)
ax2.axhline(y=<span class="nu">1E-6</span>, color=<span class="st">'g'</span>, linestyle=<span class="st">'--'</span>, label=<span class="st">'EDIFF'</span>)
ax2.legend()

plt.tight_layout()
plt.savefig(<span class="st">'convergence.png'</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>
    </div>

    <h2>CONTCAR 详解</h2>
    <p>CONTCAR 包含优化后的最终结构，格式与 POSCAR 相同。</p>

    <h3>使用注意事项</h3>
    <ul>
      <li><strong>下一次计算</strong>：将 CONTCAR 复制为 POSCAR 继续计算</li>
      <li><strong>检查晶格变化</strong>：比较初始和最终晶格常数</li>
      <li><strong>检查原子位置</strong>：确认优化后的结构合理</li>
    </ul>

    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 查看优化后的晶格常数</span>
<span class="fn2">head</span> -7 CONTCAR

<span class="cm"># 比较初始和最终晶格</span>
<span class="fn2">echo</span> <span class="st">"=== 初始晶格 ==="</span>
<span class="fn2">sed</span> -n <span class="st">'3,5p'</span> POSCAR
<span class="fn2">echo</span> <span class="st">"=== 最终晶格 ==="</span>
<span class="fn2">sed</span> -n <span class="st">'3,5p'</span> CONTCAR

<span class="cm"># 计算晶格常数变化</span>
<span class="fn2">python</span> -c "
<span class="kw">import</span> numpy <span class="kw">as</span> np
a_init = np.linalg.norm([<span class="fn2">float</span>(x) <span class="kw">for</span> x <span class="kw">in</span> <span class="fn2">open</span>(<span class="st">'POSCAR'</span>).readlines()[<span class="nu">2</span>].split()])
a_final = np.linalg.norm([<span class="fn2">float</span>(x) <span class="kw">for</span> x <span class="kw">in</span> <span class="fn2">open</span>(<span class="st">'CONTCAR'</span>).readlines()[<span class="nu">2</span>].split()])
<span class="fn2">print</span>(f<span class="st">'晶格变化: {(a_final-a_init)/a_init*100:.2f}%'</span>)
"</code></pre>
    </div>

    <h2>DOSCAR 详解</h2>
    <p>DOSCAR 包含态密度数据，用于分析电子结构。</p>

    <h3>1. 文件格式</h3>
    <div class="cb">
      <div class="ch"><span class="la">DOSCAR</span><span class="fn">格式说明</span></div>
      <pre><code><span class="cm"># 文件结构</span>
Line 1: 原子数
Line 2-5: 头部信息
Line 6: NEDOS EMIN EMAX EFERMI SPIN
Line 7-NEDOS+6: 能量 DOS(上) DOS(下) 积分DOS(上) 积分DOS(下)
<span class="cm"># 后续是每个原子的分波 DOS</span></code></pre>
    </div>

    <h3>2. 提取和绘制 DOS</h3>
    <div class="cb">
      <div class="ch"><span class="la">python</span><span class="fn">plot_dos.py</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 DOSCAR</span>
<span class="kw">def</span> <span class="fn2">read_doscar</span>(filename=<span class="st">'DOSCAR'</span>):
    <span class="kw">with</span> <span class="fn2">open</span>(filename) <span class="kw">as</span> f:
        lines = f.readlines()
    
    natoms = <span class="fn2">int</span>(lines[<span class="nu">0</span>].split()[<span class="nu">0</span>])
    nedos = <span class="fn2">int</span>(lines[<span class="nu">5</span>].split()[<span class="nu">2</span>])
    efermi = <span class="fn2">float</span>(lines[<span class="nu">5</span>].split()[<span class="nu">3</span>])
    
    <span class="cm"># 读取总 DOS</span>
    dos_data = []
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn2">range</span>(<span class="nu">6</span>, <span class="nu">6</span> + nedos):
        dos_data.append([<span class="fn2">float</span>(x) <span class="kw">for</span> x <span class="kw">in</span> lines[i].split()])
    
    dos_data = np.array(dos_data)
    energy = dos_data[:, <span class="nu">0</span>] - efermi
    dos_up = dos_data[:, <span class="nu">1</span>]
    dos_down = dos_data[:, <span class="nu">2</span>] <span class="kw">if</span> dos_data.shape[<span class="nu">1</span>] > <span class="nu">2</span> <span class="kw">else</span> <span class="kw">None</span>
    
    <span class="kw">return</span> energy, dos_up, dos_down, efermi

energy, dos_up, dos_down, ef = <span class="fn2">read_doscar</span>()

<span class="cm"># 绘制 DOS</span>
fig, ax = plt.subplots(figsize=(<span class="nu">8</span>, <span class="nu">6</span>))

ax.plot(energy, dos_up, <span class="st">'b-'</span>, label=<span class="st">'Spin up'</span>, lw=<span class="nu">1.5</span>)
<span class="kw">if</span> dos_down <span class="kw">is not None</span>:
    ax.plot(energy, -dos_down, <span class="st">'r-'</span>, label=<span class="st">'Spin down'</span>, lw=<span class="nu">1.5</span>)
    ax.fill_between(energy, dos_down, alpha=<span class="nu">0.3</span>, color=<span class="st">'r'</span>)

ax.fill_between(energy, dos_up, alpha=<span class="nu">0.3</span>, color=<span class="st">'b'</span>)
ax.axvline(x=<span class="nu">0</span>, color=<span class="st">'k'</span>, ls=<span class="st">'--'</span>, lw=<span class="nu">1</span>, label=<span class="st">'Fermi level'</span>)
ax.set_xlabel(<span class="st">'Energy - E<sub>F</sub> (eV)'</span>)
ax.set_ylabel(<span class="st">'DOS (states/eV)'</span>)
ax.set_xlim(-<span class="nu">5</span>, <span class="nu">5</span>)
ax.legend()

<span class="cm"># 计算带隙</span>
<span class="kw">if</span> dos_up[energy > <span class="nu">0</span>].<span class="fn2">min</span>() < <span class="nu">0.01</span>:
    cb = energy[energy > <span class="nu">0</span>][dos_up[energy > <span class="nu">0</span>] > <span class="nu">0.01</span>][<span class="nu">0</span>]
    vb = energy[energy < <span class="nu">0</span>][dos_up[energy < <span class="nu">0</span>] > <span class="nu">0.01</span>][-<span class="nu">1</span>]
    ax.annotate(<span class="st">''</span>, xy=(cb, <span class="nu">0</span>), xytext=(vb, <span class="nu">0</span>),
                arrowprops=dict(arrowstyle=<span class="st">'<->'</span>, color=<span class="st">'green'</span>, lw=<span class="nu">2</span>))
    ax.text((cb+vb)/<span class="nu">2</span>, <span class="nu">0.5</span>, f<span class="st">'Gap={cb-vb:.2f} eV'</span>, ha=<span class="st">'center'</span>, color=<span class="st">'green'</span>)

plt.savefig(<span class="st">'dos.png'</span>, dpi=<span class="nu">150</span>, bbox_inches=<span class="st">'tight'</span>)
plt.show()</code></pre>
    </div>

    <h2>EIGENVAL 详解</h2>
    <p>EIGENVAL 包含本征值数据，用于绘制能带结构。</p>

    <h3>文件格式</h3>
    <div class="cb">
      <div class="ch"><span class="la">EIGENVAL</span><span class="fn">格式说明</span></div>
      <pre><code><span class="cm"># 文件结构</span>
Line 1-4: 头部信息
Line 5: NEDOS NKPTS NBANDS (能量点数, K点数, 能带数)
Line 6: 空行
<span class="cm"># 重复以下结构（每个 K 点）：</span>
Line: kx ky kz weight
Line: band_index energy occupancy
<span class="cm"># ... (NBANDS 行)</span></code></pre>
    </div>

    <h2>计算成功判断标准</h2>

    <h3>1. 结构优化成功标志</h3>
    <table class="tb">
      <thead><tr><th>检查项</th><th>成功标志</th><th>检查命令</th></tr></thead>
      <tbody>
        <tr><td>收敛</td><td>输出 "reached required accuracy"</td><td><code>grep "reached required" OUTCAR</code></td></tr>
        <tr><td>力</td><td>最大力 < 0.02 eV/Å</td><td><code>grep "TOTAL-FORCE" OUTCAR</code></td></tr>
        <tr><td>压力</td><td>外部压力 < 1 kbar</td><td><code>grep "external pressure" OUTCAR</code></td></tr>
        <tr><td>能量</td><td>能量变化 < EDIFF</td><td><code>grep "d E" OSZICAR</code></td></tr>
      </tbody>
    </table>

    <h3>2. 常见失败模式</h3>
    <table class="tb">
      <thead><tr><th>问题</th><th>症状</th><th>解决方案</th></tr></thead>
      <tbody>
        <tr><td>SCF 不收敛</td><td>电子步达到 NELM</td><td>调整 MAGMOM、ISMEAR</td></tr>
        <tr><td>结构发散</td><td>能量持续增大</td><td>减小 POTIM</td></tr>
        <tr><td>原子跑飞</td><td>能量 ~10^6 eV</td><td>检查初始结构</td></tr>
        <tr><td>内存不足</td><td>Killed</td><td>使用 LREAL=Auto</td></tr>
      </tbody>
    </table>

    <h3>3. 完整检查脚本</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><span class="fn">check_calc.sh</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># 完整的计算状态检查</span>

<span class="fn2">echo</span> <span class="st">"=== VASP 计算状态检查 ==="</span>
<span class="fn2">echo</span> <span class="st">"目录: $(pwd)"</span>
<span class="fn2">echo</span>

<span class="cm"># 1. 检查文件存在</span>
<span class="fn2">echo</span> <span class="st">"[1] 文件检查"</span>
<span class="kw">for</span> f <span class="kw">in</span> OUTCAR OSZICAR CONTCAR; <span class="kw">do</span>
    [ -f $f ] && <span class="fn2">echo</span> <span class="st">"  ✓ $f 存在"</span> || <span class="fn2">echo</span> <span class="st">"  ✗ $f 缺失"</span>
<span class="kw">done</span>
<span class="fn2">echo</span>

<span class="cm"># 2. 检查收敛</span>
<span class="fn2">echo</span> <span class="st">"[2] 收敛状态"</span>
<span class="kw">if</span> <span class="fn2">grep</span> -q <span class="st">"reached required accuracy"</span> OUTCAR; <span class="kw">then</span>
    <span class="fn2">echo</span> <span class="st">"  ✓ 计算收敛"</span>
<span class="kw">else</span>
    <span class="fn2">echo</span> <span class="st">"  ✗ 计算未收敛"</span>
<span class="kw">fi</span>
<span class="fn2">echo</span>

<span class="cm"># 3. 能量信息</span>
<span class="fn2">echo</span> <span class="st">"[3] 能量信息"</span>
e=$(<span class="fn2">grep</span> <span class="st">"free  energy"</span> OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">'{print $5}'</span>)
natoms=$(<span class="fn2">grep</span> <span class="st">"NIONS"</span> OUTCAR | <span class="fn2">head</span> -1 | <span class="fn2">awk</span> <span class="st">'{print $NF}'</span>)
<span class="fn2">echo</span> <span class="st">"  总能量: $e eV"</span>
<span class="fn2">echo</span> <span class="st">"  原子数: $natoms"</span>
<span class="fn2">echo</span> <span class="st">"  每原子: $(echo "$e / $natoms" | bc -l) eV/atom"</span>
<span class="fn2">echo</span>

<span class="cm"># 4. 力信息</span>
<span class="fn2">echo</span> <span class="st">"[4] 力信息"</span>
max_force=$(<span class="fn2">grep</span> <span class="st">"TOTAL-FORCE"</span> OUTCAR -A <span class="nu">100</span> | <span class="fn2">grep</span> -v <span class="st">"TOTAL\|---"</span> | <span class="fn2">awk</span> <span class="st">'{print sqrt($4*$4+$5*$5+$6*$6)}'</span> | <span class="fn2">sort</span> -n | <span class="fn2">tail</span> -1)
<span class="fn2">echo</span> <span class="st">"  最大力: $max_force eV/Å"</span>
<span class="fn2">echo</span>

<span class="cm"># 5. 压力信息</span>
<span class="fn2">echo</span> <span class="st">"[5] 压力信息"</span>
pressure=$(<span class="fn2">grep</span> <span class="st">"external pressure"</span> OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">'{print $4}'</span>)
<span class="fn2">echo</span> <span class="st">"  外部压力: $pressure kbar"</span>
<span class="fn2">echo</span>

<span class="cm"># 6. 错误检查</span>
<span class="fn2">echo</span> <span class="st">"[6] 错误检查"</span>
errors=$(<span class="fn2">grep</span> -i <span class="st">"error\|warning\|abort"</span> OUTCAR | <span class="fn2">wc</span> -l)
<span class="kw">if</span> [ $errors -eq <span class="nu">0</span> ]; <span class="kw">then</span>
    <span class="fn2">echo</span> <span class="st">"  ✓ 无错误"</span>
<span class="kw">else</span>
    <span class="fn2">echo</span> <span class="st">"  ⚠ 发现 $errors 个错误/警告"</span>
    <span class="fn2">grep</span> -i <span class="st">"error\|warning\|abort"</span> OUTCAR | <span class="fn2">head</span> -5
<span class="kw">fi</span>
<span class="fn2">echo</span>

<span class="fn2">echo</span> <span class="st">"=== 检查完成 ==="</span></code></pre>
    </div>

    <h2>收敛性测试</h2>
    <p>收敛性测试确保计算参数足够精确。</p>

    <div class="cb">
      <div class="ch"><span class="la">bash</span><span class="fn">encut_test.sh</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># ENCUT 收敛测试</span>

<span class="kw">for</span> encut <span class="kw">in</span> <span class="nu">200 250 300 350 400 450 500</span>; <span class="kw">do</span>
    <span class="fn2">mkdir</span> ENCUT_${encut}
    <span class="fn2">cp</span> POSCAR KPOINTS POTCAR ENCUT_${encut}/
    <span class="fn2">sed</span> <span class="st">"s/ENCUT.*/ENCUT = ${encut}/"</span> INCAR > ENCUT_${encut}/INCAR
    <span class="fn2">cd</span> ENCUT_${encut}; <span class="fn2">mpirun</span> -np <span class="nu">4</span> vasp_std; <span class="fn2">cd</span> ..
<span class="kw">done</span>

<span class="cm"># 提取并显示结果</span>
<span class="fn2">echo</span> <span class="st">"ENCUT(eV)    Energy(eV)    dE(meV/atom)"</span>
<span class="fn2">echo</span> <span class="st">"----------------------------------------"</span>

prev_e=<span class="nu">0</span>
<span class="kw">for</span> encut <span class="kw">in</span> <span class="nu">200 250 300 350 400 450 500</span>; <span class="kw">do</span>
    e=$(<span class="fn2">grep</span> <span class="st">"free  energy"</span> ENCUT_${encut}/OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">'{print $5}'</span>)
    natoms=$(<span class="fn2">grep</span> <span class="st">"NIONS"</span> ENCUT_${encut}/OUTCAR | <span class="fn2">head</span> -1 | <span class="fn2">awk</span> <span class="st">'{print $NF}'</span>)
    de=$(<span class="fn2">echo</span> <span class="st">"($e - $prev_e) / $natoms * 1000"</span> | <span class="fn2">bc</span> -l)
    <span class="fn2">printf</span> <span class="st">"%-12s %12.6f %12.3f\n"</span> <span class="st">"$encut"</span> <span class="st">"$e"</span> <span class="st">"$de"</span>
    prev_e=$e
<span class="kw">done</span></code></pre>
    </div>

    <div class="ib tip"><strong>判断标准：</strong>相邻 ENCUT 能量差 < 1 meV/atom 时收敛。</div>
  </div>
</template>

<script>
export default {
  name: 'OutputView',
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
