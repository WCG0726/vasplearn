<template>
  <div class="sec active">
    <div class="bread">
      <router-link to="/">首页</router-link>/
      <router-link to="/gaussian">Gaussian 教程</router-link>/
      <span>输入参数详解</span>
    </div>
    
    <h2>Gaussian 输入参数详解</h2>
    <p>本节详细介绍 Gaussian 计算中常用的输入参数及其设置方法。</p>

    <h3>1. Link 0 命令</h3>
    <p>Link 0 命令以 <code class="ic">%</code> 开头，用于控制计算资源。</p>

    <table class="tb">
      <thead><tr><th>参数</th><th>格式</th><th>说明</th><th>示例</th></tr></thead>
      <tbody>
        <tr><td><strong>%chk</strong></td><td>%chk=filename.chk</td><td>检查点文件名</td><td>%chk=molecule.chk</td></tr>
        <tr><td><strong>%mem</strong></td><td>%mem=NGB</td><td>内存限制</td><td>%mem=32GB</td></tr>
        <tr><td><strong>%nproc</strong></td><td>%nproc=N</td><td>CPU 核心数</td><td>%nproc=16</td></tr>
        <tr><td><strong>%scr</strong></td><td>%scr=path</td><td>临时目录</td><td>%scr=/scratch</td></tr>
        <tr><td><strong>%kjob</strong></td><td>%kjob=code</td><td>完成后操作</td><td>%kjob=L302</td></tr>
        <tr><td><strong>%chk</strong></td><td>%chk=file</td><td>保留 chk 文件</td><td>%chk=old.chk</td></tr>
      </tbody>
    </table>

    <h4>内存单位</h4>
    <table class="tb">
      <thead><tr><th>单位</th><th>示例</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>GB</td><td>%mem=32GB</td><td>千兆字节</td></tr>
        <tr><td>MB</td><td>%mem=32000MB</td><td>兆字节</td></tr>
        <tr><td>GW</td><td>%mem=4GW</td><td>千兆字（8字节/字）</td></tr>
        <tr><td>MW</td><td>%mem=4000MW</td><td>兆字</td></tr>
      </tbody>
    </table>

    <h3>2. 路由段参数</h3>
    <h4>计算方法</h4>
    <table class="tb">
      <thead><tr><th>方法</th><th>关键词</th><th>适用场景</th><th>精度</th></tr></thead>
      <tbody>
        <tr><td><strong>HF</strong></td><td>HF</td><td>定性分析</td><td>低</td></tr>
        <tr><td><strong>DFT 泛函</strong></td><td>B3LYP, PBE0, M06</td><td>通用计算</td><td>中-高</td></tr>
        <tr><td><strong>MP2</strong></td><td>MP2</td><td>弱相互作用</td><td>高</td></tr>
        <tr><td><strong>CCSD</strong></td><td>CCSD</td><td>高精度</td><td>很高</td></tr>
        <tr><td><strong>CCSD(T)</strong></td><td>CCSD(T)</td><td>金标准</td><td>极高</td></tr>
        <tr><td><strong>CASSCF</strong></td><td>CASSCF</td><td>多参考态</td><td>变化</td></tr>
      </tbody>
    </table>

    <h4>常用泛函</h4>
    <table class="tb">
      <thead><tr><th>泛函</th><th>关键词</th><th>类型</th><th>特点</th></tr></thead>
      <tbody>
        <tr><td><strong>B3LYP</strong></td><td>B3LYP</td><td>杂化</td><td>最广泛使用</td></tr>
        <tr><td><strong>PBE0</strong></td><td>PBE0</td><td>杂化</td><td>与 VASP PBE 对应</td></tr>
        <tr><td><strong>M06</strong></td><td>M06</td><td>杂化</td><td>主族元素</td></tr>
        <tr><td><strong>M06-2X</strong></td><td>M062X</td><td>双杂化</td><td>反应能垒</td></tr>
        <tr><td><strong>ωB97X-D</strong></td><td>wB97XD</td><td>范围分离</td><td>包含色散</td></tr>
        <tr><td><strong>B2PLYP</strong></td><td>B2PLYP</td><td>双杂化</td><td>高精度</td></tr>
        <tr><td><strong>PBE</strong></td><td>PBEPBE</td><td>GGA</td><td>固体常用</td></tr>
      </tbody>
    </table>

    <h4>基组</h4>
    <table class="tb">
      <thead><tr><th>基组系列</th><th>示例</th><th>精度</th><th>特点</th></tr></thead>
      <tbody>
        <tr><td><strong>Pople</strong></td><td>6-31G(d)</td><td>中</td><td>最常用</td></tr>
        <tr><td><strong>Pople+极化</strong></td><td>6-311+G(2d,2p)</td><td>高</td><td>精确计算</td></tr>
        <tr><td><strong>Dunning</strong></td><td>cc-pVDZ, cc-pVTZ</td><td>中-高</td><td>相关一致性</td></tr>
        <tr><td><strong>def2</strong></td><td>def2-SVP, def2-TZVP</td><td>中-高</td><td>全元素覆盖</td></tr>
        <tr><td><strong>LanL</strong></td><td>LanL2DZ</td><td>中</td><td>重元素</td></tr>
        <tr><td><strong>STO</strong></td><td>STO-3G</td><td>低</td><td>快速计算</td></tr>
      </tbody>
    </table>

    <h4>基组后缀含义</h4>
    <table class="tb">
      <thead><tr><th>后缀</th><th>含义</th><th>示例</th></tr></thead>
      <tbody>
        <tr><td><strong>(d)</strong> 或 <strong>*</strong></td><td>添加 d 极化函数</td><td>6-31G(d)</td></tr>
        <tr><td><strong>(d,p)</strong> 或 <strong>**</strong></td><td>添加 d 和 p 极化函数</td><td>6-31G(d,p)</td></tr>
        <tr><td><strong>+</strong></td><td>添加弥散函数</td><td>6-31+G(d)</td></tr>
        <tr><td><strong>++</strong></td><td>所有原子添加弥散</td><td>6-31++G(d)</td></tr>
        <tr><td><strong>(2d,2p)</strong></td><td>多套极化函数</td><td>6-31G(2d,2p)</td></tr>
      </tbody>
    </table>

    <h3>3. 任务关键词</h3>
    <table class="tb">
      <thead><tr><th>关键词</th><th>功能</th><th>常用选项</th></tr></thead>
      <tbody>
        <tr><td><strong>opt</strong></td><td>几何优化</td><td>opt, opt=tight, opt=loose</td></tr>
        <tr><td><strong>freq</strong></td><td>频率计算</td><td>freq, freq=raman</td></tr>
        <tr><td><strong>sp</strong></td><td>单点能</td><td>sp</td></tr>
        <tr><td><strong>ts</strong></td><td>过渡态</td><td>opt=(ts,calcfc)</td></tr>
        <tr><td><strong>irc</strong></td><td>IRC 计算</td><td>irc=(forward,calcfc)</td></tr>
        <tr><td><strong>td</strong></td><td>激发态</td><td>td=(nstates=10)</td></tr>
        <tr><td><strong>polar</strong></td><td>极化率</td><td>polar</td></tr>
        <tr><td><strong>force</strong></td><td>力计算</td><td>force</td></tr>
        <tr><td><strong>scan</strong></td><td>势能面扫描</td><td>opt=modredundant</td></tr>
      </tbody>
    </table>

    <h4>优化选项</h4>
    <table class="tb">
      <thead><tr><th>选项</th><th>说明</th><th>适用场景</th></tr></thead>
      <tbody>
        <tr><td><strong>opt</strong></td><td>默认优化</td><td>大多数情况</td></tr>
        <tr><td><strong>opt=tight</strong></td><td>严格收敛</td><td>高精度要求</td></tr>
        <tr><td><strong>opt=loose</strong></td><td>宽松收敛</td><td>初始粗优化</td></tr>
        <tr><td><strong>opt=calcfc</strong></td><td>计算力常数</td><td>优化开始时</td></tr>
        <tr><td><strong>opt=readfc</strong></td><td>读取力常数</td><td>从 chk 继续</td></tr>
        <tr><td><strong>opt=(maxstep=N)</strong></td><td>最大步数</td><td>限制步数</td></tr>
        <tr><td><strong>opt=(Z-Matrix)</strong></td><td>Z-matrix 优化</td><td>有对称性</td></tr>
      </tbody>
    </table>

    <h3>4. SCF 相关参数</h3>
    <table class="tb">
      <thead><tr><th>关键词</th><th>功能</th><th>示例</th></tr></thead>
      <tbody>
        <tr><td><strong>scf=</strong></td><td>SCF 方法</td><td>scf=qc, scf=xqc</td></tr>
        <tr><td><strong>maxcycle=</strong></td><td>最大迭代次数</td><td>scf=(maxcycle=200)</td></tr>
        <tr><td><strong>conver=</strong></td><td>收敛标准</td><td>scf=(conver=8)</td></tr>
        <tr><td><strong>vshift</strong></td><td>能级移动</td><td>scf=(vshift=100)</td></tr>
        <tr><td><strong>diis</strong></td><td>DIIS 加速</td><td>scf=diis</td></tr>
      </tbody>
    </table>

    <h3>5. 积分和格点参数</h3>
    <table class="tb">
      <thead><tr><th>关键词</th><th>功能</th><th>示例</th></tr></thead>
      <tbody>
        <tr><td><strong>int=</strong></td><td>积分精度</td><td>int=ultrafine</td></tr>
        <tr><td><strong>grid=</strong></td><td>DFT 格点</td><td>grid=ultrafine</td></tr>
        <tr><td><strong>scrf=</strong></td><td>溶剂模型</td><td>scrf=(pcm,solvent=water)</td></tr>
      </tbody>
    </table>

    <h4>积分精度选项</h4>
    <table class="tb">
      <thead><tr><th>选项</th><th>说明</th><th>适用场景</th></tr></thead>
      <tbody>
        <tr><td>fine</td><td>精细格点</td><td>常规计算</td></tr>
        <tr><td>ultrafine</td><td>超精细格点</td><td>能量差计算</td></tr>
        <tr><td>superfine</td><td>超级精细格点</td><td>高精度要求</td></tr>
      </tbody>
    </table>

    <h3>6. 输出控制参数</h3>
    <table class="tb">
      <thead><tr><th>关键词</th><th>功能</th><th>示例</th></tr></thead>
      <tbody>
        <tr><td><strong>pop=</strong></td><td>布居分析</td><td>pop=full, pop=nbo</td></tr>
        <tr><td><strong>density=</strong></td><td>密度输出</td><td>density=current</td></tr>
        <tr><td><strong>guess=</strong></td><td>初始猜测</td><td>guess=read, guess=mix</td></tr>
        <tr><td><strong>geom=</strong></td><td>几何选项</td><td>geom=check, geom=allcheck</td></tr>
      </tbody>
    </table>

    <h3>7. 常用组合模板</h3>
    
    <h4>模板 1：常规优化+频率</h4>
    <div class="cb">
      <div class="ch"><span class="la">gjf</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm">%chk=mol.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p B3LYP/6-31G(d) opt freq</span></code></pre>
    </div>

    <h4>模板 2：高精度优化</h4>
    <div class="cb">
      <div class="ch"><span class="la">gjf</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm">%chk=mol.chk</span>
<span class="cm">%mem=32GB</span>
<span class="cm">%nproc=16</span>
<span class="cm">#p M062X/6-311+G(2d,2p) opt=(tight,calcfc) freq int=ultrafine</span></code></pre>
    </div>

    <h4>模板 3：过渡态搜索</h4>
    <div class="cb">
      <div class="ch"><span class="la">gjf</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm">%chk=ts.chk</span>
<span class="cm">%mem=32GB</span>
<span class="cm">%nproc=16</span>
<span class="cm">#p wB97XD/def2-TZVP opt=(ts,calcfc,noeigen) freq</span></code></pre>
    </div>

    <h4>模板 4：TDDFT 激发态</h4>
    <div class="cb">
      <div class="ch"><span class="la">gjf</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm">%chk=tddft.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p B3LYP/6-31+G(d,p) td=(nstates=10) int=ultrafine</span></code></pre>
    </div>

    <h4>模板 5：溶剂中的优化</h4>
    <div class="cb">
      <div class="ch"><span class="la">gjf</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm">%chk=solv.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p B3LYP/6-31+G(d,p) opt scrf=(pcm,solvent=water)</span></code></pre>
    </div>

    <h4>模板 6：高精度单点能</h4>
    <div class="cb">
      <div class="ch"><span class="la">gjf</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm">%chk=hight.chk</span>
<span class="cm">%mem=64GB</span>
<span class="cm">%nproc=32</span>
<span class="cm">#p CCSD(T)/cc-pVTZ</span></code></pre>
    </div>

    <h3>8. 参数选择建议</h3>
    <div class="ib tip"><strong>推荐组合：</strong>
      <ul>
        <li><strong>有机分子常规计算：</strong>B3LYP/6-31G(d)</li>
        <li><strong>精确计算：</strong>M06-2X/6-311+G(2d,2p)</li>
        <li><strong>弱相互作用：</strong>ωB97X-D/def2-TZVP</li>
        <li><strong>过渡金属：</strong>B3LYP/LanL2DZ 或 M06/SDD</li>
        <li><strong>高精度基准：</strong>CCSD(T)/cc-pVTZ</li>
        <li><strong>激发态：</strong>TDB3LYP/6-31+G(d,p)</li>
      </ul>
    </div>

    <div class="ib warn"><strong>注意事项：</strong>
      <ul>
        <li>计算弱相互作用必须使用弥散函数（+）或色散修正（-D）</li>
        <li>过渡金属需要使用赝势基组（LanL2DZ, SDD）</li>
        <li>能量差计算建议使用 ultrafine 格点</li>
        <li>大体系考虑使用 def2-SVP 等较小基组</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GaussianParamsView',
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
