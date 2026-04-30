<template>
  <div class="video-tutorials">
    <h1 class="page-title">视频教程</h1>
    <p class="page-desc">精选 VASP 学习视频教程，涵盖基础入门到高级应用。</p>

    <div class="filter-section">
      <div class="filter-tabs">
        <button
          v-for="tab in categoryTabs"
          :key="tab.id"
          :class="['tab-btn', { active: activeCategory === tab.id }]"
          @click="activeCategory = tab.id"
        >
          {{ tab.icon }} {{ tab.name }}
        </button>
      </div>

      <div class="filter-row">
        <div class="filter-group">
          <label>来源平台:</label>
          <select v-model="filterPlatform">
            <option value="all">全部平台</option>
            <option value="bilibili">Bilibili</option>
            <option value="youtube">YouTube</option>
            <option value="local">本地视频</option>
          </select>
        </div>
        <div class="filter-group">
          <label>难度级别:</label>
          <select v-model="filterDifficulty">
            <option value="all">全部难度</option>
            <option value="beginner">入门</option>
            <option value="intermediate">中级</option>
            <option value="advanced">高级</option>
          </select>
        </div>
      </div>
    </div>

    <div class="videos-grid">
      <div v-for="video in filteredVideos" :key="video.id" class="video-card">
        <div class="video-thumbnail" @click="playVideo(video)">
          <div class="play-btn">▶</div>
          <span class="duration">{{ video.duration }}</span>
        </div>
        <div class="video-info">
          <h3 class="video-title">{{ video.title }}</h3>
          <p class="video-desc">{{ video.description }}</p>
          <div class="video-meta">
            <span class="platform" :class="video.platform">{{ getPlatformName(video.platform) }}</span>
            <span class="difficulty" :class="video.difficulty">{{ getDifficultyName(video.difficulty) }}</span>
          </div>
          <div class="video-tags">
            <span v-for="tag in video.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 视频播放模态框 -->
    <div v-if="currentVideo" class="modal-overlay" @click.self="closePlayer">
      <div class="modal-content">
        <div class="modal-header">
          <h2>{{ currentVideo.title }}</h2>
          <button class="close-btn" @click="closePlayer">×</button>
        </div>
        <div class="modal-body">
          <div class="video-player">
            <div v-if="currentVideo.platform === 'bilibili'" class="bilibili-player">
              <iframe
                :src="getBilibiliEmbedUrl(currentVideo.videoId)"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"
              ></iframe>
            </div>
            <div v-else-if="currentVideo.platform === 'youtube'" class="youtube-player">
              <iframe
                :src="getYoutubeEmbedUrl(currentVideo.videoId)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div v-else class="local-player">
              <video controls>
                <source :src="currentVideo.url" type="video/mp4">
                您的浏览器不支持视频播放。
              </video>
            </div>
          </div>
          <div class="video-details">
            <p>{{ currentVideo.fullDescription }}</p>
            <div class="learning-points">
              <h4>学习要点</h4>
              <ul>
                <li v-for="point in currentVideo.learningPoints" :key="point">{{ point }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoTutorialsView',
  data() {
    return {
      activeCategory: 'all',
      filterPlatform: 'all',
      filterDifficulty: 'all',
      currentVideo: null,
      categoryTabs: [
        { id: 'all', name: '全部', icon: '📚' },
        { id: 'basics', name: '基础入门', icon: '🎓' },
        { id: 'advanced', name: '进阶教程', icon: '🚀' },
        { id: 'applications', name: '应用案例', icon: '🔬' },
        { id: 'tools', name: '工具使用', icon: '🛠️' }
      ],
      videos: [
        {
          id: 1,
          title: 'VASP 基础入门教程 - 从零开始',
          description: '适合初学者的 VASP 完整入门教程，涵盖环境配置、输入文件编写和基本计算。',
          fullDescription: '本教程从零开始介绍 VASP 的使用方法，包括 Linux 基础、VASP 安装配置、输入文件编写规范、基本计算流程等。通过实际案例演示，帮助初学者快速上手第一性原理计算。',
          videoId: 'example1',
          platform: 'bilibili',
          duration: '45:20',
          difficulty: 'beginner',
          category: 'basics',
          tags: ['VASP入门', 'DFT基础', 'Linux'],
          learningPoints: [
            '了解 VASP 的基本概念和应用场景',
            '掌握 Linux 基本操作命令',
            '学会编写 VASP 输入文件',
            '理解基本的计算流程'
          ]
        },
        {
          id: 2,
          title: 'INCAR 参数详解与最佳实践',
          description: '深入讲解 INCAR 文件中各个参数的物理意义和使用方法。',
          fullDescription: 'INCAR 文件是 VASP 计算的核心配置文件，本教程详细讲解每个参数的物理意义、取值范围和使用技巧，帮助用户根据具体需求优化计算设置。',
          videoId: 'example2',
          platform: 'bilibili',
          duration: '32:15',
          difficulty: 'intermediate',
          category: 'basics',
          tags: ['INCAR', '参数配置', '优化设置'],
          learningPoints: [
            '理解 INCAR 文件的结构和语法',
            '掌握关键参数的物理意义',
            '学会针对不同计算类型优化参数',
            '避免常见的参数配置错误'
          ]
        },
        {
          id: 3,
          title: '能带结构计算与分析',
          description: '完整演示如何计算和分析材料的能带结构。',
          fullDescription: '能带结构是理解材料电子性质的关键，本教程详细介绍能带计算的完整流程，包括 K 点路径选择、数据提取和可视化分析。',
          videoId: 'example3',
          platform: 'bilibili',
          duration: '28:45',
          difficulty: 'intermediate',
          category: 'advanced',
          tags: ['能带结构', '电子结构', '数据分析'],
          learningPoints: [
            '理解能带结构的物理意义',
            '掌握 K 点路径的选择原则',
            '学会使用工具提取能带数据',
            '能够分析和解释能带特征'
          ]
        },
        {
          id: 4,
          title: 'VASPKIT 工具使用教程',
          description: '介绍 VASPKIT 的强大功能，简化 VASP 前后处理工作。',
          fullDescription: 'VASPKIT 是一个功能强大的 VASP 辅助工具，可以自动完成许多重复性工作。本教程演示如何使用 VASPKIT 进行结构准备、计算设置和数据分析。',
          videoId: 'example4',
          platform: 'bilibili',
          duration: '35:30',
          difficulty: 'intermediate',
          category: 'tools',
          tags: ['VASPKIT', '工具使用', '效率提升'],
          learningPoints: [
            '了解 VASPKIT 的主要功能模块',
            '掌握结构文件的自动生成方法',
            '学会使用 VASPKIT 分析计算结果',
            '提高日常计算工作效率'
          ]
        },
        {
          id: 5,
          title: '表面计算高级教程',
          description: '深入讲解表面模型构建、表面能计算和表面反应研究。',
          fullDescription: '表面计算是催化和材料科学的重要研究方向，本教程详细讲解表面模型构建原则、表面能计算方法、表面吸附和反应机理研究。',
          videoId: 'example5',
          platform: 'youtube',
          duration: '52:10',
          difficulty: 'advanced',
          category: 'applications',
          tags: ['表面计算', '催化', '吸附能'],
          learningPoints: [
            '掌握表面模型的构建原则',
            '理解表面能的计算方法',
            '学会研究表面吸附和反应',
            '了解表面计算的注意事项'
          ]
        },
        {
          id: 6,
          title: '缺陷计算与分析',
          description: '演示如何计算材料中的点缺陷、线缺陷和面缺陷。',
          fullDescription: '缺陷对材料性能有重要影响，本教程介绍各类缺陷的建模方法、形成能计算、电荷转变能级分析等，帮助用户系统掌握缺陷计算方法。',
          videoId: 'example6',
          platform: 'youtube',
          duration: '41:25',
          difficulty: 'advanced',
          category: 'applications',
          tags: ['缺陷计算', '形成能', '电子结构'],
          learningPoints: [
            '了解各类缺陷的物理模型',
            '掌握缺陷形成能的计算方法',
            '学会分析缺陷的电子结构',
            '理解缺陷对材料性能的影响'
          ]
        },
        {
          id: 7,
          title: '分子动力学模拟入门',
          description: '介绍 VASP 中分子动力学模拟的基本方法和应用。',
          fullDescription: '分子动力学模拟能够研究材料的动态性质和热力学行为，本教程介绍 VASP 中 MD 模拟的基本原理、参数设置和应用案例。',
          videoId: 'example7',
          platform: 'bilibili',
          duration: '38:50',
          difficulty: 'intermediate',
          category: 'advanced',
          tags: ['分子动力学', '热力学', '动态模拟'],
          learningPoints: [
            '理解分子动力学的基本原理',
            '掌握 MD 模拟的参数设置',
            '学会分析 MD 模拟结果',
            '了解 MD 模拟的应用范围'
          ]
        },
        {
          id: 8,
          title: '二维材料计算专题',
          description: '专门讲解石墨烯、MoS2 等二维材料的计算方法。',
          fullDescription: '二维材料是当前材料科学研究的热点，本教程专门讲解二维材料的建模、电子结构计算、光学性质计算等特殊方法。',
          videoId: 'example8',
          platform: 'bilibili',
          duration: '44:15',
          difficulty: 'advanced',
          category: 'applications',
          tags: ['二维材料', '石墨烯', 'MoS2'],
          learningPoints: [
            '掌握二维材料的建模方法',
            '理解真空层的作用和设置',
            '学会计算二维材料的特殊性质',
            '了解二维材料的研究前沿'
          ]
        }
      ]
    }
  },
  computed: {
    filteredVideos() {
      return this.videos.filter(video => {
        const matchesCategory = this.activeCategory === 'all' || video.category === this.activeCategory;
        const matchesPlatform = this.filterPlatform === 'all' || video.platform === this.filterPlatform;
        const matchesDifficulty = this.filterDifficulty === 'all' || video.difficulty === this.filterDifficulty;
        return matchesCategory && matchesPlatform && matchesDifficulty;
      });
    }
  },
  methods: {
    playVideo(video) {
      this.currentVideo = video;
    },
    closePlayer() {
      this.currentVideo = null;
    },
    getPlatformName(platform) {
      const names = {
        bilibili: 'Bilibili',
        youtube: 'YouTube',
        local: '本地视频'
      };
      return names[platform] || platform;
    },
    getDifficultyName(difficulty) {
      const names = {
        beginner: '入门',
        intermediate: '中级',
        advanced: '高级'
      };
      return names[difficulty] || difficulty;
    },
    getBilibiliEmbedUrl(videoId) {
      return `//player.bilibili.com/player.html?bvid=${videoId}&page=1&high_quality=1&danmaku=0`;
    },
    getYoutubeEmbedUrl(videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }
}
</script>

<style scoped>
.video-tutorials {
  padding: 20px;
}

.page-title {
  color: var(--primary);
  margin-bottom: 10px;
}

.page-desc {
  color: var(--text-secondary);
  margin-bottom: 30px;
}

.filter-section {
  margin-bottom: 30px;
}

.filter-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  border-bottom: 2px solid var(--border);
  padding-bottom: 10px;
}

.tab-btn {
  padding: 10px 20px;
  border: none;
  background: var(--bg-secondary);
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.tab-btn.active {
  background: var(--primary);
  color: white;
}

.filter-row {
  display: flex;
  gap: 20px;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.filter-group label {
  color: var(--text-secondary);
  font-size: 14px;
}

.filter-group select {
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 14px;
}

.videos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
}

.video-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;
}

.video-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.video-thumbnail {
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.play-btn {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: var(--primary);
  transition: transform 0.3s;
}

.video-thumbnail:hover .play-btn {
  transform: scale(1.1);
}

.duration {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.video-info {
  padding: 20px;
}

.video-title {
  font-size: 16px;
  color: var(--text-primary);
  margin-bottom: 10px;
  line-height: 1.4;
}

.video-desc {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 15px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.video-meta {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.platform, .difficulty {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
}

.platform.bilibili {
  background: var(--blue-dim);
  color: var(--blue);
}

.platform.youtube {
  background: var(--red-dim);
  color: var(--red);
}

.platform.local {
  background: var(--green-dim);
  color: var(--green);
}

.difficulty.beginner {
  background: var(--green-dim);
  color: var(--green);
}

.difficulty.intermediate {
  background: var(--yellow-dim);
  color: var(--yellow);
}

.difficulty.advanced {
  background: var(--red-dim);
  color: var(--red);
}

.video-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  padding: 3px 8px;
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  border-radius: 10px;
  font-size: 11px;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: var(--bg-primary);
  border-radius: 12px;
  width: 90%;
  max-width: 1000px;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid var(--border);
}

.modal-header h2 {
  color: var(--text-primary);
  margin: 0;
  font-size: 18px;
}

.close-btn {
  width: 32px;
  height: 32px;
  border: none;
  background: var(--bg-secondary);
  color: var(--text-secondary);
  border-radius: 6px;
  cursor: pointer;
  font-size: 20px;
}

.modal-body {
  padding: 20px;
}

.video-player {
  margin-bottom: 20px;
}

.bilibili-player iframe,
.youtube-player iframe {
  width: 100%;
  height: 500px;
  border-radius: 8px;
}

.local-player video {
  width: 100%;
  border-radius: 8px;
}

.video-details p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.learning-points h4 {
  color: var(--primary);
  margin-bottom: 15px;
}

.learning-points ul {
  list-style: disc;
  padding-left: 20px;
}

.learning-points li {
  color: var(--text-secondary);
  margin-bottom: 8px;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .videos-grid {
    grid-template-columns: 1fr;
  }

  .filter-row {
    flex-direction: column;
  }

  .bilibili-player iframe,
  .youtube-player iframe {
    height: 300px;
  }
}
</style>
