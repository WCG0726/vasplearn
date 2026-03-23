<template>
  <div class="sec active">
    <div class="bread">
      <router-link to="/">首页</router-link>/
      <span>收敛性测试</span>
    </div>
    
    <h2>收敛性测试</h2>
    <p>收敛性测试是确保计算结果可靠的关键步骤。需要测试 ENCUT 和 K 点两个参数。</p>

    <h3>1. ENCUT 收敛测试</h3>
    <p>测试截断能对总能量的影响，确保能量已收敛。</p>
    
    <div class="cb">
      <div class="ch"><span class="la">bash</span><span class="fn">encut_test.sh</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">#!/bin/bash</span>

<span class="cm"># 测试不同 ENCUT</span>
<span class="kw">for</span> encut <span class="kw">in</span> <span class="nu">200 250 300 350 400 450 500 550 600</span>; <span class="kw">do</span>
    <span class="fn2">mkdir</span> ENCUT_${encut}
    <span class="fn2">cp</span> POSCAR KPOINTS POTCAR ENCUT_${encut}/
    
    <span class="cm"># 创建 INCAR</span>
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
    
    <span class="cm"># 运行计算</span>
    <span class="fn2">cd</span> ENCUT_${encut}
    <span class="fn2">mpirun</span> -np <span class="nu">4</span> vasp_std
    <span class="fn2">cd</span> ..
<span class="kw">done</span>

<span class="cm"># 提取能量</span>
<span class="fn2">echo</span> <span class="st">"ENCUT(eV)    Energy(eV)"</span>
<span class="kw">for</span> encut <span class="kw">in</span> <span class="nu">200 250 300 350 400 450 500 550 600</span>; <span class="kw">do</span>
    e=$(<span class="fn2">grep</span> <span class="st">"free  energy"</span> ENCUT_${encut}/OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">'{print $5}'</span>)
    <span class="fn2">echo</span> <span class="st">"${encut}         ${e}"</span>
<span class="kw">done</span></code></pre>
    </div>

    <div class="ib tip"><strong>判断标准：</strong>相邻 ENCUT 能量差 < <code>1 meV/atom</code> 时收敛。例如：400 eV vs 450 eV 的能量差除以原子数应 < 0.001 eV/atom。</div>

    <h3>2. K 点收敛测试</h3>
    <p>测试 k 点密度对总能量的影响。</p>
    
    <div class="cb">
      <div class="ch"><span class="la">bash</span><span class="fn">kpoint_test.sh</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">#!/bin/bash</span>

<span class="cm"># 测试不同 K 点网格</span>
<span class="kw">for</span> k <span class="kw">in</span> <span class="nu">2 3 4 5 6 7 8 10 12</span>; <span class="kw">do</span>
    <span class="fn2">mkdir</span> KPOINTS_${k}x${k}x${k}
    <span class="fn2">cp</span> POSCAR POTCAR INCAR KPOINTS_${k}x${k}x${k}/
    
    <span class="cm"># 创建 KPOINTS</span>
    <span class="fn2">cat</span> > KPOINTS_${k}x${k}x${k}/KPOINTS << EOF
Automatic mesh
0
Gamma
${k} ${k} ${k}
0.0 0.0 0.0
EOF
    
    <span class="cm"># 运行计算</span>
    <span class="fn2">cd</span> KPOINTS_${k}x${k}x${k}
    <span class="fn2">mpirun</span> -np <span class="nu">4</span> vasp_std
    <span class="fn2">cd</span> ..
<span class="kw">done</span>

<span class="cm"># 提取能量</span>
<span class="fn2">echo</span> <span class="st">"K-points    Energy(eV)"</span>
<span class="kw">for</span> k <span class="kw">in</span> <span class="nu">2 3 4 5 6 7 8 10 12</span>; <span class="kw">do</span>
    e=$(<span class="fn2">grep</span> <span class="st">"free  energy"</span> KPOINTS_${k}x${k}x${k}/OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">'{print $5}'</span>)
    <span class="fn2">echo</span> <span class="st">"${k}x${k}x${k}     ${e}"</span>
<span class="kw">done</span></code></pre>
    </div>

    <h3>3. K 点密度经验公式</h3>
    <div class="fb">
      <div class="fm">N<sub>k</sub> × a ≈ 30</div>
      <div class="fd">a 为晶格常数 (Å)，N<sub>k</sub> 为每方向的 k 点数</div>
    </div>
    
    <table class="tb">
      <thead><tr><th>晶格常数 a</th><th>推荐 N<sub>k</sub></th><th>网格</th></tr></thead>
      <tbody>
        <tr><td>3.0 Å</td><td>10</td><td>10×10×10</td></tr>
        <tr><td>4.0 Å</td><td>8</td><td>8×8×8</td></tr>
        <tr><td>5.0 Å</td><td>6</td><td>6×6×6</td></tr>
        <tr><td>6.0 Å</td><td>5</td><td>5×5×5</td></tr>
        <tr><td>8.0 Å</td><td>4</td><td>4×4×4</td></tr>
      </tbody>
    </table>

    <h3>4. 不同材料的 K 点建议</h3>
    <table class="tb">
      <thead><tr><th>材料类型</th><th>推荐 K 点</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>金属</td><td>8×8×8 或更密</td><td>费米面需要密集采样</td></tr>
        <tr><td>半导体</td><td>4×4×4 ~ 6×6×6</td><td>通常足够</td></tr>
        <tr><td>绝缘体</td><td>3×3×3 ~ 4×4×4</td><td>可稍稀疏</td></tr>
        <tr><td>表面/slab</td><td>k×k×1</td><td>z 方向为 1</td></tr>
        <tr><td>分子/团簇</td><td>1×1×1</td><td>无周期性</td></tr>
      </tbody>
    </table>

    <h3>5. 绘制收敛图</h3>
    <div class="cb">
      <div class="ch"><span class="la">python</span><span class="fn">plot_convergence.py</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># ENCUT 收敛数据</span>
encut = [<span class="nu">200</span>, <span class="nu">250</span>, <span class="nu">300</span>, <span class="nu">350</span>, <span class="nu">400</span>, <span class="nu">450</span>, <span class="nu">500</span>]
energy = [<span class="nu">-100.123</span>, <span class="nu">-100.456</span>, <span class="nu">-100.567</span>, <span class="nu">-100.612</span>, <span class="nu">-100.623</span>, <span class="nu">-100.625</span>, <span class="nu">-100.626</span>]

<span class="cm"># 相对于最高 ENCUT 的能量差</span>
ref = energy[-<span class="nu">1</span>]
delta = [(e - ref) * <span class="nu">1000</span> <span class="kw">for</span> e <span class="kw">in</span> energy]  <span class="cm"># meV</span>

fig, (ax1, ax2) = plt.subplots(<span class="nu">1</span>, <span class="nu">2</span>, figsize=(<span class="nu">10</span>, <span class="nu">4</span>))

ax1.plot(encut, energy, <span class="st">'o-'</span>)
ax1.set_xlabel(<span class="st">'ENCUT (eV)'</span>)
ax1.set_ylabel(<span class="st">'Energy (eV)'</span>)
ax1.set_title(<span class="st">'ENCUT Convergence'</span>)

ax2.plot(encut, delta, <span class="st">'s-'</span>)
ax2.axhline(y=<span class="nu">1</span>, color=<span class="st">'r'</span>, linestyle=<span class="st">'--'</span>, label=<span class="st">'1 meV/atom threshold'</span>)
ax2.set_xlabel(<span class="st">'ENCUT (eV)'</span>)
ax2.set_ylabel(<span class="st">'ΔE (meV)'</span>)
ax2.set_title(<span class="st">'Energy Difference'</span>)
ax2.legend()

plt.tight_layout()
plt.savefig(<span class="st">'encut_convergence.png'</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>
    </div>

    <h3>6. 收敛测试注意事项</h3>
    <div class="ib warn"><strong>重要提醒：</strong>
      <ul>
        <li>固定其他参数，只改变一个变量</li>
        <li>ENCUT 测试时使用足够密的 K 点</li>
        <li>K 点测试时使用足够大的 ENCUT</li>
        <li>计算每原子能量进行比较</li>
        <li>对于精确计算（如能量差），收敛标准应更严格（< 0.5 meV/atom）</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConvergenceView',
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
