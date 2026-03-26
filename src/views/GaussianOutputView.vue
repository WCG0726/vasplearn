<template>
  <div class="sec active">
    <div class="bread">
      <router-link to="/">首页</router-link>/
      <router-link to="/gaussian">Gaussian 教程</router-link>/
      <span>输出分析</span>
    </div>
    
    <h2>Gaussian 输出分析</h2>
    <p>本节介绍如何分析 Gaussian 输出文件（.log）并提取关键信息。</p>

    <h3>1. 输出文件结构</h3>
    <div class="cb">
      <div class="ch"><span class="la">output.log</span><span class="fn">文件结构</span></div>
      <pre><code><span class="cm">========================================</span>
<span class="cm">Gaussian 16:  xxx-W64RevC.01</span>
<span class="cm">========================================</span>

<span class="cm">[1] 输入回显</span>
<span class="cm">[2] 初始几何</span>
<span class="cm">[3] 迭代计算（SCF）</span>
<span class="cm">[4] 优化步骤</span>
<span class="cm">[5] 频率计算（如果设置）</span>
<span class="cm">[6] 最终结果</span>
<span class="cm">[7] 计算时间</span></code></pre>
    </div>

    <h3>2. 检查计算状态</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 检查是否正常结束</span>
<span class="fn2">grep</span> <span class="st">"Normal termination"</span> output.log

<span class="cm"># 检查错误</span>
<span class="fn2">grep</span> -i <span class="st">"error"</span> output.log

<span class="cm"># 查看最后几行</span>
<span class="fn2">tail</span> -20 output.log</code></pre>
    </div>

    <table class="tb">
      <thead><tr><th>状态</th><th>输出信息</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>正常结束</td><td><code>Normal termination</code></td><td>计算成功</td></tr>
        <tr><td>SCF 不收敛</td><td><code>SCF has not converged</code></td><td>需要调整设置</td></tr>
        <tr><td>优化不收敛</td><td><code>Optimization did not converge</code></td><td>增加优化步数</td></tr>
        <tr><td>内存不足</td><td><code>Insufficient memory</code></td><td>增加 %mem</td></tr>
      </tbody>
    </table>

    <h3>3. 提取总能量</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 提取 SCF 能量</span>
<span class="fn2">grep</span> <span class="st">"SCF Done"</span> output.log | <span class="fn2">tail</span> -1

<span class="cm"># 提取能量数值</span>
<span class="fn2">grep</span> <span class="st">"SCF Done"</span> output.log | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">'{print $5}'</span>

<span class="cm"># 提取 MP2 能量</span>
<span class="fn2">grep</span> <span class="st">"EUMP2"</span> output.log

<span class="cm"># 提取 CCSD(T) 能量</span>
<span class="fn2">grep</span> <span class="st">"CCSD(T)="</span> output.log</code></pre>
    </div>

    <h3>4. 提取优化几何</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 提取最终几何（笛卡尔坐标）</span>
<span class="fn2">grep</span> -A <span class="nu">100</span> <span class="st">"Standard orientation"</span> output.log | <span class="fn2">tail</span> -n +5 | <span class="fn2">head</span> -n -3

<span class="cm"># 使用 cclib 提取（Python）</span>
<span class="kw">import</span> cclib
data = cclib.io.ccopen(<span class="st">"output.log"</span>).parse()
<span class="fn2">print</span>(data.atomcoords[-<span class="nu">1</span>])  <span class="cm"># 最终坐标</span></code></pre>
    </div>

    <h3>5. 提取频率信息</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 提取频率</span>
<span class="fn2">grep</span> <span class="st">"Frequencies"</span> output.log

<span class="cm"># 提取红外强度</span>
<span class="fn2">grep</span> <span class="st">"IR Inten"</span> output.log

<span class="cm"># 检查虚频</span>
<span class="fn2">grep</span> <span class="st">"Frequencies"</span> output.log | <span class="fn2">awk</span> <span class="st">'{if ($2 < 0) print "虚频:", $2}'</span></code></pre>
    </div>

    <h4>频率结果解读</h4>
    <table class="tb">
      <thead><tr><th>信息</th><th>含义</th><th>单位</th></tr></thead>
      <tbody>
        <tr><td>Frequencies</td><td>振动频率</td><td>cm⁻¹</td></tr>
        <tr><td>IR Inten</td><td>红外强度</td><td>KM/mol</td></tr>
        <tr><td>Raman Activ</td><td>拉曼活性</td><td>Å⁴/amu</td></tr>
        <tr><td>Red. masses</td><td>约化质量</td><td>amu</td></tr>
        <tr><td>Frc consts</td><td>力常数</td><td>mdyn/Å</td></tr>
      </tbody>
    </table>

    <h3>6. 提取热力学量</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 提取热力学数据</span>
<span class="fn2">grep</span> -A <span class="nu">20</span> <span class="st">"Thermochemistry"</span> output.log

<span class="cm"># 提取零点能</span>
<span class="fn2">grep</span> <span class="st">"Zero-point correction"</span> output.log

<span class="cm"># 提取 Gibbs 自由能</span>
<span class="fn2">grep</span> <span class="st">"Sum of electronic and thermal Free Energies"</span> output.log</code></pre>
    </div>

    <h4>热力学量说明</h4>
    <table class="tb">
      <thead><tr><th>术语</th><th>符号</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>零点能</td><td>ZPE</td><td>振动基态能量</td></tr>
        <tr><td>热校正</td><td>E(Thermal)</td><td>热能校正值</td></tr>
        <tr><td>焓</td><td>H</td><td>电子能 + 热校正 + PV</td></tr>
        <tr><td>吉布斯自由能</td><td>G</td><td>H - TS</td></tr>
      </tbody>
    </table>

    <h3>7. 提取偶极矩和电荷</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 提取偶极矩</span>
<span class="fn2">grep</span> -A <span class="nu">3</span> <span class="st">"Dipole moment"</span> output.log

<span class="cm"># 提取 Mulliken 电荷</span>
<span class="fn2">grep</span> -A <span class="nu">20</span> <span class="st">"Mulliken charges"</span> output.log

<span class="cm"># 提取 NBO 电荷</span>
<span class="fn2">grep</span> -A <span class="nu">20</span> <span class="st">"Summary of Natural Population"</span> output.log</code></pre>
    </div>

    <h3>8. 提取 TDDFT 结果</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 提取激发能</span>
<span class="fn2">grep</span> -A <span class="nu">50</span> <span class="st">"Excitation energies"</span> output.log

<span class="cm"># 提取波长</span>
<span class="fn2">grep</span> <span class="st">"Excited State"</span> output.log | <span class="fn2">awk</span> <span class="st">'{print $7}'</span>

<span class="cm"># 提取振子强度</span>
<span class="fn2">grep</span> <span class="st">"f="</span> output.log</code></pre>
    </div>

    <h3>9. Python 分析脚本</h3>
    <div class="cb">
      <div class="ch"><span class="la">python</span><span class="fn">analyze_gaussian.py</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">import</span> re

<span class="kw">def</span> <span class="fn2">read_gaussian_output</span>(filename):
    <span class="st">"""读取 Gaussian 输出文件"""</span>
    <span class="kw">with</span> <span class="fn2">open</span>(filename, <span class="st">'r'</span>) <span class="kw">as</span> f:
        content = f.read()
    <span class="kw">return</span> content

<span class="kw">def</span> <span class="fn2">get_energy</span>(content):
    <span class="st">"""提取总能量"""</span>
    match = re.search(<span class="st">r'SCF Done:.*?=\s*([-\d.]+)'</span>, content)
    <span class="kw">if</span> match:
        <span class="kw">return</span> <span class="fn2">float</span>(match.group(<span class="nu">1</span>))
    <span class="kw">return</span> <span class="kw">None</span>

<span class="kw">def</span> <span class="fn2">get_geometry</span>(content):
    <span class="st">"""提取最终几何"""</span>
    <span class="cm"># 找到所有 Standard orientation</span>
    blocks = re.findall(
        <span class="st">r'Standard orientation.*?-{20}(.*?)-{20}'</span>,
        content, re.DOTALL
    )
    <span class="kw">if</span> blocks:
        last_block = blocks[-<span class="nu">1</span>]
        <span class="cm"># 解析坐标</span>
        coords = []
        <span class="kw">for</span> line <span class="kw">in</span> last_block.strip().split(<span class="st">'\n'</span>):
            parts = line.split()
            <span class="kw">if</span> <span class="fn2">len</span>(parts) == <span class="nu">6</span>:
                coords.append({
                    <span class="st">'element'</span>: parts[<span class="nu">1</span>],
                    <span class="st">'x'</span>: <span class="fn2">float</span>(parts[<span class="nu">3</span>]),
                    <span class="st">'y'</span>: <span class="fn2">float</span>(parts[<span class="nu">4</span>]),
                    <span class="st">'z'</span>: <span class="fn2">float</span>(parts[<span class="nu">5</span>])
                })
        <span class="kw">return</span> coords
    <span class="kw">return</span> <span class="kw">None</span>

<span class="kw">def</span> <span class="fn2">get_frequencies</span>(content):
    <span class="st">"""提取频率"""</span>
    freqs = re.findall(<span class="st">r'Frequencies\s+--\s+(.*)'</span>, content)
    <span class="kw">return</span> [<span class="fn2">float</span>(f) <span class="kw">for</span> line <span class="kw">in</span> freqs <span class="kw">for</span> f <span class="kw">in</span> line.split()]

<span class="cm"># 使用示例</span>
content = <span class="fn2">read_gaussian_output</span>(<span class="st">'output.log'</span>)
<span class="fn2">print</span>(<span class="st">f"能量: {get_energy(content)} Hartree"</span>)
<span class="fn2">print</span>(<span class="st">f"频率: {get_frequencies(content)}"</span>)</code></pre>
    </div>

    <h3>10. 常用 grep 命令速查</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 计算状态</span>
<span class="fn2">grep</span> <span class="st">"Normal termination"</span> output.log

<span class="cm"># 总能量</span>
<span class="fn2">grep</span> <span class="st">"SCF Done"</span> output.log | <span class="fn2">tail</span> -1

<span class="cm"># 优化收敛</span>
<span class="fn2">grep</span> <span class="st">"Optimization completed"</span> output.log

<span class="cm"># 频率</span>
<span class="fn2">grep</span> <span class="st">"Frequencies"</span> output.log

<span class="cm"># 零点能</span>
<span class="fn2">grep</span> <span class="st">"Zero-point correction"</span> output.log

<span class="cm"># Gibbs 自由能</span>
<span class="fn2">grep</span> <span class="st">"thermal Free Energies"</span> output.log

<span class="cm"># 偶极矩</span>
<span class="fn2">grep</span> <span class="st">"Tot="</span> output.log

<span class="cm"># 计算时间</span>
<span class="fn2">grep</span> <span class="st">"Job cpu time"</span> output.log</code></pre>
    </div>

    <div class="ib tip"><strong>提示：</strong>使用 cclib、Multiwfn 或 GaussView 等工具可以更方便地分析输出文件。</div>
  </div>
</template>

<script>
export default {
  name: 'GaussianOutputView',
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
