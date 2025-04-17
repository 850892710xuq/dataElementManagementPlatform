import { MockMethod } from 'vite-plugin-mock'
import exploreDataMock from './explore-data'
import exploreApplyMock from './explore-apply'
import taskScheduleMock from './task-schedule'
import exploreRecordMock from './explore-record'

const mockData: MockMethod[] = [
  ...exploreDataMock,
  ...exploreApplyMock,
  ...taskScheduleMock,
  ...exploreRecordMock
]

export function setupProdMockServer() {
  const { createProdMockServer } = require('vite-plugin-mock/es/createProdMockServer')
  createProdMockServer(mockData)
}

export default mockData 