<template>
  <div class="sec active">
    <div class="bread">
      <router-link to="/">首页</router-link>/
      <router-link to="/tasks">计算任务</router-link>/
      <span>声子计算</span>
    </div>
    
    <h2>声子计算</h2>
    <p>声子谱反映晶格动力学稳定性，虚频意味着结构不稳定。使用 phonopy + VASP 进行声子计算。</p>

    <h3>1. 计算流程</h3>
    <div class="fc">
      <div class="fn2-node s">优化结构（得到 CONTCAR）</div><div class="fa"></div>
      <div class="fn2-node p">phonopy --vasp -d --dim="3 3 3"</div><div class="fa"></div>
      <div class="fn2-node p">生成超胞 POSCAR（DISP-001, 002...）</div><div class="fa"></div>
      <div class="fn2-node p">对每个超胞做静态计算</div><div class="fa"></div>
      <div class="fn2-node p">phonopy -f DISP-*/vasprun.xml</div><div class="fa"></div>
      <div class="fn2-node e">phonopy-bandplot → 声子谱</div>
    </div>

    <h3>2. 优化 INCAR（高精度要求）</h3>
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">声子前结构优化</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">ENCUT</span>    = <span class="nu">500</span>           <span class="cm">; 需要较高精度</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-8</span>          <span class="cm">; 严格收敛（比普通计算更严）</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-1E-4</span>         <span class="cm">; 力收敛到 0.0001 eV/Å</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>             <span class="cm">; 优化离子+晶格</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>
    </div>
    <div class="ib warn"><strong>精度要求：</strong>声子计算对结构非常敏感。需要高 ENCUT、严格力收敛（<code>EDIFFG = -1E-4</code>）、足够 k 点。</div>

    <h3>3. 静态计算 INCAR</h3>
    <div class="cb">
      <div class="ch"><span class="la">INCAR</span><span class="fn">位移超胞静态计算</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">ENCUT</span>    = <span class="nu">500</span>           <span class="cm">; 与优化一致</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-8</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>            <span class="cm">; 不动离子</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>             <span class="cm">; 静态计算</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>
<span class="kw">LWAVE</span>    = <span class="nu">.FALSE.</span>        <span class="cm">; 不需要波函数</span>
<span class="kw">LCHARG</span>   = <span class="nu">.FALSE.</span>        <span class="cm">; 不需要电荷密度</span></code></pre>
    </div>

    <h3>4. 批量计算脚本</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><span class="fn">phonon_workflow.sh</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">#!/bin/bash</span>

<span class="cm"># 步骤 1：生成位移超胞</span>
<span class="fn2">cp</span> CONTCAR POSCAR-orig
<span class="fn2">phonopy</span> --vasp -d --dim=<span class="st">"3 3 3"</span>

<span class="cm"># 步骤 2：批量计算</span>
<span class="kw">for</span> d <span class="kw">in</span> DISP-*; <span class="kw">do</span>
    <span class="fn2">echo</span> <span class="st">"Calculating $d ..."</span>
    <span class="fn2">cd</span> $d
    <span class="fn2">cp</span> ../INCAR_static INCAR
    <span class="fn2">cp</span> ../POTCAR ./
    <span class="fn2">cp</span> ../KPOINTS ./
    <span class="fn2">mpirun</span> -np <span class="nu">16</span> vasp_std
    <span class="fn2">cd</span> ..
<span class="kw">done</span>

<span class="cm"># 步骤 3：提取力常数并生成声子谱</span>
<span class="fn2">phonopy</span> -f DISP-*/vasprun.xml
<span class="fn2">phonopy</span> --dim=<span class="st">"3 3 3"</span> -c POSCAR-orig band.conf
<span class="fn2">phonopy-bandplot</span></code></pre>
    </div>

    <h3>5. band.conf 配置文件</h3>
    <div class="cb">
      <div class="ch"><span class="la">band.conf</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># Si 声子谱配置</span>
ATOM_NAME = Si
DIM = 3 3 3
PRIMITIVE_AXIS = 1 0 0  0 1 0  0 0 1

<span class="cm"># 高对称路径（立方晶系）</span>
BAND = 0.0 0.0 0.5  0.0 0.5 0.5  0.5 0.5 0.5  0.0 0.0 0.0
BAND_LABELS = X  W  L  Γ
BAND_POINTS = 51

<span class="cm"># 输出设置</span>
FORCE_CONSTANTS = WRITE
EIGENVECTORS = .TRUE.</code></pre>
    </div>

    <h3>6. 声子 DOS 计算</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># mesh.conf 文件</span>
<span class="fn2">cat</span> > mesh.conf << EOF
ATOM_NAME = Si
DIM = 3 3 3
MESH = 20 20 20
MP = 0.0 0.0 0.0
TETRAHEDRON = .TRUE.
EOF

<span class="cm"># 计算声子 DOS</span>
<span class="fn2">phonopy</span> -f DISP-*/vasprun.xml
<span class="fn2">phonopy</span> -c POSCAR-orig mesh.conf
<span class="fn2">phonopy-dosplot</span></code></pre>
    </div>

    <h3>7. 虚频处理</h3>
    <table class="tb">
      <thead><tr><th>虚频情况</th><th>含义</th><th>处理方法</th></tr></thead>
      <tbody>
        <tr><td>无虚频</td><td>结构稳定</td><td>无需处理</td></tr>
        <tr><td>小虚频 (< 0.1 THz)</td><td>数值噪声</td><td>通常可忽略</td></tr>
        <tr><td>大虚频</td><td>结构不稳定</td><td>沿虚频模式扰动结构后重新优化</td></tr>
        <tr><td>声学模虚频</td><td>计算误差</td><td>提高精度或忽略</td></tr>
      </tbody>
    </table>
    
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 查看虚频</span>
<span class="fn2">grep</span> <span class="st">"f  ="</span> phonopy_output.yaml | <span class="fn2">head</span> -20

<span class="cm"># 如果有虚频，沿虚频模式扰动结构</span>
<span class="fn2">phonopy</span> --readfc --dim=<span class="st">"3 3 3"</span> -c POSCAR band.conf
<span class="cm"># 查看虚频对应的特征矢量，沿该方向微调原子位置</span></code></pre>
    </div>

    <h3>8. 常见问题</h3>
    <div class="ib warn"><strong>注意事项：</strong>
      <ul>
        <li>优化和静态计算必须使用相同的 ENCUT、KPOINTS 和 POTCAR</li>
        <li>超胞大小要足够（通常 2-4 倍原胞）</li>
        <li>力收敛标准要严格（EDIFFG = -1E-4 或更小）</li>
        <li>phonopy 版本要与 VASP 版本兼容</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhononView',
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
