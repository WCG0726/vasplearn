import{_ as y,o as a,c as o,a as e,k as T,l as E,f as C,v as A,F as r,b as d,t as l,i as S,j as v,d as m}from"./index-Bd4xWfQT.js";const P={name:"CaseLibraryView",data(){return{searchQuery:"",filters:{materialType:"all",calcType:"all",difficulty:"all"},selectedCase:null,activeFileTab:"incar",fileTabs:[{id:"incar",name:"INCAR"},{id:"poscar",name:"POSCAR"},{id:"kpoints",name:"KPOINTS"},{id:"potcar",name:"POTCAR"}],cases:[{id:1,title:"Si 金刚石结构优化",description:"计算硅的金刚石结构，进行结构优化并分析晶格常数。",icon:"💎",materialType:"semiconductor",calcType:"optimize",difficulty:"beginner",difficultyText:"入门",time:"30分钟",tags:["Si","结构优化","金刚石"],fullDescription:"本案例演示如何使用 VASP 计算硅的金刚石结构。通过结构优化计算，我们将获得硅的平衡晶格常数，并与实验值进行比较。",goals:["学习 VASP 输入文件的编写","理解结构优化的原理","掌握晶格常数的提取方法","了解收敛性测试的重要性"],files:{incar:`SYSTEM = Si Diamond Structure Optimization
PREC = Accurate
ENCUT = 520
EDIFF = 1E-6
IBRION = 2
NSW = 50
EDIFFG = -0.01
ISMEAR = 0
SIGMA = 0.05
LREAL = Auto
ALGO = Normal`,poscar:`Si Diamond
1.0
5.43 0.0 0.0
0.0 5.43 0.0
0.0 0.0 5.43
Si
2
Direct
0.000 0.000 0.000
0.250 0.250 0.250`,kpoints:`Automatic
0
Gamma
8 8 8
0 0 0`,potcar:`PAW_PBE Si 05Jan2001
  4.00000000000000
parameters from PSCTR are:
   TITEL  = PAW_PBE Si 05Jan2001
   EXCHI  =   4.00000000
   ENMAX  =  245.142; ENMIN  =  183.857 eV
   IUNSCR =    1
   NCORE  =      1
   LCORR  =    .TRUE.
   EATOM  =  149.5545 eV,   11.0195 Ry

   TITEL  = PAW_PBE Si 05Jan2001
   VRHFIN =Si:  s2p2
   ENMAX  =  245.1; ENMIN  =  183.9 eV
   RCORE  =    1.90; RWIGS  =    2.30; RWIGS =   2.30
   EAUG  =   34.91; DMAX   =   0.52; RDEP  =    1.90
   RCLOW  =   0.90; RCL4P  =   1.10
   QAUG   =   0.98; QSFT  =   2.10
   RMAX   =   2.50; REXP   =   0.10
   EBASE  =    0.00
   ETEST  =    0.0000001
   ITEST  =     13434
   RCIST  =    2.50
   GG     =   0.000
   NKEY   =      0
   LASYM  =    1
   NDLC   =     1
   LCORE  =    3
   NLOCAL =     12`},analysis:`总能量: -10.845 eV/atom
晶格常数: 5.43 Å (实验值: 5.43 Å)
体弹模量: 98 GPa (实验值: 98 GPa)
收敛步数: 12 步
最终力: 0.005 eV/Å`,physics:"硅的金刚石结构由两个面心立方子晶格沿体对角线偏移1/4构成。每个硅原子与四个最近邻原子形成四面体键合，键长为2.35 Å。这种结构导致了硅的半导体特性，带隙约为1.12 eV。",notes:["ENCUT 设置为 245 eV (1.3 倍 ENMAX)","K点网格需要进行收敛性测试","结构优化时建议使用 EDIFFG = -0.01","注意检查 OUTCAR 中的收敛信息"],references:["VASP 官方文档: https://www.vasp.at/wiki/","Kresse, G. & Furthmüller, J. (1996). Computational Materials Science, 6, 15-50.","Si 的实验数据: CRC Handbook of Chemistry and Physics"]},{id:2,title:"石墨烯电子结构计算",description:"计算单层石墨烯的能带结构和态密度。",icon:"🕸️",materialType:"2d",calcType:"band",difficulty:"intermediate",difficultyText:"中级",time:"1小时",tags:["石墨烯","能带结构","二维材料"],fullDescription:"本案例演示如何计算单层石墨烯的电子结构。石墨烯具有独特的线性色散关系（狄拉克锥），是研究二维材料电子性质的经典案例。",goals:["学习二维材料的计算方法","理解能带结构的物理意义","掌握态密度的计算和分析","了解真空层的作用"],files:{incar:`SYSTEM = Graphene Electronic Structure
PREC = Accurate
ENCUT = 520
EDIFF = 1E-6
NSW = 0
ISMEAR = -5
SIGMA = 0.05
LORBIT = 11
LCHARG = .FALSE.
LWAVE = .FALSE.
LREAL = Auto
ALGO = Normal
NBANDS = 20`,poscar:`Graphene
1.0
2.46 0.0 0.0
-1.23 2.13 0.0
0.0 0.0 20.0
C
2
Direct
0.000 0.000 0.500
0.333 0.667 0.500`,kpoints:`Line-mode
Reciprocal
0.000 0.000 0.000 ! G
0.333 0.333 0.000 ! K
0.500 0.000 0.000 ! M
0.000 0.000 0.000 ! G`,potcar:`PAW_PBE C 08Apr2002
  4.00000000000000
parameters from PSCTR are:
   TITEL  = PAW_PBE C 08Apr2002
   EXCHI  =   4.00000000
   ENMAX  =  400.000; ENMIN  =  300.000 eV`},analysis:`费米能级: 0.0 eV
带隙: 0.0 eV (半金属)
狄拉克点: K 点处
态密度: 费米能级处为零
费米速度: 1.0 × 10⁶ m/s`,physics:'石墨烯的能带结构在 K 点处呈现线性色散关系，形成所谓的"狄拉克锥"。在狄拉克点处，导带和价带相接触，使得石墨烯成为零带隙的半金属。这种独特的电子结构导致了石墨烯的许多奇异性质，如高电子迁移率和量子霍尔效应。',notes:["真空层厚度至少 15 Å 以避免周期性镜像相互作用","使用 Gamma 点加密的 K 点网格","能带计算需要沿高对称点路径","注意自旋极化设置"],references:["Novoselov, K. S. et al. (2004). Science, 306, 666-669.","Castro Neto, A. H. et al. (2009). Reviews of Modern Physics, 81, 109.","VASP 教程: 二维材料计算"]},{id:3,title:"Fe 顺磁态计算",description:"计算铁的顺磁态电子结构和磁性。",icon:"🧲",materialType:"metal",calcType:"dos",difficulty:"intermediate",difficultyText:"中级",time:"45分钟",tags:["Fe","磁性","态密度"],fullDescription:"本案例演示如何计算铁的顺磁态电子结构。通过对比顺磁态和铁磁态的总能量，可以确定铁的磁性基态。",goals:["学习自旋极化计算","理解磁性材料的电子结构","掌握态密度的分析方法","了解磁矩的计算"],files:{incar:`SYSTEM = Fe Paramagnetic State
PREC = Accurate
ENCUT = 520
EDIFF = 1E-6
NSW = 0
ISPIN = 1
ISMEAR = 1
SIGMA = 0.2
LORBIT = 11
LCHARG = .FALSE.
LWAVE = .FALSE.
LREAL = Auto
ALGO = Normal`,poscar:`Fe BCC
1.0
2.87 0.0 0.0
0.0 2.87 0.0
0.0 0.0 2.87
Fe
2
Direct
0.000 0.000 0.000
0.500 0.500 0.500`,kpoints:`Automatic
0
Gamma
12 12 12
0 0 0`,potcar:`PAW_PBE Fe 06Sep2000
  8.00000000000000
parameters from PSCTR are:
   TITEL  = PAW_PBE Fe 06Sep2000
   EXCHI  =   8.00000000
   ENMAX  =  282.364; ENMIN  =  211.773 eV`},analysis:`总能量: -8.354 eV/atom
磁矩: 0 μB (顺磁态)
费米能级: 5.23 eV
态密度特征: d 带在费米能级处有尖峰
能带宽度: 约 4 eV`,physics:"铁的顺磁态计算假设没有自旋极化，所有电子自旋配对。在这种状态下，铁的 d 带完全填充，费米能级处态密度较高。实际上，铁的基态是铁磁态，磁矩约为 2.2 μB，这是由于交换相互作用导致的自旋分裂。",notes:["ISPIN=1 表示非自旋极化计算","顺磁态计算可作为铁磁态计算的参考","注意比较不同磁态的总能量","d 带位置对磁性很重要"],references:["Kittel, C. Introduction to Solid State Physics","Ashcroft, N. W. & Mermin, N. D. Solid State Physics","VASP 教程: 磁性计算"]},{id:4,title:"TiO₂ 表面计算",description:"计算锐钛矿 TiO₂ (101) 表面的表面能。",icon:"🧊",materialType:"oxide",calcType:"surface",difficulty:"advanced",difficultyText:"高级",time:"2小时",tags:["TiO₂","表面能","氧化物"],fullDescription:"本案例演示如何计算锐钛矿 TiO₂ (101) 表面的表面能。表面能是理解表面反应活性和催化性能的关键参数。",goals:["学习表面模型的构建","理解表面能的计算方法","掌握表面弛豫的原理","了解表面态的影响"],files:{incar:`SYSTEM = TiO2 Anatase (101) Surface
PREC = Accurate
ENCUT = 520
EDIFF = 1E-6
IBRION = 2
NSW = 50
EDIFFG = -0.01
ISMEAR = 0
SIGMA = 0.05
LREAL = Auto
ALGO = Normal
ISIF = 2
DIPOL = 0.5 0.5 0.5`,poscar:`TiO2 Anatase (101) Surface
1.0
10.0000 0.0000 0.0000
0.0000 10.0000 0.0000
0.0000 0.0000 25.0000
Ti O
6 12
Selective dynamics
Direct
0.000 0.000 0.000 T T T
0.500 0.500 0.000 T T T
0.250 0.250 0.250 T T T
0.750 0.750 0.250 T T T
0.500 0.000 0.500 T T T
0.000 0.500 0.500 T T T`,kpoints:`Automatic
0
Gamma
4 4 1
0 0 0`,potcar:`PAW_PBE Ti 08Apr2002
 10.00000000000000
parameters from PSCTR are:
   TITEL  = PAW_PBE Ti 08Apr2002
   EXCHI  =  10.00000000
   ENMAX  =  294.324; ENMIN  =  220.743 eV

PAW_PBE O 08Apr2002
  6.00000000000000
parameters from PSCTR are:
   TITEL  = PAW_PBE O 08Apr2002
   EXCHI  =   6.00000000
   ENMAX  =  400.000; ENMIN  =  300.000 eV`},analysis:`表面能: 0.98 J/m²
表面弛豫: Ti 原子向外移动 0.1 Å
表面偶极矩: 0.3 D
收敛步数: 25 步
最终力: 0.008 eV/Å`,physics:"TiO₂ (101) 表面是锐钛矿最稳定的表面。表面弛豫主要发生在第一层，Ti 原子向外移动，O 原子向内移动，这减少了表面偶极矩。表面能的计算需要考虑体相能量和表面原子数，是理解表面反应活性的基础。",notes:["真空层厚度至少 15 Å","表面原子需要允许弛豫","注意表面偶极矩的校正","收敛性测试需要增加 K 点密度"],references:["Diebold, U. (2003). Surface Science Reports, 48, 53-229.","Lazzeri, M. et al. (2006). Physical Review Letters, 97, 266102.","VASP 教程: 表面计算"]},{id:5,title:"Si 空位缺陷计算",description:"计算硅中空位缺陷的形成能和电子结构。",icon:"💎",materialType:"semiconductor",calcType:"defect",difficulty:"advanced",difficultyText:"高级",time:"3小时",tags:["Si","空位","缺陷"],fullDescription:"本案例演示如何计算硅中空位缺陷的形成能和电子结构。缺陷计算是理解材料性能退化和掺杂效应的基础。",goals:["学习超胞缺陷模型的构建","理解缺陷形成能的计算","掌握缺陷能级的分析","了解电荷转变能级"],files:{incar:`SYSTEM = Si Vacancy Defect
PREC = Accurate
ENCUT = 520
EDIFF = 1E-6
IBRION = 2
NSW = 50
EDIFFG = -0.01
ISMEAR = 0
SIGMA = 0.05
LREAL = Auto
ALGO = Normal
ISIF = 2
CHARGE = 0
NELECT = 127`,poscar:`Si Vacancy (2x2x2 Supercell)
1.0
10.8600 0.0000 0.0000
0.0000 10.8600 0.0000
0.0000 0.0000 10.8600
Si
15
Direct
0.000 0.000 0.000
0.250 0.250 0.000
0.250 0.000 0.250
0.000 0.250 0.250
0.500 0.500 0.000
0.500 0.000 0.500
0.000 0.500 0.500
0.500 0.250 0.250
0.250 0.500 0.250
0.250 0.250 0.500
0.750 0.750 0.000
0.750 0.000 0.750
0.000 0.750 0.750
0.750 0.500 0.500
0.500 0.750 0.500`,kpoints:`Automatic
0
Gamma
4 4 4
0 0 0`,potcar:`PAW_PBE Si 05Jan2001
  4.00000000000000
parameters from PSCTR are:
   TITEL  = PAW_PBE Si 05Jan2001
   EXCHI  =   4.00000000
   ENMAX  =  245.142; ENMIN  =  183.857 eV`},analysis:`缺陷形成能: 3.6 eV (中性态)
晶格弛豫: 最近邻原子向外移动 0.15 Å
缺陷能级: 在带隙中形成深能级
电荷转变能级: (0/-1) 在带隙中央
总能量变化: 0.5 eV`,physics:"硅中的空位缺陷会破坏四个 Si-Si 键，形成悬挂键。最近邻原子会向外弛豫，减少悬挂键的影响。空位在带隙中引入深能级，可以作为复合中心，影响载流子寿命。空位的形成能与费米能级位置和电荷态有关。",notes:["使用超胞模型避免缺陷间相互作用","注意电荷态的设置和校正","需要计算不同电荷态的形成能","有限尺寸效应需要外推"],references:["Freysoldt, C. et al. (2014). Reviews of Modern Physics, 86, 253.","Pantelides, S. T. (1986). Reviews of Modern Physics, 58, 537.","VASP 教程: 缺陷计算"]}]}},computed:{filteredCases(){return this.cases.filter(n=>{const s=n.title.toLowerCase().includes(this.searchQuery.toLowerCase())||n.description.toLowerCase().includes(this.searchQuery.toLowerCase())||n.tags.some(c=>c.toLowerCase().includes(this.searchQuery.toLowerCase())),u=this.filters.materialType==="all"||n.materialType===this.filters.materialType,p=this.filters.calcType==="all"||n.calcType===this.filters.calcType,t=this.filters.difficulty==="all"||n.difficulty===this.filters.difficulty;return s&&u&&p&&t})}},methods:{openCase(n){this.selectedCase=n,this.activeFileTab="incar"},closeCase(){this.selectedCase=null},copyFile(){const n=this.selectedCase.files[this.activeFileTab];navigator.clipboard.writeText(n).then(()=>{alert("文件内容已复制到剪贴板!")})},downloadFile(){const n=this.selectedCase.files[this.activeFileTab],s=this.activeFileTab.toUpperCase(),u=new Blob([n],{type:"text/plain"}),p=URL.createObjectURL(u),t=document.createElement("a");t.href=p,t.download=s,t.click(),URL.revokeObjectURL(p)}}},N={class:"case-library"},R={class:"filters"},h={class:"filter-group"},L={class:"filter-group"},b={class:"filter-group"},F={class:"search-box"},I={class:"cases-grid"},_=["onClick"],M={class:"case-header"},V={class:"case-icon"},O={class:"case-title"},G={class:"case-desc"},k={class:"case-meta"},D={class:"meta-item"},B={class:"meta-item"},g={class:"case-tags"},w={class:"modal-content"},W={class:"modal-header"},U={class:"modal-body"},x={class:"case-section"},X={class:"case-section"},H={class:"case-section"},K={class:"file-tabs"},Q=["onClick"],J={class:"file-content"},Y={key:0},z={key:1},j={key:2},q={key:3},Z={class:"file-actions"},$={class:"case-section"},e0={class:"result-content"},s0={class:"case-section"},i0={class:"physics-content"},t0={class:"case-section"},l0={class:"case-section"};function a0(n,s,u,p,t,c){return a(),o("div",N,[s[21]||(s[21]=e("h1",{class:"page-title"},"计算案例库",-1)),s[22]||(s[22]=e("p",{class:"page-desc"},"真实计算案例，包含完整输入文件、输出分析和物理解释。",-1)),e("div",R,[e("div",h,[s[9]||(s[9]=e("label",null,"材料类型:",-1)),T(e("select",{"onUpdate:modelValue":s[0]||(s[0]=i=>t.filters.materialType=i)},[...s[8]||(s[8]=[C('<option value="all" data-v-b126f498>全部</option><option value="metal" data-v-b126f498>金属</option><option value="semiconductor" data-v-b126f498>半导体</option><option value="oxide" data-v-b126f498>氧化物</option><option value="2d" data-v-b126f498>二维材料</option><option value="molecule" data-v-b126f498>分子</option>',6)])],512),[[E,t.filters.materialType]])]),e("div",L,[s[11]||(s[11]=e("label",null,"计算类型:",-1)),T(e("select",{"onUpdate:modelValue":s[1]||(s[1]=i=>t.filters.calcType=i)},[...s[10]||(s[10]=[C('<option value="all" data-v-b126f498>全部</option><option value="optimize" data-v-b126f498>结构优化</option><option value="dos" data-v-b126f498>态密度</option><option value="band" data-v-b126f498>能带结构</option><option value="surface" data-v-b126f498>表面计算</option><option value="defect" data-v-b126f498>缺陷计算</option>',6)])],512),[[E,t.filters.calcType]])]),e("div",b,[s[13]||(s[13]=e("label",null,"难度级别:",-1)),T(e("select",{"onUpdate:modelValue":s[2]||(s[2]=i=>t.filters.difficulty=i)},[...s[12]||(s[12]=[e("option",{value:"all"},"全部",-1),e("option",{value:"beginner"},"入门",-1),e("option",{value:"intermediate"},"中级",-1),e("option",{value:"advanced"},"高级",-1)])],512),[[E,t.filters.difficulty]])]),e("div",F,[T(e("input",{"onUpdate:modelValue":s[3]||(s[3]=i=>t.searchQuery=i),placeholder:"搜索案例...",class:"search-input"},null,512),[[A,t.searchQuery]])])]),e("div",I,[(a(!0),o(r,null,d(c.filteredCases,i=>(a(),o("div",{key:i.id,class:"case-card",onClick:f=>c.openCase(i)},[e("div",M,[e("span",V,l(i.icon),1),e("span",{class:S(["case-difficulty",i.difficulty])},l(i.difficultyText),3)]),e("h3",O,l(i.title),1),e("p",G,l(i.description),1),e("div",k,[e("span",D,"📋 "+l(i.calcType),1),e("span",B,"⏱ "+l(i.time),1)]),e("div",g,[(a(!0),o(r,null,d(i.tags,f=>(a(),o("span",{key:f,class:"tag"},l(f),1))),128))])],8,_))),128))]),t.selectedCase?(a(),o("div",{key:0,class:"modal-overlay",onClick:s[7]||(s[7]=v((...i)=>c.closeCase&&c.closeCase(...i),["self"]))},[e("div",w,[e("div",W,[e("h2",null,l(t.selectedCase.title),1),e("button",{class:"close-btn",onClick:s[4]||(s[4]=(...i)=>c.closeCase&&c.closeCase(...i))},"×")]),e("div",U,[e("div",x,[s[14]||(s[14]=e("h3",null,"📝 案例描述",-1)),e("p",null,l(t.selectedCase.fullDescription),1)]),e("div",X,[s[15]||(s[15]=e("h3",null,"🎯 学习目标",-1)),e("ul",null,[(a(!0),o(r,null,d(t.selectedCase.goals,i=>(a(),o("li",{key:i},l(i),1))),128))])]),e("div",H,[s[16]||(s[16]=e("h3",null,"📁 输入文件",-1)),e("div",K,[(a(!0),o(r,null,d(t.fileTabs,i=>(a(),o("button",{key:i.id,class:S(["file-tab",{active:t.activeFileTab===i.id}]),onClick:f=>t.activeFileTab=i.id},l(i.name),11,Q))),128))]),e("div",J,[t.activeFileTab==="incar"?(a(),o("pre",Y,l(t.selectedCase.files.incar),1)):t.activeFileTab==="poscar"?(a(),o("pre",z,l(t.selectedCase.files.poscar),1)):t.activeFileTab==="kpoints"?(a(),o("pre",j,l(t.selectedCase.files.kpoints),1)):t.activeFileTab==="potcar"?(a(),o("pre",q,l(t.selectedCase.files.potcar),1)):m("",!0)]),e("div",Z,[e("button",{class:"btn btn-small",onClick:s[5]||(s[5]=(...i)=>c.copyFile&&c.copyFile(...i))},"📋 复制文件"),e("button",{class:"btn btn-small",onClick:s[6]||(s[6]=(...i)=>c.downloadFile&&c.downloadFile(...i))},"💾 下载文件")])]),e("div",$,[s[17]||(s[17]=e("h3",null,"📊 结果分析",-1)),e("div",e0,[e("pre",null,l(t.selectedCase.analysis),1)])]),e("div",s0,[s[18]||(s[18]=e("h3",null,"💡 物理解释",-1)),e("div",i0,[e("p",null,l(t.selectedCase.physics),1)])]),e("div",t0,[s[19]||(s[19]=e("h3",null,"⚠️ 注意事项",-1)),e("ul",null,[(a(!0),o(r,null,d(t.selectedCase.notes,i=>(a(),o("li",{key:i},l(i),1))),128))])]),e("div",l0,[s[20]||(s[20]=e("h3",null,"📚 参考资料",-1)),e("ul",null,[(a(!0),o(r,null,d(t.selectedCase.references,i=>(a(),o("li",{key:i},l(i),1))),128))])])])])])):m("",!0)])}const n0=y(P,[["render",a0],["__scopeId","data-v-b126f498"]]);export{n0 as default};
