import{_ as r,o as m,c as v,a as n,e,w as i,h as l,f as d,g as b}from"./index-Bd4xWfQT.js";const T={name:"ErrorsFilesView",methods:{copy(p){const o=p.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(o).then(()=>{p.target.textContent="已复制!",p.target.classList.add("ok"),setTimeout(()=>{p.target.textContent="复制",p.target.classList.remove("ok")},2e3)})}}},P={class:"sec active"},u={class:"bread"},A={class:"ec open"},C={class:"ec-b",style:{display:"block"}},O={class:"cb"},R={class:"ch"},y={class:"ec open"},S={class:"ec-b",style:{display:"block"}},k={class:"cb"},f={class:"ch"},g={class:"ec open"},E={class:"ec-b",style:{display:"block"}},w={class:"cb"},L={class:"ch"},x={class:"cb"},N={class:"ch"},I={class:"ec open"},V={class:"ec-b",style:{display:"block"}},B={class:"cb"},F={class:"ch"};function M(p,s,o,G,D,t){const c=b("router-link");return m(),v("div",P,[n("div",u,[e(c,{to:"/"},{default:i(()=>[...s[5]||(s[5]=[l("首页",-1)])]),_:1}),s[7]||(s[7]=l("/ ",-1)),e(c,{to:"/errors"},{default:i(()=>[...s[6]||(s[6]=[l("错误诊断",-1)])]),_:1}),s[8]||(s[8]=l("/ ",-1)),s[9]||(s[9]=n("span",null,"文件错误",-1))]),s[38]||(s[38]=n("h2",null,"文件错误诊断",-1)),s[39]||(s[39]=n("p",null,"输入文件格式错误是初学者最常遇到的问题。",-1)),n("div",A,[s[16]||(s[16]=n("div",{class:"ec-h"},[n("span",{class:"ei"},"🔴"),n("span",{class:"et"},"问题 1：POTCAR 元素顺序与 POSCAR 不一致"),n("span",{class:"es sc"},"高频")],-1)),n("div",C,[s[12]||(s[12]=n("h4",null,"症状",-1)),s[13]||(s[13]=n("p",null,"计算结果明显错误，能量异常大，或结构优化后原子位置混乱。",-1)),s[14]||(s[14]=n("h4",null,"检查方法",-1)),n("div",O,[n("div",R,[s[10]||(s[10]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[0]||(s[0]=(...a)=>t.copy&&t.copy(...a))},"复制")]),s[11]||(s[11]=d(`<pre><code><span class="cm"># 查看 POTCAR 中的元素</span>
<span class="fn2">grep</span> TITEL POTCAR

<span class="cm"># 查看 POSCAR 中的元素</span>
<span class="fn2">head</span> -6 POSCAR

<span class="cm"># 确认两者顺序一致！</span></code></pre>`,1))]),s[15]||(s[15]=d(`<h4>正确示例</h4><div class="cb"><div class="ch"><span class="la">POSCAR</span></div><pre><code>TiO2
1.0
4.59  0.00  0.00
0.00  4.59  0.00
0.00  0.00  2.96
Ti O          <span class="cm">; ← 先 Ti 后 O</span>
1 2
Direct</code></pre></div><div class="cb"><div class="ch"><span class="la">POTCAR</span></div><pre><code>TITEL  = PAW_PBE Ti ...    <span class="cm">; ← 第一个必须是 Ti</span>
TITEL  = PAW_PBE O  ...    <span class="cm">; ← 第二个是 O</span></code></pre></div><div class="ib warn"><strong>重要：</strong>POTCAR 顺序必须与 POSCAR 完全一致，否则结果完全错误！</div>`,4))])]),n("div",y,[s[20]||(s[20]=n("div",{class:"ec-h"},[n("span",{class:"ei"},"🔴"),n("span",{class:"et"},"问题 2：POSCAR 格式错误"),n("span",{class:"es sc"},"高频")],-1)),n("div",S,[s[19]||(s[19]=d(`<table class="tb"><thead><tr><th>错误类型</th><th>说明</th><th>解决方法</th></tr></thead><tbody><tr><td>缩放因子为 0</td><td>第二行不能为 0</td><td>改为 1.0 或实际值</td></tr><tr><td>坐标类型拼错</td><td>必须是 Direct 或 Cartesian</td><td>检查拼写和大小写</td></tr><tr><td>原子数与坐标不匹配</td><td>声明 N 个原子但只有 M 行坐标</td><td>检查坐标行数</td></tr><tr><td>多余空行</td><td>文件末尾不要有空行</td><td>删除末尾空行</td></tr><tr><td>Windows 换行符</td><td>\\r\\n 导致问题</td><td>dos2unix POSCAR</td></tr><tr><td>制表符</td><td>不要用 Tab，用空格</td><td>替换 Tab 为空格</td></tr></tbody></table><h4>POSCAR 格式详解</h4><div class="cb"><div class="ch"><span class="la">POSCAR</span><span class="fn">完整格式</span></div><pre><code>Si bulk structure          <span class="cm">; 第 1 行：注释（可选）</span>
1.0                        <span class="cm">; 第 2 行：缩放因子</span>
5.43  0.00  0.00           <span class="cm">; 第 3-5 行：晶格矢量</span>
0.00  5.43  0.00
0.00  0.00  5.43
Si                         <span class="cm">; 第 6 行：元素符号</span>
2                          <span class="cm">; 第 7 行：原子数</span>
Direct                     <span class="cm">; 第 8 行：坐标类型</span>
0.00  0.00  0.00           <span class="cm">; 第 9 行起：原子坐标</span>
0.25  0.25  0.25</code></pre></div><h4>选择性动力学格式</h4>`,4)),n("div",k,[n("div",f,[s[17]||(s[17]=n("span",{class:"la"},"POSCAR",-1)),n("button",{class:"cpb",onClick:s[1]||(s[1]=(...a)=>t.copy&&t.copy(...a))},"复制")]),s[18]||(s[18]=n("pre",null,[n("code",null,[l(`Si surface
1.0
5.43  0.00  0.00
0.00  5.43  0.00
0.00  0.00  15.0
Si
4
Selective dynamics        `),n("span",{class:"cm"},"; 开启选择性动力学"),l(`
Direct
0.00  0.00  0.00  F F F   `),n("span",{class:"cm"},"; F=固定，T=可动"),l(`
0.25  0.25  0.25  F F F
0.50  0.50  0.50  T T T
0.75  0.75  0.75  T T T`)])],-1))])])]),n("div",g,[s[30]||(s[30]=n("div",{class:"ec-h"},[n("span",{class:"ei"},"🟡"),n("span",{class:"et"},"问题 3：KPOINTS 格式错误"),n("span",{class:"es scm"},"常见")],-1)),n("div",E,[s[27]||(s[27]=n("h4",null,"常见错误",-1)),s[28]||(s[28]=n("ul",null,[n("li",null,"第 2 行不是 0（自动生成模式下必须是 0）"),n("li",null,"Gamma 拼写错误（正确：Gamma，不是 GAMMA 或 gamma）"),n("li",null,"Line-mode 缺少空行分隔线段"),n("li",null,"坐标格式与 Direct/Cartesian 不匹配")],-1)),s[29]||(s[29]=n("h4",null,"正确格式",-1)),n("div",w,[n("div",L,[s[21]||(s[21]=n("span",{class:"la"},"KPOINTS",-1)),s[22]||(s[22]=n("span",{class:"fn"},"自动网格",-1)),n("button",{class:"cpb",onClick:s[2]||(s[2]=(...a)=>t.copy&&t.copy(...a))},"复制")]),s[23]||(s[23]=d(`<pre><code>Automatic mesh        <span class="cm">; 注释行</span>
0                     <span class="cm">; 必须是 0（自动生成）</span>
Gamma                 <span class="cm">; 生成方式：Gamma 或 Monkhorst</span>
4 4 4                 <span class="cm">; k 点网格</span>
0.0 0.0 0.0           <span class="cm">; 偏移（通常全 0）</span></code></pre>`,1))]),n("div",x,[n("div",N,[s[24]||(s[24]=n("span",{class:"la"},"KPOINTS",-1)),s[25]||(s[25]=n("span",{class:"fn"},"Line-mode（能带计算）",-1)),n("button",{class:"cpb",onClick:s[3]||(s[3]=(...a)=>t.copy&&t.copy(...a))},"复制")]),s[26]||(s[26]=d(`<pre><code>k-points along high symmetry lines
10                    <span class="cm">; 每条线段的点数</span>
Line-mode             <span class="cm">; 线模式</span>
Reciprocal            <span class="cm">; 坐标类型</span>
0.0  0.0  0.0         <span class="cm">; 起点 Gamma</span>
0.5  0.5  0.0         <span class="cm">; 终点 X</span>
                      <span class="cm">; ← 空行分隔！</span>
0.5  0.5  0.0         <span class="cm">; 起点 X</span>
0.5  0.5  0.5         <span class="cm">; 终点 R</span></code></pre>`,1))])])]),n("div",I,[s[37]||(s[37]=n("div",{class:"ec-h"},[n("span",{class:"ei"},"🟡"),n("span",{class:"et"},"问题 4：找不到 POTCAR 文件"),n("span",{class:"es scm"},"常见")],-1)),n("div",V,[s[33]||(s[33]=n("h4",null,"症状",-1)),s[34]||(s[34]=n("div",{class:"esym"},"VASP could not be started because POTCAR file was not found",-1)),s[35]||(s[35]=n("h4",null,"生成 POTCAR",-1)),n("div",B,[n("div",F,[s[31]||(s[31]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[4]||(s[4]=(...a)=>t.copy&&t.copy(...a))},"复制")]),s[32]||(s[32]=d(`<pre><code><span class="cm"># 查看赝势库路径</span>
<span class="fn2">echo</span> $VASP_PP_PATH

<span class="cm"># 方法 1：直接拼接</span>
<span class="fn2">cat</span> ~/potpaw_PBE/Ti/POTCAR &gt; POTCAR
<span class="fn2">cat</span> ~/potpaw_PBE/O/POTCAR &gt;&gt; POTCAR

<span class="cm"># 方法 2：使用脚本</span>
<span class="kw">for</span> el <span class="kw">in</span> Ti O; <span class="kw">do</span>
    <span class="fn2">cat</span> ~/potpaw_PBE/$el/POTCAR &gt;&gt; POTCAR
<span class="kw">done</span>

<span class="cm"># 方法 3：使用 pymatgen</span>
<span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Potcar
p = Potcar([<span class="st">&#39;Ti&#39;</span>, <span class="st">&#39;O&#39;</span>], functional=<span class="st">&#39;PBE&#39;</span>)
p.write_file(<span class="st">&#39;POTCAR&#39;</span>)</code></pre>`,1))]),s[36]||(s[36]=n("div",{class:"ib tip"},[n("strong",null,"建议："),l("设置环境变量 VASP_PP_PATH 指向赝势库目录，方便使用。")],-1))])]),s[40]||(s[40]=d('<div class="ec open"><div class="ec-h"><span class="ei">🟡</span><span class="et">问题 5：INCAR 参数格式错误</span><span class="es scm">常见</span></div><div class="ec-b" style="display:block;"><h4>常见错误</h4><table class="tb"><thead><tr><th>错误写法</th><th>正确写法</th><th>说明</th></tr></thead><tbody><tr><td><code>ENCUT=400</code></td><td><code>ENCUT = 400</code></td><td>等号两边要有空格</td></tr><tr><td><code>LREAL=.true.</code></td><td><code>LREAL = .TRUE.</code></td><td>布尔值大写</td></tr><tr><td><code>ISMEAR=0.5</code></td><td><code>ISMEAR = 0</code></td><td>ISMEAR 是整数</td></tr><tr><td><code>SYSTEM= test</code></td><td><code>SYSTEM = test</code></td><td>等号对齐</td></tr></tbody></table><div class="ib warn"><strong>注意：</strong>VASP 对格式敏感，但通常会忽略无法识别的行并给出警告。</div></div></div>',1))])}const U=r(T,[["render",M]]);export{U as default};
