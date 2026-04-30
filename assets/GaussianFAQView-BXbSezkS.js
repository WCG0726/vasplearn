import{_ as r,o as u,c as m,a as n,e as c,w as e,h as p,f as t,g as f}from"./index-BSmeIEo-.js";const v={name:"GaussianFAQView",methods:{copy(o){const d=o.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(d).then(()=>{o.target.textContent="已复制!",o.target.classList.add("ok"),setTimeout(()=>{o.target.textContent="复制",o.target.classList.remove("ok")},2e3)})}}},b={class:"sec active"},y={class:"bread"},g={class:"ec open"},q={class:"ec-b",style:{display:"block"}},k={class:"cb"},C={class:"ch"},G={class:"ec open"},B={class:"ec-b",style:{display:"block"}},L={class:"cb"},P={class:"ch"},w={class:"ec open"},F={class:"ec-b",style:{display:"block"}},Y={class:"cb"},S={class:"ch"},x={class:"ec open"},T={class:"ec-b",style:{display:"block"}},h={class:"cb"},j={class:"ch"},D={class:"ec open"},N={class:"ec-b",style:{display:"block"}},O={class:"cb"},V={class:"ch"},H={class:"ec open"},M={class:"ec-b",style:{display:"block"}},Q={class:"cb"},A={class:"ch"},E={class:"ec open"},I={class:"ec-b",style:{display:"block"}},R={class:"cb"},Z={class:"ch"},z={class:"ec open"},J={class:"ec-b",style:{display:"block"}},U={class:"cb"},X={class:"ch"},K={class:"ec open"},W={class:"ec-b",style:{display:"block"}},$={class:"cb"},_={class:"ch"},ss={class:"ec open"},ns={class:"ec-b",style:{display:"block"}},as={class:"cb"},ls={class:"ch"},ts={class:"cb"},ps={class:"ch"};function os(o,s,d,ds,is,a){const i=f("router-link");return u(),m("div",b,[n("div",y,[c(i,{to:"/"},{default:e(()=>[...s[11]||(s[11]=[p("首页",-1)])]),_:1}),s[13]||(s[13]=p("/ ",-1)),c(i,{to:"/gaussian"},{default:e(()=>[...s[12]||(s[12]=[p("Gaussian 教程",-1)])]),_:1}),s[14]||(s[14]=p("/ ",-1)),s[15]||(s[15]=n("span",null,"常见问题",-1))]),s[75]||(s[75]=n("h2",null,"Gaussian 常见问题",-1)),s[76]||(s[76]=n("p",null,"本节汇总 Gaussian 使用过程中的常见问题和解决方法。",-1)),s[77]||(s[77]=n("h3",null,"1. 计算不收敛",-1)),n("div",g,[s[23]||(s[23]=n("div",{class:"ec-h"},[n("span",{class:"ei"},"🔴"),n("span",{class:"et"},"问题 1：SCF 不收敛"),n("span",{class:"es sc"},"高频")],-1)),n("div",q,[s[18]||(s[18]=n("h4",null,"症状",-1)),s[19]||(s[19]=n("div",{class:"esym"},"SCF has not converged after 128 cycles",-1)),s[20]||(s[20]=n("h4",null,"原因",-1)),s[21]||(s[21]=n("ul",null,[n("li",null,"初始猜测不好"),n("li",null,"体系本身难以收敛"),n("li",null,"泛函/基组选择不当")],-1)),s[22]||(s[22]=n("h4",null,"解决方案",-1)),n("div",k,[n("div",C,[s[16]||(s[16]=n("span",{class:"la"},"gjf",-1)),n("button",{class:"cpb",onClick:s[0]||(s[0]=(...l)=>a.copy&&a.copy(...l))},"复制")]),s[17]||(s[17]=t(`<pre><code><span class="cm"># 方案 1：增加迭代次数</span>
<span class="cm">#p B3LYP/6-31G(d) scf=(maxcycle=300)</span>

<span class="cm"># 方案 2：使用更稳定的 SCF 方法</span>
<span class="cm">#p B3LYP/6-31G(d) scf=xqc</span>

<span class="cm"># 方案 3：使用能级移动</span>
<span class="cm">#p B3LYP/6-31G(d) scf=(vshift=100)</span>

<span class="cm"># 方案 4：从检查点继续</span>
<span class="cm">#p B3LYP/6-31G(d) guess=read</span>

<span class="cm"># 方案 5：使用 Fermi 展宽</span>
<span class="cm">#p B3LYP/6-31G(d) scf=fermi</span></code></pre>`,1))])])]),n("div",G,[s[31]||(s[31]=n("div",{class:"ec-h"},[n("span",{class:"ei"},"🔴"),n("span",{class:"et"},"问题 2：优化不收敛"),n("span",{class:"es sc"},"高频")],-1)),n("div",B,[s[26]||(s[26]=n("h4",null,"症状",-1)),s[27]||(s[27]=n("div",{class:"esym"},"Optimization did not converge after 100 steps",-1)),s[28]||(s[28]=n("h4",null,"原因",-1)),s[29]||(s[29]=n("ul",null,[n("li",null,"初始结构太差"),n("li",null,"势能面太复杂"),n("li",null,"步长不合适")],-1)),s[30]||(s[30]=n("h4",null,"解决方案",-1)),n("div",L,[n("div",P,[s[24]||(s[24]=n("span",{class:"la"},"gjf",-1)),n("button",{class:"cpb",onClick:s[1]||(s[1]=(...l)=>a.copy&&a.copy(...l))},"复制")]),s[25]||(s[25]=t(`<pre><code><span class="cm"># 方案 1：增加优化步数</span>
<span class="cm">#p B3LYP/6-31G(d) opt=(maxstep=200)</span>

<span class="cm"># 方案 2：使用更宽松的收敛</span>
<span class="cm">#p B3LYP/6-31G(d) opt=loose</span>

<span class="cm"># 方案 3：计算初始力常数</span>
<span class="cm">#p B3LYP/6-31G(d) opt=calcfc</span>

<span class="cm"># 方案 4：从检查点读取力常数</span>
<span class="cm">#p B3LYP/6-31G(d) opt=readfc</span>

<span class="cm"># 方案 5：先用小基组优化，再用大基组</span>
<span class="cm">#p B3LYP/3-21G opt  (第一步)</span>
<span class="cm">#p B3LYP/6-31G(d) opt guess=read  (第二步)</span></code></pre>`,1))])])]),s[78]||(s[78]=n("h3",null,"2. 内存和磁盘问题",-1)),n("div",w,[s[37]||(s[37]=n("div",{class:"ec-h"},[n("span",{class:"ei"},"🟡"),n("span",{class:"et"},"问题 3：内存不足"),n("span",{class:"es scm"},"常见")],-1)),n("div",F,[s[34]||(s[34]=n("h4",null,"症状",-1)),s[35]||(s[35]=n("div",{class:"esym"},"Insufficient memory for direct SCF",-1)),s[36]||(s[36]=n("h4",null,"解决方案",-1)),n("div",Y,[n("div",S,[s[32]||(s[32]=n("span",{class:"la"},"gjf",-1)),n("button",{class:"cpb",onClick:s[2]||(s[2]=(...l)=>a.copy&&a.copy(...l))},"复制")]),s[33]||(s[33]=t(`<pre><code><span class="cm"># 增加内存</span>
<span class="cm">%mem=64GB</span>

<span class="cm"># 或使用积分存储</span>
<span class="cm">#p B3LYP/6-31G(d) scf=conventional</span>

<span class="cm"># 或使用较小基组</span>
<span class="cm">#p B3LYP/6-31G(d)  →  #p B3LYP/3-21G</span></code></pre>`,1))])])]),s[79]||(s[79]=t('<div class="ec open"><div class="ec-h"><span class="ei">🟡</span><span class="et">问题 4：磁盘空间不足</span><span class="es scm">常见</span></div><div class="ec-b" style="display:block;"><h4>症状</h4><div class="esym">No space left on device</div><h4>解决方案</h4><ol><li>清理临时文件：<code>rm -rf /tmp/gaussian/*</code></li><li>使用更大空间的目录：<code>%scr=/big_disk</code></li><li>删除旧的 .chk 文件</li><li>使用 <code>%kjob=L302</code> 完成后删除 chk</li></ol></div></div><h3>3. 结构问题</h3>',2)),n("div",x,[s[41]||(s[41]=n("div",{class:"ec-h"},[n("span",{class:"ei"},"🟡"),n("span",{class:"et"},"问题 5：有虚频"),n("span",{class:"es scm"},"常见")],-1)),n("div",T,[s[40]||(s[40]=t('<h4>症状</h4><div class="esym">Frequencies: -123.45 678.90 ...</div><h4>原因</h4><ul><li>结构是过渡态（只有一个虚频，正常）</li><li>结构未完全优化</li><li>对称性限制导致</li></ul><h4>解决方案</h4><ol><li>检查虚频对应的振动模式</li><li>如果是高阶鞍点，沿虚频方向扰动结构</li><li>使用更严格的优化：<code>opt=tight</code></li><li>移除对称性限制</li></ol>',6)),n("div",h,[n("div",j,[s[38]||(s[38]=n("span",{class:"la"},"python",-1)),n("button",{class:"cpb",onClick:s[3]||(s[3]=(...l)=>a.copy&&a.copy(...l))},"复制")]),s[39]||(s[39]=t(`<pre><code><span class="cm"># 沿虚频方向扰动结构</span>
<span class="kw">from</span> ase.io <span class="kw">import</span> read, write

atoms = read(<span class="st">&#39;output.log&#39;</span>)
<span class="cm"># 手动扰动原子位置</span>
positions = atoms.get_positions()
positions[<span class="nu">0</span>] += [<span class="nu">0.01</span>, <span class="nu">0</span>, <span class="nu">0</span>]  <span class="cm"># 微调第一个原子</span>
atoms.set_positions(positions)
write(<span class="st">&#39;distorted.gjf&#39;</span>, atoms)</code></pre>`,1))])])]),n("div",D,[s[47]||(s[47]=n("div",{class:"ec-h"},[n("span",{class:"ei"},"🟡"),n("span",{class:"et"},"问题 6：线性分子优化失败"),n("span",{class:"es scm"},"常见")],-1)),n("div",N,[s[44]||(s[44]=n("h4",null,"症状",-1)),s[45]||(s[45]=n("p",null,"线性分子（如 CO₂, HCN）优化时结构变形。",-1)),s[46]||(s[46]=n("h4",null,"解决方案",-1)),n("div",O,[n("div",V,[s[42]||(s[42]=n("span",{class:"la"},"gjf",-1)),n("button",{class:"cpb",onClick:s[4]||(s[4]=(...l)=>a.copy&&a.copy(...l))},"复制")]),s[43]||(s[43]=t(`<pre><code><span class="cm"># 使用 Z-matrix 并指定对称性</span>
<span class="cm">#p B3LYP/6-31G(d) opt=(Z-Matrix)</span>

<span class="nu">0 1</span>
<span class="vr">C</span>
<span class="vr">O</span>  <span class="nu">1</span>  <span class="nu">rCO</span>
<span class="vr">O</span>  <span class="nu">1</span>  <span class="nu">rCO</span>  <span class="nu">2</span>  <span class="nu">180.0</span>

<span class="nu">rCO=1.16</span></code></pre>`,1))])])]),s[80]||(s[80]=n("h3",null,"4. 电荷和自旋问题",-1)),n("div",H,[s[52]||(s[52]=n("div",{class:"ec-h"},[n("span",{class:"ei"},"🟡"),n("span",{class:"et"},"问题 7：电荷/自旋设置错误"),n("span",{class:"es scm"},"常见")],-1)),n("div",M,[s[51]||(s[51]=t('<h4>症状</h4><ul><li>能量异常高</li><li>收敛困难</li><li>结果不合理</li></ul><h4>正确设置方法</h4><table class="tb"><thead><tr><th>体系</th><th>电荷</th><th>自旋</th><th>示例</th></tr></thead><tbody><tr><td>闭壳层分子</td><td>0</td><td>1</td><td>H₂O, CH₄</td></tr><tr><td>开壳层单重态</td><td>0</td><td>1</td><td>卡宾</td></tr><tr><td>开壳层双自由基</td><td>0</td><td>3</td><td>O₂</td></tr><tr><td>阳离子</td><td>+1</td><td>1 或 2</td><td>CH₃⁺</td></tr><tr><td>阴离子</td><td>-1</td><td>1 或 2</td><td>CH₃⁻</td></tr></tbody></table>',4)),n("div",Q,[n("div",A,[s[48]||(s[48]=n("span",{class:"la"},"gjf",-1)),s[49]||(s[49]=n("span",{class:"fn"},"正确格式",-1)),n("button",{class:"cpb",onClick:s[5]||(s[5]=(...l)=>a.copy&&a.copy(...l))},"复制")]),s[50]||(s[50]=t(`<pre><code><span class="cm"># 电荷 自旋</span>
<span class="nu">0 1</span>      <span class="cm">; 中性闭壳层</span>
<span class="nu">1 2</span>      <span class="cm">; +1 阳离子，双态</span>
<span class="nu">-1 1</span>     <span class="cm">; -1 阴离子，单态</span>
<span class="nu">0 3</span>      <span class="cm">; 中性三重态</span></code></pre>`,1))])])]),s[81]||(s[81]=n("h3",null,"5. 过渡态问题",-1)),n("div",E,[s[57]||(s[57]=n("div",{class:"ec-h"},[n("span",{class:"ei"},"🔴"),n("span",{class:"et"},"问题 8：找不到过渡态"),n("span",{class:"es sc"},"高频")],-1)),n("div",I,[s[56]||(s[56]=t("<h4>原因</h4><ul><li>初始猜测太差</li><li>势能面太复杂</li><li>反应不是基元反应</li></ul><h4>解决方案</h4><ol><li><strong>改进初始猜测</strong>：手动构建过渡态结构</li><li><strong>使用 QST2/QST3</strong>：提供反应物和产物</li><li><strong>使用 GSM</strong>：Growing String Method</li><li><strong>扫描反应坐标</strong>：找到近似过渡态</li></ol>",4)),n("div",R,[n("div",Z,[s[53]||(s[53]=n("span",{class:"la"},"gjf",-1)),s[54]||(s[54]=n("span",{class:"fn"},"QST2 示例",-1)),n("button",{class:"cpb",onClick:s[6]||(s[6]=(...l)=>a.copy&&a.copy(...l))},"复制")]),s[55]||(s[55]=t(`<pre><code><span class="cm">#p B3LYP/6-31G(d) opt=(qst2,calcfc)</span>

<span class="vr">Reactant</span>

<span class="nu">0 1</span>
<span class="cm">[反应物坐标]</span>

<span class="vr">Product</span>

<span class="nu">0 1</span>
<span class="cm">[产物坐标]</span></code></pre>`,1))])])]),s[82]||(s[82]=n("h3",null,"6. TDDFT 问题",-1)),n("div",z,[s[61]||(s[61]=n("div",{class:"ec-h"},[n("span",{class:"ei"},"🟡"),n("span",{class:"et"},"问题 9：TDDFT 激发态不合理"),n("span",{class:"es scm"},"常见")],-1)),n("div",J,[s[60]||(s[60]=t('<h4>原因</h4><ul><li>泛函选择不当</li><li>基组太小</li><li>计算的激发态数不够</li></ul><h4>解决方案</h4><table class="tb"><thead><tr><th>问题</th><th>解决方案</th></tr></thead><tbody><tr><td>UV-Vis 偏差大</td><td>使用 CAM-B3LYP 或 ωB97X-D</td></tr><tr><td>电荷转移激发不准</td><td>使用范围分离泛函</td></tr><tr><td>缺少数值</td><td>增加 nstates</td></tr><tr><td>需要三重态</td><td>添加 triplets 关键词</td></tr></tbody></table>',4)),n("div",U,[n("div",X,[s[58]||(s[58]=n("span",{class:"la"},"gjf",-1)),n("button",{class:"cpb",onClick:s[7]||(s[7]=(...l)=>a.copy&&a.copy(...l))},"复制")]),s[59]||(s[59]=n("pre",null,[n("code",null,[n("span",{class:"cm"},"# 推荐 TDDFT 设置"),p(`
`),n("span",{class:"cm"},"#p CAM-B3LYP/6-31+G(d,p) td=(nstates=20,triplets)")])],-1))])])]),s[83]||(s[83]=n("h3",null,"7. 频率计算问题",-1)),n("div",K,[s[65]||(s[65]=n("div",{class:"ec-h"},[n("span",{class:"ei"},"🟡"),n("span",{class:"et"},"问题 10：频率计算结果异常"),n("span",{class:"es scm"},"常见")],-1)),n("div",W,[s[64]||(s[64]=t("<h4>症状</h4><ul><li>频率值异常大或小</li><li>热化学量不合理</li><li>IR 强度为零</li></ul><h4>解决方案</h4><ol><li>确保在优化后的结构上计算频率</li><li>使用相同的泛函和基组</li><li>检查是否有虚频</li><li>对于非谐性，使用 freq=anharm</li></ol>",4)),n("div",$,[n("div",_,[s[62]||(s[62]=n("span",{class:"la"},"gjf",-1)),n("button",{class:"cpb",onClick:s[8]||(s[8]=(...l)=>a.copy&&a.copy(...l))},"复制")]),s[63]||(s[63]=n("pre",null,[n("code",null,[n("span",{class:"cm"},"# 优化+频率一起计算（推荐）"),p(`
`),n("span",{class:"cm"},"#p B3LYP/6-31G(d) opt freq"),p(`

`),n("span",{class:"cm"},"# 非谐性频率"),p(`
`),n("span",{class:"cm"},"#p B3LYP/6-31G(d) freq=anharm")])],-1))])])]),s[84]||(s[84]=n("h3",null,"8. 输出文件问题",-1)),n("div",ss,[s[71]||(s[71]=n("div",{class:"ec-h"},[n("span",{class:"ei"},"🟢"),n("span",{class:"et"},"问题 11：输出文件为空或截断"),n("span",{class:"es smn"},"少见")],-1)),n("div",ns,[s[68]||(s[68]=n("h4",null,"原因",-1)),s[69]||(s[69]=n("ul",null,[n("li",null,"计算被中断（系统崩溃、时间限制）"),n("li",null,"磁盘空间不足"),n("li",null,"内存错误")],-1)),s[70]||(s[70]=n("h4",null,"恢复方法",-1)),n("div",as,[n("div",ls,[s[66]||(s[66]=n("span",{class:"la"},"gjf",-1)),n("button",{class:"cpb",onClick:s[9]||(s[9]=(...l)=>a.copy&&a.copy(...l))},"复制")]),s[67]||(s[67]=t(`<pre><code><span class="cm"># 从检查点恢复</span>
<span class="cm">%chk=old.chk</span>
<span class="cm">#p B3LYP/6-31G(d) opt guess=read geom=check</span>

<span class="vr">Restart from checkpoint</span>

<span class="nu">0 1</span></code></pre>`,1))])])]),s[85]||(s[85]=n("h3",null,"9. 快速诊断方法",-1)),n("div",ts,[n("div",ps,[s[72]||(s[72]=n("span",{class:"la"},"bash",-1)),s[73]||(s[73]=n("span",{class:"fn"},"诊断脚本",-1)),n("button",{class:"cpb",onClick:s[10]||(s[10]=(...l)=>a.copy&&a.copy(...l))},"复制")]),s[74]||(s[74]=t(`<pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># gaussian_diagnose.sh</span>

<span class="fn2">echo</span> <span class="st">&quot;=== Gaussian 计算诊断 ===&quot;</span>
<span class="fn2">echo</span>

<span class="cm"># 检查是否正常结束</span>
<span class="fn2">echo</span> <span class="st">&quot;[1] 计算状态&quot;</span>
<span class="kw">if</span> <span class="fn2">grep</span> -q <span class="st">&quot;Normal termination&quot;</span> output.log; <span class="kw">then</span>
    <span class="fn2">echo</span> <span class="st">&quot;  ✓ 正常结束&quot;</span>
<span class="kw">else</span>
    <span class="fn2">echo</span> <span class="st">&quot;  ✗ 异常结束&quot;</span>
    <span class="fn2">echo</span> <span class="st">&quot;  错误信息:&quot;</span>
    <span class="fn2">grep</span> -i <span class="st">&quot;error&quot;</span> output.log | <span class="fn2">head</span> -5
<span class="kw">fi</span>
<span class="fn2">echo</span>

<span class="cm"># 检查 SCF 收敛</span>
<span class="fn2">echo</span> <span class="st">&quot;[2] SCF 收敛&quot;</span>
<span class="kw">if</span> <span class="fn2">grep</span> -q <span class="st">&quot;SCF has not converged&quot;</span> output.log; <span class="kw">then</span>
    <span class="fn2">echo</span> <span class="st">&quot;  ✗ SCF 未收敛&quot;</span>
<span class="kw">else</span>
    <span class="fn2">echo</span> <span class="st">&quot;  ✓ SCF 收敛&quot;</span>
<span class="kw">fi</span>
<span class="fn2">echo</span>

<span class="cm"># 提取能量</span>
<span class="fn2">echo</span> <span class="st">&quot;[3] 总能量&quot;</span>
<span class="fn2">grep</span> <span class="st">&quot;SCF Done&quot;</span> output.log | <span class="fn2">tail</span> -1
<span class="fn2">echo</span>

<span class="cm"># 检查虚频</span>
<span class="fn2">echo</span> <span class="st">&quot;[4] 频率检查&quot;</span>
<span class="fn2">freqs</span>=$(<span class="fn2">grep</span> <span class="st">&quot;Frequencies&quot;</span> output.log | <span class="fn2">awk</span> <span class="st">&#39;{for(i=3;i&lt;=NF;i++) print $i}&#39;</span>)
<span class="fn2">imaginary</span>=$(<span class="fn2">echo</span> <span class="st">&quot;$freqs&quot;</span> | <span class="fn2">awk</span> <span class="st">&#39;$1 &lt; 0 {count++} END {print count+0}&#39;</span>)
<span class="fn2">echo</span> <span class="st">&quot;  虚频数: $imaginary&quot;</span>
<span class="fn2">echo</span>

<span class="cm"># 计算时间</span>
<span class="fn2">echo</span> <span class="st">&quot;[5] 计算时间&quot;</span>
<span class="fn2">grep</span> <span class="st">&quot;Job cpu time&quot;</span> output.log</code></pre>`,1))]),s[86]||(s[86]=t('<h3>10. 问题汇总表</h3><table class="tb"><thead><tr><th>问题</th><th>关键词</th><th>解决方案</th></tr></thead><tbody><tr><td>SCF 不收敛</td><td>not converged</td><td>scf=xqc, scf=fermi</td></tr><tr><td>优化不收敛</td><td>did not converge</td><td>opt=tight, opt=calcfc</td></tr><tr><td>内存不足</td><td>Insufficient memory</td><td>增加 %mem</td></tr><tr><td>有虚频</td><td>Negative freq</td><td>重新优化</td></tr><tr><td>过渡态找不到</td><td>No TS found</td><td>改进初始猜测</td></tr><tr><td>TDDFT 错误</td><td>Excitation</td><td>使用范围分离泛函</td></tr></tbody></table><div class="ib tip"><strong>调试建议：</strong><ul><li>先用小基组/低精度测试，确认思路正确</li><li>检查输入文件格式，特别是空行和电荷自旋</li><li>查看输出文件最后几行，通常有错误提示</li><li>搜索 Gaussian 官方论坛或邮件列表</li></ul></div>',3))])}const es=r(v,[["render",os]]);export{es as default};
