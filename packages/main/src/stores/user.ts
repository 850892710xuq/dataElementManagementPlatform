import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  // 状态
  const token = ref<string>('')
  const userInfo = ref<any>(null)

  // 登录方法
  const login = async (username: string, password: string) => {
    // 模拟登录接口
    if (username === 'admin' && password === '123456') {
      token.value = 'mock_token_' + Date.now()
      userInfo.value = {
        id: 1,
        username,
        name: '管理员',
        avatar: ''
      }
      // 保存到本地存储
      localStorage.setItem('token', token.value)
      localStorage.setItem('userInfo', JSON.stringify(userInfo.value))
      return true
    }
    throw new Error('用户名或密码错误')
  }

  // 退出登录
  const logout = () => {
    token.value = ''
    userInfo.value = null
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
  }

  // 初始化状态
  const initState = () => {
    const storedToken = localStorage.getItem('token')
    const storedUserInfo = localStorage.getItem('userInfo')
    if (storedToken && storedUserInfo) {
      token.value = storedToken
      userInfo.value = JSON.parse(storedUserInfo)
    }
  }

  // 初始化
  initState()

  return {
    token,
    userInfo,
    login,
    logout
  }
}) 