const CACHE_NAME = 'vasp-learn-v1';
const STATIC_CACHE = 'vasp-learn-static-v1';
const DYNAMIC_CACHE = 'vasp-learn-dynamic-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon.svg',
  '/offline.html'
];

// 安装事件
self.addEventListener('install', (event) => {
  console.log('Service Worker 安装中...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('缓存静态资源');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// 激活事件
self.addEventListener('activate', (event) => {
  console.log('Service Worker 激活中...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('删除旧缓存:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// 请求拦截
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // 忽略非 GET 请求
  if (request.method !== 'GET') {
    return;
  }

  // 忽略 API 请求
  if (url.hostname === 'api.materialsproject.org') {
    return;
  }

  // 忽略 Chrome 扩展请求
  if (url.protocol === 'chrome-extension:') {
    return;
  }

  // 对于页面请求，使用网络优先策略
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // 缓存成功的页面
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(request).then((response) => {
            if (response) {
              return response;
            }
            // 返回离线页面
            return caches.match('/offline.html');
          });
        })
    );
    return;
  }

  // 对于静态资源，使用缓存优先策略
  if (STATIC_ASSETS.includes(url.pathname)) {
    event.respondWith(
      caches.match(request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(request).then((response) => {
          const responseClone = response.clone();
          caches.open(STATIC_CACHE).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        });
      })
    );
    return;
  }

  // 对于其他请求，使用网络优先策略
  event.respondWith(
    fetch(request)
      .then((response) => {
        // 缓存成功的响应
        const responseClone = response.clone();
        caches.open(DYNAMIC_CACHE).then((cache) => {
          cache.put(request, responseClone);
        });
        return response;
      })
      .catch(() => {
        return caches.match(request).then((response) => {
          if (response) {
            return response;
          }
          // 对于图片请求，返回默认图片
          if (request.destination === 'image') {
            return caches.match('/icons/icon.svg');
          }
          return new Response('离线状态', {
            status: 503,
            statusText: 'Service Unavailable'
          });
        });
      })
  );
});

// 后台同步
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

// 推送通知
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : '新消息',
    icon: '/icons/icon.svg',
    badge: '/icons/icon.svg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: '查看详情',
        icon: '/icons/icon.svg'
      },
      {
        action: 'close',
        title: '关闭',
        icon: '/icons/icon.svg'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('VASP 学习平台', options)
  );
});

// 通知点击
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// 数据同步函数
async function syncData() {
  try {
    // 这里可以实现数据同步逻辑
    console.log('数据同步完成');
  } catch (error) {
    console.error('数据同步失败:', error);
  }
}

// 缓存清理函数
async function cleanCache() {
  const cacheNames = await caches.keys();
  const oldCaches = cacheNames.filter((name) => {
    return name !== STATIC_CACHE && name !== DYNAMIC_CACHE;
  });

  return Promise.all(
    oldCaches.map((name) => caches.delete(name))
  );
}
