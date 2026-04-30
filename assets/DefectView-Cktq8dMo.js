import{_ as r,o as i,c as b,a as n,e,w as o,h as a,f as u,g as f}from"./index-Bd4xWfQT.js";const v={name:"DefectView",methods:{copy(t){const c=t.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(c).then(()=>{t.target.textContent="已复制!",t.target.classList.add("ok"),setTimeout(()=>{t.target.textContent="复制",t.target.classList.remove("ok")},2e3)})}}},m={class:"sec active"},k={class:"bread"},y={class:"cb"},E={class:"ch"},A={class:"cb"},w={class:"ch"},C={class:"cb"},N={class:"ch"};function S(t,s,c,q,x,p){const d=f("router-link");return i(),b("div",m,[n("div",k,[e(d,{to:"/"},{default:o(()=>[...s[3]||(s[3]=[a("首页",-1)])]),_:1}),s[5]||(s[5]=a("/ ",-1)),e(d,{to:"/tasks"},{default:o(()=>[...s[4]||(s[4]=[a("计算任务",-1)])]),_:1}),s[6]||(s[6]=a("/ ",-1)),s[7]||(s[7]=n("span",null,"缺陷计算",-1))]),s[16]||(s[16]=u('<h2>点缺陷形成能计算</h2><p>点缺陷（空位、间隙、替位）是理解材料性质的关键，形成能决定了缺陷浓度。</p><h3>1. 缺陷类型</h3><table class="tb"><thead><tr><th>类型</th><th>符号</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>空位</td><td>V<sub>A</sub></td><td>缺少原子 A</td><td>V<sub>Si</sub> (Si 空位)</td></tr><tr><td>间隙</td><td>A<sub>i</sub></td><td>额外原子 A</td><td>O<sub>i</sub> (O 间隙)</td></tr><tr><td>替位</td><td>B<sub>A</sub></td><td>B 替代 A</td><td>N<sub>O</sub> (N 替代 O)</td></tr><tr><td>反位</td><td>A<sub>B</sub></td><td>A 占据 B 位</td><td>As<sub>Ga</sub></td></tr></tbody></table><h3>2. 形成能公式</h3><div class="fb"><div class="fm">E<sub>f</sub> = E<sub>defect</sub> - E<sub>perfect</sub> + Σ n<sub>i</sub>μ<sub>i</sub> + q(E<sub>VBM</sub> + E<sub>Fermi</sub>) + E<sub>corr</sub></div><div class="fd">n<sub>i</sub>: 原子数变化 | μ<sub>i</sub>: 化学势 | q: 电荷 | E<sub>corr</sub>: 有限尺寸校正</div></div><h3>3. 计算流程</h3><div class="fc"><div class="fn2-node s">构建完美超胞（如 3×3×3）</div><div class="fa"></div><div class="fn2-node p">优化完美超胞 → E<sub>perfect</sub></div><div class="fa"></div><div class="fn2-node p">引入缺陷（删除/替换/插入原子）</div><div class="fa"></div><div class="fn2-node p">优化缺陷超胞 → E<sub>defect</sub></div><div class="fa"></div><div class="fn2-node p">有限尺寸校正（FNV）</div><div class="fa"></div><div class="fn2-node e">计算缺陷形成能</div></div><h3>4. 超胞构建</h3>',9)),n("div",y,[n("div",E,[s[8]||(s[8]=n("span",{class:"la"},"python",-1)),s[9]||(s[9]=n("span",{class:"fn"},"build_supercell.py",-1)),n("button",{class:"cpb",onClick:s[0]||(s[0]=(...l)=>p.copy&&p.copy(...l))},"复制")]),s[10]||(s[10]=u(`<pre><code><span class="kw">from</span> pymatgen.core <span class="kw">import</span> Structure
<span class="kw">from</span> pymatgen.transformations.advanced_transformations <span class="kw">import</span> SupercellTransformation

<span class="cm"># 读取原胞</span>
prim = Structure.<span class="fn2">from_file</span>(<span class="st">&quot;POSCAR_prim&quot;</span>)

<span class="cm"># 创建 3x3x3 超胞</span>
sc_matrix = [[<span class="nu">3</span>,<span class="nu">0</span>,<span class="nu">0</span>],[<span class="nu">0</span>,<span class="nu">3</span>,<span class="nu">0</span>],[<span class="nu">0</span>,<span class="nu">0</span>,<span class="nu">3</span>]]
trans = SupercellTransformation(sc_matrix)
supercell = trans.<span class="fn2">apply_transformation</span>(prim)

supercell.<span class="fn2">to</span>(filename=<span class="st">&quot;POSCAR_supercell&quot;</span>)
<span class="fn2">print</span>(<span class="st">f&quot;原子数: {len(supercell)}&quot;</span>)

<span class="cm"># 创建空位</span>
<span class="kw">from</span> pymatgen.analysis.defects.core <span class="kw">import</span> Vacancy
vacancy = Vacancy(supercell, site_index=<span class="nu">0</span>)
defect_struct = vacancy.<span class="fn2">get_defect_structure</span>()
defect_struct.<span class="fn2">to</span>(filename=<span class="st">&quot;POSCAR_vacancy&quot;</span>)</code></pre>`,1))]),s[17]||(s[17]=n("h3",null,"5. 带电缺陷 INCAR",-1)),n("div",A,[n("div",w,[s[11]||(s[11]=n("span",{class:"la"},"INCAR",-1)),s[12]||(s[12]=n("span",{class:"fn"},"+1 电荷缺陷",-1)),n("button",{class:"cpb",onClick:s[1]||(s[1]=(...l)=>p.copy&&p.copy(...l))},"复制")]),s[13]||(s[13]=u(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si vacancy +1</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">2</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 带电缺陷关键参数</span>
<span class="kw">NELECT</span>   = <span class="nu">287</span>           <span class="cm">; 总电子数 = 完美超胞 NELECT - q</span>
<span class="kw">ISYM</span>     = <span class="nu">0</span>             <span class="cm">; 带电缺陷必须关闭对称性</span>
<span class="kw">NUPDOWN</span>  = <span class="nu">0</span>             <span class="cm">; 总自旋（如果不确定设为 0）</span></code></pre>`,1))]),s[18]||(s[18]=n("div",{class:"ib note"},[n("strong",null,"NELECT 计算："),a("先运行完美超胞，在 OUTCAR 中查找 NELECT。带 q 电荷的缺陷：NELECT"),n("sub",null,"defect"),a(" = NELECT"),n("sub",null,"perfect"),a(" - q")],-1)),s[19]||(s[19]=n("h3",null,"6. 有限尺寸校正",-1)),s[20]||(s[20]=n("p",null,"带电缺陷需要校正超胞有限尺寸效应，常用 FNV 方法：",-1)),n("div",C,[n("div",N,[s[14]||(s[14]=n("span",{class:"la"},"python",-1)),n("button",{class:"cpb",onClick:s[2]||(s[2]=(...l)=>p.copy&&p.copy(...l))},"复制")]),s[15]||(s[15]=u(`<pre><code><span class="kw">from</span> pymatgen.analysis.defects.corrections <span class="kw">import</span> FreysoldtCorrection

<span class="cm"># 使用 pymatgen 进行 FNV 校正</span>
correction = FreysoldtCorrection(
    dielectric=<span class="nu">10.0</span>,       <span class="cm">; 介电常数</span>
    defect_dir=<span class="st">&quot;defect_calc&quot;</span>,
    bulk_dir=<span class="st">&quot;bulk_calc&quot;</span>,
)
correction.<span class="fn2">get_correction</span>()</code></pre>`,1))]),s[21]||(s[21]=u('<h3>7. 化学势范围</h3><div class="db"><div class="db-t">化学势约束</div><p>对于化合物 A<sub>x</sub>B<sub>y</sub>：</p><ul><li>x·μ<sub>A</sub> + y·μ<sub>B</sub> = μ<sub>AB</sub>（化合物）</li><li>μ<sub>A</sub> ≤ μ<sub>A</sub><sup>0</sup>（元素参考态）</li><li>μ<sub>B</sub> ≤ μ<sub>B</sub><sup>0</sup></li></ul><p>常见极限：A-rich（μ<sub>A</sub> = μ<sub>A</sub><sup>0</sup>）和 A-poor（μ<sub>B</sub> = μ<sub>B</sub><sup>0</sup>）</p></div>',2))])}const g=r(v,[["render",S]]);export{g as default};
