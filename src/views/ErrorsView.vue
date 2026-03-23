<template>
  <div class="sec active">
    <div class="bread"><router-link to="/">首页</router-link>/<span>错误诊断</span></div>
    <h2>VASP 错误诊断系统</h2>
    <p>使用 VASP 时难免遇到报错，这个系统帮你快速定位和解决问题。</p>
    <div class="pg">
      <div class="pc" style="--ca:var(--red)">
        <div class="pc-i">⚡</div>
        <div class="pc-t">SCF 不收敛</div>
        <div class="pc-d">电子步迭代无法收敛——最高频问题</div>
      </div>
      <div class="pc" style="--ca:var(--orange)">
        <div class="pc-i">💥</div>
        <div class="pc-t">离子步问题</div>
        <div class="pc-d">优化不收敛、力振荡、原子跑飞</div>
      </div>
      <div class="pc" style="--ca:var(--purple)">
        <div class="pc-i">💾</div>
        <div class="pc-t">内存与性能</div>
        <div class="pc-d">内存溢出、计算太慢、并行效率低</div>
      </div>
      <div class="pc" style="--ca:var(--blue)">
        <div class="pc-i">📂</div>
        <div class="pc-t">文件错误</div>
        <div class="pc-d">POTCAR 不匹配、POSCAR 格式错误</div>
      </div>
    </div>

    <h3>通用诊断流程</h3>
    <div class="fc">
      <div class="fn2-node s">VASP 计算异常终止</div><div class="fa"></div>
      <div class="fn2-node p">① 查看 OUTCAR 最后 50 行</div><div class="fa"></div>
      <div class="fn2-node p">② 查看 OSZICAR 收敛情况</div><div class="fa"></div>
      <div class="fn2-node p">③ 检查四个输入文件</div><div class="fa"></div>
      <div class="fn2-node p">④ 搜索错误关键词</div><div class="fa"></div>
      <div class="fn2-node e">定位问题 → 应用解决方案</div>
    </div>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><span class="fn">快速诊断</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="fn2">tail</span> -50 OUTCAR
<span class="fn2">grep</span> -i <span class="st">"error\|warning\|abort\|ZBRENT\|DENTET"</span> OUTCAR
<span class="fn2">grep</span> <span class="st">"Total CPU time"</span> OUTCAR
<span class="fn2">cat</span> OSZICAR
<span class="fn2">df</span> -h .</code></pre>
    </div>

    <h3>SCF 不收敛问题</h3>
    <p>SCF 不收敛是最高频的问题。以下是完整排查清单。</p>
    <div class="ec" :class="{ open: openSections.e1 }" @click="toggle('e1')">
      <div class="ec-h"><span class="ei">🔴</span><span class="et">问题 1：电子步达到 NELM 上限仍未收敛</span><span class="es sc">高频</span><span class="ex">▼</span></div>
      <div class="ec-b">
        <h4>症状</h4>
        <div class="esym">DAV: 64  -0.275E+03  0.217E+00  -0.109E+00<br>（能量差持续振荡不下降）</div>
        <h4>解决方案</h4>
        <div class="cb">
          <div class="ch"><span class="la">INCAR</span><button class="cpb" @click.stop="copy">复制</button></div>
          <pre><code><span class="cm"># 方案 1：降低收敛标准</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-4</span>

<span class="cm"># 方案 2：更稳定的混合方法</span>
<span class="kw">AMIX</span>     = <span class="nu">0.2</span>
<span class="kw">BMIX</span>     = <span class="nu">0.0001</span>

<span class="cm"># 方案 3：增加最大电子步</span>
<span class="kw">NELM</span>     = <span class="nu">200</span></code></pre>
        </div>
      </div>
    </div>
    <div class="ec" :class="{ open: openSections.e2 }" @click="toggle('e2')">
      <div class="ec-h"><span class="ei">🔴</span><span class="et">问题 2：DENTET - 能带数不足</span><span class="es sc">高频</span><span class="ex">▼</span></div>
      <div class="ec-b">
        <h4>症状</h4>
        <div class="esym">WARNING: DENTET: can't reach specified NBANDS<br>NELECT = 120.0000   NBANDS = 64</div>
        <h4>解决方案</h4>
        <div class="cb">
          <div class="ch"><span class="la">INCAR</span><button class="cpb" @click.stop="copy">复制</button></div>
          <pre><code><span class="kw">NBANDS</span>   = <span class="nu">160</span>
<span class="cm"># 经验: NBANDS ≥ NELECT/2 + N_atoms/2</span></code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorsView',
  data() {
    return {
      openSections: {
        e1: true,
        e2: false
      }
    }
  },
  methods: {
    toggle(section) {
      this.openSections[section] = !this.openSections[section]
    },
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
