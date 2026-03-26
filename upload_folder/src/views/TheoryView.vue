<template>
  <div class="sec active">
    <div class="bread"><router-link to="/">首页</router-link>/<span>理论基础</span></div>
    
    <h2>DFT 基本原理</h2>
    <p>密度泛函理论（DFT）是 VASP 的理论基石，将多电子问题简化为单电子问题。</p>

    <h3>1. Hohenberg-Kohn 定理</h3>
    <ul>
      <li><strong>第一定理：</strong>多电子体系的基态性质由电子密度 n(r) 唯一确定</li>
      <li><strong>第二定理：</strong>基态能量可通过能量泛函 E[n] 对密度的变分得到</li>
    </ul>
    <div class="ib note"><strong>核心思想：</strong>将求解 3N 维波函数的问题简化为求解 3 维电子密度，大幅降低计算复杂度。</div>

    <h3>2. Kohn-Sham 方程</h3>
    <div class="cb">
      <div class="ch"><span class="la">公式</span></div>
      <pre><code>⎡ -∇²/2 + V_eff(r) ⎤ φᵢ(r) = εᵢ φᵢ(r)
⎣                   ⎦

V_eff(r) = V_ext(r) + V_H(r) + V_xc(r)

- V_ext(r) ：外势（原子核产生的势）
- V_H(r)   ：Hartree 势（经典库仑作用）
- V_xc(r)  ：交换关联势（量子效应）</code></pre>
    </div>

    <h3>3. 自洽场（SCF）迭代</h3>
    <div class="fc">
      <div class="fn2-node s">猜测初始电子密度 n(r)</div><div class="fa"></div>
      <div class="fn2-node p">构建有效势 V_eff(r)</div><div class="fa"></div>
      <div class="fn2-node p">求解 Kohn-Sham 方程 → φᵢ, εᵢ</div><div class="fa"></div>
      <div class="fn2-node p">计算新密度 n_new(r)</div><div class="fa"></div>
      <div class="fn2-node p">判断收敛 |n_new - n_old| < ε ?</div><div class="fa"></div>
      <div class="fn2-node e">输出基态能量和电子结构</div>
    </div>

    <h3>4. 交换关联泛函</h3>
    <table class="tb">
      <thead><tr><th>层级</th><th>名称</th><th>精度</th><th>成本</th><th>适用</th></tr></thead>
      <tbody>
        <tr><td><strong>LDA</strong></td><td>局域密度近似</td><td>一般</td><td>低</td><td>金属晶格常数</td></tr>
        <tr><td><strong>GGA</strong></td><td>广义梯度近似</td><td>较好</td><td>低</td><td>最常用（PBE）</td></tr>
        <tr><td><strong>杂化</strong></td><td>HSE06/PBE0</td><td>很好</td><td>高</td><td>带隙</td></tr>
        <tr><td><strong>GW</strong></td><td>多体微扰</td><td>极好</td><td>极高</td><td>准粒子能带</td></tr>
      </tbody>
    </table>
    <div class="ib tip"><strong>建议：</strong>初学者从 <code class="ic">PBE</code> 开始，VASP 中通过 POTCAR 文件控制（PAW_PBE 对应 PBE）。</div>

    <h3>5. 赝势方法详解</h3>
    <p>VASP 使用 <strong>PAW（投影缀加波）</strong>方法，比超软赝势更精确，比全电子计算更高效。</p>
    
    <table class="tb">
      <thead><tr><th>赝势类型</th><th>适用场景</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td><code>PAW_PBE</code></td><td>常规计算（最常用）</td><td>GGA-PBE 泛函</td></tr>
        <tr><td><code>PAW_LDA</code></td><td>LDA 泛函</td><td>较少使用</td></tr>
        <tr><td><code>_sv</code> 后缀</td><td>半芯态重要的体系</td><td>如 3d 过渡金属</td></tr>
        <tr><td><code>_GW</code> 后缀</td><td>GW 计算</td><td>精度最高</td></tr>
        <tr><td><code>_d</code> 后缀</td><td>含 d 电子的 p 区元素</td><td>如 Ga, Ge, As</td></tr>
      </tbody>
    </table>

    <div class="cb">
      <div class="ch"><span class="la">POTCAR</span><span class="fn">关键参数</span></div>
      <pre><code><span class="vr">TITEL</span>  = <span class="st">PAW_PBE Si 05Jan2001</span>   <span class="cm">; 赝势类型和元素</span>
<span class="vr">ENMAX</span>  = <span class="nu">  249.570</span>              <span class="cm">; 推荐截断能</span>
<span class="vr">ZVAL</span>   = <span class="nu">    4.000</span>              <span class="cm">; 价电子数</span>
<span class="cm">; Si: 3s² 3p² → 4个价电子</span></code></pre>
    </div>

    <h3>6. 平面波基组</h3>
    <p>VASP 使用平面波作为基组，截断能 <code>ENCUT</code> 决定基组大小。</p>
    
    <div class="fb">
      <div class="fm">E<sub>cut</sub> = ℏ²G<sub>max</sub>² / 2m</div>
      <div class="fd">G<sub>max</sub>: 最大平面波矢量, E<sub>cut</sub>: 截断能</div>
    </div>
    
    <table class="tb">
      <thead><tr><th>截断能</th><th>精度</th><th>计算成本</th><th>适用场景</th></tr></thead>
      <tbody>
        <tr><td>< 200 eV</td><td>低</td><td>低</td><td>初步测试</td></tr>
        <tr><td>200-400 eV</td><td>中</td><td>中</td><td>常规计算</td></tr>
        <tr><td>400-600 eV</td><td>高</td><td>高</td><td>精确计算</td></tr>
        <tr><td>> 600 eV</td><td>极高</td><td>极高</td><td>特殊体系</td></tr>
      </tbody>
    </table>
    
    <div class="ib tip"><strong>确定方法：</strong><code class="ic">grep ENMAX POTCAR</code>，设 <code class="ic">ENCUT = 1.3 × ENMAX(max)</code></div>

    <h3>7. K 点采样</h3>
    <p>在周期性体系中，电子波函数满足布洛赫定理，需要在倒空间（k 空间）进行积分。</p>
    
    <div class="fb">
      <div class="fm">⟨O⟩ = (1/Nₖ) × Σ wₖ × O(kₖ)</div>
      <div class="fd">离散 k 点求和代替布里渊区积分</div>
    </div>
    
    <h4>K 点密度经验公式</h4>
    <div class="ib tip"><strong>经验法则：</strong><code class="ic">N_k × a ≈ 30</code>（a 为晶格常数，单位 Å）<br>例如 a = 5.43 Å → N_k ≈ 30/5.43 ≈ 6 → 使用 6×6×6 网格</div>
    
    <table class="tb">
      <thead><tr><th>材料类型</th><th>推荐 K 点</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>金属</td><td><code>8×8×8</code> 或更密</td><td>费米面需要密集采样</td></tr>
        <tr><td>半导体</td><td><code>4×4×4</code> ~ <code>6×6×6</code></td><td>通常足够</td></tr>
        <tr><td>绝缘体</td><td><code>3×3×3</code> ~ <code>4×4×4</code></td><td>可稍稀疏</td></tr>
        <tr><td>表面/slab</td><td><code>k×k×1</code></td><td>z 方向为 1</td></tr>
      </tbody>
    </table>

    <h3>8. DFT 与 VASP 参数对照表</h3>
    <table class="tb">
      <thead><tr><th>DFT 概念</th><th>VASP 参数</th><th>物理意义</th><th>设置建议</th></tr></thead>
      <tbody>
        <tr><td>交换关联泛函</td><td><code>POTCAR</code></td><td>近似处理电子关联</td><td>初学用 PBE</td></tr>
        <tr><td>平面波截断</td><td><code>ENCUT</code></td><td>基组大小</td><td>1.3 × ENMAX</td></tr>
        <tr><td>布里渊区积分</td><td><code>KPOINTS</code></td><td>倒空间采样</td><td>N_k × a ≈ 30</td></tr>
        <tr><td>收敛标准</td><td><code>EDIFF</code></td><td>电子步收敛阈值</td><td>1E-6</td></tr>
        <tr><td>展宽方法</td><td><code>ISMEAR</code></td><td>费米面处理</td><td>金属用 1，绝缘体用 0</td></tr>
        <tr><td>展宽宽度</td><td><code>SIGMA</code></td><td>展宽能量范围</td><td>0.05-0.2 eV</td></tr>
      </tbody>
    </table>

    <h3>9. 理论与计算的联系</h3>
    <div class="db">
      <div class="db-t">从理论到计算的思考方式</div>
      <p><strong>1. 明确计算目标</strong></p>
      <ul>
        <li>结构优化 → 关注力收敛 (<code>EDIFFG</code>)</li>
        <li>电子结构 → 关注 k 点和带隙</li>
        <li>热力学性质 → 关注能量精度</li>
      </ul>
      <p><strong>2. 选择合适的泛函</strong></p>
      <ul>
        <li>定性分析 → PBE 足够</li>
        <li>精确带隙 → 需要 HSE06</li>
        <li>强关联体系 → 需要 +U</li>
      </ul>
      <p><strong>3. 验证计算精度</strong></p>
      <ul>
        <li>做收敛性测试 (ENCUT, K 点)</li>
        <li>与实验值或文献比较</li>
        <li>检查结果的物理合理性</li>
      </ul>
    </div>

    <h3>10. 实际案例：Si 的计算</h3>
    <div class="cb">
      <div class="ch"><span class="la">POSCAR</span><span class="fn">Si 金刚石</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="vr">Si diamond</span>
<span class="nu">1.0</span>
<span class="nu">5.43  0.00  0.00</span>
<span class="nu">0.00  5.43  0.00</span>
<span class="nu">0.00  0.00  5.43</span>
<span class="vr">Si</span>
<span class="nu">2</span>
<span class="kw">Direct</span>
<span class="nu">0.00  0.00  0.00</span>
<span class="nu">0.25  0.25  0.25</span></code></pre>
    </div>
    
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">Si 结构优化</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si bulk optimization</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>              <span class="cm">; 1.3 × ENMAX(Si)</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>             <span class="cm">; 电子收敛标准</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>                <span class="cm">; CG 优化</span>
<span class="kw">NSW</span>      = <span class="nu">100</span>              <span class="cm">; 最大离子步</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>                <span class="cm">; 优化离子+晶格</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>                <span class="cm">; Gaussian 展宽</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>             <span class="cm">; 展宽宽度</span></code></pre>
    </div>

    <div class="cb">
      <div class="ch"><span class="la">KPOINTS</span><span class="fn">Gamma 中心</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="vr">Automatic mesh</span>
<span class="nu">0</span>
<span class="kw">Gamma</span>
<span class="nu">6  6  6</span>                <span class="cm">; N_k × 5.43 ≈ 30</span>
<span class="nu">0.0  0.0  0.0</span></code></pre>
    </div>

    <div class="ib tip"><strong>预期结果：</strong>Si 晶格常数 ~5.43 Å，带隙 ~0.6 eV (PBE 低估，实验值 1.1 eV)</div>

    <h3>11. 泛函选择指南</h3>
    <table class="tb">
      <thead><tr><th>计算目标</th><th>推荐泛函</th><th>理由</th></tr></thead>
      <tbody>
        <tr><td>结构优化</td><td>PBE</td><td>快速，晶格常数准确</td></tr>
        <tr><td>形成能</td><td>PBE</td><td>系统误差小</td></tr>
        <tr><td>精确带隙</td><td>HSE06</td><td>带隙准确</td></tr>
        <tr><td>磁性材料</td><td>PBE+U</td><td>处理强关联</td></tr>
        <tr><td>范德华材料</td><td>PBE-D3</td><td>包含 vdW 修正</td></tr>
        <tr><td>高精度能量</td><td>RPA/GW</td><td>最准确但最慢</td></tr>
      </tbody>
    </table>

    <h3>12. 常见问题与解答</h3>
    <div class="ec open" @click="toggle('q1')">
      <div class="ec-h"><span class="ei">❓</span><span class="et">为什么 PBE 低估带隙？</span></div>
      <div class="ec-b" style="display:block">
        <p>PBE 泛函的自相互作用误差导致带隙被系统性低估。这不是 VASP 的问题，而是 DFT 泛函的固有限制。解决方案是使用杂化泛函 (HSE06) 或 GW 方法。</p>
      </div>
    </div>
    
    <div class="ec open" @click="toggle('q2')">
      <div class="ec-h"><span class="ei">❓</span><span class="et">如何判断 ENCUT 是否足够？</span></div>
      <div class="ec-b" style="display:block">
        <p>做 ENCUT 收敛测试：计算不同 ENCUT 下的能量，当相邻 ENCUT 能量差 < 1 meV/atom 时，认为收敛。通常 ENCUT = 1.3 × ENMAX(max) 是安全的起点。</p>
      </div>
    </div>
    
    <div class="ec open" @click="toggle('q3')">
      <div class="ec-h"><span class="ei">❓</span><span class="et">什么时候需要 +U？</span></div>
      <div class="ec-b" style="display:block">
        <p>当体系含有 3d/4f 电子（如过渡金属氧化物）时，DFT 的局域近似处理不好电子强关联，导致带隙为零或磁矩错误。添加 Hubbard U 可以修正这个问题。常见 U 值：Fe: 4.0 eV, Co: 3.3 eV, Ni: 6.0 eV, Cu: 4.0 eV。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheoryView',
  data() {
    return {
      openSections: { q1: true, q2: true, q3: true }
    }
  },
  methods: {
    toggle(section) {
      this.openSections[section] = !this.openSections[section]
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
