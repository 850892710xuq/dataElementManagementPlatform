// src/mock/explore-apply.ts
var applyRecords = [];
var mockData = [
  {
    url: "/explore-apply/submit",
    method: "post",
    response: (options) => {
      const { dataIds, applyTime } = options.body;
      const newRecord = {
        id: applyRecords.length + 1,
        userId: 1,
        // 模拟用户ID
        userName: "\u5F20\u4E09",
        // 模拟用户名
        dataIds,
        applyTime,
        status: "\u5F85\u5904\u7406",
        createTime: (/* @__PURE__ */ new Date()).toISOString()
      };
      applyRecords.push(newRecord);
      return {
        code: 200,
        data: newRecord,
        message: "\u7533\u8BF7\u63D0\u4EA4\u6210\u529F"
      };
    }
  }
];
var explore_apply_default = mockData;
export {
  explore_apply_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21vY2svZXhwbG9yZS1hcHBseS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJEOlxcXFxjdXJzb3JDb2RlXFxcXFx1NjU3MFx1NjM2RVx1ODk4MVx1N0QyMFx1OEZEMFx1ODQyNVx1NUU3M1x1NTNGMFxcXFxcdTY1NzBcdTYzNkVcdTdCQTFcdTc0MDZcdTVCNTBcdTdDRkJcdTdFREZcXFxccGFja2FnZXNcXFxcZGF0YS1leHBsb3JlXFxcXHNyY1xcXFxtb2NrXFxcXGV4cGxvcmUtYXBwbHkudHNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiRDpcXFxcY3Vyc29yQ29kZVxcXFxcdTY1NzBcdTYzNkVcdTg5ODFcdTdEMjBcdThGRDBcdTg0MjVcdTVFNzNcdTUzRjBcXFxcXHU2NTcwXHU2MzZFXHU3QkExXHU3NDA2XHU1QjUwXHU3Q0ZCXHU3RURGXFxcXHBhY2thZ2VzXFxcXGRhdGEtZXhwbG9yZVxcXFxzcmNcXFxcbW9ja1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vRDovY3Vyc29yQ29kZS8lRTYlOTUlQjAlRTYlOEQlQUUlRTglQTYlODElRTclQjQlQTAlRTglQkYlOTAlRTglOTAlQTUlRTUlQjklQjMlRTUlOEYlQjAvJUU2JTk1JUIwJUU2JThEJUFFJUU3JUFFJUExJUU3JTkwJTg2JUU1JUFEJTkwJUU3JUIzJUJCJUU3JUJCJTlGL3BhY2thZ2VzL2RhdGEtZXhwbG9yZS9zcmMvbW9jay9leHBsb3JlLWFwcGx5LnRzXCI7aW1wb3J0IHsgTW9ja01ldGhvZCB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2snXHJcblxyXG4vLyBcdTVCOUFcdTRFNDlcdTc1MzNcdThCRjdcdTUzQzJcdTY1NzBcdTYzQTVcdTUzRTNcclxuaW50ZXJmYWNlIEFwcGx5UGFyYW1zIHtcclxuICBkYXRhSWRzOiBudW1iZXJbXVxyXG4gIGFwcGx5VGltZTogc3RyaW5nXHJcbn1cclxuXHJcbi8vIFx1NUI5QVx1NEU0OVx1NzUzM1x1OEJGN1x1OEJCMFx1NUY1NVx1NjNBNVx1NTNFM1xyXG5pbnRlcmZhY2UgQXBwbHlSZWNvcmQge1xyXG4gIGlkOiBudW1iZXJcclxuICB1c2VySWQ6IG51bWJlclxyXG4gIHVzZXJOYW1lOiBzdHJpbmdcclxuICBkYXRhSWRzOiBudW1iZXJbXVxyXG4gIGFwcGx5VGltZTogc3RyaW5nXHJcbiAgc3RhdHVzOiBzdHJpbmdcclxuICBjcmVhdGVUaW1lOiBzdHJpbmdcclxufVxyXG5cclxuLy8gXHU2QTIxXHU2MkRGXHU3NTMzXHU4QkY3XHU4QkIwXHU1RjU1XHU1MjE3XHU4ODY4XHJcbmNvbnN0IGFwcGx5UmVjb3JkczogQXBwbHlSZWNvcmRbXSA9IFtdXHJcblxyXG4vLyBcdTc1MUZcdTYyMTBtb2NrXHU2NTcwXHU2MzZFXHJcbmNvbnN0IG1vY2tEYXRhOiBNb2NrTWV0aG9kW10gPSBbXHJcbiAge1xyXG4gICAgdXJsOiAnL2V4cGxvcmUtYXBwbHkvc3VibWl0JyxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgcmVzcG9uc2U6IChvcHRpb25zOiB7IGJvZHk6IEFwcGx5UGFyYW1zIH0pID0+IHtcclxuICAgICAgY29uc3QgeyBkYXRhSWRzLCBhcHBseVRpbWUgfSA9IG9wdGlvbnMuYm9keVxyXG4gICAgICBcclxuICAgICAgLy8gXHU3NTFGXHU2MjEwXHU2NUIwXHU3Njg0XHU3NTMzXHU4QkY3XHU4QkIwXHU1RjU1XHJcbiAgICAgIGNvbnN0IG5ld1JlY29yZDogQXBwbHlSZWNvcmQgPSB7XHJcbiAgICAgICAgaWQ6IGFwcGx5UmVjb3Jkcy5sZW5ndGggKyAxLFxyXG4gICAgICAgIHVzZXJJZDogMSwgLy8gXHU2QTIxXHU2MkRGXHU3NTI4XHU2MjM3SURcclxuICAgICAgICB1c2VyTmFtZTogJ1x1NUYyMFx1NEUwOScsIC8vIFx1NkEyMVx1NjJERlx1NzUyOFx1NjIzN1x1NTQwRFxyXG4gICAgICAgIGRhdGFJZHMsXHJcbiAgICAgICAgYXBwbHlUaW1lLFxyXG4gICAgICAgIHN0YXR1czogJ1x1NUY4NVx1NTkwNFx1NzQwNicsXHJcbiAgICAgICAgY3JlYXRlVGltZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIFx1NkRGQlx1NTJBMFx1NTIzMFx1NzUzM1x1OEJGN1x1OEJCMFx1NUY1NVx1NTIxN1x1ODg2OFxyXG4gICAgICBhcHBseVJlY29yZHMucHVzaChuZXdSZWNvcmQpXHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvZGU6IDIwMCxcclxuICAgICAgICBkYXRhOiBuZXdSZWNvcmQsXHJcbiAgICAgICAgbWVzc2FnZTogJ1x1NzUzM1x1OEJGN1x1NjNEMFx1NEVBNFx1NjIxMFx1NTI5RidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9ja0RhdGEgIl0sCiAgIm1hcHBpbmdzIjogIjtBQW9CQSxJQUFNLGVBQThCLENBQUM7QUFHckMsSUFBTSxXQUF5QjtBQUFBLEVBQzdCO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixVQUFVLENBQUMsWUFBbUM7QUFDNUMsWUFBTSxFQUFFLFNBQVMsVUFBVSxJQUFJLFFBQVE7QUFHdkMsWUFBTSxZQUF5QjtBQUFBLFFBQzdCLElBQUksYUFBYSxTQUFTO0FBQUEsUUFDMUIsUUFBUTtBQUFBO0FBQUEsUUFDUixVQUFVO0FBQUE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0EsUUFBUTtBQUFBLFFBQ1IsYUFBWSxvQkFBSSxLQUFLLEdBQUUsWUFBWTtBQUFBLE1BQ3JDO0FBR0EsbUJBQWEsS0FBSyxTQUFTO0FBRTNCLGFBQU87QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sd0JBQVE7IiwKICAibmFtZXMiOiBbXQp9Cg==
