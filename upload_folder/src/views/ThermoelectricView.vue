<template>
  <div class="sec active">
    <div class="bread">
      <router-link to="/">首页</router-link>/
      <router-link to="/tasks">计算任务</router-link>/
      <span>热电计算</span>
    </div>
    
    <h2>热电材料计算</h2>
    <p>热电材料能够将热能直接转换为电能（Seebeck效应）或将电能转换为热能（Peltier效应），在废热回收和固态制冷中有重要应用。</p>

    <h3>1. 热电优值 ZT</h3>
    <p>热电材料的性能由无量纲热电优值 ZT 表征：</p>
    
    <div class="fb">
      <div class="fm">ZT = S²σT / κ</div>
      <div class="fd">S: Seebeck系数 | σ: 电导率 | T: 温度 | κ: 热导率</div>
    </div>

    <table class="tb">
      <thead><tr><th>参数</th><th>单位</th><th>理想方向</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td><strong>Seebeck系数 S</strong></td><td>μV/K</td><td>越大越好</td><td>衡量每单位温差产生的电压</td></tr>
        <tr><td><strong>电导率 σ</strong></td><td>S/m</td><td>越大越好</td><td>衡量电荷传输能力</td></tr>
        <tr><td><strong>热导率 κ</strong></td><td>W/m·K</td><td>越小越好</td><td>κ = κ<sub>e</sub> + κ<sub>l</sub></td></tr>
        <tr><td><strong>功率因子 PF</strong></td><td>μW/cm·K²</td><td>越大越好</td><td>PF = S²σ</td></tr>
      </tbody>
    </table>

    <div class="ib tip"><strong>ZT 目标：</strong>商业化应用需要 ZT > 2.0，目前最佳热电材料（如 SnSe）在高温下可达 ZT ~ 2.6。</div>

    <h3>2. 计算流程</h3>
    <div class="fc">
      <div class="fn2-node s">结构优化（获取稳定结构）</div><div class="fa"></div>
      <div class="fn2-node p">自洽计算（获取精确电荷密度）</div><div class="fa"></div>
      <div class="fn2-node p">非自洽计算（密集 K 点，获取能带）</div><div class="fa"></div>
      <div class="fn2-node p">BoltzTraP 计算输运性质</div><div class="fa"></div>
      <div class="fn2-node p">声子计算（获取晶格热导率）</div><div class="fa"></div>
      <div class="fn2-node e">计算 ZT 值</div>
    </div>

    <h3>3. 结构优化</h3>
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">热电材料结构优化</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">SYSTEM</span>   = <span class="st">Bi2Te3 relaxation</span>

<span class="cm"># 基本参数</span>
<span class="kw">ENCUT</span>    = <span class="nu">500</span>              <span class="cm">; 热电材料通常需要较高截断能</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.01</span>            <span class="cm">; 严格力收敛</span>

<span class="cm"># 离子步参数</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>                <span class="cm">; 优化晶格和离子</span>

<span class="cm"># 展宽参数</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>                <span class="cm">; 半导体用 Gaussian</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 自旋轨道耦合（重元素通常需要）</span>
<span class="kw">LSORBIT</span>  = <span class="nu">.TRUE.</span>           <span class="cm">; Bi, Te 等重元素</span>
<span class="kw">NBANDS</span>   = <span class="nu">200</span>              <span class="cm">; SOC 需要更多能带</span></code></pre>
    </div>

    <h3>4. 自洽计算</h3>
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">自洽计算</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">SYSTEM</span>   = <span class="st">Bi2Te3 SCF</span>

<span class="kw">ENCUT</span>    = <span class="nu">500</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-8</span>             <span class="cm">; 更严格的收敛</span>

<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>

<span class="kw">ISMEAR</span>   = <span class="nu">-5</span>               <span class="cm">; 四面体方法（最准确）</span>
<span class="kw">LSORBIT</span>  = <span class="nu">.TRUE.</span>
<span class="kw">NBANDS</span>   = <span class="nu">200</span>

<span class="cm"># 必须输出 WAVECAR</span>
<span class="kw">LWAVE</span>    = <span class="nu">.TRUE.</span>
<span class="kw">LCHARG</span>   = <span class="nu">.TRUE.</span></code></pre>
    </div>

    <h3>5. 非自洽计算（密集 K 点）</h3>
    <p>BoltzTraP 需要非常密集的 K 点网格来准确计算输运性质。</p>
    
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">非自洽计算</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">SYSTEM</span>   = <span class="st">Bi2Te3 non-SCF</span>

<span class="kw">ENCUT</span>    = <span class="nu">500</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-8</span>

<span class="cm"># 关键：从 WAVECAR 读取</span>
<span class="kw">ICHARG</span>   = <span class="nu">11</span>

<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>

<span class="kw">ISMEAR</span>   = <span class="nu">-5</span>               <span class="cm">; 四面体方法</span>
<span class="kw">LSORBIT</span>  = <span class="nu">.TRUE.</span>
<span class="kw">NBANDS</span>   = <span class="nu">200</span>

<span class="cm"># 输出详细能带信息</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span>
<span class="kw">LOPTICS</span>  = <span class="nu">.TRUE.</span>           <span class="cm">; 计算光学矩阵元</span>
<span class="kw">NEDOS</span>    = <span class="nu">2000</span></code></pre>
    </div>

    <div class="cb">
      <div class="ch"><span class="la">KPOINTS</span><span class="fn">密集网格（BoltzTraP 需要）</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="vr">Dense k-mesh for BoltzTraP</span>
<span class="nu">0</span>
<span class="kw">Gamma</span>
<span class="nu">24  24  24</span>               <span class="cm">; 非常密集的 K 点</span>
<span class="nu">0.0  0.0  0.0</span></code></pre>
    </div>

    <div class="ib warn"><strong>重要：</strong>BoltzTraP 需要非常密集的 K 点（通常 20×20×20 或更高），否则输运系数不准确。</div>

    <h3>6. BoltzTraP 计算</h3>
    <p>BoltzTraP 基于玻尔兹曼输运理论计算电导率和 Seebeck 系数。</p>

    <h4>安装 BoltzTraP</h4>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 下载 BoltzTraP</span>
<span class="fn2">wget</span> http://www.physics.iit.edu/~savrasov/BoltzTraP/BoltzTraP.tar.gz
<span class="fn2">tar</span> -xzf BoltzTraP.tar.gz
<span class="fn2">cd</span> BoltzTraP/src
<span class="fn2">make</span>
<span class="fn2">cp</span> boltztrap ../bin/</code></pre>
    </div>

    <h4>运行 BoltzTraP</h4>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><span class="fn">boltztrap.sh</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">#!/bin/bash</span>

<span class="cm"># 创建 BoltzTraP 输入文件</span>
<span class="fn2">mkdir</span> boltztrap && <span class="fn2">cd</span> boltztrap

<span class="cm"># 复制 VASP 输出</span>
<span class="fn2">cp</span> ../EIGENVAL ./bi2te3.energy
<span class="fn2">cp</span> ../OUTCAR ./bi2te3.intrans
<span class="fn2">cp</span> ../OUTCAR ./bi2te3.outputtmp

<span class="cm"># 创建 intrans 文件</span>
<span class="fn2">cat</span> > bi2te3.intrans << EOF
GENE                          <span class="cm">; 通用模式</span>
1 0 0 0.0                     <span class="cm">; 使用等间距能量网格</span>
0.0005 0.0 0.0 0.0           <span class="cm">; 能量间距，化学势范围</span>
CALC                          <span class="cm">; 计算输运性质</span>
300.0 900.0 100.0            <span class="cm">; 温度范围：300K 到 900K，步长 100K</span>
0 0 0 0 0
1 1 1
EOF

<span class="cm"># 运行 BoltzTraP</span>
<span class="fn2">x boltztrap</span> -v bi2te3

<span class="cm"># 输出文件：bi2te3.trace (Seebeck, 电导率等)</span></code></pre>
    </div>

    <h4>解读 BoltzTraP 输出</h4>
    <div class="cb">
      <div class="ch"><span class="la">python</span><span class="fn">read_boltztrap.py</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 BoltzTraP 输出</span>
<span class="kw">def</span> <span class="fn2">read_boltztrap</span>(filename):
    data = np.genfromtxt(filename, skip_header=<span class="nu">1</span>)
    <span class="kw">return</span> data

<span class="cm"># 读取 trace 文件</span>
data = <span class="fn2">read_boltztrap</span>(<span class="st">'bi2te3.trace'</span>)

<span class="cm"># 数据列说明：</span>
<span class="cm"># Column 0: T (温度, K)</span>
<span class="cm"># Column 1: EF (相对于费米能级的化学势, eV)</span>
<span class="cm"># Column 2: sigma (电导率, S/m)</span>
<span class="cm"># Column 3: S (Seebeck系数, V/K)</span>
<span class="cm"># Column 4: S²σ (功率因子, W/m·K²)</span>
<span class="cm"># Column 5: kappa (电子热导率, W/m·K)</span>

<span class="cm"># 选择特定温度</span>
T = <span class="nu">300</span>  <span class="cm">; 300K</span>
mask = data[:, <span class="nu">0</span>] == T
ef = data[mask, <span class="nu">1</span>]
sigma = data[mask, <span class="nu">2</span>]
seebeck = data[mask, <span class="nu">3</span>] * <span class="nu">1e6</span>  <span class="cm">; 转换为 μV/K</span>
pf = data[mask, <span class="nu">4</span>] * <span class="nu">1e4</span>       <span class="cm">; 转换为 μW/cm·K²</span>

<span class="cm"># 绘图</span>
fig, axes = plt.subplots(<span class="nu">2</span>, <span class="nu">2</span>, figsize=(<span class="nu">10</span>, <span class="nu">8</span>))

axes[<span class="nu">0</span>,<span class="nu">0</span>].plot(ef, seebeck, <span class="st">'b-'</span>)
axes[<span class="nu">0</span>,<span class="nu">0</span>].set_xlabel(<span class="st">'μ - E<sub>F</sub> (eV)'</span>)
axes[<span class="nu">0</span>,<span class="nu">0</span>].set_ylabel(<span class="st">'Seebeck (μV/K)'</span>)

axes[<span class="nu">0</span>,<span class="nu">1</span>].semilogy(ef, sigma, <span class="st">'r-'</span>)
axes[<span class="nu">0</span>,<span class="nu">1</span>].set_xlabel(<span class="st">'μ - E<sub>F</sub> (eV)'</span>)
axes[<span class="nu">0</span>,<span class="nu">1</span>].set_ylabel(<span class="st">'σ (S/m)'</span>)

axes[<span class="nu">1</span>,<span class="nu">0</span>].plot(ef, pf, <span class="st">'g-'</span>)
axes[<span class="nu">1</span>,<span class="nu">0</span>].set_xlabel(<span class="st">'μ - E<sub>F</sub> (eV)'</span>)
axes[<span class="nu">1</span>,<span class="nu">0</span>].set_ylabel(<span class="st">'PF (μW/cm·K²)'</span>)

plt.tight_layout()
plt.savefig(<span class="st">'transport_300K.png'</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>
    </div>

    <h3>7. 晶格热导率计算</h3>
    <p>晶格热导率 κ<sub>l</sub> 通过声子计算获得，使用 Slack 模型或求解玻尔兹曼方程。</p>

    <h4>Slack 模型估算</h4>
    <div class="cb">
      <div class="ch"><span class="la">python</span><span class="fn">slack_model.py</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np

<span class="kw">def</span> <span class="fn2">slack_model</span>(M_avg, V_atom, theta_D, T, gamma, n_atoms=<span class="nu">1</span>):
    <span class="st">"""
    Slack 模型估算晶格热导率
    
    Parameters:
    M_avg: 平均原子质量 (amu)
    V_atom: 平均原子体积 (Å³)
    theta_D: 德拜温度 (K)
    T: 温度 (K)
    gamma: Grüneisen 参数
    n_atoms: 原子数
    """</span>
    <span class="cm"># Slack 公式</span>
    A = <span class="nu">3.1e-8</span>  <span class="cm">; 经验常数</span>
    kappa_l = A * M_avg * theta_D**<span class="nu">3</span> * V_atom**(2/3) / (gamma**<span class="nu">2</span> * n_atoms**(2/3) * T)
    <span class="kw">return</span> kappa_l

<span class="cm"># Bi2Te3 示例</span>
M_avg = (<span class="nu">2</span> * <span class="nu">208.98</span> + <span class="nu">3</span> * <span class="nu">127.60</span>) / <span class="nu">5</span>  <span class="cm">; 平均原子质量</span>
V_atom = <span class="nu">180.5</span> / <span class="nu">5</span>                      <span class="cm">; 平均原子体积</span>
theta_D = <span class="nu">165</span>                           <span class="cm">; 德拜温度</span>
gamma = <span class="nu">1.5</span>                             <span class="cm">; Grüneisen 参数</span>

kappa_300K = <span class="fn2">slack_model</span>(M_avg, V_atom, theta_D, <span class="nu">300</span>, gamma)
<span class="fn2">print</span>(f<span class="st">"300K 晶格热导率: {kappa_300K:.2f} W/m·K"</span>)

<span class="cm"># 温度依赖</span>
temps = np.linspace(<span class="nu">300</span>, <span class="nu">700</span>, <span class="nu">9</span>)
kappas = [<span class="fn2">slack_model</span>(M_avg, V_atom, theta_D, T, gamma) <span class="kw">for</span> T <span class="kw">in</span> temps]

<span class="kw">for</span> T, k <span class="kw">in</span> <span class="fn2">zip</span>(temps, kappas):
    <span class="fn2">print</span>(f<span class="st">"{T:.0f} K: κ = {k:.2f} W/m·K"</span>)</code></pre>
    </div>

    <h4>phonopy 计算晶格热导率</h4>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 使用 phonopy 计算热导率（BTE 方法）</span>
<span class="fn2">phonopy</span> --mesh="20 20 20" --tprop --fc DispFC

<span class="cm"># 或使用 phono3py 计算三声子散射</span>
<span class="fn2">phono3py</span> --mesh="20 20 20" --tprop</code></pre>
    </div>

    <h3>8. ZT 值计算</h3>
    <div class="cb">
      <div class="ch"><span class="la">python</span><span class="fn">calculate_ZT.py</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="kw">def</span> <span class="fn2">calculate_ZT</span>(S, sigma, T, kappa_l, kappa_e):
    <span class="st">"""
    计算热电优值 ZT
    
    Parameters:
    S: Seebeck系数 (V/K)
    sigma: 电导率 (S/m)
    T: 温度 (K)
    kappa_l: 晶格热导率 (W/m·K)
    kappa_e: 电子热导率 (W/m·K)
    """</span>
    PF = S**<span class="nu">2</span> * sigma  <span class="cm">; 功率因子 (W/m·K²)</span>
    kappa = kappa_l + kappa_e  <span class="cm">; 总热导率</span>
    ZT = PF * T / kappa
    <span class="kw">return</span> ZT, PF

<span class="cm"># 读取 BoltzTraP 数据</span>
data = np.genfromtxt(<span class="st">'bi2te3.trace'</span>, skip_header=<span class="nu">1</span>)

<span class="cm"># 不同温度下的 ZT</span>
temps = [<span class="nu">300</span>, <span class="nu">400</span>, <span class="nu">500</span>, <span class="nu">600</span>, <span class="nu">700</span>]
kappa_l_values = [<span class="nu">1.5</span>, <span class="nu">1.2</span>, <span class="nu">0.9</span>, <span class="nu">0.7</span>, <span class="nu">0.5</span>]  <span class="cm">; 从 Slack 模型或计算得到</span>

max_ZT = []
<span class="kw">for</span> i, T <span class="kw">in</span> <span class="fn2">enumerate</span>(temps):
    mask = data[:, <span class="nu">0</span>] == T
    ef = data[mask, <span class="nu">1</span>]
    sigma = data[mask, <span class="nu">2</span>]
    S = data[mask, <span class="nu">3</span>]
    kappa_e = data[mask, <span class="nu">5</span>]
    
    ZT, PF = <span class="fn2">calculate_ZT</span>(S, sigma, T, kappa_l_values[i], kappa_e)
    max_ZT.append(np.<span class="fn2">max</span>(ZT[ef > -<span class="nu">0.1</span>]))  <span class="cm">; 只考虑接近费米能级的区域</span>

<span class="cm"># 绘制 ZT vs 温度</span>
plt.figure(figsize=(<span class="nu">8</span>, <span class="nu">6</span>))
plt.plot(temps, max_ZT, <span class="st">'ro-'</span>, linewidth=<span class="nu">2</span>, markersize=<span class="nu">8</span>)
plt.xlabel(<span class="st">'Temperature (K)'</span>, fontsize=<span class="nu">12</span>)
plt.ylabel(<span class="st">'ZT'</span>, fontsize=<span class="nu">12</span>)
plt.title(<span class="st">'ZT vs Temperature for Bi₂Te₃'</span>, fontsize=<span class="nu">14</span>)
plt.grid(<span class="kw">True</span>)
plt.savefig(<span class="st">'ZT_vs_T.png'</span>, dpi=<span class="nu">150</span>)
plt.show()

<span class="cm"># 输出最佳 ZT</span>
best_T = temps[np.<span class="fn2">argmax</span>(max_ZT)]
<span class="fn2">print</span>(f<span class="st">"最佳 ZT: {max(max_ZT):.2f} at {best_T} K"</span>)</code></pre>
    </div>

    <h3>9. 常见热电材料</h3>
    <table class="tb">
      <thead><tr><th>材料</th><th>类型</th><th>最佳温度</th><th>ZT 峰值</th><th>应用</th></tr></thead>
      <tbody>
        <tr><td>Bi₂Te₃</td><td>窄带隙半导体</td><td>300-400 K</td><td>~1.0</td><td>室温制冷</td></tr>
        <tr><td>PbTe</td><td>IV-VI 化合物</td><td>600-900 K</td><td>~2.0</td><td>中温发电</td></tr>
        <tr><td>SnSe</td><td>层状材料</td><td>700-900 K</td><td>~2.6</td><td>高温发电</td></tr>
        <tr><td>Mg₂Si</td><td>硅化物</td><td>500-800 K</td><td>~1.3</td><td>汽车废热</td></tr>
        <tr><td>Half-Heusler</td><td>金属间化合物</td><td>700-1000 K</td><td>~1.5</td><td>高温发电</td></tr>
      </tbody>
    </table>

    <h3>10. 提高 ZT 的策略</h3>
    <div class="db">
      <div class="db-t">优化热电性能的方法</div>
      <h4>1. 增大功率因子 S²σ</h4>
      <ul>
        <li>优化载流子浓度（通常 10<sup>19</sup>-10<sup>21</sup> cm⁻³）</li>
        <li>能带工程：增大能带有效质量</li>
        <li>能量过滤效应</li>
        <li>共振能级掺杂</li>
      </ul>
      
      <h4>2. 降低热导率 κ</h4>
      <ul>
        <li>纳米结构化：增加声子散射</li>
        <li>点缺陷散射：合金化、掺杂</li>
        <li>界面散射：纳米复合材料</li>
        <li>本征低热导率材料：重元素、复杂结构</li>
      </ul>
      
      <h4>3. 能带收敛</h4>
      <ul>
        <li>多能谷材料：增大谷简并度</li>
        <li>温度诱导能带收敛</li>
        <li>压力诱导能带收敛</li>
      </ul>
    </div>

    <h3>11. 完整计算脚本</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><span class="fn">thermoelectric_workflow.sh</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># 热电材料计算完整流程</span>

<span class="fn2">echo</span> <span class="st">"=== 步骤 1: 结构优化 ==="</span>
<span class="fn2">mkdir</span> 01_relax && <span class="fn2">cd</span> 01_relax
<span class="fn2">cat</span> > INCAR << EOF
SYSTEM = Bi2Te3 relax
ENCUT = 500
PREC = Accurate
EDIFF = 1E-6
EDIFFG = -0.01
IBRION = 2
NSW = 200
ISIF = 3
ISMEAR = 0
SIGMA = 0.05
LSORBIT = .TRUE.
NBANDS = 200
EOF
<span class="fn2">cp</span> ../POSCAR_init POSCAR
<span class="fn2">cp</span> ../POTCAR ../KPOINTS ./
<span class="fn2">mpirun</span> -np <span class="nu">32</span> vasp_std
<span class="fn2">cd</span> ..

<span class="fn2">echo</span> <span class="st">"=== 步骤 2: 自洽计算 ==="</span>
<span class="fn2">mkdir</span> 02_scf && <span class="fn2">cd</span> 02_scf
<span class="fn2">cp</span> ../01_relax/CONTCAR POSCAR
<span class="fn2">cat</span> > INCAR << EOF
SYSTEM = Bi2Te3 SCF
ENCUT = 500
PREC = Accurate
EDIFF = 1E-8
IBRION = -1
NSW = 0
ISMEAR = -5
LSORBIT = .TRUE.
NBANDS = 200
LWAVE = .TRUE.
LCHARG = .TRUE.
EOF
<span class="fn2">cp</span> ../POTCAR ../KPOINTS ./
<span class="fn2">mpirun</span> -np <span class="nu">32</span> vasp_std
<span class="fn2">cd</span> ..

<span class="fn2">echo</span> <span class="st">"=== 步骤 3: 非自洽计算（密集 K 点）==="</span>
<span class="fn2">mkdir</span> 03_nscf && <span class="fn2">cd</span> 03_nscf
<span class="fn2">cp</span> ../01_relax/CONTCAR POSCAR
<span class="fn2">cp</span> ../02_scf/WAVECAR ./
<span class="fn2">cat</span> > INCAR << EOF
SYSTEM = Bi2Te3 NSCF
ENCUT = 500
PREC = Accurate
EDIFF = 1E-8
ICHARG = 11
IBRION = -1
NSW = 0
ISMEAR = -5
LSORBIT = .TRUE.
NBANDS = 200
LORBIT = 11
LOPTICS = .TRUE.
NEDOS = 2000
EOF
<span class="fn2">cat</span> > KPOINTS << EOF
Dense k-mesh
0
Gamma
24 24 24
0.0 0.0 0.0
EOF
<span class="fn2">cp</span> ../POTCAR ./
<span class="fn2">mpirun</span> -np <span class="nu">64</span> vasp_std
<span class="fn2">cd</span> ..

<span class="fn2">echo</span> <span class="st">"=== 步骤 4: BoltzTraP 计算 ==="</span>
<span class="fn2">mkdir</span> 04_boltztrap && <span class="fn2">cd</span> 04_boltztrap
<span class="fn2">cp</span> ../03_nscf/EIGENVAL ./bi2te3.energy
<span class="fn2">cp</span> ../03_nscf/OUTCAR ./
<span class="cm"># 创建 intrans 并运行 boltztrap...</span>
<span class="fn2">cd</span> ..

<span class="fn2">echo</span> <span class="st">"=== 计算完成 ==="</span></code></pre>
    </div>

    <h3>12. 注意事项</h3>
    <div class="ib warn"><strong>重要提醒：</strong>
      <ul>
        <li>热电计算需要密集 K 点（20×20×20 或更高）</li>
        <li>重元素（Bi, Pb, Te 等）通常需要考虑自旋轨道耦合</li>
        <li>BoltzTraP 计算需要较大内存</li>
        <li>晶格热导率计算需要高精度的力常数</li>
        <li>ZT 的准确度取决于所有参数的准确度</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThermoelectricView',
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
