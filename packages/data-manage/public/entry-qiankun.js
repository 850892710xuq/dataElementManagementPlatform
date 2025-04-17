// qiankun微应用入口文件
// 这些是qiankun所需的生命周期函数，必须导出
const bootstrap = async () => {
  console.log('[数据管理中心] bootstrap');
  return Promise.resolve();
};

const mount = async (props) => {
  console.log('[数据管理中心] mount', props);
  
  // 在qiankun环境下，设置webpack public path
  if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
    
    // 加载Vite客户端脚本
    const clientScript = document.createElement('script');
    clientScript.src = '//localhost:8002/@vite/client';
    clientScript.type = 'module';
    document.head.appendChild(clientScript);
    
    // 加载应用主脚本
    const mainScript = document.createElement('script');
    mainScript.src = '//localhost:8002/src/main.ts';
    mainScript.type = 'module';
    document.head.appendChild(mainScript);
  }
  
  // 等待子应用加载完成
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (document.querySelector('#app')) {
        clearInterval(interval);
        // 将props传递给子应用
        window.qiankunProps = props;
        // 触发自定义事件，通知子应用挂载
        window.dispatchEvent(new CustomEvent('qiankunMount', { detail: props }));
        resolve();
      }
    }, 50);
  });
};

const unmount = async () => {
  console.log('[数据管理中心] unmount');
  // 触发自定义事件，通知子应用卸载
  window.dispatchEvent(new CustomEvent('qiankunUnmount'));
  return Promise.resolve();
};

const update = async (props) => {
  console.log('[数据管理中心] update', props);
  // 触发自定义事件，通知子应用更新
  window.dispatchEvent(new CustomEvent('qiankunUpdate', { detail: props }));
  return Promise.resolve();
};

// 将生命周期函数挂载到多个全局对象上，确保qiankun能够找到它们
window.bootstrap = bootstrap;
window.mount = mount;
window.unmount = unmount;
window.update = update;

window.dataManage = {
  bootstrap,
  mount,
  unmount,
  update
};

window['data-manage'] = window.dataManage; 