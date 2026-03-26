<template>
  <div class="sec active">
    <div class="bread">
      <router-link to="/">首页</router-link>/
      <router-link to="/errors">错误诊断</router-link>/
      <span>SCF 不收敛</span>
    </div>
    
    <h2>SCF 不收敛问题</h2>
    <p>SCF（自洽场）不收敛是 VASP 计算中最高频的问题。以下是完整排查清单和解决方案。</p>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🔴</span>
        <span class="et">问题 1：电子步达到 NELM 上限仍未收敛</span>
        <span class="es sc">高频</span>
      </div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <div class="esym">DAV: 64  -0.275E+03  0.217E+00  -0.109E+00<br>（能量差持续振荡不下降）</div>
        
        <h4>常见原因</h4>
        <ul>
          <li><strong>初始磁矩设置不当</strong>（最常见）- 对含过渡金属体系尤其重要</li>
          <li><strong>展宽方法错误</strong> - 金属用了 ISMEAR=0 或绝缘体用了 ISMEAR=1</li>
          <li><strong>截断能太低</strong> - ENCUT 不足导致数值不稳定</li>
          <li><strong>初始结构不合理</strong> - 原子距离太近或结构有冲突</li>
          <li><strong>强关联体系</strong> - 需要设置 +U 或使用杂化泛函</li>
        </ul>
        
        <h4>解决方案</h4>
        <div class="cb">
          <div class="ch"><span class="la">INCAR</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 方案 1：降低收敛标准（临时方案）</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-4</span>

<span class="cm"># 方案 2：更稳定的混合方法</span>
<span class="kw">AMIX</span>     = <span class="nu">0.2</span>           <span class="cm">; 默认 0.4，降低可增强稳定性</span>
<span class="kw">BMIX</span>     = <span class="nu">0.0001</span>        <span class="cm">; 默认 0.001</span>
<span class="kw">AMIX_MAG</span> = <span class="nu">0.2</span>           <span class="cm">; 磁性体系需要</span>
<span class="kw">BMIX_MAG</span> = <span class="nu">0.0001</span>

<span class="cm"># 方案 3：增加最大电子步</span>
<span class="kw">NELM</span>     = <span class="nu">200</span>           <span class="cm">; 默认 60</span>

<span class="cm"># 方案 4：Kerker 预处理（金属推荐）</span>
<span class="kw">IMIX</span>     = <span class="st">'Kerker'</span>
<span class="kw">MAXMIX</span>   = <span class="nu">40</span>

<span class="cm"># 方案 5：金属用正确展宽</span>
<span class="kw">ISMEAR</span>   = <span class="nu">1</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.2</span>

<span class="cm"># 方案 6：设置初始磁矩</span>
<span class="kw">MAGMOM</span>   = <span class="nu">3 3 3 0 0 0</span>   <span class="cm">; 每个原子的初始磁矩</span></code></pre>
        </div>
        
        <div class="ib tip"><strong>排查顺序：</strong>① MAGMOM 设置 ② ISMEAR 是否正确 ③ 降低 AMIX ④ 检查原子距离 ⑤ 是否需要 +U</div>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🔴</span>
        <span class="et">问题 2：DENTET - 能带数不足</span>
        <span class="es sc">高频</span>
      </div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <div class="esym">WARNING: DENTET: can't reach specified NBANDS<br>NELECT = 120.0000   NBANDS = 64</div>
        
        <h4>原因</h4>
        <p>能带数目 NBANDS 不足以容纳所有电子，导致费米能级无法正确确定。</p>
        
        <h4>解决方案</h4>
        <div class="cb">
          <div class="ch"><span class="la">INCAR</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 手动增加能带数</span>
<span class="kw">NBANDS</span>   = <span class="nu">160</span>

<span class="cm"># 经验公式：</span>
<span class="cm"># NBANDS >= NELECT/2 + N_atoms/2 (绝缘体)</span>
<span class="cm"># NBANDS >= NELECT/2 + N_atoms   (金属/磁性)</span></code></pre>
        </div>
        
        <div class="ib note"><strong>查看 NELECT：</strong>在 POTCAR 中 grep ZVAL 求和，或在 OUTCAR 中搜索 NELECT。</div>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🟡</span>
        <span class="et">问题 3：ZBRENT - 线搜索失败</span>
        <span class="es scm">常见</span>
      </div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <div class="esym">ZBRENT: fatal error in bracketing<br>ZBRENT: the minimum is not bracketed</div>
        
        <h4>原因</h4>
        <p>CG 优化算法中线搜索失败，通常是步长过大或势能面过于复杂。</p>
        
        <h4>解决方案</h4>
        <div class="cb">
          <div class="ch"><span class="la">INCAR</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 方案 1：换优化算法</span>
<span class="kw">IBRION</span>   = <span class="nu">1</span>             <span class="cm">; CG → RMM-DIIS</span>

<span class="cm"># 方案 2：缩小步长</span>
<span class="kw">POTIM</span>    = <span class="nu">0.01</span>          <span class="cm">; 默认 0.5</span>

<span class="cm"># 方案 3：先用大步长粗优化，再精细优化</span>
<span class="cm"># 第一步：</span>
<span class="kw">IBRION</span>   = <span class="nu">1</span>
<span class="kw">POTIM</span>    = <span class="nu">0.1</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.05</span>
<span class="cm"># 第二步（用 CONTCAR 继续）：</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">POTIM</span>    = <span class="nu">0.5</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.02</span></code></pre>
        </div>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🟡</span>
        <span class="et">问题 4：SCF 收敛但结果不合理</span>
        <span class="es scm">常见</span>
      </div>
      <div class="ec-b" style="display:block">
        <h4>检查清单</h4>
        <table class="tb">
          <thead><tr><th>检查项</th><th>方法</th><th>说明</th></tr></thead>
          <tbody>
            <tr><td>POTCAR 泛函</td><td><code>grep TITEL POTCAR</code></td><td>确认使用正确的泛函</td></tr>
            <tr><td>ENCUT 足够</td><td>收敛性测试</td><td>能量变化 < 1 meV/atom</td></tr>
            <tr><td>K 点足够</td><td>收敛性测试</td><td>能量变化 < 1 meV/atom</td></tr>
            <tr><td>自旋极化</td><td>ISPIN=2</td><td>含 3d/4f 金属通常需要</td></tr>
            <tr><td>是否需要 +U</td><td>LDAU=.TRUE.</td><td>强关联体系</td></tr>
            <tr><td>原子距离</td><td>检查 POSCAR</td><td>确保没有原子重叠</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🔴</span>
        <span class="et">问题 5：VERY BAD NEWS! SGRCON 错误</span>
        <span class="es sc">高频</span>
      </div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <div class="esym">VERY BAD NEWS! internal error in subroutine SGRCON<br>The product of the three lattice vectors is negative</div>
        
        <h4>原因</h4>
        <p>晶格矢量构成的不是右手坐标系。VASP 要求三个晶格矢量 a×b·c > 0。</p>
        
        <h4>解决方案</h4>
        <ol>
          <li>在 VESTA 中重新导出 POSCAR</li>
          <li>使用 pymatgen 重新生成 POSCAR</li>
          <li>手动交换 POSCAR 中两行晶格矢量</li>
        </ol>
        
        <div class="cb">
          <div class="ch"><span class="la">python</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 检查晶格矢量是否构成右手系</span>
<span class="kw">import</span> numpy <span class="kw">as</span> np

a = np.array([<span class="nu">5.43</span>, <span class="nu">0</span>, <span class="nu">0</span>])
b = np.array([<span class="nu">0</span>, <span class="nu">5.43</span>, <span class="nu">0</span>])
c = np.array([<span class="nu">0</span>, <span class="nu">0</span>, <span class="nu">5.43</span>])

det = np.dot(np.cross(a, b), c)
<span class="fn2">print</span>(f<span class="st">"det = {det}"</span>)  <span class="cm"># 应该 > 0</span></code></pre>
        </div>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🔴</span>
        <span class="et">问题 6：ROTK 旋转矩阵错误</span>
        <span class="es sc">高频</span>
      </div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <div class="esym">WARNING in EDDRMM: rotation matrix not orthogonal<br>ROTK: internal ERROR</div>
        
        <h4>原因</h4>
        <p>通常是结构对称性过高或原子位置不合理导致。</p>
        
        <h4>解决方案</h4>
        <ol>
          <li>微扰原子位置（添加小的随机位移）</li>
          <li>使用 <code>SYMPREC = 1E-6</code> 放宽对称性判断</li>
          <li>设置 <code>ISYM = 0</code> 关闭对称性（最后手段）</li>
        </ol>
        
        <div class="cb">
          <div class="ch"><span class="la">python</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 微扰原子位置</span>
<span class="kw">from</span> ase.io <span class="kw">import</span> read, write
<span class="kw">import</span> numpy <span class="kw">as</span> np

atoms = read(<span class="st">'POSCAR'</span>)
atoms.rattle(stdev=<span class="nu">0.01</span>)  <span class="cm"># 添加 0.01 Å 的随机位移</span>
write(<span class="st">'POSCAR_rattled'</span>, atoms)</code></pre>
        </div>
      </div>
    </div>

    <div class="qb">
      <div class="qh"><span class="ql">练习</span><span class="qt">SCF 问题排查</span></div>
      <div class="qbd">
        <p><strong>问题：</strong>SCF 不收敛时，首先应检查什么？</p>
        <div class="qo" @click="selectOption(0)"><div class="qr"></div><span>增加 NSW</span></div>
        <div class="qo" @click="selectOption(1)"><div class="qr"></div><span>检查 MAGMOM 设置</span></div>
        <div class="qo" @click="selectOption(2)"><div class="qr"></div><span>更换 POTCAR</span></div>
        <div class="qo" @click="selectOption(3)"><div class="qr"></div><span>减小 ENCUT</span></div>
        <div v-if="showFeedback" class="qf show" :style="feedbackStyle">{{ feedbackText }}</div>
        <button class="qs" @click="checkAnswer" :disabled="selectedOption === null">提交答案</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorsScfView',
  data() {
    return {
      selectedOption: null,
      showFeedback: false,
      feedbackText: '',
      feedbackStyle: {}
    }
  },
  methods: {
    selectOption(index) {
      this.selectedOption = index
      document.querySelectorAll('.qo').forEach((el, i) => {
        el.classList.toggle('sel', i === index)
      })
    },
    checkAnswer() {
      this.showFeedback = true
      if (this.selectedOption === 1) {
        this.feedbackText = '✓ 回答正确！检查 MAGMOM 设置是排查 SCF 不收敛的首要步骤。'
        this.feedbackStyle = { background: 'var(--green-dim)', border: '1px solid var(--green)', color: 'var(--green)' }
        document.querySelectorAll('.qo')[1].classList.add('ok')
      } else {
        this.feedbackText = '✗ 回答错误。正确答案是"检查 MAGMOM 设置"。'
        this.feedbackStyle = { background: 'var(--red-dim)', border: '1px solid var(--red)', color: 'var(--red)' }
        document.querySelectorAll('.qo')[this.selectedOption].classList.add('no')
        document.querySelectorAll('.qo')[1].classList.add('ok')
      }
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
