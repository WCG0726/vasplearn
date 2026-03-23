<template>
  <div class="sec active">
    <div class="bread">
      <router-link to="/">首页</router-link>/
      <router-link to="/errors">错误诊断</router-link>/
      <span>内存与性能</span>
    </div>
    
    <h2>内存与性能问题</h2>
    <p>内存溢出和计算速度慢是大规模计算中的常见问题。</p>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🔴</span>
        <span class="et">问题 1：Out of memory / Killed</span>
        <span class="es sc">高频</span>
      </div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <div class="esym">forrtl: severe (41): insufficient virtual memory<br>或直接显示 Killed（被系统杀死）</div>
        
        <h4>内存估算</h4>
        <table class="tb">
          <thead><tr><th>原子数</th><th>ENCUT</th><th>估算内存</th></tr></thead>
          <tbody>
            <tr><td>50</td><td>400 eV</td><td>~10 GB</td></tr>
            <tr><td>100</td><td>400 eV</td><td>~20-40 GB</td></tr>
            <tr><td>200</td><td>400 eV</td><td>~60-100 GB</td></tr>
            <tr><td>500</td><td>400 eV</td><td>~200+ GB</td></tr>
          </tbody>
        </table>
        
        <h4>解决方案</h4>
        <div class="cb">
          <div class="ch"><span class="la">INCAR</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 方案 1：实空间投影（>50 原子推荐）</span>
<span class="kw">LREAL</span>    = <span class="st">Auto</span>          <span class="cm">; 实空间计算投影算符</span>
<span class="kw">LREAL</span>    = <span class="nu">.FALSE.</span>        <span class="cm">; 默认，倒空间计算（更精确但费内存）</span>

<span class="cm"># 方案 2：减少同时处理的轨道数</span>
<span class="kw">NSIM</span>     = <span class="nu">1</span>             <span class="cm">; 默认 4，设为 1 最省内存</span>

<span class="cm"># 方案 3：减少 K 点并行</span>
<span class="kw">KPAR</span>     = <span class="nu">1</span>             <span class="cm">; 减少 K 点并行度</span>

<span class="cm"># 方案 4：不写大文件</span>
<span class="kw">LWAVE</span>    = <span class="nu">.FALSE.</span>        <span class="cm">; 不写 WAVECAR</span>
<span class="kw">LCHARG</span>   = <span class="nu">.FALSE.</span>        <span class="cm">; 不写 CHGCAR</span></code></pre>
        </div>
        
        <div class="ib tip"><strong>检查内存使用：</strong>运行时查看 <code>top</code> 或 <code>free -h</code> 命令。</div>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🟡</span>
        <span class="et">问题 2：计算速度太慢</span>
        <span class="es scm">常见</span>
      </div>
      <div class="ec-b" style="display:block">
        <h4>性能优化 INCAR</h4>
        <div class="cb">
          <div class="ch"><span class="la">INCAR</span><span class="fn">性能优化</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 实空间投影（>50 原子）</span>
<span class="kw">LREAL</span>    = <span class="st">Auto</span>

<span class="cm"># 电子步加速</span>
<span class="kw">ALGO</span>     = <span class="st">Fast</span>          <span class="cm">; 默认 Normal，Fast 更快</span>
<span class="kw">MAXMIX</span>   = <span class="nu">40</span>            <span class="cm">; 加速收敛</span>

<span class="cm"># I/O 优化</span>
<span class="kw">LWAVE</span>    = <span class="nu">.FALSE.</span>        <span class="cm">; 不写波函数</span>
<span class="kw">LCHARG</span>   = <span class="nu">.FALSE.</span>        <span class="cm">; 不写电荷密度</span>
<span class="kw">NWRITE</span>   = <span class="nu">0</span>             <span class="cm">; 减少输出</span></code></pre>
        </div>
        
        <h4>并行设置</h4>
        <table class="tb">
          <thead><tr><th>参数</th><th>说明</th><th>建议</th></tr></thead>
          <tbody>
            <tr><td><code>NPAR</code></td><td>能带并行数</td><td>设为节点数，整除总核心数</td></tr>
            <tr><td><code>KPAR</code></td><td>K 点并行数</td><td>整除 K 点数</td></tr>
            <tr><td><code>NCORE</code></td><td>每组核心数</td><td>设为每节点核心数</td></tr>
          </tbody>
        </table>
        
        <div class="cb">
          <div class="ch"><span class="la">INCAR</span><span class="fn">并行设置示例（64 核，4 节点，每节点 16 核）</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 64 核，4 节点，8 个 K 点</span>
<span class="kw">NPAR</span>     = <span class="nu">4</span>             <span class="cm">; 4 个节点</span>
<span class="kw">KPAR</span>     = <span class="nu">4</span>             <span class="cm">; 4 个 K 点并行（整除 8）</span>
<span class="kw">NCORE</span>    = <span class="nu">16</span>            <span class="cm">; 每节点 16 核</span></code></pre>
        </div>
        
        <div class="ib warn"><strong>注意：</strong>NPAR × KPAR × NCORE 应整除总核心数。NPAR 应整除 NBANDS。</div>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🟡</span>
        <span class="et">问题 3：磁盘空间不足</span>
        <span class="es scm">常见</span>
      </div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <div class="esym">forrtl: severe (30): open unit, error on file OPEN</div>
        
        <h4>文件大小参考</h4>
        <table class="tb">
          <thead><tr><th>文件</th><th>典型大小</th><th>说明</th></tr></thead>
          <tbody>
            <tr><td><code>WAVECAR</code></td><td>1-100 GB</td><td>最大文件</td></tr>
            <tr><td><code>CHGCAR</code></td><td>100 MB - 10 GB</td><td>电荷密度</td></tr>
            <tr><td><code>OUTCAR</code></td><td>100 MB - 2 GB</td><td>详细输出</td></tr>
            <tr><td><code>vasprun.xml</code></td><td>100 MB - 5 GB</td><td>XML 输出</td></tr>
          </tbody>
        </table>
        
        <h4>解决方案</h4>
        <ol>
          <li>检查磁盘：<code>df -h</code></li>
          <li>删除不需要的文件：<code>rm WAVECAR</code></li>
          <li>设置 <code>LWAVE = .FALSE.</code></li>
          <li>设置 <code>LCHARG = .FALSE.</code></li>
          <li>使用 <code>NWRITE = 0</code> 减少输出</li>
        </ol>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🟢</span>
        <span class="et">问题 4：MPI 通信效率低</span>
        <span class="es smn">优化</span>
      </div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <p>使用大量核心但加速比不理想（如 128 核只比 64 核快 1.5 倍）。</p>
        
        <h4>诊断方法</h4>
        <div class="cb">
          <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 查看并行效率</span>
<span class="fn2">grep</span> <span class="st">"LOOP:"</span> OUTCAR | <span class="fn2">tail</span> -20

<span class="cm"># 时间分布</span>
<span class="fn2">grep</span> <span class="st">"Total CPU time"</span> OUTCAR
<span class="fn2">grep</span> <span class="st">"Parallel routine"</span> OUTCAR -A 20</code></pre>
        </div>
        
        <h4>优化建议</h4>
        <ul>
          <li>确保核心数整除 NPAR、KPAR、NCORE</li>
          <li>K 点少时，减少 KPAR</li>
          <li>能带少时，减少 NPAR</li>
          <li>使用高速网络（InfiniBand）</li>
        </ul>
      </div>
    </div>

    <h3>性能调优总结</h3>
    <div class="db">
      <div class="db-t">不同场景的推荐设置</div>
      <table class="tb">
        <thead><tr><th>场景</th><th>LREAL</th><th>ALGO</th><th>NPAR</th><th>KPAR</th></tr></thead>
        <tbody>
          <tr><td>小体系 (< 50 原子)</td><td>.FALSE.</td><td>Normal</td><td>核心数</td><td>K 点数</td></tr>
          <tr><td>中体系 (50-200 原子)</td><td>Auto</td><td>Fast</td><td>节点数</td><td>1</td></tr>
          <tr><td>大体系 (> 200 原子)</td><td>Auto</td><td>Fast</td><td>1</td><td>1</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorsMemoryView',
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
