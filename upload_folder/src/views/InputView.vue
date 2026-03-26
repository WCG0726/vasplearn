<template>
  <div class="sec active">
    <div class="bread"><router-link to="/">首页</router-link>/<span>输入文件</span></div>
    
    <h2>VASP 输入文件总览</h2>
    <p>VASP 需要 <strong>4 个核心输入文件</strong>，正确设置这些文件是成功计算的基础。</p>

    <div class="ft">
      <div class="ft-i"><span style="color:var(--blue)">📄</span> INCAR — 控制参数（告诉 VASP 做什么）</div>
      <div class="ft-i"><span style="color:var(--green)">📄</span> POSCAR — 晶体结构（告诉 VASP 计算什么）</div>
      <div class="ft-i"><span style="color:var(--purple)">📄</span> KPOINTS — k 点网格（控制精度）</div>
      <div class="ft-i"><span style="color:var(--red)">📄</span> POTCAR — 赝势文件（定义元素）</div>
    </div>

    <div class="ib warn"><strong>注意：</strong>POTCAR 中元素的顺序必须与 POSCAR 中的元素顺序一致！</div>

    <QuickRef />

    <h2>INCAR 文件详解</h2>
    <p>INCAR 是 VASP 最核心的控制文件，决定计算类型和精度。</p>

    <h3>1. 基本结构</h3>
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">结构优化示例</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 注释以 # 或 ; 开头</span>
<span class="kw">SYSTEM</span>   = <span class="st">Si bulk optimization</span>  <span class="cm">; 计算名称</span>

<span class="cm"># 基本参数</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>              <span class="cm">; 截断能 (eV)</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>         <span class="cm">; 精度模式</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>             <span class="cm">; 电子步收敛标准</span>

<span class="cm"># 离子步参数</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>                <span class="cm">; 优化算法</span>
<span class="kw">NSW</span>      = <span class="nu">100</span>              <span class="cm">; 最大离子步数</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>                <span class="cm">; 优化类型</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.02</span>            <span class="cm">; 离子步收敛标准</span>

<span class="cm"># 展宽参数</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>                <span class="cm">; 展宽方法</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>             <span class="cm">; 展宽宽度</span></code></pre>
    </div>

    <h3>2. 参数格式规则</h3>
    <table class="tb">
      <thead><tr><th>规则</th><th>正确写法</th><th>错误写法</th></tr></thead>
      <tbody>
        <tr><td>等号两边空格</td><td><code>ENCUT = 400</code></td><td><code>ENCUT=400</code></td></tr>
        <tr><td>布尔值大写</td><td><code>.TRUE.</code></td><td><code>.true.</code></td></tr>
        <tr><td>字符串引号</td><td><code>'string'</code> 或无</td><td><code>"string"</code></td></tr>
        <tr><td>注释符号</td><td><code>#</code> 或 <code>;</code></td><td><code>//</code></td></tr>
      </tbody>
    </table>

    <h3>3. ENCUT 截断能</h3>
    <p>截断能决定平面波基组大小，是最关键的精度参数。</p>

    <table class="tb">
      <thead><tr><th>设置方式</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td><code>ENCUT = 400</code></td><td>直接指定 (eV)</td></tr>
        <tr><td><code>ENCUT = 1.3</code></td><td>乘以 ENMAX（POTCAR 中的值）</td></tr>
      </tbody>
    </table>

    <div class="ib tip"><strong>确定方法：</strong><code class="ic">grep ENMAX POTCAR</code>，设 <code class="ic">ENCUT = 1.3 × ENMAX(max)</code></div>

    <h3>4. IBRION 优化算法</h3>
    <table class="tb">
      <thead><tr><th>IBRION</th><th>方法</th><th>特点</th><th>推荐场景</th></tr></thead>
      <tbody>
        <tr><td><code>-1</code></td><td>不动</td><td>静态计算或 MD</td><td>DOS、能带等</td></tr>
        <tr><td><code>0</code></td><td>MD</td><td>分子动力学</td><td>温度效应</td></tr>
        <tr><td><code>1</code></td><td>RMM-DIIS</td><td>准牛顿法，快但不稳定</td><td>初始优化</td></tr>
        <tr><td><code>2</code></td><td>CG</td><td>共轭梯度，稳定</td><td><strong>推荐默认</strong></td></tr>
        <tr><td><code>3</code></td><td>Damped MD</td><td>阻尼 MD</td><td>特殊体系</td></tr>
      </tbody>
    </table>

    <h3>5. ISIF 优化类型</h3>
    <table class="tb">
      <thead><tr><th>ISIF</th><th>离子位置</th><th>晶格体积</th><th>晶格形状</th><th>适用</th></tr></thead>
      <tbody>
        <tr><td><code>0</code></td><td>✓</td><td>✗</td><td>✗</td><td>MD</td></tr>
        <tr><td><code>2</code></td><td>✓</td><td>✗</td><td>✗</td><td>表面、分子吸附</td></tr>
        <tr><td><code>3</code></td><td>✓</td><td>✓</td><td>✓</td><td><strong>体相优化（最常用）</strong></td></tr>
        <tr><td><code>4</code></td><td>✓</td><td>✗</td><td>✓</td><td>固定体积</td></tr>
        <tr><td><code>5</code></td><td>✗</td><td>✓</td><td>✓</td><td>仅优化晶格</td></tr>
      </tbody>
    </table>

    <div class="ib warn"><strong>重要：</strong>表面计算必须用 <code>ISIF=2</code>，否则晶格会塌陷！</div>

    <h3>6. ISMEAR 展宽方法</h3>
    <table class="tb">
      <thead><tr><th>ISMEAR</th><th>方法</th><th>适用场景</th><th>SIGMA</th></tr></thead>
      <tbody>
        <tr><td><code>-5</code></td><td>四面体法</td><td>绝缘体/半导体 DOS</td><td>自动</td></tr>
        <tr><td><code>-4</code></td><td>四面体+Blochl</td><td>金属 DOS</td><td>自动</td></tr>
        <tr><td><code>0</code></td><td>Gaussian</td><td>半导体/绝缘体</td><td>0.05</td></tr>
        <tr><td><code>1</code></td><td>MP 展宽</td><td>金属</td><td>0.2</td></tr>
        <tr><td><code>2</code></td><td>MP 改进</td><td>金属（更平滑）</td><td>0.2</td></tr>
      </tbody>
    </table>

    <h3>7. EDIFF 和 EDIFFG</h3>
    <table class="tb">
      <thead><tr><th>参数</th><th>含义</th><th>常用值</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td><code>EDIFF</code></td><td>电子步收敛</td><td>1E-6</td><td>能量变化阈值</td></tr>
        <tr><td><code>EDIFFG</code></td><td>离子步收敛</td><td>-0.02</td><td>负值=力, 正值=能量</td></tr>
      </tbody>
    </table>

    <div class="ib note"><strong>EDIFFG 解释：</strong>
      <ul>
        <li><code>EDIFFG = -0.02</code>：最大力收敛到 0.02 eV/Å</li>
        <li><code>EDIFFG = 1E-4</code>：能量变化收敛到 0.0001 eV</li>
      </ul>
    </div>

    <h3>8. 并行参数</h3>
    <table class="tb">
      <thead><tr><th>参数</th><th>说明</th><th>建议</th></tr></thead>
      <tbody>
        <tr><td><code>NPAR</code></td><td>能带并行数</td><td>设为节点数，整除总核心数</td></tr>
        <tr><td><code>KPAR</code></td><td>K 点并行数</td><td>整除 K 点数</td></tr>
        <tr><td><code>NCORE</code></td><td>每组核心数</td><td>设为每节点核心数</td></tr>
      </tbody>
    </table>

    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">并行设置（64 核，4 节点）</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 64 核 = 4 节点 × 16 核</span>
<span class="kw">NPAR</span>     = <span class="nu">4</span>                <span class="cm">; 节点数</span>
<span class="kw">KPAR</span>     = <span class="nu">2</span>                <span class="cm">; K 点并行（整除 K 点数）</span>
<span class="kw">NCORE</span>    = <span class="nu">16</span>               <span class="cm">; 每节点核心数</span></code></pre>
    </div>

    <h3>9. 性能优化参数</h3>
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">大体系优化</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 实空间投影（>50 原子推荐）</span>
<span class="kw">LREAL</span>    = <span class="st">Auto</span>             <span class="cm">; 实空间计算投影算符</span>

<span class="cm"># 电子步加速</span>
<span class="kw">ALGO</span>     = <span class="st">Fast</span>             <span class="cm">; 默认 Normal，Fast 更快</span>
<span class="kw">MAXMIX</span>   = <span class="nu">40</span>               <span class="cm">; 加速收敛</span>

<span class="cm"># I/O 优化</span>
<span class="kw">LWAVE</span>    = <span class="nu">.FALSE.</span>           <span class="cm">; 不写波函数</span>
<span class="kw">LCHARG</span>   = <span class="nu">.FALSE.</span>           <span class="cm">; 不写电荷密度</span>
<span class="kw">NWRITE</span>   = <span class="nu">0</span>                <span class="cm">; 减少输出</span></code></pre>
    </div>

    <h2>POSCAR 文件详解</h2>
    <p>POSCAR 定义晶体结构，包括晶格和原子坐标。</p>

    <h3>1. 完整格式</h3>
    <div class="cb">
      <div class="ch"><span class="la">POSCAR</span><span class="fn">格式详解</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="vr">Si diamond</span>                    <span class="cm">; 第 1 行：注释（任意文字）</span>
<span class="nu">1.0</span>                           <span class="cm">; 第 2 行：缩放因子（通常 1.0）</span>
<span class="nu">5.43  0.00  0.00</span>             <span class="cm">; 第 3 行：晶格矢量 a (×缩放因子)</span>
<span class="nu">0.00  5.43  0.00</span>             <span class="cm">; 第 4 行：晶格矢量 b</span>
<span class="nu">0.00  0.00  5.43</span>             <span class="cm">; 第 5 行：晶格矢量 c</span>
<span class="vr">Si</span>                             <span class="cm">; 第 6 行：元素符号（空格分隔）</span>
<span class="nu">2</span>                              <span class="cm">; 第 7 行：每种元素的原子数</span>
<span class="kw">Direct</span>                         <span class="cm">; 第 8 行：坐标类型</span>
<span class="nu">0.00  0.00  0.00</span>             <span class="cm">; 第 9 行起：原子坐标</span>
<span class="nu">0.25  0.25  0.25</span></code></pre>
    </div>

    <h3>2. 坐标类型</h3>
    <table class="tb">
      <thead><tr><th>类型</th><th>关键字</th><th>格式</th><th>适用场景</th></tr></thead>
      <tbody>
        <tr><td>分数坐标</td><td><code>Direct</code></td><td>0~1</td><td>最常用</td></tr>
        <tr><td>笛卡尔坐标</td><td><code>Cartesian</code></td><td>Å</td><td>分子/团簇</td></tr>
      </tbody>
    </table>

    <h3>3. 选择性动力学</h3>
    <p>允许固定部分原子，常用于表面计算。</p>

    <div class="cb">
      <div class="ch"><span class="la">POSCAR</span><span class="fn">选择性动力学</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="vr">Si surface</span>
<span class="nu">1.0</span>
<span class="nu">5.43  0.00  0.00</span>
<span class="nu">0.00  5.43  0.00</span>
<span class="nu">0.00  0.00  15.0</span>            <span class="cm">; 真空层</span>
<span class="vr">Si</span>
<span class="nu">4</span>
<span class="kw">Selective dynamics</span>           <span class="cm">; 开启选择性动力学</span>
<span class="kw">Direct</span>
<span class="nu">0.00  0.00  0.00</span>  <span class="st">F F F</span>   <span class="cm">; F=固定，T=可动 (x,y,z)</span>
<span class="nu">0.25  0.25  0.25</span>  <span class="st">F F F</span>   <span class="cm">; 底部固定层</span>
<span class="nu">0.50  0.50  0.50</span>  <span class="st">T T T</span>   <span class="cm">; 可动层</span>
<span class="nu">0.75  0.75  0.75</span>  <span class="st">T T T</span>   <span class="cm">; 可动层</span></code></pre>
    </div>

    <h3>4. 多元素体系</h3>
    <div class="cb">
      <div class="ch"><span class="la">POSCAR</span><span class="fn">TiO2 示例</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="vr">TiO2 rutile</span>
<span class="nu">1.0</span>
<span class="nu">4.59  0.00  0.00</span>
<span class="nu">0.00  4.59  0.00</span>
<span class="nu">0.00  0.00  2.96</span>
<span class="vr">Ti O</span>                          <span class="cm">; 先 Ti 后 O</span>
<span class="nu">2 4</span>                            <span class="cm">; Ti 2 个，O 4 个</span>
<span class="kw">Direct</span>
<span class="nu">0.00  0.00  0.00</span>             <span class="cm">; Ti 原子 1</span>
<span class="nu">0.50  0.50  0.50</span>             <span class="cm">; Ti 原子 2</span>
<span class="nu">0.30  0.30  0.00</span>             <span class="cm">; O 原子 1</span>
<span class="nu">0.70  0.70  0.00</span>             <span class="cm">; O 原子 2</span>
<span class="nu">0.80  0.20  0.50</span>             <span class="cm">; O 原子 3</span>
<span class="nu">0.20  0.80  0.50</span>             <span class="cm">; O 原子 4</span></code></pre>
    </div>

    <div class="ib warn"><strong>重要：</strong>POSCAR 中元素顺序必须与 POTCAR 一致！</div>

    <h2>KPOINTS 文件详解</h2>
    <p>KPOINTS 定义倒空间采样网格，控制计算精度。</p>

    <h3>1. 自动网格模式（最常用）</h3>
    <div class="cb">
      <div class="ch"><span class="la">KPOINTS</span><span class="fn">Gamma 中心</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="vr">Automatic mesh</span>               <span class="cm">; 注释行</span>
<span class="nu">0</span>                             <span class="cm">; 0 = 自动生成</span>
<span class="kw">Gamma</span>                         <span class="cm">; Gamma 中心网格</span>
<span class="nu">4  4  4</span>                       <span class="cm">; K 点网格</span>
<span class="nu">0.0  0.0  0.0</span>                <span class="cm">; 偏移量</span></code></pre>
    </div>

    <h3>2. Monkhorst-Pack 网格</h3>
    <div class="cb">
      <div class="ch"><span class="la">KPOINTS</span><span class="fn">Monkhorst-Pack</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="vr">Monkhorst-Pack mesh</span>
<span class="nu">0</span>
<span class="kw">Monkhorst</span>                     <span class="cm">; MP 网格（与 Gamma 不同偏移）</span>
<span class="nu">4  4  4</span>
<span class="nu">0.5  0.5  0.5</span>                <span class="cm">; 偏移 0.5</span></code></pre>
    </div>

    <h3>3. Line-mode（能带计算）</h3>
    <div class="cb">
      <div class="ch"><span class="la">KPOINTS</span><span class="fn">Line-mode</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="vr">k-points along high symmetry lines</span>
<span class="nu">20</span>                             <span class="cm">; 每条线段的点数</span>
<span class="kw">Line-mode</span>                      <span class="cm">; 线模式</span>
<span class="kw">Reciprocal</span>                     <span class="cm">; 倒空间坐标</span>

<span class="cm">; Γ → X</span>
<span class="nu">0.000  0.000  0.000</span>           <span class="cm">; 起点</span>
<span class="nu">0.500  0.000  0.000</span>           <span class="cm">; 终点</span>

<span class="cm">; X → W （注意空行分隔！）</span>
<span class="nu">0.500  0.000  0.000</span>
<span class="nu">0.500  0.250  0.000</span>

<span class="cm">; W → Γ</span>
<span class="nu">0.500  0.250  0.000</span>
<span class="nu">0.000  0.000  0.000</span></code></pre>
    </div>

    <div class="ib warn"><strong>注意：</strong>Line-mode 需要空行分隔每条线段！</div>

    <h3>4. K 点密度建议</h3>
    <div class="fb">
      <div class="fm">N<sub>k</sub> × a ≈ 30</div>
      <div class="fd">a 为晶格常数 (Å)，N<sub>k</sub> 为每方向的 k 点数</div>
    </div>

    <table class="tb">
      <thead><tr><th>材料类型</th><th>推荐 K 点</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>金属</td><td><code>8×8×8</code> 或更密</td><td>费米面需要密集采样</td></tr>
        <tr><td>半导体</td><td><code>4×4×4</code> ~ <code>6×6×6</code></td><td>通常足够</td></tr>
        <tr><td>绝缘体</td><td><code>3×3×3</code> ~ <code>4×4×4</code></td><td>可稍稀疏</td></tr>
        <tr><td>表面/slab</td><td><code>k×k×1</code></td><td>z 方向为 1</td></tr>
        <tr><td>分子/团簇</td><td><code>1×1×1</code></td><td>无周期性</td></tr>
      </tbody>
    </table>

    <h2>POTCAR 文件详解</h2>
    <p>POTCAR 包含赝势信息，定义元素的电子结构。</p>

    <h3>1. 关键信息</h3>
    <div class="cb">
      <div class="ch"><span class="la">POTCAR</span><span class="fn">关键参数</span></div>
      <pre><code><span class="vr">TITEL</span>  = <span class="st">PAW_PBE Si 05Jan2001</span>   <span class="cm">; 赝势类型和元素</span>
<span class="vr">ENMAX</span>  = <span class="nu">  249.570</span>              <span class="cm">; 推荐截断能</span>
<span class="vr">ZVAL</span>   = <span class="nu">    4.000</span>              <span class="cm">; 价电子数</span>
<span class="cm">; Si: 3s² 3p² → 4个价电子</span></code></pre>
    </div>

    <h3>2. 赝势类型</h3>
    <table class="tb">
      <thead><tr><th>类型</th><th>适用场景</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td><code>PAW_PBE</code></td><td>常规计算（最常用）</td><td>GGA-PBE 泛函</td></tr>
        <tr><td><code>PAW_LDA</code></td><td>LDA 泛函</td><td>较少使用</td></tr>
        <tr><td><code>_sv</code> 后缀</td><td>半芯态重要的体系</td><td>如 3d 过渡金属</td></tr>
        <tr><td><code>_GW</code> 后缀</td><td>GW 计算</td><td>精度最高</td></tr>
        <tr><td><code>_d</code> 后缀</td><td>含 d 电子的 p 区元素</td><td>如 Ga, Ge, As</td></tr>
      </tbody>
    </table>

    <h3>3. 生成 POTCAR</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 方法 1：手动拼接（注意顺序！）</span>
<span class="fn2">cat</span> ~/potpaw_PBE/Ti/POTCAR > POTCAR
<span class="fn2">cat</span> ~/potpaw_PBE/O/POTCAR >> POTCAR

<span class="cm"># 方法 2：使用 vaspkit</span>
<span class="fn2">vaspkit</span>
<span class="cm"># 1 → Generate POTCAR</span>
<span class="cm"># 输入元素：Ti O</span>

<span class="cm"># 方法 3：使用 pymatgen</span>
<span class="fn2">python</span> -c "
<span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Potcar
p = Potcar([<span class="st">'Ti'</span>, <span class="st">'O'</span>], functional=<span class="st">'PBE'</span>)
p.write_file(<span class="st">'POTCAR'</span>)
"</code></pre>
    </div>

    <h3>4. 检查 POTCAR</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 查看元素</span>
<span class="fn2">grep</span> TITEL POTCAR

<span class="cm"># 查看 ENMAX</span>
<span class="fn2">grep</span> ENMAX POTCAR

<span class="cm"># 查看价电子数</span>
<span class="fn2">grep</span> ZVAL POTCAR

<span class="cm"># 确认顺序与 POSCAR 一致</span>
<span class="fn2">head</span> -6 POSCAR  <span class="cm"># 查看 POSCAR 元素</span>
<span class="fn2">grep</span> TITEL POTCAR <span class="cm"># 查看 POTCAR 元素</span></code></pre>
    </div>

    <h2>常用 INCAR 模板</h2>

    <h3>1. 金属结构优化</h3>
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">金属优化</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">SYSTEM</span>   = <span class="st">Metal relaxation</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>
<span class="kw">ISMEAR</span>   = <span class="nu">1</span>                <span class="cm">; 金属用 MP 展宽</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.2</span>               <span class="cm">; 较大的展宽</span></code></pre>
    </div>

    <h3>2. 绝缘体 DOS 计算</h3>
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">DOS</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">SYSTEM</span>   = <span class="st">Insulator DOS</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>
<span class="kw">ISMEAR</span>   = <span class="nu">-5</span>               <span class="cm">; 四面体法（最准确）</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span>               <span class="cm">; 输出分波 DOS</span>
<span class="kw">NEDOS</span>    = <span class="nu">2000</span>             <span class="cm">; DOS 能量点数</span></code></pre>
    </div>

    <h3>3. 表面计算</h3>
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">表面优化</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">SYSTEM</span>   = <span class="st">Surface optimization</span>
<span class="kw">ENCUT</span>    = <span class="nu">450</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">2</span>                <span class="cm">; 表面必须 ISIF=2</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.02</span>
<span class="kw">ISMEAR</span>   = <span class="nu">1</span>                <span class="cm">; 金属用 1</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.2</span>
<span class="kw">LDIPOL</span>   = <span class="nu">.TRUE.</span>           <span class="cm">; 偶极校正</span>
<span class="kw">IDIPOL</span>   = <span class="nu">3</span>                <span class="cm">; z 方向校正</span></code></pre>
    </div>

    <h3>4. 磁性计算</h3>
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">磁性优化</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">SYSTEM</span>   = <span class="st">Magnetic calculation</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>
<span class="kw">ISPIN</span>    = <span class="nu">2</span>                <span class="cm">; 开启自旋极化</span>
<span class="kw">MAGMOM</span>   = <span class="nu">5 5 0 0</span>          <span class="cm">; 初始磁矩 (μB)</span>
<span class="kw">ISMEAR</span>   = <span class="nu">1</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.2</span></code></pre>
    </div>

    <h3>5. DFT+U 计算</h3>
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">DFT+U</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">SYSTEM</span>   = <span class="st">DFT+U calculation</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>
<span class="kw">ISPIN</span>    = <span class="nu">2</span>
<span class="kw">MAGMOM</span>   = <span class="nu">5 5 0 0</span>

<span class="cm"># DFT+U 参数</span>
<span class="kw">LDAU</span>     = <span class="nu">.TRUE.</span>
<span class="kw">LDAUTYPE</span> = <span class="nu">2</span>                <span class="cm">; Dudarev 方法</span>
<span class="kw">LDAUL</span>    = <span class="nu">2 -1 -1</span>          <span class="cm">; l 量子数 (2=d轨道)</span>
<span class="kw">LDAUU</span>    = <span class="nu">4.0 0 0</span>          <span class="cm">; U 值 (eV)</span>
<span class="kw">LDAUJ</span>    = <span class="nu">0.0 0 0</span>          <span class="cm">; J 值</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>
    </div>

    <h3>6. 杂化泛函 (HSE06)</h3>
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">HSE06</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">SYSTEM</span>   = <span class="st">HSE06 calculation</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>

<span class="cm"># HSE06 参数</span>
<span class="kw">LHFCALC</span>  = <span class="nu">.TRUE.</span>
<span class="kw">AEXX</span>     = <span class="nu">0.25</span>              <span class="cm">; HF 混合比例</span>
<span class="kw">HFSCREEN</span> = <span class="nu">0.2</span>               <span class="cm">; 屏蔽长度</span>
<span class="kw">ALGO</span>     = <span class="st">Damped</span>            <span class="cm">; HSE 推荐用 Damped</span>
<span class="kw">TIME</span>     = <span class="nu">0.4</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>
    </div>

    <div class="ib warn"><strong>注意：</strong>HSE06 计算量约为 PBE 的 10-100 倍，需要足够的计算资源。</div>
  </div>
</template>

<script>
import QuickRef from '../components/QuickRef.vue'

export default {
  name: 'InputView',
  components: {
    QuickRef
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
