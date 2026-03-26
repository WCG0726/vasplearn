<template>
  <div class="sec active">
    <div class="bread">
      <router-link to="/">首页</router-link>/
      <router-link to="/gaussian">Gaussian 教程</router-link>/
      <span>输入文件</span>
    </div>
    
    <h2>Gaussian 输入文件详解</h2>
    <p>Gaussian 输入文件（.gjf 或 .com）包含计算的所有设置信息。</p>

    <h3>1. 输入文件结构</h3>
    <div class="cb">
      <div class="ch"><span class="la">input.gjf</span><span class="fn">完整结构</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm">%chk=molecule.chk</span>           <span class="cm">; 检查点文件</span>
<span class="cm">%mem=4GB</span>                    <span class="cm">; 内存限制</span>
<span class="cm">%nproc=8</span>                    <span class="cm">; 并行核心数</span>
<span class="cm">#p B3LYP/6-31G(d) opt</span>       <span class="cm">; 路由段</span>

<span class="vr">Water molecule optimization</span> <span class="cm">; 标题段</span>

<span class="nu">0 1</span>                          <span class="cm">; 电荷和自旋</span>
<span class="vr">O</span>   <span class="nu">0.000000   0.000000   0.117300</span>    <span class="cm">; 厐子坐标</span>
<span class="vr">H</span>   <span class="nu">0.000000   0.757200  -0.469200</span>
<span class="vr">H</span>   <span class="nu">0.000000  -0.757200  -0.469200</span>

                              <span class="cm">; 空行结束</span></code></pre>
    </div>

    <h3>2. 路由段详解</h3>
    <p>路由段以 <code class="ic">#</code> 开头，指定计算方法和任务类型。</p>

    <h4>基本格式</h4>
    <div class="cb">
      <div class="ch"><span class="la">格式</span></div>
      <pre><code><span class="cm"># [选项] 方法/基组 [任务关键词] [其他选项]</span>

<span class="cm"># 示例</span>
<span class="cm">#p B3LYP/6-31G(d) opt freq</span>
<span class="cm">#p M062X/def2TZVP td=(nstates=10)</span></code></pre>
    </div>

    <h4>常用选项前缀</h4>
    <table class="tb">
      <thead><tr><th>前缀</th><th>含义</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td><code class="ic">#</code></td><td>默认输出</td><td>简洁输出</td></tr>
        <tr><td><code class="ic">#p</code></td><td>详细输出</td><td>推荐使用</td></tr>
        <tr><td><code class="ic">#t</code></td><td>测试模式</td><td>不执行计算</td></tr>
      </tbody>
    </table>

    <h4>常用任务关键词</h4>
    <table class="tb">
      <thead><tr><th>关键词</th><th>功能</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td><code class="ic">opt</code></td><td>几何优化</td><td>寻找能量最低构型</td></tr>
        <tr><td><code class="ic">freq</code></td><td>频率计算</td><td>振动频率和热力学量</td></tr>
        <tr><td><code class="ic">opt freq</code></td><td>优化+频率</td><td>最常用组合</td></tr>
        <tr><td><code class="ic">sp</code></td><td>单点能</td><td>固定几何计算能量</td></tr>
        <tr><td><code class="ic">ts</code></td><td>过渡态</td><td>搜索过渡态</td></tr>
        <tr><td><code class="ic">irc</code></td><td>IRC 计算</td><td>反应路径跟踪</td></tr>
        <tr><td><code class="ic">td</code></td><td>激发态</td><td>TDDFT 计算</td></tr>
        <tr><td><code class="ic">polar</code></td><td>极化率</td><td>计算极化率张量</td></tr>
      </tbody>
    </table>

    <h3>3. Link 0 命令</h3>
    <p>以 <code class="ic">%</code> 开头的命令控制计算资源。</p>

    <table class="tb">
      <thead><tr><th>命令</th><th>功能</th><th>示例</th></tr></thead>
      <tbody>
        <tr><td><code class="ic">%chk</code></td><td>检查点文件</td><td>%chk=molecule.chk</td></tr>
        <tr><td><code class="ic">%mem</code></td><td>内存限制</td><td>%mem=32GB</td></tr>
        <tr><td><code class="ic">%nproc</code></td><td>并行核心数</td><td>%nproc=16</td></tr>
        <tr><td><code class="ic">%cpu</code></td><td>CPU 绑定</td><td>%cpu=0-15</td></tr>
        <tr><td><code class="ic">%scr</code></td><td>临时目录</td><td>%scr=/scratch</td></tr>
      </tbody>
    </table>

    <h3>4. 坐标格式</h3>
    <h4>笛卡尔坐标（最常用）</h4>
    <div class="cb">
      <div class="ch"><span class="la">笛卡尔坐标</span></div>
      <pre><code><span class="nu">0 1</span>
<span class="vr">O</span>   <span class="nu">0.000000   0.000000   0.117300</span>
<span class="vr">H</span>   <span class="nu">0.000000   0.757200  -0.469200</span>
<span class="vr">H</span>   <span class="nu">0.000000  -0.757200  -0.469200</span></code></pre>
    </div>

    <h4>内坐标（Z-matrix）</h4>
    <div class="cb">
      <div class="ch"><span class="la">Z-matrix</span></div>
      <pre><code><span class="nu">0 1</span>
<span class="vr">O</span>
<span class="vr">H</span>  <span class="nu">1</span>  <span class="nu">0.96</span>
<span class="vr">H</span>  <span class="nu">1</span>  <span class="nu">0.96</span>  <span class="nu">2</span>  <span class="nu">104.5</span></code></pre>
    </div>

    <h3>5. 常用输入模板</h3>

    <h4>模板 1：几何优化 + 频率</h4>
    <div class="cb">
      <div class="ch"><span class="la">opt_freq.gjf</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm">%chk=molecule.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p B3LYP/6-31G(d) opt freq</span>

<span class="vr">Molecule optimization and frequency</span>

<span class="nu">0 1</span>
<span class="cm">[原子坐标]</span></code></pre>
    </div>

    <h4>模板 2：过渡态搜索</h4>
    <div class="cb">
      <div class="ch"><span class="la">ts_search.gjf</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm">%chk=ts.chk</span>
<span class="cm">%mem=32GB</span>
<span class="cm">%nproc=16</span>
<span class="cm">#p M062X/6-311+G(d,p) opt=(ts,calcfc,noeigen) freq</span>

<span class="vr">Transition state search</span>

<span class="nu">0 1</span>
<span class="cm">[过渡态坐标]</span></code></pre>
    </div>

    <h4>模板 3：TDDFT 激发态</h4>
    <div class="cb">
      <div class="ch"><span class="la">tddft.gjf</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm">%chk=tddft.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p B3LYP/6-31+G(d,p) td=(nstates=10)</span>

<span class="vr">TDDFT calculation</span>

<span class="nu">0 1</span>
<span class="cm">[分子坐标]</span></code></pre>
    </div>

    <h4>模板 4：高精度单点能</h4>
    <div class="cb">
      <div class="ch"><span class="la">high_accuracy.gjf</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm">%chk=ccsdt.chk</span>
<span class="cm">%mem=64GB</span>
<span class="cm">%nproc=32</span>
<span class="cm">#p CCSD(T)/cc-pVTZ</span>

<span class="vr">High accuracy single point</span>

<span class="nu">0 1</span>
<span class="cm">[优化后的坐标]</span></code></pre>
    </div>

    <h3>6. 特殊设置</h3>

    <h4>对称性限制</h4>
    <div class="cb">
      <div class="ch"><span class="la">对称性</span></div>
      <pre><code><span class="cm"># 强制 C2v 对称性</span>
<span class="cm">#p B3LYP/6-31G(d) opt=(Z-Matrix)</span>

<span class="vr">Water with symmetry</span>

<span class="nu">0 1</span>
<span class="vr">O</span>
<span class="vr">H</span>  <span class="nu">1</span>  <span class="nu">rOH</span>
<span class="vr">H</span>  <span class="nu">1</span>  <span class="nu">rOH</span>  <span class="nu">2</span>  <span class="nu">aHOH</span>

<span class="nu">rOH=0.96</span>
<span class="nu">aHOH=104.5</span></code></pre>
    </div>

    <h4>冻结原子</h4>
    <div class="cb">
      <div class="ch"><span class="la">冻结坐标</span></div>
      <pre><code><span class="cm"># 使用 modredundant</span>
<span class="cm">#p B3LYP/6-31G(d) opt=modredundant</span>

<span class="vr">Freeze bond</span>

<span class="nu">0 1</span>
<span class="cm">[原子坐标]</span>

<span class="nu">B 1 2 F</span>    <span class="cm">; 冻结键 1-2</span>
<span class="nu">A 1 2 3 F</span>  <span class="cm">; 冻结角 1-2-3</span></code></pre>
    </div>

    <h3>7. 输入文件检查清单</h3>
    <table class="tb">
      <thead><tr><th>项目</th><th>检查内容</th></tr></thead>
      <tbody>
        <tr><td>Link 0</td><td>%chk, %mem, %nproc 设置合理</td></tr>
        <tr><td>路由段</td><td>方法/基组正确，任务关键词完整</td></tr>
        <tr><td>标题行</td><td>非空，描述清楚</td></tr>
        <tr><td>电荷/自旋</td><td>电荷和自旋多重度正确</td></tr>
        <tr><td>原子坐标</td><td>原子类型正确，坐标合理</td></tr>
        <tr><td>空行结尾</td><td>文件以空行结束</td></tr>
      </tbody>
    </table>

    <div class="ib warn"><strong>常见错误：</strong>
      <ul>
        <li>忘记空行结尾会导致计算失败</li>
        <li>电荷/自旋设置错误会导致收敛问题</li>
        <li>原子坐标单位默认为 Å（非 Bohr）</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GaussianInputView',
  methods: {
    copy(e) {
      const pre = e.target.closest('.cb').querySelector('pre')
      const text = pre.textContent
      navigator.clipboard.writeText(text).then(() => {
        e.target.textContent = '已复制!'
        e.target.classList.add('ok')
        setTimeout(() => {
          e.target.textContent = '复制'
          e.target.classList.remove('ok')
        }, 2000)
      })
    }
  }
}
</script>
