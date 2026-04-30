import{_ as o,o as r,c as u,a as n,e,w as k,h as c,f as l,g as v}from"./index-Bd4xWfQT.js";const f={name:"TasksView",methods:{copy(t){const d=t.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(d).then(()=>{t.target.textContent="已复制!",t.target.classList.add("ok"),setTimeout(()=>{t.target.textContent="复制",t.target.classList.remove("ok")},2e3)})}}},m={class:"sec active"},S={class:"bread"},b={class:"cb"},w={class:"ch"},A={class:"cb"},C={class:"ch"},I={class:"cb"},R={class:"ch"},E={class:"cb"},O={class:"ch"},N={class:"cb"},T={class:"ch"},y={class:"cb"},g={class:"ch"},x={class:"cb"},D={class:"ch"},P={class:"cb"},M={class:"ch"},F={class:"cb"},V={class:"ch"},G={class:"cb"},K={class:"ch"},q={class:"cb"},L={class:"ch"},U={class:"cb"},W={class:"ch"},B={class:"cb"},Y={class:"ch"},X={class:"cb"},H={class:"ch"};function h(t,s,d,j,Z,a){const i=v("router-link");return r(),u("div",m,[n("div",S,[e(i,{to:"/"},{default:k(()=>[...s[14]||(s[14]=[c("首页",-1)])]),_:1}),s[15]||(s[15]=c("/",-1)),s[16]||(s[16]=n("span",null,"计算任务",-1))]),s[58]||(s[58]=l('<h2>计算任务总览</h2><p>VASP 可以执行多种计算任务，每种任务有特定的参数设置和工作流程。</p><h3>基础计算</h3><div class="pg"><div class="pc" style="--ca:var(--blue);"><div class="pc-i">🔄</div><div class="pc-t">结构优化</div><div class="pc-d">弛豫原子位置和晶格参数</div></div><div class="pc" style="--ca:var(--green);"><div class="pc-i">📈</div><div class="pc-t">态密度 DOS</div><div class="pc-d">电子态在能量上的分布</div></div><div class="pc" style="--ca:var(--purple);"><div class="pc-i">📉</div><div class="pc-t">能带结构</div><div class="pc-d">沿高对称路径的能带色散</div></div></div><h2>结构优化</h2><p>结构优化是最基本的计算任务，目的是找到能量最低的原子构型。</p><h3>1. 何时需要结构优化</h3><ul><li>从实验结构或文献结构开始计算</li><li>构建了新的表面或缺陷结构</li><li>需要计算准确的晶格参数</li><li>后续计算（DOS、能带等）需要在优化结构上进行</li></ul><h3>2. 完整输入文件</h3><h4>INCAR</h4>',10)),n("div",b,[n("div",w,[s[17]||(s[17]=n("span",{class:"la"},"INCAR",-1)),s[18]||(s[18]=n("span",{class:"fn"},"体相结构优化",-1)),n("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[19]||(s[19]=l(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si bulk relaxation</span>

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
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>             <span class="cm">; 展宽宽度 (eV)</span></code></pre>`,1))]),s[59]||(s[59]=n("h4",null,"POSCAR",-1)),n("div",A,[n("div",C,[s[20]||(s[20]=n("span",{class:"la"},"POSCAR",-1)),s[21]||(s[21]=n("span",{class:"fn"},"Si 金刚石",-1)),n("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[22]||(s[22]=l(`<pre><code><span class="vr">Si diamond</span>                    <span class="cm">; 注释行</span>
<span class="nu">1.0</span>                           <span class="cm">; 缩放因子</span>
<span class="nu">5.43  0.00  0.00</span>             <span class="cm">; 晶格矢量 a</span>
<span class="nu">0.00  5.43  0.00</span>             <span class="cm">; 晶格矢量 b</span>
<span class="nu">0.00  0.00  5.43</span>             <span class="cm">; 晶格矢量 c</span>
<span class="vr">Si</span>                             <span class="cm">; 元素符号</span>
<span class="nu">2</span>                              <span class="cm">; 原子数</span>
<span class="kw">Direct</span>                         <span class="cm">; 分数坐标</span>
<span class="nu">0.00  0.00  0.00</span>             <span class="cm">; Si 原子 1</span>
<span class="nu">0.25  0.25  0.25</span>             <span class="cm">; Si 原子 2</span></code></pre>`,1))]),s[60]||(s[60]=n("h4",null,"KPOINTS",-1)),n("div",I,[n("div",R,[s[23]||(s[23]=n("span",{class:"la"},"KPOINTS",-1)),s[24]||(s[24]=n("span",{class:"fn"},"Gamma 中心",-1)),n("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[25]||(s[25]=l(`<pre><code><span class="vr">Automatic mesh</span>
<span class="nu">0</span>
<span class="kw">Gamma</span>
<span class="nu">6  6  6</span>                <span class="cm">; K 点网格 (N_k × a ≈ 30)</span>
<span class="nu">0.0  0.0  0.0</span>         <span class="cm">; 偏移</span></code></pre>`,1))]),s[61]||(s[61]=l('<h3>3. ISIF 参数详解</h3><table class="tb"><thead><tr><th>ISIF</th><th>离子位置</th><th>晶格体积</th><th>晶格形状</th><th>适用场景</th></tr></thead><tbody><tr><td><code>2</code></td><td>✓</td><td>✗</td><td>✗</td><td>表面、分子吸附、固定晶格</td></tr><tr><td><code>3</code></td><td>✓</td><td>✓</td><td>✓</td><td>体相优化（最常用）</td></tr><tr><td><code>4</code></td><td>✓</td><td>✗</td><td>✓</td><td>固定体积、优化形状</td></tr><tr><td><code>5</code></td><td>✗</td><td>✓</td><td>✓</td><td>仅优化晶格、固定离子</td></tr></tbody></table><h3>4. 结果验证</h3>',3)),n("div",E,[n("div",O,[s[26]||(s[26]=n("span",{class:"la"},"bash",-1)),s[27]||(s[27]=n("span",{class:"fn"},"验证收敛",-1)),n("button",{class:"cpb",onClick:s[3]||(s[3]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[28]||(s[28]=l(`<pre><code><span class="cm"># 检查是否收敛</span>
<span class="fn2">grep</span> <span class="st">&quot;reached required accuracy&quot;</span> OUTCAR

<span class="cm"># 查看最终能量</span>
<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 查看最大力</span>
<span class="fn2">grep</span> <span class="st">&quot;TOTAL-FORCE&quot;</span> OUTCAR -A <span class="nu">4</span>

<span class="cm"># 查看外部压力</span>
<span class="fn2">grep</span> <span class="st">&quot;external pressure&quot;</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 查看优化后的晶格常数</span>
<span class="fn2">head</span> -7 CONTCAR</code></pre>`,1))]),s[62]||(s[62]=l('<div class="ib tip"><strong>收敛标准：</strong>最大力 &lt; 0.02 eV/Å，外部压力 &lt; 1 kbar 表示优化收敛良好。</div><h2>态密度 DOS 计算</h2><p>DOS 计算需要两步：① 结构优化 ② 静态计算（密集 k 点）</p><h3>1. 计算流程</h3><div class="fc"><div class="fn2-node s">结构优化（获取 CONTCAR）</div><div class="fa"></div><div class="fn2-node p">复制 CONTCAR → DOS 计算目录</div><div class="fa"></div><div class="fn2-node p">设置密集 K 点（12×12×12）</div><div class="fa"></div><div class="fn2-node p">运行静态计算</div><div class="fa"></div><div class="fn2-node e">处理 DOSCAR 数据</div></div><h3>2. DOS 计算输入文件</h3>',6)),n("div",N,[n("div",T,[s[29]||(s[29]=n("span",{class:"la"},"INCAR",-1)),s[30]||(s[30]=n("span",{class:"fn"},"DOS 静态计算",-1)),n("button",{class:"cpb",onClick:s[4]||(s[4]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[31]||(s[31]=l(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si DOS calculation</span>

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
<span class="kw">LCHARG</span>   = <span class="nu">.TRUE.</span>            <span class="cm">; 保留电荷密度</span></code></pre>`,1))]),n("div",y,[n("div",g,[s[32]||(s[32]=n("span",{class:"la"},"KPOINTS",-1)),s[33]||(s[33]=n("span",{class:"fn"},"密集 K 点",-1)),n("button",{class:"cpb",onClick:s[5]||(s[5]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[34]||(s[34]=l(`<pre><code><span class="vr">DOS k-points</span>
<span class="nu">0</span>
<span class="kw">Gamma</span>
<span class="nu">12  12  12</span>              <span class="cm">; DOS 需要更密集的 K 点</span>
<span class="nu">0.0  0.0  0.0</span></code></pre>`,1))]),s[63]||(s[63]=n("div",{class:"ib note"},[n("strong",null,"ISMEAR 选择："),c("绝缘体/半导体用 -5（四面体），金属用 0（Gaussian）配合 SIGMA=0.05。")],-1)),s[64]||(s[64]=n("h3",null,"3. 处理 DOS 数据",-1)),n("div",x,[n("div",D,[s[35]||(s[35]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[6]||(s[6]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[36]||(s[36]=l(`<pre><code><span class="cm"># 使用 VASPKIT 提取 DOS</span>
<span class="fn2">vaspkit</span>
<span class="cm"># 3 → DOS Analysis</span>
<span class="cm"># 1 → Generate Total DOS</span>

<span class="cm"># 或使用 pymatgen</span>
<span class="fn2">python</span> -c &quot;
<span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Vasprun
vr = Vasprun(<span class="st">&#39;vasprun.xml&#39;</span>, parse_dos=<span class="kw">True</span>)
dos = vr.complete_dos
<span class="fn2">print</span>(f<span class="st">&#39;带隙: {dos.get_band_gap()[\\&quot;energy\\&quot;]:.3f} eV&#39;</span>)
&quot;</code></pre>`,1))]),s[65]||(s[65]=l('<h2>能带结构计算</h2><p>能带计算需要：① 静态计算生成 WAVECAR ② 沿高对称路径非自洽计算</p><h3>1. 计算流程</h3><div class="fc"><div class="fn2-node s">结构优化（获取 CONTCAR）</div><div class="fa"></div><div class="fn2-node p">静态计算（生成 WAVECAR）</div><div class="fa"></div><div class="fn2-node p">生成 K 点路径</div><div class="fa"></div><div class="fn2-node p">非自洽计算（ICHARG=11）</div><div class="fa"></div><div class="fn2-node e">处理 EIGENVAL 数据</div></div><h3>2. 第一步：静态计算</h3>',5)),n("div",P,[n("div",M,[s[37]||(s[37]=n("span",{class:"la"},"INCAR",-1)),s[38]||(s[38]=n("span",{class:"fn"},"能带前的静态计算",-1)),n("button",{class:"cpb",onClick:s[7]||(s[7]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[39]||(s[39]=l(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si static for band</span>

<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>

<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>

<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 必须输出 WAVECAR</span>
<span class="kw">LWAVE</span>    = <span class="nu">.TRUE.</span></code></pre>`,1))]),s[66]||(s[66]=n("h3",null,"3. 第二步：能带计算",-1)),s[67]||(s[67]=n("h4",null,"生成 K 点路径",-1)),n("div",F,[n("div",V,[s[40]||(s[40]=n("span",{class:"la"},"bash",-1)),s[41]||(s[41]=n("span",{class:"fn"},"使用 vaspkit 生成",-1)),n("button",{class:"cpb",onClick:s[8]||(s[8]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[42]||(s[42]=l(`<pre><code><span class="cm"># 方法 1：使用 vaspkit 自动生成</span>
<span class="fn2">vaspkit</span>
<span class="cm"># 2 → Material Science Utilities</span>
<span class="cm"># 2 → K-Path Generator</span>
<span class="cm"># 1 → Generate K-Path for Band Structure</span>

<span class="cm"># 自动生成带标签的 KPOINTS</span></code></pre>`,1))]),s[68]||(s[68]=n("h4",null,"手动编写 KPOINTS（以 Si 为例）",-1)),n("div",G,[n("div",K,[s[43]||(s[43]=n("span",{class:"la"},"KPOINTS",-1)),s[44]||(s[44]=n("span",{class:"fn"},"Line-mode",-1)),n("button",{class:"cpb",onClick:s[9]||(s[9]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[45]||(s[45]=l(`<pre><code><span class="vr">k-points along high symmetry lines</span>
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
<span class="nu">0.000  0.000  0.000</span></code></pre>`,1))]),s[69]||(s[69]=n("div",{class:"ib warn"},[n("strong",null,"注意："),c("Line-mode KPOINTS 需要空行分隔每条线段！")],-1)),s[70]||(s[70]=n("h4",null,"能带计算 INCAR",-1)),n("div",q,[n("div",L,[s[46]||(s[46]=n("span",{class:"la"},"INCAR",-1)),s[47]||(s[47]=n("span",{class:"fn"},"能带非自洽计算",-1)),n("button",{class:"cpb",onClick:s[10]||(s[10]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[48]||(s[48]=l(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si band structure</span>

<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>

<span class="cm"># 关键：非自洽计算</span>
<span class="kw">ICHARG</span>   = <span class="nu">11</span>               <span class="cm">; 从 WAVECAR 读取电荷密度</span>

<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>

<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 输出投影能带</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span></code></pre>`,1))]),s[71]||(s[71]=l('<h3>4. 高对称点参考</h3><table class="tb"><thead><tr><th>晶系</th><th>常用路径</th></tr></thead><tbody><tr><td>立方 (cubic)</td><td>Γ → X → M → Γ → R → X</td></tr><tr><td>四方 (tetragonal)</td><td>Γ → X → M → Γ → Z → R → A</td></tr><tr><td>六方 (hexagonal)</td><td>Γ → M → K → Γ → A → L</td></tr><tr><td>正交 (orthorhombic)</td><td>Γ → X → S → Y → Γ → Z → U</td></tr></tbody></table><h3>5. 处理能带数据</h3>',3)),n("div",U,[n("div",W,[s[49]||(s[49]=n("span",{class:"la"},"python",-1)),s[50]||(s[50]=n("span",{class:"fn"},"plot_band.py",-1)),n("button",{class:"cpb",onClick:s[11]||(s[11]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[51]||(s[51]=l(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 EIGENVAL</span>
<span class="kw">def</span> <span class="fn2">read_eigenval</span>():
    <span class="kw">with</span> <span class="fn2">open</span>(<span class="st">&#39;EIGENVAL&#39;</span>) <span class="kw">as</span> f:
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
    <span class="kw">with</span> <span class="fn2">open</span>(<span class="st">&#39;OUTCAR&#39;</span>) <span class="kw">as</span> f:
        <span class="kw">for</span> line <span class="kw">in</span> f:
            <span class="kw">if</span> <span class="st">&#39;E-fermi&#39;</span> <span class="kw">in</span> line:
                <span class="kw">return</span> <span class="fn2">float</span>(line.split()[<span class="nu">2</span>])

kpts, bands = <span class="fn2">read_eigenval</span>()
ef = <span class="fn2">get_efermi</span>()

<span class="cm"># 计算 k 距离</span>
kdist = np.concatenate([[<span class="nu">0</span>], np.cumsum(np.linalg.norm(np.diff(kpts, axis=<span class="nu">0</span>), axis=<span class="nu">1</span>))])

<span class="cm"># 绘图</span>
fig, ax = plt.subplots(figsize=(<span class="nu">8</span>, <span class="nu">6</span>))
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn2">range</span>(bands.shape[<span class="nu">1</span>]):
    ax.plot(kdist, bands[:, i] - ef, <span class="st">&#39;b-&#39;</span>, lw=<span class="nu">0.8</span>)

ax.axhline(<span class="nu">0</span>, color=<span class="st">&#39;r&#39;</span>, ls=<span class="st">&#39;--&#39;</span>, label=<span class="st">&#39;E<sub>F</sub>&#39;</span>)
ax.set_xlabel(<span class="st">&#39;K-path&#39;</span>)
ax.set_ylabel(<span class="st">&#39;Energy - E<sub>F</sub> (eV)&#39;</span>)
ax.set_ylim(-<span class="nu">5</span>, <span class="nu">5</span>)
ax.legend()
plt.savefig(<span class="st">&#39;band.png&#39;</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>`,1))]),s[72]||(s[72]=n("h2",null,"静态计算",-1)),s[73]||(s[73]=n("p",null,"静态计算用于在固定结构上计算电子性质，不改变原子位置。",-1)),s[74]||(s[74]=n("h3",null,"INC AR 设置",-1)),n("div",B,[n("div",Y,[s[52]||(s[52]=n("span",{class:"la"},"INCAR",-1)),s[53]||(s[53]=n("span",{class:"fn"},"静态计算",-1)),n("button",{class:"cpb",onClick:s[12]||(s[12]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[54]||(s[54]=l(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si static calculation</span>

<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>

<span class="kw">IBRION</span>   = <span class="nu">-1</span>               <span class="cm">; 不动离子</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>                <span class="cm">; 无离子步</span>

<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>`,1))]),s[75]||(s[75]=l('<h2>任务类型对比</h2><table class="tb"><thead><tr><th>任务类型</th><th>IBRION</th><th>NSW</th><th>ISIF</th><th>ISMEAR</th><th>输出</th></tr></thead><tbody><tr><td>结构优化</td><td>1 或 2</td><td>&gt;0</td><td>2 或 3</td><td>0 或 1</td><td>CONTCAR</td></tr><tr><td>静态计算</td><td>-1</td><td>0</td><td>-</td><td>0/-5</td><td>DOSCAR</td></tr><tr><td>DOS 计算</td><td>-1</td><td>0</td><td>-</td><td>-5</td><td>DOSCAR</td></tr><tr><td>能带计算</td><td>-1</td><td>0</td><td>-</td><td>0</td><td>EIGENVAL</td></tr></tbody></table><h2>完整工作流示例</h2>',3)),n("div",X,[n("div",H,[s[55]||(s[55]=n("span",{class:"la"},"bash",-1)),s[56]||(s[56]=n("span",{class:"fn"},"workflow.sh",-1)),n("button",{class:"cpb",onClick:s[13]||(s[13]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[57]||(s[57]=l(`<pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># Si 完整计算工作流</span>

<span class="fn2">echo</span> <span class="st">&quot;=== 步骤 1: 结构优化 ===&quot;</span>
<span class="fn2">mkdir</span> 01_relax &amp;&amp; <span class="fn2">cd</span> 01_relax
<span class="fn2">cp</span> ../POSCAR_init POSCAR
<span class="fn2">cp</span> ../POTCAR ../KPOINTS ./
<span class="fn2">cat</span> &gt; INCAR &lt;&lt; EOF
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

<span class="fn2">echo</span> <span class="st">&quot;=== 步骤 2: DOS 计算 ===&quot;</span>
<span class="fn2">mkdir</span> 02_dos &amp;&amp; <span class="fn2">cd</span> 02_dos
<span class="fn2">cp</span> ../01_relax/CONTCAR POSCAR
<span class="fn2">cp</span> ../POTCAR ../KPOINTS_dos KPOINTS
<span class="fn2">cat</span> &gt; INCAR &lt;&lt; EOF
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

<span class="fn2">echo</span> <span class="st">&quot;=== 步骤 3: 能带计算 ===&quot;</span>
<span class="fn2">mkdir</span> 03_band &amp;&amp; <span class="fn2">cd</span> 03_band
<span class="fn2">cp</span> ../01_relax/CONTCAR POSCAR
<span class="fn2">cp</span> ../01_relax/WAVECAR ./
<span class="fn2">cp</span> ../POTCAR ../KPOINTS_band KPOINTS
<span class="fn2">cat</span> &gt; INCAR &lt;&lt; EOF
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

<span class="fn2">echo</span> <span class="st">&quot;=== 计算完成 ===&quot;</span></code></pre>`,1))])])}const J=o(f,[["render",h]]);export{J as default};
