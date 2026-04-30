import{_ as c,o as u,c as g,a as t,e as i,w as e,h as p,f as d,g as m}from"./index-BSmeIEo-.js";const h={name:"GaussianVaspCompareView",methods:{copy(r){const o=r.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(o).then(()=>{r.target.textContent="已复制!",r.target.classList.add("ok"),setTimeout(()=>{r.target.textContent="复制",r.target.classList.remove("ok")},2e3)})}}},b={class:"sec active"},S={class:"bread"},w={class:"cb"},P={class:"ch"},f={class:"cb"},k={class:"ch"},A={class:"cb"},G={class:"ch"},V={class:"cb"},y={class:"ch"};function v(r,s,o,C,B,n){const l=m("router-link");return u(),g("div",b,[t("div",S,[i(l,{to:"/"},{default:e(()=>[...s[4]||(s[4]=[p("首页",-1)])]),_:1}),s[6]||(s[6]=p("/ ",-1)),i(l,{to:"/gaussian"},{default:e(()=>[...s[5]||(s[5]=[p("Gaussian 教程",-1)])]),_:1}),s[7]||(s[7]=p("/ ",-1)),s[8]||(s[8]=t("span",null,"与 VASP 对比",-1))]),s[19]||(s[19]=d('<h2>Gaussian 与 VASP 对比</h2><p>了解两种软件的特点和适用场景，选择合适的计算工具。</p><h3>1. 基本对比</h3><table class="tb"><thead><tr><th>特性</th><th>Gaussian</th><th>VASP</th></tr></thead><tbody><tr><td><strong>计算体系</strong></td><td>分子、团簇</td><td>周期性体系</td></tr><tr><td><strong>基组类型</strong></td><td>高斯基组</td><td>平面波基组</td></tr><tr><td><strong>边界条件</strong></td><td>开放边界</td><td>周期性边界</td></tr><tr><td><strong>赝势</strong></td><td>不需要</td><td>PAW 赝势</td></tr><tr><td><strong>K 点采样</strong></td><td>不需要</td><td>需要</td></tr><tr><td><strong>适用体系大小</strong></td><td>小到中等</td><td>中等到大</td></tr></tbody></table><h3>2. 应用场景对比</h3><table class="tb"><thead><tr><th>应用场景</th><th>推荐软件</th><th>原因</th></tr></thead><tbody><tr><td>有机分子优化</td><td>Gaussian</td><td>分子专用，效率高</td></tr><tr><td>反应机理研究</td><td>Gaussian</td><td>过渡态搜索方便</td></tr><tr><td>晶体结构优化</td><td>VASP</td><td>周期性体系</td></tr><tr><td>表面计算</td><td>VASP</td><td>slab 模型</td></tr><tr><td>能带计算</td><td>VASP</td><td>周期性体系优势</td></tr><tr><td>高精度分子能量</td><td>Gaussian</td><td>CCSD(T) 等方法</td></tr><tr><td>大体系计算</td><td>VASP</td><td>平面波效率高</td></tr></tbody></table><h3>3. 计算方法对比</h3><table class="tb"><thead><tr><th>方法</th><th>Gaussian</th><th>VASP</th></tr></thead><tbody><tr><td><strong>DFT</strong></td><td>B3LYP, PBE0, M06 等</td><td>PBE, HSE06</td></tr><tr><td><strong>HF</strong></td><td>支持</td><td>不常用</td></tr><tr><td><strong>MP2</strong></td><td>支持</td><td>不支持</td></tr><tr><td><strong>CCSD(T)</strong></td><td>支持</td><td>不支持</td></tr><tr><td><strong>TDDFT</strong></td><td>支持</td><td>支持（GW/BSE）</td></tr><tr><td><strong>杂化泛函</strong></td><td>丰富</td><td>HSE06, PBE0</td></tr></tbody></table><h3>4. 输入文件对比</h3><h4>Gaussian 输入</h4>',10)),t("div",w,[t("div",P,[s[9]||(s[9]=t("span",{class:"la"},"input.gjf",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...a)=>n.copy&&n.copy(...a))},"复制")]),s[10]||(s[10]=d(`<pre><code><span class="cm">%chk=water.chk</span>
<span class="cm">%mem=4GB</span>
<span class="cm">%nproc=4</span>
<span class="cm">#p B3LYP/6-31G(d) opt freq</span>

<span class="vr">Water molecule</span>

<span class="nu">0 1</span>
<span class="vr">O</span>   <span class="nu">0.0  0.0  0.117</span>
<span class="vr">H</span>   <span class="nu">0.0  0.757 -0.469</span>
<span class="vr">H</span>   <span class="nu">0.0 -0.757 -0.469</span></code></pre>`,1))]),s[20]||(s[20]=t("h4",null,"VASP 输入",-1)),t("div",f,[t("div",k,[s[11]||(s[11]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...a)=>n.copy&&n.copy(...a))},"复制")]),s[12]||(s[12]=d(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">H2O</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">100</span>
<span class="kw">ISIF</span>     = <span class="nu">2</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>`,1))]),s[21]||(s[21]=d('<h3>5. 配合使用策略</h3><div class="db"><div class="db-t">典型配合使用场景</div><h4>场景 1：分子吸附到表面</h4><ol><li><strong>Gaussian</strong>：优化分子构型</li><li><strong>VASP</strong>：构建表面模型，放置分子，计算吸附能</li></ol><h4>场景 2：反应机理研究</h4><ol><li><strong>Gaussian</strong>：搜索过渡态，确认反应路径</li><li><strong>VASP</strong>：计算周期性体系中的反应</li></ol><h4>场景 3：材料中的分子</h4><ol><li><strong>Gaussian</strong>：研究孤立分子性质</li><li><strong>VASP</strong>：计算分子在材料中的行为</li></ol></div><h3>6. 文件格式转换</h3><h4>Gaussian → VASP</h4>',4)),t("div",A,[t("div",G,[s[13]||(s[13]=t("span",{class:"la"},"python",-1)),s[14]||(s[14]=t("span",{class:"fn"},"gjf2poscar.py",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...a)=>n.copy&&n.copy(...a))},"复制")]),s[15]||(s[15]=d(`<pre><code><span class="kw">from</span> ase.io <span class="kw">import</span> read, write

<span class="cm"># 读取 Gaussian 输出</span>
atoms = read(<span class="st">&#39;output.log&#39;</span>)

<span class="cm"># 转换为 POSCAR</span>
write(<span class="st">&#39;POSCAR&#39;</span>, atoms)

<span class="cm"># 对于周期性体系，需要添加晶胞</span>
<span class="kw">import</span> numpy <span class="kw">as</span> np
atoms.cell = np.diag([<span class="nu">15</span>, <span class="nu">15</span>, <span class="nu">15</span>])  <span class="cm"># 15Å 立方盒子</span>
atoms.pbc = <span class="kw">True</span>
write(<span class="st">&#39;POSCAR&#39;</span>, atoms)</code></pre>`,1))]),s[22]||(s[22]=t("h4",null,"VASP → Gaussian",-1)),t("div",V,[t("div",y,[s[16]||(s[16]=t("span",{class:"la"},"python",-1)),s[17]||(s[17]=t("span",{class:"fn"},"poscar2gjf.py",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...a)=>n.copy&&n.copy(...a))},"复制")]),s[18]||(s[18]=d(`<pre><code><span class="kw">from</span> ase.io <span class="kw">import</span> read, write

<span class="cm"># 读取 POSCAR</span>
atoms = read(<span class="st">&#39;POSCAR&#39;</span>)

<span class="cm"># 转换为 Gaussian 输入</span>
write(<span class="st">&#39;molecule.gjf&#39;</span>, atoms)

<span class="cm"># 或手动创建</span>
<span class="kw">with</span> <span class="fn2">open</span>(<span class="st">&#39;molecule.gjf&#39;</span>, <span class="st">&#39;w&#39;</span>) <span class="kw">as</span> f:
    f.write(<span class="st">&#39;%chk=molecule.chk\\n&#39;</span>)
    f.write(<span class="st">&#39;%mem=4GB\\n&#39;</span>)
    f.write(<span class="st">&#39;%nproc=4\\n&#39;</span>)
    f.write(<span class="st">&#39;#p B3LYP/6-31G(d) opt\\n\\n&#39;</span>)
    f.write(<span class="st">&#39;Molecule\\n\\n0 1\\n&#39;</span>)
    <span class="kw">for</span> atom <span class="kw">in</span> atoms:
        f.write(<span class="st">f&quot;{atom.symbol}  {atom.position[0]:.6f}  {atom.position[1]:.6f}  {atom.position[2]:.6f}\\n&quot;</span>)
    f.write(<span class="st">&#39;\\n&#39;</span>)</code></pre>`,1))]),s[23]||(s[23]=d('<h3>7. 计算成本对比</h3><table class="tb"><thead><tr><th>体系大小</th><th>Gaussian</th><th>VASP</th></tr></thead><tbody><tr><td>小分子（&lt; 50 原子）</td><td>✅ 快</td><td>❌ 慢（真空计算）</td></tr><tr><td>中等分子（50-200 原子）</td><td>⚠️ 中等</td><td>⚠️ 中等</td></tr><tr><td>大体系（&gt; 200 原子）</td><td>❌ 慢</td><td>✅ 快</td></tr><tr><td>周期性体系</td><td>❌ 不适合</td><td>✅ 适合</td></tr></tbody></table><h3>8. 选择建议</h3><div class="ib tip"><strong>选择原则：</strong><ul><li><strong>分子体系</strong>：优先使用 Gaussian</li><li><strong>周期性体系</strong>：使用 VASP</li><li><strong>高精度基准</strong>：使用 Gaussian (CCSD(T))</li><li><strong>大体系</strong>：使用 VASP</li><li><strong>反应机理</strong>：使用 Gaussian（过渡态搜索）</li><li><strong>能带/态密度</strong>：使用 VASP</li></ul></div><h3>9. 常见问题</h3><table class="tb"><thead><tr><th>问题</th><th>解答</th></tr></thead><tbody><tr><td>如何选择泛函？</td><td>Gaussian 用 B3LYP/M06，VASP 用 PBE/HSE06</td></tr><tr><td>能量如何比较？</td><td>两种软件的能量不能直接比较</td></tr><tr><td>如何验证结果？</td><td>与实验值对比，或用更高级方法验证</td></tr><tr><td>可以联合使用吗？</td><td>可以，分别用于不同目的</td></tr></tbody></table>',6))])}const T=c(h,[["render",v]]);export{T as default};
