<template>
  <div class="sec active">
    <div class="bread">
      <router-link to="/">首页</router-link>/
      <router-link to="/gaussian">Gaussian 教程</router-link>/
      <span>名词解释</span>
    </div>
    
    <h2>Gaussian 名词解释</h2>
    <p>本节解释 Gaussian 计算中常用的术语和概念。</p>

    <h3>1. 基本概念</h3>
    <table class="tb">
      <thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead>
      <tbody>
        <tr><td><strong>哈密顿量</strong></td><td>Hamiltonian</td><td>描述体系总能量的算符</td></tr>
        <tr><td><strong>波函数</strong></td><td>Wavefunction</td><td>描述电子状态的函数 Ψ</td></tr>
        <tr><td><strong>电子密度</strong></td><td>Electron density</td><td>电子在空间中的分布 ρ(r)</td></tr>
        <tr><td><strong>轨道</strong></td><td>Orbital</td><td>单电子波函数 φ</td></tr>
        <tr><td><strong>本征值</strong></td><td>Eigenvalue</td><td>轨道能量 ε</td></tr>
        <tr><td><strong>基态</strong></td><td>Ground state</td><td>能量最低的状态</td></tr>
        <tr><td><strong>激发态</strong></td><td>Excited state</td><td>能量高于基态的状态</td></tr>
      </tbody>
    </table>

    <h3>2. 计算方法</h3>
    <table class="tb">
      <thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead>
      <tbody>
        <tr><td><strong>HF</strong></td><td>Hartree-Fock</td><td>平均场近似，忽略电子相关</td></tr>
        <tr><td><strong>DFT</strong></td><td>Density Functional Theory</td><td>密度泛函理论，用电子密度描述体系</td></tr>
        <tr><td><strong>MP2</strong></td><td>Møller-Plesset 2nd order</td><td>二阶微扰理论，包含电子相关</td></tr>
        <tr><td><strong>CCSD</strong></td><td>Coupled Cluster Singles Doubles</td><td>耦合簇方法，高精度</td></tr>
        <tr><td><strong>CCSD(T)</strong></td><td>CCSD with perturbative triples</td><td>"金标准"方法</td></tr>
        <tr><td><strong>TDDFT</strong></td><td>Time-Dependent DFT</td><td>含时密度泛函，计算激发态</td></tr>
        <tr><td><strong>CASSCF</strong></td><td>Complete Active Space SCF</td><td>多参考态方法</td></tr>
      </tbody>
    </table>

    <h3>3. 泛函类型</h3>
    <table class="tb">
      <thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead>
      <tbody>
        <tr><td><strong>LDA</strong></td><td>Local Density Approximation</td><td>局域密度近似，最简单</td></tr>
        <tr><td><strong>GGA</strong></td><td>Generalized Gradient Approximation</td><td>广义梯度近似，包含梯度</td></tr>
        <tr><td><strong>杂化泛函</strong></td><td>Hybrid functional</td><td>混合 HF 和 DFT 交换</td></tr>
        <tr><td><strong>范围分离</strong></td><td>Range-separated</td><td>长短程使用不同泛函</td></tr>
        <tr><td><strong>双杂化</strong></td><td>Double hybrid</td><td>包含 MP2 相关能</td></tr>
        <tr><td><strong>色散修正</strong></td><td>Dispersion correction</td><td>描述范德华作用</td></tr>
      </tbody>
    </table>

    <h3>4. 基组相关</h3>
    <table class="tb">
      <thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead>
      <tbody>
        <tr><td><strong>基组</strong></td><td>Basis set</td><td>展开分子轨道的函数集合</td></tr>
        <tr><td><strong>STO</strong></td><td>Slater Type Orbital</td><td>斯莱特型轨道</td></tr>
        <tr><td><strong>GTO</strong></td><td>Gaussian Type Orbital</td><td>高斯型轨道</td></tr>
        <tr><td><strong>极化函数</strong></td><td>Polarization functions</td><td>允许轨道变形的函数（d, f）</td></tr>
        <tr><td><strong>弥散函数</strong></td><td>Diffuse functions</td><td>描述远离核的电子（+）</td></tr>
        <tr><td><strong>赝势</strong></td><td>Pseudopotential</td><td>替代内层电子的势</td></tr>
        <tr><td><strong>全电子</strong></td><td>All-electron</td><td>包含所有电子的计算</td></tr>
      </tbody>
    </table>

    <h3>5. 结构优化</h3>
    <table class="tb">
      <thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead>
      <tbody>
        <tr><td><strong>势能面</strong></td><td>Potential Energy Surface (PES)</td><td>能量随几何的变化</td></tr>
        <tr><td><strong>极小值</strong></td><td>Minimum</td><td>稳定的分子结构</td></tr>
        <tr><td><strong>过渡态</strong></td><td>Transition State (TS)</td><td>势能面的鞍点</td></tr>
        <tr><td><strong>虚频</strong></td><td>Imaginary frequency</td><td>负频率，表示鞍点</td></tr>
        <tr><td><strong>力常数</strong></td><td>Force constant</td><td>二阶导数，描述势能面曲率</td></tr>
        <tr><td><strong>Hessian</strong></td><td>Hessian matrix</td><td>能量对坐标的二阶导数矩阵</td></tr>
        <tr><td><strong>梯度</strong></td><td>Gradient</td><td>能量对坐标的一阶导数（力）</td></tr>
      </tbody>
    </table>

    <h3>6. 频率和光谱</h3>
    <table class="tb">
      <thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead>
      <tbody>
        <tr><td><strong>振动频率</strong></td><td>Vibrational frequency</td><td>分子振动的频率（cm⁻¹）</td></tr>
        <tr><td><strong>零点能</strong></td><td>Zero-Point Energy (ZPE)</td><td>振动基态能量</td></tr>
        <tr><td><strong>IR 强度</strong></td><td>IR intensity</td><td>红外吸收强度</td></tr>
        <tr><td><strong>拉曼活性</strong></td><td>Raman activity</td><td>拉曼散射活性</td></tr>
        <tr><td><strong>振子强度</strong></td><td>Oscillator strength</td><td>电子跃迁强度</td></tr>
        <tr><td><strong>选择定则</strong></td><td>Selection rules</td><td>允许跃迁的条件</td></tr>
      </tbody>
    </table>

    <h3>7. 热力学</h3>
    <table class="tb">
      <thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead>
      <tbody>
        <tr><td><strong>电子能</strong></td><td>Electronic energy</td><td>SCF 计算的能量</td></tr>
        <tr><td><strong>焓</strong></td><td>Enthalpy (H)</td><td>H = E + PV</td></tr>
        <tr><td><strong>吉布斯自由能</strong></td><td>Gibbs free energy (G)</td><td>G = H - TS</td></tr>
        <tr><td><strong>熵</strong></td><td>Entropy (S)</td><td>体系混乱度</td></tr>
        <tr><td><strong>热容</strong></td><td>Heat capacity (Cv, Cp)</td><td>温度变化所需能量</td></tr>
        <tr><td><strong>热校正</strong></td><td>Thermal correction</td><td>温度对能量的贡献</td></tr>
      </tbody>
    </table>

    <h3>8. 电子结构分析</h3>
    <table class="tb">
      <thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead>
      <tbody>
        <tr><td><strong>HOMO</strong></td><td>Highest Occupied MO</td><td>最高占据分子轨道</td></tr>
        <tr><td><strong>LUMO</strong></td><td>Lowest Unoccupied MO</td><td>最低未占据分子轨道</td></tr>
        <tr><td><strong>能隙</strong></td><td>Energy gap</td><td>HOMO-LUMO 能量差</td></tr>
        <tr><td><strong>电离势</strong></td><td>Ionization potential (IP)</td><td>移除电子所需能量</td></tr>
        <tr><td><strong>电子亲和</strong></td><td>Electron affinity (EA)</td><td>获得电子释放能量</td></tr>
        <tr><td><strong>电负性</strong></td><td>Electronegativity</td><td>吸引电子能力</td></tr>
        <tr><td><strong>硬度</strong></td><td>Hardness</td><td>抵抗电荷转移能力</td></tr>
      </tbody>
    </table>

    <h3>9. 布居分析</h3>
    <table class="tb">
      <thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead>
      <tbody>
        <tr><td><strong>Mulliken 电荷</strong></td><td>Mulliken charge</td><td>基于重叠积分的电荷分配</td></tr>
        <tr><td><strong>NBO 电荷</strong></td><td>Natural Bond Orbital charge</td><td>自然键轨道电荷</td></tr>
        <tr><td><strong>ESP 电荷</strong></td><td>Electrostatic potential charge</td><td>拟合静电势的电荷</td></tr>
        <tr><td><strong>Hirshfeld 电荷</strong></td><td>Hirshfeld charge</td><td>基于原子密度的电荷</td></tr>
        <tr><td><strong>键级</strong></td><td>Bond order</td><td>化学键强度的度量</td></tr>
        <tr><td><strong>偶极矩</strong></td><td>Dipole moment</td><td>电荷分布的不对称性</td></tr>
      </tbody>
    </table>

    <h3>10. 过渡态和反应</h3>
    <table class="tb">
      <thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead>
      <tbody>
        <tr><td><strong>IRC</strong></td><td>Intrinsic Reaction Coordinate</td><td>内禀反应坐标</td></tr>
        <tr><td><strong>活化能</strong></td><td>Activation energy</td><td>反应势垒</td></tr>
        <tr><td><strong>反应热</strong></td><td>Reaction enthalpy</td><td>反应焓变</td></tr>
        <tr><td><strong>反应路径</strong></td><td>Reaction path</td><td>从反应物到产物的路径</td></tr>
        <tr><td><strong>鞍点</strong></td><td>Saddle point</td><td>势能面的鞍点（过渡态）</td></tr>
        <tr><td><strong>最小能量路径</strong></td><td>Minimum Energy Path (MEP)</td><td>连接反应物和产物的最低能量路径</td></tr>
      </tbody>
    </table>

    <h3>11. SCF 相关</h3>
    <table class="tb">
      <thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead>
      <tbody>
        <tr><td><strong>SCF</strong></td><td>Self-Consistent Field</td><td>自洽场迭代</td></tr>
        <tr><td><strong>DIIS</strong></td><td>Direct Inversion in Iterative Subspace</td><td>加速收敛的方法</td></tr>
        <tr><td><strong>收敛</strong></td><td>Convergence</td><td>迭代达到稳定</td></tr>
        <tr><td><strong>密度矩阵</strong></td><td>Density matrix</td><td>描述电子分布的矩阵</td></tr>
        <tr><td><strong>Fock 矩阵</strong></td><td>Fock matrix</td><td>HF 方程的核心矩阵</td></tr>
        <tr><td><strong>重叠矩阵</strong></td><td>Overlap matrix</td><td>基函数重叠的矩阵</td></tr>
      </tbody>
    </table>

    <h3>12. 溶剂模型</h3>
    <table class="tb">
      <thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead>
      <tbody>
        <tr><td><strong>PCM</strong></td><td>Polarizable Continuum Model</td><td>可极化连续介质模型</td></tr>
        <tr><td><strong>SMD</strong></td><td>Solvation Model based on Density</td><td>基于密度的溶剂化模型</td></tr>
        <tr><td><strong>CPCM</strong></td><td>Conductor-like PCM</td><td>类导体 PCM</td></tr>
        <tr><td><strong>IEFPCM</strong></td><td>Integral Equation Formalism PCM</td><td>积分方程形式 PCM</td></tr>
        <tr><td><strong>隐式溶剂</strong></td><td>Implicit solvation</td><td>将溶剂视为连续介质</td></tr>
        <tr><td><strong>显式溶剂</strong></td><td>Explicit solvation</td><td>包含溶剂分子</td></tr>
      </tbody>
    </table>

    <h3>13. 缩写对照</h3>
    <table class="tb">
      <thead><tr><th>缩写</th><th>全称</th><th>中文</th></tr></thead>
      <tbody>
        <tr><td>PES</td><td>Potential Energy Surface</td><td>势能面</td></tr>
        <tr><td>ZPE</td><td>Zero-Point Energy</td><td>零点能</td></tr>
        <tr><td>MO</td><td>Molecular Orbital</td><td>分子轨道</td></tr>
        <tr><td>AO</td><td>Atomic Orbital</td><td>原子轨道</td></tr>
        <tr><td>BO</td><td>Born-Oppenheimer</td><td>玻恩-奥本海默近似</td></tr>
        <tr><td>NBO</td><td>Natural Bond Orbital</td><td>自然键轨道</td></tr>
        <tr><td>AIM</td><td>Atoms in Molecules</td><td>分子中的原子</td></tr>
        <tr><td>MEP</td><td>Minimum Energy Path</td><td>最小能量路径</td></tr>
      </tbody>
    </table>

    <h3>14. 常用符号</h3>
    <table class="tb">
      <thead><tr><th>符号</th><th>含义</th><th>单位</th></tr></thead>
      <tbody>
        <tr><td>E</td><td>能量</td><td>Hartree 或 eV</td></tr>
        <tr><td>ΔE</td><td>能量变化</td><td>kcal/mol 或 kJ/mol</td></tr>
        <tr><td>R</td><td>键长</td><td>Å</td></tr>
        <tr><td>θ</td><td>键角</td><td>度</td></tr>
        <tr><td>μ</td><td>偶极矩</td><td>Debye</td></tr>
        <tr><td>ν</td><td>频率</td><td>cm⁻¹</td></tr>
        <tr><td>f</td><td>振子强度</td><td>无量纲</td></tr>
        <tr><td>ε</td><td>轨道能量</td><td>Hartree 或 eV</td></tr>
      </tbody>
    </table>

    <div class="ib tip"><strong>单位换算：</strong>
      <ul>
        <li>1 Hartree = 627.5 kcal/mol = 2625.5 kJ/mol = 27.211 eV</li>
        <li>1 Debye = 3.336 × 10⁻³⁰ C·m</li>
        <li>1 Å = 0.1 nm = 10⁻¹⁰ m</li>
        <li>1 cm⁻¹ = 1.240 × 10⁻⁴ eV</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GaussianGlossaryView'
}
</script>
