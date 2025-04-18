// 微前端环境下处理资源路径
if (window.__POWERED_BY_QIANKUN__) {
  // 设置公共路径 - 支持webpack和vite
  // @ts-ignore
  if (typeof __webpack_public_path__ !== 'undefined') {
    // webpack环境
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  } else {
    // vite环境
    // 动态设置资源base路径
    const baseUrl = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ || '/';
    
    // 确保base标签存在，不存在则创建
    let baseElement = document.querySelector('base');
    if (!baseElement) {
      baseElement = document.createElement('base');
      document.head.prepend(baseElement);
    }
    baseElement.setAttribute('href', baseUrl);
    
    // 重写import.meta.url，确保动态导入正常工作
    // @ts-ignore
    window.__vite_base_url__ = baseUrl;
  }
} 