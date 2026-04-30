import{_ as d,o as r,c as u,a as n,e as i,w as f,h as l,f as t,g as q}from"./index-BSmeIEo-.js";const g={name:"OutputView",methods:{copy(c){const e=c.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(e).then(()=>{c.target.textContent="已复制!",c.target.classList.add("ok"),setTimeout(()=>{c.target.textContent="复制",c.target.classList.remove("ok")},2e3)})}}},m={class:"sec active"},C={class:"bread"},b={class:"cb"},O={class:"ch"},w={class:"cb"},h={class:"ch"},A={class:"cb"},k={class:"ch"},y={class:"cb"},E={class:"ch"},T={class:"cb"},R={class:"ch"},x={class:"cb"},N={class:"ch"},v={class:"cb"},U={class:"ch"},S={class:"cb"},$={class:"ch"},V={class:"cb"},I={class:"ch"};function L(c,s,e,F,D,a){const o=q("router-link");return r(),u("div",m,[n("div",C,[i(o,{to:"/"},{default:f(()=>[...s[9]||(s[9]=[l("首页",-1)])]),_:1}),s[10]||(s[10]=l("/",-1)),s[11]||(s[11]=n("span",null,"结果分析",-1))]),s[35]||(s[35]=t('<h2>输出文件解读</h2><p>理解 VASP 输出文件是成功完成计算的关键。本节详细介绍各输出文件的内容和分析方法。</p><h3>输出文件总览</h3><table class="tb"><thead><tr><th>文件</th><th>内容</th><th>大小</th><th>重要性</th></tr></thead><tbody><tr><td><code>OUTCAR</code></td><td>详细输出（所有计算信息）</td><td>大</td><td>★★★★★</td></tr><tr><td><code>OSZICAR</code></td><td>迭代摘要（收敛曲线）</td><td>小</td><td>★★★★</td></tr><tr><td><code>CONTCAR</code></td><td>最终结构（下一步 POSCAR）</td><td>小</td><td>★★★★★</td></tr><tr><td><code>DOSCAR</code></td><td>态密度数据</td><td>中</td><td>★★★</td></tr><tr><td><code>EIGENVAL</code></td><td>本征值（能带数据）</td><td>中</td><td>★★★</td></tr><tr><td><code>CHGCAR</code></td><td>电荷密度</td><td>大</td><td>★★</td></tr><tr><td><code>WAVECAR</code></td><td>波函数</td><td>很大</td><td>★★</td></tr><tr><td><code>vasprun.xml</code></td><td>XML 格式完整输出</td><td>大</td><td>★★★★</td></tr></tbody></table><h2>OUTCAR 详解</h2><p>OUTCAR 包含 VASP 计算的所有详细信息，是最重要的输出文件。</p><h3>1. 关键信息位置</h3><table class="tb"><thead><tr><th>信息</th><th>grep 命令</th><th>说明</th></tr></thead><tbody><tr><td>总能量（自由能）</td><td><code>grep &quot;free energy&quot; OUTCAR</code></td><td>最重要的能量</td></tr><tr><td>总能量（无熵）</td><td><code>grep &quot;energy without&quot; OUTCAR</code></td><td>更准确的能量</td></tr><tr><td>力</td><td><code>grep &quot;TOTAL-FORCE&quot; OUTCAR</code></td><td>每个原子的力</td></tr><tr><td>应力</td><td><code>grep &quot;in kB&quot; OUTCAR</code></td><td>应力张量</td></tr><tr><td>外部压力</td><td><code>grep &quot;external pressure&quot; OUTCAR</code></td><td>标量压力</td></tr><tr><td>费米能级</td><td><code>grep &quot;E-fermi&quot; OUTCAR</code></td><td>费米能</td></tr><tr><td>磁矩</td><td><code>grep &quot;magnetization&quot; OUTCAR</code></td><td>自旋磁矩</td></tr><tr><td>收敛检查</td><td><code>grep &quot;reached required&quot; OUTCAR</code></td><td>是否收敛</td></tr><tr><td>计算时间</td><td><code>grep &quot;Total CPU time&quot; OUTCAR</code></td><td>总耗时</td></tr><tr><td>NELECT</td><td><code>grep &quot;NELECT&quot; OUTCAR</code></td><td>总电子数</td></tr></tbody></table><h3>2. 提取能量</h3>',9)),n("div",b,[n("div",O,[s[12]||(s[12]=n("span",{class:"la"},"bash",-1)),s[13]||(s[13]=n("span",{class:"fn"},"提取能量",-1)),n("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[14]||(s[14]=t(`<pre><code><span class="cm"># 提取最终自由能</span>
<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR | <span class="fn2">tail</span> -1
<span class="cm"># 输出: free  energy TOTEN  =      -156.23456789 eV</span>

<span class="cm"># 提取无熵能量（更准确）</span>
<span class="fn2">grep</span> <span class="st">&quot;energy  without&quot;</span> OUTCAR | <span class="fn2">tail</span> -1
<span class="cm"># 输出: energy  without entropy=     -156.234567  energy(sigma-&gt;0) =     -156.234567</span>

<span class="cm"># 提取数值</span>
e=$(<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $5}&#39;</span>)
<span class="fn2">echo</span> <span class="st">&quot;能量: $e eV&quot;</span>

<span class="cm"># 每原子能量</span>
natoms=$(<span class="fn2">grep</span> <span class="st">&quot;NIONS&quot;</span> OUTCAR | <span class="fn2">head</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $NF}&#39;</span>)
per_atom=$(<span class="fn2">echo</span> <span class="st">&quot;$e / $natoms&quot;</span> | <span class="fn2">bc</span> -l)
<span class="fn2">echo</span> <span class="st">&quot;每原子能量: $per_atom eV/atom&quot;</span></code></pre>`,1))]),s[36]||(s[36]=n("h3",null,"3. 提取力和应力",-1)),n("div",w,[n("div",h,[s[15]||(s[15]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[16]||(s[16]=t(`<pre><code><span class="cm"># 查看最后一步的力</span>
<span class="fn2">grep</span> <span class="st">&quot;TOTAL-FORCE&quot;</span> OUTCAR -A <span class="nu">10</span> | <span class="fn2">tail</span> -12
<span class="cm"># 输出每个原子的 x y z 力分量</span>

<span class="cm"># 提取最大力</span>
<span class="fn2">grep</span> <span class="st">&quot;TOTAL-FORCE&quot;</span> OUTCAR -A <span class="nu">100</span> | <span class="fn2">grep</span> -v <span class="st">&quot;TOTAL\\|---&quot;</span> | <span class="fn2">awk</span> <span class="st">&#39;{print sqrt($4*$4+$5*$5+$6*$6)}&#39;</span> | <span class="fn2">sort</span> -n | <span class="fn2">tail</span> -1

<span class="cm"># 查看应力张量</span>
<span class="fn2">grep</span> <span class="st">&quot;in kB&quot;</span> OUTCAR | <span class="fn2">tail</span> -1
<span class="cm"># 输出: XX YY ZZ XY YZ ZX</span>

<span class="cm"># 查看外部压力（标量）</span>
<span class="fn2">grep</span> <span class="st">&quot;external pressure&quot;</span> OUTCAR | <span class="fn2">tail</span> -1
<span class="cm"># 输出: external pressure =    -1.23 kB</span></code></pre>`,1))]),s[37]||(s[37]=n("h3",null,"4. 检查收敛状态",-1)),n("div",A,[n("div",k,[s[17]||(s[17]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[18]||(s[18]=t(`<pre><code><span class="cm"># 检查是否收敛（输出包含 &quot;reached required&quot; 表示收敛）</span>
<span class="fn2">grep</span> <span class="st">&quot;reached required accuracy&quot;</span> OUTCAR
<span class="cm"># 成功输出: reached required accuracy - stopping structural energy minimisation</span>

<span class="cm"># 检查电子步收敛</span>
<span class="fn2">grep</span> <span class="st">&quot;EDIFF&quot;</span> OUTCAR

<span class="cm"># 查看离子步数</span>
<span class="fn2">grep</span> <span class="st">&quot;FREE ENERGIE&quot;</span> OUTCAR | <span class="fn2">wc</span> -l</code></pre>`,1))]),s[38]||(s[38]=n("div",{class:"ib tip"},[n("strong",null,"收敛判断："),l("看到 "),n("code",null,"reached required accuracy"),l(" 表示计算成功收敛。")],-1)),s[39]||(s[39]=n("h3",null,"5. 检查计算状态",-1)),n("div",y,[n("div",E,[s[19]||(s[19]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[3]||(s[3]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[20]||(s[20]=t(`<pre><code><span class="cm"># 检查是否有错误</span>
<span class="fn2">grep</span> -i <span class="st">&quot;error\\|warning\\|abort&quot;</span> OUTCAR

<span class="cm"># 查看计算时间</span>
<span class="fn2">grep</span> <span class="st">&quot;Total CPU time&quot;</span> OUTCAR

<span class="cm"># 查看并行效率</span>
<span class="fn2">grep</span> <span class="st">&quot;LOOP:&quot;</span> OUTCAR | <span class="fn2">tail</span> -5

<span class="cm"># 查看 K 点信息</span>
<span class="fn2">grep</span> <span class="st">&quot;NKPTS&quot;</span> OUTCAR | <span class="fn2">head</span> -1</code></pre>`,1))]),s[40]||(s[40]=t(`<h2>OSZICAR 详解</h2><p>OSZICAR 记录每次迭代的简要信息，用于监控收敛过程。</p><h3>1. 文件格式</h3><div class="cb"><div class="ch"><span class="la">OSZICAR</span><span class="fn">示例内容</span></div><pre><code><span class="cm"># 列说明: N  E  dE  dep  dep2  ncg  rms  rms(cg)</span>
   1  F= -.156234E+03 E0= -.156234E+03  d E =-.156234E+03  mag=     0.0000
   2  F= -.156456E+03 E0= -.156456E+03  d E =-.222000E-01  mag=     0.0000
   3  F= -.156467E+03 E0= -.156467E+03  d E =-.110000E-02  mag=     0.0000
   4  F= -.156468E+03 E0= -.156468E+03  d E =-.100000E-04  mag=     0.0000
   5 F= -.156468E+03 E0= -.156468E+03  d E =-.980000E-06  mag=     0.0000</code></pre></div><table class="tb"><thead><tr><th>列</th><th>含义</th></tr></thead><tbody><tr><td>N</td><td>离子步数（或电子步数）</td></tr><tr><td>F</td><td>总能量</td></tr><tr><td>E0</td><td>无熵校正能量</td></tr><tr><td>d E</td><td>能量变化</td></tr><tr><td>mag</td><td>总磁矩</td></tr></tbody></table><h3>2. 绘制收敛曲线</h3>`,6)),n("div",T,[n("div",R,[s[21]||(s[21]=n("span",{class:"la"},"python",-1)),s[22]||(s[22]=n("span",{class:"fn"},"plot_convergence.py",-1)),n("button",{class:"cpb",onClick:s[4]||(s[4]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[23]||(s[23]=t(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 OSZICAR</span>
<span class="kw">def</span> <span class="fn2">read_oszicar</span>(filename=<span class="st">&#39;OSZICAR&#39;</span>):
    energies = []
    <span class="kw">with</span> <span class="fn2">open</span>(filename) <span class="kw">as</span> f:
        <span class="kw">for</span> line <span class="kw">in</span> f:
            <span class="kw">if</span> line.startswith(<span class="st">&#39; &#39;</span>) <span class="kw">and</span> <span class="st">&#39;F=&#39;</span> <span class="kw">in</span> line:
                e = <span class="fn2">float</span>(line.split(<span class="st">&#39;F=&#39;</span>)[<span class="nu">1</span>].split()[<span class="nu">0</span>])
                energies.append(e)
    <span class="kw">return</span> np.array(energies)

energies = <span class="fn2">read_oszicar</span>()

<span class="cm"># 绘制收敛曲线</span>
fig, (ax1, ax2) = plt.subplots(<span class="nu">2</span>, <span class="nu">1</span>, figsize=(<span class="nu">8</span>, <span class="nu">8</span>))

<span class="cm"># 能量 vs 步数</span>
ax1.plot(energies, <span class="st">&#39;b-o&#39;</span>, markersize=<span class="nu">4</span>)
ax1.set_xlabel(<span class="st">&#39;Ion Step&#39;</span>)
ax1.set_ylabel(<span class="st">&#39;Energy (eV)&#39;</span>)
ax1.set_title(<span class="st">&#39;Energy Convergence&#39;</span>)

<span class="cm"># 能量变化 vs 步数</span>
delta = np.diff(energies)
ax2.semilogy(<span class="fn2">abs</span>(delta), <span class="st">&#39;r-s&#39;</span>, markersize=<span class="nu">4</span>)
ax2.set_xlabel(<span class="st">&#39;Ion Step&#39;</span>)
ax2.set_ylabel(<span class="st">&#39;|dE| (eV)&#39;</span>)
ax2.set_title(<span class="st">&#39;Energy Change&#39;</span>)
ax2.axhline(y=<span class="nu">1E-6</span>, color=<span class="st">&#39;g&#39;</span>, linestyle=<span class="st">&#39;--&#39;</span>, label=<span class="st">&#39;EDIFF&#39;</span>)
ax2.legend()

plt.tight_layout()
plt.savefig(<span class="st">&#39;convergence.png&#39;</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>`,1))]),s[41]||(s[41]=n("h2",null,"CONTCAR 详解",-1)),s[42]||(s[42]=n("p",null,"CONTCAR 包含优化后的最终结构，格式与 POSCAR 相同。",-1)),s[43]||(s[43]=n("h3",null,"使用注意事项",-1)),s[44]||(s[44]=n("ul",null,[n("li",null,[n("strong",null,"下一次计算"),l("：将 CONTCAR 复制为 POSCAR 继续计算")]),n("li",null,[n("strong",null,"检查晶格变化"),l("：比较初始和最终晶格常数")]),n("li",null,[n("strong",null,"检查原子位置"),l("：确认优化后的结构合理")])],-1)),n("div",x,[n("div",N,[s[24]||(s[24]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[5]||(s[5]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[25]||(s[25]=t(`<pre><code><span class="cm"># 查看优化后的晶格常数</span>
<span class="fn2">head</span> -7 CONTCAR

<span class="cm"># 比较初始和最终晶格</span>
<span class="fn2">echo</span> <span class="st">&quot;=== 初始晶格 ===&quot;</span>
<span class="fn2">sed</span> -n <span class="st">&#39;3,5p&#39;</span> POSCAR
<span class="fn2">echo</span> <span class="st">&quot;=== 最终晶格 ===&quot;</span>
<span class="fn2">sed</span> -n <span class="st">&#39;3,5p&#39;</span> CONTCAR

<span class="cm"># 计算晶格常数变化</span>
<span class="fn2">python</span> -c &quot;
<span class="kw">import</span> numpy <span class="kw">as</span> np
a_init = np.linalg.norm([<span class="fn2">float</span>(x) <span class="kw">for</span> x <span class="kw">in</span> <span class="fn2">open</span>(<span class="st">&#39;POSCAR&#39;</span>).readlines()[<span class="nu">2</span>].split()])
a_final = np.linalg.norm([<span class="fn2">float</span>(x) <span class="kw">for</span> x <span class="kw">in</span> <span class="fn2">open</span>(<span class="st">&#39;CONTCAR&#39;</span>).readlines()[<span class="nu">2</span>].split()])
<span class="fn2">print</span>(f<span class="st">&#39;晶格变化: {(a_final-a_init)/a_init*100:.2f}%&#39;</span>)
&quot;</code></pre>`,1))]),s[45]||(s[45]=t(`<h2>DOSCAR 详解</h2><p>DOSCAR 包含态密度数据，用于分析电子结构。</p><h3>1. 文件格式</h3><div class="cb"><div class="ch"><span class="la">DOSCAR</span><span class="fn">格式说明</span></div><pre><code><span class="cm"># 文件结构</span>
Line 1: 原子数
Line 2-5: 头部信息
Line 6: NEDOS EMIN EMAX EFERMI SPIN
Line 7-NEDOS+6: 能量 DOS(上) DOS(下) 积分DOS(上) 积分DOS(下)
<span class="cm"># 后续是每个原子的分波 DOS</span></code></pre></div><h3>2. 提取和绘制 DOS</h3>`,5)),n("div",v,[n("div",U,[s[26]||(s[26]=n("span",{class:"la"},"python",-1)),s[27]||(s[27]=n("span",{class:"fn"},"plot_dos.py",-1)),n("button",{class:"cpb",onClick:s[6]||(s[6]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[28]||(s[28]=t(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 DOSCAR</span>
<span class="kw">def</span> <span class="fn2">read_doscar</span>(filename=<span class="st">&#39;DOSCAR&#39;</span>):
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
    dos_down = dos_data[:, <span class="nu">2</span>] <span class="kw">if</span> dos_data.shape[<span class="nu">1</span>] &gt; <span class="nu">2</span> <span class="kw">else</span> <span class="kw">None</span>
    
    <span class="kw">return</span> energy, dos_up, dos_down, efermi

energy, dos_up, dos_down, ef = <span class="fn2">read_doscar</span>()

<span class="cm"># 绘制 DOS</span>
fig, ax = plt.subplots(figsize=(<span class="nu">8</span>, <span class="nu">6</span>))

ax.plot(energy, dos_up, <span class="st">&#39;b-&#39;</span>, label=<span class="st">&#39;Spin up&#39;</span>, lw=<span class="nu">1.5</span>)
<span class="kw">if</span> dos_down <span class="kw">is not None</span>:
    ax.plot(energy, -dos_down, <span class="st">&#39;r-&#39;</span>, label=<span class="st">&#39;Spin down&#39;</span>, lw=<span class="nu">1.5</span>)
    ax.fill_between(energy, dos_down, alpha=<span class="nu">0.3</span>, color=<span class="st">&#39;r&#39;</span>)

ax.fill_between(energy, dos_up, alpha=<span class="nu">0.3</span>, color=<span class="st">&#39;b&#39;</span>)
ax.axvline(x=<span class="nu">0</span>, color=<span class="st">&#39;k&#39;</span>, ls=<span class="st">&#39;--&#39;</span>, lw=<span class="nu">1</span>, label=<span class="st">&#39;Fermi level&#39;</span>)
ax.set_xlabel(<span class="st">&#39;Energy - E<sub>F</sub> (eV)&#39;</span>)
ax.set_ylabel(<span class="st">&#39;DOS (states/eV)&#39;</span>)
ax.set_xlim(-<span class="nu">5</span>, <span class="nu">5</span>)
ax.legend()

<span class="cm"># 计算带隙</span>
<span class="kw">if</span> dos_up[energy &gt; <span class="nu">0</span>].<span class="fn2">min</span>() &lt; <span class="nu">0.01</span>:
    cb = energy[energy &gt; <span class="nu">0</span>][dos_up[energy &gt; <span class="nu">0</span>] &gt; <span class="nu">0.01</span>][<span class="nu">0</span>]
    vb = energy[energy &lt; <span class="nu">0</span>][dos_up[energy &lt; <span class="nu">0</span>] &gt; <span class="nu">0.01</span>][-<span class="nu">1</span>]
    ax.annotate(<span class="st">&#39;&#39;</span>, xy=(cb, <span class="nu">0</span>), xytext=(vb, <span class="nu">0</span>),
                arrowprops=dict(arrowstyle=<span class="st">&#39;&lt;-&gt;&#39;</span>, color=<span class="st">&#39;green&#39;</span>, lw=<span class="nu">2</span>))
    ax.text((cb+vb)/<span class="nu">2</span>, <span class="nu">0.5</span>, f<span class="st">&#39;Gap={cb-vb:.2f} eV&#39;</span>, ha=<span class="st">&#39;center&#39;</span>, color=<span class="st">&#39;green&#39;</span>)

plt.savefig(<span class="st">&#39;dos.png&#39;</span>, dpi=<span class="nu">150</span>, bbox_inches=<span class="st">&#39;tight&#39;</span>)
plt.show()</code></pre>`,1))]),s[46]||(s[46]=t(`<h2>EIGENVAL 详解</h2><p>EIGENVAL 包含本征值数据，用于绘制能带结构。</p><h3>文件格式</h3><div class="cb"><div class="ch"><span class="la">EIGENVAL</span><span class="fn">格式说明</span></div><pre><code><span class="cm"># 文件结构</span>
Line 1-4: 头部信息
Line 5: NEDOS NKPTS NBANDS (能量点数, K点数, 能带数)
Line 6: 空行
<span class="cm"># 重复以下结构（每个 K 点）：</span>
Line: kx ky kz weight
Line: band_index energy occupancy
<span class="cm"># ... (NBANDS 行)</span></code></pre></div><h2>计算成功判断标准</h2><h3>1. 结构优化成功标志</h3><table class="tb"><thead><tr><th>检查项</th><th>成功标志</th><th>检查命令</th></tr></thead><tbody><tr><td>收敛</td><td>输出 &quot;reached required accuracy&quot;</td><td><code>grep &quot;reached required&quot; OUTCAR</code></td></tr><tr><td>力</td><td>最大力 &lt; 0.02 eV/Å</td><td><code>grep &quot;TOTAL-FORCE&quot; OUTCAR</code></td></tr><tr><td>压力</td><td>外部压力 &lt; 1 kbar</td><td><code>grep &quot;external pressure&quot; OUTCAR</code></td></tr><tr><td>能量</td><td>能量变化 &lt; EDIFF</td><td><code>grep &quot;d E&quot; OSZICAR</code></td></tr></tbody></table><h3>2. 常见失败模式</h3><table class="tb"><thead><tr><th>问题</th><th>症状</th><th>解决方案</th></tr></thead><tbody><tr><td>SCF 不收敛</td><td>电子步达到 NELM</td><td>调整 MAGMOM、ISMEAR</td></tr><tr><td>结构发散</td><td>能量持续增大</td><td>减小 POTIM</td></tr><tr><td>原子跑飞</td><td>能量 ~10^6 eV</td><td>检查初始结构</td></tr><tr><td>内存不足</td><td>Killed</td><td>使用 LREAL=Auto</td></tr></tbody></table><h3>3. 完整检查脚本</h3>`,10)),n("div",S,[n("div",$,[s[29]||(s[29]=n("span",{class:"la"},"bash",-1)),s[30]||(s[30]=n("span",{class:"fn"},"check_calc.sh",-1)),n("button",{class:"cpb",onClick:s[7]||(s[7]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[31]||(s[31]=t(`<pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># 完整的计算状态检查</span>

<span class="fn2">echo</span> <span class="st">&quot;=== VASP 计算状态检查 ===&quot;</span>
<span class="fn2">echo</span> <span class="st">&quot;目录: $(pwd)&quot;</span>
<span class="fn2">echo</span>

<span class="cm"># 1. 检查文件存在</span>
<span class="fn2">echo</span> <span class="st">&quot;[1] 文件检查&quot;</span>
<span class="kw">for</span> f <span class="kw">in</span> OUTCAR OSZICAR CONTCAR; <span class="kw">do</span>
    [ -f $f ] &amp;&amp; <span class="fn2">echo</span> <span class="st">&quot;  ✓ $f 存在&quot;</span> || <span class="fn2">echo</span> <span class="st">&quot;  ✗ $f 缺失&quot;</span>
<span class="kw">done</span>
<span class="fn2">echo</span>

<span class="cm"># 2. 检查收敛</span>
<span class="fn2">echo</span> <span class="st">&quot;[2] 收敛状态&quot;</span>
<span class="kw">if</span> <span class="fn2">grep</span> -q <span class="st">&quot;reached required accuracy&quot;</span> OUTCAR; <span class="kw">then</span>
    <span class="fn2">echo</span> <span class="st">&quot;  ✓ 计算收敛&quot;</span>
<span class="kw">else</span>
    <span class="fn2">echo</span> <span class="st">&quot;  ✗ 计算未收敛&quot;</span>
<span class="kw">fi</span>
<span class="fn2">echo</span>

<span class="cm"># 3. 能量信息</span>
<span class="fn2">echo</span> <span class="st">&quot;[3] 能量信息&quot;</span>
e=$(<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $5}&#39;</span>)
natoms=$(<span class="fn2">grep</span> <span class="st">&quot;NIONS&quot;</span> OUTCAR | <span class="fn2">head</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $NF}&#39;</span>)
<span class="fn2">echo</span> <span class="st">&quot;  总能量: $e eV&quot;</span>
<span class="fn2">echo</span> <span class="st">&quot;  原子数: $natoms&quot;</span>
<span class="fn2">echo</span> <span class="st">&quot;  每原子: $(echo &quot;$e / $natoms&quot; | bc -l) eV/atom&quot;</span>
<span class="fn2">echo</span>

<span class="cm"># 4. 力信息</span>
<span class="fn2">echo</span> <span class="st">&quot;[4] 力信息&quot;</span>
max_force=$(<span class="fn2">grep</span> <span class="st">&quot;TOTAL-FORCE&quot;</span> OUTCAR -A <span class="nu">100</span> | <span class="fn2">grep</span> -v <span class="st">&quot;TOTAL\\|---&quot;</span> | <span class="fn2">awk</span> <span class="st">&#39;{print sqrt($4*$4+$5*$5+$6*$6)}&#39;</span> | <span class="fn2">sort</span> -n | <span class="fn2">tail</span> -1)
<span class="fn2">echo</span> <span class="st">&quot;  最大力: $max_force eV/Å&quot;</span>
<span class="fn2">echo</span>

<span class="cm"># 5. 压力信息</span>
<span class="fn2">echo</span> <span class="st">&quot;[5] 压力信息&quot;</span>
pressure=$(<span class="fn2">grep</span> <span class="st">&quot;external pressure&quot;</span> OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $4}&#39;</span>)
<span class="fn2">echo</span> <span class="st">&quot;  外部压力: $pressure kbar&quot;</span>
<span class="fn2">echo</span>

<span class="cm"># 6. 错误检查</span>
<span class="fn2">echo</span> <span class="st">&quot;[6] 错误检查&quot;</span>
errors=$(<span class="fn2">grep</span> -i <span class="st">&quot;error\\|warning\\|abort&quot;</span> OUTCAR | <span class="fn2">wc</span> -l)
<span class="kw">if</span> [ $errors -eq <span class="nu">0</span> ]; <span class="kw">then</span>
    <span class="fn2">echo</span> <span class="st">&quot;  ✓ 无错误&quot;</span>
<span class="kw">else</span>
    <span class="fn2">echo</span> <span class="st">&quot;  ⚠ 发现 $errors 个错误/警告&quot;</span>
    <span class="fn2">grep</span> -i <span class="st">&quot;error\\|warning\\|abort&quot;</span> OUTCAR | <span class="fn2">head</span> -5
<span class="kw">fi</span>
<span class="fn2">echo</span>

<span class="fn2">echo</span> <span class="st">&quot;=== 检查完成 ===&quot;</span></code></pre>`,1))]),s[47]||(s[47]=n("h2",null,"收敛性测试",-1)),s[48]||(s[48]=n("p",null,"收敛性测试确保计算参数足够精确。",-1)),n("div",V,[n("div",I,[s[32]||(s[32]=n("span",{class:"la"},"bash",-1)),s[33]||(s[33]=n("span",{class:"fn"},"encut_test.sh",-1)),n("button",{class:"cpb",onClick:s[8]||(s[8]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[34]||(s[34]=t(`<pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># ENCUT 收敛测试</span>

<span class="kw">for</span> encut <span class="kw">in</span> <span class="nu">200 250 300 350 400 450 500</span>; <span class="kw">do</span>
    <span class="fn2">mkdir</span> ENCUT_\${encut}
    <span class="fn2">cp</span> POSCAR KPOINTS POTCAR ENCUT_\${encut}/
    <span class="fn2">sed</span> <span class="st">&quot;s/ENCUT.*/ENCUT = \${encut}/&quot;</span> INCAR &gt; ENCUT_\${encut}/INCAR
    <span class="fn2">cd</span> ENCUT_\${encut}; <span class="fn2">mpirun</span> -np <span class="nu">4</span> vasp_std; <span class="fn2">cd</span> ..
<span class="kw">done</span>

<span class="cm"># 提取并显示结果</span>
<span class="fn2">echo</span> <span class="st">&quot;ENCUT(eV)    Energy(eV)    dE(meV/atom)&quot;</span>
<span class="fn2">echo</span> <span class="st">&quot;----------------------------------------&quot;</span>

prev_e=<span class="nu">0</span>
<span class="kw">for</span> encut <span class="kw">in</span> <span class="nu">200 250 300 350 400 450 500</span>; <span class="kw">do</span>
    e=$(<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> ENCUT_\${encut}/OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $5}&#39;</span>)
    natoms=$(<span class="fn2">grep</span> <span class="st">&quot;NIONS&quot;</span> ENCUT_\${encut}/OUTCAR | <span class="fn2">head</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $NF}&#39;</span>)
    de=$(<span class="fn2">echo</span> <span class="st">&quot;($e - $prev_e) / $natoms * 1000&quot;</span> | <span class="fn2">bc</span> -l)
    <span class="fn2">printf</span> <span class="st">&quot;%-12s %12.6f %12.3f\\n&quot;</span> <span class="st">&quot;$encut&quot;</span> <span class="st">&quot;$e&quot;</span> <span class="st">&quot;$de&quot;</span>
    prev_e=$e
<span class="kw">done</span></code></pre>`,1))]),s[49]||(s[49]=n("div",{class:"ib tip"},[n("strong",null,"判断标准："),l("相邻 ENCUT 能量差 < 1 meV/atom 时收敛。")],-1))])}const _=d(g,[["render",L]]);export{_ as default};
