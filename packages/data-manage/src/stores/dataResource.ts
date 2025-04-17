import { createBaseStore } from '@shared/stores/BaseStore'

// 定义数据资源接口
export interface DataResource extends BaseModel {
  name: string;
  type: string;
  size: number;
  format: string;
  description: string;
  status: number;
}

// 创建数据资源 Store
export const useDataResourceStore = createBaseStore<DataResource>('dataResource') 