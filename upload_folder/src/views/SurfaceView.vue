<template>
  <div class="sec active">
    <div class="bread">
      <router-link to="/">首页</router-link>/
      <router-link to="/tasks">计算任务</router-link>/
      <span>表面计算</span>
    </div>
    
    <h2>表面模型构建与计算</h2>
    <p>表面计算是催化、腐蚀、薄膜生长等研究的基础。VASP 使用 <strong>slab 模型</strong>来模拟表面。</p>

    <h3>1. Slab 模型结构</h3>
    <div class="db">
      <div class="db-t">Slab 模型示意图</div>
      <div style="text-align:center;font-family:var(--font-mono);font-size:13px;line-height:2.2;color:var(--text-secondary)">
        <div style="border:1px solid var(--border);border-radius:8px;padding:16px;display:inline-block;background:var(--bg-elevated);min-width:280px">
          <div style="color:var(--blue)">← 真空层 (≥12 Å) →</div>
          <div style="margin:8px 0;border-bottom:1px dashed var(--border-light);padding-bottom:8px">
            <div style="color:var(--red)">○ ○ ○ ○ ○ ← 吸附层（可选）</div>
          </div>
          <div style="color:var(--green)">● ● ● ● ● ← 表面层</div>
          <div style="color:var(--green)">● ● ● ● ● ← 次表面层</div>
          <div style="color:var(--text-muted)">○ ○ ○ ○ ○ ← 固定层</div>
          <div style="color:var(--text-muted)">○ ○ ○ ○ ○ ← 固定层</div>
          <div style="margin-top:8px;color:var(--accent);font-size:11px">底部 2-3 层固定，模拟体相</div>
        </div>
      </div>
    </div>

    <h3>2. 关键参数</h3>
    <table class="tb">
      <thead><tr><th>参数</th><th>建议</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td><strong>层数</strong></td><td>4-7 层</td><td>太薄不准确，太厚计算量大</td></tr>
        <tr><td><strong>真空层</strong></td><td>≥12 Å</td><td>防止 slab 间相互作用</td></tr>
        <tr><td><strong>固定层</strong></td><td>底部 2-3 层</td><td>模拟体相，用 Selective dynamics</td></tr>
        <tr><td><strong>表面尺寸</strong></td><td>依研究需要</td><td>1×1, 2×2 等</td></tr>
        <tr><td><strong>K 点</strong></td><td>k×k×1</td><td>z 方向为 1</td></tr>
      </tbody>
    </table>

    <h3>3. pymatgen 自动生成</h3>
    <div class="cb">
      <div class="ch"><span class="la">python</span><span class="fn">generate_slab.py</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">from</span> pymatgen.core <span class="kw">import</span> Structure
<span class="kw">from</span> pymatgen.core.surface <span class="kw">import</span> SlabGenerator

bulk = Structure.<span class="fn2">from_file</span>(<span class="st">"POSCAR_bulk"</span>)

slabgen = SlabGenerator(
    bulk, 
    miller_index=(<span class="nu">1</span>,<span class="nu">1</span>,<span class="nu">1</span>),
    min_slab_size=<span class="nu">10</span>,      <span class="cm">; slab 厚度 (Å)</span>
    min_vacuum_size=<span class="nu">15</span>,   <span class="cm">; 真空层厚度 (Å)</span>
    center_slab=<span class="kw">True</span>,
    in_unit_planes=<span class="kw">True</span>,
)
slabs = slabgen.<span class="fn2">get_slabs</span>()
slabs[<span class="nu">0</span>].<span class="fn2">to</span>(filename=<span class="st">"POSCAR_slab"</span>)
<span class="fn2">print</span>(<span class="st">f"原子数: {len(slabs[0])}"</span>)
<span class="fn2">print</span>(<span class="st">f"层数: {slabgen._nlayers_slab}"</span>)</code></pre>
    </div>

    <h3>4. INCAR 设置</h3>
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">表面优化</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">SYSTEM</span>   = <span class="st">Cu(111) surface</span>
<span class="kw">ENCUT</span>    = <span class="nu">450</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">2</span>              <span class="cm">; 表面必须 ISIF=2（只优化离子）</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.02</span>
<span class="kw">ISMEAR</span>   = <span class="nu">1</span>              <span class="cm">; MP 展宽（金属）</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.2</span>
<span class="kw">LDIPOL</span>   = <span class="nu">.TRUE.</span>         <span class="cm">; 偶极校正</span>
<span class="kw">IDIPOL</span>   = <span class="nu">3</span>              <span class="cm">; z 方向校正</span></code></pre>
    </div>

    <h3>5. KPOINTS 设置</h3>
    <div class="cb">
      <div class="ch"><span class="la">KPOINTS</span><span class="fn">表面计算</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code>Automatic mesh
0
Gamma
12 12 1               <span class="cm">; z 方向设为 1</span>
0.0 0.0 0.0</code></pre>
    </div>
    <div class="ib warn"><strong>重要：</strong>表面计算<strong>必须</strong>用 <code>ISIF=2</code>；KPOINTS z 方向设为 <code>1</code>；非对称 slab 开启偶极校正。</div>

    <h3>6. 表面能计算</h3>
    <div class="fb">
      <div class="fm">γ = (E_slab - N × E_bulk) / (2 × A)</div>
      <div class="fd">γ: 表面能, A: 表面积, 2: 两个表面, N: slab 中的原子数</div>
    </div>
    <div class="cb">
      <div class="ch"><span class="la">python</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 计算表面能</span>
E_slab = <span class="nu">-156.234</span>   <span class="cm">; slab 总能量 (eV)</span>
E_bulk = <span class="nu">-3.720</span>     <span class="cm">; 体相单原子能量 (eV/atom)</span>
N = <span class="nu">48</span>              <span class="cm">; slab 中的原子数</span>
A = <span class="nu">86.52</span>           <span class="cm">; 表面积 (Å²)</span>

gamma = (E_slab - N * E_bulk) / (<span class="nu">2</span> * A)
gamma_Jm2 = gamma * <span class="nu">16.02</span>  <span class="cm">; 转换为 J/m²</span>

<span class="fn2">print</span>(<span class="st">f"表面能: {gamma:.4f} eV/Å²"</span>)
<span class="fn2">print</span>(<span class="st">f"表面能: {gamma_Jm2:.2f} J/m²"</span>)</code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SurfaceView',
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
