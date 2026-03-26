<template>
  <div class="sec active">
    <div class="bread">
      <router-link to="/">首页</router-link>/
      <router-link to="/gaussian">Gaussian 教程</router-link>/
      <span>安装配置</span>
    </div>
    
    <h2>Gaussian 安装与配置</h2>
    <p>本教程介绍 Gaussian 16 的安装和基本配置方法。</p>

    <h3>1. 系统要求</h3>
    <table class="tb">
      <thead><tr><th>配置</th><th>最低要求</th><th>推荐配置</th></tr></thead>
      <tbody>
        <tr><td><strong>操作系统</strong></td><td>Linux, Windows, macOS</td><td>Linux (推荐)</td></tr>
        <tr><td><strong>处理器</strong></td><td>多核 CPU</td><td>16 核以上</td></tr>
        <tr><td><strong>内存</strong></td><td>8 GB</td><td>64 GB 或更高</td></tr>
        <tr><td><strong>硬盘</strong></td><td>10 GB</td><td>SSD 100 GB+</td></tr>
      </tbody>
    </table>

    <h3>2. Linux 安装步骤</h3>
    <h4>步骤 1：创建安装目录</h4>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 创建 Gaussian 安装目录</span>
<span class="fn2">sudo mkdir</span> -p /opt/gaussian
<span class="fn2">sudo chown</span> $USER:$USER /opt/gaussian</code></pre>
    </div>

    <h4>步骤 2：解压安装包</h4>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 解压安装包</span>
<span class="fn2">cd</span> /opt/gaussian
<span class="fn2">tar</span> -xzf gaussian16.tar.gz

<span class="cm"># 设置权限</span>
<span class="fn2">chmod</span> -R 755 g16</code></pre>
    </div>

    <h4>步骤 3：配置环境变量</h4>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><span class="fn">~/.bashrc</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># Gaussian 环境变量</span>
<span class="kw">export</span> g16root=/opt/gaussian
<span class="kw">export</span> GAUSS_SCRDIR=/tmp/gaussian
<span class="kw">source</span> $g16root/g16/bsd/g16.profile

<span class="cm"># 创建临时目录</span>
<span class="fn2">mkdir</span> -p $GAUSS_SCRDIR</code></pre>
    </div>

    <h4>步骤 4：使环境变量生效</h4>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm"># 重新加载配置</span>
<span class="fn2">source</span> ~/.bashrc

<span class="cm"># 验证安装</span>
<span class="fn2">g16</span> &lt; /dev/null</code></pre>
    </div>

    <h3>3. Windows 安装</h3>
    <h4>步骤 1：运行安装程序</h4>
    <ul>
      <li>双击 Gaussian 16 安装程序</li>
      <li>选择安装目录（建议：<code>C:\G16W</code>）</li>
      <li>完成安装</li>
    </ul>

    <h4>步骤 2：配置环境</h4>
    <div class="cb">
      <div class="ch"><span class="la">环境变量</span></div>
      <pre><code><span class="cm"># 添加到系统 PATH</span>
C:\G16W

<span class="cm"># 设置临时目录</span>
GAUSS_SCRDIR = C:\Temp\Gaussian</code></pre>
    </div>

    <h3>4. 集群配置</h3>
    <h4>提交脚本模板</h4>
    <div class="cb">
      <div class="ch"><span class="la">bash</span><span class="fn">submit.sh</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="kw">#!/bin/bash</span>
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
<span class="fn2">rm</span> -rf $GAUSS_SCRDIR/*</code></pre>
    </div>

    <h3>5. 多核并行设置</h3>
    <div class="cb">
      <div class="ch"><span class="la">input.gjf</span><span class="fn">并行计算</span><button class="cpb" @click="copy">复制</button></div>
      <pre><code><span class="cm">%chk=molecule.chk</span>
<span class="cm">%mem=64GB</span>
<span class="cm">%nproc=16</span>              <span class="cm">; 使用 16 个核心</span>
<span class="cm">#p B3LYP/6-31G(d) opt</span>

<span class="vr">Molecule optimization</span>

<span class="nu">0 1</span>
<span class="cm">[分子坐标]</span></code></pre>
    </div>

    <h3>6. 常见问题</h3>
    <table class="tb">
      <thead><tr><th>问题</th><th>原因</th><th>解决方案</th></tr></thead>
      <tbody>
        <tr><td>找不到 g16 命令</td><td>环境变量未设置</td><td>检查 ~/.bashrc 配置</td></tr>
        <tr><td>内存不足</td><td>%mem 设置过大</td><td>减小 %mem 值</td></tr>
        <tr><td>磁盘空间不足</td><td>临时文件过多</td><td>清理 GAUSS_SCRDIR</td></tr>
        <tr><td>段错误</td><td>内存或栈溢出</td><td>增加 ulimit -s unlimited</td></tr>
      </tbody>
    </table>

    <div class="ib tip"><strong>提示：</strong>在 ~/.bashrc 中添加 <code class="ic">ulimit -s unlimited</code> 可以避免栈溢出问题。</div>
  </div>
</template>

<script>
export default {
  name: 'GaussianInstallView',
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
