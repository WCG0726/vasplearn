<template>
  <div class="sec active">
    <div class="bread">
      <router-link to="/">首页</router-link>/
      <router-link to="/gaussian">Gaussian 教程</router-link>/
      <span>常见问题</span>
    </div>
    
    <h2>Gaussian 常见问题</h2>
    <p>本节汇总 Gaussian 使用过程中的常见问题和解决方法。</p>

    <h3>1. 计算不收敛</h3>
    
    <div class="ec open">
      <div class="ec-h"><span class="ei">🔴</span><span class="et">问题 1：SCF 不收敛</span><span class="es sc">高频</span></div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <div class="esym">SCF has not converged after 128 cycles</div>
        
        <h4>原因</h4>
        <ul>
          <li>初始猜测不好</li>
          <li>体系本身难以收敛</li>
          <li>泛函/基组选择不当</li>
        </ul>
        
        <h4>解决方案</h4>
        <div class="cb">
          <div class="ch"><span class="la">gjf</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 方案 1：增加迭代次数</span>
<span class="cm">#p B3LYP/6-31G(d) scf=(maxcycle=300)</span>

<span class="cm"># 方案 2：使用更稳定的 SCF 方法</span>
<span class="cm">#p B3LYP/6-31G(d) scf=xqc</span>

<span class="cm"># 方案 3：使用能级移动</span>
<span class="cm">#p B3LYP/6-31G(d) scf=(vshift=100)</span>

<span class="cm"># 方案 4：从检查点继续</span>
<span class="cm">#p B3LYP/6-31G(d) guess=read</span>

<span class="cm"># 方案 5：使用 Fermi 展宽</span>
<span class="cm">#p B3LYP/6-31G(d) scf=fermi</span></code></pre>
        </div>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h"><span class="ei">🔴</span><span class="et">问题 2：优化不收敛</span><span class="es sc">高频</span></div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <div class="esym">Optimization did not converge after 100 steps</div>
        
        <h4>原因</h4>
        <ul>
          <li>初始结构太差</li>
          <li>势能面太复杂</li>
          <li>步长不合适</li>
        </ul>
        
        <h4>解决方案</h4>
        <div class="cb">
          <div class="ch"><span class="la">gjf</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 方案 1：增加优化步数</span>
<span class="cm">#p B3LYP/6-31G(d) opt=(maxstep=200)</span>

<span class="cm"># 方案 2：使用更宽松的收敛</span>
<span class="cm">#p B3LYP/6-31G(d) opt=loose</span>

<span class="cm"># 方案 3：计算初始力常数</span>
<span class="cm">#p B3LYP/6-31G(d) opt=calcfc</span>

<span class="cm"># 方案 4：从检查点读取力常数</span>
<span class="cm">#p B3LYP/6-31G(d) opt=readfc</span>

<span class="cm"># 方案 5：先用小基组优化，再用大基组</span>
<span class="cm">#p B3LYP/3-21G opt  (第一步)</span>
<span class="cm">#p B3LYP/6-31G(d) opt guess=read  (第二步)</span></code></pre>
        </div>
      </div>
    </div>

    <h3>2. 内存和磁盘问题</h3>
    
    <div class="ec open">
      <div class="ec-h"><span class="ei">🟡</span><span class="et">问题 3：内存不足</span><span class="es scm">常见</span></div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <div class="esym">Insufficient memory for direct SCF</div>
        
        <h4>解决方案</h4>
        <div class="cb">
          <div class="ch"><span class="la">gjf</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 增加内存</span>
<span class="cm">%mem=64GB</span>

<span class="cm"># 或使用积分存储</span>
<span class="cm">#p B3LYP/6-31G(d) scf=conventional</span>

<span class="cm"># 或使用较小基组</span>
<span class="cm">#p B3LYP/6-31G(d)  →  #p B3LYP/3-21G</span></code></pre>
        </div>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h"><span class="ei">🟡</span><span class="et">问题 4：磁盘空间不足</span><span class="es scm">常见</span></div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <div class="esym">No space left on device</div>
        
        <h4>解决方案</h4>
        <ol>
          <li>清理临时文件：<code>rm -rf /tmp/gaussian/*</code></li>
          <li>使用更大空间的目录：<code>%scr=/big_disk</code></li>
          <li>删除旧的 .chk 文件</li>
          <li>使用 <code>%kjob=L302</code> 完成后删除 chk</li>
        </ol>
      </div>
    </div>

    <h3>3. 结构问题</h3>
    
    <div class="ec open">
      <div class="ec-h"><span class="ei">🟡</span><span class="et">问题 5：有虚频</span><span class="es scm">常见</span></div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <div class="esym">Frequencies: -123.45  678.90  ...</div>
        
        <h4>原因</h4>
        <ul>
          <li>结构是过渡态（只有一个虚频，正常）</li>
          <li>结构未完全优化</li>
          <li>对称性限制导致</li>
        </ul>
        
        <h4>解决方案</h4>
        <ol>
          <li>检查虚频对应的振动模式</li>
          <li>如果是高阶鞍点，沿虚频方向扰动结构</li>
          <li>使用更严格的优化：<code>opt=tight</code></li>
          <li>移除对称性限制</li>
        </ol>
        
        <div class="cb">
          <div class="ch"><span class="la">python</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 沿虚频方向扰动结构</span>
<span class="kw">from</span> ase.io <span class="kw">import</span> read, write

atoms = read(<span class="st">'output.log'</span>)
<span class="cm"># 手动扰动原子位置</span>
positions = atoms.get_positions()
positions[<span class="nu">0</span>] += [<span class="nu">0.01</span>, <span class="nu">0</span>, <span class="nu">0</span>]  <span class="cm"># 微调第一个原子</span>
atoms.set_positions(positions)
write(<span class="st">'distorted.gjf'</span>, atoms)</code></pre>
        </div>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h"><span class="ei">🟡</span><span class="et">问题 6：线性分子优化失败</span><span class="es scm">常见</span></div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <p>线性分子（如 CO₂, HCN）优化时结构变形。</p>
        
        <h4>解决方案</h4>
        <div class="cb">
          <div class="ch"><span class="la">gjf</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 使用 Z-matrix 并指定对称性</span>
<span class="cm">#p B3LYP/6-31G(d) opt=(Z-Matrix)</span>

<span class="nu">0 1</span>
<span class="vr">C</span>
<span class="vr">O</span>  <span class="nu">1</span>  <span class="nu">rCO</span>
<span class="vr">O</span>  <span class="nu">1</span>  <span class="nu">rCO</span>  <span class="nu">2</span>  <span class="nu">180.0</span>

<span class="nu">rCO=1.16</span></code></pre>
        </div>
      </div>
    </div>

    <h3>4. 电荷和自旋问题</h3>
    
    <div class="ec open">
      <div class="ec-h"><span class="ei">🟡</span><span class="et">问题 7：电荷/自旋设置错误</span><span class="es scm">常见</span></div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <ul>
          <li>能量异常高</li>
          <li>收敛困难</li>
          <li>结果不合理</li>
        </ul>
        
        <h4>正确设置方法</h4>
        <table class="tb">
          <thead><tr><th>体系</th><th>电荷</th><th>自旋</th><th>示例</th></tr></thead>
          <tbody>
            <tr><td>闭壳层分子</td><td>0</td><td>1</td><td>H₂O, CH₄</td></tr>
            <tr><td>开壳层单重态</td><td>0</td><td>1</td><td>卡宾</td></tr>
            <tr><td>开壳层双自由基</td><td>0</td><td>3</td><td>O₂</td></tr>
            <tr><td>阳离子</td><td>+1</td><td>1 或 2</td><td>CH₃⁺</td></tr>
            <tr><td>阴离子</td><td>-1</td><td>1 或 2</td><td>CH₃⁻</td></tr>
          </tbody>
        </table>
        
        <div class="cb">
          <div class="ch"><span class="la">gjf</span><span class="fn">正确格式</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 电荷 自旋</span>
<span class="nu">0 1</span>      <span class="cm">; 中性闭壳层</span>
<span class="nu">1 2</span>      <span class="cm">; +1 阳离子，双态</span>
<span class="nu">-1 1</span>     <span class="cm">; -1 阴离子，单态</span>
<span class="nu">0 3</span>      <span class="cm">; 中性三重态</span></code></pre>
        </div>
      </div>
    </div>

    <h3>5. 过渡态问题</h3>
    
    <div class="ec open">
      <div class="ec-h"><span class="ei">🔴</span><span class="et">问题 8：找不到过渡态</span><span class="es sc">高频</span></div>
      <div class="ec-b" style="display:block">
        <h4>原因</h4>
        <ul>
          <li>初始猜测太差</li>
          <li>势能面太复杂</li>
          <li>反应不是基元反应</li>
        </ul>
        
        <h4>解决方案</h4>
        <ol>
          <li><strong>改进初始猜测</strong>：手动构建过渡态结构</li>
          <li><strong>使用 QST2/QST3</strong>：提供反应物和产物</li>
          <li><strong>使用 GSM</strong>：Growing String Method</li>
          <li><strong>扫描反应坐标</strong>：找到近似过渡态</li>
        </ol>
        
        <div class="cb">
          <div class="ch"><span class="la">gjf</span><span class="fn">QST2 示例</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm">#p B3LYP/6-31G(d) opt=(qst2,calcfc)</span>

<span class="vr">Reactant</span>

<span class="nu">0 1</span>
<span class="cm">[反应物坐标]</span>

<span class="vr">Product</span>

<span class="nu">0 1</span>
<span class="cm">[产物坐标]</span></code></pre>
        </div>
      </div>
    </div>

    <h3>6. TDDFT 问题</h3>
    
    <div class="ec open">
      <div class="ec-h"><span class="ei">🟡</span><span class="et">问题 9：TDDFT 激发态不合理</span><span class="es scm">常见</span></div>
      <div class="ec-b" style="display:block">
        <h4>原因</h4>
        <ul>
          <li>泛函选择不当</li>
          <li>基组太小</li>
          <li>计算的激发态数不够</li>
        </ul>
        
        <h4>解决方案</h4>
        <table class="tb">
          <thead><tr><th>问题</th><th>解决方案</th></tr></thead>
          <tbody>
            <tr><td>UV-Vis 偏差大</td><td>使用 CAM-B3LYP 或 ωB97X-D</td></tr>
            <tr><td>电荷转移激发不准</td><td>使用范围分离泛函</td></tr>
            <tr><td>缺少数值</td><td>增加 nstates</td></tr>
            <tr><td>需要三重态</td><td>添加 triplets 关键词</td></tr>
          </tbody>
        </table>
        
        <div class="cb">
          <div class="ch"><span class="la">gjf</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 推荐 TDDFT 设置</span>
<span class="cm">#p CAM-B3LYP/6-31+G(d,p) td=(nstates=20,triplets)</span></code></pre>
        </div>
      </div>
    </div>

    <h3>7. 频率计算问题</h3>
    
    <div class="ec open">
      <div class="ec-h"><span class="ei">🟡</span><span class="et">问题 10：频率计算结果异常</span><span class="es scm">常见</span></div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <ul>
          <li>频率值异常大或小</li>
          <li>热化学量不合理</li>
          <li>IR 强度为零</li>
        </ul>
        
        <h4>解决方案</h4>
        <ol>
          <li>确保在优化后的结构上计算频率</li>
          <li>使用相同的泛函和基组</li>
          <li>检查是否有虚频</li>
          <li>对于非谐性，使用 freq=anharm</li>
        </ol>
        
        <div class="cb">
          <div class="ch"><span class="la">gjf</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 优化+频率一起计算（推荐）</span>
<span class="cm">#p B3LYP/6-31G(d) opt freq</span>

<span class="cm"># 非谐性频率</span>
<span class="cm">#p B3LYP/6-31G(d) freq=anharm</span></code></pre>
        </div>
      </div>
    </div>

    <h3>8. 输出文件问题</h3>
    
    <div class="ec open">
      <div class="ec-h"><span class="ei">🟢</span><span class="et">问题 11：输出文件为空或截断</span><span class="es smn">少见</span></div>
      <div class="ec-b" style="display:block">
        <h4>原因</h4>
        <ul>
          <li>计算被中断（系统崩溃、时间限制）</li>
          <li>磁盘空间不足</li>
          <li>内存错误</li>
        </ul>
        
        <h4>恢复方法</h4>
        <div class="cb">
          <div class="ch"><span class="la">gjf</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 从检查点恢复</span>
<span class="cm">%chk=old.chk</span>
<span class="cm">#p B3LYP/6-31G(d) opt guess=read geom=check</span>

<span class="vr">Restart from checkpoint</span>

<span class="nu">0 1</span></code></pre>
        </div>
      </div>
    </div>

    <h3>9. 快速诊断方法</h3>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><span class="fn">诊断脚本</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># gaussian_diagnose.sh</span>

<span class="fn2">echo</span> <span class="st">"=== Gaussian 计算诊断 ==="</span>
<span class="fn2">echo</span>

<span class="cm"># 检查是否正常结束</span>
<span class="fn2">echo</span> <span class="st">"[1] 计算状态"</span>
<span class="kw">if</span> <span class="fn2">grep</span> -q <span class="st">"Normal termination"</span> output.log; <span class="kw">then</span>
    <span class="fn2">echo</span> <span class="st">"  ✓ 正常结束"</span>
<span class="kw">else</span>
    <span class="fn2">echo</span> <span class="st">"  ✗ 异常结束"</span>
    <span class="fn2">echo</span> <span class="st">"  错误信息:"</span>
    <span class="fn2">grep</span> -i <span class="st">"error"</span> output.log | <span class="fn2">head</span> -5
<span class="kw">fi</span>
<span class="fn2">echo</span>

<span class="cm"># 检查 SCF 收敛</span>
<span class="fn2">echo</span> <span class="st">"[2] SCF 收敛"</span>
<span class="kw">if</span> <span class="fn2">grep</span> -q <span class="st">"SCF has not converged"</span> output.log; <span class="kw">then</span>
    <span class="fn2">echo</span> <span class="st">"  ✗ SCF 未收敛"</span>
<span class="kw">else</span>
    <span class="fn2">echo</span> <span class="st">"  ✓ SCF 收敛"</span>
<span class="kw">fi</span>
<span class="fn2">echo</span>

<span class="cm"># 提取能量</span>
<span class="fn2">echo</span> <span class="st">"[3] 总能量"</span>
<span class="fn2">grep</span> <span class="st">"SCF Done"</span> output.log | <span class="fn2">tail</span> -1
<span class="fn2">echo</span>

<span class="cm"># 检查虚频</span>
<span class="fn2">echo</span> <span class="st">"[4] 频率检查"</span>
<span class="fn2">freqs</span>=$(<span class="fn2">grep</span> <span class="st">"Frequencies"</span> output.log | <span class="fn2">awk</span> <span class="st">'{for(i=3;i<=NF;i++) print $i}'</span>)
<span class="fn2">imaginary</span>=$(<span class="fn2">echo</span> <span class="st">"$freqs"</span> | <span class="fn2">awk</span> <span class="st">'$1 < 0 {count++} END {print count+0}'</span>)
<span class="fn2">echo</span> <span class="st">"  虚频数: $imaginary"</span>
<span class="fn2">echo</span>

<span class="cm"># 计算时间</span>
<span class="fn2">echo</span> <span class="st">"[5] 计算时间"</span>
<span class="fn2">grep</span> <span class="st">"Job cpu time"</span> output.log</code></pre>
    </div>

    <h3>10. 问题汇总表</h3>
    <table class="tb">
      <thead><tr><th>问题</th><th>关键词</th><th>解决方案</th></tr></thead>
      <tbody>
        <tr><td>SCF 不收敛</td><td>not converged</td><td>scf=xqc, scf=fermi</td></tr>
        <tr><td>优化不收敛</td><td>did not converge</td><td>opt=tight, opt=calcfc</td></tr>
        <tr><td>内存不足</td><td>Insufficient memory</td><td>增加 %mem</td></tr>
        <tr><td>有虚频</td><td>Negative freq</td><td>重新优化</td></tr>
        <tr><td>过渡态找不到</td><td>No TS found</td><td>改进初始猜测</td></tr>
        <tr><td>TDDFT 错误</td><td>Excitation</td><td>使用范围分离泛函</td></tr>
      </tbody>
    </table>

    <div class="ib tip"><strong>调试建议：</strong>
      <ul>
        <li>先用小基组/低精度测试，确认思路正确</li>
        <li>检查输入文件格式，特别是空行和电荷自旋</li>
        <li>查看输出文件最后几行，通常有错误提示</li>
        <li>搜索 Gaussian 官方论坛或邮件列表</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GaussianFAQView',
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
