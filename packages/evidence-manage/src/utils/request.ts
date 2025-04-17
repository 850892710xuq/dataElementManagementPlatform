import axios from 'axios';
import { ElMessage } from 'element-plus';

// 创建axios实例
const service = axios.create({
  // baseURL: import.meta.env.VITE_APP_BASE_API || '/api',
  baseURL: '/api', // 基础地址，根据实际情况调整
  timeout: 30000, // 增加请求超时时间至30秒，解决超时问题
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 添加请求日志
    console.log('发起请求:', config.method?.toUpperCase(), config.url, '参数:', config.params || config.data);
    
    // 在发送请求之前做一些处理，例如添加token
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    console.error('请求错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    // 根据业务状态码判断请求是否成功
    // 这里根据实际项目的API响应结构进行调整
    if (res.code === 200 || res.code === 0) {
      return res;
    } else {
      ElMessage({
        message: res.message || '请求失败',
        type: 'error',
        duration: 3 * 1000,
      });
      return Promise.reject(new Error(res.message || '请求失败'));
    }
  },
  (error) => {
    console.error('响应错误:', error);
    let message = '请求失败';
    if (error.response) {
      switch (error.response.status) {
        case 400:
          message = '请求错误';
          break;
        case 401:
          message = '未授权，请重新登录';
          // 可以在这里处理登录过期的情况，例如跳转到登录页
          break;
        case 403:
          message = '拒绝访问';
          break;
        case 404:
          message = '请求地址不存在';
          break;
        case 500:
          message = '服务器内部错误';
          break;
        default:
          message = `请求失败: ${error.response.status}`;
      }
    } else if (error.request) {
      message = '网络异常，请检查您的网络连接';
    } else {
      message = error.message;
    }

    ElMessage({
      message,
      type: 'error',
      duration: 3 * 1000,
    });
    
    return Promise.reject(error);
  }
);

export default service; 