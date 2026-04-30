# VASP Learn - Vue 3 模块化版本

> **🌐 在线访问：[https://wcg0726.github.io/vasplearn/](https://wcg0726.github.io/vasplearn/)**

## ⚠️ 免责声明

**本站内容大部分由 AI 生成，仅供参考学习使用。如有疑问，请以 [VASP 官方文档](https://www.vasp.at/wiki/) 或专业教材为准。**

---

## 🎯 项目特色

- **交互式学习**: 在线生成 VASP 输入文件，实时预览和校验
- **3D 可视化**: 上传 POSCAR 文件，实时查看晶体结构
- **案例库**: 丰富的计算案例，包含完整输入文件和结果分析
- **多语言支持**: 中英文切换，方便不同语言用户
- **PWA 支持**: 可离线使用，支持移动端安装

---

## 📁 项目结构

```
vasplearn/
├── index.html                 # 入口 HTML 文件
├── package.json               # 项目配置和依赖
├── vite.config.js             # Vite 构建配置
├── public/
│   ├── manifest.json          # PWA 配置
│   ├── sw.js                  # Service Worker
│   ├── offline.html           # 离线页面
│   └── icons/                 # 图标资源
├── src/
│   ├── main.js                # Vue 应用入口
│   ├── App.vue                # 根组件
│   ├── i18n/                  # 国际化配置
│   │   ├── index.js           # i18n 入口
│   │   ├── zh-CN.js           # 中文语言包
│   │   └── en-US.js           # 英文语言包
│   ├── assets/
│   │   └── styles/
│   │       ├── variables.css  # CSS 变量定义
│   │       └── main.css       # 主样式文件
│   ├── components/
│   │   ├── HeaderNav.vue      # 顶部导航组件
│   │   ├── SidebarNav.vue     # 侧边栏组件
│   │   ├── SearchBox.vue      # 搜索功能组件
│   │   ├── ProgressWidget.vue # 学习进度组件
│   │   ├── ThemeToggle.vue    # 主题切换组件
│   │   └── LanguageToggle.vue # 语言切换组件
│   ├── composables/
│   │   └── useProgress.js     # 学习进度管理
│   ├── router/
│   │   └── index.js           # 路由配置
│   └── views/
│       ├── HomeView.vue       # 首页视图
│       ├── TheoryView.vue     # 理论基础视图
│       ├── InputView.vue      # 输入文件视图
│       ├── TasksView.vue      # 计算任务视图
│       ├── OutputView.vue     # 结果分析视图
│       ├── ErrorsView.vue     # 错误诊断视图
│       ├── ToolsView.vue      # 工具资源视图
│       ├── CalculatorView.vue # 计算器工具视图
│       ├── InputGeneratorView.vue    # 输入文件生成器
│       ├── BatchScriptView.vue       # 批量脚本生成器
│       ├── StructureViewerView.vue   # 3D 结构可视化
│       ├── CaseLibraryView.vue       # 计算案例库
│       ├── MaterialsDBView.vue       # Materials Project 集成
│       ├── VideoTutorialsView.vue    # 视频教程
│       ├── ShareResultsView.vue      # 计算结果分享
│       ├── CheatSheetView.vue        # 速查手册
│       ├── SurfaceView.vue           # 表面计算
│       ├── DefectView.vue            # 缺陷计算
│       ├── PhononView.vue            # 声子计算
│       ├── ConvergenceView.vue       # 收敛性测试
│       ├── ThermoelectricView.vue    # 热电计算
│       ├── GaussianView.vue          # Gaussian 概述
│       ├── GaussianInstallView.vue   # Gaussian 安装
│       ├── GaussianInputView.vue     # Gaussian 输入
│       ├── GaussianTasksView.vue     # Gaussian 任务
│       ├── GaussianOutputView.vue    # Gaussian 输出
│       ├── GaussianParamsView.vue    # Gaussian 参数
│       ├── GaussianVisualView.vue    # Gaussian 可视化
│       ├── GaussianFAQView.vue       # Gaussian FAQ
│       └── GaussianGlossaryView.vue  # Gaussian 术语
```

---

## ✨ 新增功能

### 1. 📝 VASP 输入文件生成器
- **INCAR 生成器**: 交互式配置计算参数，实时预览
- **POSCAR 生成器**: 支持预设结构和自定义坐标
- **KPOINTS 生成器**: 智能推荐 K 点网格
- **参数校验**: 自动检查常见配置错误

### 2. 📦 批量计算脚本生成器
- **PBS 脚本**: 自动生成 PBS 作业脚本
- **SLURM 脚本**: 自动生成 SLURM 作业脚本
- **批量任务**: 支持数组任务和顺序执行
- **参数配置**: 可视化配置作业参数

### 3. 🧬 3D 结构可视化
- **文件上传**: 支持 POSCAR 文件上传
- **文本输入**: 支持直接粘贴 POSCAR 内容
- **预设结构**: 内置 Si、GaAs、NaCl 等常见结构
- **交互操作**: 旋转、缩放、平移查看结构
- **显示模式**: 球棍模型、空间填充、线框模型

### 4. 📚 计算案例库
- **真实案例**: 包含完整输入文件和结果分析
- **分类筛选**: 按材料类型、计算难度筛选
- **详细解释**: 物理解释和注意事项
- **一键下载**: 下载完整计算文件

### 5. 🗄️ Materials Project 集成
- **材料查询**: 按化学式、MP ID、元素搜索
- **结构下载**: 直接下载 POSCAR 文件
- **性质数据**: 获取材料的物理性质
- **API 集成**: 支持 Materials Project API

### 6. 🎬 视频教程
- **Bilibili 集成**: 嵌入 Bilibili 视频
- **YouTube 集成**: 嵌入 YouTube 视频
- **分类浏览**: 按难度和主题分类
- **学习要点**: 每个视频的学习要点

### 7. 📤 计算结果分享
- **文件上传**: 上传计算结果文件
- **元数据**: 添加标题、描述、标签
- **浏览下载**: 浏览和下载他人分享的结果
- **社区互动**: 评论和点赞功能

### 8. 🔍 搜索功能 (Ctrl+K)
- 支持关键词搜索所有内容
- 快速跳转到相关页面
- 支持中英文搜索

### 9. 📊 学习进度追踪
- 自动记录学习进度
- 显示各模块完成百分比
- 数据保存在本地 localStorage

### 10. 🧮 实用计算工具
- **ENCUT 截断能计算器**: 根据 ENMAX 自动计算推荐截断能
- **K 点密度计算器**: 根据晶格常数推荐 K 点网格
- **内存估算器**: 估算计算所需内存
- **形成能计算器**: 快速计算化合物形成能
- **吸附能计算器**: 计算分子吸附能

### 11. 📋 快速参考卡
- INCAR 参数速查
- ISMEAR 展宽方法对照
- IBRION 优化方法对照
- ISIF 参数说明

---

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

浏览器访问 http://localhost:5173

### 3. 构建生产版本

```bash
npm run build
```

构建产物在 `dist/` 目录中。

### 4. 预览生产版本

```bash
npm run preview
```

---

## 🎨 主题切换

支持深色和浅色两种主题：
- 点击顶部导航栏的 🌙/☀️ 按钮切换主题
- 自动保存用户的主题偏好
- 支持跟随系统主题设置

---

## 🌐 多语言支持

支持中文和英文两种语言：
- 点击顶部导航栏的 中文/EN 按钮切换语言
- 自动保存用户的语言偏好
- 所有界面文本都会随语言切换

---

## 📱 PWA 支持

本应用支持 PWA (Progressive Web App)：
- 可以添加到手机主屏幕
- 支持离线使用
- 自动缓存常用资源
- 提供原生应用体验

---

## 🛠️ 如何添加新功能

### 添加新页面

1. 在 `src/views/` 目录创建新的 Vue 组件：
```vue
<template>
  <div class="sec active">
    <!-- 页面内容 -->
  </div>
</template>

<script>
export default {
  name: 'NewView'
}
</script>
```

2. 在 `src/router/index.js` 中添加路由：
```javascript
const NewView = () => import('../views/NewView.vue')

const routes = [
  // ... 其他路由
  { path: '/new-page', name: 'new', component: NewView }
]
```

3. 在 `src/components/SidebarNav.vue` 中添加侧边栏链接。

### 添加新组件

在 `src/components/` 目录创建可复用的 Vue 组件，然后在需要的地方导入使用。

### 修改样式

- 全局变量：编辑 `src/assets/styles/variables.css`
- 全局样式：编辑 `src/assets/styles/main.css`
- 组件样式：在组件内使用 `<style scoped>`

### 使用学习进度功能

```javascript
import { useProgress } from '../composables/useProgress'

export default {
  setup() {
    const { isComplete, toggleComplete, getTotalProgress } = useProgress()

    // 检查项目是否完成
    if (isComplete('theory-dft')) {
      console.log('DFT 基本原理已完成')
    }

    // 切换完成状态
    toggleComplete('theory-dft')

    // 获取总进度
    const progress = getTotalProgress()
    console.log(`已完成 ${progress.percentage}%`)
  }
}
```

### 使用多语言功能

```vue
<template>
  <div>
    <h1>{{ $t('home.title') }}</h1>
    <p>{{ $t('home.subtitle') }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyComponent'
}
</script>
```

---

## 📦 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vue Router** - 官方路由管理器
- **Vite** - 下一代前端构建工具
- **PWA** - 渐进式 Web 应用
- **i18n** - 国际化支持

---

## 🤝 贡献指南

欢迎贡献代码、报告问题或提出建议！

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

---

## 📄 许可证

本项目使用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

---

## 🙏 致谢

- [VASP](https://www.vasp.at/) - 维也纳大学开发的第一性原理计算软件
- [Materials Project](https://materialsproject.org/) - 材料性质数据库
- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
