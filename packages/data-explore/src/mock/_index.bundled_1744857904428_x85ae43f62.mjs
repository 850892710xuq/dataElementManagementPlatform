var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// src/mock/explore-data.ts
var dataList = [
  {
    id: 1,
    name: "\u751F\u4EA7\u6570\u636E\u4ED3\u5E93",
    type: "\u6570\u636E\u5E93",
    industry: "\u5236\u9020\u4E1A",
    description: "\u5B58\u50A8\u751F\u4EA7\u7EBF\u7684\u5B9E\u65F6\u6570\u636E\uFF0C\u5305\u62EC\u8BBE\u5907\u72B6\u6001\u3001\u4EA7\u91CF\u3001\u8D28\u91CF\u7B49\u6307\u6807",
    createTime: "2024-01-15 10:30:00",
    dbType: "MySQL",
    host: "192.168.1.100",
    port: 3306,
    dbName: "production_db",
    username: "prod_admin",
    sampleData: [
      { id: 1, device_id: "DEV001", status: "\u8FD0\u884C\u4E2D", output: 1200, quality: "\u5408\u683C", timestamp: "2024-01-15 10:00:00" },
      { id: 2, device_id: "DEV002", status: "\u5F85\u673A", output: 0, quality: "-", timestamp: "2024-01-15 10:00:00" },
      { id: 3, device_id: "DEV003", status: "\u7EF4\u62A4\u4E2D", output: 0, quality: "-", timestamp: "2024-01-15 10:00:00" }
    ],
    columns: ["id", "device_id", "status", "output", "quality", "timestamp"]
  },
  {
    id: 2,
    name: "\u5BA2\u6237\u884C\u4E3A\u5206\u6790\u6570\u636E",
    type: "CSV",
    industry: "\u91D1\u878D\u4E1A",
    description: "\u8BB0\u5F55\u5BA2\u6237\u5728APP\u4E0A\u7684\u884C\u4E3A\u6570\u636E\uFF0C\u7528\u4E8E\u5206\u6790\u7528\u6237\u4E60\u60EF\u548C\u504F\u597D",
    createTime: "2024-01-16 14:20:00",
    filePath: "/data/customer_behavior_202401.csv",
    sampleData: [
      { user_id: "U1001", page: "\u9996\u9875", duration: 120, action: "\u70B9\u51FB", timestamp: "2024-01-16 10:00:00" },
      { user_id: "U1002", page: "\u4EA7\u54C1\u8BE6\u60C5", duration: 45, action: "\u6D4F\u89C8", timestamp: "2024-01-16 10:05:00" },
      { user_id: "U1003", page: "\u8D2D\u7269\u8F66", duration: 30, action: "\u6DFB\u52A0", timestamp: "2024-01-16 10:10:00" }
    ],
    columns: ["user_id", "page", "duration", "action", "timestamp"]
  },
  {
    id: 3,
    name: "\u7269\u8054\u7F51\u8BBE\u5907\u6570\u636E",
    type: "S3\u5BF9\u8C61\u5B58\u50A8",
    industry: "\u519C\u4E1A",
    description: "\u519C\u4E1A\u7269\u8054\u7F51\u8BBE\u5907\u91C7\u96C6\u7684\u73AF\u5883\u6570\u636E\uFF0C\u5305\u62EC\u6E29\u5EA6\u3001\u6E7F\u5EA6\u3001\u5149\u7167\u7B49",
    createTime: "2024-01-17 09:15:00",
    s3Type: "MinIO",
    endpoint: "http://minio.example.com",
    region: "cn-east-1",
    bucket: "iot-data",
    path: "agriculture/2024/01/",
    sampleData: [
      { device_id: "IOT001", temperature: 25.6, humidity: 65, light: 1200, timestamp: "2024-01-17 09:00:00" },
      { device_id: "IOT002", temperature: 26.2, humidity: 63, light: 1150, timestamp: "2024-01-17 09:00:00" },
      { device_id: "IOT003", temperature: 24.8, humidity: 68, light: 1250, timestamp: "2024-01-17 09:00:00" }
    ],
    columns: ["device_id", "temperature", "humidity", "light", "timestamp"]
  },
  {
    id: 4,
    name: "\u533B\u7597\u5F71\u50CF\u6570\u636E",
    type: "S3\u5BF9\u8C61\u5B58\u50A8",
    industry: "\u536B\u751F\u548C\u793E\u4F1A\u5DE5\u4F5C",
    description: "\u533B\u9662\u5F71\u50CF\u79D1\u5B58\u50A8\u7684CT\u3001MRI\u7B49\u533B\u7597\u5F71\u50CF\u6570\u636E",
    createTime: "2024-01-18 11:30:00",
    s3Type: "\u963F\u91CC\u4E91OSS",
    endpoint: "oss-cn-hangzhou.aliyuncs.com",
    region: "cn-hangzhou",
    bucket: "medical-images",
    path: "radiology/2024/01/",
    sampleData: [
      { patient_id: "P1001", type: "CT", date: "2024-01-18", doctor: "\u5F20\u533B\u751F", status: "\u5DF2\u8BCA\u65AD" },
      { patient_id: "P1002", type: "MRI", date: "2024-01-18", doctor: "\u674E\u533B\u751F", status: "\u5F85\u8BCA\u65AD" },
      { patient_id: "P1003", type: "X\u5149", date: "2024-01-18", doctor: "\u738B\u533B\u751F", status: "\u5DF2\u8BCA\u65AD" }
    ],
    columns: ["patient_id", "type", "date", "doctor", "status"]
  },
  {
    id: 5,
    name: "\u5B66\u751F\u6210\u7EE9\u6570\u636E\u5E93",
    type: "\u6570\u636E\u5E93",
    industry: "\u6559\u80B2",
    description: "\u5B58\u50A8\u5B66\u751F\u5404\u79D1\u76EE\u6210\u7EE9\u548C\u8BC4\u4EF7\u6570\u636E",
    createTime: "2024-01-19 08:45:00",
    dbType: "PostgreSQL",
    host: "192.168.2.100",
    port: 5432,
    dbName: "education_db",
    username: "edu_admin",
    sampleData: [
      { student_id: "S1001", name: "\u5F20\u4E09", math: 95, english: 88, physics: 92, total: 275 },
      { student_id: "S1002", name: "\u674E\u56DB", math: 88, english: 92, physics: 85, total: 265 },
      { student_id: "S1003", name: "\u738B\u4E94", math: 90, english: 85, physics: 88, total: 263 }
    ],
    columns: ["student_id", "name", "math", "english", "physics", "total"]
  },
  {
    id: 6,
    name: "\u5EFA\u7B51\u9879\u76EE\u8FDB\u5EA6\u6570\u636E",
    type: "CSV",
    industry: "\u5EFA\u7B51\u4E1A",
    description: "\u8BB0\u5F55\u5EFA\u7B51\u9879\u76EE\u7684\u8FDB\u5EA6\u3001\u8D28\u91CF\u548C\u5B89\u5168\u6570\u636E",
    createTime: "2024-01-20 13:20:00",
    filePath: "/data/project_progress_202401.csv",
    sampleData: [
      { project_id: "PJ001", phase: "\u5730\u57FA\u5DE5\u7A0B", progress: 85, quality: "\u826F\u597D", safety: "\u6B63\u5E38", date: "2024-01-20" },
      { project_id: "PJ002", phase: "\u4E3B\u4F53\u7ED3\u6784", progress: 60, quality: "\u826F\u597D", safety: "\u6B63\u5E38", date: "2024-01-20" },
      { project_id: "PJ003", phase: "\u88C5\u4FEE\u5DE5\u7A0B", progress: 30, quality: "\u826F\u597D", safety: "\u6B63\u5E38", date: "2024-01-20" }
    ],
    columns: ["project_id", "phase", "progress", "quality", "safety", "date"]
  }
];
var mockData = [
  // 获取数据列表
  {
    url: "/api/explore-data/list",
    method: "get",
    response: ({ query }) => {
      const { name, industry, currentPage, pageSize } = query;
      let filteredList = [...dataList];
      if (name) {
        filteredList = filteredList.filter((item) => item.name.includes(name));
      }
      if (industry) {
        filteredList = filteredList.filter((item) => item.industry === industry);
      }
      const total = filteredList.length;
      const start = (Number(currentPage) - 1) * Number(pageSize);
      const end = start + Number(pageSize);
      const list = filteredList.slice(start, end);
      return {
        code: 200,
        data: {
          list,
          total,
          currentPage: Number(currentPage),
          pageSize: Number(pageSize)
        }
      };
    }
  },
  // 获取数据详情
  {
    url: "/api/explore-data/:id",
    method: "get",
    response: ({ query }) => {
      const { id } = query;
      const detail = dataList.find((item) => item.id === Number(id));
      return {
        code: 200,
        data: detail
      };
    }
  },
  // 新增数据
  {
    url: "/api/explore-data",
    method: "post",
    response: ({ body }) => {
      const newData = {
        id: dataList.length + 1,
        createTime: (/* @__PURE__ */ new Date()).toLocaleString(),
        ...body
      };
      dataList.push(newData);
      return {
        code: 200,
        data: newData
      };
    }
  },
  // 编辑数据
  {
    url: "/api/explore-data/:id",
    method: "put",
    response: ({ body }) => {
      const index = dataList.findIndex((item) => item.id === body.id);
      if (index !== -1) {
        dataList[index] = { ...dataList[index], ...body };
      }
      return {
        code: 200,
        data: dataList[index]
      };
    }
  },
  // 删除数据
  {
    url: "/api/explore-data/:id",
    method: "delete",
    response: ({ query }) => {
      const { id } = query;
      const index = dataList.findIndex((item) => item.id === Number(id));
      if (index !== -1) {
        dataList.splice(index, 1);
      }
      return {
        code: 200,
        data: null
      };
    }
  },
  // 获取行业选项
  {
    url: "/api/common/industry-options",
    method: "get",
    response: () => {
      return {
        code: 200,
        data: [
          { label: "\u5236\u9020\u4E1A", value: "\u5236\u9020\u4E1A" },
          { label: "\u519C\u4E1A", value: "\u519C\u4E1A" },
          { label: "\u5EFA\u7B51\u4E1A", value: "\u5EFA\u7B51\u4E1A" },
          { label: "\u91D1\u878D\u4E1A", value: "\u91D1\u878D\u4E1A" },
          { label: "\u6559\u80B2", value: "\u6559\u80B2" },
          { label: "\u536B\u751F\u548C\u793E\u4F1A\u5DE5\u4F5C", value: "\u536B\u751F\u548C\u793E\u4F1A\u5DE5\u4F5C" }
        ]
      };
    }
  }
];
var explore_data_default = mockData;

// src/utils/request.ts
import axios from "axios";
import { ElMessage } from "element-plus";
var service = axios.create({
  baseURL: "/api",
  // 设置统一的请求前缀
  timeout: 15e3,
  // 请求超时时间
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
});
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error("\u8BF7\u6C42\u9519\u8BEF:", error);
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code === 200) {
      return res;
    } else {
      ElMessage.error(res.message || "\u64CD\u4F5C\u5931\u8D25");
      return Promise.reject(new Error(res.message || "\u64CD\u4F5C\u5931\u8D25"));
    }
  },
  (error) => {
    let message = "";
    const status = error.response?.status;
    switch (status) {
      case 400:
        message = "\u8BF7\u6C42\u9519\u8BEF";
        break;
      case 401:
        message = "\u672A\u6388\u6743";
        break;
      case 403:
        message = "\u62D2\u7EDD\u8BBF\u95EE";
        break;
      case 404:
        message = "\u8BF7\u6C42\u5730\u5740\u51FA\u9519";
        break;
      case 408:
        message = "\u8BF7\u6C42\u8D85\u65F6";
        break;
      case 500:
        message = "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF";
        break;
      case 501:
        message = "\u670D\u52A1\u672A\u5B9E\u73B0";
        break;
      case 502:
        message = "\u7F51\u5173\u9519\u8BEF";
        break;
      case 503:
        message = "\u670D\u52A1\u4E0D\u53EF\u7528";
        break;
      case 504:
        message = "\u7F51\u5173\u8D85\u65F6";
        break;
      case 505:
        message = "HTTP\u7248\u672C\u4E0D\u53D7\u652F\u6301";
        break;
      default:
        message = "\u7F51\u7EDC\u8FDE\u63A5\u6545\u969C";
    }
    console.error("\u54CD\u5E94\u9519\u8BEF:", error);
    ElMessage.error(message);
    return Promise.reject(error);
  }
);

// src/api/task-schedule-mock.ts
import { Random } from "mockjs";
function randomPastDate() {
  const now = /* @__PURE__ */ new Date();
  const pastTime = now.getTime() - Random.integer(1, 72) * 60 * 60 * 1e3;
  return new Date(pastTime).toISOString().replace("T", " ").substring(0, 19);
}
function randomFutureDate() {
  const now = /* @__PURE__ */ new Date();
  const futureTime = now.getTime() + Random.integer(1, 24) * 60 * 60 * 1e3;
  return new Date(futureTime).toISOString().replace("T", " ").substring(0, 19);
}
function formatTimeInterval(minutes) {
  if (minutes < 60) {
    return `${minutes}\u5206\u949F`;
  } else {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0 ? `${hours}\u5C0F\u65F6${remainingMinutes}\u5206\u949F` : `${hours}\u5C0F\u65F6`;
  }
}
var productNames = [
  "\u5236\u9020\u4E1A\u751F\u4EA7\u6570\u636E\u5206\u6790\u4EA7\u54C1",
  "\u519C\u4E1A\u6C14\u8C61\u6570\u636E\u5206\u6790\u4EA7\u54C1",
  "\u91D1\u878D\u4EA4\u6613\u6570\u636E\u5206\u6790\u4EA7\u54C1",
  "\u533B\u7597\u5065\u5EB7\u6570\u636E\u5206\u6790\u4EA7\u54C1",
  "\u96F6\u552E\u9500\u552E\u6570\u636E\u5206\u6790\u4EA7\u54C1",
  "\u7269\u6D41\u8FD0\u8F93\u6570\u636E\u5206\u6790\u4EA7\u54C1",
  "\u80FD\u6E90\u6D88\u8017\u6570\u636E\u5206\u6790\u4EA7\u54C1",
  "\u6559\u80B2\u5B66\u4E60\u6570\u636E\u5206\u6790\u4EA7\u54C1",
  "\u623F\u5730\u4EA7\u6570\u636E\u5206\u6790\u4EA7\u54C1",
  "\u65C5\u6E38\u51FA\u884C\u6570\u636E\u5206\u6790\u4EA7\u54C1"
];
function generateRandomId() {
  return `TASK-${Random.string("0123456789", 8)}`;
}
function generateRunningTasks(count) {
  const tasks = [];
  for (let i = 0; i < count; i++) {
    const startTime = randomPastDate();
    tasks.push({
      id: generateRandomId(),
      dataProductName: Random.pick(productNames),
      progress: Random.integer(10, 95),
      startTime,
      expectedEndTime: randomFutureDate(),
      status: Random.pick(["\u8FD0\u884C\u4E2D" /* RUNNING */, "\u6682\u505C" /* PAUSED */, "\u5F02\u5E38" /* ERROR */])
    });
  }
  return tasks;
}
function generateQueuedTasks(count) {
  const tasks = [];
  for (let i = 0; i < count; i++) {
    tasks.push({
      id: generateRandomId(),
      dataProductName: Random.pick(productNames),
      submitTime: randomPastDate(),
      queuePosition: i + 1,
      expectedWaitTime: formatTimeInterval(Random.integer(15, 480))
      // 15分钟到8小时之间
    });
  }
  return tasks;
}
function mockGetRunningTaskList(params) {
  const { id, dataProductName, status, currentPage, pageSize } = params;
  let allTasks = generateRunningTasks(50);
  if (id) {
    allTasks = allTasks.filter((task) => task.id.includes(id));
  }
  if (dataProductName) {
    allTasks = allTasks.filter((task) => task.dataProductName.includes(dataProductName));
  }
  if (status) {
    allTasks = allTasks.filter((task) => task.status === status);
  }
  const total = allTasks.length;
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const list = allTasks.slice(start, end);
  return {
    code: 200,
    data: {
      list,
      total,
      currentPage,
      pageSize
    },
    message: "\u83B7\u53D6\u6210\u529F"
  };
}
function mockGetQueuedTaskList(params) {
  const { id, dataProductName, currentPage, pageSize } = params;
  let allTasks = generateQueuedTasks(30);
  if (id) {
    allTasks = allTasks.filter((task) => task.id.includes(id));
  }
  if (dataProductName) {
    allTasks = allTasks.filter((task) => task.dataProductName.includes(dataProductName));
  }
  allTasks.forEach((task, index) => {
    task.queuePosition = index + 1;
  });
  const total = allTasks.length;
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const list = allTasks.slice(start, end);
  return {
    code: 200,
    data: {
      list,
      total,
      currentPage,
      pageSize
    },
    message: "\u83B7\u53D6\u6210\u529F"
  };
}
function mockRemoveTask(id) {
  return {
    code: 200,
    data: true,
    message: "\u4EFB\u52A1\u79FB\u9664\u6210\u529F"
  };
}
function mockGetStatusOptions() {
  return {
    code: 200,
    data: [
      { label: "\u8FD0\u884C\u4E2D", value: "\u8FD0\u884C\u4E2D" /* RUNNING */ },
      { label: "\u6682\u505C", value: "\u6682\u505C" /* PAUSED */ },
      { label: "\u5F02\u5E38", value: "\u5F02\u5E38" /* ERROR */ }
    ],
    message: "\u83B7\u53D6\u6210\u529F"
  };
}

// src/mock/task-schedule.ts
var taskScheduleMock = [
  // 获取运行中任务列表
  {
    url: "/api/task-schedule/running",
    method: "get",
    response: ({ query }) => {
      return mockGetRunningTaskList({
        id: query.id,
        dataProductName: query.dataProductName,
        status: query.status,
        currentPage: parseInt(query.currentPage) || 1,
        pageSize: parseInt(query.pageSize) || 10
      });
    }
  },
  // 获取排队中任务列表
  {
    url: "/api/task-schedule/queued",
    method: "get",
    response: ({ query }) => {
      return mockGetQueuedTaskList({
        id: query.id,
        dataProductName: query.dataProductName,
        currentPage: parseInt(query.currentPage) || 1,
        pageSize: parseInt(query.pageSize) || 10
      });
    }
  },
  // 移除运行中任务
  {
    url: "/api/task-schedule/running/:id",
    method: "delete",
    response: ({ params }) => {
      return mockRemoveTask(params.id);
    }
  },
  // 获取任务状态选项
  {
    url: "/api/task-schedule/status-options",
    method: "get",
    response: () => {
      return mockGetStatusOptions();
    }
  }
];
var task_schedule_default = taskScheduleMock;

// src/mock/index.ts
var mockData2 = [
  ...explore_data_default,
  ...task_schedule_default
];
function setupProdMockServer() {
  const { createProdMockServer } = __require("vite-plugin-mock/es/createProdMockServer");
  createProdMockServer(mockData2);
}
var mock_default = mockData2;
export {
  mock_default as default,
  setupProdMockServer
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21vY2svZXhwbG9yZS1kYXRhLnRzIiwgInNyYy91dGlscy9yZXF1ZXN0LnRzIiwgInNyYy9hcGkvdGFzay1zY2hlZHVsZS1tb2NrLnRzIiwgInNyYy9tb2NrL3Rhc2stc2NoZWR1bGUudHMiLCAic3JjL21vY2svaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiRDpcXFxcY3Vyc29yQ29kZVxcXFxcdTY1NzBcdTYzNkVcdTg5ODFcdTdEMjBcdThGRDBcdTg0MjVcdTVFNzNcdTUzRjBcXFxcXHU2NTcwXHU2MzZFXHU3QkExXHU3NDA2XHU1QjUwXHU3Q0ZCXHU3RURGXFxcXHBhY2thZ2VzXFxcXGRhdGEtZXhwbG9yZVxcXFxzcmNcXFxcbW9ja1xcXFxleHBsb3JlLWRhdGEudHNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiRDpcXFxcY3Vyc29yQ29kZVxcXFxcdTY1NzBcdTYzNkVcdTg5ODFcdTdEMjBcdThGRDBcdTg0MjVcdTVFNzNcdTUzRjBcXFxcXHU2NTcwXHU2MzZFXHU3QkExXHU3NDA2XHU1QjUwXHU3Q0ZCXHU3RURGXFxcXHBhY2thZ2VzXFxcXGRhdGEtZXhwbG9yZVxcXFxzcmNcXFxcbW9ja1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vRDovY3Vyc29yQ29kZS8lRTYlOTUlQjAlRTYlOEQlQUUlRTglQTYlODElRTclQjQlQTAlRTglQkYlOTAlRTglOTAlQTUlRTUlQjklQjMlRTUlOEYlQjAvJUU2JTk1JUIwJUU2JThEJUFFJUU3JUFFJUExJUU3JTkwJTg2JUU1JUFEJTkwJUU3JUIzJUJCJUU3JUJCJTlGL3BhY2thZ2VzL2RhdGEtZXhwbG9yZS9zcmMvbW9jay9leHBsb3JlLWRhdGEudHNcIjtpbXBvcnQgeyBNb2NrTWV0aG9kIH0gZnJvbSAndml0ZS1wbHVnaW4tbW9jaydcclxuXHJcbi8vIFx1NUI5QVx1NEU0OVx1OEJGN1x1NkM0Mlx1NTNDMlx1NjU3MFx1NjNBNVx1NTNFM1xyXG5pbnRlcmZhY2UgUXVlcnlQYXJhbXMge1xyXG4gIHBhZ2VOdW0/OiBudW1iZXJcclxuICBwYWdlU2l6ZT86IG51bWJlclxyXG4gIG5hbWU/OiBzdHJpbmdcclxuICBpbmR1c3RyeT86IHN0cmluZ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUm91dGVQYXJhbXMge1xyXG4gIGlkOiBzdHJpbmdcclxufVxyXG5cclxuaW50ZXJmYWNlIFJlcXVlc3RCb2R5IHtcclxuICBba2V5OiBzdHJpbmddOiBhbnlcclxufVxyXG5cclxuLy8gXHU1QjlBXHU0RTQ5XHU2NTcwXHU2MzZFXHU5ODc5XHU2M0E1XHU1M0UzXHJcbmludGVyZmFjZSBFeHBsb3JlRGF0YUl0ZW0ge1xyXG4gIGlkOiBudW1iZXJcclxuICBuYW1lOiBzdHJpbmdcclxuICB0eXBlOiBzdHJpbmdcclxuICBpbmR1c3RyeTogc3RyaW5nXHJcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xyXG4gIGNyZWF0ZVRpbWU6IHN0cmluZ1xyXG4gIGRiVHlwZT86IHN0cmluZ1xyXG4gIGhvc3Q/OiBzdHJpbmdcclxuICBwb3J0PzogbnVtYmVyXHJcbiAgZGJOYW1lPzogc3RyaW5nXHJcbiAgdXNlcm5hbWU/OiBzdHJpbmdcclxuICBmaWxlUGF0aD86IHN0cmluZ1xyXG4gIHMzVHlwZT86IHN0cmluZ1xyXG4gIGVuZHBvaW50Pzogc3RyaW5nXHJcbiAgcmVnaW9uPzogc3RyaW5nXHJcbiAgYnVja2V0Pzogc3RyaW5nXHJcbiAgcGF0aD86IHN0cmluZ1xyXG4gIHNhbXBsZURhdGE6IGFueVtdXHJcbiAgY29sdW1uczogc3RyaW5nW11cclxufVxyXG5cclxuLy8gXHU2QTIxXHU2MkRGXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XHJcbmNvbnN0IGRhdGFMaXN0ID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogJ1x1NzUxRlx1NEVBN1x1NjU3MFx1NjM2RVx1NEVEM1x1NUU5MycsXHJcbiAgICB0eXBlOiAnXHU2NTcwXHU2MzZFXHU1RTkzJyxcclxuICAgIGluZHVzdHJ5OiAnXHU1MjM2XHU5MDIwXHU0RTFBJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnXHU1QjU4XHU1MEE4XHU3NTFGXHU0RUE3XHU3RUJGXHU3Njg0XHU1QjlFXHU2NUY2XHU2NTcwXHU2MzZFXHVGRjBDXHU1MzA1XHU2MkVDXHU4QkJFXHU1OTA3XHU3MkI2XHU2MDAxXHUzMDAxXHU0RUE3XHU5MUNGXHUzMDAxXHU4RDI4XHU5MUNGXHU3QjQ5XHU2MzA3XHU2ODA3JyxcclxuICAgIGNyZWF0ZVRpbWU6ICcyMDI0LTAxLTE1IDEwOjMwOjAwJyxcclxuICAgIGRiVHlwZTogJ015U1FMJyxcclxuICAgIGhvc3Q6ICcxOTIuMTY4LjEuMTAwJyxcclxuICAgIHBvcnQ6IDMzMDYsXHJcbiAgICBkYk5hbWU6ICdwcm9kdWN0aW9uX2RiJyxcclxuICAgIHVzZXJuYW1lOiAncHJvZF9hZG1pbicsXHJcbiAgICBzYW1wbGVEYXRhOiBbXHJcbiAgICAgIHsgaWQ6IDEsIGRldmljZV9pZDogJ0RFVjAwMScsIHN0YXR1czogJ1x1OEZEMFx1ODg0Q1x1NEUyRCcsIG91dHB1dDogMTIwMCwgcXVhbGl0eTogJ1x1NTQwOFx1NjgzQycsIHRpbWVzdGFtcDogJzIwMjQtMDEtMTUgMTA6MDA6MDAnIH0sXHJcbiAgICAgIHsgaWQ6IDIsIGRldmljZV9pZDogJ0RFVjAwMicsIHN0YXR1czogJ1x1NUY4NVx1NjczQScsIG91dHB1dDogMCwgcXVhbGl0eTogJy0nLCB0aW1lc3RhbXA6ICcyMDI0LTAxLTE1IDEwOjAwOjAwJyB9LFxyXG4gICAgICB7IGlkOiAzLCBkZXZpY2VfaWQ6ICdERVYwMDMnLCBzdGF0dXM6ICdcdTdFRjRcdTYyQTRcdTRFMkQnLCBvdXRwdXQ6IDAsIHF1YWxpdHk6ICctJywgdGltZXN0YW1wOiAnMjAyNC0wMS0xNSAxMDowMDowMCcgfVxyXG4gICAgXSxcclxuICAgIGNvbHVtbnM6IFsnaWQnLCAnZGV2aWNlX2lkJywgJ3N0YXR1cycsICdvdXRwdXQnLCAncXVhbGl0eScsICd0aW1lc3RhbXAnXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiAnXHU1QkEyXHU2MjM3XHU4ODRDXHU0RTNBXHU1MjA2XHU2NzkwXHU2NTcwXHU2MzZFJyxcclxuICAgIHR5cGU6ICdDU1YnLFxyXG4gICAgaW5kdXN0cnk6ICdcdTkxRDFcdTg3OERcdTRFMUEnLFxyXG4gICAgZGVzY3JpcHRpb246ICdcdThCQjBcdTVGNTVcdTVCQTJcdTYyMzdcdTU3MjhBUFBcdTRFMEFcdTc2ODRcdTg4NENcdTRFM0FcdTY1NzBcdTYzNkVcdUZGMENcdTc1MjhcdTRFOEVcdTUyMDZcdTY3OTBcdTc1MjhcdTYyMzdcdTRFNjBcdTYwRUZcdTU0OENcdTUwNEZcdTU5N0QnLFxyXG4gICAgY3JlYXRlVGltZTogJzIwMjQtMDEtMTYgMTQ6MjA6MDAnLFxyXG4gICAgZmlsZVBhdGg6ICcvZGF0YS9jdXN0b21lcl9iZWhhdmlvcl8yMDI0MDEuY3N2JyxcclxuICAgIHNhbXBsZURhdGE6IFtcclxuICAgICAgeyB1c2VyX2lkOiAnVTEwMDEnLCBwYWdlOiAnXHU5OTk2XHU5ODc1JywgZHVyYXRpb246IDEyMCwgYWN0aW9uOiAnXHU3MEI5XHU1MUZCJywgdGltZXN0YW1wOiAnMjAyNC0wMS0xNiAxMDowMDowMCcgfSxcclxuICAgICAgeyB1c2VyX2lkOiAnVTEwMDInLCBwYWdlOiAnXHU0RUE3XHU1NEMxXHU4QkU2XHU2MEM1JywgZHVyYXRpb246IDQ1LCBhY3Rpb246ICdcdTZENEZcdTg5QzgnLCB0aW1lc3RhbXA6ICcyMDI0LTAxLTE2IDEwOjA1OjAwJyB9LFxyXG4gICAgICB7IHVzZXJfaWQ6ICdVMTAwMycsIHBhZ2U6ICdcdThEMkRcdTcyNjlcdThGNjYnLCBkdXJhdGlvbjogMzAsIGFjdGlvbjogJ1x1NkRGQlx1NTJBMCcsIHRpbWVzdGFtcDogJzIwMjQtMDEtMTYgMTA6MTA6MDAnIH1cclxuICAgIF0sXHJcbiAgICBjb2x1bW5zOiBbJ3VzZXJfaWQnLCAncGFnZScsICdkdXJhdGlvbicsICdhY3Rpb24nLCAndGltZXN0YW1wJ11cclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgbmFtZTogJ1x1NzI2OVx1ODA1NFx1N0Y1MVx1OEJCRVx1NTkwN1x1NjU3MFx1NjM2RScsXHJcbiAgICB0eXBlOiAnUzNcdTVCRjlcdThDNjFcdTVCNThcdTUwQTgnLFxyXG4gICAgaW5kdXN0cnk6ICdcdTUxOUNcdTRFMUEnLFxyXG4gICAgZGVzY3JpcHRpb246ICdcdTUxOUNcdTRFMUFcdTcyNjlcdTgwNTRcdTdGNTFcdThCQkVcdTU5MDdcdTkxQzdcdTk2QzZcdTc2ODRcdTczQUZcdTU4ODNcdTY1NzBcdTYzNkVcdUZGMENcdTUzMDVcdTYyRUNcdTZFMjlcdTVFQTZcdTMwMDFcdTZFN0ZcdTVFQTZcdTMwMDFcdTUxNDlcdTcxNjdcdTdCNDknLFxyXG4gICAgY3JlYXRlVGltZTogJzIwMjQtMDEtMTcgMDk6MTU6MDAnLFxyXG4gICAgczNUeXBlOiAnTWluSU8nLFxyXG4gICAgZW5kcG9pbnQ6ICdodHRwOi8vbWluaW8uZXhhbXBsZS5jb20nLFxyXG4gICAgcmVnaW9uOiAnY24tZWFzdC0xJyxcclxuICAgIGJ1Y2tldDogJ2lvdC1kYXRhJyxcclxuICAgIHBhdGg6ICdhZ3JpY3VsdHVyZS8yMDI0LzAxLycsXHJcbiAgICBzYW1wbGVEYXRhOiBbXHJcbiAgICAgIHsgZGV2aWNlX2lkOiAnSU9UMDAxJywgdGVtcGVyYXR1cmU6IDI1LjYsIGh1bWlkaXR5OiA2NSwgbGlnaHQ6IDEyMDAsIHRpbWVzdGFtcDogJzIwMjQtMDEtMTcgMDk6MDA6MDAnIH0sXHJcbiAgICAgIHsgZGV2aWNlX2lkOiAnSU9UMDAyJywgdGVtcGVyYXR1cmU6IDI2LjIsIGh1bWlkaXR5OiA2MywgbGlnaHQ6IDExNTAsIHRpbWVzdGFtcDogJzIwMjQtMDEtMTcgMDk6MDA6MDAnIH0sXHJcbiAgICAgIHsgZGV2aWNlX2lkOiAnSU9UMDAzJywgdGVtcGVyYXR1cmU6IDI0LjgsIGh1bWlkaXR5OiA2OCwgbGlnaHQ6IDEyNTAsIHRpbWVzdGFtcDogJzIwMjQtMDEtMTcgMDk6MDA6MDAnIH1cclxuICAgIF0sXHJcbiAgICBjb2x1bW5zOiBbJ2RldmljZV9pZCcsICd0ZW1wZXJhdHVyZScsICdodW1pZGl0eScsICdsaWdodCcsICd0aW1lc3RhbXAnXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBuYW1lOiAnXHU1MzNCXHU3NTk3XHU1RjcxXHU1MENGXHU2NTcwXHU2MzZFJyxcclxuICAgIHR5cGU6ICdTM1x1NUJGOVx1OEM2MVx1NUI1OFx1NTBBOCcsXHJcbiAgICBpbmR1c3RyeTogJ1x1NTM2Qlx1NzUxRlx1NTQ4Q1x1NzkzRVx1NEYxQVx1NURFNVx1NEY1QycsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1x1NTMzQlx1OTY2Mlx1NUY3MVx1NTBDRlx1NzlEMVx1NUI1OFx1NTBBOFx1NzY4NENUXHUzMDAxTVJJXHU3QjQ5XHU1MzNCXHU3NTk3XHU1RjcxXHU1MENGXHU2NTcwXHU2MzZFJyxcclxuICAgIGNyZWF0ZVRpbWU6ICcyMDI0LTAxLTE4IDExOjMwOjAwJyxcclxuICAgIHMzVHlwZTogJ1x1OTYzRlx1OTFDQ1x1NEU5MU9TUycsXHJcbiAgICBlbmRwb2ludDogJ29zcy1jbi1oYW5nemhvdS5hbGl5dW5jcy5jb20nLFxyXG4gICAgcmVnaW9uOiAnY24taGFuZ3pob3UnLFxyXG4gICAgYnVja2V0OiAnbWVkaWNhbC1pbWFnZXMnLFxyXG4gICAgcGF0aDogJ3JhZGlvbG9neS8yMDI0LzAxLycsXHJcbiAgICBzYW1wbGVEYXRhOiBbXHJcbiAgICAgIHsgcGF0aWVudF9pZDogJ1AxMDAxJywgdHlwZTogJ0NUJywgZGF0ZTogJzIwMjQtMDEtMTgnLCBkb2N0b3I6ICdcdTVGMjBcdTUzM0JcdTc1MUYnLCBzdGF0dXM6ICdcdTVERjJcdThCQ0FcdTY1QUQnIH0sXHJcbiAgICAgIHsgcGF0aWVudF9pZDogJ1AxMDAyJywgdHlwZTogJ01SSScsIGRhdGU6ICcyMDI0LTAxLTE4JywgZG9jdG9yOiAnXHU2NzRFXHU1MzNCXHU3NTFGJywgc3RhdHVzOiAnXHU1Rjg1XHU4QkNBXHU2NUFEJyB9LFxyXG4gICAgICB7IHBhdGllbnRfaWQ6ICdQMTAwMycsIHR5cGU6ICdYXHU1MTQ5JywgZGF0ZTogJzIwMjQtMDEtMTgnLCBkb2N0b3I6ICdcdTczOEJcdTUzM0JcdTc1MUYnLCBzdGF0dXM6ICdcdTVERjJcdThCQ0FcdTY1QUQnIH1cclxuICAgIF0sXHJcbiAgICBjb2x1bW5zOiBbJ3BhdGllbnRfaWQnLCAndHlwZScsICdkYXRlJywgJ2RvY3RvcicsICdzdGF0dXMnXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBuYW1lOiAnXHU1QjY2XHU3NTFGXHU2MjEwXHU3RUU5XHU2NTcwXHU2MzZFXHU1RTkzJyxcclxuICAgIHR5cGU6ICdcdTY1NzBcdTYzNkVcdTVFOTMnLFxyXG4gICAgaW5kdXN0cnk6ICdcdTY1NTlcdTgwQjInLFxyXG4gICAgZGVzY3JpcHRpb246ICdcdTVCNThcdTUwQThcdTVCNjZcdTc1MUZcdTU0MDRcdTc5RDFcdTc2RUVcdTYyMTBcdTdFRTlcdTU0OENcdThCQzRcdTRFRjdcdTY1NzBcdTYzNkUnLFxyXG4gICAgY3JlYXRlVGltZTogJzIwMjQtMDEtMTkgMDg6NDU6MDAnLFxyXG4gICAgZGJUeXBlOiAnUG9zdGdyZVNRTCcsXHJcbiAgICBob3N0OiAnMTkyLjE2OC4yLjEwMCcsXHJcbiAgICBwb3J0OiA1NDMyLFxyXG4gICAgZGJOYW1lOiAnZWR1Y2F0aW9uX2RiJyxcclxuICAgIHVzZXJuYW1lOiAnZWR1X2FkbWluJyxcclxuICAgIHNhbXBsZURhdGE6IFtcclxuICAgICAgeyBzdHVkZW50X2lkOiAnUzEwMDEnLCBuYW1lOiAnXHU1RjIwXHU0RTA5JywgbWF0aDogOTUsIGVuZ2xpc2g6IDg4LCBwaHlzaWNzOiA5MiwgdG90YWw6IDI3NSB9LFxyXG4gICAgICB7IHN0dWRlbnRfaWQ6ICdTMTAwMicsIG5hbWU6ICdcdTY3NEVcdTU2REInLCBtYXRoOiA4OCwgZW5nbGlzaDogOTIsIHBoeXNpY3M6IDg1LCB0b3RhbDogMjY1IH0sXHJcbiAgICAgIHsgc3R1ZGVudF9pZDogJ1MxMDAzJywgbmFtZTogJ1x1NzM4Qlx1NEU5NCcsIG1hdGg6IDkwLCBlbmdsaXNoOiA4NSwgcGh5c2ljczogODgsIHRvdGFsOiAyNjMgfVxyXG4gICAgXSxcclxuICAgIGNvbHVtbnM6IFsnc3R1ZGVudF9pZCcsICduYW1lJywgJ21hdGgnLCAnZW5nbGlzaCcsICdwaHlzaWNzJywgJ3RvdGFsJ11cclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgbmFtZTogJ1x1NUVGQVx1N0I1MVx1OTg3OVx1NzZFRVx1OEZEQlx1NUVBNlx1NjU3MFx1NjM2RScsXHJcbiAgICB0eXBlOiAnQ1NWJyxcclxuICAgIGluZHVzdHJ5OiAnXHU1RUZBXHU3QjUxXHU0RTFBJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnXHU4QkIwXHU1RjU1XHU1RUZBXHU3QjUxXHU5ODc5XHU3NkVFXHU3Njg0XHU4RkRCXHU1RUE2XHUzMDAxXHU4RDI4XHU5MUNGXHU1NDhDXHU1Qjg5XHU1MTY4XHU2NTcwXHU2MzZFJyxcclxuICAgIGNyZWF0ZVRpbWU6ICcyMDI0LTAxLTIwIDEzOjIwOjAwJyxcclxuICAgIGZpbGVQYXRoOiAnL2RhdGEvcHJvamVjdF9wcm9ncmVzc18yMDI0MDEuY3N2JyxcclxuICAgIHNhbXBsZURhdGE6IFtcclxuICAgICAgeyBwcm9qZWN0X2lkOiAnUEowMDEnLCBwaGFzZTogJ1x1NTczMFx1NTdGQVx1NURFNVx1N0EwQicsIHByb2dyZXNzOiA4NSwgcXVhbGl0eTogJ1x1ODI2Rlx1NTk3RCcsIHNhZmV0eTogJ1x1NkI2M1x1NUUzOCcsIGRhdGU6ICcyMDI0LTAxLTIwJyB9LFxyXG4gICAgICB7IHByb2plY3RfaWQ6ICdQSjAwMicsIHBoYXNlOiAnXHU0RTNCXHU0RjUzXHU3RUQzXHU2Nzg0JywgcHJvZ3Jlc3M6IDYwLCBxdWFsaXR5OiAnXHU4MjZGXHU1OTdEJywgc2FmZXR5OiAnXHU2QjYzXHU1RTM4JywgZGF0ZTogJzIwMjQtMDEtMjAnIH0sXHJcbiAgICAgIHsgcHJvamVjdF9pZDogJ1BKMDAzJywgcGhhc2U6ICdcdTg4QzVcdTRGRUVcdTVERTVcdTdBMEInLCBwcm9ncmVzczogMzAsIHF1YWxpdHk6ICdcdTgyNkZcdTU5N0QnLCBzYWZldHk6ICdcdTZCNjNcdTVFMzgnLCBkYXRlOiAnMjAyNC0wMS0yMCcgfVxyXG4gICAgXSxcclxuICAgIGNvbHVtbnM6IFsncHJvamVjdF9pZCcsICdwaGFzZScsICdwcm9ncmVzcycsICdxdWFsaXR5JywgJ3NhZmV0eScsICdkYXRlJ11cclxuICB9XHJcbl1cclxuXHJcbmNvbnN0IG1vY2tEYXRhOiBNb2NrTWV0aG9kW10gPSBbXHJcbiAgLy8gXHU4M0I3XHU1M0Q2XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XHJcbiAge1xyXG4gICAgdXJsOiAnL2FwaS9leHBsb3JlLWRhdGEvbGlzdCcsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcmVzcG9uc2U6ICh7IHF1ZXJ5IH0pID0+IHtcclxuICAgICAgY29uc3QgeyBuYW1lLCBpbmR1c3RyeSwgY3VycmVudFBhZ2UsIHBhZ2VTaXplIH0gPSBxdWVyeVxyXG4gICAgICBsZXQgZmlsdGVyZWRMaXN0ID0gWy4uLmRhdGFMaXN0XVxyXG5cclxuICAgICAgLy8gXHU2ODM5XHU2MzZFXHU2N0U1XHU4QkUyXHU2NzYxXHU0RUY2XHU4RkM3XHU2RUU0XHJcbiAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgZmlsdGVyZWRMaXN0ID0gZmlsdGVyZWRMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0ubmFtZS5pbmNsdWRlcyhuYW1lKSlcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5kdXN0cnkpIHtcclxuICAgICAgICBmaWx0ZXJlZExpc3QgPSBmaWx0ZXJlZExpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pbmR1c3RyeSA9PT0gaW5kdXN0cnkpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFx1NTIwNlx1OTg3NVx1NTkwNFx1NzQwNlxyXG4gICAgICBjb25zdCB0b3RhbCA9IGZpbHRlcmVkTGlzdC5sZW5ndGhcclxuICAgICAgY29uc3Qgc3RhcnQgPSAoTnVtYmVyKGN1cnJlbnRQYWdlKSAtIDEpICogTnVtYmVyKHBhZ2VTaXplKVxyXG4gICAgICBjb25zdCBlbmQgPSBzdGFydCArIE51bWJlcihwYWdlU2l6ZSlcclxuICAgICAgY29uc3QgbGlzdCA9IGZpbHRlcmVkTGlzdC5zbGljZShzdGFydCwgZW5kKVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb2RlOiAyMDAsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbGlzdCxcclxuICAgICAgICAgIHRvdGFsLFxyXG4gICAgICAgICAgY3VycmVudFBhZ2U6IE51bWJlcihjdXJyZW50UGFnZSksXHJcbiAgICAgICAgICBwYWdlU2l6ZTogTnVtYmVyKHBhZ2VTaXplKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8vIFx1ODNCN1x1NTNENlx1NjU3MFx1NjM2RVx1OEJFNlx1NjBDNVxyXG4gIHtcclxuICAgIHVybDogJy9hcGkvZXhwbG9yZS1kYXRhLzppZCcsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcmVzcG9uc2U6ICh7IHF1ZXJ5IH0pID0+IHtcclxuICAgICAgY29uc3QgeyBpZCB9ID0gcXVlcnlcclxuICAgICAgY29uc3QgZGV0YWlsID0gZGF0YUxpc3QuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IE51bWJlcihpZCkpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY29kZTogMjAwLFxyXG4gICAgICAgIGRhdGE6IGRldGFpbFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gXHU2NUIwXHU1ODlFXHU2NTcwXHU2MzZFXHJcbiAge1xyXG4gICAgdXJsOiAnL2FwaS9leHBsb3JlLWRhdGEnLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICByZXNwb25zZTogKHsgYm9keSB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0RhdGEgPSB7XHJcbiAgICAgICAgaWQ6IGRhdGFMaXN0Lmxlbmd0aCArIDEsXHJcbiAgICAgICAgY3JlYXRlVGltZTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLFxyXG4gICAgICAgIC4uLmJvZHlcclxuICAgICAgfVxyXG4gICAgICBkYXRhTGlzdC5wdXNoKG5ld0RhdGEpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY29kZTogMjAwLFxyXG4gICAgICAgIGRhdGE6IG5ld0RhdGFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8vIFx1N0YxNlx1OEY5MVx1NjU3MFx1NjM2RVxyXG4gIHtcclxuICAgIHVybDogJy9hcGkvZXhwbG9yZS1kYXRhLzppZCcsXHJcbiAgICBtZXRob2Q6ICdwdXQnLFxyXG4gICAgcmVzcG9uc2U6ICh7IGJvZHkgfSkgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGRhdGFMaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IGJvZHkuaWQpXHJcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBkYXRhTGlzdFtpbmRleF0gPSB7IC4uLmRhdGFMaXN0W2luZGV4XSwgLi4uYm9keSB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb2RlOiAyMDAsXHJcbiAgICAgICAgZGF0YTogZGF0YUxpc3RbaW5kZXhdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvLyBcdTUyMjBcdTk2NjRcdTY1NzBcdTYzNkVcclxuICB7XHJcbiAgICB1cmw6ICcvYXBpL2V4cGxvcmUtZGF0YS86aWQnLFxyXG4gICAgbWV0aG9kOiAnZGVsZXRlJyxcclxuICAgIHJlc3BvbnNlOiAoeyBxdWVyeSB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHF1ZXJ5XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZGF0YUxpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PT0gTnVtYmVyKGlkKSlcclxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIGRhdGFMaXN0LnNwbGljZShpbmRleCwgMSlcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvZGU6IDIwMCxcclxuICAgICAgICBkYXRhOiBudWxsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIFxyXG4gIC8vIFx1ODNCN1x1NTNENlx1ODg0Q1x1NEUxQVx1OTAwOVx1OTg3OVxyXG4gIHtcclxuICAgIHVybDogJy9hcGkvY29tbW9uL2luZHVzdHJ5LW9wdGlvbnMnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHJlc3BvbnNlOiAoKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY29kZTogMjAwLFxyXG4gICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgIHsgbGFiZWw6ICdcdTUyMzZcdTkwMjBcdTRFMUEnLCB2YWx1ZTogJ1x1NTIzNlx1OTAyMFx1NEUxQScgfSxcclxuICAgICAgICAgIHsgbGFiZWw6ICdcdTUxOUNcdTRFMUEnLCB2YWx1ZTogJ1x1NTE5Q1x1NEUxQScgfSxcclxuICAgICAgICAgIHsgbGFiZWw6ICdcdTVFRkFcdTdCNTFcdTRFMUEnLCB2YWx1ZTogJ1x1NUVGQVx1N0I1MVx1NEUxQScgfSxcclxuICAgICAgICAgIHsgbGFiZWw6ICdcdTkxRDFcdTg3OERcdTRFMUEnLCB2YWx1ZTogJ1x1OTFEMVx1ODc4RFx1NEUxQScgfSxcclxuICAgICAgICAgIHsgbGFiZWw6ICdcdTY1NTlcdTgwQjInLCB2YWx1ZTogJ1x1NjU1OVx1ODBCMicgfSxcclxuICAgICAgICAgIHsgbGFiZWw6ICdcdTUzNkJcdTc1MUZcdTU0OENcdTc5M0VcdTRGMUFcdTVERTVcdTRGNUMnLCB2YWx1ZTogJ1x1NTM2Qlx1NzUxRlx1NTQ4Q1x1NzkzRVx1NEYxQVx1NURFNVx1NEY1QycgfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9ja0RhdGEgIiwgImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiRDpcXFxcY3Vyc29yQ29kZVxcXFxcdTY1NzBcdTYzNkVcdTg5ODFcdTdEMjBcdThGRDBcdTg0MjVcdTVFNzNcdTUzRjBcXFxcXHU2NTcwXHU2MzZFXHU3QkExXHU3NDA2XHU1QjUwXHU3Q0ZCXHU3RURGXFxcXHBhY2thZ2VzXFxcXGRhdGEtZXhwbG9yZVxcXFxzcmNcXFxcdXRpbHNcXFxccmVxdWVzdC50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCJEOlxcXFxjdXJzb3JDb2RlXFxcXFx1NjU3MFx1NjM2RVx1ODk4MVx1N0QyMFx1OEZEMFx1ODQyNVx1NUU3M1x1NTNGMFxcXFxcdTY1NzBcdTYzNkVcdTdCQTFcdTc0MDZcdTVCNTBcdTdDRkJcdTdFREZcXFxccGFja2FnZXNcXFxcZGF0YS1leHBsb3JlXFxcXHNyY1xcXFx1dGlsc1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vRDovY3Vyc29yQ29kZS8lRTYlOTUlQjAlRTYlOEQlQUUlRTglQTYlODElRTclQjQlQTAlRTglQkYlOTAlRTglOTAlQTUlRTUlQjklQjMlRTUlOEYlQjAvJUU2JTk1JUIwJUU2JThEJUFFJUU3JUFFJUExJUU3JTkwJTg2JUU1JUFEJTkwJUU3JUIzJUJCJUU3JUJCJTlGL3BhY2thZ2VzL2RhdGEtZXhwbG9yZS9zcmMvdXRpbHMvcmVxdWVzdC50c1wiO2ltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB0eXBlIHsgQXhpb3NJbnN0YW5jZSwgQXhpb3NSZXF1ZXN0Q29uZmlnLCBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBFbE1lc3NhZ2UgfSBmcm9tICdlbGVtZW50LXBsdXMnXG5cbi8vIFx1NTIxQlx1NUVGQWF4aW9zXHU1QjlFXHU0RjhCXG5jb25zdCBzZXJ2aWNlOiBBeGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogJy9hcGknLCAvLyBcdThCQkVcdTdGNkVcdTdFREZcdTRFMDBcdTc2ODRcdThCRjdcdTZDNDJcdTUyNERcdTdGMDBcbiAgdGltZW91dDogMTUwMDAsIC8vIFx1OEJGN1x1NkM0Mlx1OEQ4NVx1NjVGNlx1NjVGNlx1OTVGNFxuICBoZWFkZXJzOiB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnXG4gIH1cbn0pXG5cbi8vIFx1OEJGN1x1NkM0Mlx1NjJFNlx1NjIyQVx1NTY2OFxuc2VydmljZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXG4gIChjb25maWcpID0+IHtcbiAgICAvLyBcdTU3MjhcdThCRjdcdTZDNDJcdTUzRDFcdTkwMDFcdTRFNEJcdTUyNERcdTUwNUFcdTRFMDBcdTRFOUJcdTU5MDRcdTc0MDZcbiAgICByZXR1cm4gY29uZmlnXG4gIH0sXG4gIChlcnJvcikgPT4ge1xuICAgIC8vIFx1NTkwNFx1NzQwNlx1OEJGN1x1NkM0Mlx1OTUxOVx1OEJFRlxuICAgIGNvbnNvbGUuZXJyb3IoJ1x1OEJGN1x1NkM0Mlx1OTUxOVx1OEJFRjonLCBlcnJvcilcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gIH1cbilcblxuLy8gXHU1NENEXHU1RTk0XHU2MkU2XHU2MjJBXHU1NjY4XG5zZXJ2aWNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXG4gIChyZXNwb25zZTogQXhpb3NSZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IHJlc3BvbnNlLmRhdGFcbiAgICAvLyBcdTY4MzlcdTYzNkVcdTgxRUFcdTVCOUFcdTRFNDlcdTk1MTlcdThCRUZcdTc4MDFcdTUyMjRcdTY1QURcdThCRjdcdTZDNDJcdTY2MkZcdTU0MjZcdTYyMTBcdTUyOUZcbiAgICBpZiAocmVzLmNvZGUgPT09IDIwMCkge1xuICAgICAgLy8gXHU4QkY3XHU2QzQyXHU2MjEwXHU1MjlGXG4gICAgICByZXR1cm4gcmVzXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFx1NTkwNFx1NzQwNlx1NEUxQVx1NTJBMVx1OTUxOVx1OEJFRlxuICAgICAgRWxNZXNzYWdlLmVycm9yKHJlcy5tZXNzYWdlIHx8ICdcdTY0Q0RcdTRGNUNcdTU5MzFcdThEMjUnKVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXMubWVzc2FnZSB8fCAnXHU2NENEXHU0RjVDXHU1OTMxXHU4RDI1JykpXG4gICAgfVxuICB9LFxuICAoZXJyb3IpID0+IHtcbiAgICAvLyBcdTU5MDRcdTc0MDYgSFRUUCBcdTdGNTFcdTdFRENcdTk1MTlcdThCRUZcbiAgICBsZXQgbWVzc2FnZSA9ICcnXG4gICAgLy8gSFRUUCBcdTcyQjZcdTYwMDFcdTc4MDFcbiAgICBjb25zdCBzdGF0dXMgPSBlcnJvci5yZXNwb25zZT8uc3RhdHVzXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgNDAwOlxuICAgICAgICBtZXNzYWdlID0gJ1x1OEJGN1x1NkM0Mlx1OTUxOVx1OEJFRidcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgNDAxOlxuICAgICAgICBtZXNzYWdlID0gJ1x1NjcyQVx1NjM4OFx1Njc0MydcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgNDAzOlxuICAgICAgICBtZXNzYWdlID0gJ1x1NjJEMlx1N0VERFx1OEJCRlx1OTVFRSdcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgNDA0OlxuICAgICAgICBtZXNzYWdlID0gJ1x1OEJGN1x1NkM0Mlx1NTczMFx1NTc0MFx1NTFGQVx1OTUxOSdcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgNDA4OlxuICAgICAgICBtZXNzYWdlID0gJ1x1OEJGN1x1NkM0Mlx1OEQ4NVx1NjVGNidcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgNTAwOlxuICAgICAgICBtZXNzYWdlID0gJ1x1NjcwRFx1NTJBMVx1NTY2OFx1NTE4NVx1OTBFOFx1OTUxOVx1OEJFRidcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgNTAxOlxuICAgICAgICBtZXNzYWdlID0gJ1x1NjcwRFx1NTJBMVx1NjcyQVx1NUI5RVx1NzNCMCdcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgNTAyOlxuICAgICAgICBtZXNzYWdlID0gJ1x1N0Y1MVx1NTE3M1x1OTUxOVx1OEJFRidcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgNTAzOlxuICAgICAgICBtZXNzYWdlID0gJ1x1NjcwRFx1NTJBMVx1NEUwRFx1NTNFRlx1NzUyOCdcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgNTA0OlxuICAgICAgICBtZXNzYWdlID0gJ1x1N0Y1MVx1NTE3M1x1OEQ4NVx1NjVGNidcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgNTA1OlxuICAgICAgICBtZXNzYWdlID0gJ0hUVFBcdTcyNDhcdTY3MkNcdTRFMERcdTUzRDdcdTY1MkZcdTYzMDEnXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBtZXNzYWdlID0gJ1x1N0Y1MVx1N0VEQ1x1OEZERVx1NjNBNVx1NjU0NVx1OTY5QydcbiAgICB9XG4gICAgXG4gICAgY29uc29sZS5lcnJvcignXHU1NENEXHU1RTk0XHU5NTE5XHU4QkVGOicsIGVycm9yKVxuICAgIEVsTWVzc2FnZS5lcnJvcihtZXNzYWdlKVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcbiAgfVxuKVxuXG4vLyBcdTVCRkNcdTUxRkEgYXhpb3MgXHU1QjlFXHU0RjhCXG5leHBvcnQgZGVmYXVsdCBzZXJ2aWNlICIsICJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIkQ6XFxcXGN1cnNvckNvZGVcXFxcXHU2NTcwXHU2MzZFXHU4OTgxXHU3RDIwXHU4RkQwXHU4NDI1XHU1RTczXHU1M0YwXFxcXFx1NjU3MFx1NjM2RVx1N0JBMVx1NzQwNlx1NUI1MFx1N0NGQlx1N0VERlxcXFxwYWNrYWdlc1xcXFxkYXRhLWV4cGxvcmVcXFxcc3JjXFxcXGFwaVxcXFx0YXNrLXNjaGVkdWxlLW1vY2sudHNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiRDpcXFxcY3Vyc29yQ29kZVxcXFxcdTY1NzBcdTYzNkVcdTg5ODFcdTdEMjBcdThGRDBcdTg0MjVcdTVFNzNcdTUzRjBcXFxcXHU2NTcwXHU2MzZFXHU3QkExXHU3NDA2XHU1QjUwXHU3Q0ZCXHU3RURGXFxcXHBhY2thZ2VzXFxcXGRhdGEtZXhwbG9yZVxcXFxzcmNcXFxcYXBpXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9EOi9jdXJzb3JDb2RlLyVFNiU5NSVCMCVFNiU4RCVBRSVFOCVBNiU4MSVFNyVCNCVBMCVFOCVCRiU5MCVFOCU5MCVBNSVFNSVCOSVCMyVFNSU4RiVCMC8lRTYlOTUlQjAlRTYlOEQlQUUlRTclQUUlQTElRTclOTAlODYlRTUlQUQlOTAlRTclQjMlQkIlRTclQkIlOUYvcGFja2FnZXMvZGF0YS1leHBsb3JlL3NyYy9hcGkvdGFzay1zY2hlZHVsZS1tb2NrLnRzXCI7aW1wb3J0IHsgVGFza1N0YXR1cyB9IGZyb20gJy4vdGFzay1zY2hlZHVsZSdcclxuaW1wb3J0IHsgUmFuZG9tIH0gZnJvbSAnbW9ja2pzJ1xyXG5cclxuLy8gXHU3NTFGXHU2MjEwXHU5NjhGXHU2NzNBXHU2NUU1XHU2NzFGXHVGRjA4XHU4RkM3XHU1M0JCM1x1NTkyOVx1NTE4NVx1NzY4NFx1OTY4Rlx1NjczQVx1NjVGNlx1OTVGNFx1RkYwOVxyXG5mdW5jdGlvbiByYW5kb21QYXN0RGF0ZSgpIHtcclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXHJcbiAgY29uc3QgcGFzdFRpbWUgPSBub3cuZ2V0VGltZSgpIC0gUmFuZG9tLmludGVnZXIoMSwgNzIpICogNjAgKiA2MCAqIDEwMDAgLy8gMS03Mlx1NUMwRlx1NjVGNlx1NTI0RFxyXG4gIHJldHVybiBuZXcgRGF0ZShwYXN0VGltZSkudG9JU09TdHJpbmcoKS5yZXBsYWNlKCdUJywgJyAnKS5zdWJzdHJpbmcoMCwgMTkpXHJcbn1cclxuXHJcbi8vIFx1NzUxRlx1NjIxMFx1OTY4Rlx1NjczQVx1NjVFNVx1NjcxRlx1RkYwOFx1NjcyQVx1Njc2NTEtMjRcdTVDMEZcdTY1RjZcdTUxODVcdTc2ODRcdTk2OEZcdTY3M0FcdTY1RjZcdTk1RjRcdUZGMDlcclxuZnVuY3Rpb24gcmFuZG9tRnV0dXJlRGF0ZSgpIHtcclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXHJcbiAgY29uc3QgZnV0dXJlVGltZSA9IG5vdy5nZXRUaW1lKCkgKyBSYW5kb20uaW50ZWdlcigxLCAyNCkgKiA2MCAqIDYwICogMTAwMCAvLyAxLTI0XHU1QzBGXHU2NUY2XHU1NDBFXHJcbiAgcmV0dXJuIG5ldyBEYXRlKGZ1dHVyZVRpbWUpLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgnVCcsICcgJykuc3Vic3RyaW5nKDAsIDE5KVxyXG59XHJcblxyXG4vLyBcdTY4M0NcdTVGMEZcdTUzMTZcdTY1RjZcdTk1RjRcdTk1RjRcdTk2OTRcdTRFM0FcdTY2MTNcdThCRkJcdTc2ODRcdTY4M0NcdTVGMEZcclxuZnVuY3Rpb24gZm9ybWF0VGltZUludGVydmFsKG1pbnV0ZXM6IG51bWJlcikge1xyXG4gIGlmIChtaW51dGVzIDwgNjApIHtcclxuICAgIHJldHVybiBgJHttaW51dGVzfVx1NTIwNlx1OTQ5RmBcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyA2MClcclxuICAgIGNvbnN0IHJlbWFpbmluZ01pbnV0ZXMgPSBtaW51dGVzICUgNjBcclxuICAgIHJldHVybiByZW1haW5pbmdNaW51dGVzID4gMCA/IGAke2hvdXJzfVx1NUMwRlx1NjVGNiR7cmVtYWluaW5nTWludXRlc31cdTUyMDZcdTk0OUZgIDogYCR7aG91cnN9XHU1QzBGXHU2NUY2YFxyXG4gIH1cclxufVxyXG5cclxuLy8gXHU5NjhGXHU2NzNBXHU0RUE3XHU1NEMxXHU1NDBEXHU3OUYwXHJcbmNvbnN0IHByb2R1Y3ROYW1lcyA9IFtcclxuICAnXHU1MjM2XHU5MDIwXHU0RTFBXHU3NTFGXHU0RUE3XHU2NTcwXHU2MzZFXHU1MjA2XHU2NzkwXHU0RUE3XHU1NEMxJyxcclxuICAnXHU1MTlDXHU0RTFBXHU2QzE0XHU4QzYxXHU2NTcwXHU2MzZFXHU1MjA2XHU2NzkwXHU0RUE3XHU1NEMxJyxcclxuICAnXHU5MUQxXHU4NzhEXHU0RUE0XHU2NjEzXHU2NTcwXHU2MzZFXHU1MjA2XHU2NzkwXHU0RUE3XHU1NEMxJyxcclxuICAnXHU1MzNCXHU3NTk3XHU1MDY1XHU1RUI3XHU2NTcwXHU2MzZFXHU1MjA2XHU2NzkwXHU0RUE3XHU1NEMxJyxcclxuICAnXHU5NkY2XHU1NTJFXHU5NTAwXHU1NTJFXHU2NTcwXHU2MzZFXHU1MjA2XHU2NzkwXHU0RUE3XHU1NEMxJyxcclxuICAnXHU3MjY5XHU2RDQxXHU4RkQwXHU4RjkzXHU2NTcwXHU2MzZFXHU1MjA2XHU2NzkwXHU0RUE3XHU1NEMxJyxcclxuICAnXHU4MEZEXHU2RTkwXHU2RDg4XHU4MDE3XHU2NTcwXHU2MzZFXHU1MjA2XHU2NzkwXHU0RUE3XHU1NEMxJyxcclxuICAnXHU2NTU5XHU4MEIyXHU1QjY2XHU0RTYwXHU2NTcwXHU2MzZFXHU1MjA2XHU2NzkwXHU0RUE3XHU1NEMxJyxcclxuICAnXHU2MjNGXHU1NzMwXHU0RUE3XHU2NTcwXHU2MzZFXHU1MjA2XHU2NzkwXHU0RUE3XHU1NEMxJyxcclxuICAnXHU2NUM1XHU2RTM4XHU1MUZBXHU4ODRDXHU2NTcwXHU2MzZFXHU1MjA2XHU2NzkwXHU0RUE3XHU1NEMxJ1xyXG5dXHJcblxyXG4vLyBcdTc1MUZcdTYyMTBcdTk2OEZcdTY3M0FJRFxyXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUlkKCkge1xyXG4gIHJldHVybiBgVEFTSy0ke1JhbmRvbS5zdHJpbmcoJzAxMjM0NTY3ODknLCA4KX1gXHJcbn1cclxuXHJcbi8vIFx1NzUxRlx1NjIxMFx1OEZEMFx1ODg0Q1x1NEUyRFx1NEVGQlx1NTJBMVx1NzY4NFx1NkEyMVx1NjJERlx1NjU3MFx1NjM2RVxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSdW5uaW5nVGFza3MoY291bnQ6IG51bWJlcikge1xyXG4gIGNvbnN0IHRhc2tzID0gW11cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IHJhbmRvbVBhc3REYXRlKClcclxuICAgIHRhc2tzLnB1c2goe1xyXG4gICAgICBpZDogZ2VuZXJhdGVSYW5kb21JZCgpLFxyXG4gICAgICBkYXRhUHJvZHVjdE5hbWU6IFJhbmRvbS5waWNrKHByb2R1Y3ROYW1lcyksXHJcbiAgICAgIHByb2dyZXNzOiBSYW5kb20uaW50ZWdlcigxMCwgOTUpLFxyXG4gICAgICBzdGFydFRpbWUsXHJcbiAgICAgIGV4cGVjdGVkRW5kVGltZTogcmFuZG9tRnV0dXJlRGF0ZSgpLFxyXG4gICAgICBzdGF0dXM6IFJhbmRvbS5waWNrKFtUYXNrU3RhdHVzLlJVTk5JTkcsIFRhc2tTdGF0dXMuUEFVU0VELCBUYXNrU3RhdHVzLkVSUk9SXSksXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gdGFza3NcclxufVxyXG5cclxuLy8gXHU3NTFGXHU2MjEwXHU2MzkyXHU5NjFGXHU0RTJEXHU0RUZCXHU1MkExXHU3Njg0XHU2QTIxXHU2MkRGXHU2NTcwXHU2MzZFXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVF1ZXVlZFRhc2tzKGNvdW50OiBudW1iZXIpIHtcclxuICBjb25zdCB0YXNrcyA9IFtdXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICB0YXNrcy5wdXNoKHtcclxuICAgICAgaWQ6IGdlbmVyYXRlUmFuZG9tSWQoKSxcclxuICAgICAgZGF0YVByb2R1Y3ROYW1lOiBSYW5kb20ucGljayhwcm9kdWN0TmFtZXMpLFxyXG4gICAgICBzdWJtaXRUaW1lOiByYW5kb21QYXN0RGF0ZSgpLFxyXG4gICAgICBxdWV1ZVBvc2l0aW9uOiBpICsgMSxcclxuICAgICAgZXhwZWN0ZWRXYWl0VGltZTogZm9ybWF0VGltZUludGVydmFsKFJhbmRvbS5pbnRlZ2VyKDE1LCA0ODApKSwgLy8gMTVcdTUyMDZcdTk0OUZcdTUyMzA4XHU1QzBGXHU2NUY2XHU0RTRCXHU5NUY0XHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gdGFza3NcclxufVxyXG5cclxuLy8gXHU2QTIxXHU2MkRGXHU4M0I3XHU1M0Q2XHU4RkQwXHU4ODRDXHU0RTJEXHU0RUZCXHU1MkExXHU1MjE3XHU4ODY4XHU3Njg0XHU2M0E1XHU1M0UzXHJcbmV4cG9ydCBmdW5jdGlvbiBtb2NrR2V0UnVubmluZ1Rhc2tMaXN0KHBhcmFtczogYW55KSB7XHJcbiAgY29uc3QgeyBpZCwgZGF0YVByb2R1Y3ROYW1lLCBzdGF0dXMsIGN1cnJlbnRQYWdlLCBwYWdlU2l6ZSB9ID0gcGFyYW1zXHJcbiAgXHJcbiAgLy8gXHU3NTFGXHU2MjEwXHU2MDNCXHU2NTcwXHU2MzZFXHJcbiAgbGV0IGFsbFRhc2tzID0gZ2VuZXJhdGVSdW5uaW5nVGFza3MoNTApXHJcbiAgXHJcbiAgLy8gXHU2ODM5XHU2MzZFXHU2NDFDXHU3RDIyXHU2NzYxXHU0RUY2XHU4RkM3XHU2RUU0XHJcbiAgaWYgKGlkKSB7XHJcbiAgICBhbGxUYXNrcyA9IGFsbFRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suaWQuaW5jbHVkZXMoaWQpKVxyXG4gIH1cclxuICBpZiAoZGF0YVByb2R1Y3ROYW1lKSB7XHJcbiAgICBhbGxUYXNrcyA9IGFsbFRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suZGF0YVByb2R1Y3ROYW1lLmluY2x1ZGVzKGRhdGFQcm9kdWN0TmFtZSkpXHJcbiAgfVxyXG4gIGlmIChzdGF0dXMpIHtcclxuICAgIGFsbFRhc2tzID0gYWxsVGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5zdGF0dXMgPT09IHN0YXR1cylcclxuICB9XHJcbiAgXHJcbiAgLy8gXHU4QkExXHU3Qjk3XHU2MDNCXHU2NTcwXHJcbiAgY29uc3QgdG90YWwgPSBhbGxUYXNrcy5sZW5ndGhcclxuICBcclxuICAvLyBcdTUyMDZcdTk4NzVcclxuICBjb25zdCBzdGFydCA9IChjdXJyZW50UGFnZSAtIDEpICogcGFnZVNpemVcclxuICBjb25zdCBlbmQgPSBzdGFydCArIHBhZ2VTaXplXHJcbiAgY29uc3QgbGlzdCA9IGFsbFRhc2tzLnNsaWNlKHN0YXJ0LCBlbmQpXHJcbiAgXHJcbiAgcmV0dXJuIHtcclxuICAgIGNvZGU6IDIwMCxcclxuICAgIGRhdGE6IHtcclxuICAgICAgbGlzdCxcclxuICAgICAgdG90YWwsXHJcbiAgICAgIGN1cnJlbnRQYWdlLFxyXG4gICAgICBwYWdlU2l6ZVxyXG4gICAgfSxcclxuICAgIG1lc3NhZ2U6ICdcdTgzQjdcdTUzRDZcdTYyMTBcdTUyOUYnXHJcbiAgfVxyXG59XHJcblxyXG4vLyBcdTZBMjFcdTYyREZcdTgzQjdcdTUzRDZcdTYzOTJcdTk2MUZcdTRFMkRcdTRFRkJcdTUyQTFcdTUyMTdcdTg4NjhcdTc2ODRcdTYzQTVcdTUzRTNcclxuZXhwb3J0IGZ1bmN0aW9uIG1vY2tHZXRRdWV1ZWRUYXNrTGlzdChwYXJhbXM6IGFueSkge1xyXG4gIGNvbnN0IHsgaWQsIGRhdGFQcm9kdWN0TmFtZSwgY3VycmVudFBhZ2UsIHBhZ2VTaXplIH0gPSBwYXJhbXNcclxuICBcclxuICAvLyBcdTc1MUZcdTYyMTBcdTYwM0JcdTY1NzBcdTYzNkVcclxuICBsZXQgYWxsVGFza3MgPSBnZW5lcmF0ZVF1ZXVlZFRhc2tzKDMwKVxyXG4gIFxyXG4gIC8vIFx1NjgzOVx1NjM2RVx1NjQxQ1x1N0QyMlx1Njc2MVx1NEVGNlx1OEZDN1x1NkVFNFxyXG4gIGlmIChpZCkge1xyXG4gICAgYWxsVGFza3MgPSBhbGxUYXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmlkLmluY2x1ZGVzKGlkKSlcclxuICB9XHJcbiAgaWYgKGRhdGFQcm9kdWN0TmFtZSkge1xyXG4gICAgYWxsVGFza3MgPSBhbGxUYXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmRhdGFQcm9kdWN0TmFtZS5pbmNsdWRlcyhkYXRhUHJvZHVjdE5hbWUpKVxyXG4gIH1cclxuICBcclxuICAvLyBcdTkxQ0RcdTY1QjBcdThCQTFcdTdCOTdcdTYzOTJcdTk2MUZcdTRGNERcdTdGNkVcclxuICBhbGxUYXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xyXG4gICAgdGFzay5xdWV1ZVBvc2l0aW9uID0gaW5kZXggKyAxXHJcbiAgfSlcclxuICBcclxuICAvLyBcdThCQTFcdTdCOTdcdTYwM0JcdTY1NzBcclxuICBjb25zdCB0b3RhbCA9IGFsbFRhc2tzLmxlbmd0aFxyXG4gIFxyXG4gIC8vIFx1NTIwNlx1OTg3NVxyXG4gIGNvbnN0IHN0YXJ0ID0gKGN1cnJlbnRQYWdlIC0gMSkgKiBwYWdlU2l6ZVxyXG4gIGNvbnN0IGVuZCA9IHN0YXJ0ICsgcGFnZVNpemVcclxuICBjb25zdCBsaXN0ID0gYWxsVGFza3Muc2xpY2Uoc3RhcnQsIGVuZClcclxuICBcclxuICByZXR1cm4ge1xyXG4gICAgY29kZTogMjAwLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBsaXN0LFxyXG4gICAgICB0b3RhbCxcclxuICAgICAgY3VycmVudFBhZ2UsXHJcbiAgICAgIHBhZ2VTaXplXHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZTogJ1x1ODNCN1x1NTNENlx1NjIxMFx1NTI5RidcclxuICB9XHJcbn1cclxuXHJcbi8vIFx1NkEyMVx1NjJERlx1NzlGQlx1OTY2NFx1NEVGQlx1NTJBMVx1NzY4NFx1NjNBNVx1NTNFM1xyXG5leHBvcnQgZnVuY3Rpb24gbW9ja1JlbW92ZVRhc2soaWQ6IHN0cmluZykge1xyXG4gIHJldHVybiB7XHJcbiAgICBjb2RlOiAyMDAsXHJcbiAgICBkYXRhOiB0cnVlLFxyXG4gICAgbWVzc2FnZTogJ1x1NEVGQlx1NTJBMVx1NzlGQlx1OTY2NFx1NjIxMFx1NTI5RidcclxuICB9XHJcbn1cclxuXHJcbi8vIFx1NkEyMVx1NjJERlx1ODNCN1x1NTNENlx1NEVGQlx1NTJBMVx1NzJCNlx1NjAwMVx1OTAwOVx1OTg3OVx1NzY4NFx1NjNBNVx1NTNFM1xyXG5leHBvcnQgZnVuY3Rpb24gbW9ja0dldFN0YXR1c09wdGlvbnMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvZGU6IDIwMCxcclxuICAgIGRhdGE6IFtcclxuICAgICAgeyBsYWJlbDogJ1x1OEZEMFx1ODg0Q1x1NEUyRCcsIHZhbHVlOiBUYXNrU3RhdHVzLlJVTk5JTkcgfSxcclxuICAgICAgeyBsYWJlbDogJ1x1NjY4Mlx1NTA1QycsIHZhbHVlOiBUYXNrU3RhdHVzLlBBVVNFRCB9LFxyXG4gICAgICB7IGxhYmVsOiAnXHU1RjAyXHU1RTM4JywgdmFsdWU6IFRhc2tTdGF0dXMuRVJST1IgfVxyXG4gICAgXSxcclxuICAgIG1lc3NhZ2U6ICdcdTgzQjdcdTUzRDZcdTYyMTBcdTUyOUYnXHJcbiAgfVxyXG59ICIsICJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIkQ6XFxcXGN1cnNvckNvZGVcXFxcXHU2NTcwXHU2MzZFXHU4OTgxXHU3RDIwXHU4RkQwXHU4NDI1XHU1RTczXHU1M0YwXFxcXFx1NjU3MFx1NjM2RVx1N0JBMVx1NzQwNlx1NUI1MFx1N0NGQlx1N0VERlxcXFxwYWNrYWdlc1xcXFxkYXRhLWV4cGxvcmVcXFxcc3JjXFxcXG1vY2tcXFxcdGFzay1zY2hlZHVsZS50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCJEOlxcXFxjdXJzb3JDb2RlXFxcXFx1NjU3MFx1NjM2RVx1ODk4MVx1N0QyMFx1OEZEMFx1ODQyNVx1NUU3M1x1NTNGMFxcXFxcdTY1NzBcdTYzNkVcdTdCQTFcdTc0MDZcdTVCNTBcdTdDRkJcdTdFREZcXFxccGFja2FnZXNcXFxcZGF0YS1leHBsb3JlXFxcXHNyY1xcXFxtb2NrXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9EOi9jdXJzb3JDb2RlLyVFNiU5NSVCMCVFNiU4RCVBRSVFOCVBNiU4MSVFNyVCNCVBMCVFOCVCRiU5MCVFOCU5MCVBNSVFNSVCOSVCMyVFNSU4RiVCMC8lRTYlOTUlQjAlRTYlOEQlQUUlRTclQUUlQTElRTclOTAlODYlRTUlQUQlOTAlRTclQjMlQkIlRTclQkIlOUYvcGFja2FnZXMvZGF0YS1leHBsb3JlL3NyYy9tb2NrL3Rhc2stc2NoZWR1bGUudHNcIjtpbXBvcnQgeyBNb2NrTWV0aG9kIH0gZnJvbSAndml0ZS1wbHVnaW4tbW9jaydcclxuaW1wb3J0IHtcclxuICBtb2NrR2V0UnVubmluZ1Rhc2tMaXN0LFxyXG4gIG1vY2tHZXRRdWV1ZWRUYXNrTGlzdCxcclxuICBtb2NrUmVtb3ZlVGFzayxcclxuICBtb2NrR2V0U3RhdHVzT3B0aW9uc1xyXG59IGZyb20gJy4uL2FwaS90YXNrLXNjaGVkdWxlLW1vY2snXHJcblxyXG5jb25zdCB0YXNrU2NoZWR1bGVNb2NrOiBNb2NrTWV0aG9kW10gPSBbXHJcbiAgLy8gXHU4M0I3XHU1M0Q2XHU4RkQwXHU4ODRDXHU0RTJEXHU0RUZCXHU1MkExXHU1MjE3XHU4ODY4XHJcbiAge1xyXG4gICAgdXJsOiAnL2FwaS90YXNrLXNjaGVkdWxlL3J1bm5pbmcnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHJlc3BvbnNlOiAoeyBxdWVyeSB9KSA9PiB7XHJcbiAgICAgIHJldHVybiBtb2NrR2V0UnVubmluZ1Rhc2tMaXN0KHtcclxuICAgICAgICBpZDogcXVlcnkuaWQsXHJcbiAgICAgICAgZGF0YVByb2R1Y3ROYW1lOiBxdWVyeS5kYXRhUHJvZHVjdE5hbWUsXHJcbiAgICAgICAgc3RhdHVzOiBxdWVyeS5zdGF0dXMsXHJcbiAgICAgICAgY3VycmVudFBhZ2U6IHBhcnNlSW50KHF1ZXJ5LmN1cnJlbnRQYWdlKSB8fCAxLFxyXG4gICAgICAgIHBhZ2VTaXplOiBwYXJzZUludChxdWVyeS5wYWdlU2l6ZSkgfHwgMTBcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIFxyXG4gIC8vIFx1ODNCN1x1NTNENlx1NjM5Mlx1OTYxRlx1NEUyRFx1NEVGQlx1NTJBMVx1NTIxN1x1ODg2OFxyXG4gIHtcclxuICAgIHVybDogJy9hcGkvdGFzay1zY2hlZHVsZS9xdWV1ZWQnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHJlc3BvbnNlOiAoeyBxdWVyeSB9KSA9PiB7XHJcbiAgICAgIHJldHVybiBtb2NrR2V0UXVldWVkVGFza0xpc3Qoe1xyXG4gICAgICAgIGlkOiBxdWVyeS5pZCxcclxuICAgICAgICBkYXRhUHJvZHVjdE5hbWU6IHF1ZXJ5LmRhdGFQcm9kdWN0TmFtZSxcclxuICAgICAgICBjdXJyZW50UGFnZTogcGFyc2VJbnQocXVlcnkuY3VycmVudFBhZ2UpIHx8IDEsXHJcbiAgICAgICAgcGFnZVNpemU6IHBhcnNlSW50KHF1ZXJ5LnBhZ2VTaXplKSB8fCAxMFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgXHJcbiAgLy8gXHU3OUZCXHU5NjY0XHU4RkQwXHU4ODRDXHU0RTJEXHU0RUZCXHU1MkExXHJcbiAge1xyXG4gICAgdXJsOiAnL2FwaS90YXNrLXNjaGVkdWxlL3J1bm5pbmcvOmlkJyxcclxuICAgIG1ldGhvZDogJ2RlbGV0ZScsXHJcbiAgICByZXNwb25zZTogKHsgcGFyYW1zIH0pID0+IHtcclxuICAgICAgcmV0dXJuIG1vY2tSZW1vdmVUYXNrKHBhcmFtcy5pZClcclxuICAgIH1cclxuICB9LFxyXG4gIFxyXG4gIC8vIFx1ODNCN1x1NTNENlx1NEVGQlx1NTJBMVx1NzJCNlx1NjAwMVx1OTAwOVx1OTg3OVxyXG4gIHtcclxuICAgIHVybDogJy9hcGkvdGFzay1zY2hlZHVsZS9zdGF0dXMtb3B0aW9ucycsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcmVzcG9uc2U6ICgpID0+IHtcclxuICAgICAgcmV0dXJuIG1vY2tHZXRTdGF0dXNPcHRpb25zKClcclxuICAgIH1cclxuICB9XHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tTY2hlZHVsZU1vY2sgIiwgImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiRDpcXFxcY3Vyc29yQ29kZVxcXFxcdTY1NzBcdTYzNkVcdTg5ODFcdTdEMjBcdThGRDBcdTg0MjVcdTVFNzNcdTUzRjBcXFxcXHU2NTcwXHU2MzZFXHU3QkExXHU3NDA2XHU1QjUwXHU3Q0ZCXHU3RURGXFxcXHBhY2thZ2VzXFxcXGRhdGEtZXhwbG9yZVxcXFxzcmNcXFxcbW9ja1xcXFxpbmRleC50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCJEOlxcXFxjdXJzb3JDb2RlXFxcXFx1NjU3MFx1NjM2RVx1ODk4MVx1N0QyMFx1OEZEMFx1ODQyNVx1NUU3M1x1NTNGMFxcXFxcdTY1NzBcdTYzNkVcdTdCQTFcdTc0MDZcdTVCNTBcdTdDRkJcdTdFREZcXFxccGFja2FnZXNcXFxcZGF0YS1leHBsb3JlXFxcXHNyY1xcXFxtb2NrXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9EOi9jdXJzb3JDb2RlLyVFNiU5NSVCMCVFNiU4RCVBRSVFOCVBNiU4MSVFNyVCNCVBMCVFOCVCRiU5MCVFOCU5MCVBNSVFNSVCOSVCMyVFNSU4RiVCMC8lRTYlOTUlQjAlRTYlOEQlQUUlRTclQUUlQTElRTclOTAlODYlRTUlQUQlOTAlRTclQjMlQkIlRTclQkIlOUYvcGFja2FnZXMvZGF0YS1leHBsb3JlL3NyYy9tb2NrL2luZGV4LnRzXCI7aW1wb3J0IHsgTW9ja01ldGhvZCB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2snXHJcbmltcG9ydCBleHBsb3JlRGF0YSBmcm9tICcuL2V4cGxvcmUtZGF0YSdcclxuaW1wb3J0IHRhc2tTY2hlZHVsZSBmcm9tICcuL3Rhc2stc2NoZWR1bGUnXHJcblxyXG5jb25zdCBtb2NrRGF0YTogTW9ja01ldGhvZFtdID0gW1xyXG4gIC4uLmV4cGxvcmVEYXRhLFxyXG4gIC4uLnRhc2tTY2hlZHVsZVxyXG5dXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBQcm9kTW9ja1NlcnZlcigpIHtcclxuICBjb25zdCB7IGNyZWF0ZVByb2RNb2NrU2VydmVyIH0gPSByZXF1aXJlKCd2aXRlLXBsdWdpbi1tb2NrL2VzL2NyZWF0ZVByb2RNb2NrU2VydmVyJylcclxuICBjcmVhdGVQcm9kTW9ja1NlcnZlcihtb2NrRGF0YSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9ja0RhdGEgIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7O0FBMENBLElBQU0sV0FBVztBQUFBLEVBQ2Y7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLGFBQWE7QUFBQSxJQUNiLFlBQVk7QUFBQSxJQUNaLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLFlBQVk7QUFBQSxNQUNWLEVBQUUsSUFBSSxHQUFHLFdBQVcsVUFBVSxRQUFRLHNCQUFPLFFBQVEsTUFBTSxTQUFTLGdCQUFNLFdBQVcsc0JBQXNCO0FBQUEsTUFDM0csRUFBRSxJQUFJLEdBQUcsV0FBVyxVQUFVLFFBQVEsZ0JBQU0sUUFBUSxHQUFHLFNBQVMsS0FBSyxXQUFXLHNCQUFzQjtBQUFBLE1BQ3RHLEVBQUUsSUFBSSxHQUFHLFdBQVcsVUFBVSxRQUFRLHNCQUFPLFFBQVEsR0FBRyxTQUFTLEtBQUssV0FBVyxzQkFBc0I7QUFBQSxJQUN6RztBQUFBLElBQ0EsU0FBUyxDQUFDLE1BQU0sYUFBYSxVQUFVLFVBQVUsV0FBVyxXQUFXO0FBQUEsRUFDekU7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsSUFDWixVQUFVO0FBQUEsSUFDVixZQUFZO0FBQUEsTUFDVixFQUFFLFNBQVMsU0FBUyxNQUFNLGdCQUFNLFVBQVUsS0FBSyxRQUFRLGdCQUFNLFdBQVcsc0JBQXNCO0FBQUEs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
