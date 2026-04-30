import{_ as e,o as l,c as b,a as s,e as k,w as m,h as c,F as S,b as w,i as f,t as u,f as p,d as o,g as E}from"./index-Bd4xWfQT.js";const C={name:"PracticalGuideView",data(){return{activeTutorial:"si-bulk",tutorials:[{id:"si-bulk",icon:"💎",title:"Si 体相优化"},{id:"band-dos",icon:"📊",title:"能带与 DOS"},{id:"surface",icon:"🧊",title:"表面吸附"},{id:"dos",icon:"💡",title:"态密度详解"},{id:"defect",icon:"🔴",title:"缺陷形成能"},{id:"phonon",icon:"🔊",title:"声子谱"}]}},methods:{copy(v){const i=v.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(i).then(()=>{v.target.textContent="已复制!",v.target.classList.add("ok"),setTimeout(()=>{v.target.textContent="复制",v.target.classList.remove("ok")},2e3)})}}},y={class:"sec active"},I={class:"bread"},A={class:"prac-nav"},O=["onClick"],R={key:0,class:"prac-section"},N={class:"cb"},T={class:"ch"},P={class:"cb"},g={class:"ch"},D={class:"cb"},F={class:"ch"},G={class:"cb"},M={class:"ch"},V={class:"cb"},x={class:"ch"},L={key:1,class:"prac-section"},q={class:"cb"},B={class:"ch"},U={class:"cb"},W={class:"ch"},K={class:"cb"},Y={class:"ch"},H={class:"cb"},Z={class:"ch"},z={key:2,class:"prac-section"},j={class:"cb"},X={class:"ch"},J={class:"cb"},Q={class:"ch"},$={class:"cb"},h={class:"ch"},_={key:3,class:"prac-section"},aa={class:"cb"},sa={class:"ch"},na={class:"cb"},da={class:"ch"},pa={class:"cb"},ta={class:"ch"},la={key:4,class:"prac-section"},ba={class:"cb"},va={class:"ch"},ca={key:5,class:"prac-section"},oa={class:"cb"},ia={class:"ch"},ua={class:"cb"},ra={class:"ch"};function ea(v,a,i,ka,t,d){const r=E("router-link");return l(),b("div",y,[s("div",I,[k(r,{to:"/"},{default:m(()=>[...a[18]||(a[18]=[c("首页",-1)])]),_:1}),a[19]||(a[19]=c("/",-1)),a[20]||(a[20]=s("span",null,"实战指南",-1))]),a[107]||(a[107]=s("h2",null,"VASP 实战计算指南",-1)),a[108]||(a[108]=s("p",null,"从零开始，手把手教你完成常见的 VASP 计算任务。每个案例包含完整的输入文件和详细解释。",-1)),s("div",A,[(l(!0),b(S,null,w(t.tutorials,n=>(l(),b("button",{key:n.id,class:f(["cat-btn",{active:t.activeTutorial===n.id}]),onClick:ma=>t.activeTutorial=n.id},u(n.icon)+" "+u(n.title),11,O))),128))]),t.activeTutorial==="si-bulk"?(l(),b("div",R,[a[36]||(a[36]=s("h3",null,"案例 1：硅（Si）体相结构优化",-1)),a[37]||(a[37]=s("p",null,"这是 VASP 入门的第一个计算任务——优化硅的晶格常数。",-1)),a[38]||(a[38]=s("h4",null,"1.1 准备 POSCAR",-1)),a[39]||(a[39]=s("p",null,"硅是金刚石结构，每个晶胞有 8 个原子。从 Materials Project 获取初始结构。",-1)),s("div",N,[s("div",T,[a[21]||(a[21]=s("span",{class:"la"},"POSCAR",-1)),a[22]||(a[22]=s("span",{class:"fn"},"Si 金刚石结构",-1)),s("button",{class:"cpb",onClick:a[0]||(a[0]=(...n)=>d.copy&&d.copy(...n))},"复制")]),a[23]||(a[23]=p(`<pre data-v-10b69a4d><code data-v-10b69a4d><span class="cm" data-v-10b69a4d>Si8</span>
<span class="nu" data-v-10b69a4d>1.0</span>
<span class="nu" data-v-10b69a4d>  5.430000   0.000000   0.000000</span>
<span class="nu" data-v-10b69a4d>  0.000000   5.430000   0.000000</span>
<span class="nu" data-v-10b69a4d>  0.000000   0.000000   5.430000</span>
<span class="vr" data-v-10b69a4d>Si</span>
<span class="nu" data-v-10b69a4d>8</span>
<span class="vr" data-v-10b69a4d>Direct</span>
<span class="nu" data-v-10b69a4d>  0.000000   0.000000   0.000000</span>
<span class="nu" data-v-10b69a4d>  0.250000   0.250000   0.250000</span>
<span class="nu" data-v-10b69a4d>  0.500000   0.500000   0.000000</span>
<span class="nu" data-v-10b69a4d>  0.500000   0.000000   0.500000</span>
<span class="nu" data-v-10b69a4d>  0.000000   0.500000   0.500000</span>
<span class="nu" data-v-10b69a4d>  0.750000   0.750000   0.250000</span>
<span class="nu" data-v-10b69a4d>  0.750000   0.250000   0.750000</span>
<span class="nu" data-v-10b69a4d>  0.250000   0.750000   0.750000</span></code></pre>`,1))]),a[40]||(a[40]=s("div",{class:"ib tip"},[s("strong",null,"说明："),c("Direct 表示使用分数坐标（相对于晶格矢量），Cartesian 表示使用直角坐标（单位 Å）。")],-1)),a[41]||(a[41]=s("h4",null,"1.2 准备 KPOINTS",-1)),a[42]||(a[42]=s("p",null,"Si 是半导体，使用 Gamma-centered 网格。",-1)),s("div",P,[s("div",g,[a[24]||(a[24]=s("span",{class:"la"},"KPOINTS",-1)),a[25]||(a[25]=s("span",{class:"fn"},"8×8×8 Gamma 网格",-1)),s("button",{class:"cpb",onClick:a[1]||(a[1]=(...n)=>d.copy&&d.copy(...n))},"复制")]),a[26]||(a[26]=p(`<pre data-v-10b69a4d><code data-v-10b69a4d><span class="cm" data-v-10b69a4d>K-points</span>
<span class="nu" data-v-10b69a4d>0</span>
<span class="vr" data-v-10b69a4d>Gamma</span>
<span class="nu" data-v-10b69a4d>8 8 8</span>
<span class="nu" data-v-10b69a4d>0 0 0</span></code></pre>`,1))]),a[43]||(a[43]=s("h4",null,"1.3 准备 INCAR",-1)),s("div",D,[s("div",F,[a[27]||(a[27]=s("span",{class:"la"},"INCAR",-1)),a[28]||(a[28]=s("span",{class:"fn"},"结构优化",-1)),s("button",{class:"cpb",onClick:a[2]||(a[2]=(...n)=>d.copy&&d.copy(...n))},"复制")]),a[29]||(a[29]=p(`<pre data-v-10b69a4d><code data-v-10b69a4d><span class="cm" data-v-10b69a4d># 基本参数</span>
<span class="kw" data-v-10b69a4d>SYSTEM</span>   = <span class="st" data-v-10b69a4d>Si bulk optimization</span>
<span class="kw" data-v-10b69a4d>ENCUT</span>    = <span class="nu" data-v-10b69a4d>400</span>
<span class="kw" data-v-10b69a4d>PREC</span>     = <span class="st" data-v-10b69a4d>Accurate</span>
<span class="kw" data-v-10b69a4d>EDIFF</span>    = <span class="nu" data-v-10b69a4d>1E-6</span>

<span class="cm" data-v-10b69a4d># 离子步参数</span>
<span class="kw" data-v-10b69a4d>IBRION</span>   = <span class="nu" data-v-10b69a4d>2</span>
<span class="kw" data-v-10b69a4d>NSW</span>      = <span class="nu" data-v-10b69a4d>100</span>
<span class="kw" data-v-10b69a4d>ISIF</span>     = <span class="nu" data-v-10b69a4d>3</span>
<span class="kw" data-v-10b69a4d>EDIFFG</span>   = <span class="nu" data-v-10b69a4d>-0.01</span>

<span class="cm" data-v-10b69a4d># 展宽参数（半导体用 Gaussian）</span>
<span class="kw" data-v-10b69a4d>ISMEAR</span>   = <span class="nu" data-v-10b69a4d>0</span>
<span class="kw" data-v-10b69a4d>SIGMA</span>    = <span class="nu" data-v-10b69a4d>0.05</span>

<span class="cm" data-v-10b69a4d># 输出控制</span>
<span class="kw" data-v-10b69a4d>LWAVE</span>    = <span class="kw" data-v-10b69a4d>.FALSE.</span>
<span class="kw" data-v-10b69a4d>LCHARG</span>   = <span class="kw" data-v-10b69a4d>.FALSE.</span></code></pre>`,1))]),a[44]||(a[44]=s("h4",null,"1.4 提交计算",-1)),s("div",G,[s("div",M,[a[30]||(a[30]=s("span",{class:"la"},"bash",-1)),a[31]||(a[31]=s("span",{class:"fn"},"提交脚本",-1)),s("button",{class:"cpb",onClick:a[3]||(a[3]=(...n)=>d.copy&&d.copy(...n))},"复制")]),a[32]||(a[32]=p(`<pre data-v-10b69a4d><code data-v-10b69a4d><span class="cm" data-v-10b69a4d>#!/bin/bash</span>
<span class="cm" data-v-10b69a4d>#PBS -l nodes=1:ppn=8</span>
<span class="cm" data-v-10b69a4d>#PBS -l walltime=02:00:00</span>
<span class="cm" data-v-10b69a4d>#PBS -N Si_opt</span>

<span class="kw" data-v-10b69a4d>cd</span> $PBS_O_WORKDIR
<span class="fn2" data-v-10b69a4d>mpirun</span> -np 8 vasp_std</code></pre>`,1))]),a[45]||(a[45]=s("h4",null,"1.5 检查结果",-1)),s("div",V,[s("div",x,[a[33]||(a[33]=s("span",{class:"la"},"bash",-1)),a[34]||(a[34]=s("span",{class:"fn"},"检查收敛",-1)),s("button",{class:"cpb",onClick:a[4]||(a[4]=(...n)=>d.copy&&d.copy(...n))},"复制")]),a[35]||(a[35]=p(`<pre data-v-10b69a4d><code data-v-10b69a4d><span class="cm" data-v-10b69a4d># 检查是否收敛</span>
<span class="fn2" data-v-10b69a4d>grep</span> <span class="st" data-v-10b69a4d>&quot;reached required accuracy&quot;</span> OSZICAR

<span class="cm" data-v-10b69a4d># 查看优化后的晶格常数</span>
<span class="fn2" data-v-10b69a4d>tail</span> -20 CONTCAR

<span class="cm" data-v-10b69a4d># 提取能量</span>
<span class="fn2" data-v-10b69a4d>grep</span> <span class="st" data-v-10b69a4d>&quot;free  energy TOTEN&quot;</span> OSZICAR | <span class="fn2" data-v-10b69a4d>tail</span> -1

<span class="cm" data-v-10b69a4d># 检查虚频（确保是稳定结构）</span>
<span class="cm" data-v-10b69a4d># 需要先复制 CONTCAR → POSCAR，然后设置 IBRION=-1 NSW=0 做频率计算</span></code></pre>`,1))]),a[46]||(a[46]=p('<h4 data-v-10b69a4d>1.6 常见问题</h4><table class="tb" data-v-10b69a4d><thead data-v-10b69a4d><tr data-v-10b69a4d><th data-v-10b69a4d>问题</th><th data-v-10b69a4d>原因</th><th data-v-10b69a4d>解决方案</th></tr></thead><tbody data-v-10b69a4d><tr data-v-10b69a4d><td data-v-10b69a4d>优化步数太多</td><td data-v-10b69a4d>初始结构偏离平衡态太远</td><td data-v-10b69a4d>先用更准确的初始结构</td></tr><tr data-v-10b69a4d><td data-v-10b69a4d>能量震荡</td><td data-v-10b69a4d>ISMEAR 设置不当</td><td data-v-10b69a4d>半导体用 ISMEAR=0</td></tr><tr data-v-10b69a4d><td data-v-10b69a4d>晶格常数偏差大</td><td data-v-10b69a4d>ENCUT 太小</td><td data-v-10b69a4d>增大 ENCUT 或做收敛测试</td></tr></tbody></table>',2))])):o("",!0),t.activeTutorial==="band-dos"?(l(),b("div",L,[a[59]||(a[59]=s("h3",null,"案例 2：硅的能带结构和态密度",-1)),a[60]||(a[60]=s("p",null,"在结构优化完成后，计算电子能带结构和态密度（DOS）。",-1)),a[61]||(a[61]=s("h4",null,"2.1 准备静态计算",-1)),a[62]||(a[62]=s("p",null,"首先需要做一个静态自洽计算，生成正确的电荷密度。",-1)),s("div",q,[s("div",B,[a[47]||(a[47]=s("span",{class:"la"},"INCAR",-1)),a[48]||(a[48]=s("span",{class:"fn"},"静态自洽计算",-1)),s("button",{class:"cpb",onClick:a[5]||(a[5]=(...n)=>d.copy&&d.copy(...n))},"复制")]),a[49]||(a[49]=p(`<pre data-v-10b69a4d><code data-v-10b69a4d><span class="cm" data-v-10b69a4d># 静态自洽计算</span>
<span class="kw" data-v-10b69a4d>SYSTEM</span>   = <span class="st" data-v-10b69a4d>Si static</span>
<span class="kw" data-v-10b69a4d>ENCUT</span>    = <span class="nu" data-v-10b69a4d>400</span>
<span class="kw" data-v-10b69a4d>PREC</span>     = <span class="st" data-v-10b69a4d>Accurate</span>
<span class="kw" data-v-10b69a4d>EDIFF</span>    = <span class="nu" data-v-10b69a4d>1E-8</span>

<span class="cm" data-v-10b69a4d># 静态计算（IBRION=-1, NSW=0）</span>
<span class="kw" data-v-10b69a4d>IBRION</span>   = <span class="nu" data-v-10b69a4d>-1</span>
<span class="kw" data-v-10b69a4d>NSW</span>      = <span class="nu" data-v-10b69a4d>0</span>

<span class="cm" data-v-10b69a4d># 展宽参数</span>
<span class="kw" data-v-10b69a4d>ISMEAR</span>   = <span class="nu" data-v-10b69a4d>0</span>
<span class="kw" data-v-10b69a4d>SIGMA</span>    = <span class="nu" data-v-10b69a4d>0.05</span>

<span class="cm" data-v-10b69a4d># 输出电荷密度和波函数</span>
<span class="kw" data-v-10b69a4d>LCHARG</span>   = <span class="kw" data-v-10b69a4d>.TRUE.</span>
<span class="kw" data-v-10b69a4d>LWAVE</span>    = <span class="kw" data-v-10b69a4d>.TRUE.</span>

<span class="cm" data-v-10b69a4d># 态密度投影</span>
<span class="kw" data-v-10b69a4d>LORBIT</span>   = <span class="nu" data-v-10b69a4d>11</span></code></pre>`,1))]),a[63]||(a[63]=s("h4",null,"2.2 能带结构计算",-1)),a[64]||(a[64]=s("p",null,"使用非自洽计算（nscf）沿着高对称 k 点路径计算能带。",-1)),s("div",U,[s("div",W,[a[50]||(a[50]=s("span",{class:"la"},"INCAR",-1)),a[51]||(a[51]=s("span",{class:"fn"},"能带结构",-1)),s("button",{class:"cpb",onClick:a[6]||(a[6]=(...n)=>d.copy&&d.copy(...n))},"复制")]),a[52]||(a[52]=p(`<pre data-v-10b69a4d><code data-v-10b69a4d><span class="cm" data-v-10b69a4d># 能带结构计算（非自洽）</span>
<span class="kw" data-v-10b69a4d>SYSTEM</span>   = <span class="st" data-v-10b69a4d>Si band structure</span>
<span class="kw" data-v-10b69a4d>ENCUT</span>    = <span class="nu" data-v-10b69a4d>400</span>
<span class="kw" data-v-10b69a4d>PREC</span>     = <span class="st" data-v-10b69a4d>Accurate</span>
<span class="kw" data-v-10b69a4d>EDIFF</span>    = <span class="nu" data-v-10b69a4d>1E-8</span>

<span class="cm" data-v-10b69a4d># 非自洽计算</span>
<span class="kw" data-v-10b69a4d>IBRION</span>   = <span class="nu" data-v-10b69a4d>-1</span>
<span class="kw" data-v-10b69a4d>NSW</span>      = <span class="nu" data-v-10b69a4d>0</span>
<span class="kw" data-v-10b69a4d>ISMEAR</span>   = <span class="nu" data-v-10b69a4d>0</span>
<span class="kw" data-v-10b69a4d>SIGMA</span>    = <span class="nu" data-v-10b69a4d>0.05</span>

<span class="cm" data-v-10b69a4d># 从 CHGCAR 读取电荷密度</span>
<span class="kw" data-v-10b69a4d>ICHARG</span>   = <span class="nu" data-v-10b69a4d>11</span>

<span class="cm" data-v-10b69a4d># 不更新电荷密度</span>
<span class="kw" data-v-10b69a4d>NELM</span>     = <span class="nu" data-v-10b69a4d>1</span></code></pre>`,1))]),s("div",K,[s("div",Y,[a[53]||(a[53]=s("span",{class:"la"},"KPOINTS",-1)),a[54]||(a[54]=s("span",{class:"fn"},"高对称点路径",-1)),s("button",{class:"cpb",onClick:a[7]||(a[7]=(...n)=>d.copy&&d.copy(...n))},"复制")]),a[55]||(a[55]=p(`<pre data-v-10b69a4d><code data-v-10b69a4d><span class="cm" data-v-10b69a4d>Si band structure</span>
<span class="nu" data-v-10b69a4d>40</span>
<span class="vr" data-v-10b69a4d>Line</span>
<span class="nu" data-v-10b69a4d>5</span>
<span class="vr" data-v-10b69a4d>Gamma</span>   <span class="nu" data-v-10b69a4d>0.000000   0.000000   0.000000</span>   <span class="cm" data-v-10b69a4d>Γ</span>
<span class="vr" data-v-10b69a4d>X</span>       <span class="nu" data-v-10b69a4d>0.500000   0.000000   0.500000</span>   <span class="cm" data-v-10b69a4d>X</span>
<span class="vr" data-v-10b69a4d>U|K</span>     <span class="nu" data-v-10b69a4d>0.625000   0.250000   0.625000</span>   <span class="cm" data-v-10b69a4d>K</span>
<span class="vr" data-v-10b69a4d>Gamma</span>   <span class="nu" data-v-10b69a4d>0.000000   0.000000   0.000000</span>   <span class="cm" data-v-10b69a4d>Γ</span>
<span class="vr" data-v-10b69a4d>L</span>       <span class="nu" data-v-10b69a4d>0.500000   0.500000   0.500000</span>   <span class="cm" data-v-10b69a4d>L</span></code></pre>`,1))]),a[65]||(a[65]=s("h4",null,"2.3 提取能带数据",-1)),s("div",H,[s("div",Z,[a[56]||(a[56]=s("span",{class:"la"},"python",-1)),a[57]||(a[57]=s("span",{class:"fn"},"plot_band.py",-1)),s("button",{class:"cpb",onClick:a[8]||(a[8]=(...n)=>d.copy&&d.copy(...n))},"复制")]),a[58]||(a[58]=p(`<pre data-v-10b69a4d><code data-v-10b69a4d><span class="kw" data-v-10b69a4d>import</span> numpy <span class="kw" data-v-10b69a4d>as</span> np
<span class="kw" data-v-10b69a4d>import</span> matplotlib.pyplot <span class="kw" data-v-10b69a4d>as</span> plt

<span class="cm" data-v-10b69a4d># 读取 EIGENVAL</span>
<span class="kw" data-v-10b69a4d>with</span> <span class="fn2" data-v-10b69a4d>open</span>(<span class="st" data-v-10b69a4d>&#39;EIGENVAL&#39;</span>, <span class="st" data-v-10b69a4d>&#39;r&#39;</span>) <span class="kw" data-v-10b69a4d>as</span> f:
    lines = f.readlines()

<span class="cm" data-v-10b69a4d># 解析</span>
nion, nkpts, nbands = <span class="fn2" data-v-10b69a4d>map</span>(<span class="fn2" data-v-10b69a4d>int</span>, lines[<span class="nu" data-v-10b69a4d>0</span>].split())
kpoints = []
eigenvalues = []

<span class="kw" data-v-10b69a4d>for</span> i <span class="kw" data-v-10b69a4d>in</span> <span class="fn2" data-v-10b69a4d>range</span>(<span class="nu" data-v-10b69a4d>5</span>, <span class="fn2" data-v-10b69a4d>len</span>(lines), nbands + <span class="nu" data-v-10b69a4d>2</span>):
    kpoints.append(<span class="fn2" data-v-10b69a4d>map</span>(<span class="fn2" data-v-10b69a4d>float</span>, lines[i].split()[:<span class="nu" data-v-10b69a4d>3</span>]))
    <span class="kw" data-v-10b69a4d>for</span> j <span class="kw" data-v-10b69a4d>in</span> <span class="fn2" data-v-10b69a4d>range</span>(<span class="nu" data-v-10b69a4d>1</span>, nbands + <span class="nu" data-v-10b69a4d>1</span>):
        eigenvalues.append(<span class="fn2" data-v-10b69a4d>float</span>(lines[i + j].split()[<span class="nu" data-v-10b69a4d>1</span>]))

<span class="cm" data-v-10b69a4d># 绘图</span>
fig, ax = plt.subplots(figsize=(<span class="nu" data-v-10b69a4d>8</span>, <span class="nu" data-v-10b69a4d>6</span>))
<span class="cm" data-v-10b69a4d># ... 绘制能带图</span>
ax.set_ylabel(<span class="st" data-v-10b69a4d>&#39;Energy (eV)&#39;</span>)
ax.set_title(<span class="st" data-v-10b69a4d>&#39;Si Band Structure&#39;</span>)
plt.savefig(<span class="st" data-v-10b69a4d>&#39;band_structure.png&#39;</span>, dpi=<span class="nu" data-v-10b69a4d>150</span>)</code></pre>`,1))])])):o("",!0),t.activeTutorial==="surface"?(l(),b("div",z,[a[75]||(a[75]=s("h3",null,"案例 3：Pt(111) 表面吸附能计算",-1)),a[76]||(a[76]=s("p",null,"计算 CO 分子在 Pt(111) 表面的吸附能。",-1)),a[77]||(a[77]=s("h4",null,"3.1 构建表面 slab 模型",-1)),s("div",j,[s("div",X,[a[66]||(a[66]=s("span",{class:"la"},"POSCAR",-1)),a[67]||(a[67]=s("span",{class:"fn"},"Pt(111) 4层 slab",-1)),s("button",{class:"cpb",onClick:a[9]||(a[9]=(...n)=>d.copy&&d.copy(...n))},"复制")]),a[68]||(a[68]=p(`<pre data-v-10b69a4d><code data-v-10b69a4d><span class="cm" data-v-10b69a4d>Pt(111) slab</span>
<span class="nu" data-v-10b69a4d>1.0</span>
<span class="nu" data-v-10b69a4d>  2.772000   0.000000   0.000000</span>
<span class="nu" data-v-10b69a4d> -1.386000   2.400450   0.000000</span>
<span class="nu" data-v-10b69a4d>  0.000000   0.000000  20.000000</span>
<span class="vr" data-v-10b69a4d>Pt</span>
<span class="nu" data-v-10b69a4d>16</span>
<span class="vr" data-v-10b69a4d>Direct</span>
<span class="nu" data-v-10b69a4d>  0.000000   0.000000   0.100000</span>
<span class="nu" data-v-10b69a4d>  0.333333   0.333333   0.100000</span>
<span class="nu" data-v-10b69a4d>  0.000000   0.500000   0.100000</span>
<span class="nu" data-v-10b69a4d>  0.500000   0.000000   0.100000</span>
<span class="cm" data-v-10b69a4d>  ... 4层 Pt 原子 ...</span>
<span class="cm" data-v-10b69a4d>  底部两层固定，顶部两层弛豫</span></code></pre>`,1))]),a[78]||(a[78]=s("div",{class:"ib warn"},[s("strong",null,"关键设置："),s("ul",null,[s("li",null,"真空层厚度至少 15 Å，避免周期性镜像相互作用"),s("li",null,"底部 2-3 层原子固定（使用 SELECTIVE DYNAMICS）"),s("li",null,"表面计算必须用 ISIF=2（只优化原子位置）")])],-1)),a[79]||(a[79]=s("h4",null,"3.2 表面吸附 INCAR",-1)),s("div",J,[s("div",Q,[a[69]||(a[69]=s("span",{class:"la"},"INCAR",-1)),a[70]||(a[70]=s("span",{class:"fn"},"吸附计算",-1)),s("button",{class:"cpb",onClick:a[10]||(a[10]=(...n)=>d.copy&&d.copy(...n))},"复制")]),a[71]||(a[71]=p(`<pre data-v-10b69a4d><code data-v-10b69a4d><span class="cm" data-v-10b69a4d># CO 吸附在 Pt(111)</span>
<span class="kw" data-v-10b69a4d>SYSTEM</span>   = <span class="st" data-v-10b69a4d>CO on Pt(111)</span>
<span class="kw" data-v-10b69a4d>ENCUT</span>    = <span class="nu" data-v-10b69a4d>400</span>
<span class="kw" data-v-10b69a4d>EDIFF</span>    = <span class="nu" data-v-10b69a4d>1E-6</span>

<span class="cm" data-v-10b69a4d># 优化原子位置</span>
<span class="kw" data-v-10b69a4d>IBRION</span>   = <span class="nu" data-v-10b69a4d>2</span>
<span class="kw" data-v-10b69a4d>NSW</span>      = <span class="nu" data-v-10b69a4d>100</span>
<span class="kw" data-v-10b69a4d>ISIF</span>     = <span class="nu" data-v-10b69a4d>2</span>
<span class="kw" data-v-10b69a4d>EDIFFG</span>   = <span class="nu" data-v-10b69a4d>-0.02</span>

<span class="cm" data-v-10b69a4d># 展宽（金属用 Methfessel-Paxton）</span>
<span class="kw" data-v-10b69a4d>ISMEAR</span>   = <span class="nu" data-v-10b69a4d>1</span>
<span class="kw" data-v-10b69a4d>SIGMA</span>    = <span class="nu" data-v-10b69a4d>0.2</span></code></pre>`,1))]),a[80]||(a[80]=s("h4",null,"3.3 吸附能计算",-1)),s("div",$,[s("div",h,[a[72]||(a[72]=s("span",{class:"la"},"bash",-1)),a[73]||(a[73]=s("span",{class:"fn"},"吸附能公式",-1)),s("button",{class:"cpb",onClick:a[11]||(a[11]=(...n)=>d.copy&&d.copy(...n))},"复制")]),a[74]||(a[74]=p(`<pre data-v-10b69a4d><code data-v-10b69a4d><span class="cm" data-v-10b69a4d># 吸附能公式</span>
<span class="cm" data-v-10b69a4d># E_ads = E(CO+Pt) - E(Pt) - E(CO)</span>

<span class="cm" data-v-10b69a4d># 提取各能量</span>
E_total=$(<span class="fn2" data-v-10b69a4d>grep</span> <span class="st" data-v-10b69a4d>&quot;free  energy TOTEN&quot;</span> adsorption/OSZICAR | <span class="fn2" data-v-10b69a4d>tail</span> -1 | <span class="fn2" data-v-10b69a4d>awk</span> <span class="st" data-v-10b69a4d>&#39;{print $5}&#39;</span>)
E_slab=$(<span class="fn2" data-v-10b69a4d>grep</span> <span class="st" data-v-10b69a4d>&quot;free  energy TOTEN&quot;</span> slab/OSZICAR | <span class="fn2" data-v-10b69a4d>tail</span> -1 | <span class="fn2" data-v-10b69a4d>awk</span> <span class="st" data-v-10b69a4d>&#39;{print $5}&#39;</span>)
E_mol=$(<span class="fn2" data-v-10b69a4d>grep</span> <span class="st" data-v-10b69a4d>&quot;free  energy TOTEN&quot;</span> molecule/OSZICAR | <span class="fn2" data-v-10b69a4d>tail</span> -1 | <span class="fn2" data-v-10b69a4d>awk</span> <span class="st" data-v-10b69a4d>&#39;{print $5}&#39;</span>)

<span class="cm" data-v-10b69a4d># 计算吸附能（eV）</span>
<span class="fn2" data-v-10b69a4d>echo</span> <span class="st" data-v-10b69a4d>&quot;吸附能: $(echo &quot;$E_total - $E_slab - $E_mol&quot; | bc) eV&quot;</span></code></pre>`,1))])])):o("",!0),t.activeTutorial==="dos"?(l(),b("div",_,[a[90]||(a[90]=s("h3",null,"案例 4：态密度（DOS）计算详解",-1)),a[91]||(a[91]=s("p",null,"详细讲解如何计算和分析投影态密度（PDOS）。",-1)),a[92]||(a[92]=s("h4",null,"4.1 非自洽 DOS 计算",-1)),s("div",aa,[s("div",sa,[a[81]||(a[81]=s("span",{class:"la"},"INCAR",-1)),a[82]||(a[82]=s("span",{class:"fn"},"DOS 计算",-1)),s("button",{class:"cpb",onClick:a[12]||(a[12]=(...n)=>d.copy&&d.copy(...n))},"复制")]),a[83]||(a[83]=p(`<pre data-v-10b69a4d><code data-v-10b69a4d><span class="cm" data-v-10b69a4d># DOS 计算</span>
<span class="kw" data-v-10b69a4d>SYSTEM</span>   = <span class="st" data-v-10b69a4d>DOS calculation</span>
<span class="kw" data-v-10b69a4d>ENCUT</span>    = <span class="nu" data-v-10b69a4d>400</span>
<span class="kw" data-v-10b69a4d>EDIFF</span>    = <span class="nu" data-v-10b69a4d>1E-8</span>
<span class="kw" data-v-10b69a4d>IBRION</span>   = <span class="nu" data-v-10b69a4d>-1</span>
<span class="kw" data-v-10b69a4d>NSW</span>      = <span class="nu" data-v-10b69a4d>0</span>
<span class="kw" data-v-10b69a4d>ISMEAR</span>   = <span class="nu" data-v-10b69a4d>-5</span>
<span class="kw" data-v-10b69a4d>SIGMA</span>    = <span class="nu" data-v-10b69a4d>0.01</span>

<span class="cm" data-v-10b69a4d># 从 CHGCAR 读取</span>
<span class="kw" data-v-10b69a4d>ICHARG</span>   = <span class="nu" data-v-10b69a4d>11</span>
<span class="kw" data-v-10b69a4d>NELM</span>     = <span class="nu" data-v-10b69a4d>1</span>

<span class="cm" data-v-10b69a4d># 投影态密度</span>
<span class="kw" data-v-10b69a4d>LORBIT</span>   = <span class="nu" data-v-10b69a4d>11</span>

<span class="cm" data-v-10b69a4d># 精细 DOS（更多能量点）</span>
<span class="kw" data-v-10b69a4d>NEDOS</span>    = <span class="nu" data-v-10b69a4d>3001</span></code></pre>`,1))]),a[93]||(a[93]=s("h4",null,"4.2 KPOINTS 网格",-1)),s("div",na,[s("div",da,[a[84]||(a[84]=s("span",{class:"la"},"KPOINTS",-1)),a[85]||(a[85]=s("span",{class:"fn"},"稠密网格",-1)),s("button",{class:"cpb",onClick:a[13]||(a[13]=(...n)=>d.copy&&d.copy(...n))},"复制")]),a[86]||(a[86]=p(`<pre data-v-10b69a4d><code data-v-10b69a4d><span class="cm" data-v-10b69a4d>DOS k-mesh</span>
<span class="nu" data-v-10b69a4d>0</span>
<span class="vr" data-v-10b69a4d>Gamma</span>
<span class="nu" data-v-10b69a4d>16 16 16</span>
<span class="nu" data-v-10b69a4d>0 0 0</span></code></pre>`,1))]),a[94]||(a[94]=s("h4",null,"4.3 分析 DOS",-1)),s("div",pa,[s("div",ta,[a[87]||(a[87]=s("span",{class:"la"},"python",-1)),a[88]||(a[88]=s("span",{class:"fn"},"plot_dos.py",-1)),s("button",{class:"cpb",onClick:a[14]||(a[14]=(...n)=>d.copy&&d.copy(...n))},"复制")]),a[89]||(a[89]=p(`<pre data-v-10b69a4d><code data-v-10b69a4d><span class="kw" data-v-10b69a4d>import</span> numpy <span class="kw" data-v-10b69a4d>as</span> np
<span class="kw" data-v-10b69a4d>import</span> matplotlib.pyplot <span class="kw" data-v-10b69a4d>as</span> plt

<span class="cm" data-v-10b69a4d># 读取 DOSCAR</span>
<span class="kw" data-v-10b69a4d>with</span> <span class="fn2" data-v-10b69a4d>open</span>(<span class="st" data-v-10b69a4d>&#39;DOSCAR&#39;</span>, <span class="st" data-v-10b69a4d>&#39;r&#39;</span>) <span class="kw" data-v-10b69a4d>as</span> f:
    lines = f.readlines()

<span class="cm" data-v-10b69a4d># 解析头信息</span>
header = lines[<span class="nu" data-v-10b69a4d>4</span>].split()
efermi = <span class="fn2" data-v-10b69a4d>float</span>(header[<span class="nu" data-v-10b69a4d>3</span>])  <span class="cm" data-v-10b69a4d># 费米能级</span>

<span class="cm" data-v-10b69a4d># 读取总 DOS</span>
data = []
<span class="kw" data-v-10b69a4d>for</span> line <span class="kw" data-v-10b69a4d>in</span> lines[<span class="nu" data-v-10b69a4d>5</span>:]:
    parts = line.split()
    <span class="kw" data-v-10b69a4d>if</span> <span class="fn2" data-v-10b69a4d>len</span>(parts) &gt;= <span class="nu" data-v-10b69a4d>2</span>:
        data.append([<span class="fn2" data-v-10b69a4d>float</span>(parts[<span class="nu" data-v-10b69a4d>0</span>]), <span class="fn2" data-v-10b69a4d>float</span>(parts[<span class="nu" data-v-10b69a4d>1</span>])])

data = np.array(data)
energy = data[:, <span class="nu" data-v-10b69a4d>0</span>] - efermi  <span class="cm" data-v-10b69a4d># 相对费米能级</span>
dos = data[:, <span class="nu" data-v-10b69a4d>1</span>]

<span class="cm" data-v-10b69a4d># 绘图</span>
fig, ax = plt.subplots(figsize=(<span class="nu" data-v-10b69a4d>8</span>, <span class="nu" data-v-10b69a4d>6</span>))
ax.plot(energy, dos, <span class="st" data-v-10b69a4d>&#39;b-&#39;</span>)
ax.axvline(x=<span class="nu" data-v-10b69a4d>0</span>, color=<span class="st" data-v-10b69a4d>&#39;r&#39;</span>, linestyle=<span class="st" data-v-10b69a4d>&#39;--&#39;</span>, label=<span class="st" data-v-10b69a4d>&#39;Fermi level&#39;</span>)
ax.set_xlabel(<span class="st" data-v-10b69a4d>&#39;Energy (eV)&#39;</span>)
ax.set_ylabel(<span class="st" data-v-10b69a4d>&#39;DOS (states/eV)&#39;</span>)
ax.legend()
plt.savefig(<span class="st" data-v-10b69a4d>&#39;dos.png&#39;</span>, dpi=<span class="nu" data-v-10b69a4d>150</span>)</code></pre>`,1))])])):o("",!0),t.activeTutorial==="defect"?(l(),b("div",la,[a[98]||(a[98]=p('<h3 data-v-10b69a4d>案例 5：Si 空位缺陷形成能</h3><p data-v-10b69a4d>计算硅中单空位的缺陷形成能。</p><h4 data-v-10b69a4d>5.1 构建超胞</h4><p data-v-10b69a4d>使用 3×3×3 超胞（216 个原子），在中心移除一个 Si 原子。</p><h4 data-v-10b69a4d>5.2 缺陷形成能公式</h4><div class="ib tip" data-v-10b69a4d><strong data-v-10b69a4d>缺陷形成能：</strong><p data-v-10b69a4d>E_f = E_defect - E_perfect + n × μ_Si + q × (E_F + E_VBM) + E_corr</p><ul data-v-10b69a4d><li data-v-10b69a4d>E_defect：含缺陷体系的总能量</li><li data-v-10b69a4d>E_perfect：完美体系的总能量</li><li data-v-10b69a4d>μ_Si：Si 的化学势（从体相计算）</li><li data-v-10b69a4d>q：电荷态，E_F：费米能级</li><li data-v-10b69a4d>E_corr：有限尺寸修正</li></ul></div><h4 data-v-10b69a4d>5.3 INCAR 设置</h4>',7)),s("div",ba,[s("div",va,[a[95]||(a[95]=s("span",{class:"la"},"INCAR",-1)),a[96]||(a[96]=s("span",{class:"fn"},"中性空位",-1)),s("button",{class:"cpb",onClick:a[15]||(a[15]=(...n)=>d.copy&&d.copy(...n))},"复制")]),a[97]||(a[97]=p(`<pre data-v-10b69a4d><code data-v-10b69a4d><span class="cm" data-v-10b69a4d># Si 空位（中性）</span>
<span class="kw" data-v-10b69a4d>SYSTEM</span>   = <span class="st" data-v-10b69a4d>Si vacancy q=0</span>
<span class="kw" data-v-10b69a4d>ENCUT</span>    = <span class="nu" data-v-10b69a4d>400</span>
<span class="kw" data-v-10b69a4d>EDIFF</span>    = <span class="nu" data-v-10b69a4d>1E-6</span>
<span class="kw" data-v-10b69a4d>IBRION</span>   = <span class="nu" data-v-10b69a4d>2</span>
<span class="kw" data-v-10b69a4d>NSW</span>      = <span class="nu" data-v-10b69a4d>200</span>
<span class="kw" data-v-10b69a4d>ISIF</span>     = <span class="nu" data-v-10b69a4d>2</span>
<span class="kw" data-v-10b69a4d>EDIFFG</span>   = <span class="nu" data-v-10b69a4d>-0.01</span>
<span class="kw" data-v-10b69a4d>ISMEAR</span>   = <span class="nu" data-v-10b69a4d>0</span>
<span class="kw" data-v-10b69a4d>SIGMA</span>    = <span class="nu" data-v-10b69a4d>0.05</span>

<span class="cm" data-v-10b69a4d># 布居分析</span>
<span class="kw" data-v-10b69a4d>LORBIT</span>   = <span class="nu" data-v-10b69a4d>11</span></code></pre>`,1))]),a[99]||(a[99]=s("div",{class:"ib warn"},[s("strong",null,"注意："),s("ul",null,[s("li",null,"带电缺陷需要加修正项（Lany-Zunger 或 Freysoldt 修正）"),s("li",null,"超胞要足够大，避免缺陷间相互作用"),s("li",null,"需要检查虚频确保结构稳定")])],-1))])):o("",!0),t.activeTutorial==="phonon"?(l(),b("div",ca,[a[105]||(a[105]=p('<h3 data-v-10b69a4d>案例 6：声子谱计算</h3><p data-v-10b69a4d>使用有限位移法计算声子色散关系。</p><h4 data-v-10b69a4d>6.1 方法概述</h4><table class="tb" data-v-10b69a4d><thead data-v-10b69a4d><tr data-v-10b69a4d><th data-v-10b69a4d>方法</th><th data-v-10b69a4d>工具</th><th data-v-10b69a4d>特点</th></tr></thead><tbody data-v-10b69a4d><tr data-v-10b69a4d><td data-v-10b69a4d>有限位移法</td><td data-v-10b69a4d>Phonopy + VASP</td><td data-v-10b69a4d>简单可靠，推荐入门</td></tr><tr data-v-10b69a4d><td data-v-10b69a4d>DFPT</td><td data-v-10b69a4d>VASP（LEPSILON=.TRUE.）</td><td data-v-10b69a4d>更高效，但功能有限</td></tr></tbody></table><h4 data-v-10b69a4d>6.2 Phonopy 工作流</h4>',5)),s("div",oa,[s("div",ia,[a[100]||(a[100]=s("span",{class:"la"},"bash",-1)),a[101]||(a[101]=s("span",{class:"fn"},"声子计算流程",-1)),s("button",{class:"cpb",onClick:a[16]||(a[16]=(...n)=>d.copy&&d.copy(...n))},"复制")]),a[102]||(a[102]=p(`<pre data-v-10b69a4d><code data-v-10b69a4d><span class="cm" data-v-10b69a4d># 1. 生成超胞和位移结构</span>
phonopy -d --dim=<span class="st" data-v-10b69a4d>&quot;2 2 2&quot;</span> -c POSCAR

<span class="cm" data-v-10b69a4d># 2. 对每个位移结构做 VASP 计算</span>
<span class="kw" data-v-10b69a4d>for</span> d <span class="kw" data-v-10b69a4d>in</span> POSCAR-*; <span class="kw" data-v-10b69a4d>do</span>
    <span class="kw" data-v-10b69a4d>cd</span> $d
    vasp_std
    <span class="kw" data-v-10b69a4d>cd</span> ..
<span class="kw" data-v-10b69a4d>done</span>

<span class="cm" data-v-10b69a4d># 3. 收集力常数</span>
phonopy --fc

<span class="cm" data-v-10b69a4d># 4. 计算声子色散</span>
phonopy -t -p mesh.conf

<span class="cm" data-v-10b69a4d># 5. 生成力常数文件</span>
phonopy --fc CONTCAR</code></pre>`,1))]),a[106]||(a[106]=s("h4",null,"6.3 检查虚频",-1)),s("div",ua,[s("div",ra,[a[103]||(a[103]=s("span",{class:"la"},"bash",-1)),s("button",{class:"cpb",onClick:a[17]||(a[17]=(...n)=>d.copy&&d.copy(...n))},"复制")]),a[104]||(a[104]=s("pre",null,[s("code",null,[s("span",{class:"cm"},"# 检查 Gamma 点声子"),c(`
phonopy --dim=`),s("span",{class:"st"},'"2 2 2"'),c(` -c POSCAR -p band.conf

`),s("span",{class:"cm"},"# 虚频（负频率）表示结构不稳定"),c(`
`),s("span",{class:"cm"},"# 如果有小的虚频（< 50 cm⁻¹），可能是数值噪音")])],-1))])])):o("",!0)])}const wa=e(C,[["render",ea],["__scopeId","data-v-10b69a4d"]]);export{wa as default};
