import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { BaseModel, PaginationQuery, ApiResponse } from './types'

// 创建基础 Store 类
export function createBaseStore<T extends BaseModel>(storeName: string) {
  return defineStore(storeName, () => {
    // 数据列表
    const list = ref<T[]>([])
    // 分页信息
    const pagination = ref<PaginationQuery>({
      page: 1,
      pageSize: 10,
      total: 0
    })
    
    // 加载状态
    const loading = ref(false)

    // 模拟 API 延迟
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

    // 获取列表数据
    const getList = async (params?: Partial<PaginationQuery>) => {
      loading.value = true
      try {
        // 模拟 API 请求延迟
        await delay(500)
        
        // 从 localStorage 获取数据
        const storageKey = `${storeName}_list`
        const storedData = localStorage.getItem(storageKey)
        const data = storedData ? JSON.parse(storedData) : []
        
        // 更新分页信息
        pagination.value = {
          ...pagination.value,
          ...params,
          total: data.length
        }
        
        // 计算分页数据
        const start = (pagination.value.page - 1) * pagination.value.pageSize
        const end = start + pagination.value.pageSize
        list.value = data.slice(start, end)
        
        return {
          code: 200,
          data: list.value,
          message: '获取成功'
        } as ApiResponse<T[]>
      } finally {
        loading.value = false
      }
    }

    // 添加数据
    const add = async (item: Omit<T, 'id' | 'createTime' | 'updateTime'>) => {
      loading.value = true
      try {
        await delay(500)
        
        const storageKey = `${storeName}_list`
        const storedData = localStorage.getItem(storageKey)
        const data = storedData ? JSON.parse(storedData) : []
        
        // 创建新记录
        const newItem = {
          ...item,
          id: Date.now(),
          createTime: new Date().toISOString(),
          updateTime: new Date().toISOString()
        } as T
        
        // 添加到存储
        data.unshift(newItem)
        localStorage.setItem(storageKey, JSON.stringify(data))
        
        // 刷新列表
        await getList(pagination.value)
        
        return {
          code: 200,
          data: newItem,
          message: '添加成功'
        } as ApiResponse<T>
      } finally {
        loading.value = false
      }
    }

    // 更新数据
    const update = async (id: string | number, item: Partial<T>) => {
      loading.value = true
      try {
        await delay(500)
        
        const storageKey = `${storeName}_list`
        const storedData = localStorage.getItem(storageKey)
        const data = storedData ? JSON.parse(storedData) : []
        
        // 查找并更新数据
        const index = data.findIndex((d: T) => d.id === id)
        if (index > -1) {
          data[index] = {
            ...data[index],
            ...item,
            updateTime: new Date().toISOString()
          }
          localStorage.setItem(storageKey, JSON.stringify(data))
          
          // 刷新列表
          await getList(pagination.value)
          
          return {
            code: 200,
            data: data[index],
            message: '更新成功'
          } as ApiResponse<T>
        }
        
        throw new Error('记录不存在')
      } finally {
        loading.value = false
      }
    }

    // 删除数据
    const remove = async (id: string | number) => {
      loading.value = true
      try {
        await delay(500)
        
        const storageKey = `${storeName}_list`
        const storedData = localStorage.getItem(storageKey)
        const data = storedData ? JSON.parse(storedData) : []
        
        // 过滤掉要删除的数据
        const newData = data.filter((d: T) => d.id !== id)
        localStorage.setItem(storageKey, JSON.stringify(newData))
        
        // 刷新列表
        await getList(pagination.value)
        
        return {
          code: 200,
          data: null,
          message: '删除成功'
        } as ApiResponse<null>
      } finally {
        loading.value = false
      }
    }

    return {
      list,
      pagination,
      loading,
      getList,
      add,
      update,
      remove
    }
  })
} 