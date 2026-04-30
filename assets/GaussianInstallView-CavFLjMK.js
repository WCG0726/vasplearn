import{_ as e,o as u,c as m,a as n,e as i,w as c,h as l,f as p,g as b}from"./index-Bd4xWfQT.js";const g={name:"GaussianInstallView",methods:{copy(d){const o=d.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(o).then(()=>{d.target.textContent="已复制!",d.target.classList.add("ok"),setTimeout(()=>{d.target.textContent="复制",d.target.classList.remove("ok")},2e3)})}}},S={class:"sec active"},f={class:"bread"},C={class:"cb"},G={class:"ch"},v={class:"cb"},k={class:"ch"},R={class:"cb"},y={class:"ch"},x={class:"cb"},B={class:"ch"},h={class:"cb"},A={class:"ch"},w={class:"cb"},T={class:"ch"};function U(d,s,o,I,D,t){const r=b("router-link");return u(),m("div",S,[n("div",f,[i(r,{to:"/"},{default:c(()=>[...s[6]||(s[6]=[l("首页",-1)])]),_:1}),s[8]||(s[8]=l("/ ",-1)),i(r,{to:"/gaussian"},{default:c(()=>[...s[7]||(s[7]=[l("Gaussian 教程",-1)])]),_:1}),s[9]||(s[9]=l("/ ",-1)),s[10]||(s[10]=n("span",null,"安装配置",-1))]),s[26]||(s[26]=p('<h2>Gaussian 安装与配置</h2><p>本教程介绍 Gaussian 16 的安装和基本配置方法。</p><h3>1. 系统要求</h3><table class="tb"><thead><tr><th>配置</th><th>最低要求</th><th>推荐配置</th></tr></thead><tbody><tr><td><strong>操作系统</strong></td><td>Linux, Windows, macOS</td><td>Linux (推荐)</td></tr><tr><td><strong>处理器</strong></td><td>多核 CPU</td><td>16 核以上</td></tr><tr><td><strong>内存</strong></td><td>8 GB</td><td>64 GB 或更高</td></tr><tr><td><strong>硬盘</strong></td><td>10 GB</td><td>SSD 100 GB+</td></tr></tbody></table><h3>2. Linux 安装步骤</h3><h4>步骤 1：创建安装目录</h4>',6)),n("div",C,[n("div",G,[s[11]||(s[11]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[0]||(s[0]=(...a)=>t.copy&&t.copy(...a))},"复制")]),s[12]||(s[12]=n("pre",null,[n("code",null,[n("span",{class:"cm"},"# 创建 Gaussian 安装目录"),l(`
`),n("span",{class:"fn2"},"sudo mkdir"),l(` -p /opt/gaussian
`),n("span",{class:"fn2"},"sudo chown"),l(" $USER:$USER /opt/gaussian")])],-1))]),s[27]||(s[27]=n("h4",null,"步骤 2：解压安装包",-1)),n("div",v,[n("div",k,[s[13]||(s[13]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[1]||(s[1]=(...a)=>t.copy&&t.copy(...a))},"复制")]),s[14]||(s[14]=p(`<pre><code><span class="cm"># 解压安装包</span>
<span class="fn2">cd</span> /opt/gaussian
<span class="fn2">tar</span> -xzf gaussian16.tar.gz

<span class="cm"># 设置权限</span>
<span class="fn2">chmod</span> -R 755 g16</code></pre>`,1))]),s[28]||(s[28]=n("h4",null,"步骤 3：配置环境变量",-1)),n("div",R,[n("div",y,[s[15]||(s[15]=n("span",{class:"la"},"bash",-1)),s[16]||(s[16]=n("span",{class:"fn"},"~/.bashrc",-1)),n("button",{class:"cpb",onClick:s[2]||(s[2]=(...a)=>t.copy&&t.copy(...a))},"复制")]),s[17]||(s[17]=p(`<pre><code><span class="cm"># Gaussian 环境变量</span>
<span class="kw">export</span> g16root=/opt/gaussian
<span class="kw">export</span> GAUSS_SCRDIR=/tmp/gaussian
<span class="kw">source</span> $g16root/g16/bsd/g16.profile

<span class="cm"># 创建临时目录</span>
<span class="fn2">mkdir</span> -p $GAUSS_SCRDIR</code></pre>`,1))]),s[29]||(s[29]=n("h4",null,"步骤 4：使环境变量生效",-1)),n("div",x,[n("div",B,[s[18]||(s[18]=n("span",{class:"la"},"bash",-1)),n("button",{class:"cpb",onClick:s[3]||(s[3]=(...a)=>t.copy&&t.copy(...a))},"复制")]),s[19]||(s[19]=n("pre",null,[n("code",null,[n("span",{class:"cm"},"# 重新加载配置"),l(`
`),n("span",{class:"fn2"},"source"),l(` ~/.bashrc

`),n("span",{class:"cm"},"# 验证安装"),l(`
`),n("span",{class:"fn2"},"g16"),l(" < /dev/null")])],-1))]),s[30]||(s[30]=p(`<h3>3. Windows 安装</h3><h4>步骤 1：运行安装程序</h4><ul><li>双击 Gaussian 16 安装程序</li><li>选择安装目录（建议：<code>C:\\G16W</code>）</li><li>完成安装</li></ul><h4>步骤 2：配置环境</h4><div class="cb"><div class="ch"><span class="la">环境变量</span></div><pre><code><span class="cm"># 添加到系统 PATH</span>
C:\\G16W

<span class="cm"># 设置临时目录</span>
GAUSS_SCRDIR = C:\\Temp\\Gaussian</code></pre></div><h3>4. 集群配置</h3><h4>提交脚本模板</h4>`,7)),n("div",h,[n("div",A,[s[20]||(s[20]=n("span",{class:"la"},"bash",-1)),s[21]||(s[21]=n("span",{class:"fn"},"submit.sh",-1)),n("button",{class:"cpb",onClick:s[4]||(s[4]=(...a)=>t.copy&&t.copy(...a))},"复制")]),s[22]||(s[22]=p(`<pre><code><span class="kw">#!/bin/bash</span>
<span class="cm">#SBATCH -J gaussian_job</span>
<span class="cm">#SBATCH -N 1</span>
<span class="cm">#SBATCH -n 16</span>
<span class="cm">#SBATCH --mem=64G</span>
<span class="cm">#SBATCH -t 24:00:00</span>
<span class="cm">#SBATCH -o gaussian.out</span>
<span class="cm">#SBATCH -e gaussian.err</span>

<span class="cm"># 加载 Gaussian 环境</span>
<span class="kw">source</span> /opt/gaussian/g16/bsd/g16.profile

<span class="cm"># 设置临时目录</span>
<span class="kw">export</span> GAUSS_SCRDIR=/scratch/$USER/gaussian
<span class="fn2">mkdir</span> -p $GAUSS_SCRDIR

<span class="cm"># 运行 Gaussian</span>
<span class="fn2">cd</span> $SLURM_SUBMIT_DIR
g16 &lt; input.gjf &gt; output.log

<span class="cm"># 清理临时文件</span>
<span class="fn2">rm</span> -rf $GAUSS_SCRDIR/*</code></pre>`,1))]),s[31]||(s[31]=n("h3",null,"5. 多核并行设置",-1)),n("div",w,[n("div",T,[s[23]||(s[23]=n("span",{class:"la"},"input.gjf",-1)),s[24]||(s[24]=n("span",{class:"fn"},"并行计算",-1)),n("button",{class:"cpb",onClick:s[5]||(s[5]=(...a)=>t.copy&&t.copy(...a))},"复制")]),s[25]||(s[25]=p(`<pre><code><span class="cm">%chk=molecule.chk</span>
<span class="cm">%mem=64GB</span>
<span class="cm">%nproc=16</span>              <span class="cm">; 使用 16 个核心</span>
<span class="cm">#p B3LYP/6-31G(d) opt</span>

<span class="vr">Molecule optimization</span>

<span class="nu">0 1</span>
<span class="cm">[分子坐标]</span></code></pre>`,1))]),s[32]||(s[32]=p('<h3>6. 常见问题</h3><table class="tb"><thead><tr><th>问题</th><th>原因</th><th>解决方案</th></tr></thead><tbody><tr><td>找不到 g16 命令</td><td>环境变量未设置</td><td>检查 ~/.bashrc 配置</td></tr><tr><td>内存不足</td><td>%mem 设置过大</td><td>减小 %mem 值</td></tr><tr><td>磁盘空间不足</td><td>临时文件过多</td><td>清理 GAUSS_SCRDIR</td></tr><tr><td>段错误</td><td>内存或栈溢出</td><td>增加 ulimit -s unlimited</td></tr></tbody></table><div class="ib tip"><strong>提示：</strong>在 ~/.bashrc 中添加 <code class="ic">ulimit -s unlimited</code> 可以避免栈溢出问题。</div>',3))])}const L=e(g,[["render",U]]);export{L as default};
