import{_ as u,o as f,c as e,a as n,e as i,w as r,h as l,f as t,g as v}from"./index-BSmeIEo-.js";const m={name:"PhononView",methods:{copy(o){const d=o.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(d).then(()=>{o.target.textContent="已复制!",o.target.classList.add("ok"),setTimeout(()=>{o.target.textContent="复制",o.target.classList.remove("ok")},2e3)})}}},b={class:"sec active"},C={class:"bread"},k={class:"cb"},A={class:"ch"},E={class:"cb"},I={class:"ch"},S={class:"cb"},w={class:"ch"},N={class:"cb"},y={class:"ch"},R={class:"cb"},T={class:"ch"},O={class:"cb"},P={class:"ch"};function D(o,s,d,F,g,a){const c=v("router-link");return f(),e("div",b,[n("div",C,[i(c,{to:"/"},{default:r(()=>[...s[6]||(s[6]=[l("首页",-1)])]),_:1}),s[8]||(s[8]=l("/ ",-1)),i(c,{to:"/tasks"},{default:r(()=>[...s[7]||(s[7]=[l("计算任务",-1)])]),_:1}),s[9]||(s[9]=l("/ ",-1)),s[10]||(s[10]=n("span",null,"声子计算",-1))]),s[26]||(s[26]=t('<h2>声子计算</h2><p>声子谱反映晶格动力学稳定性，虚频意味着结构不稳定。使用 phonopy + VASP 进行声子计算。</p><h3>1. 计算流程</h3><div class="fc"><div class="fn2-node s">优化结构（得到 CONTCAR）</div><div class="fa"></div><div class="fn2-node p">phonopy --vasp -d --dim=&quot;3 3 3&quot;</div><div class="fa"></div><div class="fn2-node p">生成超胞 POSCAR（DISP-001, 002...）</div><div class="fa"></div><div class="fn2-node p">对每个超胞做静态计算</div><div class="fa"></div><div class="fn2-node p">phonopy -f DISP-*/vasprun.xml</div><div class="fa"></div><div class="fn2-node e">phonopy-bandplot → 声子谱</div></div><h3>2. 优化 INCAR（高精度要求）</h3>',5)),n("div",k,[n("div",A,[s[11]||(s[11]=n("span",{class:"la"},"INCAR",-1)),s[12]||(s[12]=n("span",{class:"fn"},"声子前结构优化",-1)),n("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[13]||(s[13]=t(`<pre><code><span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">ENCUT</span>    = <span class="nu">500</span>           <span class="cm">; 需要较高精度</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-8</span>          <span class="cm">; 严格收敛（比普通计算更严）</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-1E-4</span>         <span class="cm">; 力收敛到 0.0001 eV/Å</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>             <span class="cm">; 优化离子+晶格</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>`,1))]),s[27]||(s[27]=n("div",{class:"ib warn"},[n("strong",null,"精度要求："),l("声子计算对结构非常敏感。需要高 ENCUT、严格力收敛（"),n("code",null,"EDIFFG = -1E-4"),l("）、足够 k 点。")],-1)),s[28]||(s[28]=n("h3",null,"3. 静态计算 INCAR",-1)),n("div",E,[n("div",I,[s[14]||(s[14]=n("span",{class:"la"},"INCAR",-1)),s[15]||(s[15]=n("span",{class:"fn"},"位移超胞静态计算",-1)),n("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[16]||(s[16]=t(`<pre><code><span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">ENCUT</span>    = <span class="nu">500</span>           <span class="cm">; 与优化一致</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-8</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>            <span class="cm">; 不动离子</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>             <span class="cm">; 静态计算</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>
<span class="kw">LWAVE</span>    = <span class="nu">.FALSE.</span>        <span class="cm">; 不需要波函数</span>
<span class="kw">LCHARG</span>   = <span class="nu">.FALSE.</span>        <span class="cm">; 不需要电荷密度</span></code></pre>`,1))]),s[29]||(s[29]=n("h3",null,"4. 批量计算脚本",-1)),n("div",S,[n("div",w,[s[17]||(s[17]=n("span",{class:"la"},"bash",-1)),s[18]||(s[18]=n("span",{class:"fn"},"phonon_workflow.sh",-1)),n("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[19]||(s[19]=t(`<pre><code><span class="kw">#!/bin/bash</span>

<span class="cm"># 步骤 1：生成位移超胞</span>
<span class="fn2">cp</span> CONTCAR POSCAR-orig
<span class="fn2">phonopy</span> --vasp -d --dim=<span class="st">&quot;3 3 3&quot;</span>

<span class="cm"># 步骤 2：批量计算</span>
<span class="kw">for</span> d <span class="kw">in</span> DISP-*; <span class="kw">do</span>
    <span class="fn2">echo</span> <span class="st">&quot;Calculating $d ...&quot;</span>
    <span class="fn2">cd</span> $d
    <span class="fn2">cp</span> ../INCAR_static INCAR
    <span class="fn2">cp</span> ../POTCAR ./
    <span class="fn2">cp</span> ../KPOINTS ./
    <span class="fn2">mpirun</span> -np <span class="nu">16</span> vasp_std
    <span class="fn2">cd</span> ..
<span class="kw">done</span>

<span class="cm"># 步骤 3：提取力常数并生成声子谱</span>
<span class="fn2">phonopy</span> -f DISP-*/vasprun.xml
<span class="fn2">phonopy</span> --dim=<span class="st">&quot;3 3 3&quot;</span> -c POSCAR-orig band.conf
<span class="fn2">phonopy-bandplot</span></code></pre>`,1))]),s[30]||(s[30]=n("h3",null,"5. band.conf 配置文件",-1)),n("div",N,[n("div",y,[s[20]||(s[20]=n("span",{class:"la"},"band.conf",-1)),n("button",{class:"cpb",onClick:s[3]||(s[3]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[21]||(s[21]=n("pre",null,[n("code",null,[n("span",{class:"cm"},"# Si 声子谱配置"),l(`
ATOM_NAME = Si
DIM = 3 3 3
PRIMITIVE_AXIS = 1 0 0  0 1 0  0 0 1

`),n("span",{class:"cm"},"# 高对称路径（立方晶系）"),l(`
BAND = 0.0 0.0 0.5  0.0 0.5 0.5  0.5 0.5 0.5  0.0 0.0 0.0
BAND_LABELS = X  W  L  Γ
BAND_POINTS = 51

`),n("span",{class:"cm"},"# 输出设置"),l(`
FORCE_CONSTANTS = WRITE
EIGENVECTORS = .TRUE.`)])],-1))]),s[31]||(s[31]=n("h3",null,"6. 声子 DOS 计算",-1)),n("div",R,[n("div",T,[s[22]||(s[22]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[4]||(s[4]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[23]||(s[23]=t(`<pre><code><span class="cm"># mesh.conf 文件</span>
<span class="fn2">cat</span> &gt; mesh.conf &lt;&lt; EOF
ATOM_NAME = Si
DIM = 3 3 3
MESH = 20 20 20
MP = 0.0 0.0 0.0
TETRAHEDRON = .TRUE.
EOF

<span class="cm"># 计算声子 DOS</span>
<span class="fn2">phonopy</span> -f DISP-*/vasprun.xml
<span class="fn2">phonopy</span> -c POSCAR-orig mesh.conf
<span class="fn2">phonopy-dosplot</span></code></pre>`,1))]),s[32]||(s[32]=t('<h3>7. 虚频处理</h3><table class="tb"><thead><tr><th>虚频情况</th><th>含义</th><th>处理方法</th></tr></thead><tbody><tr><td>无虚频</td><td>结构稳定</td><td>无需处理</td></tr><tr><td>小虚频 (&lt; 0.1 THz)</td><td>数值噪声</td><td>通常可忽略</td></tr><tr><td>大虚频</td><td>结构不稳定</td><td>沿虚频模式扰动结构后重新优化</td></tr><tr><td>声学模虚频</td><td>计算误差</td><td>提高精度或忽略</td></tr></tbody></table>',2)),n("div",O,[n("div",P,[s[24]||(s[24]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[5]||(s[5]=(...p)=>a.copy&&a.copy(...p))},"复制")]),s[25]||(s[25]=t(`<pre><code><span class="cm"># 查看虚频</span>
<span class="fn2">grep</span> <span class="st">&quot;f  =&quot;</span> phonopy_output.yaml | <span class="fn2">head</span> -20

<span class="cm"># 如果有虚频，沿虚频模式扰动结构</span>
<span class="fn2">phonopy</span> --readfc --dim=<span class="st">&quot;3 3 3&quot;</span> -c POSCAR band.conf
<span class="cm"># 查看虚频对应的特征矢量，沿该方向微调原子位置</span></code></pre>`,1))]),s[33]||(s[33]=n("h3",null,"8. 常见问题",-1)),s[34]||(s[34]=n("div",{class:"ib warn"},[n("strong",null,"注意事项："),n("ul",null,[n("li",null,"优化和静态计算必须使用相同的 ENCUT、KPOINTS 和 POTCAR"),n("li",null,"超胞大小要足够（通常 2-4 倍原胞）"),n("li",null,"力收敛标准要严格（EDIFFG = -1E-4 或更小）"),n("li",null,"phonopy 版本要与 VASP 版本兼容")])],-1))])}const x=u(m,[["render",D]]);export{x as default};
