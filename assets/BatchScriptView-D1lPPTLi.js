import{_ as V,o as a,c as m,a as t,F as v,b as k,i as U,t as b,k as o,v as i,l as p,d as g}from"./index-Bd4xWfQT.js";const y={name:"BatchScriptView",data(){return{activeTab:"pbs",tabs:[{id:"pbs",name:"PBS 脚本",icon:"📄"},{id:"slurm",name:"SLURM 脚本",icon:"📄"},{id:"batch",name:"批量任务",icon:"📦"}],pbs:{jobName:"vasp_calculation",queue:"normal",nodes:1,ppn:16,memory:64,walltime:24,vaspExecutable:"vasp_std",mpiCores:16,parallelEnv:"mpi",inputDir:"./input",outputDir:"./output",keepOutput:"true",tasks:[{name:"task1",inputDir:"./input/task1"},{name:"task2",inputDir:"./input/task2"}],email:"none",emailAddr:"",dependency:"none"},slurm:{jobName:"vasp_calculation",partition:"normal",nodes:1,tasksPerNode:16,memory:64,timeHours:24,vaspExecutable:"vasp_std",totalTasks:16,parallelEnv:"srun",inputDir:"./input",outputDir:"./output",logFile:"slurm-%j.out",tasks:[{name:"task1",inputDir:"./input/task1"},{name:"task2",inputDir:"./input/task2"}],email:"none",emailAddr:"",dependency:"none"},batch:{type:"array",taskCount:10,interval:0,inputPattern:"numbered",customPattern:"input_{id}/",outputPattern:"same",tasks:[{name:"task1",params:""},{name:"task2",params:""}],maxConcurrent:4,timeout:1440}}},methods:{generatePbsScript(){let l=`#!/bin/bash
`;return l+=`#PBS -N ${this.pbs.jobName}
`,l+=`#PBS -q ${this.pbs.queue}
`,l+=`#PBS -l nodes=${this.pbs.nodes}:ppn=${this.pbs.ppn}
`,l+=`#PBS -l mem=${this.pbs.memory}gb
`,l+=`#PBS -l walltime=${this.pbs.walltime}:00:00
`,this.pbs.email!=="none"&&(l+=`#PBS -m ${this.pbs.email}
`,this.pbs.emailAddr&&(l+=`#PBS -M ${this.pbs.emailAddr}
`)),l+=`
# 进入工作目录
`,l+=`cd $PBS_O_WORKDIR

`,l+=`# 加载 VASP 模块
`,l+=`module load vasp/6.3.0

`,l+=`# 设置并行环境
`,l+=`export OMP_NUM_THREADS=1

`,l+=`# 执行 VASP 计算
`,l+="for task in "+this.pbs.tasks.map(n=>n.inputDir).join(" ")+`;
`,l+=`do
`,l+=`  echo "正在计算: $task"
`,l+=`  cd $task
`,this.pbs.parallelEnv==="mpi"?l+=`  mpirun -np ${this.pbs.mpiCores} ${this.pbs.vaspExecutable}
`:l+=`  ${this.pbs.vaspExecutable}
`,l+=`  cd -
`,l+=`done

`,l+=`echo "计算完成"
`,l},generateSlurmScript(){let l=`#!/bin/bash
`;return l+=`#SBATCH --job-name=${this.slurm.jobName}
`,l+=`#SBATCH --partition=${this.slurm.partition}
`,l+=`#SBATCH --nodes=${this.slurm.nodes}
`,l+=`#SBATCH --ntasks-per-node=${this.slurm.tasksPerNode}
`,l+=`#SBATCH --mem=${this.slurm.memory}G
`,l+=`#SBATCH --time=${this.slurm.timeHours}:00:00
`,l+=`#SBATCH --output=${this.slurm.logFile}
`,this.slurm.email!=="none"&&(l+=`#SBATCH --mail-type=${this.slurm.email}
`,this.slurm.emailAddr&&(l+=`#SBATCH --mail-user=${this.slurm.emailAddr}
`)),l+=`
# 加载 VASP 模块
`,l+=`module load vasp/6.3.0

`,l+=`# 设置并行环境
`,l+=`export OMP_NUM_THREADS=1

`,l+=`# 执行 VASP 计算
`,l+="for task in "+this.slurm.tasks.map(n=>n.inputDir).join(" ")+`;
`,l+=`do
`,l+=`  echo "正在计算: $task"
`,l+=`  cd $task
`,this.slurm.parallelEnv==="srun"?l+=`  srun ${this.slurm.vaspExecutable}
`:l+=`  mpirun -np ${this.slurm.totalTasks} ${this.slurm.vaspExecutable}
`,l+=`  cd -
`,l+=`done

`,l+=`echo "计算完成"
`,l},generateBatchScript(){let l=`#!/bin/bash

`;return l+=`# 批量计算脚本
`,l+="# 任务数量: "+this.batch.taskCount+`
`,l+="# 最大并发数: "+this.batch.maxConcurrent+`

`,l+=`# 函数: 执行单个任务
`,l+=`run_task() {
`,l+=`  local task_id=$1
`,l+=`  local task_name=$2
`,l+=`  local input_dir=$3
`,l+=`  local output_dir=$4

`,l+=`  echo "[$(date)] 开始任务 $task_name (ID: $task_id)"
`,l+=`  mkdir -p $output_dir
`,l+=`  cd $input_dir

`,l+=`  # 执行 VASP 计算
`,l+="  mpirun -np "+this.batch.maxConcurrent+` vasp_std

`,l+=`  # 复制输出文件
`,l+=`  cp INCAR POSCAR KPOINTS POTCAR $output_dir/
`,l+=`  cp CONTCAR OUTCAR DOSCAR EIGENVAL $output_dir/ 2>/dev/null || true
`,l+=`  cp vasprun.xml $output_dir/ 2>/dev/null || true

`,l+=`  echo "[$(date)] 完成任务 $task_name"
`,l+=`  cd -
`,l+=`}

`,l+=`# 主循环
`,l+=`task_counter=0
`,l+=`running_tasks=0

`,this.batch.type==="array"?(l+="for ((i=1; i<="+this.batch.taskCount+`; i++));
`,l+=`do
`,l+=`  task_name="task_$i"
`,l+='  input_dir="'+this.batch.inputDir+`/$i"
`,l+='  output_dir="'+this.batch.outputDir+`/$i"

`,l+=`  # 等待并发任务数低于限制
`,l+="  while [ $running_tasks -ge "+this.batch.maxConcurrent+` ]; do
`,l+=`    wait -n
`,l+=`    running_tasks=$((running_tasks - 1))
`,l+=`  done

`,l+=`  # 启动后台任务
`,l+=`  run_task $task_counter "$task_name" "$input_dir" "$output_dir" &
`,l+=`  running_tasks=$((running_tasks + 1))
`,l+=`  task_counter=$((task_counter + 1))

`,l+=`  # 任务间隔
`,l+="  if [ "+this.batch.interval+` -gt 0 ]; then
`,l+="    sleep "+this.batch.interval+`
`,l+=`  fi
`,l+=`done
`):this.batch.type==="sequential"?(l+="for ((i=1; i<="+this.batch.taskCount+`; i++));
`,l+=`do
`,l+=`  task_name="task_$i"
`,l+='  input_dir="'+this.batch.inputDir+`/$i"
`,l+='  output_dir="'+this.batch.outputDir+`/$i"

`,l+=`  run_task $task_counter "$task_name" "$input_dir" "$output_dir"
`,l+=`  task_counter=$((task_counter + 1))
`,l+=`done
`):(l+="for ((i=1; i<="+this.batch.taskCount+`; i++));
`,l+=`do
`,l+=`  task_name="task_$i"
`,l+='  input_dir="'+this.batch.inputDir+`/$i"
`,l+='  output_dir="'+this.batch.outputDir+`/$i"

`,l+=`  run_task $task_counter "$task_name" "$input_dir" "$output_dir" &
`,l+=`  task_counter=$((task_counter + 1))
`,l+=`done

`,l+=`wait
`),l+=`
# 等待所有任务完成
`,l+=`wait

`,l+=`echo "所有任务完成"
`,l},copyToClipboard(l){let n="";l==="pbs"?n=this.generatePbsScript():l==="slurm"?n=this.generateSlurmScript():l==="batch"&&(n=this.generateBatchScript()),navigator.clipboard.writeText(n).then(()=>{alert("已复制到剪贴板!")})},downloadFile(l,n){const S=new Blob([n],{type:"text/plain"}),w=URL.createObjectURL(S),e=document.createElement("a");e.href=w,e.download=l,e.click(),URL.revokeObjectURL(w)},addTask(){this.pbs.tasks.push({name:`task${this.pbs.tasks.length+1}`,inputDir:`./input/task${this.pbs.tasks.length+1}`})},removeTask(l){this.pbs.tasks.splice(l,1)},addSlurmTask(){this.slurm.tasks.push({name:`task${this.slurm.tasks.length+1}`,inputDir:`./input/task${this.slurm.tasks.length+1}`})},removeSlurmTask(l){this.slurm.tasks.splice(l,1)},addBatchTask(){this.batch.tasks.push({name:`task${this.batch.tasks.length+1}`,params:""})},removeBatchTask(l){this.batch.tasks.splice(l,1)}}},C={class:"batch-script"},P={class:"generator-tabs"},T=["onClick"],x={class:"generator-content"},A={key:0,class:"generator-panel"},B={class:"panel-left"},D={class:"param-group"},f={class:"param-row"},h={class:"param-row"},E={class:"param-row"},N={class:"param-row"},_={class:"param-row"},R={class:"param-row"},H={class:"param-group"},O={class:"param-row"},j={class:"param-row"},M={class:"param-row"},I={class:"param-group"},F={class:"param-row"},L={class:"param-row"},q={class:"param-row"},G={class:"param-group"},K={class:"task-list"},z=["onUpdate:modelValue"],W=["onUpdate:modelValue"],J=["onClick"],Q={class:"param-group"},X={class:"param-row"},Y={class:"param-row"},Z={class:"param-row"},$={class:"panel-right"},c={class:"code-preview"},nn={class:"preview-actions"},tn={key:1,class:"generator-panel"},ln={class:"panel-left"},sn={class:"param-group"},en={class:"param-row"},on={class:"param-row"},un={class:"param-row"},rn={class:"param-row"},pn={class:"param-row"},an={class:"param-row"},mn={class:"param-group"},dn={class:"param-row"},bn={class:"param-row"},vn={class:"param-row"},kn={class:"param-group"},gn={class:"param-row"},wn={class:"param-row"},Sn={class:"param-row"},Vn={class:"param-group"},Un={class:"task-list"},yn=["onUpdate:modelValue"],Cn=["onUpdate:modelValue"],Pn=["onClick"],Tn={class:"param-group"},xn={class:"param-row"},An={class:"param-row"},Bn={class:"param-row"},Dn={class:"panel-right"},fn={class:"code-preview"},hn={class:"preview-actions"},En={key:2,class:"generator-panel"},Nn={class:"panel-left"},_n={class:"param-group"},Rn={class:"param-row"},Hn={class:"param-row"},On={class:"param-row"},jn={class:"param-group"},Mn={class:"param-row"},In={key:0,class:"param-row"},Fn={class:"param-row"},Ln={class:"param-group"},qn={class:"task-list"},Gn=["onUpdate:modelValue"],Kn=["onUpdate:modelValue"],zn=["onClick"],Wn={class:"param-group"},Jn={class:"param-row"},Qn={class:"param-row"},Xn={class:"panel-right"},Yn={class:"code-preview"},Zn={class:"preview-actions"};function $n(l,n,S,w,e,u){return a(),m("div",C,[n[119]||(n[119]=t("h1",{class:"page-title"},"批量计算脚本生成器",-1)),n[120]||(n[120]=t("p",{class:"page-desc"},"自动生成 PBS/SLURM 作业脚本，支持批量提交多个 VASP 计算任务。",-1)),t("div",P,[(a(!0),m(v,null,k(e.tabs,s=>(a(),m("button",{key:s.id,class:U(["tab-btn",{active:e.activeTab===s.id}]),onClick:d=>e.activeTab=s.id},b(s.icon)+" "+b(s.name),11,T))),128))]),t("div",x,[e.activeTab==="pbs"?(a(),m("div",A,[t("div",B,[n[73]||(n[73]=t("h3",null,"PBS 作业脚本配置",-1)),t("div",D,[n[54]||(n[54]=t("h4",null,"作业基本设置",-1)),t("div",f,[n[47]||(n[47]=t("label",null,"作业名称:",-1)),o(t("input",{"onUpdate:modelValue":n[0]||(n[0]=s=>e.pbs.jobName=s),placeholder:"vasp_calculation"},null,512),[[i,e.pbs.jobName]])]),t("div",h,[n[49]||(n[49]=t("label",null,"队列:",-1)),o(t("select",{"onUpdate:modelValue":n[1]||(n[1]=s=>e.pbs.queue=s)},[...n[48]||(n[48]=[t("option",{value:"normal"},"normal",-1),t("option",{value:"long"},"long",-1),t("option",{value:"gpu"},"gpu",-1),t("option",{value:"highmem"},"highmem",-1)])],512),[[p,e.pbs.queue]])]),t("div",E,[n[50]||(n[50]=t("label",null,"节点数:",-1)),o(t("input",{type:"number","onUpdate:modelValue":n[2]||(n[2]=s=>e.pbs.nodes=s),min:"1",max:"100"},null,512),[[i,e.pbs.nodes,void 0,{number:!0}]])]),t("div",N,[n[51]||(n[51]=t("label",null,"每节点核心数:",-1)),o(t("input",{type:"number","onUpdate:modelValue":n[3]||(n[3]=s=>e.pbs.ppn=s),min:"1",max:"64"},null,512),[[i,e.pbs.ppn,void 0,{number:!0}]])]),t("div",_,[n[52]||(n[52]=t("label",null,"内存 (GB):",-1)),o(t("input",{type:"number","onUpdate:modelValue":n[4]||(n[4]=s=>e.pbs.memory=s),min:"1",max:"1000"},null,512),[[i,e.pbs.memory,void 0,{number:!0}]])]),t("div",R,[n[53]||(n[53]=t("label",null,"运行时间 (小时):",-1)),o(t("input",{type:"number","onUpdate:modelValue":n[5]||(n[5]=s=>e.pbs.walltime=s),min:"1",max:"168"},null,512),[[i,e.pbs.walltime,void 0,{number:!0}]])])]),t("div",H,[n[60]||(n[60]=t("h4",null,"VASP 执行设置",-1)),t("div",O,[n[56]||(n[56]=t("label",null,"VASP 可执行文件:",-1)),o(t("select",{"onUpdate:modelValue":n[6]||(n[6]=s=>e.pbs.vaspExecutable=s)},[...n[55]||(n[55]=[t("option",{value:"vasp_std"},"vasp_std (标准版)",-1),t("option",{value:"vasp_gam"},"vasp_gam (Gamma点)",-1),t("option",{value:"vasp_ncl"},"vasp_ncl (非共线)",-1)])],512),[[p,e.pbs.vaspExecutable]])]),t("div",j,[n[57]||(n[57]=t("label",null,"MPI 核心数:",-1)),o(t("input",{type:"number","onUpdate:modelValue":n[7]||(n[7]=s=>e.pbs.mpiCores=s),min:"1",max:"64"},null,512),[[i,e.pbs.mpiCores,void 0,{number:!0}]])]),t("div",M,[n[59]||(n[59]=t("label",null,"并行环境:",-1)),o(t("select",{"onUpdate:modelValue":n[8]||(n[8]=s=>e.pbs.parallelEnv=s)},[...n[58]||(n[58]=[t("option",{value:"mpi"},"MPI",-1),t("option",{value:"openmpi"},"OpenMPI",-1),t("option",{value:"mpich"},"MPICH",-1)])],512),[[p,e.pbs.parallelEnv]])])]),t("div",I,[n[65]||(n[65]=t("h4",null,"输入输出设置",-1)),t("div",F,[n[61]||(n[61]=t("label",null,"输入目录:",-1)),o(t("input",{"onUpdate:modelValue":n[9]||(n[9]=s=>e.pbs.inputDir=s),placeholder:"./input"},null,512),[[i,e.pbs.inputDir]])]),t("div",L,[n[62]||(n[62]=t("label",null,"输出目录:",-1)),o(t("input",{"onUpdate:modelValue":n[10]||(n[10]=s=>e.pbs.outputDir=s),placeholder:"./output"},null,512),[[i,e.pbs.outputDir]])]),t("div",q,[n[64]||(n[64]=t("label",null,"保留输出文件:",-1)),o(t("select",{"onUpdate:modelValue":n[11]||(n[11]=s=>e.pbs.keepOutput=s)},[...n[63]||(n[63]=[t("option",{value:"true"},"是",-1),t("option",{value:"false"},"否",-1)])],512),[[p,e.pbs.keepOutput]])])]),t("div",G,[n[66]||(n[66]=t("h4",null,"批量任务",-1)),t("div",K,[(a(!0),m(v,null,k(e.pbs.tasks,(s,d)=>(a(),m("div",{key:d,class:"task-row"},[o(t("input",{"onUpdate:modelValue":r=>s.name=r,placeholder:"任务名称",class:"task-name"},null,8,z),[[i,s.name]]),o(t("input",{"onUpdate:modelValue":r=>s.inputDir=r,placeholder:"输入目录",class:"task-dir"},null,8,W),[[i,s.inputDir]]),t("button",{class:"btn-icon",onClick:r=>u.removeTask(d)},"×",8,J)]))),128)),t("button",{class:"btn btn-small",onClick:n[12]||(n[12]=(...s)=>u.addTask&&u.addTask(...s))},"+ 添加任务")])]),t("div",Q,[n[72]||(n[72]=t("h4",null,"高级选项",-1)),t("div",X,[n[68]||(n[68]=t("label",null,"邮件通知:",-1)),o(t("select",{"onUpdate:modelValue":n[13]||(n[13]=s=>e.pbs.email=s)},[...n[67]||(n[67]=[t("option",{value:"none"},"不通知",-1),t("option",{value:"begin"},"开始时",-1),t("option",{value:"end"},"结束时",-1),t("option",{value:"error"},"出错时",-1)])],512),[[p,e.pbs.email]])]),t("div",Y,[n[69]||(n[69]=t("label",null,"邮箱地址:",-1)),o(t("input",{"onUpdate:modelValue":n[14]||(n[14]=s=>e.pbs.emailAddr=s),placeholder:"user@example.com"},null,512),[[i,e.pbs.emailAddr]])]),t("div",Z,[n[71]||(n[71]=t("label",null,"依赖关系:",-1)),o(t("select",{"onUpdate:modelValue":n[15]||(n[15]=s=>e.pbs.dependency=s)},[...n[70]||(n[70]=[t("option",{value:"none"},"无依赖",-1),t("option",{value:"afterok"},"成功后执行",-1),t("option",{value:"afterany"},"完成后执行",-1)])],512),[[p,e.pbs.dependency]])])])]),t("div",$,[n[74]||(n[74]=t("h3",null,"PBS 脚本预览",-1)),t("div",c,[t("pre",null,b(u.generatePbsScript()),1)]),t("div",nn,[t("button",{class:"btn btn-primary",onClick:n[16]||(n[16]=s=>u.copyToClipboard("pbs"))},"复制脚本"),t("button",{class:"btn btn-secondary",onClick:n[17]||(n[17]=s=>u.downloadFile("run_vasp.pbs",u.generatePbsScript()))},"下载脚本")])])])):g("",!0),e.activeTab==="slurm"?(a(),m("div",tn,[t("div",ln,[n[100]||(n[100]=t("h3",null,"SLURM 作业脚本配置",-1)),t("div",sn,[n[82]||(n[82]=t("h4",null,"作业基本设置",-1)),t("div",en,[n[75]||(n[75]=t("label",null,"作业名称:",-1)),o(t("input",{"onUpdate:modelValue":n[18]||(n[18]=s=>e.slurm.jobName=s),placeholder:"vasp_calculation"},null,512),[[i,e.slurm.jobName]])]),t("div",on,[n[77]||(n[77]=t("label",null,"分区:",-1)),o(t("select",{"onUpdate:modelValue":n[19]||(n[19]=s=>e.slurm.partition=s)},[...n[76]||(n[76]=[t("option",{value:"normal"},"normal",-1),t("option",{value:"long"},"long",-1),t("option",{value:"gpu"},"gpu",-1),t("option",{value:"debug"},"debug",-1)])],512),[[p,e.slurm.partition]])]),t("div",un,[n[78]||(n[78]=t("label",null,"节点数:",-1)),o(t("input",{type:"number","onUpdate:modelValue":n[20]||(n[20]=s=>e.slurm.nodes=s),min:"1",max:"100"},null,512),[[i,e.slurm.nodes,void 0,{number:!0}]])]),t("div",rn,[n[79]||(n[79]=t("label",null,"每节点核心数:",-1)),o(t("input",{type:"number","onUpdate:modelValue":n[21]||(n[21]=s=>e.slurm.tasksPerNode=s),min:"1",max:"64"},null,512),[[i,e.slurm.tasksPerNode,void 0,{number:!0}]])]),t("div",pn,[n[80]||(n[80]=t("label",null,"内存 (GB):",-1)),o(t("input",{type:"number","onUpdate:modelValue":n[22]||(n[22]=s=>e.slurm.memory=s),min:"1",max:"1000"},null,512),[[i,e.slurm.memory,void 0,{number:!0}]])]),t("div",an,[n[81]||(n[81]=t("label",null,"运行时间 (小时):",-1)),o(t("input",{type:"number","onUpdate:modelValue":n[23]||(n[23]=s=>e.slurm.timeHours=s),min:"1",max:"168"},null,512),[[i,e.slurm.timeHours,void 0,{number:!0}]])])]),t("div",mn,[n[88]||(n[88]=t("h4",null,"VASP 执行设置",-1)),t("div",dn,[n[84]||(n[84]=t("label",null,"VASP 可执行文件:",-1)),o(t("select",{"onUpdate:modelValue":n[24]||(n[24]=s=>e.slurm.vaspExecutable=s)},[...n[83]||(n[83]=[t("option",{value:"vasp_std"},"vasp_std (标准版)",-1),t("option",{value:"vasp_gam"},"vasp_gam (Gamma点)",-1),t("option",{value:"vasp_ncl"},"vasp_ncl (非共线)",-1)])],512),[[p,e.slurm.vaspExecutable]])]),t("div",bn,[n[85]||(n[85]=t("label",null,"总核心数:",-1)),o(t("input",{type:"number","onUpdate:modelValue":n[25]||(n[25]=s=>e.slurm.totalTasks=s),min:"1",max:"512"},null,512),[[i,e.slurm.totalTasks,void 0,{number:!0}]])]),t("div",vn,[n[87]||(n[87]=t("label",null,"并行环境:",-1)),o(t("select",{"onUpdate:modelValue":n[26]||(n[26]=s=>e.slurm.parallelEnv=s)},[...n[86]||(n[86]=[t("option",{value:"srun"},"srun",-1),t("option",{value:"mpirun"},"mpirun",-1)])],512),[[p,e.slurm.parallelEnv]])])]),t("div",kn,[n[92]||(n[92]=t("h4",null,"输入输出设置",-1)),t("div",gn,[n[89]||(n[89]=t("label",null,"输入目录:",-1)),o(t("input",{"onUpdate:modelValue":n[27]||(n[27]=s=>e.slurm.inputDir=s),placeholder:"./input"},null,512),[[i,e.slurm.inputDir]])]),t("div",wn,[n[90]||(n[90]=t("label",null,"输出目录:",-1)),o(t("input",{"onUpdate:modelValue":n[28]||(n[28]=s=>e.slurm.outputDir=s),placeholder:"./output"},null,512),[[i,e.slurm.outputDir]])]),t("div",Sn,[n[91]||(n[91]=t("label",null,"日志文件:",-1)),o(t("input",{"onUpdate:modelValue":n[29]||(n[29]=s=>e.slurm.logFile=s),placeholder:"slurm-%j.out"},null,512),[[i,e.slurm.logFile]])])]),t("div",Vn,[n[93]||(n[93]=t("h4",null,"批量任务",-1)),t("div",Un,[(a(!0),m(v,null,k(e.slurm.tasks,(s,d)=>(a(),m("div",{key:d,class:"task-row"},[o(t("input",{"onUpdate:modelValue":r=>s.name=r,placeholder:"任务名称",class:"task-name"},null,8,yn),[[i,s.name]]),o(t("input",{"onUpdate:modelValue":r=>s.inputDir=r,placeholder:"输入目录",class:"task-dir"},null,8,Cn),[[i,s.inputDir]]),t("button",{class:"btn-icon",onClick:r=>u.removeSlurmTask(d)},"×",8,Pn)]))),128)),t("button",{class:"btn btn-small",onClick:n[30]||(n[30]=(...s)=>u.addSlurmTask&&u.addSlurmTask(...s))},"+ 添加任务")])]),t("div",Tn,[n[99]||(n[99]=t("h4",null,"高级选项",-1)),t("div",xn,[n[95]||(n[95]=t("label",null,"邮件通知:",-1)),o(t("select",{"onUpdate:modelValue":n[31]||(n[31]=s=>e.slurm.email=s)},[...n[94]||(n[94]=[t("option",{value:"none"},"不通知",-1),t("option",{value:"BEGIN"},"开始时",-1),t("option",{value:"END"},"结束时",-1),t("option",{value:"FAIL"},"出错时",-1)])],512),[[p,e.slurm.email]])]),t("div",An,[n[96]||(n[96]=t("label",null,"邮箱地址:",-1)),o(t("input",{"onUpdate:modelValue":n[32]||(n[32]=s=>e.slurm.emailAddr=s),placeholder:"user@example.com"},null,512),[[i,e.slurm.emailAddr]])]),t("div",Bn,[n[98]||(n[98]=t("label",null,"依赖关系:",-1)),o(t("select",{"onUpdate:modelValue":n[33]||(n[33]=s=>e.slurm.dependency=s)},[...n[97]||(n[97]=[t("option",{value:"none"},"无依赖",-1),t("option",{value:"afterok"},"成功后执行",-1),t("option",{value:"afterany"},"完成后执行",-1)])],512),[[p,e.slurm.dependency]])])])]),t("div",Dn,[n[101]||(n[101]=t("h3",null,"SLURM 脚本预览",-1)),t("div",fn,[t("pre",null,b(u.generateSlurmScript()),1)]),t("div",hn,[t("button",{class:"btn btn-primary",onClick:n[34]||(n[34]=s=>u.copyToClipboard("slurm"))},"复制脚本"),t("button",{class:"btn btn-secondary",onClick:n[35]||(n[35]=s=>u.downloadFile("run_vasp.slurm",u.generateSlurmScript()))},"下载脚本")])])])):g("",!0),e.activeTab==="batch"?(a(),m("div",En,[t("div",Nn,[n[117]||(n[117]=t("h3",null,"批量任务脚本配置",-1)),t("div",_n,[n[106]||(n[106]=t("h4",null,"批量设置",-1)),t("div",Rn,[n[103]||(n[103]=t("label",null,"批量类型:",-1)),o(t("select",{"onUpdate:modelValue":n[36]||(n[36]=s=>e.batch.type=s)},[...n[102]||(n[102]=[t("option",{value:"array"},"数组任务",-1),t("option",{value:"sequential"},"顺序执行",-1),t("option",{value:"parallel"},"并行执行",-1)])],512),[[p,e.batch.type]])]),t("div",Hn,[n[104]||(n[104]=t("label",null,"任务数量:",-1)),o(t("input",{type:"number","onUpdate:modelValue":n[37]||(n[37]=s=>e.batch.taskCount=s),min:"1",max:"1000"},null,512),[[i,e.batch.taskCount,void 0,{number:!0}]])]),t("div",On,[n[105]||(n[105]=t("label",null,"任务间隔 (秒):",-1)),o(t("input",{type:"number","onUpdate:modelValue":n[38]||(n[38]=s=>e.batch.interval=s),min:"0",max:"3600"},null,512),[[i,e.batch.interval,void 0,{number:!0}]])])]),t("div",jn,[n[112]||(n[112]=t("h4",null,"任务模板",-1)),t("div",Mn,[n[108]||(n[108]=t("label",null,"输入文件模式:",-1)),o(t("select",{"onUpdate:modelValue":n[39]||(n[39]=s=>e.batch.inputPattern=s)},[...n[107]||(n[107]=[t("option",{value:"numbered"},"编号模式 (input_1, input_2, ...)",-1),t("option",{value:"directory"},"目录模式 (dir1/, dir2/, ...)",-1),t("option",{value:"custom"},"自定义模式",-1)])],512),[[p,e.batch.inputPattern]])]),e.batch.inputPattern==="custom"?(a(),m("div",In,[n[109]||(n[109]=t("label",null,"自定义模式:",-1)),o(t("input",{"onUpdate:modelValue":n[40]||(n[40]=s=>e.batch.customPattern=s),placeholder:"input_{id}/"},null,512),[[i,e.batch.customPattern]])])):g("",!0),t("div",Fn,[n[111]||(n[111]=t("label",null,"输出文件模式:",-1)),o(t("select",{"onUpdate:modelValue":n[41]||(n[41]=s=>e.batch.outputPattern=s)},[...n[110]||(n[110]=[t("option",{value:"same"},"同名输出",-1),t("option",{value:"prefixed"},"加前缀 (output_)",-1),t("option",{value:"directory"},"输出到子目录",-1)])],512),[[p,e.batch.outputPattern]])])]),t("div",Ln,[n[113]||(n[113]=t("h4",null,"任务列表",-1)),t("div",qn,[(a(!0),m(v,null,k(e.batch.tasks,(s,d)=>(a(),m("div",{key:d,class:"task-row"},[o(t("input",{"onUpdate:modelValue":r=>s.name=r,placeholder:"任务名称",class:"task-name"},null,8,Gn),[[i,s.name]]),o(t("input",{"onUpdate:modelValue":r=>s.params=r,placeholder:"自定义参数",class:"task-params"},null,8,Kn),[[i,s.params]]),t("button",{class:"btn-icon",onClick:r=>u.removeBatchTask(d)},"×",8,zn)]))),128)),t("button",{class:"btn btn-small",onClick:n[42]||(n[42]=(...s)=>u.addBatchTask&&u.addBatchTask(...s))},"+ 添加任务")])]),t("div",Wn,[n[116]||(n[116]=t("h4",null,"资源限制",-1)),t("div",Jn,[n[114]||(n[114]=t("label",null,"最大并发数:",-1)),o(t("input",{type:"number","onUpdate:modelValue":n[43]||(n[43]=s=>e.batch.maxConcurrent=s),min:"1",max:"100"},null,512),[[i,e.batch.maxConcurrent,void 0,{number:!0}]])]),t("div",Qn,[n[115]||(n[115]=t("label",null,"超时时间 (分钟):",-1)),o(t("input",{type:"number","onUpdate:modelValue":n[44]||(n[44]=s=>e.batch.timeout=s),min:"1",max:"1440"},null,512),[[i,e.batch.timeout,void 0,{number:!0}]])])])]),t("div",Xn,[n[118]||(n[118]=t("h3",null,"批量脚本预览",-1)),t("div",Yn,[t("pre",null,b(u.generateBatchScript()),1)]),t("div",Zn,[t("button",{class:"btn btn-primary",onClick:n[45]||(n[45]=s=>u.copyToClipboard("batch"))},"复制脚本"),t("button",{class:"btn btn-secondary",onClick:n[46]||(n[46]=s=>u.downloadFile("batch_run.sh",u.generateBatchScript()))},"下载脚本")])])])):g("",!0)])])}const nt=V(y,[["render",$n],["__scopeId","data-v-283e035d"]]);export{nt as default};
