import{_ as d,o as i,c as f,a as n,e,w as r,h as o,f as p,g as q}from"./index-BSmeIEo-.js";const m={name:"GaussianOutputView",methods:{copy(l){const c=l.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(c).then(()=>{l.target.textContent="已复制!",l.target.classList.add("ok"),setTimeout(()=>{l.target.textContent="复制",l.target.classList.remove("ok")},2e3)})}}},g={class:"sec active"},b={class:"bread"},k={class:"cb"},y={class:"ch"},w={class:"cb"},v={class:"ch"},C={class:"cb"},S={class:"ch"},h={class:"cb"},F={class:"ch"},x={class:"cb"},T={class:"ch"},G={class:"cb"},N={class:"ch"},D={class:"cb"},A={class:"ch"},E={class:"cb"},V={class:"ch"},P={class:"cb"},M={class:"ch"};function O(l,s,c,I,R,a){const u=q("router-link");return i(),f("div",g,[n("div",b,[e(u,{to:"/"},{default:r(()=>[...s[9]||(s[9]=[o("首页",-1)])]),_:1}),s[11]||(s[11]=o("/ ",-1)),e(u,{to:"/gaussian"},{default:r(()=>[...s[10]||(s[10]=[o("Gaussian 教程",-1)])]),_:1}),s[12]||(s[12]=o("/ ",-1)),s[13]||(s[13]=n("span",null,"输出分析",-1))]),s[33]||(s[33]=p(`<h2>Gaussian 输出分析</h2><p>本节介绍如何分析 Gaussian 输出文件（.log）并提取关键信息。</p><h3>1. 输出文件结构</h3><div class="cb"><div class="ch"><span class="la">output.log</span><span class="fn">文件结构</span></div><pre><code><span class="cm">========================================</span>
<span class="cm">Gaussian 16:  xxx-W64RevC.01</span>
<span class="cm">========================================</span>

<span class="cm">[1] 输入回显</span>
<span class="cm">[2] 初始几何</span>
<span class="cm">[3] 迭代计算（SCF）</span>
<span class="cm">[4] 优化步骤</span>
<span class="cm">[5] 频率计算（如果设置）</span>
<span class="cm">[6] 最终结果</span>
<span class="cm">[7] 计算时间</span></code></pre></div><h3>2. 检查计算状态</h3>`,5)),n("div",k,[n("div",y,[s[14]||(s[14]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[0]||(s[0]=(...t)=>a.copy&&a.copy(...t))},"复制")]),s[15]||(s[15]=p(`<pre><code><span class="cm"># 检查是否正常结束</span>
<span class="fn2">grep</span> <span class="st">&quot;Normal termination&quot;</span> output.log

<span class="cm"># 检查错误</span>
<span class="fn2">grep</span> -i <span class="st">&quot;error&quot;</span> output.log

<span class="cm"># 查看最后几行</span>
<span class="fn2">tail</span> -20 output.log</code></pre>`,1))]),s[34]||(s[34]=p('<table class="tb"><thead><tr><th>状态</th><th>输出信息</th><th>说明</th></tr></thead><tbody><tr><td>正常结束</td><td><code>Normal termination</code></td><td>计算成功</td></tr><tr><td>SCF 不收敛</td><td><code>SCF has not converged</code></td><td>需要调整设置</td></tr><tr><td>优化不收敛</td><td><code>Optimization did not converge</code></td><td>增加优化步数</td></tr><tr><td>内存不足</td><td><code>Insufficient memory</code></td><td>增加 %mem</td></tr></tbody></table><h3>3. 提取总能量</h3>',2)),n("div",w,[n("div",v,[s[16]||(s[16]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[1]||(s[1]=(...t)=>a.copy&&a.copy(...t))},"复制")]),s[17]||(s[17]=p(`<pre><code><span class="cm"># 提取 SCF 能量</span>
<span class="fn2">grep</span> <span class="st">&quot;SCF Done&quot;</span> output.log | <span class="fn2">tail</span> -1

<span class="cm"># 提取能量数值</span>
<span class="fn2">grep</span> <span class="st">&quot;SCF Done&quot;</span> output.log | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $5}&#39;</span>

<span class="cm"># 提取 MP2 能量</span>
<span class="fn2">grep</span> <span class="st">&quot;EUMP2&quot;</span> output.log

<span class="cm"># 提取 CCSD(T) 能量</span>
<span class="fn2">grep</span> <span class="st">&quot;CCSD(T)=&quot;</span> output.log</code></pre>`,1))]),s[35]||(s[35]=n("h3",null,"4. 提取优化几何",-1)),n("div",C,[n("div",S,[s[18]||(s[18]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[2]||(s[2]=(...t)=>a.copy&&a.copy(...t))},"复制")]),s[19]||(s[19]=p(`<pre><code><span class="cm"># 提取最终几何（笛卡尔坐标）</span>
<span class="fn2">grep</span> -A <span class="nu">100</span> <span class="st">&quot;Standard orientation&quot;</span> output.log | <span class="fn2">tail</span> -n +5 | <span class="fn2">head</span> -n -3

<span class="cm"># 使用 cclib 提取（Python）</span>
<span class="kw">import</span> cclib
data = cclib.io.ccopen(<span class="st">&quot;output.log&quot;</span>).parse()
<span class="fn2">print</span>(data.atomcoords[-<span class="nu">1</span>])  <span class="cm"># 最终坐标</span></code></pre>`,1))]),s[36]||(s[36]=n("h3",null,"5. 提取频率信息",-1)),n("div",h,[n("div",F,[s[20]||(s[20]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[3]||(s[3]=(...t)=>a.copy&&a.copy(...t))},"复制")]),s[21]||(s[21]=p(`<pre><code><span class="cm"># 提取频率</span>
<span class="fn2">grep</span> <span class="st">&quot;Frequencies&quot;</span> output.log

<span class="cm"># 提取红外强度</span>
<span class="fn2">grep</span> <span class="st">&quot;IR Inten&quot;</span> output.log

<span class="cm"># 检查虚频</span>
<span class="fn2">grep</span> <span class="st">&quot;Frequencies&quot;</span> output.log | <span class="fn2">awk</span> <span class="st">&#39;{if ($2 &lt; 0) print &quot;虚频:&quot;, $2}&#39;</span></code></pre>`,1))]),s[37]||(s[37]=p('<h4>频率结果解读</h4><table class="tb"><thead><tr><th>信息</th><th>含义</th><th>单位</th></tr></thead><tbody><tr><td>Frequencies</td><td>振动频率</td><td>cm⁻¹</td></tr><tr><td>IR Inten</td><td>红外强度</td><td>KM/mol</td></tr><tr><td>Raman Activ</td><td>拉曼活性</td><td>Å⁴/amu</td></tr><tr><td>Red. masses</td><td>约化质量</td><td>amu</td></tr><tr><td>Frc consts</td><td>力常数</td><td>mdyn/Å</td></tr></tbody></table><h3>6. 提取热力学量</h3>',3)),n("div",x,[n("div",T,[s[22]||(s[22]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[4]||(s[4]=(...t)=>a.copy&&a.copy(...t))},"复制")]),s[23]||(s[23]=p(`<pre><code><span class="cm"># 提取热力学数据</span>
<span class="fn2">grep</span> -A <span class="nu">20</span> <span class="st">&quot;Thermochemistry&quot;</span> output.log

<span class="cm"># 提取零点能</span>
<span class="fn2">grep</span> <span class="st">&quot;Zero-point correction&quot;</span> output.log

<span class="cm"># 提取 Gibbs 自由能</span>
<span class="fn2">grep</span> <span class="st">&quot;Sum of electronic and thermal Free Energies&quot;</span> output.log</code></pre>`,1))]),s[38]||(s[38]=p('<h4>热力学量说明</h4><table class="tb"><thead><tr><th>术语</th><th>符号</th><th>说明</th></tr></thead><tbody><tr><td>零点能</td><td>ZPE</td><td>振动基态能量</td></tr><tr><td>热校正</td><td>E(Thermal)</td><td>热能校正值</td></tr><tr><td>焓</td><td>H</td><td>电子能 + 热校正 + PV</td></tr><tr><td>吉布斯自由能</td><td>G</td><td>H - TS</td></tr></tbody></table><h3>7. 提取偶极矩和电荷</h3>',3)),n("div",G,[n("div",N,[s[24]||(s[24]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[5]||(s[5]=(...t)=>a.copy&&a.copy(...t))},"复制")]),s[25]||(s[25]=p(`<pre><code><span class="cm"># 提取偶极矩</span>
<span class="fn2">grep</span> -A <span class="nu">3</span> <span class="st">&quot;Dipole moment&quot;</span> output.log

<span class="cm"># 提取 Mulliken 电荷</span>
<span class="fn2">grep</span> -A <span class="nu">20</span> <span class="st">&quot;Mulliken charges&quot;</span> output.log

<span class="cm"># 提取 NBO 电荷</span>
<span class="fn2">grep</span> -A <span class="nu">20</span> <span class="st">&quot;Summary of Natural Population&quot;</span> output.log</code></pre>`,1))]),s[39]||(s[39]=n("h3",null,"8. 提取 TDDFT 结果",-1)),n("div",D,[n("div",A,[s[26]||(s[26]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[6]||(s[6]=(...t)=>a.copy&&a.copy(...t))},"复制")]),s[27]||(s[27]=p(`<pre><code><span class="cm"># 提取激发能</span>
<span class="fn2">grep</span> -A <span class="nu">50</span> <span class="st">&quot;Excitation energies&quot;</span> output.log

<span class="cm"># 提取波长</span>
<span class="fn2">grep</span> <span class="st">&quot;Excited State&quot;</span> output.log | <span class="fn2">awk</span> <span class="st">&#39;{print $7}&#39;</span>

<span class="cm"># 提取振子强度</span>
<span class="fn2">grep</span> <span class="st">&quot;f=&quot;</span> output.log</code></pre>`,1))]),s[40]||(s[40]=n("h3",null,"9. Python 分析脚本",-1)),n("div",E,[n("div",V,[s[28]||(s[28]=n("span",{class:"la"},"python",-1)),s[29]||(s[29]=n("span",{class:"fn"},"analyze_gaussian.py",-1)),n("button",{class:"cpb",onClick:s[7]||(s[7]=(...t)=>a.copy&&a.copy(...t))},"复制")]),s[30]||(s[30]=p(`<pre><code><span class="kw">import</span> re

<span class="kw">def</span> <span class="fn2">read_gaussian_output</span>(filename):
    <span class="st">&quot;&quot;&quot;读取 Gaussian 输出文件&quot;&quot;&quot;</span>
    <span class="kw">with</span> <span class="fn2">open</span>(filename, <span class="st">&#39;r&#39;</span>) <span class="kw">as</span> f:
        content = f.read()
    <span class="kw">return</span> content

<span class="kw">def</span> <span class="fn2">get_energy</span>(content):
    <span class="st">&quot;&quot;&quot;提取总能量&quot;&quot;&quot;</span>
    match = re.search(<span class="st">r&#39;SCF Done:.*?=\\s*([-\\d.]+)&#39;</span>, content)
    <span class="kw">if</span> match:
        <span class="kw">return</span> <span class="fn2">float</span>(match.group(<span class="nu">1</span>))
    <span class="kw">return</span> <span class="kw">None</span>

<span class="kw">def</span> <span class="fn2">get_geometry</span>(content):
    <span class="st">&quot;&quot;&quot;提取最终几何&quot;&quot;&quot;</span>
    <span class="cm"># 找到所有 Standard orientation</span>
    blocks = re.findall(
        <span class="st">r&#39;Standard orientation.*?-{20}(.*?)-{20}&#39;</span>,
        content, re.DOTALL
    )
    <span class="kw">if</span> blocks:
        last_block = blocks[-<span class="nu">1</span>]
        <span class="cm"># 解析坐标</span>
        coords = []
        <span class="kw">for</span> line <span class="kw">in</span> last_block.strip().split(<span class="st">&#39;\\n&#39;</span>):
            parts = line.split()
            <span class="kw">if</span> <span class="fn2">len</span>(parts) == <span class="nu">6</span>:
                coords.append({
                    <span class="st">&#39;element&#39;</span>: parts[<span class="nu">1</span>],
                    <span class="st">&#39;x&#39;</span>: <span class="fn2">float</span>(parts[<span class="nu">3</span>]),
                    <span class="st">&#39;y&#39;</span>: <span class="fn2">float</span>(parts[<span class="nu">4</span>]),
                    <span class="st">&#39;z&#39;</span>: <span class="fn2">float</span>(parts[<span class="nu">5</span>])
                })
        <span class="kw">return</span> coords
    <span class="kw">return</span> <span class="kw">None</span>

<span class="kw">def</span> <span class="fn2">get_frequencies</span>(content):
    <span class="st">&quot;&quot;&quot;提取频率&quot;&quot;&quot;</span>
    freqs = re.findall(<span class="st">r&#39;Frequencies\\s+--\\s+(.*)&#39;</span>, content)
    <span class="kw">return</span> [<span class="fn2">float</span>(f) <span class="kw">for</span> line <span class="kw">in</span> freqs <span class="kw">for</span> f <span class="kw">in</span> line.split()]

<span class="cm"># 使用示例</span>
content = <span class="fn2">read_gaussian_output</span>(<span class="st">&#39;output.log&#39;</span>)
<span class="fn2">print</span>(<span class="st">f&quot;能量: {get_energy(content)} Hartree&quot;</span>)
<span class="fn2">print</span>(<span class="st">f&quot;频率: {get_frequencies(content)}&quot;</span>)</code></pre>`,1))]),s[41]||(s[41]=n("h3",null,"10. 常用 grep 命令速查",-1)),n("div",P,[n("div",M,[s[31]||(s[31]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[8]||(s[8]=(...t)=>a.copy&&a.copy(...t))},"复制")]),s[32]||(s[32]=p(`<pre><code><span class="cm"># 计算状态</span>
<span class="fn2">grep</span> <span class="st">&quot;Normal termination&quot;</span> output.log

<span class="cm"># 总能量</span>
<span class="fn2">grep</span> <span class="st">&quot;SCF Done&quot;</span> output.log | <span class="fn2">tail</span> -1

<span class="cm"># 优化收敛</span>
<span class="fn2">grep</span> <span class="st">&quot;Optimization completed&quot;</span> output.log

<span class="cm"># 频率</span>
<span class="fn2">grep</span> <span class="st">&quot;Frequencies&quot;</span> output.log

<span class="cm"># 零点能</span>
<span class="fn2">grep</span> <span class="st">&quot;Zero-point correction&quot;</span> output.log

<span class="cm"># Gibbs 自由能</span>
<span class="fn2">grep</span> <span class="st">&quot;thermal Free Energies&quot;</span> output.log

<span class="cm"># 偶极矩</span>
<span class="fn2">grep</span> <span class="st">&quot;Tot=&quot;</span> output.log

<span class="cm"># 计算时间</span>
<span class="fn2">grep</span> <span class="st">&quot;Job cpu time&quot;</span> output.log</code></pre>`,1))]),s[42]||(s[42]=n("div",{class:"ib tip"},[n("strong",null,"提示："),o("使用 cclib、Multiwfn 或 GaussView 等工具可以更方便地分析输出文件。")],-1))])}const B=d(m,[["render",O]]);export{B as default};
