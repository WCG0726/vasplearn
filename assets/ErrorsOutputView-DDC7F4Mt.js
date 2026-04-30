import{_ as i,o as u,c as b,a as t,e,w as c,h as p,f as l,g as m}from"./index-Bd4xWfQT.js";const v={name:"ErrorsOutputView",methods:{copy(d){const o=d.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(o).then(()=>{d.target.textContent="已复制!",d.target.classList.add("ok"),setTimeout(()=>{d.target.textContent="复制",d.target.classList.remove("ok")},2e3)})}}},y={class:"sec active"},C={class:"bread"},k={class:"ec open"},f={class:"ec-b",style:{display:"block"}},g={class:"cb"},A={class:"ch"},T={class:"ec open"},E={class:"ec-b",style:{display:"block"}},O={class:"cb"},q={class:"ch"},R={class:"ec open"},S={class:"ec-b",style:{display:"block"}},M={class:"cb"},N={class:"ch"},V={class:"cb"},w={class:"ch"},I={class:"ec open"},U={class:"ec-b",style:{display:"block"}},x={class:"cb"},B={class:"ch"},G={class:"ec open"},P={class:"ec-b",style:{display:"block"}},F={class:"cb"},h={class:"ch"};function L(d,s,o,H,D,n){const r=m("router-link");return u(),b("div",y,[t("div",C,[e(r,{to:"/"},{default:c(()=>[...s[6]||(s[6]=[p("首页",-1)])]),_:1}),s[8]||(s[8]=p("/ ",-1)),e(r,{to:"/errors"},{default:c(()=>[...s[7]||(s[7]=[p("错误诊断",-1)])]),_:1}),s[9]||(s[9]=p("/ ",-1)),s[10]||(s[10]=t("span",null,"输出异常",-1))]),s[42]||(s[42]=t("h2",null,"输出异常诊断",-1)),s[43]||(s[43]=t("p",null,"计算完成但结果不合理时，需要排查输出文件中的异常。",-1)),t("div",k,[s[15]||(s[15]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 1：能量异常大或异常小"),t("span",{class:"es scm"},"常见")],-1)),t("div",f,[s[13]||(s[13]=l('<table class="tb"><thead><tr><th>现象</th><th>可能原因</th><th>解决方法</th></tr></thead><tbody><tr><td>能量 ~10⁶ eV</td><td>原子重叠（距离太近）</td><td>检查 POSCAR 原子距离</td></tr><tr><td>能量比文献差很多</td><td>POTCAR 泛函不匹配</td><td>确认使用正确的泛函</td></tr><tr><td>能量正数</td><td>严重结构错误</td><td>重新构建结构</td></tr><tr><td>NaN / Infinity</td><td>数值溢出</td><td>降低 ENCUT</td></tr><tr><td>能量不收敛</td><td>SCF 问题</td><td>参考 SCF 不收敛诊断</td></tr></tbody></table><h4>查看能量</h4>',2)),t("div",g,[t("div",A,[s[11]||(s[11]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...a)=>n.copy&&n.copy(...a))},"复制")]),s[12]||(s[12]=l(`<pre><code><span class="cm"># 查看自由能</span>
<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 查看能量变化</span>
<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR

<span class="cm"># 每原子能量（估算）</span>
<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR | <span class="fn2">tail</span> -1
<span class="cm"># 手动除以原子数</span></code></pre>`,1))]),s[14]||(s[14]=t("div",{class:"ib tip"},[t("strong",null,"参考值："),p("大多数材料的结合能在 -1 到 -10 eV/atom 范围内。如果偏离太多，需要检查计算设置。")],-1))])]),t("div",T,[s[22]||(s[22]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 2：力很大（> 1 eV/Å）"),t("span",{class:"es scm"},"常见")],-1)),t("div",E,[s[18]||(s[18]=t("h4",null,"症状",-1)),s[19]||(s[19]=t("p",null,"优化收敛后力仍然很大，或优化过程中力振荡。",-1)),s[20]||(s[20]=t("h4",null,"查看力",-1)),t("div",O,[t("div",q,[s[16]||(s[16]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...a)=>n.copy&&n.copy(...a))},"复制")]),s[17]||(s[17]=l(`<pre><code><span class="cm"># 查看最大力</span>
<span class="fn2">grep</span> <span class="st">&quot;TOTAL-FORCE&quot;</span> OUTCAR -A <span class="nu">20</span> | <span class="fn2">tail</span> -20

<span class="cm"># 查看力是否收敛</span>
<span class="fn2">grep</span> <span class="st">&quot;reached required&quot;</span> OUTCAR</code></pre>`,1))]),s[21]||(s[21]=l('<h4>正常值参考</h4><table class="tb"><thead><tr><th>状态</th><th>最大力</th><th>说明</th></tr></thead><tbody><tr><td>良好收敛</td><td>&lt; 0.01 eV/Å</td><td>高质量结果</td></tr><tr><td>一般收敛</td><td>0.01 - 0.05 eV/Å</td><td>大多数应用足够</td></tr><tr><td>勉强收敛</td><td>0.05 - 0.1 eV/Å</td><td>可接受但不理想</td></tr><tr><td>未收敛</td><td>&gt; 0.1 eV/Å</td><td>需要继续优化</td></tr><tr><td>有问题</td><td>&gt; 1.0 eV/Å</td><td>结构或计算有问题</td></tr></tbody></table><h4>解决方案</h4><ul><li>检查原子距离是否合理</li><li>增加 NSW 继续优化</li><li>减小 POTIM</li><li>降低 EDIFF 到 1E-7</li><li>增加 ENCUT</li></ul>',4))])]),t("div",R,[s[31]||(s[31]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 3：磁矩不合理"),t("span",{class:"es scm"},"常见")],-1)),t("div",S,[s[28]||(s[28]=t("h4",null,"查看磁矩",-1)),t("div",M,[t("div",N,[s[23]||(s[23]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...a)=>n.copy&&n.copy(...a))},"复制")]),s[24]||(s[24]=l(`<pre><code><span class="cm"># 查看总磁矩</span>
<span class="fn2">grep</span> <span class="st">&quot;number of electron&quot;</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 查看每个原子的磁矩</span>
<span class="fn2">grep</span> <span class="st">&quot;magnetization&quot;</span> OUTCAR -A <span class="nu">20</span></code></pre>`,1))]),s[29]||(s[29]=t("h4",null,"常见问题",-1)),s[30]||(s[30]=t("ul",null,[t("li",null,[t("strong",null,"磁矩为零但应有磁性"),p("：需要设置 ISPIN=2 和适当的 MAGMOM")]),t("li",null,[t("strong",null,"磁矩振荡"),p("：MAGMOM 初始值设置不当，尝试不同的初始值")]),t("li",null,[t("strong",null,"磁矩不合理"),p("：检查是否需要开启自旋轨道耦合（LSORBIT=.TRUE.）")])],-1)),t("div",V,[t("div",w,[s[25]||(s[25]=t("span",{class:"la"},"INCAR",-1)),s[26]||(s[26]=t("span",{class:"fn"},"磁性计算",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...a)=>n.copy&&n.copy(...a))},"复制")]),s[27]||(s[27]=l(`<pre><code><span class="cm"># 自旋极化计算</span>
<span class="kw">ISPIN</span>    = <span class="nu">2</span>             <span class="cm">; 开启自旋极化</span>

<span class="cm"># 初始磁矩设置</span>
<span class="kw">MAGMOM</span>   = <span class="nu">5 5 5 5</span>       <span class="cm">; 每个原子的初始磁矩 (μB)</span>

<span class="cm"># 过渡金属常见值</span>
<span class="cm"># Fe, Co, Ni: 3-5 μB</span>
<span class="cm"># Mn: 5 μB</span>
<span class="cm"># Cr: 3-5 μB</span>
<span class="cm"># Cu, Zn: 0 (d 满)</span></code></pre>`,1))])])]),t("div",I,[s[36]||(s[36]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 4：应力张量异常"),t("span",{class:"es scm"},"常见")],-1)),t("div",U,[s[34]||(s[34]=t("h4",null,"查看应力",-1)),t("div",x,[t("div",B,[s[32]||(s[32]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...a)=>n.copy&&n.copy(...a))},"复制")]),s[33]||(s[33]=l(`<pre><code><span class="cm"># 查看外部压力</span>
<span class="fn2">grep</span> <span class="st">&quot;external pressure&quot;</span> OUTCAR

<span class="cm"># 查看应力张量</span>
<span class="fn2">grep</span> <span class="st">&quot;in kB&quot;</span> OUTCAR | <span class="fn2">tail</span> -1</code></pre>`,1))]),s[35]||(s[35]=l('<h4>正常值参考</h4><table class="tb"><thead><tr><th>压力</th><th>状态</th><th>说明</th></tr></thead><tbody><tr><td>&lt; 1 kbar</td><td>很好</td><td>晶格已收敛</td></tr><tr><td>1 - 5 kbar</td><td>良好</td><td>大多数应用足够</td></tr><tr><td>5 - 20 kbar</td><td>一般</td><td>可接受但不理想</td></tr><tr><td>&gt; 20 kbar</td><td>差</td><td>需要继续优化</td></tr></tbody></table><div class="ib tip"><strong>单位换算：</strong>1 kbar = 0.1 GPa = 100 MPa</div>',3))])]),t("div",G,[s[41]||(s[41]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 5：能带带隙不合理"),t("span",{class:"es scm"},"常见")],-1)),t("div",P,[s[40]||(s[40]=l('<h4>问题分析</h4><table class="tb"><thead><tr><th>现象</th><th>可能原因</th><th>解决方法</th></tr></thead><tbody><tr><td>半导体显示为金属</td><td>GGA-PBE 低估带隙</td><td>使用杂化泛函 HSE06</td></tr><tr><td>带隙偏大</td><td>带隙计算方法问题</td><td>使用 ISMEAR=0 或 -5</td></tr><tr><td>间接带隙变直接</td><td>K 点不足</td><td>加密 K 点</td></tr></tbody></table><h4>准确计算带隙</h4>',3)),t("div",F,[t("div",h,[s[37]||(s[37]=t("span",{class:"la"},"INCAR",-1)),s[38]||(s[38]=t("span",{class:"fn"},"带隙计算",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...a)=>n.copy&&n.copy(...a))},"复制")]),s[39]||(s[39]=l(`<pre><code><span class="cm"># 方案 1：GGA-PBE（低估带隙）</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 方案 2：杂化泛函 HSE06（更准确但慢）</span>
<span class="kw">LHFCALC</span>  = <span class="nu">.TRUE.</span>
<span class="kw">AEXX</span>     = <span class="nu">0.25</span>
<span class="kw">HFSCREEN</span> = <span class="nu">0.2</span>
<span class="kw">ALGO</span>     = <span class="st">Damped</span>        <span class="cm">; HSE 推荐用 Damped</span>
<span class="kw">TIME</span>     = <span class="nu">0.4</span>

<span class="cm"># 方案 3：GW 计算（最准确但最慢）</span>
<span class="cm"># 需要分步进行，参考 VASP 手册</span></code></pre>`,1))])])])])}const W=i(v,[["render",L]]);export{W as default};
