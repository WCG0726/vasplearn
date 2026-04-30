import{_ as o,o as r,c as u,a as n,e as i,w as k,h as l,f as e,g as f}from"./index-BSmeIEo-.js";const b={name:"ConvergenceView",methods:{copy(a){const c=a.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(c).then(()=>{a.target.textContent="已复制!",a.target.classList.add("ok"),setTimeout(()=>{a.target.textContent="复制",a.target.classList.remove("ok")},2e3)})}}},m={class:"sec active"},C={class:"bread"},N={class:"cb"},x={class:"ch"},T={class:"cb"},g={class:"ch"},E={class:"cb"},$={class:"ch"};function w(a,s,c,y,v,t){const d=f("router-link");return r(),u("div",m,[n("div",C,[i(d,{to:"/"},{default:k(()=>[...s[3]||(s[3]=[l("首页",-1)])]),_:1}),s[4]||(s[4]=l("/ ",-1)),s[5]||(s[5]=n("span",null,"收敛性测试",-1))]),s[15]||(s[15]=n("h2",null,"收敛性测试",-1)),s[16]||(s[16]=n("p",null,"收敛性测试是确保计算结果可靠的关键步骤。需要测试 ENCUT 和 K 点两个参数。",-1)),s[17]||(s[17]=n("h3",null,"1. ENCUT 收敛测试",-1)),s[18]||(s[18]=n("p",null,"测试截断能对总能量的影响，确保能量已收敛。",-1)),n("div",N,[n("div",x,[s[6]||(s[6]=n("span",{class:"la"},"bash",-1)),s[7]||(s[7]=n("span",{class:"fn"},"encut_test.sh",-1)),n("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>t.copy&&t.copy(...p))},"复制")]),s[8]||(s[8]=e(`<pre><code><span class="kw">#!/bin/bash</span>

<span class="cm"># 测试不同 ENCUT</span>
<span class="kw">for</span> encut <span class="kw">in</span> <span class="nu">200 250 300 350 400 450 500 550 600</span>; <span class="kw">do</span>
    <span class="fn2">mkdir</span> ENCUT_\${encut}
    <span class="fn2">cp</span> POSCAR KPOINTS POTCAR ENCUT_\${encut}/
    
    <span class="cm"># 创建 INCAR</span>
    <span class="fn2">cat</span> &gt; ENCUT_\${encut}/INCAR &lt;&lt; EOF
SYSTEM = ENCUT test
ENCUT = \${encut}
PREC = Accurate
EDIFF = 1E-6
IBRION = -1
NSW = 0
ISMEAR = 0
SIGMA = 0.05
EOF
    
    <span class="cm"># 运行计算</span>
    <span class="fn2">cd</span> ENCUT_\${encut}
    <span class="fn2">mpirun</span> -np <span class="nu">4</span> vasp_std
    <span class="fn2">cd</span> ..
<span class="kw">done</span>

<span class="cm"># 提取能量</span>
<span class="fn2">echo</span> <span class="st">&quot;ENCUT(eV)    Energy(eV)&quot;</span>
<span class="kw">for</span> encut <span class="kw">in</span> <span class="nu">200 250 300 350 400 450 500 550 600</span>; <span class="kw">do</span>
    e=$(<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> ENCUT_\${encut}/OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $5}&#39;</span>)
    <span class="fn2">echo</span> <span class="st">&quot;\${encut}         \${e}&quot;</span>
<span class="kw">done</span></code></pre>`,1))]),s[19]||(s[19]=n("div",{class:"ib tip"},[n("strong",null,"判断标准："),l("相邻 ENCUT 能量差 < "),n("code",null,"1 meV/atom"),l(" 时收敛。例如：400 eV vs 450 eV 的能量差除以原子数应 < 0.001 eV/atom。")],-1)),s[20]||(s[20]=n("h3",null,"2. K 点收敛测试",-1)),s[21]||(s[21]=n("p",null,"测试 k 点密度对总能量的影响。",-1)),n("div",T,[n("div",g,[s[9]||(s[9]=n("span",{class:"la"},"bash",-1)),s[10]||(s[10]=n("span",{class:"fn"},"kpoint_test.sh",-1)),n("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>t.copy&&t.copy(...p))},"复制")]),s[11]||(s[11]=e(`<pre><code><span class="kw">#!/bin/bash</span>

<span class="cm"># 测试不同 K 点网格</span>
<span class="kw">for</span> k <span class="kw">in</span> <span class="nu">2 3 4 5 6 7 8 10 12</span>; <span class="kw">do</span>
    <span class="fn2">mkdir</span> KPOINTS_\${k}x\${k}x\${k}
    <span class="fn2">cp</span> POSCAR POTCAR INCAR KPOINTS_\${k}x\${k}x\${k}/
    
    <span class="cm"># 创建 KPOINTS</span>
    <span class="fn2">cat</span> &gt; KPOINTS_\${k}x\${k}x\${k}/KPOINTS &lt;&lt; EOF
Automatic mesh
0
Gamma
\${k} \${k} \${k}
0.0 0.0 0.0
EOF
    
    <span class="cm"># 运行计算</span>
    <span class="fn2">cd</span> KPOINTS_\${k}x\${k}x\${k}
    <span class="fn2">mpirun</span> -np <span class="nu">4</span> vasp_std
    <span class="fn2">cd</span> ..
<span class="kw">done</span>

<span class="cm"># 提取能量</span>
<span class="fn2">echo</span> <span class="st">&quot;K-points    Energy(eV)&quot;</span>
<span class="kw">for</span> k <span class="kw">in</span> <span class="nu">2 3 4 5 6 7 8 10 12</span>; <span class="kw">do</span>
    e=$(<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> KPOINTS_\${k}x\${k}x\${k}/OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $5}&#39;</span>)
    <span class="fn2">echo</span> <span class="st">&quot;\${k}x\${k}x\${k}     \${e}&quot;</span>
<span class="kw">done</span></code></pre>`,1))]),s[22]||(s[22]=e('<h3>3. K 点密度经验公式</h3><div class="fb"><div class="fm">N<sub>k</sub> × a ≈ 30</div><div class="fd">a 为晶格常数 (Å)，N<sub>k</sub> 为每方向的 k 点数</div></div><table class="tb"><thead><tr><th>晶格常数 a</th><th>推荐 N<sub>k</sub></th><th>网格</th></tr></thead><tbody><tr><td>3.0 Å</td><td>10</td><td>10×10×10</td></tr><tr><td>4.0 Å</td><td>8</td><td>8×8×8</td></tr><tr><td>5.0 Å</td><td>6</td><td>6×6×6</td></tr><tr><td>6.0 Å</td><td>5</td><td>5×5×5</td></tr><tr><td>8.0 Å</td><td>4</td><td>4×4×4</td></tr></tbody></table><h3>4. 不同材料的 K 点建议</h3><table class="tb"><thead><tr><th>材料类型</th><th>推荐 K 点</th><th>说明</th></tr></thead><tbody><tr><td>金属</td><td>8×8×8 或更密</td><td>费米面需要密集采样</td></tr><tr><td>半导体</td><td>4×4×4 ~ 6×6×6</td><td>通常足够</td></tr><tr><td>绝缘体</td><td>3×3×3 ~ 4×4×4</td><td>可稍稀疏</td></tr><tr><td>表面/slab</td><td>k×k×1</td><td>z 方向为 1</td></tr><tr><td>分子/团簇</td><td>1×1×1</td><td>无周期性</td></tr></tbody></table><h3>5. 绘制收敛图</h3>',6)),n("div",E,[n("div",$,[s[12]||(s[12]=n("span",{class:"la"},"python",-1)),s[13]||(s[13]=n("span",{class:"fn"},"plot_convergence.py",-1)),n("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>t.copy&&t.copy(...p))},"复制")]),s[14]||(s[14]=e(`<pre><code><span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># ENCUT 收敛数据</span>
encut = [<span class="nu">200</span>, <span class="nu">250</span>, <span class="nu">300</span>, <span class="nu">350</span>, <span class="nu">400</span>, <span class="nu">450</span>, <span class="nu">500</span>]
energy = [<span class="nu">-100.123</span>, <span class="nu">-100.456</span>, <span class="nu">-100.567</span>, <span class="nu">-100.612</span>, <span class="nu">-100.623</span>, <span class="nu">-100.625</span>, <span class="nu">-100.626</span>]

<span class="cm"># 相对于最高 ENCUT 的能量差</span>
ref = energy[-<span class="nu">1</span>]
delta = [(e - ref) * <span class="nu">1000</span> <span class="kw">for</span> e <span class="kw">in</span> energy]  <span class="cm"># meV</span>

fig, (ax1, ax2) = plt.subplots(<span class="nu">1</span>, <span class="nu">2</span>, figsize=(<span class="nu">10</span>, <span class="nu">4</span>))

ax1.plot(encut, energy, <span class="st">&#39;o-&#39;</span>)
ax1.set_xlabel(<span class="st">&#39;ENCUT (eV)&#39;</span>)
ax1.set_ylabel(<span class="st">&#39;Energy (eV)&#39;</span>)
ax1.set_title(<span class="st">&#39;ENCUT Convergence&#39;</span>)

ax2.plot(encut, delta, <span class="st">&#39;s-&#39;</span>)
ax2.axhline(y=<span class="nu">1</span>, color=<span class="st">&#39;r&#39;</span>, linestyle=<span class="st">&#39;--&#39;</span>, label=<span class="st">&#39;1 meV/atom threshold&#39;</span>)
ax2.set_xlabel(<span class="st">&#39;ENCUT (eV)&#39;</span>)
ax2.set_ylabel(<span class="st">&#39;ΔE (meV)&#39;</span>)
ax2.set_title(<span class="st">&#39;Energy Difference&#39;</span>)
ax2.legend()

plt.tight_layout()
plt.savefig(<span class="st">&#39;encut_convergence.png&#39;</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>`,1))]),s[23]||(s[23]=n("h3",null,"6. 收敛测试注意事项",-1)),s[24]||(s[24]=n("div",{class:"ib warn"},[n("strong",null,"重要提醒："),n("ul",null,[n("li",null,"固定其他参数，只改变一个变量"),n("li",null,"ENCUT 测试时使用足够密的 K 点"),n("li",null,"K 点测试时使用足够大的 ENCUT"),n("li",null,"计算每原子能量进行比较"),n("li",null,"对于精确计算（如能量差），收敛标准应更严格（< 0.5 meV/atom）")])],-1))])}const V=o(b,[["render",w]]);export{V as default};
