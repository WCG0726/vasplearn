# VASP Learn - Vue 3 模块化版本

## 项目结构

```
vasplearn/
├── index.html                 # 入口 HTML 文件
├── package.json               # 项目配置和依赖
├── vite.config.js             # Vite 构建配置
├── src/
│   ├── main.js                # Vue 应用入口
│   ├── App.vue                # 根组件
│   ├── assets/
│   │   └── styles/
│   │       ├── variables.css  # CSS 变量定义
│   │       └── main.css       # 主样式文件
│   ├── components/
│   │   ├── HeaderNav.vue      # 顶部导航组件
│   │   ├── SidebarNav.vue     # 侧边栏组件
│   │   ├── SearchBox.vue      # 搜索功能组件
│   │   ├── ProgressWidget.vue # 学习进度组件
│   │   └── QuickRef.vue       # 快速参考组件
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
│       └── CalculatorView.vue # 计算器工具视图
```

## 新增功能

### 1. 搜索功能 (Ctrl+K)
- 支持关键词搜索所有内容
- 快速跳转到相关页面
- 支持中英文搜索

### 2. 学习进度追踪
- 自动记录学习进度
- 显示各模块完成百分比
- 数据保存在本地 localStorage

### 3. 实用计算工具
- **ENCUT 截断能计算器**: 根据 ENMAX 自动计算推荐截断能
- **K 点密度计算器**: 根据晶格常数推荐 K 点网格
- **内存估算器**: 估算计算所需内存
- **形成能计算器**: 快速计算化合物形成能
- **吸附能计算器**: 计算分子吸附能

### 4. 快速参考卡
- INCAR 参数速查
- ISMEAR 展宽方法对照
- IBRION 优化方法对照
- ISIF 参数说明

## 快速开始

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

## 如何添加新功能

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
import NewView from '../views/NewView.vue'

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

## 技术栈

- Vue 3 - 渐进式 JavaScript 框架
- Vue Router - 官方路由管理器
- Vite - 下一代前端构建工具
