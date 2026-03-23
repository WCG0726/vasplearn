<template>
  <div class="sec active">
    <div class="bread">
      <router-link to="/">首页</router-link>/
      <router-link to="/errors">错误诊断</router-link>/
      <span>文件错误</span>
    </div>
    
    <h2>文件错误诊断</h2>
    <p>输入文件格式错误是初学者最常遇到的问题。</p>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🔴</span>
        <span class="et">问题 1：POTCAR 元素顺序与 POSCAR 不一致</span>
        <span class="es sc">高频</span>
      </div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <p>计算结果明显错误，能量异常大，或结构优化后原子位置混乱。</p>
        
        <h4>检查方法</h4>
        <div class="cb">
          <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 查看 POTCAR 中的元素</span>
<span class="fn2">grep</span> TITEL POTCAR

<span class="cm"># 查看 POSCAR 中的元素</span>
<span class="fn2">head</span> -6 POSCAR

<span class="cm"># 确认两者顺序一致！</span></code></pre>
        </div>
        
        <h4>正确示例</h4>
        <div class="cb">
          <div class="ch"><span class="la">POSCAR</span></div>
          <pre><code>TiO2
1.0
4.59  0.00  0.00
0.00  4.59  0.00
0.00  0.00  2.96
Ti O          <span class="cm">; ← 先 Ti 后 O</span>
1 2
Direct</code></pre>
        </div>
        <div class="cb">
          <div class="ch"><span class="la">POTCAR</span></div>
          <pre><code>TITEL  = PAW_PBE Ti ...    <span class="cm">; ← 第一个必须是 Ti</span>
TITEL  = PAW_PBE O  ...    <span class="cm">; ← 第二个是 O</span></code></pre>
        </div>
        
        <div class="ib warn"><strong>重要：</strong>POTCAR 顺序必须与 POSCAR 完全一致，否则结果完全错误！</div>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🔴</span>
        <span class="et">问题 2：POSCAR 格式错误</span>
        <span class="es sc">高频</span>
      </div>
      <div class="ec-b" style="display:block">
        <table class="tb">
          <thead><tr><th>错误类型</th><th>说明</th><th>解决方法</th></tr></thead>
          <tbody>
            <tr><td>缩放因子为 0</td><td>第二行不能为 0</td><td>改为 1.0 或实际值</td></tr>
            <tr><td>坐标类型拼错</td><td>必须是 Direct 或 Cartesian</td><td>检查拼写和大小写</td></tr>
            <tr><td>原子数与坐标不匹配</td><td>声明 N 个原子但只有 M 行坐标</td><td>检查坐标行数</td></tr>
            <tr><td>多余空行</td><td>文件末尾不要有空行</td><td>删除末尾空行</td></tr>
            <tr><td>Windows 换行符</td><td>\r\n 导致问题</td><td>dos2unix POSCAR</td></tr>
            <tr><td>制表符</td><td>不要用 Tab，用空格</td><td>替换 Tab 为空格</td></tr>
          </tbody>
        </table>
        
        <h4>POSCAR 格式详解</h4>
        <div class="cb">
          <div class="ch"><span class="la">POSCAR</span><span class="fn">完整格式</span></div>
          <pre><code>Si bulk structure          <span class="cm">; 第 1 行：注释（可选）</span>
1.0                        <span class="cm">; 第 2 行：缩放因子</span>
5.43  0.00  0.00           <span class="cm">; 第 3-5 行：晶格矢量</span>
0.00  5.43  0.00
0.00  0.00  5.43
Si                         <span class="cm">; 第 6 行：元素符号</span>
2                          <span class="cm">; 第 7 行：原子数</span>
Direct                     <span class="cm">; 第 8 行：坐标类型</span>
0.00  0.00  0.00           <span class="cm">; 第 9 行起：原子坐标</span>
0.25  0.25  0.25</code></pre>
        </div>
        
        <h4>选择性动力学格式</h4>
        <div class="cb">
          <div class="ch"><span class="la">POSCAR</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code>Si surface
1.0
5.43  0.00  0.00
0.00  5.43  0.00
0.00  0.00  15.0
Si
4
Selective dynamics        <span class="cm">; 开启选择性动力学</span>
Direct
0.00  0.00  0.00  F F F   <span class="cm">; F=固定，T=可动</span>
0.25  0.25  0.25  F F F
0.50  0.50  0.50  T T T
0.75  0.75  0.75  T T T</code></pre>
        </div>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🟡</span>
        <span class="et">问题 3：KPOINTS 格式错误</span>
        <span class="es scm">常见</span>
      </div>
      <div class="ec-b" style="display:block">
        <h4>常见错误</h4>
        <ul>
          <li>第 2 行不是 0（自动生成模式下必须是 0）</li>
          <li>Gamma 拼写错误（正确：Gamma，不是 GAMMA 或 gamma）</li>
          <li>Line-mode 缺少空行分隔线段</li>
          <li>坐标格式与 Direct/Cartesian 不匹配</li>
        </ul>
        
        <h4>正确格式</h4>
        <div class="cb">
          <div class="ch"><span class="la">KPOINTS</span><span class="fn">自动网格</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code>Automatic mesh        <span class="cm">; 注释行</span>
0                     <span class="cm">; 必须是 0（自动生成）</span>
Gamma                 <span class="cm">; 生成方式：Gamma 或 Monkhorst</span>
4 4 4                 <span class="cm">; k 点网格</span>
0.0 0.0 0.0           <span class="cm">; 偏移（通常全 0）</span></code></pre>
        </div>
        
        <div class="cb">
          <div class="ch"><span class="la">KPOINTS</span><span class="fn">Line-mode（能带计算）</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code>k-points along high symmetry lines
10                    <span class="cm">; 每条线段的点数</span>
Line-mode             <span class="cm">; 线模式</span>
Reciprocal            <span class="cm">; 坐标类型</span>
0.0  0.0  0.0         <span class="cm">; 起点 Gamma</span>
0.5  0.5  0.0         <span class="cm">; 终点 X</span>
                      <span class="cm">; ← 空行分隔！</span>
0.5  0.5  0.0         <span class="cm">; 起点 X</span>
0.5  0.5  0.5         <span class="cm">; 终点 R</span></code></pre>
        </div>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🟡</span>
        <span class="et">问题 4：找不到 POTCAR 文件</span>
        <span class="es scm">常见</span>
      </div>
      <div class="ec-b" style="display:block">
        <h4>症状</h4>
        <div class="esym">VASP could not be started because POTCAR file was not found</div>
        
        <h4>生成 POTCAR</h4>
        <div class="cb">
          <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
          <pre><code><span class="cm"># 查看赝势库路径</span>
<span class="fn2">echo</span> $VASP_PP_PATH

<span class="cm"># 方法 1：直接拼接</span>
<span class="fn2">cat</span> ~/potpaw_PBE/Ti/POTCAR > POTCAR
<span class="fn2">cat</span> ~/potpaw_PBE/O/POTCAR >> POTCAR

<span class="cm"># 方法 2：使用脚本</span>
<span class="kw">for</span> el <span class="kw">in</span> Ti O; <span class="kw">do</span>
    <span class="fn2">cat</span> ~/potpaw_PBE/$el/POTCAR >> POTCAR
<span class="kw">done</span>

<span class="cm"># 方法 3：使用 pymatgen</span>
<span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Potcar
p = Potcar([<span class="st">'Ti'</span>, <span class="st">'O'</span>], functional=<span class="st">'PBE'</span>)
p.write_file(<span class="st">'POTCAR'</span>)</code></pre>
        </div>
        
        <div class="ib tip"><strong>建议：</strong>设置环境变量 VASP_PP_PATH 指向赝势库目录，方便使用。</div>
      </div>
    </div>

    <div class="ec open">
      <div class="ec-h">
        <span class="ei">🟡</span>
        <span class="et">问题 5：INCAR 参数格式错误</span>
        <span class="es scm">常见</span>
      </div>
      <div class="ec-b" style="display:block">
        <h4>常见错误</h4>
        <table class="tb">
          <thead><tr><th>错误写法</th><th>正确写法</th><th>说明</th></tr></thead>
          <tbody>
            <tr><td><code>ENCUT=400</code></td><td><code>ENCUT = 400</code></td><td>等号两边要有空格</td></tr>
            <tr><td><code>LREAL=.true.</code></td><td><code>LREAL = .TRUE.</code></td><td>布尔值大写</td></tr>
            <tr><td><code>ISMEAR=0.5</code></td><td><code>ISMEAR = 0</code></td><td>ISMEAR 是整数</td></tr>
            <tr><td><code>SYSTEM= test</code></td><td><code>SYSTEM = test</code></td><td>等号对齐</td></tr>
          </tbody>
        </table>
        
        <div class="ib warn"><strong>注意：</strong>VASP 对格式敏感，但通常会忽略无法识别的行并给出警告。</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorsFilesView',
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
