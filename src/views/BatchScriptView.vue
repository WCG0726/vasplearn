<template>
  <div class="batch-script">
    <h1 class="page-title">批量计算脚本生成器</h1>
    <p class="page-desc">自动生成 PBS/SLURM 作业脚本，支持批量提交多个 VASP 计算任务。</p>

    <div class="generator-tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="['tab-btn', { active: activeTab === tab.id }]"
        @click="activeTab = tab.id"
      >
        {{ tab.icon }} {{ tab.name }}
      </button>
    </div>

    <div class="generator-content">
      <!-- PBS 脚本生成器 -->
      <div v-if="activeTab === 'pbs'" class="generator-panel">
        <div class="panel-left">
          <h3>PBS 作业脚本配置</h3>

          <div class="param-group">
            <h4>作业基本设置</h4>
            <div class="param-row">
              <label>作业名称:</label>
              <input v-model="pbs.jobName" placeholder="vasp_calculation">
            </div>
            <div class="param-row">
              <label>队列:</label>
              <select v-model="pbs.queue">
                <option value="normal">normal</option>
                <option value="long">long</option>
                <option value="gpu">gpu</option>
                <option value="highmem">highmem</option>
              </select>
            </div>
            <div class="param-row">
              <label>节点数:</label>
              <input type="number" v-model.number="pbs.nodes" min="1" max="100">
            </div>
            <div class="param-row">
              <label>每节点核心数:</label>
              <input type="number" v-model.number="pbs.ppn" min="1" max="64">
            </div>
            <div class="param-row">
              <label>内存 (GB):</label>
              <input type="number" v-model.number="pbs.memory" min="1" max="1000">
            </div>
            <div class="param-row">
              <label>运行时间 (小时):</label>
              <input type="number" v-model.number="pbs.walltime" min="1" max="168">
            </div>
          </div>

          <div class="param-group">
            <h4>VASP 执行设置</h4>
            <div class="param-row">
              <label>VASP 可执行文件:</label>
              <select v-model="pbs.vaspExecutable">
                <option value="vasp_std">vasp_std (标准版)</option>
                <option value="vasp_gam">vasp_gam (Gamma点)</option>
                <option value="vasp_ncl">vasp_ncl (非共线)</option>
              </select>
            </div>
            <div class="param-row">
              <label>MPI 核心数:</label>
              <input type="number" v-model.number="pbs.mpiCores" min="1" max="64">
            </div>
            <div class="param-row">
              <label>并行环境:</label>
              <select v-model="pbs.parallelEnv">
                <option value="mpi">MPI</option>
                <option value="openmpi">OpenMPI</option>
                <option value="mpich">MPICH</option>
              </select>
            </div>
          </div>

          <div class="param-group">
            <h4>输入输出设置</h4>
            <div class="param-row">
              <label>输入目录:</label>
              <input v-model="pbs.inputDir" placeholder="./input">
            </div>
            <div class="param-row">
              <label>输出目录:</label>
              <input v-model="pbs.outputDir" placeholder="./output">
            </div>
            <div class="param-row">
              <label>保留输出文件:</label>
              <select v-model="pbs.keepOutput">
                <option value="true">是</option>
                <option value="false">否</option>
              </select>
            </div>
          </div>

          <div class="param-group">
            <h4>批量任务</h4>
            <div class="task-list">
              <div v-for="(task, index) in pbs.tasks" :key="index" class="task-row">
                <input v-model="task.name" placeholder="任务名称" class="task-name">
                <input v-model="task.inputDir" placeholder="输入目录" class="task-dir">
                <button class="btn-icon" @click="removeTask(index)">×</button>
              </div>
              <button class="btn btn-small" @click="addTask">+ 添加任务</button>
            </div>
          </div>

          <div class="param-group">
            <h4>高级选项</h4>
            <div class="param-row">
              <label>邮件通知:</label>
              <select v-model="pbs.email">
                <option value="none">不通知</option>
                <option value="begin">开始时</option>
                <option value="end">结束时</option>
                <option value="error">出错时</option>
              </select>
            </div>
            <div class="param-row">
              <label>邮箱地址:</label>
              <input v-model="pbs.emailAddr" placeholder="user@example.com">
            </div>
            <div class="param-row">
              <label>依赖关系:</label>
              <select v-model="pbs.dependency">
                <option value="none">无依赖</option>
                <option value="afterok">成功后执行</option>
                <option value="afterany">完成后执行</option>
              </select>
            </div>
          </div>
        </div>

        <div class="panel-right">
          <h3>PBS 脚本预览</h3>
          <div class="code-preview">
            <pre>{{ generatePbsScript() }}</pre>
          </div>
          <div class="preview-actions">
            <button class="btn btn-primary" @click="copyToClipboard('pbs')">复制脚本</button>
            <button class="btn btn-secondary" @click="downloadFile('run_vasp.pbs', generatePbsScript())">下载脚本</button>
          </div>
        </div>
      </div>

      <!-- SLURM 脚本生成器 -->
      <div v-if="activeTab === 'slurm'" class="generator-panel">
        <div class="panel-left">
          <h3>SLURM 作业脚本配置</h3>

          <div class="param-group">
            <h4>作业基本设置</h4>
            <div class="param-row">
              <label>作业名称:</label>
              <input v-model="slurm.jobName" placeholder="vasp_calculation">
            </div>
            <div class="param-row">
              <label>分区:</label>
              <select v-model="slurm.partition">
                <option value="normal">normal</option>
                <option value="long">long</option>
                <option value="gpu">gpu</option>
                <option value="debug">debug</option>
              </select>
            </div>
            <div class="param-row">
              <label>节点数:</label>
              <input type="number" v-model.number="slurm.nodes" min="1" max="100">
            </div>
            <div class="param-row">
              <label>每节点核心数:</label>
              <input type="number" v-model.number="slurm.tasksPerNode" min="1" max="64">
            </div>
            <div class="param-row">
              <label>内存 (GB):</label>
              <input type="number" v-model.number="slurm.memory" min="1" max="1000">
            </div>
            <div class="param-row">
              <label>运行时间 (小时):</label>
              <input type="number" v-model.number="slurm.timeHours" min="1" max="168">
            </div>
          </div>

          <div class="param-group">
            <h4>VASP 执行设置</h4>
            <div class="param-row">
              <label>VASP 可执行文件:</label>
              <select v-model="slurm.vaspExecutable">
                <option value="vasp_std">vasp_std (标准版)</option>
                <option value="vasp_gam">vasp_gam (Gamma点)</option>
                <option value="vasp_ncl">vasp_ncl (非共线)</option>
              </select>
            </div>
            <div class="param-row">
              <label>总核心数:</label>
              <input type="number" v-model.number="slurm.totalTasks" min="1" max="512">
            </div>
            <div class="param-row">
              <label>并行环境:</label>
              <select v-model="slurm.parallelEnv">
                <option value="srun">srun</option>
                <option value="mpirun">mpirun</option>
              </select>
            </div>
          </div>

          <div class="param-group">
            <h4>输入输出设置</h4>
            <div class="param-row">
              <label>输入目录:</label>
              <input v-model="slurm.inputDir" placeholder="./input">
            </div>
            <div class="param-row">
              <label>输出目录:</label>
              <input v-model="slurm.outputDir" placeholder="./output">
            </div>
            <div class="param-row">
              <label>日志文件:</label>
              <input v-model="slurm.logFile" placeholder="slurm-%j.out">
            </div>
          </div>

          <div class="param-group">
            <h4>批量任务</h4>
            <div class="task-list">
              <div v-for="(task, index) in slurm.tasks" :key="index" class="task-row">
                <input v-model="task.name" placeholder="任务名称" class="task-name">
                <input v-model="task.inputDir" placeholder="输入目录" class="task-dir">
                <button class="btn-icon" @click="removeSlurmTask(index)">×</button>
              </div>
              <button class="btn btn-small" @click="addSlurmTask">+ 添加任务</button>
            </div>
          </div>

          <div class="param-group">
            <h4>高级选项</h4>
            <div class="param-row">
              <label>邮件通知:</label>
              <select v-model="slurm.email">
                <option value="none">不通知</option>
                <option value="BEGIN">开始时</option>
                <option value="END">结束时</option>
                <option value="FAIL">出错时</option>
              </select>
            </div>
            <div class="param-row">
              <label>邮箱地址:</label>
              <input v-model="slurm.emailAddr" placeholder="user@example.com">
            </div>
            <div class="param-row">
              <label>依赖关系:</label>
              <select v-model="slurm.dependency">
                <option value="none">无依赖</option>
                <option value="afterok">成功后执行</option>
                <option value="afterany">完成后执行</option>
              </select>
            </div>
          </div>
        </div>

        <div class="panel-right">
          <h3>SLURM 脚本预览</h3>
          <div class="code-preview">
            <pre>{{ generateSlurmScript() }}</pre>
          </div>
          <div class="preview-actions">
            <button class="btn btn-primary" @click="copyToClipboard('slurm')">复制脚本</button>
            <button class="btn btn-secondary" @click="downloadFile('run_vasp.slurm', generateSlurmScript())">下载脚本</button>
          </div>
        </div>
      </div>

      <!-- 批量任务脚本 -->
      <div v-if="activeTab === 'batch'" class="generator-panel">
        <div class="panel-left">
          <h3>批量任务脚本配置</h3>

          <div class="param-group">
            <h4>批量设置</h4>
            <div class="param-row">
              <label>批量类型:</label>
              <select v-model="batch.type">
                <option value="array">数组任务</option>
                <option value="sequential">顺序执行</option>
                <option value="parallel">并行执行</option>
              </select>
            </div>
            <div class="param-row">
              <label>任务数量:</label>
              <input type="number" v-model.number="batch.taskCount" min="1" max="1000">
            </div>
            <div class="param-row">
              <label>任务间隔 (秒):</label>
              <input type="number" v-model.number="batch.interval" min="0" max="3600">
            </div>
          </div>

          <div class="param-group">
            <h4>任务模板</h4>
            <div class="param-row">
              <label>输入文件模式:</label>
              <select v-model="batch.inputPattern">
                <option value="numbered">编号模式 (input_1, input_2, ...)</option>
                <option value="directory">目录模式 (dir1/, dir2/, ...)</option>
                <option value="custom">自定义模式</option>
              </select>
            </div>
            <div class="param-row" v-if="batch.inputPattern === 'custom'">
              <label>自定义模式:</label>
              <input v-model="batch.customPattern" placeholder="input_{id}/">
            </div>
            <div class="param-row">
              <label>输出文件模式:</label>
              <select v-model="batch.outputPattern">
                <option value="same">同名输出</option>
                <option value="prefixed">加前缀 (output_)</option>
                <option value="directory">输出到子目录</option>
              </select>
            </div>
          </div>

          <div class="param-group">
            <h4>任务列表</h4>
            <div class="task-list">
              <div v-for="(task, index) in batch.tasks" :key="index" class="task-row">
                <input v-model="task.name" placeholder="任务名称" class="task-name">
                <input v-model="task.params" placeholder="自定义参数" class="task-params">
                <button class="btn-icon" @click="removeBatchTask(index)">×</button>
              </div>
              <button class="btn btn-small" @click="addBatchTask">+ 添加任务</button>
            </div>
          </div>

          <div class="param-group">
            <h4>资源限制</h4>
            <div class="param-row">
              <label>最大并发数:</label>
              <input type="number" v-model.number="batch.maxConcurrent" min="1" max="100">
            </div>
            <div class="param-row">
              <label>超时时间 (分钟):</label>
              <input type="number" v-model.number="batch.timeout" min="1" max="1440">
            </div>
          </div>
        </div>

        <div class="panel-right">
          <h3>批量脚本预览</h3>
          <div class="code-preview">
            <pre>{{ generateBatchScript() }}</pre>
          </div>
          <div class="preview-actions">
            <button class="btn btn-primary" @click="copyToClipboard('batch')">复制脚本</button>
            <button class="btn btn-secondary" @click="downloadFile('batch_run.sh', generateBatchScript())">下载脚本</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BatchScriptView',
  data() {
    return {
      activeTab: 'pbs',
      tabs: [
        { id: 'pbs', name: 'PBS 脚本', icon: '📄' },
        { id: 'slurm', name: 'SLURM 脚本', icon: '📄' },
        { id: 'batch', name: '批量任务', icon: '📦' }
      ],
      pbs: {
        jobName: 'vasp_calculation',
        queue: 'normal',
        nodes: 1,
        ppn: 16,
        memory: 64,
        walltime: 24,
        vaspExecutable: 'vasp_std',
        mpiCores: 16,
        parallelEnv: 'mpi',
        inputDir: './input',
        outputDir: './output',
        keepOutput: 'true',
        tasks: [
          { name: 'task1', inputDir: './input/task1' },
          { name: 'task2', inputDir: './input/task2' }
        ],
        email: 'none',
        emailAddr: '',
        dependency: 'none'
      },
      slurm: {
        jobName: 'vasp_calculation',
        partition: 'normal',
        nodes: 1,
        tasksPerNode: 16,
        memory: 64,
        timeHours: 24,
        vaspExecutable: 'vasp_std',
        totalTasks: 16,
        parallelEnv: 'srun',
        inputDir: './input',
        outputDir: './output',
        logFile: 'slurm-%j.out',
        tasks: [
          { name: 'task1', inputDir: './input/task1' },
          { name: 'task2', inputDir: './input/task2' }
        ],
        email: 'none',
        emailAddr: '',
        dependency: 'none'
      },
      batch: {
        type: 'array',
        taskCount: 10,
        interval: 0,
        inputPattern: 'numbered',
        customPattern: 'input_{id}/',
        outputPattern: 'same',
        tasks: [
          { name: 'task1', params: '' },
          { name: 'task2', params: '' }
        ],
        maxConcurrent: 4,
        timeout: 1440
      }
    }
  },
  methods: {
    generatePbsScript() {
      let script = '#!/bin/bash\n';
      script += `#PBS -N ${this.pbs.jobName}\n`;
      script += `#PBS -q ${this.pbs.queue}\n`;
      script += `#PBS -l nodes=${this.pbs.nodes}:ppn=${this.pbs.ppn}\n`;
      script += `#PBS -l mem=${this.pbs.memory}gb\n`;
      script += `#PBS -l walltime=${this.pbs.walltime}:00:00\n`;

      if (this.pbs.email !== 'none') {
        script += `#PBS -m ${this.pbs.email}\n`;
        if (this.pbs.emailAddr) {
          script += `#PBS -M ${this.pbs.emailAddr}\n`;
        }
      }

      script += '\n# 进入工作目录\n';
      script += 'cd $PBS_O_WORKDIR\n\n';

      script += '# 加载 VASP 模块\n';
      script += 'module load vasp/6.3.0\n\n';

      script += '# 设置并行环境\n';
      script += 'export OMP_NUM_THREADS=1\n\n';

      script += '# 执行 VASP 计算\n';
      script += 'for task in ' + this.pbs.tasks.map(t => t.inputDir).join(' ') + ';\n';
      script += 'do\n';
      script += '  echo "正在计算: $task"\n';
      script += '  cd $task\n';

      if (this.pbs.parallelEnv === 'mpi') {
        script += `  mpirun -np ${this.pbs.mpiCores} ${this.pbs.vaspExecutable}\n`;
      } else {
        script += `  ${this.pbs.vaspExecutable}\n`;
      }

      script += '  cd -\n';
      script += 'done\n\n';

      script += 'echo "计算完成"\n';

      return script;
    },
    generateSlurmScript() {
      let script = '#!/bin/bash\n';
      script += `#SBATCH --job-name=${this.slurm.jobName}\n`;
      script += `#SBATCH --partition=${this.slurm.partition}\n`;
      script += `#SBATCH --nodes=${this.slurm.nodes}\n`;
      script += `#SBATCH --ntasks-per-node=${this.slurm.tasksPerNode}\n`;
      script += `#SBATCH --mem=${this.slurm.memory}G\n`;
      script += `#SBATCH --time=${this.slurm.timeHours}:00:00\n`;
      script += `#SBATCH --output=${this.slurm.logFile}\n`;

      if (this.slurm.email !== 'none') {
        script += `#SBATCH --mail-type=${this.slurm.email}\n`;
        if (this.slurm.emailAddr) {
          script += `#SBATCH --mail-user=${this.slurm.emailAddr}\n`;
        }
      }

      script += '\n# 加载 VASP 模块\n';
      script += 'module load vasp/6.3.0\n\n';

      script += '# 设置并行环境\n';
      script += 'export OMP_NUM_THREADS=1\n\n';

      script += '# 执行 VASP 计算\n';
      script += 'for task in ' + this.slurm.tasks.map(t => t.inputDir).join(' ') + ';\n';
      script += 'do\n';
      script += '  echo "正在计算: $task"\n';
      script += '  cd $task\n';

      if (this.slurm.parallelEnv === 'srun') {
        script += `  srun ${this.slurm.vaspExecutable}\n`;
      } else {
        script += `  mpirun -np ${this.slurm.totalTasks} ${this.slurm.vaspExecutable}\n`;
      }

      script += '  cd -\n';
      script += 'done\n\n';

      script += 'echo "计算完成"\n';

      return script;
    },
    generateBatchScript() {
      let script = '#!/bin/bash\n\n';

      script += '# 批量计算脚本\n';
      script += '# 任务数量: ' + this.batch.taskCount + '\n';
      script += '# 最大并发数: ' + this.batch.maxConcurrent + '\n\n';

      script += '# 函数: 执行单个任务\n';
      script += 'run_task() {\n';
      script += '  local task_id=$1\n';
      script += '  local task_name=$2\n';
      script += '  local input_dir=$3\n';
      script += '  local output_dir=$4\n\n';

      script += '  echo "[$(date)] 开始任务 $task_name (ID: $task_id)"\n';
      script += '  mkdir -p $output_dir\n';
      script += '  cd $input_dir\n\n';

      script += '  # 执行 VASP 计算\n';
      script += '  mpirun -np ' + this.batch.maxConcurrent + ' vasp_std\n\n';

      script += '  # 复制输出文件\n';
      script += '  cp INCAR POSCAR KPOINTS POTCAR $output_dir/\n';
      script += '  cp CONTCAR OUTCAR DOSCAR EIGENVAL $output_dir/ 2>/dev/null || true\n';
      script += '  cp vasprun.xml $output_dir/ 2>/dev/null || true\n\n';

      script += '  echo "[$(date)] 完成任务 $task_name"\n';
      script += '  cd -\n';
      script += '}\n\n';

      script += '# 主循环\n';
      script += 'task_counter=0\n';
      script += 'running_tasks=0\n\n';

      if (this.batch.type === 'array') {
        script += 'for ((i=1; i<=' + this.batch.taskCount + '; i++));\n';
        script += 'do\n';
        script += '  task_name="task_$i"\n';
        script += '  input_dir="' + this.batch.inputDir + '/$i"\n';
        script += '  output_dir="' + this.batch.outputDir + '/$i"\n\n';
        script += '  # 等待并发任务数低于限制\n';
        script += '  while [ $running_tasks -ge ' + this.batch.maxConcurrent + ' ]; do\n';
        script += '    wait -n\n';
        script += '    running_tasks=$((running_tasks - 1))\n';
        script += '  done\n\n';
        script += '  # 启动后台任务\n';
        script += '  run_task $task_counter "$task_name" "$input_dir" "$output_dir" &\n';
        script += '  running_tasks=$((running_tasks + 1))\n';
        script += '  task_counter=$((task_counter + 1))\n\n';
        script += '  # 任务间隔\n';
        script += '  if [ ' + this.batch.interval + ' -gt 0 ]; then\n';
        script += '    sleep ' + this.batch.interval + '\n';
        script += '  fi\n';
        script += 'done\n';
      } else if (this.batch.type === 'sequential') {
        script += 'for ((i=1; i<=' + this.batch.taskCount + '; i++));\n';
        script += 'do\n';
        script += '  task_name="task_$i"\n';
        script += '  input_dir="' + this.batch.inputDir + '/$i"\n';
        script += '  output_dir="' + this.batch.outputDir + '/$i"\n\n';
        script += '  run_task $task_counter "$task_name" "$input_dir" "$output_dir"\n';
        script += '  task_counter=$((task_counter + 1))\n';
        script += 'done\n';
      } else {
        script += 'for ((i=1; i<=' + this.batch.taskCount + '; i++));\n';
        script += 'do\n';
        script += '  task_name="task_$i"\n';
        script += '  input_dir="' + this.batch.inputDir + '/$i"\n';
        script += '  output_dir="' + this.batch.outputDir + '/$i"\n\n';
        script += '  run_task $task_counter "$task_name" "$input_dir" "$output_dir" &\n';
        script += '  task_counter=$((task_counter + 1))\n';
        script += 'done\n\n';
        script += 'wait\n';
      }

      script += '\n# 等待所有任务完成\n';
      script += 'wait\n\n';
      script += 'echo "所有任务完成"\n';

      return script;
    },
    copyToClipboard(type) {
      let content = '';
      if (type === 'pbs') content = this.generatePbsScript();
      else if (type === 'slurm') content = this.generateSlurmScript();
      else if (type === 'batch') content = this.generateBatchScript();

      navigator.clipboard.writeText(content).then(() => {
        alert('已复制到剪贴板!');
      });
    },
    downloadFile(filename, content) {
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    },
    addTask() {
      this.pbs.tasks.push({ name: `task${this.pbs.tasks.length + 1}`, inputDir: `./input/task${this.pbs.tasks.length + 1}` });
    },
    removeTask(index) {
      this.pbs.tasks.splice(index, 1);
    },
    addSlurmTask() {
      this.slurm.tasks.push({ name: `task${this.slurm.tasks.length + 1}`, inputDir: `./input/task${this.slurm.tasks.length + 1}` });
    },
    removeSlurmTask(index) {
      this.slurm.tasks.splice(index, 1);
    },
    addBatchTask() {
      this.batch.tasks.push({ name: `task${this.batch.tasks.length + 1}`, params: '' });
    },
    removeBatchTask(index) {
      this.batch.tasks.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.batch-script {
  padding: 20px;
}

.page-title {
  color: var(--primary);
  margin-bottom: 10px;
}

.page-desc {
  color: var(--text-secondary);
  margin-bottom: 30px;
}

.generator-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  border-bottom: 2px solid var(--border);
  padding-bottom: 10px;
}

.tab-btn {
  padding: 10px 20px;
  border: none;
  background: var(--bg-secondary);
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}

.tab-btn.active {
  background: var(--primary);
  color: white;
}

.generator-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.panel-left, .panel-right {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid var(--border);
}

.param-group {
  margin-bottom: 25px;
}

.param-group h4 {
  color: var(--primary);
  margin-bottom: 15px;
  border-bottom: 1px solid var(--border);
  padding-bottom: 8px;
}

.param-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.param-row label {
  min-width: 120px;
  color: var(--text-secondary);
}

.param-row input, .param-row select {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 14px;
}

.task-list {
  margin-top: 15px;
}

.task-row {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}

.task-name {
  width: 120px;
}

.task-dir {
  flex: 1;
}

.task-params {
  flex: 1;
}

.btn-icon {
  width: 30px;
  height: 30px;
  border: none;
  background: var(--danger);
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.code-preview {
  background: #1a1a2e;
  color: #e0e0e0;
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
  max-height: 500px;
  overflow-y: auto;
}

.preview-actions {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-secondary {
  background: var(--bg-tertiary);
  color: var(--text);
}

.btn-small {
  padding: 6px 12px;
  font-size: 12px;
  background: var(--accent);
  color: white;
}

@media (max-width: 768px) {
  .generator-panel {
    grid-template-columns: 1fr;
  }
}
</style>
