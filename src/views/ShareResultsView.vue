<template>
  <div class="share-results">
    <h1 class="page-title">计算结果分享</h1>
    <p class="page-desc">上传和分享您的 VASP 计算结果，与其他用户交流学习。</p>

    <div class="upload-section">
      <h2>📤 上传计算结果</h2>

      <div class="upload-form">
        <div class="form-group">
          <label>计算标题:</label>
          <input v-model="uploadForm.title" placeholder="例如：Si 能带结构计算" class="form-input">
        </div>

        <div class="form-group">
          <label>材料体系:</label>
          <input v-model="uploadForm.material" placeholder="例如：Si, GaAs, MoS2" class="form-input">
        </div>

        <div class="form-group">
          <label>计算类型:</label>
          <select v-model="uploadForm.calcType" class="form-select">
            <option value="">选择计算类型</option>
            <option value="optimize">结构优化</option>
            <option value="dos">态密度</option>
            <option value="band">能带结构</option>
            <option value="surface">表面计算</option>
            <option value="defect">缺陷计算</option>
            <option value="phonon">声子计算</option>
            <option value="other">其他</option>
          </select>
        </div>

        <div class="form-group">
          <label>计算描述:</label>
          <textarea v-model="uploadForm.description" placeholder="描述您的计算方法、参数设置和主要结果..." class="form-textarea" rows="4"></textarea>
        </div>

        <div class="form-group">
          <label>上传文件:</label>
          <div class="file-upload-area" @click="triggerFileInput" @dragover.prevent @drop.prevent="handleDrop">
            <input
              type="file"
              ref="fileInput"
              @change="handleFileSelect"
              multiple
              accept=".vasp,.poscar,.outcar,.doscar,.eigenval,.chargecar,.wavecar,.xml,.json,.txt"
              class="file-input-hidden"
            >
            <div class="upload-icon">📁</div>
            <p>点击或拖拽文件到此处</p>
            <p class="upload-hint">支持 INCAR, POSCAR, OUTCAR, DOSCAR 等文件</p>
          </div>

          <div v-if="uploadForm.files.length > 0" class="file-list">
            <div v-for="(file, index) in uploadForm.files" :key="index" class="file-item">
              <span class="file-name">{{ file.name }}</span>
              <span class="file-size">{{ formatFileSize(file.size) }}</span>
              <button class="btn-icon" @click="removeFile(index)">×</button>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label>标签:</label>
          <div class="tags-input">
            <input
              v-model="tagInput"
              @keydown.enter.prevent="addTag"
              placeholder="输入标签后按回车添加"
              class="form-input"
            >
            <div class="tags-list">
              <span v-for="(tag, index) in uploadForm.tags" :key="index" class="tag">
                {{ tag }}
                <button @click="removeTag(index)" class="tag-remove">×</button>
              </span>
            </div>
          </div>
        </div>

        <div class="form-actions">
          <button class="btn btn-primary" @click="submitUpload" :disabled="!isFormValid">
            📤 上传分享
          </button>
          <button class="btn btn-secondary" @click="resetForm">
            🔄 重置表单
          </button>
        </div>
      </div>
    </div>

    <div class="results-section">
      <h2>📋 已分享的计算结果</h2>

      <div class="search-bar">
        <input v-model="searchQuery" placeholder="搜索计算结果..." class="search-input">
        <select v-model="filterType" class="filter-select">
          <option value="all">全部类型</option>
          <option value="optimize">结构优化</option>
          <option value="dos">态密度</option>
          <option value="band">能带结构</option>
          <option value="surface">表面计算</option>
          <option value="defect">缺陷计算</option>
          <option value="phonon">声子计算</option>
          <option value="other">其他</option>
        </select>
      </div>

      <div class="results-grid">
        <div v-for="result in filteredResults" :key="result.id" class="result-card">
          <div class="result-header">
            <h3 class="result-title">{{ result.title }}</h3>
            <span class="result-type" :class="result.calcType">{{ getCalcTypeName(result.calcType) }}</span>
          </div>

          <div class="result-info">
            <div class="info-row">
              <span class="label">材料:</span>
              <span class="value">{{ result.material }}</span>
            </div>
            <div class="info-row">
              <span class="label">上传者:</span>
              <span class="value">{{ result.author }}</span>
            </div>
            <div class="info-row">
              <span class="label">上传时间:</span>
              <span class="value">{{ formatDate(result.uploadDate) }}</span>
            </div>
            <div class="info-row">
              <span class="label">下载次数:</span>
              <span class="value">{{ result.downloads }}</span>
            </div>
          </div>

          <p class="result-desc">{{ result.description }}</p>

          <div class="result-tags">
            <span v-for="tag in result.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>

          <div class="result-actions">
            <button class="btn btn-small" @click="viewDetails(result)">查看详情</button>
            <button class="btn btn-small" @click="downloadResult(result)">📥 下载</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 详情模态框 -->
    <div v-if="selectedResult" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>{{ selectedResult.title }}</h2>
          <button class="close-btn" @click="closeModal">×</button>
        </div>

        <div class="modal-body">
          <div class="detail-info">
            <div class="info-grid">
              <div class="info-item">
                <span class="label">材料体系:</span>
                <span class="value">{{ selectedResult.material }}</span>
              </div>
              <div class="info-item">
                <span class="label">计算类型:</span>
                <span class="value">{{ getCalcTypeName(selectedResult.calcType) }}</span>
              </div>
              <div class="info-item">
                <span class="label">上传者:</span>
                <span class="value">{{ selectedResult.author }}</span>
              </div>
              <div class="info-item">
                <span class="label">上传时间:</span>
                <span class="value">{{ formatDate(selectedResult.uploadDate) }}</span>
              </div>
            </div>
          </div>

          <div class="detail-description">
            <h3>计算描述</h3>
            <p>{{ selectedResult.description }}</p>
          </div>

          <div class="detail-files">
            <h3>文件列表</h3>
            <div class="file-list">
              <div v-for="(file, index) in selectedResult.files" :key="index" class="file-item">
                <span class="file-icon">📄</span>
                <span class="file-name">{{ file.name }}</span>
                <span class="file-size">{{ file.size }}</span>
                <button class="btn btn-small" @click="downloadFile(file)">下载</button>
              </div>
            </div>
          </div>

          <div class="detail-results">
            <h3>主要结果</h3>
            <div class="result-content">
              <pre>{{ selectedResult.results }}</pre>
            </div>
          </div>

          <div class="detail-actions">
            <button class="btn btn-primary" @click="downloadAll">📥 下载全部文件</button>
            <button class="btn btn-secondary" @click="shareLink">🔗 分享链接</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShareResultsView',
  data() {
    return {
      searchQuery: '',
      filterType: 'all',
      selectedResult: null,
      tagInput: '',
      uploadForm: {
        title: '',
        material: '',
        calcType: '',
        description: '',
        files: [],
        tags: []
      },
      sharedResults: [
        {
          id: 1,
          title: 'Si 金刚石结构优化',
          material: 'Si',
          calcType: 'optimize',
          description: '使用 PBE 泛函计算硅的金刚石结构优化，得到晶格常数为 5.43 Å，与实验值吻合良好。',
          author: '张研究员',
          uploadDate: '2024-03-15',
          downloads: 128,
          tags: ['Si', '结构优化', 'PBE'],
          files: [
            { name: 'INCAR', size: '256 B' },
            { name: 'POSCAR', size: '128 B' },
            { name: 'KPOINTS', size: '64 B' },
            { name: 'OUTCAR', size: '2.3 MB' }
          ],
          results: `总能量: -10.845 eV/atom
晶格常数: 5.43 Å
体弹模量: 98 GPa
收敛步数: 12 步`
        },
        {
          id: 2,
          title: '石墨烯能带结构',
          material: 'C',
          calcType: 'band',
          description: '计算单层石墨烯的能带结构，观察到典型的狄拉克锥特征。',
          author: '李同学',
          uploadDate: '2024-03-20',
          downloads: 89,
          tags: ['石墨烯', '能带结构', '狄拉克锥'],
          files: [
            { name: 'INCAR', size: '312 B' },
            { name: 'POSCAR', size: '96 B' },
            { name: 'KPOINTS', size: '128 B' },
            { name: 'EIGENVAL', size: '1.2 MB' }
          ],
          results: `费米能级: 0.0 eV
带隙: 0.0 eV
狄拉克点: K 点
费米速度: 1.0 × 10⁶ m/s`
        },
        {
          id: 3,
          title: 'TiO₂ 表面能计算',
          material: 'TiO₂',
          calcType: 'surface',
          description: '计算锐钛矿 TiO₂ (101) 表面的表面能和表面结构。',
          author: '王博士',
          uploadDate: '2024-03-25',
          downloads: 67,
          tags: ['TiO₂', '表面能', '催化'],
          files: [
            { name: 'INCAR', size: '289 B' },
            { name: 'POSCAR', size: '256 B' },
            { name: 'KPOINTS', size: '64 B' },
            { name: 'OUTCAR', size: '3.1 MB' }
          ],
          results: `表面能: 0.98 J/m²
表面弛豫: 0.1 Å
收敛步数: 25 步`
        }
      ]
    }
  },
  computed: {
    isFormValid() {
      return this.uploadForm.title &&
             this.uploadForm.material &&
             this.uploadForm.calcType &&
             this.uploadForm.description &&
             this.uploadForm.files.length > 0;
    },
    filteredResults() {
      return this.sharedResults.filter(result => {
        const matchesSearch = result.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                             result.material.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                             result.description.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesType = this.filterType === 'all' || result.calcType === this.filterType;
        return matchesSearch && matchesType;
      });
    }
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileSelect(event) {
      const files = Array.from(event.target.files);
      this.uploadForm.files = [...this.uploadForm.files, ...files];
    },
    handleDrop(event) {
      const files = Array.from(event.dataTransfer.files);
      this.uploadForm.files = [...this.uploadForm.files, ...files];
    },
    removeFile(index) {
      this.uploadForm.files.splice(index, 1);
    },
    addTag() {
      if (this.tagInput.trim() && !this.uploadForm.tags.includes(this.tagInput.trim())) {
        this.uploadForm.tags.push(this.tagInput.trim());
        this.tagInput = '';
      }
    },
    removeTag(index) {
      this.uploadForm.tags.splice(index, 1);
    },
    formatFileSize(bytes) {
      if (bytes < 1024) return bytes + ' B';
      if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
      return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    },
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('zh-CN');
    },
    getCalcTypeName(type) {
      const names = {
        optimize: '结构优化',
        dos: '态密度',
        band: '能带结构',
        surface: '表面计算',
        defect: '缺陷计算',
        phonon: '声子计算',
        other: '其他'
      };
      return names[type] || type;
    },
    submitUpload() {
      if (!this.isFormValid) return;

      const newResult = {
        id: Date.now(),
        title: this.uploadForm.title,
        material: this.uploadForm.material,
        calcType: this.uploadForm.calcType,
        description: this.uploadForm.description,
        author: '当前用户',
        uploadDate: new Date().toISOString().split('T')[0],
        downloads: 0,
        tags: [...this.uploadForm.tags],
        files: this.uploadForm.files.map(f => ({
          name: f.name,
          size: this.formatFileSize(f.size)
        })),
        results: '计算结果待更新...'
      };

      this.sharedResults.unshift(newResult);
      this.resetForm();
      alert('上传成功！');
    },
    resetForm() {
      this.uploadForm = {
        title: '',
        material: '',
        calcType: '',
        description: '',
        files: [],
        tags: []
      };
    },
    viewDetails(result) {
      this.selectedResult = result;
    },
    closeModal() {
      this.selectedResult = null;
    },
    downloadResult(result) {
      alert(`正在下载 ${result.title} 的计算结果...`);
    },
    downloadFile(file) {
      alert(`正在下载 ${file.name}...`);
    },
    downloadAll() {
      alert('正在打包下载全部文件...');
    },
    shareLink() {
      const link = `${window.location.origin}/results/${this.selectedResult.id}`;
      navigator.clipboard.writeText(link).then(() => {
        alert('链接已复制到剪贴板！');
      });
    }
  }
}
</script>

<style scoped>
.share-results {
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

.upload-section {
  margin-bottom: 50px;
}

.upload-section h2 {
  color: var(--primary);
  margin-bottom: 20px;
}

.upload-form {
  background: var(--bg-secondary);
  padding: 30px;
  border-radius: 12px;
  border: 1px solid var(--border);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  color: var(--text-secondary);
  margin-bottom: 8px;
  font-size: 14px;
}

.form-input, .form-select, .form-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 14px;
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: border-color 0.3s;
}

.form-input:focus, .form-select:focus, .form-textarea:focus {
  outline: none;
  border-color: var(--primary);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.file-upload-area {
  border: 2px dashed var(--border);
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}

.file-upload-area:hover {
  border-color: var(--primary);
  background: var(--accent-glow);
}

.file-input-hidden {
  display: none;
}

.upload-icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.file-upload-area p {
  color: var(--text-secondary);
  margin-bottom: 5px;
}

.upload-hint {
  font-size: 12px;
  color: var(--text-muted);
}

.file-list {
  margin-top: 15px;
}

.file-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: var(--bg-primary);
  border-radius: 8px;
  margin-bottom: 8px;
}

.file-name {
  flex: 1;
  color: var(--text-primary);
  font-size: 14px;
}

.file-size {
  color: var(--text-muted);
  font-size: 12px;
}

.btn-icon {
  width: 28px;
  height: 28px;
  border: none;
  background: var(--red-dim);
  color: var(--red);
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.tags-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--accent-glow);
  color: var(--primary);
  border-radius: 16px;
  font-size: 13px;
}

.tag-remove {
  border: none;
  background: none;
  color: var(--primary);
  cursor: pointer;
  font-size: 14px;
  padding: 0;
  line-height: 1;
}

.form-actions {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-secondary {
  background: var(--bg-tertiary);
  color: var(--text);
}

.btn-small {
  padding: 8px 16px;
  font-size: 13px;
}

.results-section h2 {
  color: var(--primary);
  margin-bottom: 20px;
}

.search-bar {
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
}

.search-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 14px;
}

.filter-select {
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 14px;
  background: var(--bg-secondary);
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
}

.result-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s;
}

.result-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.result-title {
  font-size: 16px;
  color: var(--text-primary);
  margin: 0;
}

.result-type {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
}

.result-type.optimize {
  background: var(--green-dim);
  color: var(--green);
}

.result-type.dos {
  background: var(--blue-dim);
  color: var(--blue);
}

.result-type.band {
  background: var(--purple-dim);
  color: var(--purple);
}

.result-type.surface {
  background: var(--cyan-dim);
  color: var(--cyan);
}

.result-type.defect {
  background: var(--orange-dim);
  color: var(--orange);
}

.result-info {
  margin-bottom: 15px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 13px;
}

.info-row .label {
  color: var(--text-muted);
}

.info-row .value {
  color: var(--text-primary);
}

.result-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 15px;
}

.result-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 15px;
}

.result-actions {
  display: flex;
  gap: 10px;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: var(--bg-primary);
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
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

.detail-info {
  margin-bottom: 20px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.info-item .label {
  font-size: 12px;
  color: var(--text-muted);
}

.info-item .value {
  font-size: 14px;
  color: var(--text-primary);
  font-weight: 500;
}

.detail-description,
.detail-files,
.detail-results {
  margin-bottom: 20px;
}

.detail-description h3,
.detail-files h3,
.detail-results h3 {
  color: var(--primary);
  font-size: 14px;
  margin-bottom: 10px;
}

.detail-description p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.result-content {
  background: #1a1a2e;
  color: #e0e0e0;
  padding: 15px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.5;
}

.result-content pre {
  margin: 0;
}

.detail-actions {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .results-grid {
    grid-template-columns: 1fr;
  }

  .search-bar {
    flex-direction: column;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .detail-actions {
    flex-direction: column;
  }
}
</style>
