// src/mock/__index.bundled_1744776958989_kxxeeeluj1.bundled_1744777756364_v4crutp0dz.mjs
var lowSecurityEvidence = {
  id: "1",
  productName: "\u6570\u636E\u5206\u6790\u5E73\u53F0",
  productType: "LOW_SECURITY",
  developmentTeam: "\u6570\u636E\u7814\u53D1\u56E2\u961F",
  startTime: "2024-01-01",
  endTime: "2024-03-01",
  technicalArchitecture: "\u91C7\u7528Vue3 + TypeScript + Element Plus\u5F00\u53D1\uFF0C\u540E\u7AEF\u4F7F\u7528Node.js + Express\uFF0C\u6570\u636E\u5E93\u4F7F\u7528MySQL",
  functionalModules: [
    "\u6570\u636E\u5BFC\u5165\u5BFC\u51FA",
    "\u6570\u636E\u6E05\u6D17\u8F6C\u6362",
    "\u6570\u636E\u53EF\u89C6\u5316\u5C55\u793A",
    "\u62A5\u8868\u751F\u6210"
  ],
  versions: [
    {
      version: "1.0.0",
      updateTime: "2024-02-01",
      updateContent: "\u5B8C\u6210\u57FA\u7840\u529F\u80FD\u5F00\u53D1"
    },
    {
      version: "1.1.0",
      updateTime: "2024-02-15",
      updateContent: "\u4F18\u5316\u6570\u636E\u5BFC\u5165\u6027\u80FD\uFF0C\u65B0\u589E\u6570\u636E\u5BFC\u51FA\u529F\u80FD"
    },
    {
      version: "1.2.0",
      updateTime: "2024-03-01",
      updateContent: "\u65B0\u589E\u62A5\u8868\u751F\u6210\u529F\u80FD\uFF0C\u4F18\u5316\u7528\u6237\u754C\u9762"
    }
  ],
  testReports: [
    {
      name: "\u529F\u80FD\u6D4B\u8BD5\u62A5\u544A",
      type: "\u529F\u80FD\u6D4B\u8BD5",
      fileUrl: "http://example.com/test-report.pdf"
    },
    {
      name: "\u6027\u80FD\u6D4B\u8BD5\u62A5\u544A",
      type: "\u6027\u80FD\u6D4B\u8BD5",
      fileUrl: "http://example.com/performance-report.pdf"
    }
  ],
  evidenceNo: "EVIDENCE-2024-001",
  evidenceTime: "2024-03-01"
};
var highSecurityEvidence = {
  ...lowSecurityEvidence,
  id: "2",
  productName: "\u9690\u79C1\u8BA1\u7B97\u5E73\u53F0",
  productType: "HIGH_SECURITY",
  developmentTeam: "\u5B89\u5168\u7814\u53D1\u56E2\u961F",
  startTime: "2024-01-15",
  endTime: "2024-03-15",
  technicalArchitecture: "\u91C7\u7528\u8054\u90A6\u5B66\u4E60\u6846\u67B6\uFF0C\u7ED3\u5408MPC\u548C\u540C\u6001\u52A0\u5BC6\u6280\u672F\uFF0C\u5B9E\u73B0\u6570\u636E\u5B89\u5168\u8BA1\u7B97",
  functionalModules: [
    "\u8054\u90A6\u5B66\u4E60\u8BAD\u7EC3",
    "\u5B89\u5168\u591A\u65B9\u8BA1\u7B97",
    "\u9690\u79C1\u6570\u636E\u67E5\u8BE2",
    "\u6A21\u578B\u5B89\u5168\u8BC4\u4F30"
  ],
  versions: [
    {
      version: "1.0.0",
      updateTime: "2024-02-15",
      updateContent: "\u5B8C\u6210\u57FA\u7840\u6846\u67B6\u642D\u5EFA"
    },
    {
      version: "1.1.0",
      updateTime: "2024-03-01",
      updateContent: "\u5B9E\u73B0\u8054\u90A6\u5B66\u4E60\u6838\u5FC3\u529F\u80FD"
    },
    {
      version: "1.2.0",
      updateTime: "2024-03-15",
      updateContent: "\u65B0\u589EMPC\u548C\u9690\u79C1\u67E5\u8BE2\u529F\u80FD"
    }
  ],
  securityTechnologies: [
    {
      name: "\u8054\u90A6\u5B66\u4E60",
      description: "\u91C7\u7528\u6A2A\u5411\u8054\u90A6\u5B66\u4E60\u6846\u67B6\uFF0C\u5B9E\u73B0\u591A\u65B9\u6570\u636E\u8054\u5408\u5EFA\u6A21",
      securityMeasures: [
        "\u5DEE\u5206\u9690\u79C1\u4FDD\u62A4",
        "\u6A21\u578B\u53C2\u6570\u52A0\u5BC6\u4F20\u8F93",
        "\u5B89\u5168\u805A\u5408\u534F\u8BAE"
      ]
    },
    {
      name: "\u5B89\u5168\u591A\u65B9\u8BA1\u7B97",
      description: "\u4F7F\u7528MPC\u6280\u672F\u5B9E\u73B0\u591A\u65B9\u6570\u636E\u5B89\u5168\u8BA1\u7B97",
      securityMeasures: [
        "\u79D8\u5BC6\u5206\u4EAB\u534F\u8BAE",
        "\u96F6\u77E5\u8BC6\u8BC1\u660E",
        "\u5B89\u5168\u901A\u4FE1\u901A\u9053"
      ]
    }
  ],
  dataSources: [
    {
      name: "\u4F01\u4E1A\u6570\u636E",
      description: "\u6765\u81EA\u5408\u4F5C\u4F01\u4E1A\u7684\u8131\u654F\u6570\u636E",
      legality: "\u5DF2\u7B7E\u7F72\u6570\u636E\u4F7F\u7528\u534F\u8BAE\uFF0C\u786E\u4FDD\u6570\u636E\u6765\u6E90\u5408\u6CD5"
    },
    {
      name: "\u653F\u5E9C\u6570\u636E",
      description: "\u653F\u5E9C\u90E8\u95E8\u63D0\u4F9B\u7684\u52A0\u5BC6\u6570\u636E",
      legality: "\u5DF2\u83B7\u5F97\u653F\u5E9C\u6388\u6743\uFF0C\u7B26\u5408\u6570\u636E\u5B89\u5168\u89C4\u8303"
    }
  ],
  privacyProtection: {
    strategy: "\u91C7\u7528\u591A\u5C42\u6B21\u9690\u79C1\u4FDD\u62A4\u7B56\u7565\uFF0C\u786E\u4FDD\u6570\u636E\u5B89\u5168",
    technicalMeasures: [
      "\u6570\u636E\u8131\u654F\u5904\u7406",
      "\u8BBF\u95EE\u6743\u9650\u63A7\u5236",
      "\u64CD\u4F5C\u5BA1\u8BA1\u65E5\u5FD7",
      "\u52A0\u5BC6\u4F20\u8F93\u5B58\u50A8"
    ]
  },
  evidenceNo: "EVIDENCE-2024-002",
  evidenceTime: "2024-03-15"
};
var lowSecurityEvidenceList = [
  {
    id: "10001",
    productName: "\u6570\u636E\u5206\u6790\u5E73\u53F0",
    productType: "LOW_SECURITY",
    developmentTeam: "\u6570\u5B57\u6280\u672F\u90E8",
    startTime: "2023-01-10",
    endTime: "2023-06-20",
    technicalArchitecture: "Vue3 + Spring Boot + MySQL",
    functionalModules: [
      "\u6570\u636E\u91C7\u96C6\u6A21\u5757",
      "\u6570\u636E\u6E05\u6D17\u6A21\u5757",
      "\u6570\u636E\u5206\u6790\u6A21\u5757",
      "\u6570\u636E\u53EF\u89C6\u5316\u6A21\u5757",
      "\u62A5\u8868\u5BFC\u51FA\u6A21\u5757"
    ],
    versions: [
      {
        version: "v1.0.0",
        updateTime: "2023-03-15",
        updateContent: "\u521D\u59CB\u7248\u672C\uFF0C\u5B8C\u6210\u57FA\u7840\u529F\u80FD\u5F00\u53D1"
      },
      {
        version: "v1.1.0",
        updateTime: "2023-05-20",
        updateContent: "\u4F18\u5316\u6570\u636E\u5904\u7406\u6027\u80FD\uFF0C\u65B0\u589E\u81EA\u5B9A\u4E49\u5206\u6790\u529F\u80FD"
      },
      {
        version: "v1.2.0",
        updateTime: "2023-06-18",
        updateContent: "\u5B8C\u5584\u6570\u636E\u53EF\u89C6\u5316\u529F\u80FD\uFF0C\u65B0\u589E\u591A\u79CD\u56FE\u8868\u7C7B\u578B"
      }
    ],
    testReports: [
      {
        name: "\u529F\u80FD\u6D4B\u8BD5\u62A5\u544A",
        type: "\u529F\u80FD\u6D4B\u8BD5",
        fileUrl: "https://example.com/reports/10001/function.pdf"
      },
      {
        name: "\u6027\u80FD\u6D4B\u8BD5\u62A5\u544A",
        type: "\u6027\u80FD\u6D4B\u8BD5",
        fileUrl: "https://example.com/reports/10001/performance.pdf"
      }
    ],
    evidenceNo: "EV-20230620-001",
    evidenceTime: "2023-06-21"
  },
  {
    id: "10002",
    productName: "\u5BA2\u6237\u7BA1\u7406\u7CFB\u7EDF",
    productType: "LOW_SECURITY",
    developmentTeam: "\u4E1A\u52A1\u7CFB\u7EDF\u90E8",
    startTime: "2023-02-15",
    endTime: "2023-08-10",
    technicalArchitecture: "React + Node.js + MongoDB",
    functionalModules: [
      "\u5BA2\u6237\u4FE1\u606F\u7BA1\u7406",
      "\u8054\u7CFB\u4EBA\u7BA1\u7406",
      "\u8DDF\u8FDB\u8BB0\u5F55\u7BA1\u7406",
      "\u7EDF\u8BA1\u5206\u6790",
      "\u7CFB\u7EDF\u7BA1\u7406"
    ],
    versions: [
      {
        version: "v1.0.0",
        updateTime: "2023-04-20",
        updateContent: "\u5B8C\u6210\u5BA2\u6237\u4FE1\u606F\u7BA1\u7406\u548C\u8054\u7CFB\u4EBA\u7BA1\u7406\u529F\u80FD"
      },
      {
        version: "v1.1.0",
        updateTime: "2023-06-15",
        updateContent: "\u5B8C\u6210\u8DDF\u8FDB\u8BB0\u5F55\u7BA1\u7406\u548C\u57FA\u7840\u7EDF\u8BA1\u529F\u80FD"
      },
      {
        version: "v1.2.0",
        updateTime: "2023-08-08",
        updateContent: "\u5B8C\u5584\u7EDF\u8BA1\u5206\u6790\u529F\u80FD\uFF0C\u4F18\u5316\u7528\u6237\u4F53\u9A8C"
      }
    ],
    testReports: [
      {
        name: "\u529F\u80FD\u6D4B\u8BD5\u62A5\u544A",
        type: "\u529F\u80FD\u6D4B\u8BD5",
        fileUrl: "https://example.com/reports/10002/function.pdf"
      },
      {
        name: "\u7528\u6237\u4F53\u9A8C\u6D4B\u8BD5\u62A5\u544A",
        type: "\u7528\u6237\u4F53\u9A8C",
        fileUrl: "https://example.com/reports/10002/ux.pdf"
      }
    ],
    evidenceNo: "EV-20230810-002",
    evidenceTime: "2023-08-12"
  },
  {
    id: "10003",
    productName: "\u8D44\u6E90\u8C03\u5EA6\u7CFB\u7EDF",
    productType: "LOW_SECURITY",
    developmentTeam: "\u5E73\u53F0\u7814\u53D1\u90E8",
    startTime: "2023-03-05",
    endTime: "2023-09-15",
    technicalArchitecture: "Angular + Spring Cloud + PostgreSQL",
    functionalModules: [
      "\u8D44\u6E90\u7BA1\u7406",
      "\u4EFB\u52A1\u8C03\u5EA6",
      "\u76D1\u63A7\u544A\u8B66",
      "\u8D44\u6E90\u7EDF\u8BA1",
      "\u7CFB\u7EDF\u914D\u7F6E"
    ],
    versions: [
      {
        version: "v1.0.0",
        updateTime: "2023-05-10",
        updateContent: "\u5B8C\u6210\u8D44\u6E90\u7BA1\u7406\u548C\u57FA\u7840\u8C03\u5EA6\u529F\u80FD"
      },
      {
        version: "v1.1.0",
        updateTime: "2023-07-20",
        updateContent: "\u5B8C\u6210\u76D1\u63A7\u544A\u8B66\u529F\u80FD\uFF0C\u4F18\u5316\u8C03\u5EA6\u7B97\u6CD5"
      },
      {
        version: "v1.2.0",
        updateTime: "2023-09-12",
        updateContent: "\u5B8C\u5584\u8D44\u6E90\u7EDF\u8BA1\u529F\u80FD\uFF0C\u63D0\u5347\u7CFB\u7EDF\u7A33\u5B9A\u6027"
      }
    ],
    testReports: [
      {
        name: "\u529F\u80FD\u6D4B\u8BD5\u62A5\u544A",
        type: "\u529F\u80FD\u6D4B\u8BD5",
        fileUrl: "https://example.com/reports/10003/function.pdf"
      },
      {
        name: "\u6027\u80FD\u6D4B\u8BD5\u62A5\u544A",
        type: "\u6027\u80FD\u6D4B\u8BD5",
        fileUrl: "https://example.com/reports/10003/performance.pdf"
      },
      {
        name: "\u7A33\u5B9A\u6027\u6D4B\u8BD5\u62A5\u544A",
        type: "\u7A33\u5B9A\u6027\u6D4B\u8BD5",
        fileUrl: "https://example.com/reports/10003/stability.pdf"
      }
    ],
    evidenceNo: "EV-20230915-003",
    evidenceTime: "2023-09-18"
  }
];
var highSecurityEvidenceList = [
  {
    id: "20001",
    productName: "\u91D1\u878D\u98CE\u63A7\u7CFB\u7EDF",
    productType: "HIGH_SECURITY",
    developmentTeam: "\u91D1\u878D\u79D1\u6280\u90E8",
    startTime: "2023-01-15",
    endTime: "2023-07-20",
    technicalArchitecture: "Vue3 + Spring Cloud + Oracle",
    functionalModules: [
      "\u7528\u6237\u4FE1\u7528\u8BC4\u4F30",
      "\u4EA4\u6613\u98CE\u9669\u5206\u6790",
      "\u53CD\u6B3A\u8BC8\u76D1\u63A7",
      "\u89C4\u5219\u5F15\u64CE",
      "\u98CE\u9669\u62A5\u544A"
    ],
    versions: [
      {
        version: "v1.0.0",
        updateTime: "2023-03-20",
        updateContent: "\u5B8C\u6210\u7528\u6237\u4FE1\u7528\u8BC4\u4F30\u548C\u57FA\u7840\u98CE\u9669\u5206\u6790\u529F\u80FD"
      },
      {
        version: "v1.1.0",
        updateTime: "2023-05-25",
        updateContent: "\u5B8C\u6210\u53CD\u6B3A\u8BC8\u76D1\u63A7\u548C\u89C4\u5219\u5F15\u64CE\u529F\u80FD"
      },
      {
        version: "v1.2.0",
        updateTime: "2023-07-18",
        updateContent: "\u5B8C\u5584\u98CE\u9669\u62A5\u544A\u529F\u80FD\uFF0C\u4F18\u5316\u7B97\u6CD5\u6027\u80FD"
      }
    ],
    testReports: [
      {
        name: "\u529F\u80FD\u6D4B\u8BD5\u62A5\u544A",
        type: "\u529F\u80FD\u6D4B\u8BD5",
        fileUrl: "https://example.com/reports/20001/function.pdf"
      },
      {
        name: "\u5B89\u5168\u6D4B\u8BD5\u62A5\u544A",
        type: "\u5B89\u5168\u6D4B\u8BD5",
        fileUrl: "https://example.com/reports/20001/security.pdf"
      },
      {
        name: "\u6027\u80FD\u6D4B\u8BD5\u62A5\u544A",
        type: "\u6027\u80FD\u6D4B\u8BD5",
        fileUrl: "https://example.com/reports/20001/performance.pdf"
      }
    ],
    evidenceNo: "EV-20230720-001",
    evidenceTime: "2023-07-22",
    securityTechnologies: [
      {
        name: "\u6570\u636E\u52A0\u5BC6\u6280\u672F",
        description: "\u91C7\u7528\u56FD\u5BC6SM2/SM4\u7B97\u6CD5\u5BF9\u654F\u611F\u6570\u636E\u8FDB\u884C\u52A0\u5BC6\u4FDD\u62A4",
        securityMeasures: [
          "\u4F20\u8F93\u5C42TLS\u52A0\u5BC6",
          "\u6570\u636E\u5B58\u50A8\u52A0\u5BC6",
          "\u5BC6\u94A5\u5B89\u5168\u7BA1\u7406"
        ]
      },
      {
        name: "\u8EAB\u4EFD\u8BA4\u8BC1\u6280\u672F",
        description: "\u591A\u56E0\u7D20\u8EAB\u4EFD\u8BA4\u8BC1\u548C\u7EC6\u7C92\u5EA6\u6743\u9650\u63A7\u5236",
        securityMeasures: [
          "\u53CC\u56E0\u7D20\u8BA4\u8BC1",
          "\u751F\u7269\u7279\u5F81\u8BA4\u8BC1",
          "OAuth2\u6388\u6743",
          "RBAC\u6743\u9650\u6A21\u578B"
        ]
      },
      {
        name: "\u5B89\u5168\u5BA1\u8BA1\u6280\u672F",
        description: "\u5168\u65B9\u4F4D\u7684\u5B89\u5168\u5BA1\u8BA1\u548C\u76D1\u63A7\u673A\u5236",
        securityMeasures: [
          "\u64CD\u4F5C\u65E5\u5FD7\u8BB0\u5F55",
          "\u5F02\u5E38\u884C\u4E3A\u76D1\u63A7",
          "\u5B9E\u65F6\u544A\u8B66\u673A\u5236"
        ]
      }
    ],
    dataSources: [
      {
        name: "\u7528\u6237\u57FA\u7840\u4FE1\u606F",
        description: "\u7528\u6237\u6CE8\u518C\u548C\u5B9E\u540D\u8BA4\u8BC1\u4FE1\u606F",
        legality: "\u7528\u6237\u6388\u6743\u540C\u610F"
      },
      {
        name: "\u4EA4\u6613\u8BB0\u5F55\u6570\u636E",
        description: "\u7528\u6237\u4EA4\u6613\u7684\u5386\u53F2\u8BB0\u5F55\u548C\u6A21\u5F0F",
        legality: "\u670D\u52A1\u534F\u8BAE\u6388\u6743"
      },
      {
        name: "\u5916\u90E8\u98CE\u9669\u6570\u636E",
        description: "\u5408\u4F5C\u65B9\u63D0\u4F9B\u7684\u98CE\u9669\u4FE1\u606F",
        legality: "\u6570\u636E\u5171\u4EAB\u534F\u8BAE"
      }
    ],
    privacyProtection: {
      strategy: "\u91C7\u7528\u6570\u636E\u8131\u654F\u3001\u6570\u636E\u5206\u7EA7\u548C\u6743\u9650\u63A7\u5236\u76F8\u7ED3\u5408\u7684\u9690\u79C1\u4FDD\u62A4\u7B56\u7565",
      technicalMeasures: [
        "\u654F\u611F\u4FE1\u606F\u8131\u654F\u5C55\u793A",
        "\u6700\u5C0F\u6743\u9650\u539F\u5219",
        "\u6570\u636E\u8BBF\u95EE\u5BA1\u8BA1",
        "\u6570\u636E\u751F\u547D\u5468\u671F\u7BA1\u7406",
        "\u4E2A\u4EBA\u4FE1\u606F\u533F\u540D\u5316\u5904\u7406"
      ]
    }
  },
  {
    id: "20002",
    productName: "\u533B\u7597\u6570\u636E\u7BA1\u7406\u5E73\u53F0",
    productType: "HIGH_SECURITY",
    developmentTeam: "\u533B\u7597\u4FE1\u606F\u90E8",
    startTime: "2023-02-20",
    endTime: "2023-08-15",
    technicalArchitecture: "React + .NET Core + SQL Server",
    functionalModules: [
      "\u60A3\u8005\u4FE1\u606F\u7BA1\u7406",
      "\u7535\u5B50\u75C5\u5386",
      "\u533B\u7597\u5F71\u50CF\u7BA1\u7406",
      "\u5904\u65B9\u7BA1\u7406",
      "\u6570\u636E\u5206\u6790\u4E0E\u62A5\u544A"
    ],
    versions: [
      {
        version: "v1.0.0",
        updateTime: "2023-04-25",
        updateContent: "\u5B8C\u6210\u60A3\u8005\u4FE1\u606F\u7BA1\u7406\u548C\u7535\u5B50\u75C5\u5386\u57FA\u7840\u529F\u80FD"
      },
      {
        version: "v1.1.0",
        updateTime: "2023-06-30",
        updateContent: "\u5B8C\u6210\u533B\u7597\u5F71\u50CF\u7BA1\u7406\u548C\u5904\u65B9\u7BA1\u7406\u529F\u80FD"
      },
      {
        version: "v1.2.0",
        updateTime: "2023-08-12",
        updateContent: "\u5B8C\u5584\u6570\u636E\u5206\u6790\u4E0E\u62A5\u544A\u529F\u80FD"
      }
    ],
    testReports: [
      {
        name: "\u529F\u80FD\u6D4B\u8BD5\u62A5\u544A",
        type: "\u529F\u80FD\u6D4B\u8BD5",
        fileUrl: "https://example.com/reports/20002/function.pdf"
      },
      {
        name: "\u5B89\u5168\u5408\u89C4\u6D4B\u8BD5\u62A5\u544A",
        type: "\u5B89\u5168\u5408\u89C4",
        fileUrl: "https://example.com/reports/20002/compliance.pdf"
      },
      {
        name: "\u6027\u80FD\u6D4B\u8BD5\u62A5\u544A",
        type: "\u6027\u80FD\u6D4B\u8BD5",
        fileUrl: "https://example.com/reports/20002/performance.pdf"
      }
    ],
    evidenceNo: "EV-20230815-002",
    evidenceTime: "2023-08-18",
    securityTechnologies: [
      {
        name: "\u533B\u7597\u6570\u636E\u52A0\u5BC6",
        description: "\u7B26\u5408HIPAA\u6807\u51C6\u7684\u533B\u7597\u6570\u636E\u52A0\u5BC6\u65B9\u6848",
        securityMeasures: [
          "\u7AEF\u5230\u7AEF\u52A0\u5BC6",
          "\u5206\u7EA7\u52A0\u5BC6\u7B56\u7565",
          "\u5BC6\u94A5\u8F6E\u6362\u673A\u5236"
        ]
      },
      {
        name: "\u8BBF\u95EE\u63A7\u5236\u6280\u672F",
        description: "\u57FA\u4E8E\u89D2\u8272\u548C\u573A\u666F\u7684\u7EC6\u7C92\u5EA6\u8BBF\u95EE\u63A7\u5236",
        securityMeasures: [
          "\u57FA\u4E8E\u89D2\u8272\u7684\u8BBF\u95EE\u63A7\u5236",
          "\u57FA\u4E8E\u5C5E\u6027\u7684\u8BBF\u95EE\u63A7\u5236",
          "\u60A3\u8005\u6388\u6743\u673A\u5236",
          "\u4E34\u65F6\u8BBF\u95EE\u63A7\u5236"
        ]
      },
      {
        name: "\u6570\u636E\u9694\u79BB\u6280\u672F",
        description: "\u591A\u79DF\u6237\u6570\u636E\u9694\u79BB\u6280\u672F",
        securityMeasures: [
          "\u903B\u8F91\u9694\u79BB",
          "\u7269\u7406\u9694\u79BB",
          "\u6570\u636E\u5E93\u7EA7\u9694\u79BB"
        ]
      }
    ],
    dataSources: [
      {
        name: "\u60A3\u8005\u57FA\u672C\u4FE1\u606F",
        description: "\u60A3\u8005\u7684\u4E2A\u4EBA\u57FA\u7840\u4FE1\u606F",
        legality: "\u60A3\u8005\u77E5\u60C5\u540C\u610F"
      },
      {
        name: "\u533B\u7597\u68C0\u67E5\u6570\u636E",
        description: "\u5404\u7C7B\u533B\u7597\u68C0\u67E5\u7684\u7ED3\u679C\u6570\u636E",
        legality: "\u533B\u7597\u670D\u52A1\u534F\u8BAE"
      },
      {
        name: "\u6CBB\u7597\u8BB0\u5F55",
        description: "\u60A3\u8005\u63A5\u53D7\u6CBB\u7597\u7684\u8BB0\u5F55\u6570\u636E",
        legality: "\u533B\u7597\u673A\u6784\u6388\u6743"
      }
    ],
    privacyProtection: {
      strategy: "\u91C7\u7528\u4E25\u683C\u7684\u6570\u636E\u8BBF\u95EE\u63A7\u5236\u548C\u533F\u540D\u5316\u5904\u7406\uFF0C\u786E\u4FDD\u60A3\u8005\u9690\u79C1\u5B89\u5168",
      technicalMeasures: [
        "\u533B\u7597\u6570\u636E\u8131\u654F",
        "\u60A3\u8005\u8EAB\u4EFD\u533F\u540D\u5316",
        "\u57FA\u4E8E\u76EE\u7684\u7684\u8BBF\u95EE\u9650\u5236",
        "\u6570\u636E\u4F7F\u7528\u5BA1\u8BA1",
        "\u5B9A\u671F\u9690\u79C1\u8BC4\u4F30"
      ]
    }
  },
  {
    id: "20003",
    productName: "\u653F\u52A1\u5B89\u5168\u901A\u4FE1\u7CFB\u7EDF",
    productType: "HIGH_SECURITY",
    developmentTeam: "\u653F\u52A1\u4FE1\u606F\u90E8",
    startTime: "2023-03-10",
    endTime: "2023-10-05",
    technicalArchitecture: "Native + Java + PostgreSQL",
    functionalModules: [
      "\u52A0\u5BC6\u901A\u4FE1",
      "\u8EAB\u4EFD\u8BA4\u8BC1",
      "\u6587\u4EF6\u4F20\u8F93",
      "\u7FA4\u7EC4\u7BA1\u7406",
      "\u5BA1\u8BA1\u65E5\u5FD7"
    ],
    versions: [
      {
        version: "v1.0.0",
        updateTime: "2023-05-15",
        updateContent: "\u5B8C\u6210\u52A0\u5BC6\u901A\u4FE1\u548C\u8EAB\u4EFD\u8BA4\u8BC1\u57FA\u7840\u529F\u80FD"
      },
      {
        version: "v1.1.0",
        updateTime: "2023-07-25",
        updateContent: "\u5B8C\u6210\u6587\u4EF6\u4F20\u8F93\u548C\u7FA4\u7EC4\u7BA1\u7406\u529F\u80FD"
      },
      {
        version: "v1.2.0",
        updateTime: "2023-10-01",
        updateContent: "\u5B8C\u5584\u5BA1\u8BA1\u65E5\u5FD7\u548C\u5B89\u5168\u6027\u63D0\u5347"
      }
    ],
    testReports: [
      {
        name: "\u529F\u80FD\u6D4B\u8BD5\u62A5\u544A",
        type: "\u529F\u80FD\u6D4B\u8BD5",
        fileUrl: "https://example.com/reports/20003/function.pdf"
      },
      {
        name: "\u5B89\u5168\u6E17\u900F\u6D4B\u8BD5\u62A5\u544A",
        type: "\u5B89\u5168\u6E17\u900F",
        fileUrl: "https://example.com/reports/20003/penetration.pdf"
      },
      {
        name: "\u7B49\u7EA7\u4FDD\u62A4\u6D4B\u8BC4\u62A5\u544A",
        type: "\u7B49\u7EA7\u4FDD\u62A4",
        fileUrl: "https://example.com/reports/20003/security-level.pdf"
      }
    ],
    evidenceNo: "EV-20231005-003",
    evidenceTime: "2023-10-08",
    securityTechnologies: [
      {
        name: "\u56FD\u5BC6\u7B97\u6CD5\u5E94\u7528",
        description: "\u5168\u9762\u5E94\u7528\u56FD\u5BC6SM2/SM3/SM4\u7B97\u6CD5",
        securityMeasures: [
          "SM2\u975E\u5BF9\u79F0\u52A0\u5BC6",
          "SM3\u5BC6\u7801\u6742\u51D1",
          "SM4\u5BF9\u79F0\u52A0\u5BC6",
          "\u56FD\u5BC6SSL\u534F\u8BAE"
        ]
      },
      {
        name: "\u591A\u91CD\u8EAB\u4EFD\u8BA4\u8BC1",
        description: "\u591A\u56E0\u7D20\u3001\u591A\u7EF4\u5EA6\u8EAB\u4EFD\u8BA4\u8BC1\u4F53\u7CFB",
        securityMeasures: [
          "\u667A\u80FD\u5361\u8BA4\u8BC1",
          "\u751F\u7269\u7279\u5F81\u8BC6\u522B",
          "\u52A8\u6001\u53E3\u4EE4\u8BA4\u8BC1",
          "\u884C\u4E3A\u7279\u5F81\u8BA4\u8BC1"
        ]
      },
      {
        name: "\u53EF\u9760\u6027\u4FDD\u969C\u6280\u672F",
        description: "\u786E\u4FDD\u7CFB\u7EDF\u9AD8\u53EF\u7528\u6027\u7684\u6280\u672F\u63AA\u65BD",
        securityMeasures: [
          "\u591A\u4E2D\u5FC3\u90E8\u7F72",
          "\u5B9E\u65F6\u6570\u636E\u540C\u6B65",
          "\u6545\u969C\u81EA\u52A8\u5207\u6362",
          "\u707E\u5907\u6062\u590D\u673A\u5236"
        ]
      }
    ],
    dataSources: [
      {
        name: "\u7528\u6237\u8EAB\u4EFD\u4FE1\u606F",
        description: "\u7CFB\u7EDF\u7528\u6237\u7684\u8EAB\u4EFD\u8BA4\u8BC1\u4FE1\u606F",
        legality: "\u653F\u52A1\u7CFB\u7EDF\u6388\u6743"
      },
      {
        name: "\u901A\u4FE1\u5185\u5BB9\u6570\u636E",
        description: "\u52A0\u5BC6\u540E\u7684\u901A\u4FE1\u5185\u5BB9",
        legality: "\u7CFB\u7EDF\u4F7F\u7528\u89C4\u5B9A"
      },
      {
        name: "\u7EC4\u7EC7\u67B6\u6784\u6570\u636E",
        description: "\u653F\u52A1\u5355\u4F4D\u7684\u7EC4\u7EC7\u67B6\u6784\u4FE1\u606F",
        legality: "\u5185\u90E8\u7BA1\u7406\u6388\u6743"
      }
    ],
    privacyProtection: {
      strategy: "\u91C7\u7528\u96F6\u4FE1\u4EFB\u5B89\u5168\u67B6\u6784\uFF0C\u5B9E\u73B0\u6570\u636E\u5168\u751F\u547D\u5468\u671F\u4FDD\u62A4",
      technicalMeasures: [
        "\u7AEF\u5230\u7AEF\u52A0\u5BC6\u901A\u4FE1",
        "\u654F\u611F\u4FE1\u606F\u8BC6\u522B\u4E0E\u4FDD\u62A4",
        "\u901A\u4FE1\u8BB0\u5F55\u6700\u5C0F\u5316",
        "\u6570\u636E\u672C\u5730\u5B58\u50A8\u4F18\u5148",
        "\u81EA\u52A8\u6570\u636E\u6E05\u7406\u673A\u5236"
      ]
    }
  }
];
var requirementPublishEvidenceList = [
  {
    evidenceNo: "RP-2024-001",
    requirementName: "\u91D1\u878D\u6570\u636E\u5206\u6790\u5E73\u53F0",
    requesterName: "\u4E2D\u56FD\u91D1\u878D\u7814\u7A76\u9662",
    requesterId: "FR-2024-001",
    publishApplyTime: "2024-01-08 10:25:30",
    publishAuditTime: "2024-01-09 16:45:12",
    publishTime: "2024-01-10 14:30:00",
    expireTime: "2024-07-10 14:30:00",
    budget: "500000",
    requirementStatus: "\u5DF2\u53D1\u5E03",
    requirementInfo: "\u9700\u8981\u5F00\u53D1\u4E00\u4E2A\u80FD\u591F\u5904\u7406\u5927\u89C4\u6A21\u91D1\u878D\u6570\u636E\u7684\u5206\u6790\u5E73\u53F0\uFF0C\u652F\u6301\u591A\u79CD\u91D1\u878D\u6A21\u578B\u8BA1\u7B97\u548C\u53EF\u89C6\u5316\u5C55\u793A\u3002\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A\u57FA\u7840\u7684\u91D1\u878D\u6570\u636E\u6E05\u6D17\u3001\u8F6C\u6362\u529F\u80FD\uFF1B\u5404\u7C7B\u91D1\u878D\u6307\u6807\u7684\u8BA1\u7B97\u5206\u6790\u529F\u80FD\uFF1B\u7EFC\u5408\u7684\u6570\u636E\u53EF\u89C6\u5316\u5C55\u793A\u529F\u80FD\uFF1B\u6570\u636E\u62A5\u8868\u81EA\u52A8\u751F\u6210\u529F\u80FD\uFF1B\u591A\u7528\u6237\u6743\u9650\u7BA1\u7406\u548C\u534F\u540C\u5DE5\u4F5C\u529F\u80FD\u3002\u7CFB\u7EDF\u9700\u8981\u652F\u6301\u81F3\u5C1110TB\u7EA7\u522B\u6570\u636E\u7684\u9AD8\u6548\u5904\u7406\u3002",
    requirementDescription: "\u9700\u8981\u4E00\u4E2A\u80FD\u591F\u5904\u7406\u5927\u89C4\u6A21\u91D1\u878D\u6570\u636E\u7684\u5206\u6790\u5E73\u53F0\uFF0C\u652F\u6301\u591A\u79CD\u91D1\u878D\u6A21\u578B\u8BA1\u7B97\u548C\u53EF\u89C6\u5316\u5C55\u793A",
    technicalRequirements: "\u4F7F\u7528Python/R\u8FDB\u884C\u6570\u636E\u5904\u7406\uFF0C\u524D\u7AEF\u4F7F\u7528Vue.js\u5F00\u53D1\uFF0C\u652F\u6301\u5206\u5E03\u5F0F\u8BA1\u7B97",
    auditStatus: "\u5BA1\u6838\u901A\u8FC7",
    auditOpinion: "\u901A\u8FC7",
    auditReason: "\u6EE1\u8DB3\u5E73\u53F0\u9700\u6C42\u6807\u51C6",
    auditor: "\u5F20\u5BA1\u6838",
    demander: "\u4E2D\u56FD\u91D1\u878D\u7814\u7A76\u9662",
    demanderId: "FR-2024-001",
    evidenceTime: "2024-01-10 16:30:00",
    evidenceChain: "chain-hash-001"
  },
  {
    evidenceNo: "RP-2024-002",
    requirementName: "\u533B\u7597\u6570\u636E\u5171\u4EAB\u5E73\u53F0",
    requesterName: "\u5317\u4EAC\u533B\u5B66\u7814\u7A76\u6240",
    requesterId: "MI-2024-002",
    publishApplyTime: "2024-01-12 13:40:15",
    publishAuditTime: "2024-01-14 11:20:36",
    publishTime: "2024-01-15 09:15:00",
    expireTime: "2024-06-15 09:15:00",
    budget: "800000",
    requirementStatus: "\u5DF2\u53D1\u5E03",
    requirementInfo: "\u6784\u5EFA\u4E00\u4E2A\u5B89\u5168\u7684\u533B\u7597\u6570\u636E\u5171\u4EAB\u5E73\u53F0\uFF0C\u652F\u6301\u591A\u5BB6\u533B\u9662\u4E4B\u95F4\u7684\u6570\u636E\u5B89\u5168\u4EA4\u6362\u548C\u5206\u6790\u3002\u8BE5\u5E73\u53F0\u9700\u8981\u6EE1\u8DB3\u4EE5\u4E0B\u6838\u5FC3\u9700\u6C42\uFF1A\u4E25\u683C\u7684\u6570\u636E\u9690\u79C1\u4FDD\u62A4\u548C\u8BBF\u95EE\u63A7\u5236\u673A\u5236\uFF1B\u652F\u6301\u4E0D\u540C\u533B\u7597\u4FE1\u606F\u7CFB\u7EDF\u4E4B\u95F4\u7684\u6807\u51C6\u5316\u6570\u636E\u4EA4\u6362\uFF1B\u533B\u7597\u6570\u636E\u7684\u5B89\u5168\u52A0\u5BC6\u5B58\u50A8\u548C\u4F20\u8F93\uFF1B\u57FA\u4E8E\u6743\u9650\u7684\u591A\u7EA7\u6570\u636E\u8BBF\u95EE\u63A7\u5236\uFF1B\u533B\u7597\u6570\u636E\u5206\u6790\u548C\u8F85\u52A9\u8BCA\u65AD\u529F\u80FD\u3002\u5E73\u53F0\u9700\u8981\u7B26\u5408\u56FD\u5BB6\u533B\u7597\u6570\u636E\u5B89\u5168\u6CD5\u89C4\u548C\u9690\u79C1\u4FDD\u62A4\u8981\u6C42\u3002",
    requirementDescription: "\u6784\u5EFA\u4E00\u4E2A\u5B89\u5168\u7684\u533B\u7597\u6570\u636E\u5171\u4EAB\u5E73\u53F0\uFF0C\u652F\u6301\u591A\u5BB6\u533B\u9662\u4E4B\u95F4\u7684\u6570\u636E\u5B89\u5168\u4EA4\u6362\u548C\u5206\u6790",
    technicalRequirements: "\u91C7\u7528\u533A\u5757\u94FE\u6280\u672F\u4FDD\u8BC1\u6570\u636E\u5B89\u5168\uFF0C\u524D\u7AEFReact\u6846\u67B6\uFF0C\u540E\u7AEFJava Spring Boot",
    auditStatus: "\u5BA1\u6838\u901A\u8FC7",
    auditOpinion: "\u901A\u8FC7",
    auditReason: "\u7B26\u5408\u533B\u7597\u6570\u636E\u4EA4\u6362\u6807\u51C6",
    auditor: "\u674E\u5BA1\u6838",
    demander: "\u5317\u4EAC\u533B\u5B66\u7814\u7A76\u6240",
    demanderId: "MI-2024-002",
    evidenceTime: "2024-01-15 11:30:00",
    evidenceChain: "chain-hash-002"
  },
  {
    evidenceNo: "RP-2024-003",
    requirementName: "\u667A\u80FD\u4EA4\u901A\u6570\u636E\u5E73\u53F0",
    requesterName: "\u4EA4\u901A\u8FD0\u8F93\u90E8\u79D1\u5B66\u7814\u7A76\u9662",
    requesterId: "TR-2024-003",
    publishApplyTime: "2024-01-18 09:30:45",
    publishAuditTime: "2024-01-19 15:10:25",
    publishTime: "2024-01-20 13:45:00",
    expireTime: "2024-08-20 13:45:00",
    budget: "650000",
    requirementStatus: "\u5DF2\u53D1\u5E03",
    requirementInfo: "\u5EFA\u8BBE\u4E00\u4E2A\u667A\u80FD\u4EA4\u901A\u6570\u636E\u5E73\u53F0\uFF0C\u5BF9\u4EA4\u901A\u6D41\u91CF\u3001\u8DEF\u51B5\u7B49\u6570\u636E\u8FDB\u884C\u5B9E\u65F6\u5904\u7406\u548C\u5206\u6790\u3002\u5E73\u53F0\u6838\u5FC3\u529F\u80FD\u5305\u62EC\uFF1A\u4EA4\u901A\u6570\u636E\u7684\u5B9E\u65F6\u91C7\u96C6\u548C\u5B58\u50A8\uFF1B\u4EA4\u901A\u6D41\u91CF\u7684\u9884\u6D4B\u5206\u6790\uFF1B\u4EA4\u901A\u72B6\u6001\u53EF\u89C6\u5316\u5C55\u793A\uFF1B\u4EA4\u901A\u4E8B\u4EF6\u7684\u81EA\u52A8\u8BC6\u522B\u548C\u9884\u8B66\uFF1B\u4E3A\u4EA4\u901A\u7BA1\u7406\u51B3\u7B56\u63D0\u4F9B\u6570\u636E\u652F\u6301\u3002\u7CFB\u7EDF\u9700\u8981\u652F\u6301\u57CE\u5E02\u7EA7\u4EA4\u901A\u6570\u636E\u7684\u9AD8\u5E76\u53D1\u5904\u7406\uFF0C\u5E76\u63D0\u4F9B\u5F00\u653EAPI\u63A5\u53E3\u4F9B\u5176\u4ED6\u7CFB\u7EDF\u8C03\u7528\u3002",
    requirementDescription: "\u5EFA\u8BBE\u4E00\u4E2A\u667A\u80FD\u4EA4\u901A\u6570\u636E\u5E73\u53F0\uFF0C\u5BF9\u4EA4\u901A\u6D41\u91CF\u3001\u8DEF\u51B5\u7B49\u6570\u636E\u8FDB\u884C\u5B9E\u65F6\u5904\u7406\u548C\u5206\u6790",
    technicalRequirements: "\u652F\u6301\u5927\u6570\u636E\u5B9E\u65F6\u5904\u7406\uFF0C\u91C7\u7528Kafka+Spark\u67B6\u6784\uFF0C\u524D\u7AEF\u4F7F\u7528Angular",
    auditStatus: "\u5BA1\u6838\u901A\u8FC7",
    auditOpinion: "\u901A\u8FC7",
    auditReason: "\u9879\u76EE\u5177\u6709\u91CD\u8981\u793E\u4F1A\u4EF7\u503C",
    auditor: "\u738B\u5BA1\u6838",
    demander: "\u4EA4\u901A\u8FD0\u8F93\u90E8\u79D1\u5B66\u7814\u7A76\u9662",
    demanderId: "TR-2024-003",
    evidenceTime: "2024-01-20 16:15:00",
    evidenceChain: "chain-hash-003"
  },
  {
    evidenceNo: "RP-2024-004",
    requirementName: "\u519C\u4E1A\u5927\u6570\u636E\u5206\u6790\u7CFB\u7EDF",
    requesterName: "\u56FD\u5BB6\u519C\u4E1A\u519C\u6751\u90E8",
    requesterId: "AG-2024-004",
    publishApplyTime: "2024-01-25 14:20:35",
    publishAuditTime: "2024-01-26 10:15:22",
    publishTime: "2024-01-27 09:30:00",
    expireTime: "2024-09-27 09:30:00",
    budget: "720000",
    requirementStatus: "\u5DF2\u53D1\u5E03",
    requirementInfo: "\u5F00\u53D1\u4E00\u4E2A\u5168\u56FD\u519C\u4E1A\u5927\u6570\u636E\u5206\u6790\u7CFB\u7EDF\uFF0C\u6574\u5408\u5404\u5730\u519C\u4E1A\u751F\u4EA7\u3001\u6C14\u8C61\u3001\u6C34\u5229\u3001\u571F\u58E4\u7B49\u6570\u636E\uFF0C\u4E3A\u519C\u4E1A\u751F\u4EA7\u63D0\u4F9B\u51B3\u7B56\u652F\u6301\u3002\u7CFB\u7EDF\u9700\u8981\u5B9E\u73B0\u4EE5\u4E0B\u529F\u80FD\uFF1A\u591A\u6E90\u519C\u4E1A\u6570\u636E\u7684\u91C7\u96C6\u548C\u6E05\u6D17\uFF1B\u519C\u4F5C\u7269\u751F\u957F\u73AF\u5883\u76D1\u6D4B\u548C\u5206\u6790\uFF1B\u519C\u4E1A\u751F\u4EA7\u9884\u6D4B\u548C\u9884\u8B66\uFF1B\u667A\u80FD\u519C\u4E1A\u51B3\u7B56\u652F\u6301\uFF1B\u519C\u4EA7\u54C1\u4EA7\u9500\u5BF9\u63A5\u670D\u52A1\u3002\u7CFB\u7EDF\u9700\u8981\u652F\u6301\u5927\u89C4\u6A21\u7A7A\u95F4\u6570\u636E\u5904\u7406\u548C\u5206\u6790\u3002",
    requirementDescription: "\u5F00\u53D1\u5168\u56FD\u519C\u4E1A\u5927\u6570\u636E\u5206\u6790\u7CFB\u7EDF\uFF0C\u6574\u5408\u5404\u5730\u519C\u4E1A\u751F\u4EA7\u3001\u6C14\u8C61\u3001\u6C34\u5229\u3001\u571F\u58E4\u7B49\u6570\u636E",
    technicalRequirements: "\u4F7F\u7528Hadoop\u751F\u6001\u7CFB\u7EDF\uFF0C\u7ED3\u5408GIS\u6280\u672F\uFF0C\u524D\u7AEF\u91C7\u7528Vue.js\uFF0C\u652F\u6301\u79FB\u52A8\u7AEF\u8BBF\u95EE",
    auditStatus: "\u5F85\u5BA1\u6838",
    auditOpinion: "\u5F85\u5BA1\u6838",
    auditReason: "",
    auditor: "-",
    demander: "\u56FD\u5BB6\u519C\u4E1A\u519C\u6751\u90E8",
    demanderId: "AG-2024-004",
    evidenceTime: "2024-01-27 11:45:00",
    evidenceChain: "chain-hash-004"
  },
  {
    evidenceNo: "RP-2024-005",
    requirementName: "\u667A\u6167\u6559\u80B2\u6570\u636E\u5E73\u53F0",
    requesterName: "\u6559\u80B2\u90E8\u6559\u80B2\u4FE1\u606F\u5316\u53F8",
    requesterId: "ED-2024-005",
    publishApplyTime: "2024-02-03 11:10:25",
    publishAuditTime: "2024-02-04 14:30:40",
    publishTime: "2024-02-05 10:00:00",
    expireTime: "2024-10-05 10:00:00",
    budget: "550000",
    requirementStatus: "\u5DF2\u53D1\u5E03",
    requirementInfo: "\u5EFA\u8BBE\u4E00\u4E2A\u9762\u5411\u5168\u56FD\u6559\u80B2\u7CFB\u7EDF\u7684\u667A\u6167\u6559\u80B2\u6570\u636E\u5E73\u53F0\uFF0C\u6574\u5408\u6559\u80B2\u8D44\u6E90\u3001\u5B66\u751F\u5B66\u4E60\u884C\u4E3A\u548C\u6559\u5B66\u8FC7\u7A0B\u6570\u636E\uFF0C\u5B9E\u73B0\u6559\u80B2\u6559\u5B66\u7684\u667A\u80FD\u5316\u7BA1\u7406\u548C\u51B3\u7B56\u652F\u6301\u3002\u5E73\u53F0\u6838\u5FC3\u529F\u80FD\u5305\u62EC\uFF1A\u6559\u80B2\u8D44\u6E90\u7684\u7EDF\u4E00\u7BA1\u7406\u548C\u667A\u80FD\u63A8\u8350\uFF1B\u5B66\u751F\u5B66\u4E60\u884C\u4E3A\u7684\u8FFD\u8E2A\u548C\u5206\u6790\uFF1B\u6559\u5B66\u8FC7\u7A0B\u6570\u636E\u7684\u91C7\u96C6\u548C\u5904\u7406\uFF1B\u4E2A\u6027\u5316\u5B66\u4E60\u8DEF\u5F84\u7684\u751F\u6210\uFF1B\u6559\u80B2\u8D28\u91CF\u8BC4\u4F30\u548C\u5206\u6790\u3002\u7CFB\u7EDF\u9700\u8981\u652F\u6301\u5168\u56FD\u8303\u56F4\u5185\u7684\u591A\u7EA7\u6559\u80B2\u673A\u6784\u63A5\u5165\u3002",
    requirementDescription: "\u5EFA\u8BBE\u9762\u5411\u5168\u56FD\u6559\u80B2\u7CFB\u7EDF\u7684\u667A\u6167\u6559\u80B2\u6570\u636E\u5E73\u53F0\uFF0C\u6574\u5408\u6559\u80B2\u8D44\u6E90\u548C\u6559\u5B66\u8FC7\u7A0B\u6570\u636E",
    technicalRequirements: "\u91C7\u7528\u5FAE\u670D\u52A1\u67B6\u6784\uFF0C\u540E\u7AEFSpring Cloud\uFF0C\u524D\u7AEFReact\uFF0C\u652F\u6301\u79C1\u6709\u4E91\u90E8\u7F72",
    auditStatus: "\u5BA1\u6838\u901A\u8FC7",
    auditOpinion: "\u901A\u8FC7",
    auditReason: "\u7B26\u5408\u56FD\u5BB6\u6559\u80B2\u4FE1\u606F\u5316\u6218\u7565",
    auditor: "\u5468\u5BA1\u6838",
    demander: "\u6559\u80B2\u90E8\u6559\u80B2\u4FE1\u606F\u5316\u53F8",
    demanderId: "ED-2024-005",
    evidenceTime: "2024-02-05 13:25:00",
    evidenceChain: "chain-hash-005"
  }
];
var requirementClaimEvidenceList = [
  {
    evidenceNo: "RC-2024-001",
    requirementName: "\u91D1\u878D\u6570\u636E\u5206\u6790\u5E73\u53F0",
    requirementNo: "RP-2024-001",
    requirementType: "\u6570\u636E\u5206\u6790",
    requirementStatus: "\u5904\u7406\u4E2D",
    requirementContent: "\u9700\u8981\u5F00\u53D1\u4E00\u4E2A\u80FD\u591F\u5904\u7406\u5927\u89C4\u6A21\u91D1\u878D\u6570\u636E\u7684\u5206\u6790\u5E73\u53F0\uFF0C\u652F\u6301\u591A\u79CD\u91D1\u878D\u6A21\u578B\u8BA1\u7B97\u548C\u53EF\u89C6\u5316\u5C55\u793A\u3002\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A\u57FA\u7840\u7684\u91D1\u878D\u6570\u636E\u6E05\u6D17\u3001\u8F6C\u6362\u529F\u80FD\uFF1B\u5404\u7C7B\u91D1\u878D\u6307\u6807\u7684\u8BA1\u7B97\u5206\u6790\u529F\u80FD\uFF1B\u7EFC\u5408\u7684\u6570\u636E\u53EF\u89C6\u5316\u5C55\u793A\u529F\u80FD\uFF1B\u6570\u636E\u62A5\u8868\u81EA\u52A8\u751F\u6210\u529F\u80FD\uFF1B\u591A\u7528\u6237\u6743\u9650\u7BA1\u7406\u548C\u534F\u540C\u5DE5\u4F5C\u529F\u80FD\u3002\u7CFB\u7EDF\u9700\u8981\u652F\u6301\u81F3\u5C1110TB\u7EA7\u522B\u6570\u636E\u7684\u9AD8\u6548\u5904\u7406\u3002",
    claimant: "\u6570\u636E\u79D1\u6280\u6709\u9650\u516C\u53F8",
    claimantId: "DST-2024-001",
    claimTime: "2024-01-15 10:20:00",
    estimatedCompletionTime: "2024-06-20",
    offerPrice: "480000",
    developmentPlan: "\u5206\u56DB\u4E2A\u9636\u6BB5\u5B8C\u6210\u5F00\u53D1\uFF0C\u5305\u62EC\u9700\u6C42\u5206\u6790\u3001\u67B6\u6784\u8BBE\u8BA1\u3001\u529F\u80FD\u5B9E\u73B0\u548C\u6D4B\u8BD5\u90E8\u7F72",
    technicalSolution: "\u91C7\u7528Python+TensorFlow\u8FDB\u884C\u6570\u636E\u5904\u7406\uFF0CVue.js\u524D\u7AEF\u6846\u67B6\uFF0CDocker\u5BB9\u5668\u5316\u90E8\u7F72",
    auditStatus: "\u5BA1\u6838\u901A\u8FC7",
    auditTime: "2024-01-16 14:35:42",
    auditor: "\u8D75\u5BA1\u6838",
    evidenceTime: "2024-01-16 16:30:00",
    evidenceChain: "chain-hash-004"
  },
  {
    evidenceNo: "RC-2024-002",
    requirementName: "\u533B\u7597\u6570\u636E\u5171\u4EAB\u5E73\u53F0",
    requirementNo: "RP-2024-002",
    requirementType: "\u6570\u636E\u5171\u4EAB",
    requirementStatus: "\u5904\u7406\u4E2D",
    requirementContent: "\u6784\u5EFA\u4E00\u4E2A\u5B89\u5168\u7684\u533B\u7597\u6570\u636E\u5171\u4EAB\u5E73\u53F0\uFF0C\u652F\u6301\u591A\u5BB6\u533B\u9662\u4E4B\u95F4\u7684\u6570\u636E\u5B89\u5168\u4EA4\u6362\u548C\u5206\u6790\u3002\u8BE5\u5E73\u53F0\u9700\u8981\u6EE1\u8DB3\u4EE5\u4E0B\u6838\u5FC3\u9700\u6C42\uFF1A\u4E25\u683C\u7684\u6570\u636E\u9690\u79C1\u4FDD\u62A4\u548C\u8BBF\u95EE\u63A7\u5236\u673A\u5236\uFF1B\u652F\u6301\u4E0D\u540C\u533B\u7597\u4FE1\u606F\u7CFB\u7EDF\u4E4B\u95F4\u7684\u6807\u51C6\u5316\u6570\u636E\u4EA4\u6362\uFF1B\u533B\u7597\u6570\u636E\u7684\u5B89\u5168\u52A0\u5BC6\u5B58\u50A8\u548C\u4F20\u8F93\uFF1B\u57FA\u4E8E\u6743\u9650\u7684\u591A\u7EA7\u6570\u636E\u8BBF\u95EE\u63A7\u5236\uFF1B\u533B\u7597\u6570\u636E\u5206\u6790\u548C\u8F85\u52A9\u8BCA\u65AD\u529F\u80FD\u3002\u5E73\u53F0\u9700\u8981\u7B26\u5408\u56FD\u5BB6\u533B\u7597\u6570\u636E\u5B89\u5168\u6CD5\u89C4\u548C\u9690\u79C1\u4FDD\u62A4\u8981\u6C42\u3002",
    claimant: "\u533B\u7597\u4FE1\u606F\u6280\u672F\u516C\u53F8",
    claimantId: "MIT-2024-002",
    claimTime: "2024-01-25 11:15:00",
    estimatedCompletionTime: "2024-05-30",
    offerPrice: "750000",
    developmentPlan: "\u91C7\u7528\u654F\u6377\u5F00\u53D1\u65B9\u6CD5\uFF0C\u4E24\u5468\u4E00\u4E2A\u8FED\u4EE3\uFF0C\u5171\u8BA110\u4E2A\u8FED\u4EE3\u5B8C\u6210\u6240\u6709\u529F\u80FD",
    technicalSolution: "\u57FA\u4E8EFHIR\u6807\u51C6\u6784\u5EFA\u533B\u7597\u6570\u636E\u4EA4\u6362\u670D\u52A1\uFF0C\u524D\u7AEFReact\uFF0C\u540E\u7AEFSpring Boot\uFF0C\u6570\u636E\u5E93\u91C7\u7528MongoDB",
    auditStatus: "\u5BA1\u6838\u901A\u8FC7",
    auditTime: "2024-01-26 09:30:18",
    auditor: "\u94B1\u5BA1\u6838",
    evidenceTime: "2024-01-26 11:45:00",
    evidenceChain: "chain-hash-005"
  },
  {
    evidenceNo: "RC-2024-003",
    requirementName: "\u667A\u80FD\u4EA4\u901A\u6570\u636E\u5E73\u53F0",
    requirementNo: "RP-2024-003",
    requirementType: "\u667A\u80FD\u4EA4\u901A",
    requirementStatus: "\u5DF2\u8BA4\u9886",
    requirementContent: "\u5EFA\u8BBE\u4E00\u4E2A\u667A\u80FD\u4EA4\u901A\u6570\u636E\u5E73\u53F0\uFF0C\u5BF9\u4EA4\u901A\u6D41\u91CF\u3001\u8DEF\u51B5\u7B49\u6570\u636E\u8FDB\u884C\u5B9E\u65F6\u5904\u7406\u548C\u5206\u6790\u3002\u5E73\u53F0\u6838\u5FC3\u529F\u80FD\u5305\u62EC\uFF1A\u4EA4\u901A\u6570\u636E\u7684\u5B9E\u65F6\u91C7\u96C6\u548C\u5B58\u50A8\uFF1B\u4EA4\u901A\u6D41\u91CF\u7684\u9884\u6D4B\u5206\u6790\uFF1B\u4EA4\u901A\u72B6\u6001\u53EF\u89C6\u5316\u5C55\u793A\uFF1B\u4EA4\u901A\u4E8B\u4EF6\u7684\u81EA\u52A8\u8BC6\u522B\u548C\u9884\u8B66\uFF1B\u4E3A\u4EA4\u901A\u7BA1\u7406\u51B3\u7B56\u63D0\u4F9B\u6570\u636E\u652F\u6301\u3002\u7CFB\u7EDF\u9700\u8981\u652F\u6301\u57CE\u5E02\u7EA7\u4EA4\u901A\u6570\u636E\u7684\u9AD8\u5E76\u53D1\u5904\u7406\uFF0C\u5E76\u63D0\u4F9B\u5F00\u653EAPI\u63A5\u53E3\u4F9B\u5176\u4ED6\u7CFB\u7EDF\u8C03\u7528\u3002",
    claimant: "\u667A\u6167\u57CE\u5E02\u79D1\u6280\u6709\u9650\u516C\u53F8",
    claimantId: "SCT-2024-003",
    claimTime: "2024-02-01 14:40:00",
    estimatedCompletionTime: "2024-07-15",
    offerPrice: "620000",
    developmentPlan: "\u4E09\u4E2A\u6708\u5B8C\u6210\u6838\u5FC3\u529F\u80FD\u5F00\u53D1\uFF0C\u4E24\u4E2A\u6708\u8FDB\u884C\u7CFB\u7EDF\u6D4B\u8BD5\u548C\u4F18\u5316",
    technicalSolution: "\u91C7\u7528\u5FAE\u670D\u52A1\u67B6\u6784\uFF0CKafka\u5904\u7406\u5B9E\u65F6\u6570\u636E\u6D41\uFF0CSpark\u8FDB\u884C\u6570\u636E\u5206\u6790\uFF0CElasticSearch\u5B58\u50A8\u548C\u68C0\u7D22\u6570\u636E",
    auditStatus: "\u5BA1\u6838\u901A\u8FC7",
    auditTime: "2024-02-02 16:55:33",
    auditor: "\u5B59\u5BA1\u6838",
    evidenceTime: "2024-02-02 18:20:00",
    evidenceChain: "chain-hash-006"
  },
  {
    evidenceNo: "RC-2024-004",
    requirementName: "\u519C\u4E1A\u5927\u6570\u636E\u5206\u6790\u7CFB\u7EDF",
    requirementNo: "RP-2024-004",
    requirementType: "\u519C\u4E1A\u4FE1\u606F\u5316",
    requirementStatus: "\u5DF2\u5B8C\u6210",
    requirementContent: "\u5F00\u53D1\u4E00\u4E2A\u5168\u56FD\u519C\u4E1A\u5927\u6570\u636E\u5206\u6790\u7CFB\u7EDF\uFF0C\u6574\u5408\u5404\u5730\u519C\u4E1A\u751F\u4EA7\u3001\u6C14\u8C61\u3001\u6C34\u5229\u3001\u571F\u58E4\u7B49\u6570\u636E\uFF0C\u4E3A\u519C\u4E1A\u751F\u4EA7\u63D0\u4F9B\u51B3\u7B56\u652F\u6301\u3002\u7CFB\u7EDF\u9700\u8981\u5B9E\u73B0\u4EE5\u4E0B\u529F\u80FD\uFF1A\u591A\u6E90\u519C\u4E1A\u6570\u636E\u7684\u91C7\u96C6\u548C\u6E05\u6D17\uFF1B\u519C\u4F5C\u7269\u751F\u957F\u73AF\u5883\u76D1\u6D4B\u548C\u5206\u6790\uFF1B\u519C\u4E1A\u751F\u4EA7\u9884\u6D4B\u548C\u9884\u8B66\uFF1B\u667A\u80FD\u519C\u4E1A\u51B3\u7B56\u652F\u6301\uFF1B\u519C\u4EA7\u54C1\u4EA7\u9500\u5BF9\u63A5\u670D\u52A1\u3002\u7CFB\u7EDF\u9700\u8981\u652F\u6301\u5927\u89C4\u6A21\u7A7A\u95F4\u6570\u636E\u5904\u7406\u548C\u5206\u6790\u3002",
    claimant: "\u519C\u4E1A\u5927\u6570\u636E\u7814\u7A76\u9662",
    claimantId: "ADI-2024-004",
    claimTime: "2024-02-10 09:15:00",
    estimatedCompletionTime: "2024-08-10",
    offerPrice: "680000",
    developmentPlan: "\u56DB\u4E2A\u9636\u6BB5\u5F00\u53D1\uFF1A\u9700\u6C42\u8C03\u7814\u3001\u6570\u636E\u6574\u5408\u3001\u529F\u80FD\u5F00\u53D1\u3001\u7CFB\u7EDF\u6D4B\u8BD5",
    technicalSolution: "\u57FA\u4E8EHadoop\u751F\u6001\u7CFB\u7EDF\uFF0C\u96C6\u6210\u6C14\u8C61\u548C\u5730\u7406\u4FE1\u606F\u7CFB\u7EDF\uFF0C\u524D\u7AEF\u91C7\u7528Vue.js\uFF0C\u652F\u6301Web\u548C\u79FB\u52A8\u7AEF\u8BBF\u95EE",
    auditStatus: "\u5BA1\u6838\u901A\u8FC7",
    auditTime: "2024-02-11 11:20:45",
    auditor: "\u5434\u5BA1\u6838",
    evidenceTime: "2024-02-11 14:30:00",
    evidenceChain: "chain-hash-007"
  },
  {
    evidenceNo: "RC-2024-005",
    requirementName: "\u667A\u6167\u6559\u80B2\u6570\u636E\u5E73\u53F0",
    requirementNo: "RP-2024-005",
    requirementType: "\u6559\u80B2\u4FE1\u606F\u5316",
    requirementStatus: "\u5DF2\u53D6\u6D88",
    requirementContent: "\u5EFA\u8BBE\u4E00\u4E2A\u9762\u5411\u5168\u56FD\u6559\u80B2\u7CFB\u7EDF\u7684\u667A\u6167\u6559\u80B2\u6570\u636E\u5E73\u53F0\uFF0C\u6574\u5408\u6559\u80B2\u8D44\u6E90\u3001\u5B66\u751F\u5B66\u4E60\u884C\u4E3A\u548C\u6559\u5B66\u8FC7\u7A0B\u6570\u636E\uFF0C\u5B9E\u73B0\u6559\u80B2\u6559\u5B66\u7684\u667A\u80FD\u5316\u7BA1\u7406\u548C\u51B3\u7B56\u652F\u6301\u3002\u5E73\u53F0\u6838\u5FC3\u529F\u80FD\u5305\u62EC\uFF1A\u6559\u80B2\u8D44\u6E90\u7684\u7EDF\u4E00\u7BA1\u7406\u548C\u667A\u80FD\u63A8\u8350\uFF1B\u5B66\u751F\u5B66\u4E60\u884C\u4E3A\u7684\u8FFD\u8E2A\u548C\u5206\u6790\uFF1B\u6559\u5B66\u8FC7\u7A0B\u6570\u636E\u7684\u91C7\u96C6\u548C\u5904\u7406\uFF1B\u4E2A\u6027\u5316\u5B66\u4E60\u8DEF\u5F84\u7684\u751F\u6210\uFF1B\u6559\u80B2\u8D28\u91CF\u8BC4\u4F30\u548C\u5206\u6790\u3002\u7CFB\u7EDF\u9700\u8981\u652F\u6301\u5168\u56FD\u8303\u56F4\u5185\u7684\u591A\u7EA7\u6559\u80B2\u673A\u6784\u63A5\u5165\u3002",
    claimant: "\u6559\u80B2\u4FE1\u606F\u5316\u516C\u53F8",
    claimantId: "EIC-2024-005",
    claimTime: "2024-02-15 13:45:00",
    estimatedCompletionTime: "2024-09-20",
    offerPrice: "520000",
    developmentPlan: "\u57FA\u4E8E\u6559\u80B2\u884C\u4E1A\u6807\u51C6\u5F00\u53D1\uFF0C\u5206\u6A21\u5757\u5B9E\u73B0\uFF0C\u9010\u6B65\u96C6\u6210",
    technicalSolution: "\u91C7\u7528\u5FAE\u670D\u52A1\u67B6\u6784\uFF0C\u4E91\u539F\u751F\u5E94\u7528\uFF0C\u652F\u6301\u591A\u79DF\u6237\u6A21\u5F0F\uFF0C\u6574\u5408AI\u63A8\u8350\u5F15\u64CE",
    auditStatus: "\u5BA1\u6838\u901A\u8FC7",
    auditTime: "2024-02-16 10:30:26",
    auditor: "\u90D1\u5BA1\u6838",
    evidenceTime: "2024-02-16 15:10:00",
    evidenceChain: "chain-hash-008"
  }
];
var dataEvidenceList = [
  {
    evidenceNo: "DATA-2024-0001",
    evidenceTime: "2024-03-10 15:30:45",
    dataName: "\u57CE\u5E02\u4EA4\u901A\u6D41\u91CF\u6570\u636E\u96C6",
    ownerName: "\u5317\u4EAC\u5E02\u4EA4\u901A\u7BA1\u7406\u5C40",
    createTime: "2024-03-08 10:22:18",
    registerType: "\u521D\u59CB\u767B\u8BB0",
    registerTime: "2024-03-09 14:25:33",
    dataDescription: "\u5305\u542B\u5317\u4EAC\u5E02\u4E3B\u8981\u9053\u8DEF\u7684\u4EA4\u901A\u6D41\u91CF\u76D1\u6D4B\u6570\u636E\uFF0C\u542B\u8F66\u6D41\u91CF\u3001\u5E73\u5747\u8F66\u901F\u7B49\u6307\u6807",
    materials: [
      {
        name: "\u6570\u636E\u6837\u672C\u6587\u4EF6",
        type: "CSV\u6587\u4EF6",
        url: "http://example.com/traffic-sample.csv"
      },
      {
        name: "\u6570\u636E\u7ED3\u6784\u8BF4\u660E",
        type: "PDF\u6587\u6863",
        url: "http://example.com/traffic-structure.pdf"
      }
    ],
    auditStatus: "\u5BA1\u6838\u901A\u8FC7",
    dataType: "\u7ED3\u6784\u5316\u6570\u636E",
    dataOrigin: "\u4EA4\u901A\u76D1\u63A7\u7CFB\u7EDF\u91C7\u96C6",
    registrant: "\u5F20\u660E",
    securityLevel: "\u516C\u5F00\u6570\u636E",
    storageLocation: "\u5317\u4EAC\u6570\u636E\u4E2D\u5FC3",
    dataSize: "1.5TB",
    formatType: "CSV",
    updateCycle: "\u6BCF\u65E5\u66F4\u65B0"
  },
  {
    evidenceNo: "DATA-2024-0002",
    evidenceTime: "2024-03-12 09:45:22",
    dataName: "\u533B\u7597\u5065\u5EB7\u6570\u636E\u96C6",
    ownerName: "\u4E0A\u6D77\u5E02\u7B2C\u4E00\u4EBA\u6C11\u533B\u9662",
    createTime: "2024-03-10 08:15:35",
    registerType: "\u521D\u59CB\u767B\u8BB0",
    registerTime: "2024-03-11 16:20:18",
    dataDescription: "\u8131\u654F\u540E\u7684\u95E8\u8BCA\u60A3\u8005\u57FA\u7840\u5065\u5EB7\u6570\u636E\uFF0C\u5305\u542B\u751F\u7406\u6307\u6807\u4F46\u4E0D\u542B\u4E2A\u4EBA\u8EAB\u4EFD\u4FE1\u606F",
    materials: [
      {
        name: "\u6570\u636E\u5B89\u5168\u8BC4\u4F30\u62A5\u544A",
        type: "PDF\u6587\u6863",
        url: "http://example.com/health-security.pdf"
      },
      {
        name: "\u6570\u636E\u683C\u5F0F\u8BF4\u660E",
        type: "Word\u6587\u6863",
        url: "http://example.com/health-format.docx"
      }
    ],
    auditStatus: "\u5BA1\u6838\u901A\u8FC7",
    auditReason: "\u6570\u636E\u5DF2\u5B8C\u6210\u8131\u654F\u5904\u7406\uFF0C\u7B26\u5408\u9690\u79C1\u4FDD\u62A4\u8981\u6C42",
    dataType: "\u7ED3\u6784\u5316\u6570\u636E",
    dataOrigin: "\u533B\u9662\u4FE1\u606F\u7CFB\u7EDF",
    registrant: "\u674E\u521A",
    securityLevel: "\u5185\u90E8\u6570\u636E",
    storageLocation: "\u4E0A\u6D77\u533B\u7597\u6570\u636E\u4E2D\u5FC3",
    dataSize: "500GB",
    formatType: "JSON",
    updateCycle: "\u6BCF\u5468\u66F4\u65B0"
  },
  {
    evidenceNo: "DATA-2024-0003",
    evidenceTime: "2024-03-15 14:18:36",
    dataName: "\u7535\u5546\u7528\u6237\u884C\u4E3A\u6570\u636E",
    ownerName: "\u6DF1\u5733\u4E91\u8D2D\u79D1\u6280\u6709\u9650\u516C\u53F8",
    createTime: "2024-03-12 11:05:42",
    registerType: "\u521D\u59CB\u767B\u8BB0",
    registerTime: "2024-03-14 10:35:19",
    dataDescription: "\u7528\u6237\u5728\u7535\u5546\u5E73\u53F0\u7684\u6D4F\u89C8\u3001\u6536\u85CF\u3001\u8D2D\u4E70\u7B49\u884C\u4E3A\u6570\u636E\uFF0C\u5DF2\u8FDB\u884C\u53BB\u6807\u8BC6\u5316\u5904\u7406",
    materials: [
      {
        name: "\u6570\u636E\u6837\u672C",
        type: "Excel\u6587\u4EF6",
        url: "http://example.com/ecommerce-sample.xlsx"
      }
    ],
    auditStatus: "\u5BA1\u6838\u4E0D\u901A\u8FC7",
    auditReason: "\u6570\u636E\u53BB\u6807\u8BC6\u5316\u5904\u7406\u4E0D\u5B8C\u5168\uFF0C\u5B58\u5728\u7528\u6237\u9690\u79C1\u6CC4\u9732\u98CE\u9669",
    dataType: "\u534A\u7ED3\u6784\u5316\u6570\u636E",
    dataOrigin: "\u7535\u5546\u5E73\u53F0",
    registrant: "\u738B\u7433",
    securityLevel: "\u4FDD\u5BC6\u6570\u636E",
    storageLocation: "\u6DF1\u5733\u6570\u636E\u4E2D\u5FC3",
    dataSize: "2TB",
    formatType: "Parquet",
    updateCycle: "\u5B9E\u65F6\u66F4\u65B0"
  },
  {
    evidenceNo: "DATA-2024-0004",
    evidenceTime: "2024-03-18 11:30:25",
    dataName: "\u6C14\u8C61\u76D1\u6D4B\u6570\u636E",
    ownerName: "\u56FD\u5BB6\u6C14\u8C61\u5C40",
    createTime: "2024-03-16 09:12:54",
    registerType: "\u521D\u59CB\u767B\u8BB0",
    registerTime: "2024-03-17 15:40:33",
    dataDescription: "\u5168\u56FD\u5404\u5730\u533A\u6C14\u8C61\u76D1\u6D4B\u7AD9\u7684\u6E29\u5EA6\u3001\u6E7F\u5EA6\u3001\u6C14\u538B\u7B49\u6570\u636E",
    materials: [
      {
        name: "\u6570\u636E\u63A5\u5165\u8BF4\u660E",
        type: "PDF\u6587\u6863",
        url: "http://example.com/weather-access.pdf"
      },
      {
        name: "\u6570\u636E\u6807\u51C6\u6587\u6863",
        type: "PDF\u6587\u6863",
        url: "http://example.com/weather-standard.pdf"
      }
    ],
    auditStatus: "\u5BA1\u6838\u901A\u8FC7",
    dataType: "\u65F6\u5E8F\u6570\u636E",
    dataOrigin: "\u6C14\u8C61\u76D1\u6D4B\u7AD9",
    registrant: "\u5468\u5065",
    securityLevel: "\u516C\u5F00\u6570\u636E",
    storageLocation: "\u56FD\u5BB6\u6570\u636E\u4E2D\u5FC3",
    dataSize: "5TB",
    formatType: "HDF5",
    updateCycle: "\u6BCF\u5C0F\u65F6\u66F4\u65B0"
  },
  {
    evidenceNo: "DATA-2024-0005",
    evidenceTime: "2024-03-20 16:22:48",
    dataName: "\u4F01\u4E1A\u8D22\u52A1\u6570\u636E",
    ownerName: "\u4E2D\u56FD\u4F01\u4E1A\u4FE1\u606F\u4E2D\u5FC3",
    createTime: "2024-03-18 14:05:22",
    registerType: "\u53D8\u66F4\u767B\u8BB0",
    registerTime: "2024-03-19 11:15:36",
    dataDescription: "\u4E0A\u5E02\u516C\u53F8\u516C\u5F00\u7684\u8D22\u52A1\u62A5\u8868\u6570\u636E\uFF0C\u5305\u542B\u8D44\u4EA7\u8D1F\u503A\u8868\u3001\u5229\u6DA6\u8868\u3001\u73B0\u91D1\u6D41\u91CF\u8868\u7B49",
    materials: [
      {
        name: "\u6570\u636E\u53D8\u66F4\u8BF4\u660E",
        type: "PDF\u6587\u6863",
        url: "http://example.com/finance-change.pdf"
      }
    ],
    auditStatus: "\u5BA1\u6838\u901A\u8FC7",
    dataType: "\u7ED3\u6784\u5316\u6570\u636E",
    dataOrigin: "\u516C\u5F00\u8D22\u62A5",
    registrant: "\u5218\u5F3A",
    securityLevel: "\u516C\u5F00\u6570\u636E",
    storageLocation: "\u91D1\u878D\u6570\u636E\u4E2D\u5FC3",
    dataSize: "800GB",
    formatType: "Excel",
    updateCycle: "\u5B63\u5EA6\u66F4\u65B0"
  },
  {
    evidenceNo: "DATA-2024-0006",
    evidenceTime: "2024-03-22 10:18:35",
    dataName: "\u57CE\u5E02\u76D1\u63A7\u5F71\u50CF\u6570\u636E",
    ownerName: "\u5E7F\u5DDE\u5E02\u516C\u5B89\u5C40",
    createTime: "2024-03-20 09:33:47",
    registerType: "\u521D\u59CB\u767B\u8BB0",
    registerTime: "2024-03-21 16:42:15",
    dataDescription: "\u57CE\u5E02\u4E3B\u8981\u8DEF\u53E3\u548C\u516C\u5171\u533A\u57DF\u7684\u76D1\u63A7\u6444\u50CF\u5934\u91C7\u96C6\u7684\u5F71\u50CF\u6570\u636E",
    materials: [
      {
        name: "\u6570\u636E\u4F7F\u7528\u6388\u6743\u4E66",
        type: "PDF\u6587\u6863",
        url: "http://example.com/surveillance-auth.pdf"
      },
      {
        name: "\u6570\u636E\u5B89\u5168\u7BA1\u7406\u89C4\u5B9A",
        type: "Word\u6587\u6863",
        url: "http://example.com/surveillance-security.docx"
      }
    ],
    auditStatus: "\u5BA1\u6838\u901A\u8FC7",
    dataType: "\u975E\u7ED3\u6784\u5316\u6570\u636E",
    dataOrigin: "\u76D1\u63A7\u6444\u50CF\u7CFB\u7EDF",
    registrant: "\u9648\u660E",
    securityLevel: "\u673A\u5BC6\u6570\u636E",
    storageLocation: "\u5E7F\u5DDE\u5B89\u5168\u6570\u636E\u4E2D\u5FC3",
    dataSize: "10TB",
    formatType: "MP4/JPEG",
    updateCycle: "\u5B9E\u65F6\u66F4\u65B0"
  },
  {
    evidenceNo: "DATA-2024-0007",
    evidenceTime: "2024-03-25 15:45:22",
    dataName: "\u519C\u4EA7\u54C1\u4EF7\u683C\u6570\u636E",
    ownerName: "\u519C\u4E1A\u90E8\u4FE1\u606F\u4E2D\u5FC3",
    createTime: "2024-03-23 11:28:36",
    registerType: "\u521D\u59CB\u767B\u8BB0",
    registerTime: "2024-03-24 09:30:42",
    dataDescription: "\u5168\u56FD\u5404\u519C\u8D38\u5E02\u573A\u4E3B\u8981\u519C\u4EA7\u54C1\u7684\u65E5\u5747\u4EF7\u683C\u6570\u636E",
    materials: [
      {
        name: "\u6570\u636E\u91C7\u96C6\u65B9\u6CD5\u8BF4\u660E",
        type: "PDF\u6587\u6863",
        url: "http://example.com/agri-collection.pdf"
      }
    ],
    auditStatus: "\u5BA1\u6838\u901A\u8FC7",
    dataType: "\u7ED3\u6784\u5316\u6570\u636E",
    dataOrigin: "\u5E02\u573A\u8C03\u7814",
    registrant: "\u8D75\u7EA2",
    securityLevel: "\u516C\u5F00\u6570\u636E",
    storageLocation: "\u519C\u4E1A\u6570\u636E\u4E2D\u5FC3",
    dataSize: "200GB",
    formatType: "CSV",
    updateCycle: "\u6BCF\u65E5\u66F4\u65B0"
  },
  {
    evidenceNo: "DATA-2024-0008",
    evidenceTime: "2024-03-28 14:35:12",
    dataName: "\u667A\u6167\u6559\u80B2\u5B66\u751F\u884C\u4E3A\u6570\u636E",
    ownerName: "\u5317\u4EAC\u667A\u6167\u6559\u80B2\u7814\u7A76\u9662",
    createTime: "2024-03-25 10:15:28",
    registerType: "\u521D\u59CB\u767B\u8BB0",
    registerTime: "2024-03-26 16:40:30",
    dataDescription: "\u901A\u8FC7\u667A\u80FD\u6559\u5BA4\u91C7\u96C6\u7684\u5B66\u751F\u5B66\u4E60\u884C\u4E3A\u6570\u636E\uFF0C\u5305\u62EC\u8BFE\u5802\u53C2\u4E0E\u5EA6\u3001\u4E92\u52A8\u9891\u7387\u7B49\u6307\u6807",
    materials: [
      {
        name: "\u6570\u636E\u91C7\u96C6\u65B9\u6848",
        type: "PDF\u6587\u6863",
        url: "http://example.com/education-collection.pdf"
      },
      {
        name: "\u6570\u636E\u5B89\u5168\u8BC4\u4F30\u62A5\u544A",
        type: "PDF\u6587\u6863",
        url: "http://example.com/education-security.pdf"
      }
    ],
    auditStatus: "\u5BA1\u6838\u901A\u8FC7",
    dataType: "\u7ED3\u6784\u5316\u6570\u636E",
    dataOrigin: "\u667A\u80FD\u6559\u5BA4\u7CFB\u7EDF",
    registrant: "\u94B1\u660E",
    securityLevel: "\u5185\u90E8\u6570\u636E",
    storageLocation: "\u6559\u80B2\u4E91\u6570\u636E\u4E2D\u5FC3",
    dataSize: "1.2TB",
    formatType: "JSON",
    updateCycle: "\u6BCF\u65E5\u66F4\u65B0"
  },
  {
    evidenceNo: "DATA-2024-0009",
    evidenceTime: "2024-03-30 09:25:48",
    dataName: "\u667A\u80FD\u5BB6\u5C45\u7528\u6237\u884C\u4E3A\u6570\u636E",
    ownerName: "\u667A\u6167\u751F\u6D3B\u79D1\u6280\u6709\u9650\u516C\u53F8",
    createTime: "2024-03-28 13:10:22",
    registerType: "\u521D\u59CB\u767B\u8BB0",
    registerTime: "2024-03-29 16:30:15",
    dataDescription: "\u667A\u80FD\u5BB6\u5C45\u8BBE\u5907\u91C7\u96C6\u7684\u7528\u6237\u751F\u6D3B\u4E60\u60EF\u6570\u636E\uFF0C\u5DF2\u8FDB\u884C\u533F\u540D\u5316\u5904\u7406",
    materials: [
      {
        name: "\u6570\u636E\u9690\u79C1\u4FDD\u62A4\u65B9\u6848",
        type: "PDF\u6587\u6863",
        url: "http://example.com/smart-home-privacy.pdf"
      }
    ],
    auditStatus: "\u5BA1\u6838\u4E0D\u901A\u8FC7",
    auditReason: "\u6570\u636E\u533F\u540D\u5316\u5904\u7406\u4E0D\u8DB3\uFF0C\u5EFA\u8BAE\u8FDB\u4E00\u6B65\u52A0\u5F3A\u9690\u79C1\u4FDD\u62A4\u63AA\u65BD",
    dataType: "\u534A\u7ED3\u6784\u5316\u6570\u636E",
    dataOrigin: "\u667A\u80FD\u5BB6\u5C45\u8BBE\u5907",
    registrant: "\u5B59\u4EAE",
    securityLevel: "\u4FDD\u5BC6\u6570\u636E",
    storageLocation: "\u6DF1\u5733\u667A\u80FD\u4E91\u4E2D\u5FC3",
    dataSize: "750GB",
    formatType: "JSON",
    updateCycle: "\u5B9E\u65F6\u66F4\u65B0"
  },
  {
    evidenceNo: "DATA-2024-0010",
    evidenceTime: "2024-04-02 15:22:36",
    dataName: "\u73AF\u5883\u76D1\u6D4B\u6570\u636E\u96C6",
    ownerName: "\u56FD\u5BB6\u73AF\u5883\u4FDD\u62A4\u90E8",
    createTime: "2024-03-30 10:15:25",
    registerType: "\u521D\u59CB\u767B\u8BB0",
    registerTime: "2024-04-01 14:20:18",
    dataDescription: "\u5168\u56FD\u5404\u5730\u73AF\u5883\u76D1\u6D4B\u7AD9\u91C7\u96C6\u7684\u7A7A\u6C14\u8D28\u91CF\u3001\u6C34\u8D28\u3001\u566A\u58F0\u7B49\u73AF\u5883\u6570\u636E",
    materials: [
      {
        name: "\u6570\u636E\u8D28\u91CF\u62A5\u544A",
        type: "PDF\u6587\u6863",
        url: "http://example.com/environment-quality.pdf"
      },
      {
        name: "\u76D1\u6D4B\u70B9\u5206\u5E03\u8BF4\u660E",
        type: "Excel\u6587\u4EF6",
        url: "http://example.com/monitor-points.xlsx"
      }
    ],
    auditStatus: "\u5BA1\u6838\u901A\u8FC7",
    dataType: "\u65F6\u5E8F\u6570\u636E",
    dataOrigin: "\u73AF\u5883\u76D1\u6D4B\u7AD9",
    registrant: "\u5434\u519B",
    securityLevel: "\u516C\u5F00\u6570\u636E",
    storageLocation: "\u56FD\u5BB6\u73AF\u5883\u6570\u636E\u4E2D\u5FC3",
    dataSize: "3.5TB",
    formatType: "CSV/Parquet",
    updateCycle: "\u6BCF\u5C0F\u65F6\u66F4\u65B0"
  },
  {
    evidenceNo: "DATA-2024-0011",
    evidenceTime: "2024-04-05 11:45:30",
    dataName: "\u57CE\u5E02\u516C\u5171\u4EA4\u901A\u8FD0\u8425\u6570\u636E",
    ownerName: "\u4E0A\u6D77\u5E02\u4EA4\u901A\u59D4\u5458\u4F1A",
    createTime: "2024-04-02 09:10:15",
    registerType: "\u521D\u59CB\u767B\u8BB0",
    registerTime: "2024-04-03 16:30:42",
    dataDescription: "\u4E0A\u6D77\u5E02\u516C\u4EA4\u3001\u5730\u94C1\u7B49\u516C\u5171\u4EA4\u901A\u5DE5\u5177\u7684\u8FD0\u8425\u6570\u636E\uFF0C\u5305\u62EC\u5BA2\u6D41\u91CF\u3001\u8FD0\u884C\u72B6\u6001\u7B49",
    materials: [
      {
        name: "\u6570\u636E\u91C7\u96C6\u65B9\u6848",
        type: "PDF\u6587\u6863",
        url: "http://example.com/public-transit-collection.pdf"
      }
    ],
    auditStatus: "\u5BA1\u6838\u901A\u8FC7",
    dataType: "\u7ED3\u6784\u5316\u6570\u636E",
    dataOrigin: "\u4EA4\u901A\u4E00\u5361\u901A\u7CFB\u7EDF\u3001\u8F66\u8F86\u7BA1\u7406\u7CFB\u7EDF",
    registrant: "\u90D1\u6D9B",
    securityLevel: "\u5185\u90E8\u6570\u636E",
    storageLocation: "\u4E0A\u6D77\u4EA4\u901A\u6570\u636E\u4E2D\u5FC3",
    dataSize: "2.3TB",
    formatType: "JSON/Parquet",
    updateCycle: "\u6BCF\u65E5\u66F4\u65B0"
  },
  {
    evidenceNo: "DATA-2024-0012",
    evidenceTime: "2024-04-08 16:40:22",
    dataName: "\u5236\u9020\u4E1A\u8BBE\u5907\u8FD0\u884C\u6570\u636E",
    ownerName: "\u6C5F\u82CF\u5DE5\u4E1A\u6570\u5B57\u5316\u7814\u7A76\u9662",
    createTime: "2024-04-05 13:15:36",
    registerType: "\u521D\u59CB\u767B\u8BB0",
    registerTime: "2024-04-06 10:25:18",
    dataDescription: "\u5236\u9020\u4E1A\u4F01\u4E1A\u667A\u80FD\u8BBE\u5907\u7684\u8FD0\u884C\u72B6\u6001\u3001\u80FD\u8017\u3001\u4EA7\u91CF\u7B49\u6570\u636E",
    materials: [
      {
        name: "\u6570\u636E\u91C7\u96C6\u65B9\u6848",
        type: "PDF\u6587\u6863",
        url: "http://example.com/manufacture-collection.pdf"
      },
      {
        name: "\u6570\u636E\u5B89\u5168\u8BC4\u4F30\u62A5\u544A",
        type: "Word\u6587\u6863",
        url: "http://example.com/manufacture-security.docx"
      }
    ],
    auditStatus: "\u5BA1\u6838\u901A\u8FC7",
    dataType: "\u65F6\u5E8F\u6570\u636E",
    dataOrigin: "\u5DE5\u4E1A\u7269\u8054\u7F51\u8BBE\u5907",
    registrant: "\u9A6C\u6653",
    securityLevel: "\u4FDD\u5BC6\u6570\u636E",
    storageLocation: "\u82CF\u5DDE\u5DE5\u4E1A\u4E91\u5E73\u53F0",
    dataSize: "4.8TB",
    formatType: "Parquet/ORC",
    updateCycle: "\u5B9E\u65F6\u66F4\u65B0"
  },
  {
    evidenceNo: "DATA-2024-0013",
    evidenceTime: "2024-04-10 09:35:15",
    dataName: "\u7535\u529B\u80FD\u6E90\u6D88\u8017\u6570\u636E",
    ownerName: "\u56FD\u5BB6\u7535\u7F51\u6709\u9650\u516C\u53F8",
    createTime: "2024-04-07 14:20:28",
    registerType: "\u53D8\u66F4\u767B\u8BB0",
    registerTime: "2024-04-09 11:15:36",
    dataDescription: "\u5168\u56FD\u5404\u5730\u533A\u7535\u529B\u80FD\u6E90\u6D88\u8017\u6570\u636E\uFF0C\u5305\u62EC\u5DE5\u4E1A\u3001\u5546\u4E1A\u3001\u5C45\u6C11\u7528\u7535\u91CF\u7B49\u5206\u7C7B\u7EDF\u8BA1",
    materials: [
      {
        name: "\u6570\u636E\u53D8\u66F4\u8BF4\u660E",
        type: "PDF\u6587\u6863",
        url: "http://example.com/power-change.pdf"
      },
      {
        name: "\u6570\u636E\u7ED3\u6784\u6587\u6863",
        type: "Word\u6587\u6863",
        url: "http://example.com/power-structure.docx"
      }
    ],
    auditStatus: "\u5BA1\u6838\u901A\u8FC7",
    dataType: "\u7ED3\u6784\u5316\u6570\u636E",
    dataOrigin: "\u7535\u7F51\u76D1\u6D4B\u7CFB\u7EDF",
    registrant: "\u674E\u8FDB",
    securityLevel: "\u5185\u90E8\u6570\u636E",
    storageLocation: "\u56FD\u5BB6\u7535\u7F51\u6570\u636E\u4E2D\u5FC3",
    dataSize: "3.2TB",
    formatType: "CSV/Parquet",
    updateCycle: "\u6BCF\u5C0F\u65F6\u66F4\u65B0"
  },
  {
    evidenceNo: "DATA-2024-0014",
    evidenceTime: "2024-04-12 14:28:33",
    dataName: "\u519C\u4E1A\u751F\u4EA7\u76D1\u6D4B\u6570\u636E",
    ownerName: "\u4E2D\u56FD\u519C\u4E1A\u79D1\u5B66\u9662",
    createTime: "2024-04-10 09:30:15",
    registerType: "\u521D\u59CB\u767B\u8BB0",
    registerTime: "2024-04-11 16:45:20",
    dataDescription: "\u5168\u56FD\u519C\u4E1A\u751F\u4EA7\u60C5\u51B5\u76D1\u6D4B\u6570\u636E\uFF0C\u5305\u62EC\u4F5C\u7269\u751F\u957F\u72B6\u6001\u3001\u571F\u58E4\u6E7F\u5EA6\u3001\u6C14\u8C61\u6761\u4EF6\u7B49",
    materials: [
      {
        name: "\u6570\u636E\u91C7\u96C6\u7CFB\u7EDF\u8BF4\u660E",
        type: "PDF\u6587\u6863",
        url: "http://example.com/agriculture-system.pdf"
      }
    ],
    auditStatus: "\u5BA1\u6838\u901A\u8FC7",
    dataType: "\u6DF7\u5408\u6570\u636E",
    dataOrigin: "\u519C\u4E1A\u7269\u8054\u7F51\u7CFB\u7EDF",
    registrant: "\u5F20\u534E",
    securityLevel: "\u5185\u90E8\u6570\u636E",
    storageLocation: "\u519C\u4E1A\u79D1\u5B66\u9662\u6570\u636E\u4E2D\u5FC3",
    dataSize: "2.8TB",
    formatType: "JSON/CSV",
    updateCycle: "\u6BCF\u65E5\u66F4\u65B0"
  },
  {
    evidenceNo: "DATA-2024-0015",
    evidenceTime: "2024-04-15 11:30:45",
    dataName: "\u75AB\u60C5\u76D1\u6D4B\u6570\u636E",
    ownerName: "\u56FD\u5BB6\u536B\u751F\u5065\u5EB7\u59D4\u5458\u4F1A",
    createTime: "2024-04-12 16:20:33",
    registerType: "\u53D8\u66F4\u767B\u8BB0",
    registerTime: "2024-04-14 10:15:28",
    dataDescription: "\u5168\u56FD\u75AB\u60C5\u76D1\u6D4B\u6570\u636E\uFF0C\u5305\u62EC\u4F20\u67D3\u75C5\u53D1\u75C5\u7387\u3001\u533A\u57DF\u5206\u5E03\u7B49\uFF0C\u5DF2\u8FDB\u884C\u8131\u654F\u5904\u7406",
    materials: [
      {
        name: "\u6570\u636E\u53D8\u66F4\u7533\u8BF7",
        type: "PDF\u6587\u6863",
        url: "http://example.com/health-change.pdf"
      },
      {
        name: "\u6570\u636E\u4FDD\u5BC6\u534F\u8BAE",
        type: "PDF\u6587\u6863",
        url: "http://example.com/health-confidential.pdf"
      }
    ],
    auditStatus: "\u5BA1\u6838\u901A\u8FC7",
    dataType: "\u7ED3\u6784\u5316\u6570\u636E",
    dataOrigin: "\u533B\u7597\u536B\u751F\u7CFB\u7EDF",
    registrant: "\u738B\u5065",
    securityLevel: "\u4FDD\u5BC6\u6570\u636E",
    storageLocation: "\u56FD\u5BB6\u5065\u5EB7\u6570\u636E\u4E2D\u5FC3",
    dataSize: "1.8TB",
    formatType: "CSV/Excel",
    updateCycle: "\u6BCF\u65E5\u66F4\u65B0"
  }
];
var userEvidenceList = [
  {
    evidenceNo: "UE-2024-001",
    userAccount: "zhangsan@example.com",
    userType: "\u4E2A\u4EBA\u7528\u6237",
    authStatus: "\u5DF2\u8BA4\u8BC1",
    authTime: "2024-03-15 10:22:15",
    authChangeTime: "",
    permissionChangeTime: "2024-03-17 14:35:27",
    evidenceTime: "2024-03-18 09:32:15",
    registerTime: "2024-03-01 15:30:22",
    registerEmail: "zhangsan@example.com",
    registerPhone: "13800138001",
    evidenceHash: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
    personalInfo: {
      name: "\u5F20\u4E09",
      idCard: "110101199001011234",
      phone: "13800138001",
      faceRecognitionStatus: "\u5DF2\u901A\u8FC7"
    },
    authInfo: {
      auditor: "\u674E\u5BA1\u6838",
      auditTime: "2024-03-15 10:22:15",
      auditComment: "\u8D44\u6599\u9F50\u5168\uFF0C\u8EAB\u4EFD\u9A8C\u8BC1\u901A\u8FC7"
    },
    permissionChangeRecords: [
      {
        operator: "\u738B\u7BA1\u7406",
        changeTime: "2024-03-17 14:35:27",
        reason: "\u7528\u6237\u7533\u8BF7\u6570\u636E\u5206\u6790\u6743\u9650",
        beforePermissions: ["\u6570\u636E\u6D4F\u89C8", "\u6570\u636E\u4E0B\u8F7D"],
        afterPermissions: ["\u6570\u636E\u6D4F\u89C8", "\u6570\u636E\u4E0B\u8F7D", "\u6570\u636E\u5206\u6790"]
      }
    ],
    blockchainInfo: {
      chainId: "BC12345678",
      blockHeight: "3256782",
      transactionHash: "0x76f3d24a643597b95138995521675fb4f9d629cd103ac5be658d2a89c2ce69",
      consensusTime: "2024-03-18 09:33:05"
    }
  },
  {
    evidenceNo: "UE-2024-002",
    userAccount: "lisi@company.com",
    userType: "\u4F01\u4E1A\u7528\u6237",
    authStatus: "\u5DF2\u8BA4\u8BC1",
    authTime: "2024-03-10 16:45:33",
    authChangeTime: "2024-03-16 11:20:45",
    permissionChangeTime: "",
    evidenceTime: "2024-03-18 10:15:22",
    registerTime: "2024-03-05 09:15:30",
    registerEmail: "lisi@company.com",
    registerPhone: "13900139002",
    evidenceHash: "b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7",
    enterpriseInfo: {
      name: "\u67D0\u67D0\u79D1\u6280\u6709\u9650\u516C\u53F8",
      creditCode: "91110108MA01C6P52X",
      legalPerson: "\u674E\u56DB",
      legalPersonIdCard: "110101198505079876",
      contactPhone: "13900139002"
    },
    authInfo: {
      auditor: "\u674E\u5BA1\u6838",
      auditTime: "2024-03-10 16:45:33",
      auditComment: "\u4F01\u4E1A\u8D44\u8D28\u7B26\u5408\u8981\u6C42\uFF0C\u8BC1\u4EF6\u9F50\u5168"
    },
    authChangeRecords: [
      {
        changeType: "\u8054\u7CFB\u7535\u8BDD\u53D8\u66F4",
        changeTime: "2024-03-16 11:20:45",
        beforeChange: {
          "\u8054\u7CFB\u7535\u8BDD": "01062345678"
        },
        afterChange: {
          "\u8054\u7CFB\u7535\u8BDD": "01062345679"
        }
      }
    ],
    blockchainInfo: {
      chainId: "BC12345678",
      blockHeight: "3257001",
      transactionHash: "0x88a2d3b5c7e9f1d4a6b8c0e2d4f6a8b0c2d4e6f8a0b2c4d6e8f0a2c4e6a8b0",
      consensusTime: "2024-03-18 10:16:05"
    }
  },
  {
    evidenceNo: "UE-2024-003",
    userAccount: "wangwu@example.com",
    userType: "\u4E2A\u4EBA\u7528\u6237",
    authStatus: "\u8BA4\u8BC1\u4E2D",
    authTime: "",
    authChangeTime: "",
    permissionChangeTime: "",
    evidenceTime: "2024-03-18 11:05:33",
    registerTime: "2024-03-17 15:20:10",
    registerEmail: "wangwu@example.com",
    registerPhone: "13700137003",
    evidenceHash: "c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8",
    personalInfo: {
      name: "\u738B\u4E94",
      idCard: "110101199203034567",
      phone: "13700137003",
      faceRecognitionStatus: "\u5F85\u9A8C\u8BC1"
    },
    authInfo: {
      auditor: "\u674E\u5BA1\u6838",
      auditTime: "",
      auditComment: "\u7B49\u5F85\u4EBA\u8138\u8BC6\u522B\u9A8C\u8BC1"
    },
    blockchainInfo: {
      chainId: "BC12345678",
      blockHeight: "3257250",
      transactionHash: "0xc3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3",
      consensusTime: "2024-03-18 11:06:15"
    }
  },
  {
    evidenceNo: "UE-2024-004",
    userAccount: "zhaoliu@tech.org",
    userType: "\u4F01\u4E1A\u7528\u6237",
    authStatus: "\u672A\u8BA4\u8BC1",
    authTime: "",
    authChangeTime: "",
    permissionChangeTime: "",
    evidenceTime: "2024-03-18 14:22:47",
    registerTime: "2024-03-18 14:10:25",
    registerEmail: "zhaoliu@tech.org",
    registerPhone: "13600136004",
    evidenceHash: "d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9",
    blockchainInfo: {
      chainId: "BC12345678",
      blockHeight: "3257500",
      transactionHash: "0xd4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3",
      consensusTime: "2024-03-18 14:23:10"
    }
  },
  {
    evidenceNo: "UE-2024-005",
    userAccount: "sunqi@data.com",
    userType: "\u4F01\u4E1A\u7528\u6237",
    authStatus: "\u5DF2\u8BA4\u8BC1",
    authTime: "2024-03-15 11:30:22",
    authChangeTime: "",
    permissionChangeTime: "2024-03-18 16:36:09",
    evidenceTime: "2024-03-18 16:36:09",
    registerTime: "2024-03-10 10:00:15",
    registerEmail: "sunqi@data.com",
    registerPhone: "13500135005",
    evidenceHash: "e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0",
    enterpriseInfo: {
      name: "\u6570\u636E\u79D1\u6280\u80A1\u4EFD\u6709\u9650\u516C\u53F8",
      creditCode: "91110108MA01D7Q63Y",
      legalPerson: "\u5B59\u4E03",
      legalPersonIdCard: "110101198012123456",
      contactPhone: "13500135005"
    },
    authInfo: {
      auditor: "\u738B\u5BA1\u6838",
      auditTime: "2024-03-15 11:30:22",
      auditComment: "\u8D44\u6599\u5B8C\u6574\uFF0C\u7B26\u5408\u8BA4\u8BC1\u8981\u6C42"
    },
    permissionChangeRecords: [
      {
        operator: "\u674E\u7BA1\u7406",
        changeTime: "2024-03-18 16:36:09",
        reason: "\u63D0\u5347\u4F01\u4E1A\u6743\u9650\u7B49\u7EA7",
        beforePermissions: ["\u6570\u636E\u6D4F\u89C8", "\u6570\u636E\u4E0B\u8F7D", "\u57FA\u7840\u5206\u6790"],
        afterPermissions: ["\u6570\u636E\u6D4F\u89C8", "\u6570\u636E\u4E0B\u8F7D", "\u57FA\u7840\u5206\u6790", "\u9AD8\u7EA7\u5206\u6790", "\u6570\u636E\u5BFC\u51FA"]
      }
    ],
    blockchainInfo: {
      chainId: "BC12345678",
      blockHeight: "3257800",
      transactionHash: "0xe5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4",
      consensusTime: "2024-03-18 16:37:02"
    }
  }
];
var success = (data) => {
  return {
    code: 0,
    message: "success",
    data
  };
};
var handlePageQuery = (list, params) => {
  const { pageNum = 1, pageSize = 10, ...filters } = params;
  let filteredList = [...list];
  Object.keys(filters).forEach((key) => {
    if (filters[key]) {
      filteredList = filteredList.filter((item) => {
        if (key.includes("StartTime")) {
          const fieldName = key.replace("StartTime", "Time");
          return new Date(item[fieldName]).getTime() >= new Date(filters[key]).getTime();
        }
        if (key.includes("EndTime")) {
          const fieldName = key.replace("EndTime", "Time");
          return new Date(item[fieldName]).getTime() <= new Date(filters[key]).getTime();
        }
        if (typeof item[key] === "string") {
          return item[key].toLowerCase().includes(filters[key].toLowerCase());
        }
        return item[key] === filters[key];
      });
    }
  });
  const startIndex = (Number(pageNum) - 1) * Number(pageSize);
  const endIndex = startIndex + Number(pageSize);
  const pageList = filteredList.slice(startIndex, endIndex);
  return {
    list: pageList,
    total: filteredList.length
  };
};
var mock_default = [
  // 数据类存证列表接口
  {
    url: "/api/evidence/data/list",
    method: "get",
    response: (req) => {
      try {
        const params = req.query || {};
        const pageResult = handlePageQuery(dataEvidenceList, params);
        return success(pageResult);
      } catch (error) {
        console.error("\u5904\u7406\u6570\u636E\u5B58\u8BC1\u5217\u8868\u8BF7\u6C42\u65F6\u51FA\u9519:", error);
        return {
          code: 500,
          message: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF",
          data: null
        };
      }
    }
  },
  // 数据类存证详情接口
  {
    url: RegExp("/api/evidence/data/detail/.*"),
    method: "get",
    response: (req) => {
      try {
        const url = req.url;
        const evidenceNoMatch = url.match(/\/api\/evidence\/data\/detail\/([^\/\?]+)/);
        const evidenceNo = evidenceNoMatch ? evidenceNoMatch[1] : null;
        console.log("\u63A5\u6536\u5230\u8BE6\u60C5\u8BF7\u6C42\uFF0CURL:", url);
        console.log("\u63D0\u53D6\u7684evidenceNo:", evidenceNo);
        console.log("\u5F53\u524D\u6570\u636E\u5217\u8868\u957F\u5EA6:", dataEvidenceList.length);
        console.log("\u6240\u6709evidenceNo:", dataEvidenceList.map((item) => item.evidenceNo).join(", "));
        if (!evidenceNo) {
          console.error("\u65E0\u6CD5\u4ECEURL\u4E2D\u63D0\u53D6evidenceNo\u53C2\u6570");
          return {
            code: 400,
            message: "\u7F3A\u5C11\u5FC5\u8981\u53C2\u6570",
            data: null
          };
        }
        const detail = dataEvidenceList.find((item) => item.evidenceNo === evidenceNo);
        console.log("\u67E5\u627E\u5230\u7684\u8BE6\u60C5:", detail ? "\u627E\u5230\u6570\u636E" : "\u672A\u627E\u5230\u6570\u636E");
        if (!detail) {
          console.log("\u6570\u636E\u5217\u8868\u4E2D\u7684\u6240\u6709evidenceNo:", dataEvidenceList.map((item) => item.evidenceNo));
          console.log("\u4F20\u5165\u7684evidenceNo:", evidenceNo);
          const fallbackDetail = dataEvidenceList[0];
          console.log("\u4F7F\u7528fallback\u6570\u636E:", fallbackDetail?.evidenceNo);
          return success(fallbackDetail || null);
        }
        return success(detail);
      } catch (error) {
        console.error("\u5904\u7406\u6570\u636E\u5B58\u8BC1\u8BE6\u60C5\u8BF7\u6C42\u65F6\u51FA\u9519:", error);
        return {
          code: 500,
          message: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF",
          data: null
        };
      }
    }
  },
  // 低密开发存证详情接口
  {
    url: RegExp("/api/evidence/low-security/.*"),
    method: "get",
    response: (req) => {
      try {
        const url = req.url;
        const idMatch = url.match(/\/api\/evidence\/low-security\/([^\/\?]+)/);
        const id = idMatch ? idMatch[1] : null;
        console.log("\u63A5\u6536\u5230\u4F4E\u5BC6\u5F00\u53D1\u5B58\u8BC1\u8BE6\u60C5\u8BF7\u6C42\uFF0CURL:", url);
        console.log("\u63D0\u53D6\u7684ID:", id);
        console.log("\u5F53\u524D\u4F4E\u5BC6\u5F00\u53D1\u5B58\u8BC1\u5217\u8868\u957F\u5EA6:", lowSecurityEvidenceList.length);
        if (!id) {
          console.error("\u65E0\u6CD5\u4ECEURL\u4E2D\u63D0\u53D6ID\u53C2\u6570");
          return {
            code: 400,
            message: "\u7F3A\u5C11\u5FC5\u8981\u53C2\u6570",
            data: null
          };
        }
        const detail = lowSecurityEvidenceList.find((item) => item.id === id);
        console.log("\u67E5\u627E\u5230\u7684\u8BE6\u60C5:", detail ? "\u627E\u5230\u6570\u636E" : "\u672A\u627E\u5230\u6570\u636E");
        if (!detail) {
          console.log("\u6570\u636E\u5217\u8868\u4E2D\u7684\u6240\u6709ID:", lowSecurityEvidenceList.map((item) => item.id));
          console.log("\u4F20\u5165\u7684ID:", id);
          const fallbackDetail = lowSecurityEvidenceList[0];
          console.log("\u4F7F\u7528fallback\u6570\u636E:", fallbackDetail?.id);
          return success(fallbackDetail || null);
        }
        return success(detail);
      } catch (error) {
        console.error("\u5904\u7406\u4F4E\u5BC6\u5F00\u53D1\u5B58\u8BC1\u8BE6\u60C5\u8BF7\u6C42\u65F6\u51FA\u9519:", error);
        return {
          code: 500,
          message: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF",
          data: null
        };
      }
    }
  },
  // 高密开发存证详情接口
  {
    url: RegExp("/api/evidence/high-security/.*"),
    method: "get",
    response: (req) => {
      try {
        const url = req.url;
        const idMatch = url.match(/\/api\/evidence\/high-security\/([^\/\?]+)/);
        const id = idMatch ? idMatch[1] : null;
        console.log("\u63A5\u6536\u5230\u9AD8\u5BC6\u5F00\u53D1\u5B58\u8BC1\u8BE6\u60C5\u8BF7\u6C42\uFF0CURL:", url);
        console.log("\u63D0\u53D6\u7684ID:", id);
        console.log("\u5F53\u524D\u9AD8\u5BC6\u5F00\u53D1\u5B58\u8BC1\u5217\u8868\u957F\u5EA6:", highSecurityEvidenceList.length);
        if (!id) {
          console.error("\u65E0\u6CD5\u4ECEURL\u4E2D\u63D0\u53D6ID\u53C2\u6570");
          return {
            code: 400,
            message: "\u7F3A\u5C11\u5FC5\u8981\u53C2\u6570",
            data: null
          };
        }
        const detail = highSecurityEvidenceList.find((item) => item.id === id);
        console.log("\u67E5\u627E\u5230\u7684\u8BE6\u60C5:", detail ? "\u627E\u5230\u6570\u636E" : "\u672A\u627E\u5230\u6570\u636E");
        if (!detail) {
          console.log("\u6570\u636E\u5217\u8868\u4E2D\u7684\u6240\u6709ID:", highSecurityEvidenceList.map((item) => item.id));
          console.log("\u4F20\u5165\u7684ID:", id);
          const fallbackDetail = highSecurityEvidenceList[0];
          console.log("\u4F7F\u7528fallback\u6570\u636E:", fallbackDetail?.id);
          return success(fallbackDetail || null);
        }
        return success(detail);
      } catch (error) {
        console.error("\u5904\u7406\u9AD8\u5BC6\u5F00\u53D1\u5B58\u8BC1\u8BE6\u60C5\u8BF7\u6C42\u65F6\u51FA\u9519:", error);
        return {
          code: 500,
          message: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF",
          data: null
        };
      }
    }
  },
  // 通用存证列表接口
  {
    url: "/api/evidence/list",
    method: "get",
    response: (req) => {
      try {
        const params = req.query || {};
        let list = [];
        switch (params.productType) {
          case "DATA_RESOURCE":
          case "DATA_USAGE":
          case "DATA_FLOW":
          case "DEVELOPMENT":
          case "DELIVERY":
          case "PRODUCT_TRANSACTION":
          case "LOW_SECURITY":
            list = lowSecurityEvidenceList;
            break;
          case "HIGH_SECURITY":
            list = highSecurityEvidenceList;
            break;
          default:
            list = [
              ...lowSecurityEvidenceList,
              ...highSecurityEvidenceList
            ];
        }
        const pageResult = handlePageQuery(list, params);
        return success(pageResult);
      } catch (error) {
        console.error("\u5904\u7406\u5B58\u8BC1\u5217\u8868\u8BF7\u6C42\u65F6\u51FA\u9519:", error);
        return {
          code: 500,
          message: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF",
          data: null
        };
      }
    }
  },
  // 需求定制上架存证列表接口
  {
    url: "/api/evidence/requirement/publish",
    method: "get",
    response: (req) => {
      console.log("\u63A5\u6536\u5230\u9700\u6C42\u5B9A\u5236\u4E0A\u67B6\u5B58\u8BC1\u5217\u8868\u8BF7\u6C42:", req.query);
      try {
        console.log("\u5904\u7406\u9700\u6C42\u5B9A\u5236\u4E0A\u67B6\u5B58\u8BC1\u5217\u8868\u6570\u636E...");
        console.log("\u539F\u59CB\u6570\u636E\u957F\u5EA6:", requirementPublishEvidenceList.length);
        console.log("\u67E5\u8BE2\u53C2\u6570:", JSON.stringify(req.query));
        const result = handlePageQuery(requirementPublishEvidenceList, req.query);
        console.log(`\u8FD4\u56DE\u9700\u6C42\u5B9A\u5236\u4E0A\u67B6\u5B58\u8BC1\u5217\u8868\u6570\u636E: ${result.list.length} \u6761\u8BB0\u5F55\uFF0C\u603B\u8BA1 ${result.total} \u6761`);
        return {
          code: 0,
          message: "success",
          data: result
        };
      } catch (error) {
        console.error("\u5904\u7406\u9700\u6C42\u5B9A\u5236\u4E0A\u67B6\u5B58\u8BC1\u5217\u8868\u8BF7\u6C42\u51FA\u9519:", error);
        console.error("\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F:", error.stack || error.message || error);
        return {
          code: 500,
          message: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF:" + (error.message || "\u672A\u77E5\u9519\u8BEF"),
          data: null
        };
      }
    }
  },
  // 需求定制上架存证详情接口
  {
    url: RegExp("/api/evidence/requirement/publish/.*"),
    method: "get",
    response: (req) => {
      try {
        const url = req.url;
        console.log("\u63A5\u6536\u5230\u9700\u6C42\u5B9A\u5236\u4E0A\u67B6\u5B58\u8BC1\u8BE6\u60C5\u8BF7\u6C42\uFF0CURL:", url);
        const evidenceNoMatch = url.match(/\/api\/evidence\/requirement\/publish\/([^\/]+)/);
        const evidenceNo = evidenceNoMatch ? evidenceNoMatch[1] : null;
        console.log("\u63D0\u53D6\u7684evidenceNo:", evidenceNo);
        if (!evidenceNo) {
          console.error("\u65E0\u6CD5\u4ECEURL\u4E2D\u63D0\u53D6evidenceNo\u53C2\u6570");
          return {
            code: 400,
            message: "\u7F3A\u5C11\u5FC5\u8981\u53C2\u6570",
            data: null
          };
        }
        console.log("\u67E5\u627E\u8BB0\u5F55\uFF0CevidenceNo:", evidenceNo);
        console.log("\u53EF\u7528\u7684\u9700\u6C42\u5B9A\u5236\u4E0A\u67B6\u8BB0\u5F55\u6570:", requirementPublishEvidenceList.length);
        const detail = requirementPublishEvidenceList.find((item) => item.evidenceNo === evidenceNo);
        console.log("\u67E5\u627E\u5230\u7684\u8BE6\u60C5:", detail ? "\u627E\u5230\u6570\u636E" : "\u672A\u627E\u5230\u6570\u636E");
        if (!detail) {
          console.log("\u5B58\u8BC1\u5217\u8868\u4E2D\u7684\u6240\u6709evidenceNo:", requirementPublishEvidenceList.map((item) => item.evidenceNo).join(", "));
          console.log("\u4F20\u5165\u7684evidenceNo:", evidenceNo);
          const fallbackDetail = requirementPublishEvidenceList[0];
          console.log("\u4F7F\u7528fallback\u6570\u636E:", fallbackDetail?.evidenceNo);
          return success(fallbackDetail || null);
        }
        return success(detail);
      } catch (error) {
        console.error("\u5904\u7406\u9700\u6C42\u5B9A\u5236\u4E0A\u67B6\u5B58\u8BC1\u8BE6\u60C5\u8BF7\u6C42\u65F6\u51FA\u9519:", error);
        console.error("\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F:", error.stack || error.message || error);
        return {
          code: 500,
          message: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF:" + (error.message || "\u672A\u77E5\u9519\u8BEF"),
          data: null
        };
      }
    }
  },
  // 需求认领记录存证列表接口
  {
    url: "/api/evidence/requirement/claim",
    method: "get",
    response: (req) => {
      console.log("\u63A5\u6536\u5230\u9700\u6C42\u8BA4\u9886\u8BB0\u5F55\u5B58\u8BC1\u5217\u8868\u8BF7\u6C42:", req.query);
      try {
        console.log("\u5904\u7406\u9700\u6C42\u8BA4\u9886\u8BB0\u5F55\u5B58\u8BC1\u5217\u8868\u6570\u636E...");
        console.log("\u539F\u59CB\u6570\u636E\u957F\u5EA6:", requirementClaimEvidenceList.length);
        console.log("\u67E5\u8BE2\u53C2\u6570:", JSON.stringify(req.query));
        const result = handlePageQuery(requirementClaimEvidenceList, req.query);
        console.log(`\u8FD4\u56DE\u9700\u6C42\u8BA4\u9886\u8BB0\u5F55\u5B58\u8BC1\u5217\u8868\u6570\u636E: ${result.list.length} \u6761\u8BB0\u5F55\uFF0C\u603B\u8BA1 ${result.total} \u6761`);
        return {
          code: 0,
          message: "success",
          data: result
        };
      } catch (error) {
        console.error("\u5904\u7406\u9700\u6C42\u8BA4\u9886\u8BB0\u5F55\u5B58\u8BC1\u5217\u8868\u8BF7\u6C42\u51FA\u9519:", error);
        console.error("\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F:", error.stack || error.message || error);
        return {
          code: 500,
          message: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF:" + (error.message || "\u672A\u77E5\u9519\u8BEF"),
          data: null
        };
      }
    }
  },
  // 需求认领记录存证详情接口
  {
    url: RegExp("/api/evidence/requirement/claim/.*"),
    method: "get",
    response: (req) => {
      try {
        const url = req.url;
        console.log("\u63A5\u6536\u5230\u9700\u6C42\u8BA4\u9886\u8BB0\u5F55\u5B58\u8BC1\u8BE6\u60C5\u8BF7\u6C42\uFF0CURL:", url);
        const evidenceNoMatch = url.match(/\/api\/evidence\/requirement\/claim\/([^\/]+)/);
        const evidenceNo = evidenceNoMatch ? evidenceNoMatch[1] : null;
        console.log("\u63D0\u53D6\u7684evidenceNo:", evidenceNo);
        if (!evidenceNo) {
          console.error("\u65E0\u6CD5\u4ECEURL\u4E2D\u63D0\u53D6evidenceNo\u53C2\u6570");
          return {
            code: 400,
            message: "\u7F3A\u5C11\u5FC5\u8981\u53C2\u6570",
            data: null
          };
        }
        console.log("\u67E5\u627E\u8BB0\u5F55\uFF0CevidenceNo:", evidenceNo);
        console.log("\u53EF\u7528\u7684\u8BA4\u9886\u8BB0\u5F55\u6570:", requirementClaimEvidenceList.length);
        const detail = requirementClaimEvidenceList.find((item) => item.evidenceNo === evidenceNo);
        console.log("\u67E5\u627E\u5230\u7684\u8BE6\u60C5:", detail ? "\u627E\u5230\u6570\u636E" : "\u672A\u627E\u5230\u6570\u636E");
        if (!detail) {
          console.log("\u5B58\u8BC1\u5217\u8868\u4E2D\u7684\u6240\u6709evidenceNo:", requirementClaimEvidenceList.map((item) => item.evidenceNo).join(", "));
          console.log("\u4F20\u5165\u7684evidenceNo:", evidenceNo);
          const fallbackDetail = requirementClaimEvidenceList[0];
          console.log("\u4F7F\u7528fallback\u6570\u636E:", fallbackDetail?.evidenceNo);
          return success(fallbackDetail || null);
        }
        return success(detail);
      } catch (error) {
        console.error("\u5904\u7406\u9700\u6C42\u8BA4\u9886\u8BB0\u5F55\u5B58\u8BC1\u8BE6\u60C5\u8BF7\u6C42\u65F6\u51FA\u9519:", error);
        console.error("\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F:", error.stack || error.message || error);
        return {
          code: 500,
          message: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF:" + (error.message || "\u672A\u77E5\u9519\u8BEF"),
          data: null
        };
      }
    }
  },
  // 添加用户体系存证相关API
  {
    url: "/api/v1/user-evidence/list",
    method: "get",
    response: (req) => {
      console.log("\u63A5\u6536\u5230\u7528\u6237\u4F53\u7CFB\u5B58\u8BC1\u5217\u8868\u8BF7\u6C42:", req.query);
      const params = req.query || {};
      const pageNum = parseInt(params.pageNum) || 1;
      const pageSize = parseInt(params.pageSize) || 10;
      const userAccount = params.userAccount || "";
      const userType = params.userType || "";
      const authStatus = params.authStatus || "";
      const authTimeStart = params.authTimeStart || "";
      const authTimeEnd = params.authTimeEnd || "";
      console.log("\u5904\u7406\u7528\u6237\u4F53\u7CFB\u5B58\u8BC1\u5217\u8868\u6570\u636E...");
      let filteredData = [...userEvidenceList];
      if (userAccount) {
        filteredData = filteredData.filter((item) => item.userAccount.includes(userAccount));
      }
      if (userType) {
        filteredData = filteredData.filter((item) => item.userType === userType);
      }
      if (authStatus) {
        filteredData = filteredData.filter((item) => item.authStatus === authStatus);
      }
      if (authTimeStart && authTimeEnd) {
        filteredData = filteredData.filter((item) => {
          if (!item.authTime) return false;
          const time = new Date(item.authTime).getTime();
          const start = new Date(authTimeStart).getTime();
          const end = new Date(authTimeEnd).getTime();
          return time >= start && time <= end;
        });
      }
      const startIdx = (pageNum - 1) * pageSize;
      const endIdx = startIdx + pageSize;
      const pageData = filteredData.slice(startIdx, endIdx);
      console.log(`\u8FD4\u56DE\u7528\u6237\u4F53\u7CFB\u5B58\u8BC1\u5217\u8868\u6570\u636E: ${pageData.length} \u6761\u8BB0\u5F55\uFF0C\u603B\u8BA1 ${filteredData.length} \u6761`);
      return {
        code: 0,
        message: "success",
        data: {
          list: pageData,
          total: filteredData.length
        }
      };
    }
  },
  // 获取用户体系存证详情
  {
    url: RegExp("/api/v1/user-evidence/detail/(.*)"),
    method: "get",
    response: (req) => {
      console.log("\u63A5\u6536\u5230\u7528\u6237\u4F53\u7CFB\u5B58\u8BC1\u8BE6\u60C5\u8BF7\u6C42\uFF0CURL:", req.url);
      const match = req.url.match(/\/api\/v1\/user-evidence\/detail\/([^?]+)/);
      const evidenceNo = match ? match[1] : "";
      console.log("\u63D0\u53D6\u7684evidenceNo:", evidenceNo);
      console.log("\u67E5\u627E\u8BB0\u5F55\uFF0CevidenceNo:", evidenceNo);
      console.log("\u53EF\u7528\u7684\u7528\u6237\u4F53\u7CFB\u5B58\u8BC1\u8BB0\u5F55\u6570:", userEvidenceList.length);
      const detail = userEvidenceList.find((item) => item.evidenceNo === evidenceNo);
      console.log("\u67E5\u627E\u5230\u7684\u8BE6\u60C5:", detail ? "\u627E\u5230\u6570\u636E" : "\u672A\u627E\u5230\u6570\u636E");
      if (detail) {
        return {
          code: 0,
          message: "success",
          data: detail
        };
      } else {
        return {
          code: 404,
          message: "\u672A\u627E\u5230\u5BF9\u5E94\u7684\u5B58\u8BC1\u8BB0\u5F55",
          data: null
        };
      }
    }
  },
  // 导出用户体系存证列表
  {
    url: "/api/v1/user-evidence/export",
    method: "get",
    response: () => {
      console.log("\u63A5\u6536\u5230\u5BFC\u51FA\u7528\u6237\u4F53\u7CFB\u5B58\u8BC1\u5217\u8868\u8BF7\u6C42");
      return {
        code: 0,
        message: "success",
        data: new Blob(["\u7528\u6237\u4F53\u7CFB\u5B58\u8BC1\u5BFC\u51FA\u6570\u636E\u6A21\u62DF"], { type: "application/vnd.ms-excel" })
      };
    }
  },
  // 删除用户体系存证
  {
    url: RegExp("/api/v1/user-evidence/delete/(.*)"),
    method: "delete",
    response: (req) => {
      console.log("\u63A5\u6536\u5230\u5220\u9664\u7528\u6237\u4F53\u7CFB\u5B58\u8BC1\u8BF7\u6C42\uFF0CURL:", req.url);
      const match = req.url.match(/\/api\/v1\/user-evidence\/delete\/([^?]+)/);
      const evidenceNo = match ? match[1] : "";
      console.log("\u5220\u9664\u7684evidenceNo:", evidenceNo);
      return {
        code: 0,
        message: "success",
        data: null
      };
    }
  }
];
export {
  mock_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21vY2svc3JjL21vY2svc3JjL21vY2svZXZpZGVuY2UudHMiLCAic3JjL21vY2svc3JjL21vY2svc3JjL21vY2svaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiRDpcXFxcY3Vyc29yQ29kZVxcXFxcdTY1NzBcdTYzNkVcdTg5ODFcdTdEMjBcdThGRDBcdTg0MjVcdTVFNzNcdTUzRjBcXFxcXHU2NTcwXHU2MzZFXHU3QkExXHU3NDA2XHU1QjUwXHU3Q0ZCXHU3RURGXFxcXHBhY2thZ2VzXFxcXGV2aWRlbmNlLW1hbmFnZVxcXFxzcmNcXFxcbW9ja1xcXFxldmlkZW5jZS50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCJEOlxcXFxjdXJzb3JDb2RlXFxcXFx1NjU3MFx1NjM2RVx1ODk4MVx1N0QyMFx1OEZEMFx1ODQyNVx1NUU3M1x1NTNGMFxcXFxcdTY1NzBcdTYzNkVcdTdCQTFcdTc0MDZcdTVCNTBcdTdDRkJcdTdFREZcXFxccGFja2FnZXNcXFxcZXZpZGVuY2UtbWFuYWdlXFxcXHNyY1xcXFxtb2NrXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9EOi9jdXJzb3JDb2RlLyVFNiU5NSVCMCVFNiU4RCVBRSVFOCVBNiU4MSVFNyVCNCVBMCVFOCVCRiU5MCVFOCU5MCVBNSVFNSVCOSVCMyVFNSU4RiVCMC8lRTYlOTUlQjAlRTYlOEQlQUUlRTclQUUlQTElRTclOTAlODYlRTUlQUQlOTAlRTclQjMlQkIlRTclQkIlOUYvcGFja2FnZXMvZXZpZGVuY2UtbWFuYWdlL3NyYy9tb2NrL2V2aWRlbmNlLnRzXCI7aW1wb3J0IHR5cGUgeyBMb3dTZWN1cml0eUV2aWRlbmNlLCBIaWdoU2VjdXJpdHlFdmlkZW5jZSB9IGZyb20gJ0AvdHlwZXMvZXZpZGVuY2UnO1xuaW1wb3J0IHR5cGUgeyBEYXRhRXZpZGVuY2UgfSBmcm9tICdAL3R5cGVzJztcblxuLy8gXHU2QTIxXHU2MkRGXHU2NTcwXHU2MzZFXG5jb25zdCBsb3dTZWN1cml0eUV2aWRlbmNlOiBMb3dTZWN1cml0eUV2aWRlbmNlID0ge1xuICBpZDogJzEnLFxuICBwcm9kdWN0TmFtZTogJ1x1NjU3MFx1NjM2RVx1NTIwNlx1Njc5MFx1NUU3M1x1NTNGMCcsXG4gIHByb2R1Y3RUeXBlOiAnTE9XX1NFQ1VSSVRZJyxcbiAgZGV2ZWxvcG1lbnRUZWFtOiAnXHU2NTcwXHU2MzZFXHU3ODE0XHU1M0QxXHU1NkUyXHU5NjFGJyxcbiAgc3RhcnRUaW1lOiAnMjAyNC0wMS0wMScsXG4gIGVuZFRpbWU6ICcyMDI0LTAzLTAxJyxcbiAgdGVjaG5pY2FsQXJjaGl0ZWN0dXJlOiAnXHU5MUM3XHU3NTI4VnVlMyArIFR5cGVTY3JpcHQgKyBFbGVtZW50IFBsdXNcdTVGMDBcdTUzRDFcdUZGMENcdTU0MEVcdTdBRUZcdTRGN0ZcdTc1MjhOb2RlLmpzICsgRXhwcmVzc1x1RkYwQ1x1NjU3MFx1NjM2RVx1NUU5M1x1NEY3Rlx1NzUyOE15U1FMJyxcbiAgZnVuY3Rpb25hbE1vZHVsZXM6IFtcbiAgICAnXHU2NTcwXHU2MzZFXHU1QkZDXHU1MTY1XHU1QkZDXHU1MUZBJyxcbiAgICAnXHU2NTcwXHU2MzZFXHU2RTA1XHU2RDE3XHU4RjZDXHU2MzYyJyxcbiAgICAnXHU2NTcwXHU2MzZFXHU1M0VGXHU4OUM2XHU1MzE2XHU1QzU1XHU3OTNBJyxcbiAgICAnXHU2MkE1XHU4ODY4XHU3NTFGXHU2MjEwJ1xuICBdLFxuICB2ZXJzaW9uczogW1xuICAgIHtcbiAgICAgIHZlcnNpb246ICcxLjAuMCcsXG4gICAgICB1cGRhdGVUaW1lOiAnMjAyNC0wMi0wMScsXG4gICAgICB1cGRhdGVDb250ZW50OiAnXHU1QjhDXHU2MjEwXHU1N0ZBXHU3ODQwXHU1MjlGXHU4MEZEXHU1RjAwXHU1M0QxJ1xuICAgIH0sXG4gICAge1xuICAgICAgdmVyc2lvbjogJzEuMS4wJyxcbiAgICAgIHVwZGF0ZVRpbWU6ICcyMDI0LTAyLTE1JyxcbiAgICAgIHVwZGF0ZUNvbnRlbnQ6ICdcdTRGMThcdTUzMTZcdTY1NzBcdTYzNkVcdTVCRkNcdTUxNjVcdTYwMjdcdTgwRkRcdUZGMENcdTY1QjBcdTU4OUVcdTY1NzBcdTYzNkVcdTVCRkNcdTUxRkFcdTUyOUZcdTgwRkQnXG4gICAgfSxcbiAgICB7XG4gICAgICB2ZXJzaW9uOiAnMS4yLjAnLFxuICAgICAgdXBkYXRlVGltZTogJzIwMjQtMDMtMDEnLFxuICAgICAgdXBkYXRlQ29udGVudDogJ1x1NjVCMFx1NTg5RVx1NjJBNVx1ODg2OFx1NzUxRlx1NjIxMFx1NTI5Rlx1ODBGRFx1RkYwQ1x1NEYxOFx1NTMxNlx1NzUyOFx1NjIzN1x1NzU0Q1x1OTc2MidcbiAgICB9XG4gIF0sXG4gIHRlc3RSZXBvcnRzOiBbXG4gICAge1xuICAgICAgbmFtZTogJ1x1NTI5Rlx1ODBGRFx1NkQ0Qlx1OEJENVx1NjJBNVx1NTQ0QScsXG4gICAgICB0eXBlOiAnXHU1MjlGXHU4MEZEXHU2RDRCXHU4QkQ1JyxcbiAgICAgIGZpbGVVcmw6ICdodHRwOi8vZXhhbXBsZS5jb20vdGVzdC1yZXBvcnQucGRmJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1x1NjAyN1x1ODBGRFx1NkQ0Qlx1OEJENVx1NjJBNVx1NTQ0QScsXG4gICAgICB0eXBlOiAnXHU2MDI3XHU4MEZEXHU2RDRCXHU4QkQ1JyxcbiAgICAgIGZpbGVVcmw6ICdodHRwOi8vZXhhbXBsZS5jb20vcGVyZm9ybWFuY2UtcmVwb3J0LnBkZidcbiAgICB9XG4gIF0sXG4gIGV2aWRlbmNlTm86ICdFVklERU5DRS0yMDI0LTAwMScsXG4gIGV2aWRlbmNlVGltZTogJzIwMjQtMDMtMDEnXG59O1xuXG5jb25zdCBoaWdoU2VjdXJpdHlFdmlkZW5jZTogSGlnaFNlY3VyaXR5RXZpZGVuY2UgPSB7XG4gIC4uLmxvd1NlY3VyaXR5RXZpZGVuY2UsXG4gIGlkOiAnMicsXG4gIHByb2R1Y3ROYW1lOiAnXHU5NjkwXHU3OUMxXHU4QkExXHU3Qjk3XHU1RTczXHU1M0YwJyxcbiAgcHJvZHVjdFR5cGU6ICdISUdIX1NFQ1VSSVRZJyxcbiAgZGV2ZWxvcG1lbnRUZWFtOiAnXHU1Qjg5XHU1MTY4XHU3ODE0XHU1M0QxXHU1NkUyXHU5NjFGJyxcbiAgc3RhcnRUaW1lOiAnMjAyNC0wMS0xNScsXG4gIGVuZFRpbWU6ICcyMDI0LTAzLTE1JyxcbiAgdGVjaG5pY2FsQXJjaGl0ZWN0dXJlOiAnXHU5MUM3XHU3NTI4XHU4MDU0XHU5MEE2XHU1QjY2XHU0RTYwXHU2ODQ2XHU2N0I2XHVGRjBDXHU3RUQzXHU1NDA4TVBDXHU1NDhDXHU1NDBDXHU2MDAxXHU1MkEwXHU1QkM2XHU2MjgwXHU2NzJGXHVGRjBDXHU1QjlFXHU3M0IwXHU2NTcwXHU2MzZFXHU1Qjg5XHU1MTY4XHU4QkExXHU3Qjk3JyxcbiAgZnVuY3Rpb25hbE1vZHVsZXM6IFtcbiAgICAnXHU4MDU0XHU5MEE2XHU1QjY2XHU0RTYwXHU4QkFEXHU3RUMzJyxcbiAgICAnXHU1Qjg5XHU1MTY4XHU1OTFBXHU2NUI5XHU4QkExXHU3Qjk3JyxcbiAgICAnXHU5NjkwXHU3OUMxXHU2NTcwXHU2MzZFXHU2N0U1XHU4QkUyJyxcbiAgICAnXHU2QTIxXHU1NzhCXHU1Qjg5XHU1MTY4XHU4QkM0XHU0RjMwJ1xuICBdLFxuICB2ZXJzaW9uczogW1xuICAgIHtcbiAgICAgIHZlcnNpb246ICcxLjAuMCcsXG4gICAgICB1cGRhdGVUaW1lOiAnMjAyNC0wMi0xNScsXG4gICAgICB1cGRhdGVDb250ZW50OiAnXHU1QjhDXHU2MjEwXHU1N0ZBXHU3ODQwXHU2ODQ2XHU2N0I2XHU2NDJEXHU1RUZBJ1xuICAgIH0sXG4gICAge1xuICAgICAgdmVyc2lvbjogJzEuMS4wJyxcbiAgICAgIHVwZGF0ZVRpbWU6ICcyMDI0LTAzLTAxJyxcbiAgICAgIHVwZGF0ZUNvbnRlbnQ6ICdcdTVCOUVcdTczQjBcdTgwNTRcdTkwQTZcdTVCNjZcdTRFNjBcdTY4MzhcdTVGQzNcdTUyOUZcdTgwRkQnXG4gICAgfSxcbiAgICB7XG4gICAgICB2ZXJzaW9uOiAnMS4yLjAnLFxuICAgICAgdXBkYXRlVGltZTogJzIwMjQtMDMtMTUnLFxuICAgICAgdXBkYXRlQ29udGVudDogJ1x1NjVCMFx1NTg5RU1QQ1x1NTQ4Q1x1OTY5MFx1NzlDMVx1NjdFNVx1OEJFMlx1NTI5Rlx1ODBGRCdcbiAgICB9XG4gIF0sXG4gIHNlY3VyaXR5VGVjaG5vbG9naWVzOiBbXG4gICAge1xuICAgICAgbmFtZTogJ1x1ODA1NFx1OTBBNlx1NUI2Nlx1NEU2MCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1x1OTFDN1x1NzUyOFx1NkEyQVx1NTQxMVx1ODA1NFx1OTBBNlx1NUI2Nlx1NEU2MFx1Njg0Nlx1NjdCNlx1RkYwQ1x1NUI5RVx1NzNCMFx1NTkxQVx1NjVCOVx1NjU3MFx1NjM2RVx1ODA1NFx1NTQwOFx1NUVGQVx1NkEyMScsXG4gICAgICBzZWN1cml0eU1lYXN1cmVzOiBbXG4gICAgICAgICdcdTVERUVcdTUyMDZcdTk2OTBcdTc5QzFcdTRGRERcdTYyQTQnLFxuICAgICAgICAnXHU2QTIxXHU1NzhCXHU1M0MyXHU2NTcwXHU1MkEwXHU1QkM2XHU0RjIwXHU4RjkzJyxcbiAgICAgICAgJ1x1NUI4OVx1NTE2OFx1ODA1QVx1NTQwOFx1NTM0Rlx1OEJBRSdcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdcdTVCODlcdTUxNjhcdTU5MUFcdTY1QjlcdThCQTFcdTdCOTcnLFxuICAgICAgZGVzY3JpcHRpb246ICdcdTRGN0ZcdTc1MjhNUENcdTYyODBcdTY3MkZcdTVCOUVcdTczQjBcdTU5MUFcdTY1QjlcdTY1NzBcdTYzNkVcdTVCODlcdTUxNjhcdThCQTFcdTdCOTcnLFxuICAgICAgc2VjdXJpdHlNZWFzdXJlczogW1xuICAgICAgICAnXHU3OUQ4XHU1QkM2XHU1MjA2XHU0RUFCXHU1MzRGXHU4QkFFJyxcbiAgICAgICAgJ1x1OTZGNlx1NzdFNVx1OEJDNlx1OEJDMVx1NjYwRScsXG4gICAgICAgICdcdTVCODlcdTUxNjhcdTkwMUFcdTRGRTFcdTkwMUFcdTkwNTMnXG4gICAgICBdXG4gICAgfVxuICBdLFxuICBkYXRhU291cmNlczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdcdTRGMDFcdTRFMUFcdTY1NzBcdTYzNkUnLFxuICAgICAgZGVzY3JpcHRpb246ICdcdTY3NjVcdTgxRUFcdTU0MDhcdTRGNUNcdTRGMDFcdTRFMUFcdTc2ODRcdTgxMzFcdTY1NEZcdTY1NzBcdTYzNkUnLFxuICAgICAgbGVnYWxpdHk6ICdcdTVERjJcdTdCN0VcdTdGNzJcdTY1NzBcdTYzNkVcdTRGN0ZcdTc1MjhcdTUzNEZcdThCQUVcdUZGMENcdTc4NkVcdTRGRERcdTY1NzBcdTYzNkVcdTY3NjVcdTZFOTBcdTU0MDhcdTZDRDUnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnXHU2NTNGXHU1RTlDXHU2NTcwXHU2MzZFJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnXHU2NTNGXHU1RTlDXHU5MEU4XHU5NUU4XHU2M0QwXHU0RjlCXHU3Njg0XHU1MkEwXHU1QkM2XHU2NTcwXHU2MzZFJyxcbiAgICAgIGxlZ2FsaXR5OiAnXHU1REYyXHU4M0I3XHU1Rjk3XHU2NTNGXHU1RTlDXHU2Mzg4XHU2NzQzXHVGRjBDXHU3QjI2XHU1NDA4XHU2NTcwXHU2MzZFXHU1Qjg5XHU1MTY4XHU4OUM0XHU4MzAzJ1xuICAgIH1cbiAgXSxcbiAgcHJpdmFjeVByb3RlY3Rpb246IHtcbiAgICBzdHJhdGVneTogJ1x1OTFDN1x1NzUyOFx1NTkxQVx1NUM0Mlx1NkIyMVx1OTY5MFx1NzlDMVx1NEZERFx1NjJBNFx1N0I1Nlx1NzU2NVx1RkYwQ1x1Nzg2RVx1NEZERFx1NjU3MFx1NjM2RVx1NUI4OVx1NTE2OCcsXG4gICAgdGVjaG5pY2FsTWVhc3VyZXM6IFtcbiAgICAgICdcdTY1NzBcdTYzNkVcdTgxMzFcdTY1NEZcdTU5MDRcdTc0MDYnLFxuICAgICAgJ1x1OEJCRlx1OTVFRVx1Njc0M1x1OTY1MFx1NjNBN1x1NTIzNicsXG4gICAgICAnXHU2NENEXHU0RjVDXHU1QkExXHU4QkExXHU2NUU1XHU1RkQ3JyxcbiAgICAgICdcdTUyQTBcdTVCQzZcdTRGMjBcdThGOTNcdTVCNThcdTUwQTgnXG4gICAgXVxuICB9LFxuICBldmlkZW5jZU5vOiAnRVZJREVOQ0UtMjAyNC0wMDInLFxuICBldmlkZW5jZVRpbWU6ICcyMDI0LTAzLTE1J1xufTtcblxuLy8gXHU0RjRFXHU1QkM2XHU1RUE2XHU0RUE3XHU1NEMxXHU1RjAwXHU1M0QxXHU1QjU4XHU4QkMxXHU1MjE3XHU4ODY4XHU2NTcwXHU2MzZFXG5jb25zdCBsb3dTZWN1cml0eUV2aWRlbmNlTGlzdDogTG93U2VjdXJpdHlFdmlkZW5jZVtdID0gW1xuICB7XG4gICAgaWQ6ICcxMDAwMScsXG4gICAgcHJvZHVjdE5hbWU6ICdcdTY1NzBcdTYzNkVcdTUyMDZcdTY3OTBcdTVFNzNcdTUzRjAnLFxuICAgIHByb2R1Y3RUeXBlOiAnTE9XX1NFQ1VSSVRZJyxcbiAgICBkZXZlbG9wbWVudFRlYW06ICdcdTY1NzBcdTVCNTdcdTYyODBcdTY3MkZcdTkwRTgnLFxuICAgIHN0YXJ0VGltZTogJzIwMjMtMDEtMTAnLFxuICAgIGVuZFRpbWU6ICcyMDIzLTA2LTIwJyxcbiAgICB0ZWNobmljYWxBcmNoaXRlY3R1cmU6ICdWdWUzICsgU3ByaW5nIEJvb3QgKyBNeVNRTCcsXG4gICAgZnVuY3Rpb25hbE1vZHVsZXM6IFtcbiAgICAgICdcdTY1NzBcdTYzNkVcdTkxQzdcdTk2QzZcdTZBMjFcdTU3NTcnLFxuICAgICAgJ1x1NjU3MFx1NjM2RVx1NkUwNVx1NkQxN1x1NkEyMVx1NTc1NycsXG4gICAgICAnXHU2NTcwXHU2MzZFXHU1MjA2XHU2NzkwXHU2QTIxXHU1NzU3JyxcbiAgICAgICdcdTY1NzBcdTYzNkVcdTUzRUZcdTg5QzZcdTUzMTZcdTZBMjFcdTU3NTcnLFxuICAgICAgJ1x1NjJBNVx1ODg2OFx1NUJGQ1x1NTFGQVx1NkEyMVx1NTc1NydcbiAgICBdLFxuICAgIHZlcnNpb25zOiBbXG4gICAgICB7XG4gICAgICAgIHZlcnNpb246ICd2MS4wLjAnLFxuICAgICAgICB1cGRhdGVUaW1lOiAnMjAyMy0wMy0xNScsXG4gICAgICAgIHVwZGF0ZUNvbnRlbnQ6ICdcdTUyMURcdTU5Q0JcdTcyNDhcdTY3MkNcdUZGMENcdTVCOENcdTYyMTBcdTU3RkFcdTc4NDBcdTUyOUZcdTgwRkRcdTVGMDBcdTUzRDEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2ZXJzaW9uOiAndjEuMS4wJyxcbiAgICAgICAgdXBkYXRlVGltZTogJzIwMjMtMDUtMjAnLFxuICAgICAgICB1cGRhdGVDb250ZW50OiAnXHU0RjE4XHU1MzE2XHU2NTcwXHU2MzZFXHU1OTA0XHU3NDA2XHU2MDI3XHU4MEZEXHVGRjBDXHU2NUIwXHU1ODlFXHU4MUVBXHU1QjlBXHU0RTQ5XHU1MjA2XHU2NzkwXHU1MjlGXHU4MEZEJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmVyc2lvbjogJ3YxLjIuMCcsXG4gICAgICAgIHVwZGF0ZVRpbWU6ICcyMDIzLTA2LTE4JyxcbiAgICAgICAgdXBkYXRlQ29udGVudDogJ1x1NUI4Q1x1NTU4NFx1NjU3MFx1NjM2RVx1NTNFRlx1ODlDNlx1NTMxNlx1NTI5Rlx1ODBGRFx1RkYwQ1x1NjVCMFx1NTg5RVx1NTkxQVx1NzlDRFx1NTZGRVx1ODg2OFx1N0M3Qlx1NTc4QidcbiAgICAgIH1cbiAgICBdLFxuICAgIHRlc3RSZXBvcnRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdcdTUyOUZcdTgwRkRcdTZENEJcdThCRDVcdTYyQTVcdTU0NEEnLFxuICAgICAgICB0eXBlOiAnXHU1MjlGXHU4MEZEXHU2RDRCXHU4QkQ1JyxcbiAgICAgICAgZmlsZVVybDogJ2h0dHBzOi8vZXhhbXBsZS5jb20vcmVwb3J0cy8xMDAwMS9mdW5jdGlvbi5wZGYnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnXHU2MDI3XHU4MEZEXHU2RDRCXHU4QkQ1XHU2MkE1XHU1NDRBJyxcbiAgICAgICAgdHlwZTogJ1x1NjAyN1x1ODBGRFx1NkQ0Qlx1OEJENScsXG4gICAgICAgIGZpbGVVcmw6ICdodHRwczovL2V4YW1wbGUuY29tL3JlcG9ydHMvMTAwMDEvcGVyZm9ybWFuY2UucGRmJ1xuICAgICAgfVxuICAgIF0sXG4gICAgZXZpZGVuY2VObzogJ0VWLTIwMjMwNjIwLTAwMScsXG4gICAgZXZpZGVuY2VUaW1lOiAnMjAyMy0wNi0yMSdcbiAgfSxcbiAge1xuICAgIGlkOiAnMTAwMDInLFxuICAgIHByb2R1Y3ROYW1lOiAnXHU1QkEyXHU2MjM3XHU3QkExXHU3NDA2XHU3Q0ZCXHU3RURGJyxcbiAgICBwcm9kdWN0VHlwZTogJ0xPV19TRUNVUklUWScsXG4gICAgZGV2ZWxvcG1lbnRUZWFtOiAnXHU0RTFBXHU1MkExXHU3Q0ZCXHU3RURGXHU5MEU4JyxcbiAgICBzdGFydFRpbWU6ICcyMDIzLTAyLTE1JyxcbiAgICBlbmRUaW1lOiAnMjAyMy0wOC0xMCcsXG4gICAgdGVjaG5pY2FsQXJjaGl0ZWN0dXJlOiAnUmVhY3QgKyBOb2RlLmpzICsgTW9uZ29EQicsXG4gICAgZnVuY3Rpb25hbE1vZHVsZXM6IFtcbiAgICAgICdcdTVCQTJcdTYyMzdcdTRGRTFcdTYwNkZcdTdCQTFcdTc0MDYnLFxuICAgICAgJ1x1ODA1NFx1N0NGQlx1NEVCQVx1N0JBMVx1NzQwNicsXG4gICAgICAnXHU4RERGXHU4RkRCXHU4QkIwXHU1RjU1XHU3QkExXHU3NDA2JyxcbiAgICAgICdcdTdFREZcdThCQTFcdTUyMDZcdTY3OTAnLFxuICAgICAgJ1x1N0NGQlx1N0VERlx1N0JBMVx1NzQwNidcbiAgICBdLFxuICAgIHZlcnNpb25zOiBbXG4gICAgICB7XG4gICAgICAgIHZlcnNpb246ICd2MS4wLjAnLFxuICAgICAgICB1cGRhdGVUaW1lOiAnMjAyMy0wNC0yMCcsXG4gICAgICAgIHVwZGF0ZUNvbnRlbnQ6ICdcdTVCOENcdTYyMTBcdTVCQTJcdTYyMzdcdTRGRTFcdTYwNkZcdTdCQTFcdTc0MDZcdTU0OENcdTgwNTRcdTdDRkJcdTRFQkFcdTdCQTFcdTc0MDZcdTUyOUZcdTgwRkQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2ZXJzaW9uOiAndjEuMS4wJyxcbiAgICAgICAgdXBkYXRlVGltZTogJzIwMjMtMDYtMTUnLFxuICAgICAgICB1cGRhdGVDb250ZW50OiAnXHU1QjhDXHU2MjEwXHU4RERGXHU4RkRCXHU4QkIwXHU1RjU1XHU3QkExXHU3NDA2XHU1NDhDXHU1N0ZBXHU3ODQwXHU3RURGXHU4QkExXHU1MjlGXHU4MEZEJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmVyc2lvbjogJ3YxLjIuMCcsXG4gICAgICAgIHVwZGF0ZVRpbWU6ICcyMDIzLTA4LTA4JyxcbiAgICAgICAgdXBkYXRlQ29udGVudDogJ1x1NUI4Q1x1NTU4NFx1N0VERlx1OEJBMVx1NTIwNlx1Njc5MFx1NTI5Rlx1ODBGRFx1RkYwQ1x1NEYxOFx1NTMxNlx1NzUyOFx1NjIzN1x1NEY1M1x1OUE4QydcbiAgICAgIH1cbiAgICBdLFxuICAgIHRlc3RSZXBvcnRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdcdTUyOUZcdTgwRkRcdTZENEJcdThCRDVcdTYyQTVcdTU0NEEnLFxuICAgICAgICB0eXBlOiAnXHU1MjlGXHU4MEZEXHU2RDRCXHU4QkQ1JyxcbiAgICAgICAgZmlsZVVybDogJ2h0dHBzOi8vZXhhbXBsZS5jb20vcmVwb3J0cy8xMDAwMi9mdW5jdGlvbi5wZGYnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnXHU3NTI4XHU2MjM3XHU0RjUzXHU5QThDXHU2RDRCXHU4QkQ1XHU2MkE1XHU1NDRBJyxcbiAgICAgICAgdHlwZTogJ1x1NzUyOFx1NjIzN1x1NEY1M1x1OUE4QycsXG4gICAgICAgIGZpbGVVcmw6ICdodHRwczovL2V4YW1wbGUuY29tL3JlcG9ydHMvMTAwMDIvdXgucGRmJ1xuICAgICAgfVxuICAgIF0sXG4gICAgZXZpZGVuY2VObzogJ0VWLTIwMjMwODEwLTAwMicsXG4gICAgZXZpZGVuY2VUaW1lOiAnMjAyMy0wOC0xMidcbiAgfSxcbiAge1xuICAgIGlkOiAnMTAwMDMnLFxuICAgIHByb2R1Y3ROYW1lOiAnXHU4RDQ0XHU2RTkwXHU4QzAzXHU1RUE2XHU3Q0ZCXHU3RURGJyxcbiAgICBwcm9kdWN0VHlwZTogJ0xPV19TRUNVUklUWScsXG4gICAgZGV2ZWxvcG1lbnRUZWFtOiAnXHU1RTczXHU1M0YwXHU3ODE0XHU1M0QxXHU5MEU4JyxcbiAgICBzdGFydFRpbWU6ICcyMDIzLTAzLTA1JyxcbiAgICBlbmRUaW1lOiAnMjAyMy0wOS0xNScsXG4gICAgdGVjaG5pY2FsQXJjaGl0ZWN0dXJlOiAnQW5ndWxhciArIFNwcmluZyBDbG91ZCArIFBvc3RncmVTUUwnLFxuICAgIGZ1bmN0aW9uYWxNb2R1bGVzOiBbXG4gICAgICAnXHU4RDQ0XHU2RTkwXHU3QkExXHU3NDA2JyxcbiAgICAgICdcdTRFRkJcdTUyQTFcdThDMDNcdTVFQTYnLFxuICAgICAgJ1x1NzZEMVx1NjNBN1x1NTQ0QVx1OEI2NicsXG4gICAgICAnXHU4RDQ0XHU2RTkwXHU3RURGXHU4QkExJyxcbiAgICAgICdcdTdDRkJcdTdFREZcdTkxNERcdTdGNkUnXG4gICAgXSxcbiAgICB2ZXJzaW9uczogW1xuICAgICAge1xuICAgICAgICB2ZXJzaW9uOiAndjEuMC4wJyxcbiAgICAgICAgdXBkYXRlVGltZTogJzIwMjMtMDUtMTAnLFxuICAgICAgICB1cGRhdGVDb250ZW50OiAnXHU1QjhDXHU2MjEwXHU4RDQ0XHU2RTkwXHU3QkExXHU3NDA2XHU1NDhDXHU1N0ZBXHU3ODQwXHU4QzAzXHU1RUE2XHU1MjlGXHU4MEZEJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmVyc2lvbjogJ3YxLjEuMCcsXG4gICAgICAgIHVwZGF0ZVRpbWU6ICcyMDIzLTA3LTIwJyxcbiAgICAgICAgdXBkYXRlQ29udGVudDogJ1x1NUI4Q1x1NjIxMFx1NzZEMVx1NjNBN1x1NTQ0QVx1OEI2Nlx1NTI5Rlx1ODBGRFx1RkYwQ1x1NEYxOFx1NTMxNlx1OEMwM1x1NUVBNlx1N0I5N1x1NkNENSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZlcnNpb246ICd2MS4yLjAnLFxuICAgICAgICB1cGRhdGVUaW1lOiAnMjAyMy0wOS0xMicsXG4gICAgICAgIHVwZGF0ZUNvbnRlbnQ6ICdcdTVCOENcdTU1ODRcdThENDRcdTZFOTBcdTdFREZcdThCQTFcdTUyOUZcdTgwRkRcdUZGMENcdTYzRDBcdTUzNDdcdTdDRkJcdTdFREZcdTdBMzNcdTVCOUFcdTYwMjcnXG4gICAgICB9XG4gICAgXSxcbiAgICB0ZXN0UmVwb3J0czogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnXHU1MjlGXHU4MEZEXHU2RDRCXHU4QkQ1XHU2MkE1XHU1NDRBJyxcbiAgICAgICAgdHlwZTogJ1x1NTI5Rlx1ODBGRFx1NkQ0Qlx1OEJENScsXG4gICAgICAgIGZpbGVVcmw6ICdodHRwczovL2V4YW1wbGUuY29tL3JlcG9ydHMvMTAwMDMvZnVuY3Rpb24ucGRmJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1x1NjAyN1x1ODBGRFx1NkQ0Qlx1OEJENVx1NjJBNVx1NTQ0QScsXG4gICAgICAgIHR5cGU6ICdcdTYwMjdcdTgwRkRcdTZENEJcdThCRDUnLFxuICAgICAgICBmaWxlVXJsOiAnaHR0cHM6Ly9leGFtcGxlLmNvbS9yZXBvcnRzLzEwMDAzL3BlcmZvcm1hbmNlLnBkZidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdcdTdBMzNcdTVCOUFcdTYwMjdcdTZENEJcdThCRDVcdTYyQTVcdTU0NEEnLFxuICAgICAgICB0eXBlOiAnXHU3QTMzXHU1QjlBXHU2MDI3XHU2RDRCXHU4QkQ1JyxcbiAgICAgICAgZmlsZVVybDogJ2h0dHBzOi8vZXhhbXBsZS5jb20vcmVwb3J0cy8xMDAwMy9zdGFiaWxpdHkucGRmJ1xuICAgICAgfVxuICAgIF0sXG4gICAgZXZpZGVuY2VObzogJ0VWLTIwMjMwOTE1LTAwMycsXG4gICAgZXZpZGVuY2VUaW1lOiAnMjAyMy0wOS0xOCdcbiAgfVxuXTtcblxuLy8gXHU5QUQ4XHU1QkM2XHU1RUE2XHU0RUE3XHU1NEMxXHU1RjAwXHU1M0QxXHU1QjU4XHU4QkMxXHU1MjE3XHU4ODY4XHU2NTcwXHU2MzZFXG5jb25zdCBoaWdoU2VjdXJpdHlFdmlkZW5jZUxpc3Q6IEhpZ2hTZWN1cml0eUV2aWRlbmNlW10gPSBbXG4gIHtcbiAgICBpZDogJzIwMDAxJyxcbiAgICBwcm9kdWN0TmFtZTogJ1x1OTFEMVx1ODc4RFx1OThDRVx1NjNBN1x1N0NGQlx1N0VERicsXG4gICAgcHJvZHVjdFR5cGU6ICdISUdIX1NFQ1VSSVRZJyxcbiAgICBkZXZlbG9wbWVudFRlYW06ICdcdTkxRDFcdTg3OERcdTc5RDFcdTYyODBcdTkwRTgnLFxuICAgIHN0YXJ0VGltZTogJzIwMjMtMDEtMTUnLFxuICAgIGVuZFRpbWU6ICcyMDIzLTA3LTIwJyxcbiAgICB0ZWNobmljYWxBcmNoaXRlY3R1cmU6ICdWdWUzICsgU3ByaW5nIENsb3VkICsgT3JhY2xlJyxcbiAgICBmdW5jdGlvbmFsTW9kdWxlczogW1xuICAgICAgJ1x1NzUyOFx1NjIzN1x1NEZFMVx1NzUyOFx1OEJDNFx1NEYzMCcsXG4gICAgICAnXHU0RUE0XHU2NjEzXHU5OENFXHU5NjY5XHU1MjA2XHU2NzkwJyxcbiAgICAgICdcdTUzQ0RcdTZCM0FcdThCQzhcdTc2RDFcdTYzQTcnLFxuICAgICAgJ1x1ODlDNFx1NTIxOVx1NUYxNVx1NjRDRScsXG4gICAgICAnXHU5OENFXHU5NjY5XHU2MkE1XHU1NDRBJ1xuICAgIF0sXG4gICAgdmVyc2lvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgdmVyc2lvbjogJ3YxLjAuMCcsXG4gICAgICAgIHVwZGF0ZVRpbWU6ICcyMDIzLTAzLTIwJyxcbiAgICAgICAgdXBkYXRlQ29udGVudDogJ1x1NUI4Q1x1NjIxMFx1NzUyOFx1NjIzN1x1NEZFMVx1NzUyOFx1OEJDNFx1NEYzMFx1NTQ4Q1x1NTdGQVx1Nzg0MFx1OThDRVx1OTY2OVx1NTIwNlx1Njc5MFx1NTI5Rlx1ODBGRCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZlcnNpb246ICd2MS4xLjAnLFxuICAgICAgICB1cGRhdGVUaW1lOiAnMjAyMy0wNS0yNScsXG4gICAgICAgIHVwZGF0ZUNvbnRlbnQ6ICdcdTVCOENcdTYyMTBcdTUzQ0RcdTZCM0FcdThCQzhcdTc2RDFcdTYzQTdcdTU0OENcdTg5QzRcdTUyMTlcdTVGMTVcdTY0Q0VcdTUyOUZcdTgwRkQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2ZXJzaW9uOiAndjEuMi4wJyxcbiAgICAgICAgdXBkYXRlVGltZTogJzIwMjMtMDctMTgnLFxuICAgICAgICB1cGRhdGVDb250ZW50OiAnXHU1QjhDXHU1NTg0XHU5OENFXHU5NjY5XHU2MkE1XHU1NDRBXHU1MjlGXHU4MEZEXHVGRjBDXHU0RjE4XHU1MzE2XHU3Qjk3XHU2Q0Q1XHU2MDI3XHU4MEZEJ1xuICAgICAgfVxuICAgIF0sXG4gICAgdGVzdFJlcG9ydHM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1x1NTI5Rlx1ODBGRFx1NkQ0Qlx1OEJENVx1NjJBNVx1NTQ0QScsXG4gICAgICAgIHR5cGU6ICdcdTUyOUZcdTgwRkRcdTZENEJcdThCRDUnLFxuICAgICAgICBmaWxlVXJsOiAnaHR0cHM6Ly9leGFtcGxlLmNvbS9yZXBvcnRzLzIwMDAxL2Z1bmN0aW9uLnBkZidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdcdTVCODlcdTUxNjhcdTZENEJcdThCRDVcdTYyQTVcdTU0NEEnLFxuICAgICAgICB0eXBlOiAnXHU1Qjg5XHU1MTY4XHU2RDRCXHU4QkQ1JyxcbiAgICAgICAgZmlsZVVybDogJ2h0dHBzOi8vZXhhbXBsZS5jb20vcmVwb3J0cy8yMDAwMS9zZWN1cml0eS5wZGYnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnXHU2MDI3XHU4MEZEXHU2RDRCXHU4QkQ1XHU2MkE1XHU1NDRBJyxcbiAgICAgICAgdHlwZTogJ1x1NjAyN1x1ODBGRFx1NkQ0Qlx1OEJENScsXG4gICAgICAgIGZpbGVVcmw6ICdodHRwczovL2V4YW1wbGUuY29tL3JlcG9ydHMvMjAwMDEvcGVyZm9ybWFuY2UucGRmJ1xuICAgICAgfVxuICAgIF0sXG4gICAgZXZpZGVuY2VObzogJ0VWLTIwMjMwNzIwLTAwMScsXG4gICAgZXZpZGVuY2VUaW1lOiAnMjAyMy0wNy0yMicsXG4gICAgc2VjdXJpdHlUZWNobm9sb2dpZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1x1NjU3MFx1NjM2RVx1NTJBMFx1NUJDNlx1NjI4MFx1NjcyRicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnXHU5MUM3XHU3NTI4XHU1NkZEXHU1QkM2U00yL1NNNFx1N0I5N1x1NkNENVx1NUJGOVx1NjU0Rlx1NjExRlx1NjU3MFx1NjM2RVx1OEZEQlx1ODg0Q1x1NTJBMFx1NUJDNlx1NEZERFx1NjJBNCcsXG4gICAgICAgIHNlY3VyaXR5TWVhc3VyZXM6IFtcbiAgICAgICAgICAnXHU0RjIwXHU4RjkzXHU1QzQyVExTXHU1MkEwXHU1QkM2JyxcbiAgICAgICAgICAnXHU2NTcwXHU2MzZFXHU1QjU4XHU1MEE4XHU1MkEwXHU1QkM2JyxcbiAgICAgICAgICAnXHU1QkM2XHU5NEE1XHU1Qjg5XHU1MTY4XHU3QkExXHU3NDA2J1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnXHU4RUFCXHU0RUZEXHU4QkE0XHU4QkMxXHU2MjgwXHU2NzJGJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdcdTU5MUFcdTU2RTBcdTdEMjBcdThFQUJcdTRFRkRcdThCQTRcdThCQzFcdTU0OENcdTdFQzZcdTdDOTJcdTVFQTZcdTY3NDNcdTk2NTBcdTYzQTdcdTUyMzYnLFxuICAgICAgICBzZWN1cml0eU1lYXN1cmVzOiBbXG4gICAgICAgICAgJ1x1NTNDQ1x1NTZFMFx1N0QyMFx1OEJBNFx1OEJDMScsXG4gICAgICAgICAgJ1x1NzUxRlx1NzI2OVx1NzI3OVx1NUY4MVx1OEJBNFx1OEJDMScsXG4gICAgICAgICAgJ09BdXRoMlx1NjM4OFx1Njc0MycsXG4gICAgICAgICAgJ1JCQUNcdTY3NDNcdTk2NTBcdTZBMjFcdTU3OEInXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdcdTVCODlcdTUxNjhcdTVCQTFcdThCQTFcdTYyODBcdTY3MkYnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1x1NTE2OFx1NjVCOVx1NEY0RFx1NzY4NFx1NUI4OVx1NTE2OFx1NUJBMVx1OEJBMVx1NTQ4Q1x1NzZEMVx1NjNBN1x1NjczQVx1NTIzNicsXG4gICAgICAgIHNlY3VyaXR5TWVhc3VyZXM6IFtcbiAgICAgICAgICAnXHU2NENEXHU0RjVDXHU2NUU1XHU1RkQ3XHU4QkIwXHU1RjU1JyxcbiAgICAgICAgICAnXHU1RjAyXHU1RTM4XHU4ODRDXHU0RTNBXHU3NkQxXHU2M0E3JyxcbiAgICAgICAgICAnXHU1QjlFXHU2NUY2XHU1NDRBXHU4QjY2XHU2NzNBXHU1MjM2J1xuICAgICAgICBdXG4gICAgICB9XG4gICAgXSxcbiAgICBkYXRhU291cmNlczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnXHU3NTI4XHU2MjM3XHU1N0ZBXHU3ODQwXHU0RkUxXHU2MDZGJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdcdTc1MjhcdTYyMzdcdTZDRThcdTUxOENcdTU0OENcdTVCOUVcdTU0MERcdThCQTRcdThCQzFcdTRGRTFcdTYwNkYnLFxuICAgICAgICBsZWdhbGl0eTogJ1x1NzUyOFx1NjIzN1x1NjM4OFx1Njc0M1x1NTQwQ1x1NjEwRidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdcdTRFQTRcdTY2MTNcdThCQjBcdTVGNTVcdTY1NzBcdTYzNkUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1x1NzUyOFx1NjIzN1x1NEVBNFx1NjYxM1x1NzY4NFx1NTM4Nlx1NTNGMlx1OEJCMFx1NUY1NVx1NTQ4Q1x1NkEyMVx1NUYwRicsXG4gICAgICAgIGxlZ2FsaXR5OiAnXHU2NzBEXHU1MkExXHU1MzRGXHU4QkFFXHU2Mzg4XHU2NzQzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1x1NTkxNlx1OTBFOFx1OThDRVx1OTY2OVx1NjU3MFx1NjM2RScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnXHU1NDA4XHU0RjVDXHU2NUI5XHU2M0QwXHU0RjlCXHU3Njg0XHU5OENFXHU5NjY5XHU0RkUxXHU2MDZGJyxcbiAgICAgICAgbGVnYWxpdHk6ICdcdTY1NzBcdTYzNkVcdTUxNzFcdTRFQUJcdTUzNEZcdThCQUUnXG4gICAgICB9XG4gICAgXSxcbiAgICBwcml2YWN5UHJvdGVjdGlvbjoge1xuICAgICAgc3RyYXRlZ3k6ICdcdTkxQzdcdTc1MjhcdTY1NzBcdTYzNkVcdTgxMzFcdTY1NEZcdTMwMDFcdTY1NzBcdTYzNkVcdTUyMDZcdTdFQTdcdTU0OENcdTY3NDNcdTk2NTBcdTYzQTdcdTUyMzZcdTc2RjhcdTdFRDNcdTU0MDhcdTc2ODRcdTk2OTBcdTc5QzFcdTRGRERcdTYyQTRcdTdCNTZcdTc1NjUnLFxuICAgICAgdGVjaG5pY2FsTWVhc3VyZXM6IFtcbiAgICAgICAgJ1x1NjU0Rlx1NjExRlx1NEZFMVx1NjA2Rlx1ODEzMVx1NjU0Rlx1NUM1NVx1NzkzQScsXG4gICAgICAgICdcdTY3MDBcdTVDMEZcdTY3NDNcdTk2NTBcdTUzOUZcdTUyMTknLFxuICAgICAgICAnXHU2NTcwXHU2MzZFXHU4QkJGXHU5NUVFXHU1QkExXHU4QkExJyxcbiAgICAgICAgJ1x1NjU3MFx1NjM2RVx1NzUxRlx1NTQ3RFx1NTQ2OFx1NjcxRlx1N0JBMVx1NzQwNicsXG4gICAgICAgICdcdTRFMkFcdTRFQkFcdTRGRTFcdTYwNkZcdTUzM0ZcdTU0MERcdTUzMTZcdTU5MDRcdTc0MDYnXG4gICAgICBdXG4gICAgfVxuICB9LFxuICB7XG4gICAgaWQ6ICcyMDAwMicsXG4gICAgcHJvZHVjdE5hbWU6ICdcdTUzM0JcdTc1OTdcdTY1NzBcdTYzNkVcdTdCQTFcdTc0MDZcdTVFNzNcdTUzRjAnLFxuICAgIHByb2R1Y3RUeXBlOiAnSElHSF9TRUNVUklUWScsXG4gICAgZGV2ZWxvcG1lbnRUZWFtOiAnXHU1MzNCXHU3NTk3XHU0RkUxXHU2MDZGXHU5MEU4JyxcbiAgICBzdGFydFRpbWU6ICcyMDIzLTAyLTIwJyxcbiAgICBlbmRUaW1lOiAnMjAyMy0wOC0xNScsXG4gICAgdGVjaG5pY2FsQXJjaGl0ZWN0dXJlOiAnUmVhY3QgKyAuTkVUIENvcmUgKyBTUUwgU2VydmVyJyxcbiAgICBmdW5jdGlvbmFsTW9kdWxlczogW1xuICAgICAgJ1x1NjBBM1x1ODAwNVx1NEZFMVx1NjA2Rlx1N0JBMVx1NzQwNicsXG4gICAgICAnXHU3NTM1XHU1QjUwXHU3NUM1XHU1Mzg2JyxcbiAgICAgICdcdTUzM0JcdTc1OTdcdTVGNzFcdTUwQ0ZcdTdCQTFcdTc0MDYnLFxuICAgICAgJ1x1NTkwNFx1NjVCOVx1N0JBMVx1NzQwNicsXG4gICAgICAnXHU2NTcwXHU2MzZFXHU1MjA2XHU2NzkwXHU0RTBFXHU2MkE1XHU1NDRBJ1xuICAgIF0sXG4gICAgdmVyc2lvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgdmVyc2lvbjogJ3YxLjAuMCcsXG4gICAgICAgIHVwZGF0ZVRpbWU6ICcyMDIzLTA0LTI1JyxcbiAgICAgICAgdXBkYXRlQ29udGVudDogJ1x1NUI4Q1x1NjIxMFx1NjBBM1x1ODAwNVx1NEZFMVx1NjA2Rlx1N0JBMVx1NzQwNlx1NTQ4Q1x1NzUzNVx1NUI1MFx1NzVDNVx1NTM4Nlx1NTdGQVx1Nzg0MFx1NTI5Rlx1ODBGRCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZlcnNpb246ICd2MS4xLjAnLFxuICAgICAgICB1cGRhdGVUaW1lOiAnMjAyMy0wNi0zMCcsXG4gICAgICAgIHVwZGF0ZUNvbnRlbnQ6ICdcdTVCOENcdTYyMTBcdTUzM0JcdTc1OTdcdTVGNzFcdTUwQ0ZcdTdCQTFcdTc0MDZcdTU0OENcdTU5MDRcdTY1QjlcdTdCQTFcdTc0MDZcdTUyOUZcdTgwRkQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2ZXJzaW9uOiAndjEuMi4wJyxcbiAgICAgICAgdXBkYXRlVGltZTogJzIwMjMtMDgtMTInLFxuICAgICAgICB1cGRhdGVDb250ZW50OiAnXHU1QjhDXHU1NTg0XHU2NTcwXHU2MzZFXHU1MjA2XHU2NzkwXHU0RTBFXHU2MkE1XHU1NDRBXHU1MjlGXHU4MEZEJ1xuICAgICAgfVxuICAgIF0sXG4gICAgdGVzdFJlcG9ydHM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1x1NTI5Rlx1ODBGRFx1NkQ0Qlx1OEJENVx1NjJBNVx1NTQ0QScsXG4gICAgICAgIHR5cGU6ICdcdTUyOUZcdTgwRkRcdTZENEJcdThCRDUnLFxuICAgICAgICBmaWxlVXJsOiAnaHR0cHM6Ly9leGFtcGxlLmNvbS9yZXBvcnRzLzIwMDAyL2Z1bmN0aW9uLnBkZidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdcdTVCODlcdTUxNjhcdTU0MDhcdTg5QzRcdTZENEJcdThCRDVcdTYyQTVcdTU0NEEnLFxuICAgICAgICB0eXBlOiAnXHU1Qjg5XHU1MTY4XHU1NDA4XHU4OUM0JyxcbiAgICAgICAgZmlsZVVybDogJ2h0dHBzOi8vZXhhbXBsZS5jb20vcmVwb3J0cy8yMDAwMi9jb21wbGlhbmNlLnBkZidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdcdTYwMjdcdTgwRkRcdTZENEJcdThCRDVcdTYyQTVcdTU0NEEnLFxuICAgICAgICB0eXBlOiAnXHU2MDI3XHU4MEZEXHU2RDRCXHU4QkQ1JyxcbiAgICAgICAgZmlsZVVybDogJ2h0dHBzOi8vZXhhbXBsZS5jb20vcmVwb3J0cy8yMDAwMi9wZXJmb3JtYW5jZS5wZGYnXG4gICAgICB9XG4gICAgXSxcbiAgICBldmlkZW5jZU5vOiAnRVYtMjAyMzA4MTUtMDAyJyxcbiAgICBldmlkZW5jZVRpbWU6ICcyMDIzLTA4LTE4JyxcbiAgICBzZWN1cml0eVRlY2hub2xvZ2llczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnXHU1MzNCXHU3NTk3XHU2NTcwXHU2MzZFXHU1MkEwXHU1QkM2JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdcdTdCMjZcdTU0MDhISVBBQVx1NjgwN1x1NTFDNlx1NzY4NFx1NTMzQlx1NzU5N1x1NjU3MFx1NjM2RVx1NTJBMFx1NUJDNlx1NjVCOVx1Njg0OCcsXG4gICAgICAgIHNlY3VyaXR5TWVhc3VyZXM6IFtcbiAgICAgICAgICAnXHU3QUVGXHU1MjMwXHU3QUVGXHU1MkEwXHU1QkM2JyxcbiAgICAgICAgICAnXHU1MjA2XHU3RUE3XHU1MkEwXHU1QkM2XHU3QjU2XHU3NTY1JyxcbiAgICAgICAgICAnXHU1QkM2XHU5NEE1XHU4RjZFXHU2MzYyXHU2NzNBXHU1MjM2J1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnXHU4QkJGXHU5NUVFXHU2M0E3XHU1MjM2XHU2MjgwXHU2NzJGJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdcdTU3RkFcdTRFOEVcdTg5RDJcdTgyNzJcdTU0OENcdTU3M0FcdTY2NkZcdTc2ODRcdTdFQzZcdTdDOTJcdTVFQTZcdThCQkZcdTk1RUVcdTYzQTdcdTUyMzYnLFxuICAgICAgICBzZWN1cml0eU1lYXN1cmVzOiBbXG4gICAgICAgICAgJ1x1NTdGQVx1NEU4RVx1ODlEMlx1ODI3Mlx1NzY4NFx1OEJCRlx1OTVFRVx1NjNBN1x1NTIzNicsXG4gICAgICAgICAgJ1x1NTdGQVx1NEU4RVx1NUM1RVx1NjAyN1x1NzY4NFx1OEJCRlx1OTVFRVx1NjNBN1x1NTIzNicsXG4gICAgICAgICAgJ1x1NjBBM1x1ODAwNVx1NjM4OFx1Njc0M1x1NjczQVx1NTIzNicsXG4gICAgICAgICAgJ1x1NEUzNFx1NjVGNlx1OEJCRlx1OTVFRVx1NjNBN1x1NTIzNidcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1x1NjU3MFx1NjM2RVx1OTY5NFx1NzlCQlx1NjI4MFx1NjcyRicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnXHU1OTFBXHU3OURGXHU2MjM3XHU2NTcwXHU2MzZFXHU5Njk0XHU3OUJCXHU2MjgwXHU2NzJGJyxcbiAgICAgICAgc2VjdXJpdHlNZWFzdXJlczogW1xuICAgICAgICAgICdcdTkwM0JcdThGOTFcdTk2OTRcdTc5QkInLFxuICAgICAgICAgICdcdTcyNjlcdTc0MDZcdTk2OTRcdTc5QkInLFxuICAgICAgICAgICdcdTY1NzBcdTYzNkVcdTVFOTNcdTdFQTdcdTk2OTRcdTc5QkInXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuICAgIGRhdGFTb3VyY2VzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdcdTYwQTNcdTgwMDVcdTU3RkFcdTY3MkNcdTRGRTFcdTYwNkYnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1x1NjBBM1x1ODAwNVx1NzY4NFx1NEUyQVx1NEVCQVx1NTdGQVx1Nzg0MFx1NEZFMVx1NjA2RicsXG4gICAgICAgIGxlZ2FsaXR5OiAnXHU2MEEzXHU4MDA1XHU3N0U1XHU2MEM1XHU1NDBDXHU2MTBGJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1x1NTMzQlx1NzU5N1x1NjhDMFx1NjdFNVx1NjU3MFx1NjM2RScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnXHU1NDA0XHU3QzdCXHU1MzNCXHU3NTk3XHU2OEMwXHU2N0U1XHU3Njg0XHU3RUQzXHU2NzlDXHU2NTcwXHU2MzZFJyxcbiAgICAgICAgbGVnYWxpdHk6ICdcdTUzM0JcdTc1OTdcdTY3MERcdTUyQTFcdTUzNEZcdThCQUUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnXHU2Q0JCXHU3NTk3XHU4QkIwXHU1RjU1JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdcdTYwQTNcdTgwMDVcdTYzQTVcdTUzRDdcdTZDQkJcdTc1OTdcdTc2ODRcdThCQjBcdTVGNTVcdTY1NzBcdTYzNkUnLFxuICAgICAgICBsZWdhbGl0eTogJ1x1NTMzQlx1NzU5N1x1NjczQVx1Njc4NFx1NjM4OFx1Njc0MydcbiAgICAgIH1cbiAgICBdLFxuICAgIHByaXZhY3lQcm90ZWN0aW9uOiB7XG4gICAgICBzdHJhdGVneTogJ1x1OTFDN1x1NzUyOFx1NEUyNVx1NjgzQ1x1NzY4NFx1NjU3MFx1NjM2RVx1OEJCRlx1OTVFRVx1NjNBN1x1NTIzNlx1NTQ4Q1x1NTMzRlx1NTQwRFx1NTMxNlx1NTkwNFx1NzQwNlx1RkYwQ1x1Nzg2RVx1NEZERFx1NjBBM1x1ODAwNVx1OTY5MFx1NzlDMVx1NUI4OVx1NTE2OCcsXG4gICAgICB0ZWNobmljYWxNZWFzdXJlczogW1xuICAgICAgICAnXHU1MzNCXHU3NTk3XHU2NTcwXHU2MzZFXHU4MTMxXHU2NTRGJyxcbiAgICAgICAgJ1x1NjBBM1x1ODAwNVx1OEVBQlx1NEVGRFx1NTMzRlx1NTQwRFx1NTMxNicsXG4gICAgICAgICdcdTU3RkFcdTRFOEVcdTc2RUVcdTc2ODRcdTc2ODRcdThCQkZcdTk1RUVcdTk2NTBcdTUyMzYnLFxuICAgICAgICAnXHU2NTcwXHU2MzZFXHU0RjdGXHU3NTI4XHU1QkExXHU4QkExJyxcbiAgICAgICAgJ1x1NUI5QVx1NjcxRlx1OTY5MFx1NzlDMVx1OEJDNFx1NEYzMCdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBpZDogJzIwMDAzJyxcbiAgICBwcm9kdWN0TmFtZTogJ1x1NjUzRlx1NTJBMVx1NUI4OVx1NTE2OFx1OTAxQVx1NEZFMVx1N0NGQlx1N0VERicsXG4gICAgcHJvZHVjdFR5cGU6ICdISUdIX1NFQ1VSSVRZJyxcbiAgICBkZXZlbG9wbWVudFRlYW06ICdcdTY1M0ZcdTUyQTFcdTRGRTFcdTYwNkZcdTkwRTgnLFxuICAgIHN0YXJ0VGltZTogJzIwMjMtMDMtMTAnLFxuICAgIGVuZFRpbWU6ICcyMDIzLTEwLTA1JyxcbiAgICB0ZWNobmljYWxBcmNoaXRlY3R1cmU6ICdOYXRpdmUgKyBKYXZhICsgUG9zdGdyZVNRTCcsXG4gICAgZnVuY3Rpb25hbE1vZHVsZXM6IFtcbiAgICAgICdcdTUyQTBcdTVCQzZcdTkwMUFcdTRGRTEnLFxuICAgICAgJ1x1OEVBQlx1NEVGRFx1OEJBNFx1OEJDMScsXG4gICAgICAnXHU2NTg3XHU0RUY2XHU0RjIwXHU4RjkzJyxcbiAgICAgICdcdTdGQTRcdTdFQzRcdTdCQTFcdTc0MDYnLFxuICAgICAgJ1x1NUJBMVx1OEJBMVx1NjVFNVx1NUZENydcbiAgICBdLFxuICAgIHZlcnNpb25zOiBbXG4gICAgICB7XG4gICAgICAgIHZlcnNpb246ICd2MS4wLjAnLFxuICAgICAgICB1cGRhdGVUaW1lOiAnMjAyMy0wNS0xNScsXG4gICAgICAgIHVwZGF0ZUNvbnRlbnQ6ICdcdTVCOENcdTYyMTBcdTUyQTBcdTVCQzZcdTkwMUFcdTRGRTFcdTU0OENcdThFQUJcdTRFRkRcdThCQTRcdThCQzFcdTU3RkFcdTc4NDBcdTUyOUZcdTgwRkQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2ZXJzaW9uOiAndjEuMS4wJyxcbiAgICAgICAgdXBkYXRlVGltZTogJzIwMjMtMDctMjUnLFxuICAgICAgICB1cGRhdGVDb250ZW50OiAnXHU1QjhDXHU2MjEwXHU2NTg3XHU0RUY2XHU0RjIwXHU4RjkzXHU1NDhDXHU3RkE0XHU3RUM0XHU3QkExXHU3NDA2XHU1MjlGXHU4MEZEJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmVyc2lvbjogJ3YxLjIuMCcsXG4gICAgICAgIHVwZGF0ZVRpbWU6ICcyMDIzLTEwLTAxJyxcbiAgICAgICAgdXBkYXRlQ29udGVudDogJ1x1NUI4Q1x1NTU4NFx1NUJBMVx1OEJBMVx1NjVFNVx1NUZEN1x1NTQ4Q1x1NUI4OVx1NTE2OFx1NjAyN1x1NjNEMFx1NTM0NydcbiAgICAgIH1cbiAgICBdLFxuICAgIHRlc3RSZXBvcnRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdcdTUyOUZcdTgwRkRcdTZENEJcdThCRDVcdTYyQTVcdTU0NEEnLFxuICAgICAgICB0eXBlOiAnXHU1MjlGXHU4MEZEXHU2RDRCXHU4QkQ1JyxcbiAgICAgICAgZmlsZVVybDogJ2h0dHBzOi8vZXhhbXBsZS5jb20vcmVwb3J0cy8yMDAwMy9mdW5jdGlvbi5wZGYnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnXHU1Qjg5XHU1MTY4XHU2RTE3XHU5MDBGXHU2RDRCXHU4QkQ1XHU2MkE1XHU1NDRBJyxcbiAgICAgICAgdHlwZTogJ1x1NUI4OVx1NTE2OFx1NkUxN1x1OTAwRicsXG4gICAgICAgIGZpbGVVcmw6ICdodHRwczovL2V4YW1wbGUuY29tL3JlcG9ydHMvMjAwMDMvcGVuZXRyYXRpb24ucGRmJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1x1N0I0OVx1N0VBN1x1NEZERFx1NjJBNFx1NkQ0Qlx1OEJDNFx1NjJBNVx1NTQ0QScsXG4gICAgICAgIHR5cGU6ICdcdTdCNDlcdTdFQTdcdTRGRERcdTYyQTQnLFxuICAgICAgICBmaWxlVXJsOiAnaHR0cHM6Ly9leGFtcGxlLmNvbS9yZXBvcnRzLzIwMDAzL3NlY3VyaXR5LWxldmVsLnBkZidcbiAgICAgIH1cbiAgICBdLFxuICAgIGV2aWRlbmNlTm86ICdFVi0yMDIzMTAwNS0wMDMnLFxuICAgIGV2aWRlbmNlVGltZTogJzIwMjMtMTAtMDgnLFxuICAgIHNlY3VyaXR5VGVjaG5vbG9naWVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdcdTU2RkRcdTVCQzZcdTdCOTdcdTZDRDVcdTVFOTRcdTc1MjgnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1x1NTE2OFx1OTc2Mlx1NUU5NFx1NzUyOFx1NTZGRFx1NUJDNlNNMi9TTTMvU000XHU3Qjk3XHU2Q0Q1JyxcbiAgICAgICAgc2VjdXJpdHlNZWFzdXJlczogW1xuICAgICAgICAgICdTTTJcdTk3NUVcdTVCRjlcdTc5RjBcdTUyQTBcdTVCQzYnLFxuICAgICAgICAgICdTTTNcdTVCQzZcdTc4MDFcdTY3NDJcdTUxRDEnLFxuICAgICAgICAgICdTTTRcdTVCRjlcdTc5RjBcdTUyQTBcdTVCQzYnLFxuICAgICAgICAgICdcdTU2RkRcdTVCQzZTU0xcdTUzNEZcdThCQUUnXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdcdTU5MUFcdTkxQ0RcdThFQUJcdTRFRkRcdThCQTRcdThCQzEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1x1NTkxQVx1NTZFMFx1N0QyMFx1MzAwMVx1NTkxQVx1N0VGNFx1NUVBNlx1OEVBQlx1NEVGRFx1OEJBNFx1OEJDMVx1NEY1M1x1N0NGQicsXG4gICAgICAgIHNlY3VyaXR5TWVhc3VyZXM6IFtcbiAgICAgICAgICAnXHU2NjdBXHU4MEZEXHU1MzYxXHU4QkE0XHU4QkMxJyxcbiAgICAgICAgICAnXHU3NTFGXHU3MjY5XHU3Mjc5XHU1RjgxXHU4QkM2XHU1MjJCJyxcbiAgICAgICAgICAnXHU1MkE4XHU2MDAxXHU1M0UzXHU0RUU0XHU4QkE0XHU4QkMxJyxcbiAgICAgICAgICAnXHU4ODRDXHU0RTNBXHU3Mjc5XHU1RjgxXHU4QkE0XHU4QkMxJ1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnXHU1M0VGXHU5NzYwXHU2MDI3XHU0RkREXHU5NjlDXHU2MjgwXHU2NzJGJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdcdTc4NkVcdTRGRERcdTdDRkJcdTdFREZcdTlBRDhcdTUzRUZcdTc1MjhcdTYwMjdcdTc2ODRcdTYyODBcdTY3MkZcdTYzQUFcdTY1QkQnLFxuICAgICAgICBzZWN1cml0eU1lYXN1cmVzOiBbXG4gICAgICAgICAgJ1x1NTkxQVx1NEUyRFx1NUZDM1x1OTBFOFx1N0Y3MicsXG4gICAgICAgICAgJ1x1NUI5RVx1NjVGNlx1NjU3MFx1NjM2RVx1NTQwQ1x1NkI2NScsXG4gICAgICAgICAgJ1x1NjU0NVx1OTY5Q1x1ODFFQVx1NTJBOFx1NTIwN1x1NjM2MicsXG4gICAgICAgICAgJ1x1NzA3RVx1NTkwN1x1NjA2Mlx1NTkwRFx1NjczQVx1NTIzNidcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF0sXG4gICAgZGF0YVNvdXJjZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1x1NzUyOFx1NjIzN1x1OEVBQlx1NEVGRFx1NEZFMVx1NjA2RicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnXHU3Q0ZCXHU3RURGXHU3NTI4XHU2MjM3XHU3Njg0XHU4RUFCXHU0RUZEXHU4QkE0XHU4QkMxXHU0RkUxXHU2MDZGJyxcbiAgICAgICAgbGVnYWxpdHk6ICdcdTY1M0ZcdTUyQTFcdTdDRkJcdTdFREZcdTYzODhcdTY3NDMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnXHU5MDFBXHU0RkUxXHU1MTg1XHU1QkI5XHU2NTcwXHU2MzZFJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdcdTUyQTBcdTVCQzZcdTU0MEVcdTc2ODRcdTkwMUFcdTRGRTFcdTUxODVcdTVCQjknLFxuICAgICAgICBsZWdhbGl0eTogJ1x1N0NGQlx1N0VERlx1NEY3Rlx1NzUyOFx1ODlDNFx1NUI5QSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdcdTdFQzRcdTdFQzdcdTY3QjZcdTY3ODRcdTY1NzBcdTYzNkUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1x1NjUzRlx1NTJBMVx1NTM1NVx1NEY0RFx1NzY4NFx1N0VDNFx1N0VDN1x1NjdCNlx1Njc4NFx1NEZFMVx1NjA2RicsXG4gICAgICAgIGxlZ2FsaXR5OiAnXHU1MTg1XHU5MEU4XHU3QkExXHU3NDA2XHU2Mzg4XHU2NzQzJ1xuICAgICAgfVxuICAgIF0sXG4gICAgcHJpdmFjeVByb3RlY3Rpb246IHtcbiAgICAgIHN0cmF0ZWd5OiAnXHU5MUM3XHU3NTI4XHU5NkY2XHU0RkUxXHU0RUZCXHU1Qjg5XHU1MTY4XHU2N0I2XHU2Nzg0XHVGRjBDXHU1QjlFXHU3M0IwXHU2NTcwXHU2MzZFXHU1MTY4XHU3NTFGXHU1NDdEXHU1NDY4XHU2NzFGXHU0RkREXHU2MkE0JyxcbiAgICAgIHRlY2huaWNhbE1lYXN1cmVzOiBbXG4gICAgICAgICdcdTdBRUZcdTUyMzBcdTdBRUZcdTUyQTBcdTVCQzZcdTkwMUFcdTRGRTEnLFxuICAgICAgICAnXHU2NTRGXHU2MTFGXHU0RkUxXHU2MDZGXHU4QkM2XHU1MjJCXHU0RTBFXHU0RkREXHU2MkE0JyxcbiAgICAgICAgJ1x1OTAxQVx1NEZFMVx1OEJCMFx1NUY1NVx1NjcwMFx1NUMwRlx1NTMxNicsXG4gICAgICAgICdcdTY1NzBcdTYzNkVcdTY3MkNcdTU3MzBcdTVCNThcdTUwQThcdTRGMThcdTUxNDgnLFxuICAgICAgICAnXHU4MUVBXHU1MkE4XHU2NTcwXHU2MzZFXHU2RTA1XHU3NDA2XHU2NzNBXHU1MjM2J1xuICAgICAgXVxuICAgIH1cbiAgfVxuXTtcblxuLy8gXHU5NzAwXHU2QzQyXHU1QjlBXHU1MjM2XHU0RTBBXHU2N0I2XHU1QjU4XHU4QkMxXHU1MjE3XHU4ODY4XHU2NTcwXHU2MzZFXG5jb25zdCByZXF1aXJlbWVudFB1Ymxpc2hFdmlkZW5jZUxpc3QgPSBbXG4gIHtcbiAgICBldmlkZW5jZU5vOiAnUlAtMjAyNC0wMDEnLFxuICAgIHJlcXVpcmVtZW50TmFtZTogJ1x1OTFEMVx1ODc4RFx1NjU3MFx1NjM2RVx1NTIwNlx1Njc5MFx1NUU3M1x1NTNGMCcsXG4gICAgcmVxdWVzdGVyTmFtZTogJ1x1NEUyRFx1NTZGRFx1OTFEMVx1ODc4RFx1NzgxNFx1N0E3Nlx1OTY2MicsXG4gICAgcmVxdWVzdGVySWQ6ICdGUi0yMDI0LTAwMScsXG4gICAgcHVibGlzaEFwcGx5VGltZTogJzIwMjQtMDEtMDggMTA6MjU6MzAnLFxuICAgIHB1Ymxpc2hBdWRpdFRpbWU6ICcyMDI0LTAxLTA5IDE2OjQ1OjEyJyxcbiAgICBwdWJsaXNoVGltZTogJzIwMjQtMDEtMTAgMTQ6MzA6MDAnLFxuICAgIGV4cGlyZVRpbWU6ICcyMDI0LTA3LTEwIDE0OjMwOjAwJyxcbiAgICBidWRnZXQ6ICc1MDAwMDAnLFxuICAgIHJlcXVpcmVtZW50U3RhdHVzOiAnXHU1REYyXHU1M0QxXHU1RTAzJyxcbiAgICByZXF1aXJlbWVudEluZm86ICdcdTk3MDBcdTg5ODFcdTVGMDBcdTUzRDFcdTRFMDBcdTRFMkFcdTgwRkRcdTU5MUZcdTU5MDRcdTc0MDZcdTU5MjdcdTg5QzRcdTZBMjFcdTkxRDFcdTg3OERcdTY1NzBcdTYzNkVcdTc2ODRcdTUyMDZcdTY3OTBcdTVFNzNcdTUzRjBcdUZGMENcdTY1MkZcdTYzMDFcdTU5MUFcdTc5Q0RcdTkxRDFcdTg3OERcdTZBMjFcdTU3OEJcdThCQTFcdTdCOTdcdTU0OENcdTUzRUZcdTg5QzZcdTUzMTZcdTVDNTVcdTc5M0FcdTMwMDJcdTUzMDVcdTYyRUNcdTRGNDZcdTRFMERcdTk2NTBcdTRFOEVcdUZGMUFcdTU3RkFcdTc4NDBcdTc2ODRcdTkxRDFcdTg3OERcdTY1NzBcdTYzNkVcdTZFMDVcdTZEMTdcdTMwMDFcdThGNkNcdTYzNjJcdTUyOUZcdTgwRkRcdUZGMUJcdTU0MDRcdTdDN0JcdTkxRDFcdTg3OERcdTYzMDdcdTY4MDdcdTc2ODRcdThCQTFcdTdCOTdcdTUyMDZcdTY3OTBcdTUyOUZcdTgwRkRcdUZGMUJcdTdFRkNcdTU0MDhcdTc2ODRcdTY1NzBcdTYzNkVcdTUzRUZcdTg5QzZcdTUzMTZcdTVDNTVcdTc5M0FcdTUyOUZcdTgwRkRcdUZGMUJcdTY1NzBcdTYzNkVcdTYyQTVcdTg4NjhcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTBcdTUyOUZcdTgwRkRcdUZGMUJcdTU5MUFcdTc1MjhcdTYyMzdcdTY3NDNcdTk2NTBcdTdCQTFcdTc0MDZcdTU0OENcdTUzNEZcdTU0MENcdTVERTVcdTRGNUNcdTUyOUZcdTgwRkRcdTMwMDJcdTdDRkJcdTdFREZcdTk3MDBcdTg5ODFcdTY1MkZcdTYzMDFcdTgxRjNcdTVDMTExMFRCXHU3RUE3XHU1MjJCXHU2NTcwXHU2MzZFXHU3Njg0XHU5QUQ4XHU2NTQ4XHU1OTA0XHU3NDA2XHUzMDAyJyxcbiAgICByZXF1aXJlbWVudERlc2NyaXB0aW9uOiAnXHU5NzAwXHU4OTgxXHU0RTAwXHU0RTJBXHU4MEZEXHU1OTFGXHU1OTA0XHU3NDA2XHU1OTI3XHU4OUM0XHU2QTIxXHU5MUQxXHU4NzhEXHU2NTcwXHU2MzZFXHU3Njg0XHU1MjA2XHU2NzkwXHU1RTczXHU1M0YwXHVGRjBDXHU2NTJGXHU2MzAxXHU1OTFBXHU3OUNEXHU5MUQxXHU4NzhEXHU2QTIxXHU1NzhCXHU4QkExXHU3Qjk3XHU1NDhDXHU1M0VGXHU4OUM2XHU1MzE2XHU1QzU1XHU3OTNBJyxcbiAgICB0ZWNobmljYWxSZXF1aXJlbWVudHM6ICdcdTRGN0ZcdTc1MjhQeXRob24vUlx1OEZEQlx1ODg0Q1x1NjU3MFx1NjM2RVx1NTkwNFx1NzQwNlx1RkYwQ1x1NTI0RFx1N0FFRlx1NEY3Rlx1NzUyOFZ1ZS5qc1x1NUYwMFx1NTNEMVx1RkYwQ1x1NjUyRlx1NjMwMVx1NTIwNlx1NUUwM1x1NUYwRlx1OEJBMVx1N0I5NycsXG4gICAgYXVkaXRTdGF0dXM6ICdcdTVCQTFcdTY4MzhcdTkwMUFcdThGQzcnLFxuICAgIGF1ZGl0T3BpbmlvbjogJ1x1OTAxQVx1OEZDNycsXG4gICAgYXVkaXRSZWFzb246ICdcdTZFRTFcdThEQjNcdTVFNzNcdTUzRjBcdTk3MDBcdTZDNDJcdTY4MDdcdTUxQzYnLFxuICAgIGF1ZGl0b3I6ICdcdTVGMjBcdTVCQTFcdTY4MzgnLFxuICAgIGRlbWFuZGVyOiAnXHU0RTJEXHU1NkZEXHU5MUQxXHU4NzhEXHU3ODE0XHU3QTc2XHU5NjYyJyxcbiAgICBkZW1hbmRlcklkOiAnRlItMjAyNC0wMDEnLFxuICAgIGV2aWRlbmNlVGltZTogJzIwMjQtMDEtMTAgMTY6MzA6MDAnLFxuICAgIGV2aWRlbmNlQ2hhaW46ICdjaGFpbi1oYXNoLTAwMSdcbiAgfSxcbiAge1xuICAgIGV2aWRlbmNlTm86ICdSUC0yMDI0LTAwMicsXG4gICAgcmVxdWlyZW1lbnROYW1lOiAnXHU1MzNCXHU3NTk3XHU2NTcwXHU2MzZFXHU1MTcxXHU0RUFCXHU1RTczXHU1M0YwJyxcbiAgICByZXF1ZXN0ZXJOYW1lOiAnXHU1MzE3XHU0RUFDXHU1MzNCXHU1QjY2XHU3ODE0XHU3QTc2XHU2MjQwJyxcbiAgICByZXF1ZXN0ZXJJZDogJ01JLTIwMjQtMDAyJyxcbiAgICBwdWJsaXNoQXBwbHlUaW1lOiAnMjAyNC0wMS0xMiAxMzo0MDoxNScsXG4gICAgcHVibGlzaEF1ZGl0VGltZTogJzIwMjQtMDEtMTQgMTE6MjA6MzYnLFxuICAgIHB1Ymxpc2hUaW1lOiAnMjAyNC0wMS0xNSAwOToxNTowMCcsXG4gICAgZXhwaXJlVGltZTogJzIwMjQtMDYtMTUgMDk6MTU6MDAnLFxuICAgIGJ1ZGdldDogJzgwMDAwMCcsXG4gICAgcmVxdWlyZW1lbnRTdGF0dXM6ICdcdTVERjJcdTUzRDFcdTVFMDMnLFxuICAgIHJlcXVpcmVtZW50SW5mbzogJ1x1Njc4NFx1NUVGQVx1NEUwMFx1NEUyQVx1NUI4OVx1NTE2OFx1NzY4NFx1NTMzQlx1NzU5N1x1NjU3MFx1NjM2RVx1NTE3MVx1NEVBQlx1NUU3M1x1NTNGMFx1RkYwQ1x1NjUyRlx1NjMwMVx1NTkxQVx1NUJCNlx1NTMzQlx1OTY2Mlx1NEU0Qlx1OTVGNFx1NzY4NFx1NjU3MFx1NjM2RVx1NUI4OVx1NTE2OFx1NEVBNFx1NjM2Mlx1NTQ4Q1x1NTIwNlx1Njc5MFx1MzAwMlx1OEJFNVx1NUU3M1x1NTNGMFx1OTcwMFx1ODk4MVx1NkVFMVx1OERCM1x1NEVFNVx1NEUwQlx1NjgzOFx1NUZDM1x1OTcwMFx1NkM0Mlx1RkYxQVx1NEUyNVx1NjgzQ1x1NzY4NFx1NjU3MFx1NjM2RVx1OTY5MFx1NzlDMVx1NEZERFx1NjJBNFx1NTQ4Q1x1OEJCRlx1OTVFRVx1NjNBN1x1NTIzNlx1NjczQVx1NTIzNlx1RkYxQlx1NjUyRlx1NjMwMVx1NEUwRFx1NTQwQ1x1NTMzQlx1NzU5N1x1NEZFMVx1NjA2Rlx1N0NGQlx1N0VERlx1NEU0Qlx1OTVGNFx1NzY4NFx1NjgwN1x1NTFDNlx1NTMxNlx1NjU3MFx1NjM2RVx1NEVBNFx1NjM2Mlx1RkYxQlx1NTMzQlx1NzU5N1x1NjU3MFx1NjM2RVx1NzY4NFx1NUI4OVx1NTE2OFx1NTJBMFx1NUJDNlx1NUI1OFx1NTBBOFx1NTQ4Q1x1NEYyMFx1OEY5M1x1RkYxQlx1NTdGQVx1NEU4RVx1Njc0M1x1OTY1MFx1NzY4NFx1NTkxQVx1N0VBN1x1NjU3MFx1NjM2RVx1OEJCRlx1OTVFRVx1NjNBN1x1NTIzNlx1RkYxQlx1NTMzQlx1NzU5N1x1NjU3MFx1NjM2RVx1NTIwNlx1Njc5MFx1NTQ4Q1x1OEY4NVx1NTJBOVx1OEJDQVx1NjVBRFx1NTI5Rlx1ODBGRFx1MzAwMlx1NUU3M1x1NTNGMFx1OTcwMFx1ODk4MVx1N0IyNlx1NTQwOFx1NTZGRFx1NUJCNlx1NTMzQlx1NzU5N1x1NjU3MFx1NjM2RVx1NUI4OVx1NTE2OFx1NkNENVx1ODlDNFx1NTQ4Q1x1OTY5MFx1NzlDMVx1NEZERFx1NjJBNFx1ODk4MVx1NkM0Mlx1MzAwMicsXG4gICAgcmVxdWlyZW1lbnREZXNjcmlwdGlvbjogJ1x1Njc4NFx1NUVGQVx1NEUwMFx1NEUyQVx1NUI4OVx1NTE2OFx1NzY4NFx1NTMzQlx1NzU5N1x1NjU3MFx1NjM2RVx1NTE3MVx1NEVBQlx1NUU3M1x1NTNGMFx1RkYwQ1x1NjUyRlx1NjMwMVx1NTkxQVx1NUJCNlx1NTMzQlx1OTY2Mlx1NEU0Qlx1OTVGNFx1NzY4NFx1NjU3MFx1NjM2RVx1NUI4OVx1NTE2OFx1NEVBNFx1NjM2Mlx1NTQ4Q1x1NTIwNlx1Njc5MCcsXG4gICAgdGVjaG5pY2FsUmVxdWlyZW1lbnRzOiAnXHU5MUM3XHU3NTI4XHU1MzNBXHU1NzU3XHU5NEZFXHU2MjgwXHU2NzJGXHU0RkREXHU4QkMxXHU2NTcwXHU2MzZFXHU1Qjg5XHU1MTY4XHVGRjBDXHU1MjREXHU3QUVGUmVhY3RcdTY4NDZcdTY3QjZcdUZGMENcdTU0MEVcdTdBRUZKYXZhIFNwcmluZyBCb290JyxcbiAgICBhdWRpdFN0YXR1czogJ1x1NUJBMVx1NjgzOFx1OTAxQVx1OEZDNycsXG4gICAgYXVkaXRPcGluaW9uOiAnXHU5MDFBXHU4RkM3JyxcbiAgICBhdWRpdFJlYXNvbjogJ1x1N0IyNlx1NTQwOFx1NTMzQlx1NzU5N1x1NjU3MFx1NjM2RVx1NEVBNFx1NjM2Mlx1NjgwN1x1NTFDNicsXG4gICAgYXVkaXRvcjogJ1x1Njc0RVx1NUJBMVx1NjgzOCcsXG4gICAgZGVtYW5kZXI6ICdcdTUzMTdcdTRFQUNcdTUzM0JcdTVCNjZcdTc4MTRcdTdBNzZcdTYyNDAnLFxuICAgIGRlbWFuZGVySWQ6ICdNSS0yMDI0LTAwMicsXG4gICAgZXZpZGVuY2VUaW1lOiAnMjAyNC0wMS0xNSAxMTozMDowMCcsXG4gICAgZXZpZGVuY2VDaGFpbjogJ2NoYWluLWhhc2gtMDAyJ1xuICB9LFxuICB7XG4gICAgZXZpZGVuY2VObzogJ1JQLTIwMjQtMDAzJyxcbiAgICByZXF1aXJlbWVudE5hbWU6ICdcdTY2N0FcdTgwRkRcdTRFQTRcdTkwMUFcdTY1NzBcdTYzNkVcdTVFNzNcdTUzRjAnLFxuICAgIHJlcXVlc3Rlck5hbWU6ICdcdTRFQTRcdTkwMUFcdThGRDBcdThGOTNcdTkwRThcdTc5RDFcdTVCNjZcdTc4MTRcdTdBNzZcdTk2NjInLFxuICAgIHJlcXVlc3RlcklkOiAnVFItMjAyNC0wMDMnLFxuICAgIHB1Ymxpc2hBcHBseVRpbWU6ICcyMDI0LTAxLTE4IDA5OjMwOjQ1JyxcbiAgICBwdWJsaXNoQXVkaXRUaW1lOiAnMjAyNC0wMS0xOSAxNToxMDoyNScsXG4gICAgcHVibGlzaFRpbWU6ICcyMDI0LTAxLTIwIDEzOjQ1OjAwJyxcbiAgICBleHBpcmVUaW1lOiAnMjAyNC0wOC0yMCAxMzo0NTowMCcsXG4gICAgYnVkZ2V0OiAnNjUwMDAwJyxcbiAgICByZXF1aXJlbWVudFN0YXR1czogJ1x1NURGMlx1NTNEMVx1NUUwMycsXG4gICAgcmVxdWlyZW1lbnRJbmZvOiAnXHU1RUZBXHU4QkJFXHU0RTAwXHU0RTJBXHU2NjdBXHU4MEZEXHU0RUE0XHU5MDFBXHU2NTcwXHU2MzZFXHU1RTczXHU1M0YwXHVGRjBDXHU1QkY5XHU0RUE0XHU5MDFBXHU2RDQxXHU5MUNGXHUzMDAxXHU4REVGXHU1MUI1XHU3QjQ5XHU2NTcwXHU2MzZFXHU4RkRCXHU4ODRDXHU1QjlFXHU2NUY2XHU1OTA0XHU3NDA2XHU1NDhDXHU1MjA2XHU2NzkwXHUzMDAyXHU1RTczXHU1M0YwXHU2ODM4XHU1RkMzXHU1MjlGXHU4MEZEXHU1MzA1XHU2MkVDXHVGRjFBXHU0RUE0XHU5MDFBXHU2NTcwXHU2MzZFXHU3Njg0XHU1QjlFXHU2NUY2XHU5MUM3XHU5NkM2XHU1NDhDXHU1QjU4XHU1MEE4XHVGRjFCXHU0RUE0XHU5MDFBXHU2RDQxXHU5MUNGXHU3Njg0XHU5ODg0XHU2RDRCXHU1MjA2XHU2NzkwXHVGRjFCXHU0RUE0XHU5MDFBXHU3MkI2XHU2MDAxXHU1M0VGXHU4OUM2XHU1MzE2XHU1QzU1XHU3OTNBXHVGRjFCXHU0RUE0XHU5MDFBXHU0RThCXHU0RUY2XHU3Njg0XHU4MUVBXHU1MkE4XHU4QkM2XHU1MjJCXHU1NDhDXHU5ODg0XHU4QjY2XHVGRjFCXHU0RTNBXHU0RUE0XHU5MDFBXHU3QkExXHU3NDA2XHU1MUIzXHU3QjU2XHU2M0QwXHU0RjlCXHU2NTcwXHU2MzZFXHU2NTJGXHU2MzAxXHUzMDAyXHU3Q0ZCXHU3RURGXHU5NzAwXHU4OTgxXHU2NTJGXHU2MzAxXHU1N0NFXHU1RTAyXHU3RUE3XHU0RUE0XHU5MDFBXHU2NTcwXHU2MzZFXHU3Njg0XHU5QUQ4XHU1RTc2XHU1M0QxXHU1OTA0XHU3NDA2XHVGRjBDXHU1RTc2XHU2M0QwXHU0RjlCXHU1RjAwXHU2NTNFQVBJXHU2M0E1XHU1M0UzXHU0RjlCXHU1MTc2XHU0RUQ2XHU3Q0ZCXHU3RURGXHU4QzAzXHU3NTI4XHUzMDAyJyxcbiAgICByZXF1aXJlbWVudERlc2NyaXB0aW9uOiAnXHU1RUZBXHU4QkJFXHU0RTAwXHU0RTJBXHU2NjdBXHU4MEZEXHU0RUE0XHU5MDFBXHU2NTcwXHU2MzZFXHU1RTczXHU1M0YwXHVGRjBDXHU1QkY5XHU0RUE0XHU5MDFBXHU2RDQxXHU5MUNGXHUzMDAxXHU4REVGXHU1MUI1XHU3QjQ5XHU2NTcwXHU2MzZFXHU4RkRCXHU4ODRDXHU1QjlFXHU2NUY2XHU1OTA0XHU3NDA2XHU1NDhDXHU1MjA2XHU2NzkwJyxcbiAgICB0ZWNobmljYWxSZXF1aXJlbWVudHM6ICdcdTY1MkZcdTYzMDFcdTU5MjdcdTY1NzBcdTYzNkVcdTVCOUVcdTY1RjZcdTU5MDRcdTc0MDZcdUZGMENcdTkxQzdcdTc1MjhLYWZrYStTcGFya1x1NjdCNlx1Njc4NFx1RkYwQ1x1NTI0RFx1N0FFRlx1NEY3Rlx1NzUyOEFuZ3VsYXInLFxuICAgIGF1ZGl0U3RhdHVzOiAnXHU1QkExXHU2ODM4XHU5MDFBXHU4RkM3JyxcbiAgICBhdWRpdE9waW5pb246ICdcdTkwMUFcdThGQzcnLFxuICAgIGF1ZGl0UmVhc29uOiAnXHU5ODc5XHU3NkVFXHU1MTc3XHU2NzA5XHU5MUNEXHU4OTgxXHU3OTNFXHU0RjFBXHU0RUY3XHU1MDNDJyxcbiAgICBhdWRpdG9yOiAnXHU3MzhCXHU1QkExXHU2ODM4JyxcbiAgICBkZW1hbmRlcjogJ1x1NEVBNFx1OTAxQVx1OEZEMFx1OEY5M1x1OTBFOFx1NzlEMVx1NUI2Nlx1NzgxNFx1N0E3Nlx1OTY2MicsXG4gICAgZGVtYW5kZXJJZDogJ1RSLTIwMjQtMDAzJyxcbiAgICBldmlkZW5jZVRpbWU6ICcyMDI0LTAxLTIwIDE2OjE1OjAwJyxcbiAgICBldmlkZW5jZUNoYWluOiAnY2hhaW4taGFzaC0wMDMnXG4gIH0sXG4gIHtcbiAgICBldmlkZW5jZU5vOiAnUlAtMjAyNC0wMDQnLFxuICAgIHJlcXVpcmVtZW50TmFtZTogJ1x1NTE5Q1x1NEUxQVx1NTkyN1x1NjU3MFx1NjM2RVx1NTIwNlx1Njc5MFx1N0NGQlx1N0VERicsXG4gICAgcmVxdWVzdGVyTmFtZTogJ1x1NTZGRFx1NUJCNlx1NTE5Q1x1NEUxQVx1NTE5Q1x1Njc1MVx1OTBFOCcsXG4gICAgcmVxdWVzdGVySWQ6ICdBRy0yMDI0LTAwNCcsXG4gICAgcHVibGlzaEFwcGx5VGltZTogJzIwMjQtMDEtMjUgMTQ6MjA6MzUnLFxuICAgIHB1Ymxpc2hBdWRpdFRpbWU6ICcyMDI0LTAxLTI2IDEwOjE1OjIyJyxcbiAgICBwdWJsaXNoVGltZTogJzIwMjQtMDEtMjcgMDk6MzA6MDAnLFxuICAgIGV4cGlyZVRpbWU6ICcyMDI0LTA5LTI3IDA5OjMwOjAwJyxcbiAgICBidWRnZXQ6ICc3MjAwMDAnLFxuICAgIHJlcXVpcmVtZW50U3RhdHVzOiAnXHU1REYyXHU1M0QxXHU1RTAzJyxcbiAgICByZXF1aXJlbWVudEluZm86ICdcdTVGMDBcdTUzRDFcdTRFMDBcdTRFMkFcdTUxNjhcdTU2RkRcdTUxOUNcdTRFMUFcdTU5MjdcdTY1NzBcdTYzNkVcdTUyMDZcdTY3OTBcdTdDRkJcdTdFREZcdUZGMENcdTY1NzRcdTU0MDhcdTU0MDRcdTU3MzBcdTUxOUNcdTRFMUFcdTc1MUZcdTRFQTdcdTMwMDFcdTZDMTRcdThDNjFcdTMwMDFcdTZDMzRcdTUyMjlcdTMwMDFcdTU3MUZcdTU4RTRcdTdCNDlcdTY1NzBcdTYzNkVcdUZGMENcdTRFM0FcdTUxOUNcdTRFMUFcdTc1MUZcdTRFQTdcdTYzRDBcdTRGOUJcdTUxQjNcdTdCNTZcdTY1MkZcdTYzMDFcdTMwMDJcdTdDRkJcdTdFREZcdTk3MDBcdTg5ODFcdTVCOUVcdTczQjBcdTRFRTVcdTRFMEJcdTUyOUZcdTgwRkRcdUZGMUFcdTU5MUFcdTZFOTBcdTUxOUNcdTRFMUFcdTY1NzBcdTYzNkVcdTc2ODRcdTkxQzdcdTk2QzZcdTU0OENcdTZFMDVcdTZEMTdcdUZGMUJcdTUxOUNcdTRGNUNcdTcyNjlcdTc1MUZcdTk1N0ZcdTczQUZcdTU4ODNcdTc2RDFcdTZENEJcdTU0OENcdTUyMDZcdTY3OTBcdUZGMUJcdTUxOUNcdTRFMUFcdTc1MUZcdTRFQTdcdTk4ODRcdTZENEJcdTU0OENcdTk4ODRcdThCNjZcdUZGMUJcdTY2N0FcdTgwRkRcdTUxOUNcdTRFMUFcdTUxQjNcdTdCNTZcdTY1MkZcdTYzMDFcdUZGMUJcdTUxOUNcdTRFQTdcdTU0QzFcdTRFQTdcdTk1MDBcdTVCRjlcdTYzQTVcdTY3MERcdTUyQTFcdTMwMDJcdTdDRkJcdTdFREZcdTk3MDBcdTg5ODFcdTY1MkZcdTYzMDFcdTU5MjdcdTg5QzRcdTZBMjFcdTdBN0FcdTk1RjRcdTY1NzBcdTYzNkVcdTU5MDRcdTc0MDZcdTU0OENcdTUyMDZcdTY3OTBcdTMwMDInLFxuICAgIHJlcXVpcmVtZW50RGVzY3JpcHRpb246ICdcdTVGMDBcdTUzRDFcdTUxNjhcdTU2RkRcdTUxOUNcdTRFMUFcdTU5MjdcdTY1NzBcdTYzNkVcdTUyMDZcdTY3OTBcdTdDRkJcdTdFREZcdUZGMENcdTY1NzRcdTU0MDhcdTU0MDRcdTU3MzBcdTUxOUNcdTRFMUFcdTc1MUZcdTRFQTdcdTMwMDFcdTZDMTRcdThDNjFcdTMwMDFcdTZDMzRcdTUyMjlcdTMwMDFcdTU3MUZcdTU4RTRcdTdCNDlcdTY1NzBcdTYzNkUnLFxuICAgIHRlY2huaWNhbFJlcXVpcmVtZW50czogJ1x1NEY3Rlx1NzUyOEhhZG9vcFx1NzUxRlx1NjAwMVx1N0NGQlx1N0VERlx1RkYwQ1x1N0VEM1x1NTQwOEdJU1x1NjI4MFx1NjcyRlx1RkYwQ1x1NTI0RFx1N0FFRlx1OTFDN1x1NzUyOFZ1ZS5qc1x1RkYwQ1x1NjUyRlx1NjMwMVx1NzlGQlx1NTJBOFx1N0FFRlx1OEJCRlx1OTVFRScsXG4gICAgYXVkaXRTdGF0dXM6ICdcdTVGODVcdTVCQTFcdTY4MzgnLFxuICAgIGF1ZGl0T3BpbmlvbjogJ1x1NUY4NVx1NUJBMVx1NjgzOCcsXG4gICAgYXVkaXRSZWFzb246ICcnLFxuICAgIGF1ZGl0b3I6ICctJyxcbiAgICBkZW1hbmRlcjogJ1x1NTZGRFx1NUJCNlx1NTE5Q1x1NEUxQVx1NTE5Q1x1Njc1MVx1OTBFOCcsXG4gICAgZGVtYW5kZXJJZDogJ0FHLTIwMjQtMDA0JyxcbiAgICBldmlkZW5jZVRpbWU6ICcyMDI0LTAxLTI3IDExOjQ1OjAwJyxcbiAgICBldmlkZW5jZUNoYWluOiAnY2hhaW4taGFzaC0wMDQnXG4gIH0sXG4gIHtcbiAgICBldmlkZW5jZU5vOiAnUlAtMjAyNC0wMDUnLFxuICAgIHJlcXVpcmVtZW50TmFtZTogJ1x1NjY3QVx1NjE2N1x1NjU1OVx1ODBCMlx1NjU3MFx1NjM2RVx1NUU3M1x1NTNGMCcsXG4gICAgcmVxdWVzdGVyTmFtZTogJ1x1NjU1OVx1ODBCMlx1OTBFOFx1NjU1OVx1ODBCMlx1NEZFMVx1NjA2Rlx1NTMxNlx1NTNGOCcsXG4gICAgcmVxdWVzdGVySWQ6ICdFRC0yMDI0LTAwNScsXG4gICAgcHVibGlzaEFwcGx5VGltZTogJzIwMjQtMDItMDMgMTE6MTA6MjUnLFxuICAgIHB1Ymxpc2hBdWRpdFRpbWU6ICcyMDI0LTAyLTA0IDE0OjMwOjQwJyxcbiAgICBwdWJsaXNoVGltZTogJzIwMjQtMDItMDUgMTA6MDA6MDAnLFxuICAgIGV4cGlyZVRpbWU6ICcyMDI0LTEwLTA1IDEwOjAwOjAwJyxcbiAgICBidWRnZXQ6ICc1NTAwMDAnLFxuICAgIHJlcXVpcmVtZW50U3RhdHVzOiAnXHU1REYyXHU1M0QxXHU1RTAzJyxcbiAgICByZXF1aXJlbWVudEluZm86ICdcdTVFRkFcdThCQkVcdTRFMDBcdTRFMkFcdTk3NjJcdTU0MTFcdTUxNjhcdTU2RkRcdTY1NTlcdTgwQjJcdTdDRkJcdTdFREZcdTc2ODRcdTY2N0FcdTYxNjdcdTY1NTlcdTgwQjJcdTY1NzBcdTYzNkVcdTVFNzNcdTUzRjBcdUZGMENcdTY1NzRcdTU0MDhcdTY1NTlcdTgwQjJcdThENDRcdTZFOTBcdTMwMDFcdTVCNjZcdTc1MUZcdTVCNjZcdTRFNjBcdTg4NENcdTRFM0FcdTU0OENcdTY1NTlcdTVCNjZcdThGQzdcdTdBMEJcdTY1NzBcdTYzNkVcdUZGMENcdTVCOUVcdTczQjBcdTY1NTlcdTgwQjJcdTY1NTlcdTVCNjZcdTc2ODRcdTY2N0FcdTgwRkRcdTUzMTZcdTdCQTFcdTc0MDZcdTU0OENcdTUxQjNcdTdCNTZcdTY1MkZcdTYzMDFcdTMwMDJcdTVFNzNcdTUzRjBcdTY4MzhcdTVGQzNcdTUyOUZcdTgwRkRcdTUzMDVcdTYyRUNcdUZGMUFcdTY1NTlcdTgwQjJcdThENDRcdTZFOTBcdTc2ODRcdTdFREZcdTRFMDBcdTdCQTFcdTc0MDZcdTU0OENcdTY2N0FcdTgwRkRcdTYzQThcdTgzNTBcdUZGMUJcdTVCNjZcdTc1MUZcdTVCNjZcdTRFNjBcdTg4NENcdTRFM0FcdTc2ODRcdThGRkRcdThFMkFcdTU0OENcdTUyMDZcdTY3OTBcdUZGMUJcdTY1NTlcdTVCNjZcdThGQzdcdTdBMEJcdTY1NzBcdTYzNkVcdTc2ODRcdTkxQzdcdTk2QzZcdTU0OENcdTU5MDRcdTc0MDZcdUZGMUJcdTRFMkFcdTYwMjdcdTUzMTZcdTVCNjZcdTRFNjBcdThERUZcdTVGODRcdTc2ODRcdTc1MUZcdTYyMTBcdUZGMUJcdTY1NTlcdTgwQjJcdThEMjhcdTkxQ0ZcdThCQzRcdTRGMzBcdTU0OENcdTUyMDZcdTY3OTBcdTMwMDJcdTdDRkJcdTdFREZcdTk3MDBcdTg5ODFcdTY1MkZcdTYzMDFcdTUxNjhcdTU2RkRcdTgzMDNcdTU2RjRcdTUxODVcdTc2ODRcdTU5MUFcdTdFQTdcdTY1NTlcdTgwQjJcdTY3M0FcdTY3ODRcdTYzQTVcdTUxNjVcdTMwMDInLFxuICAgIHJlcXVpcmVtZW50RGVzY3JpcHRpb246ICdcdTVFRkFcdThCQkVcdTk3NjJcdTU0MTFcdTUxNjhcdTU2RkRcdTY1NTlcdTgwQjJcdTdDRkJcdTdFREZcdTc2ODRcdTY2N0FcdTYxNjdcdTY1NTlcdTgwQjJcdTY1NzBcdTYzNkVcdTVFNzNcdTUzRjBcdUZGMENcdTY1NzRcdTU0MDhcdTY1NTlcdTgwQjJcdThENDRcdTZFOTBcdTU0OENcdTY1NTlcdTVCNjZcdThGQzdcdTdBMEJcdTY1NzBcdTYzNkUnLFxuICAgIHRlY2huaWNhbFJlcXVpcmVtZW50czogJ1x1OTFDN1x1NzUyOFx1NUZBRVx1NjcwRFx1NTJBMVx1NjdCNlx1Njc4NFx1RkYwQ1x1NTQwRVx1N0FFRlNwcmluZyBDbG91ZFx1RkYwQ1x1NTI0RFx1N0FFRlJlYWN0XHVGRjBDXHU2NTJGXHU2MzAxXHU3OUMxXHU2NzA5XHU0RTkxXHU5MEU4XHU3RjcyJyxcbiAgICBhdWRpdFN0YXR1czogJ1x1NUJBMVx1NjgzOFx1OTAxQVx1OEZDNycsXG4gICAgYXVkaXRPcGluaW9uOiAnXHU5MDFBXHU4RkM3JyxcbiAgICBhdWRpdFJlYXNvbjogJ1x1N0IyNlx1NTQwOFx1NTZGRFx1NUJCNlx1NjU1OVx1ODBCMlx1NEZFMVx1NjA2Rlx1NTMxNlx1NjIxOFx1NzU2NScsXG4gICAgYXVkaXRvcjogJ1x1NTQ2OFx1NUJBMVx1NjgzOCcsXG4gICAgZGVtYW5kZXI6ICdcdTY1NTlcdTgwQjJcdTkwRThcdTY1NTlcdTgwQjJcdTRGRTFcdTYwNkZcdTUzMTZcdTUzRjgnLFxuICAgIGRlbWFuZGVySWQ6ICdFRC0yMDI0LTAwNScsXG4gICAgZXZpZGVuY2VUaW1lOiAnMjAyNC0wMi0wNSAxMzoyNTowMCcsXG4gICAgZXZpZGVuY2VDaGFpbjogJ2NoYWluLWhhc2gtMDA1J1xuICB9XG5dO1xuXG4vLyBcdTk3MDBcdTZDNDJcdThCQTRcdTk4ODZcdThCQjBcdTVGNTVcdTVCNThcdThCQzFcdTUyMTdcdTg4NjhcdTY1NzBcdTYzNkVcbmNvbnN0IHJlcXVpcmVtZW50Q2xhaW1FdmlkZW5jZUxpc3QgPSBbXG4gIHtcbiAgICBldmlkZW5jZU5vOiAnUkMtMjAyNC0wMDEnLFxuICAgIHJlcXVpcmVtZW50TmFtZTogJ1x1OTFEMVx1ODc4RFx1NjU3MFx1NjM2RVx1NTIwNlx1Njc5MFx1NUU3M1x1NTNGMCcsXG4gICAgcmVxdWlyZW1lbnRObzogJ1JQLTIwMjQtMDAxJyxcbiAgICByZXF1aXJlbWVudFR5cGU6ICdcdTY1NzBcdTYzNkVcdTUyMDZcdTY3OTAnLFxuICAgIHJlcXVpcmVtZW50U3RhdHVzOiAnXHU1OTA0XHU3NDA2XHU0RTJEJyxcbiAgICByZXF1aXJlbWVudENvbnRlbnQ6ICdcdTk3MDBcdTg5ODFcdTVGMDBcdTUzRDFcdTRFMDBcdTRFMkFcdTgwRkRcdTU5MUZcdTU5MDRcdTc0MDZcdTU5MjdcdTg5QzRcdTZBMjFcdTkxRDFcdTg3OERcdTY1NzBcdTYzNkVcdTc2ODRcdTUyMDZcdTY3OTBcdTVFNzNcdTUzRjBcdUZGMENcdTY1MkZcdTYzMDFcdTU5MUFcdTc5Q0RcdTkxRDFcdTg3OERcdTZBMjFcdTU3OEJcdThCQTFcdTdCOTdcdTU0OENcdTUzRUZcdTg5QzZcdTUzMTZcdTVDNTVcdTc5M0FcdTMwMDJcdTUzMDVcdTYyRUNcdTRGNDZcdTRFMERcdTk2NTBcdTRFOEVcdUZGMUFcdTU3RkFcdTc4NDBcdTc2ODRcdTkxRDFcdTg3OERcdTY1NzBcdTYzNkVcdTZFMDVcdTZEMTdcdTMwMDFcdThGNkNcdTYzNjJcdTUyOUZcdTgwRkRcdUZGMUJcdTU0MDRcdTdDN0JcdTkxRDFcdTg3OERcdTYzMDdcdTY4MDdcdTc2ODRcdThCQTFcdTdCOTdcdTUyMDZcdTY3OTBcdTUyOUZcdTgwRkRcdUZGMUJcdTdFRkNcdTU0MDhcdTc2ODRcdTY1NzBcdTYzNkVcdTUzRUZcdTg5QzZcdTUzMTZcdTVDNTVcdTc5M0FcdTUyOUZcdTgwRkRcdUZGMUJcdTY1NzBcdTYzNkVcdTYyQTVcdTg4NjhcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTBcdTUyOUZcdTgwRkRcdUZGMUJcdTU5MUFcdTc1MjhcdTYyMzdcdTY3NDNcdTk2NTBcdTdCQTFcdTc0MDZcdTU0OENcdTUzNEZcdTU0MENcdTVERTVcdTRGNUNcdTUyOUZcdTgwRkRcdTMwMDJcdTdDRkJcdTdFREZcdTk3MDBcdTg5ODFcdTY1MkZcdTYzMDFcdTgxRjNcdTVDMTExMFRCXHU3RUE3XHU1MjJCXHU2NTcwXHU2MzZFXHU3Njg0XHU5QUQ4XHU2NTQ4XHU1OTA0XHU3NDA2XHUzMDAyJyxcbiAgICBjbGFpbWFudDogJ1x1NjU3MFx1NjM2RVx1NzlEMVx1NjI4MFx1NjcwOVx1OTY1MFx1NTE2Q1x1NTNGOCcsXG4gICAgY2xhaW1hbnRJZDogJ0RTVC0yMDI0LTAwMScsXG4gICAgY2xhaW1UaW1lOiAnMjAyNC0wMS0xNSAxMDoyMDowMCcsXG4gICAgZXN0aW1hdGVkQ29tcGxldGlvblRpbWU6ICcyMDI0LTA2LTIwJyxcbiAgICBvZmZlclByaWNlOiAnNDgwMDAwJyxcbiAgICBkZXZlbG9wbWVudFBsYW46ICdcdTUyMDZcdTU2REJcdTRFMkFcdTk2MzZcdTZCQjVcdTVCOENcdTYyMTBcdTVGMDBcdTUzRDFcdUZGMENcdTUzMDVcdTYyRUNcdTk3MDBcdTZDNDJcdTUyMDZcdTY3OTBcdTMwMDFcdTY3QjZcdTY3ODRcdThCQkVcdThCQTFcdTMwMDFcdTUyOUZcdTgwRkRcdTVCOUVcdTczQjBcdTU0OENcdTZENEJcdThCRDVcdTkwRThcdTdGNzInLFxuICAgIHRlY2huaWNhbFNvbHV0aW9uOiAnXHU5MUM3XHU3NTI4UHl0aG9uK1RlbnNvckZsb3dcdThGREJcdTg4NENcdTY1NzBcdTYzNkVcdTU5MDRcdTc0MDZcdUZGMENWdWUuanNcdTUyNERcdTdBRUZcdTY4NDZcdTY3QjZcdUZGMENEb2NrZXJcdTVCQjlcdTU2NjhcdTUzMTZcdTkwRThcdTdGNzInLFxuICAgIGF1ZGl0U3RhdHVzOiAnXHU1QkExXHU2ODM4XHU5MDFBXHU4RkM3JyxcbiAgICBhdWRpdFRpbWU6ICcyMDI0LTAxLTE2IDE0OjM1OjQyJyxcbiAgICBhdWRpdG9yOiAnXHU4RDc1XHU1QkExXHU2ODM4JyxcbiAgICBldmlkZW5jZVRpbWU6ICcyMDI0LTAxLTE2IDE2OjMwOjAwJyxcbiAgICBldmlkZW5jZUNoYWluOiAnY2hhaW4taGFzaC0wMDQnXG4gIH0sXG4gIHtcbiAgICBldmlkZW5jZU5vOiAnUkMtMjAyNC0wMDInLFxuICAgIHJlcXVpcmVtZW50TmFtZTogJ1x1NTMzQlx1NzU5N1x1NjU3MFx1NjM2RVx1NTE3MVx1NEVBQlx1NUU3M1x1NTNGMCcsXG4gICAgcmVxdWlyZW1lbnRObzogJ1JQLTIwMjQtMDAyJyxcbiAgICByZXF1aXJlbWVudFR5cGU6ICdcdTY1NzBcdTYzNkVcdTUxNzFcdTRFQUInLFxuICAgIHJlcXVpcmVtZW50U3RhdHVzOiAnXHU1OTA0XHU3NDA2XHU0RTJEJyxcbiAgICByZXF1aXJlbWVudENvbnRlbnQ6ICdcdTY3ODRcdTVFRkFcdTRFMDBcdTRFMkFcdTVCODlcdTUxNjhcdTc2ODRcdTUzM0JcdTc1OTdcdTY1NzBcdTYzNkVcdTUxNzFcdTRFQUJcdTVFNzNcdTUzRjBcdUZGMENcdTY1MkZcdTYzMDFcdTU5MUFcdTVCQjZcdTUzM0JcdTk2NjJcdTRFNEJcdTk1RjRcdTc2ODRcdTY1NzBcdTYzNkVcdTVCODlcdTUxNjhcdTRFQTRcdTYzNjJcdTU0OENcdTUyMDZcdTY3OTBcdTMwMDJcdThCRTVcdTVFNzNcdTUzRjBcdTk3MDBcdTg5ODFcdTZFRTFcdThEQjNcdTRFRTVcdTRFMEJcdTY4MzhcdTVGQzNcdTk3MDBcdTZDNDJcdUZGMUFcdTRFMjVcdTY4M0NcdTc2ODRcdTY1NzBcdTYzNkVcdTk2OTBcdTc5QzFcdTRGRERcdTYyQTRcdTU0OENcdThCQkZcdTk1RUVcdTYzQTdcdTUyMzZcdTY3M0FcdTUyMzZcdUZGMUJcdTY1MkZcdTYzMDFcdTRFMERcdTU0MENcdTUzM0JcdTc1OTdcdTRGRTFcdTYwNkZcdTdDRkJcdTdFREZcdTRFNEJcdTk1RjRcdTc2ODRcdTY4MDdcdTUxQzZcdTUzMTZcdTY1NzBcdTYzNkVcdTRFQTRcdTYzNjJcdUZGMUJcdTUzM0JcdTc1OTdcdTY1NzBcdTYzNkVcdTc2ODRcdTVCODlcdTUxNjhcdTUyQTBcdTVCQzZcdTVCNThcdTUwQThcdTU0OENcdTRGMjBcdThGOTNcdUZGMUJcdTU3RkFcdTRFOEVcdTY3NDNcdTk2NTBcdTc2ODRcdTU5MUFcdTdFQTdcdTY1NzBcdTYzNkVcdThCQkZcdTk1RUVcdTYzQTdcdTUyMzZcdUZGMUJcdTUzM0JcdTc1OTdcdTY1NzBcdTYzNkVcdTUyMDZcdTY3OTBcdTU0OENcdThGODVcdTUyQTlcdThCQ0FcdTY1QURcdTUyOUZcdTgwRkRcdTMwMDJcdTVFNzNcdTUzRjBcdTk3MDBcdTg5ODFcdTdCMjZcdTU0MDhcdTU2RkRcdTVCQjZcdTUzM0JcdTc1OTdcdTY1NzBcdTYzNkVcdTVCODlcdTUxNjhcdTZDRDVcdTg5QzRcdTU0OENcdTk2OTBcdTc5QzFcdTRGRERcdTYyQTRcdTg5ODFcdTZDNDJcdTMwMDInLFxuICAgIGNsYWltYW50OiAnXHU1MzNCXHU3NTk3XHU0RkUxXHU2MDZGXHU2MjgwXHU2NzJGXHU1MTZDXHU1M0Y4JyxcbiAgICBjbGFpbWFudElkOiAnTUlULTIwMjQtMDAyJyxcbiAgICBjbGFpbVRpbWU6ICcyMDI0LTAxLTI1IDExOjE1OjAwJyxcbiAgICBlc3RpbWF0ZWRDb21wbGV0aW9uVGltZTogJzIwMjQtMDUtMzAnLFxuICAgIG9mZmVyUHJpY2U6ICc3NTAwMDAnLFxuICAgIGRldmVsb3BtZW50UGxhbjogJ1x1OTFDN1x1NzUyOFx1NjU0Rlx1NjM3N1x1NUYwMFx1NTNEMVx1NjVCOVx1NkNENVx1RkYwQ1x1NEUyNFx1NTQ2OFx1NEUwMFx1NEUyQVx1OEZFRFx1NEVFM1x1RkYwQ1x1NTE3MVx1OEJBMTEwXHU0RTJBXHU4RkVEXHU0RUUzXHU1QjhDXHU2MjEwXHU2MjQwXHU2NzA5XHU1MjlGXHU4MEZEJyxcbiAgICB0ZWNobmljYWxTb2x1dGlvbjogJ1x1NTdGQVx1NEU4RUZISVJcdTY4MDdcdTUxQzZcdTY3ODRcdTVFRkFcdTUzM0JcdTc1OTdcdTY1NzBcdTYzNkVcdTRFQTRcdTYzNjJcdTY3MERcdTUyQTFcdUZGMENcdTUyNERcdTdBRUZSZWFjdFx1RkYwQ1x1NTQwRVx1N0FFRlNwcmluZyBCb290XHVGRjBDXHU2NTcwXHU2MzZFXHU1RTkzXHU5MUM3XHU3NTI4TW9uZ29EQicsXG4gICAgYXVkaXRTdGF0dXM6ICdcdTVCQTFcdTY4MzhcdTkwMUFcdThGQzcnLFxuICAgIGF1ZGl0VGltZTogJzIwMjQtMDEtMjYgMDk6MzA6MTgnLFxuICAgIGF1ZGl0b3I6ICdcdTk0QjFcdTVCQTFcdTY4MzgnLFxuICAgIGV2aWRlbmNlVGltZTogJzIwMjQtMDEtMjYgMTE6NDU6MDAnLFxuICAgIGV2aWRlbmNlQ2hhaW46ICdjaGFpbi1oYXNoLTAwNSdcbiAgfSxcbiAge1xuICAgIGV2aWRlbmNlTm86ICdSQy0yMDI0LTAwMycsXG4gICAgcmVxdWlyZW1lbnROYW1lOiAnXHU2NjdBXHU4MEZEXHU0RUE0XHU5MDFBXHU2NTcwXHU2MzZFXHU1RTczXHU1M0YwJyxcbiAgICByZXF1aXJlbWVudE5vOiAnUlAtMjAyNC0wMDMnLFxuICAgIHJlcXVpcmVtZW50VHlwZTogJ1x1NjY3QVx1ODBGRFx1NEVBNFx1OTAxQScsXG4gICAgcmVxdWlyZW1lbnRTdGF0dXM6ICdcdTVERjJcdThCQTRcdTk4ODYnLFxuICAgIHJlcXVpcmVtZW50Q29udGVudDogJ1x1NUVGQVx1OEJCRVx1NEUwMFx1NEUyQVx1NjY3QVx1ODBGRFx1NEVBNFx1OTAxQVx1NjU3MFx1NjM2RVx1NUU3M1x1NTNGMFx1RkYwQ1x1NUJGOVx1NEVBNFx1OTAxQVx1NkQ0MVx1OTFDRlx1MzAwMVx1OERFRlx1NTFCNVx1N0I0OVx1NjU3MFx1NjM2RVx1OEZEQlx1ODg0Q1x1NUI5RVx1NjVGNlx1NTkwNFx1NzQwNlx1NTQ4Q1x1NTIwNlx1Njc5MFx1MzAwMlx1NUU3M1x1NTNGMFx1NjgzOFx1NUZDM1x1NTI5Rlx1ODBGRFx1NTMwNVx1NjJFQ1x1RkYxQVx1NEVBNFx1OTAxQVx1NjU3MFx1NjM2RVx1NzY4NFx1NUI5RVx1NjVGNlx1OTFDN1x1OTZDNlx1NTQ4Q1x1NUI1OFx1NTBBOFx1RkYxQlx1NEVBNFx1OTAxQVx1NkQ0MVx1OTFDRlx1NzY4NFx1OTg4NFx1NkQ0Qlx1NTIwNlx1Njc5MFx1RkYxQlx1NEVBNFx1OTAxQVx1NzJCNlx1NjAwMVx1NTNFRlx1ODlDNlx1NTMxNlx1NUM1NVx1NzkzQVx1RkYxQlx1NEVBNFx1OTAxQVx1NEU4Qlx1NEVGNlx1NzY4NFx1ODFFQVx1NTJBOFx1OEJDNlx1NTIyQlx1NTQ4Q1x1OTg4NFx1OEI2Nlx1RkYxQlx1NEUzQVx1NEVBNFx1OTAxQVx1N0JBMVx1NzQwNlx1NTFCM1x1N0I1Nlx1NjNEMFx1NEY5Qlx1NjU3MFx1NjM2RVx1NjUyRlx1NjMwMVx1MzAwMlx1N0NGQlx1N0VERlx1OTcwMFx1ODk4MVx1NjUyRlx1NjMwMVx1NTdDRVx1NUUwMlx1N0VBN1x1NEVBNFx1OTAxQVx1NjU3MFx1NjM2RVx1NzY4NFx1OUFEOFx1NUU3Nlx1NTNEMVx1NTkwNFx1NzQwNlx1RkYwQ1x1NUU3Nlx1NjNEMFx1NEY5Qlx1NUYwMFx1NjUzRUFQSVx1NjNBNVx1NTNFM1x1NEY5Qlx1NTE3Nlx1NEVENlx1N0NGQlx1N0VERlx1OEMwM1x1NzUyOFx1MzAwMicsXG4gICAgY2xhaW1hbnQ6ICdcdTY2N0FcdTYxNjdcdTU3Q0VcdTVFMDJcdTc5RDFcdTYyODBcdTY3MDlcdTk2NTBcdTUxNkNcdTUzRjgnLFxuICAgIGNsYWltYW50SWQ6ICdTQ1QtMjAyNC0wMDMnLFxuICAgIGNsYWltVGltZTogJzIwMjQtMDItMDEgMTQ6NDA6MDAnLFxuICAgIGVzdGltYXRlZENvbXBsZXRpb25UaW1lOiAnMjAyNC0wNy0xNScsXG4gICAgb2ZmZXJQcmljZTogJzYyMDAwMCcsXG4gICAgZGV2ZWxvcG1lbnRQbGFuOiAnXHU0RTA5XHU0RTJBXHU2NzA4XHU1QjhDXHU2MjEwXHU2ODM4XHU1RkMzXHU1MjlGXHU4MEZEXHU1RjAwXHU1M0QxXHVGRjBDXHU0RTI0XHU0RTJBXHU2NzA4XHU4RkRCXHU4ODRDXHU3Q0ZCXHU3RURGXHU2RDRCXHU4QkQ1XHU1NDhDXHU0RjE4XHU1MzE2JyxcbiAgICB0ZWNobmljYWxTb2x1dGlvbjogJ1x1OTFDN1x1NzUyOFx1NUZBRVx1NjcwRFx1NTJBMVx1NjdCNlx1Njc4NFx1RkYwQ0thZmthXHU1OTA0XHU3NDA2XHU1QjlFXHU2NUY2XHU2NTcwXHU2MzZFXHU2RDQxXHVGRjBDU3BhcmtcdThGREJcdTg4NENcdTY1NzBcdTYzNkVcdTUyMDZcdTY3OTBcdUZGMENFbGFzdGljU2VhcmNoXHU1QjU4XHU1MEE4XHU1NDhDXHU2OEMwXHU3RDIyXHU2NTcwXHU2MzZFJyxcbiAgICBhdWRpdFN0YXR1czogJ1x1NUJBMVx1NjgzOFx1OTAxQVx1OEZDNycsXG4gICAgYXVkaXRUaW1lOiAnMjAyNC0wMi0wMiAxNjo1NTozMycsXG4gICAgYXVkaXRvcjogJ1x1NUI1OVx1NUJBMVx1NjgzOCcsXG4gICAgZXZpZGVuY2VUaW1lOiAnMjAyNC0wMi0wMiAxODoyMDowMCcsXG4gICAgZXZpZGVuY2VDaGFpbjogJ2NoYWluLWhhc2gtMDA2J1xuICB9LFxuICB7XG4gICAgZXZpZGVuY2VObzogJ1JDLTIwMjQtMDA0JyxcbiAgICByZXF1aXJlbWVudE5hbWU6ICdcdTUxOUNcdTRFMUFcdTU5MjdcdTY1NzBcdTYzNkVcdTUyMDZcdTY3OTBcdTdDRkJcdTdFREYnLFxuICAgIHJlcXVpcmVtZW50Tm86ICdSUC0yMDI0LTAwNCcsXG4gICAgcmVxdWlyZW1lbnRUeXBlOiAnXHU1MTlDXHU0RTFBXHU0RkUxXHU2MDZGXHU1MzE2JyxcbiAgICByZXF1aXJlbWVudFN0YXR1czogJ1x1NURGMlx1NUI4Q1x1NjIxMCcsXG4gICAgcmVxdWlyZW1lbnRDb250ZW50OiAnXHU1RjAwXHU1M0QxXHU0RTAwXHU0RTJBXHU1MTY4XHU1NkZEXHU1MTlDXHU0RTFBXHU1OTI3XHU2NTcwXHU2MzZFXHU1MjA2XHU2NzkwXHU3Q0ZCXHU3RURGXHVGRjBDXHU2NTc0XHU1NDA4XHU1NDA0XHU1NzMwXHU1MTlDXHU0RTFBXHU3NTFGXHU0RUE3XHUzMDAxXHU2QzE0XHU4QzYxXHUzMDAxXHU2QzM0XHU1MjI5XHUzMDAxXHU1NzFGXHU1OEU0XHU3QjQ5XHU2NTcwXHU2MzZFXHVGRjBDXHU0RTNBXHU1MTlDXHU0RTFBXHU3NTFGXHU0RUE3XHU2M0QwXHU0RjlCXHU1MUIzXHU3QjU2XHU2NTJGXHU2MzAxXHUzMDAyXHU3Q0ZCXHU3RURGXHU5NzAwXHU4OTgxXHU1QjlFXHU3M0IwXHU0RUU1XHU0RTBCXHU1MjlGXHU4MEZEXHVGRjFBXHU1OTFBXHU2RTkwXHU1MTlDXHU0RTFBXHU2NTcwXHU2MzZFXHU3Njg0XHU5MUM3XHU5NkM2XHU1NDhDXHU2RTA1XHU2RDE3XHVGRjFCXHU1MTlDXHU0RjVDXHU3MjY5XHU3NTFGXHU5NTdGXHU3M0FGXHU1ODgzXHU3NkQxXHU2RDRCXHU1NDhDXHU1MjA2XHU2NzkwXHVGRjFCXHU1MTlDXHU0RTFBXHU3NTFGXHU0RUE3XHU5ODg0XHU2RDRCXHU1NDhDXHU5ODg0XHU4QjY2XHVGRjFCXHU2NjdBXHU4MEZEXHU1MTlDXHU0RTFBXHU1MUIzXHU3QjU2XHU2NTJGXHU2MzAxXHVGRjFCXHU1MTlDXHU0RUE3XHU1NEMxXHU0RUE3XHU5NTAwXHU1QkY5XHU2M0E1XHU2NzBEXHU1MkExXHUzMDAyXHU3Q0ZCXHU3RURGXHU5NzAwXHU4OTgxXHU2NTJGXHU2MzAxXHU1OTI3XHU4OUM0XHU2QTIxXHU3QTdBXHU5NUY0XHU2NTcwXHU2MzZFXHU1OTA0XHU3NDA2XHU1NDhDXHU1MjA2XHU2NzkwXHUzMDAyJyxcbiAgICBjbGFpbWFudDogJ1x1NTE5Q1x1NEUxQVx1NTkyN1x1NjU3MFx1NjM2RVx1NzgxNFx1N0E3Nlx1OTY2MicsXG4gICAgY2xhaW1hbnRJZDogJ0FESS0yMDI0LTAwNCcsXG4gICAgY2xhaW1UaW1lOiAnMjAyNC0wMi0xMCAwOToxNTowMCcsXG4gICAgZXN0aW1hdGVkQ29tcGxldGlvblRpbWU6ICcyMDI0LTA4LTEwJyxcbiAgICBvZmZlclByaWNlOiAnNjgwMDAwJyxcbiAgICBkZXZlbG9wbWVudFBsYW46ICdcdTU2REJcdTRFMkFcdTk2MzZcdTZCQjVcdTVGMDBcdTUzRDFcdUZGMUFcdTk3MDBcdTZDNDJcdThDMDNcdTc4MTRcdTMwMDFcdTY1NzBcdTYzNkVcdTY1NzRcdTU0MDhcdTMwMDFcdTUyOUZcdTgwRkRcdTVGMDBcdTUzRDFcdTMwMDFcdTdDRkJcdTdFREZcdTZENEJcdThCRDUnLFxuICAgIHRlY2huaWNhbFNvbHV0aW9uOiAnXHU1N0ZBXHU0RThFSGFkb29wXHU3NTFGXHU2MDAxXHU3Q0ZCXHU3RURGXHVGRjBDXHU5NkM2XHU2MjEwXHU2QzE0XHU4QzYxXHU1NDhDXHU1NzMwXHU3NDA2XHU0RkUxXHU2MDZGXHU3Q0ZCXHU3RURGXHVGRjBDXHU1MjREXHU3QUVGXHU5MUM3XHU3NTI4VnVlLmpzXHVGRjBDXHU2NTJGXHU2MzAxV2ViXHU1NDhDXHU3OUZCXHU1MkE4XHU3QUVGXHU4QkJGXHU5NUVFJyxcbiAgICBhdWRpdFN0YXR1czogJ1x1NUJBMVx1NjgzOFx1OTAxQVx1OEZDNycsXG4gICAgYXVkaXRUaW1lOiAnMjAyNC0wMi0xMSAxMToyMDo0NScsXG4gICAgYXVkaXRvcjogJ1x1NTQzNFx1NUJBMVx1NjgzOCcsXG4gICAgZXZpZGVuY2VUaW1lOiAnMjAyNC0wMi0xMSAxNDozMDowMCcsXG4gICAgZXZpZGVuY2VDaGFpbjogJ2NoYWluLWhhc2gtMDA3J1xuICB9LFxuICB7XG4gICAgZXZpZGVuY2VObzogJ1JDLTIwMjQtMDA1JyxcbiAgICByZXF1aXJlbWVudE5hbWU6ICdcdTY2N0FcdTYxNjdcdTY1NTlcdTgwQjJcdTY1NzBcdTYzNkVcdTVFNzNcdTUzRjAnLFxuICAgIHJlcXVpcmVtZW50Tm86ICdSUC0yMDI0LTAwNScsXG4gICAgcmVxdWlyZW1lbnRUeXBlOiAnXHU2NTU5XHU4MEIyXHU0RkUxXHU2MDZGXHU1MzE2JyxcbiAgICByZXF1aXJlbWVudFN0YXR1czogJ1x1NURGMlx1NTNENlx1NkQ4OCcsXG4gICAgcmVxdWlyZW1lbnRDb250ZW50OiAnXHU1RUZBXHU4QkJFXHU0RTAwXHU0RTJBXHU5NzYyXHU1NDExXHU1MTY4XHU1NkZEXHU2NTU5XHU4MEIyXHU3Q0ZCXHU3RURGXHU3Njg0XHU2NjdBXHU2MTY3XHU2NTU5XHU4MEIyXHU2NTcwXHU2MzZFXHU1RTczXHU1M0YwXHVGRjBDXHU2NTc0XHU1NDA4XHU2NTU5XHU4MEIyXHU4RDQ0XHU2RTkwXHUzMDAxXHU1QjY2XHU3NTFGXHU1QjY2XHU0RTYwXHU4ODRDXHU0RTNBXHU1NDhDXHU2NTU5XHU1QjY2XHU4RkM3XHU3QTBCXHU2NTcwXHU2MzZFXHVGRjBDXHU1QjlFXHU3M0IwXHU2NTU5XHU4MEIyXHU2NTU5XHU1QjY2XHU3Njg0XHU2NjdBXHU4MEZEXHU1MzE2XHU3QkExXHU3NDA2XHU1NDhDXHU1MUIzXHU3QjU2XHU2NTJGXHU2MzAxXHUzMDAyXHU1RTczXHU1M0YwXHU2ODM4XHU1RkMzXHU1MjlGXHU4MEZEXHU1MzA1XHU2MkVDXHVGRjFBXHU2NTU5XHU4MEIyXHU4RDQ0XHU2RTkwXHU3Njg0XHU3RURGXHU0RTAwXHU3QkExXHU3NDA2XHU1NDhDXHU2NjdBXHU4MEZEXHU2M0E4XHU4MzUwXHVGRjFCXHU1QjY2XHU3NTFGXHU1QjY2XHU0RTYwXHU4ODRDXHU0RTNBXHU3Njg0XHU4RkZEXHU4RTJBXHU1NDhDXHU1MjA2XHU2NzkwXHVGRjFCXHU2NTU5XHU1QjY2XHU4RkM3XHU3QTBCXHU2NTcwXHU2MzZFXHU3Njg0XHU5MUM3XHU5NkM2XHU1NDhDXHU1OTA0XHU3NDA2XHVGRjFCXHU0RTJBXHU2MDI3XHU1MzE2XHU1QjY2XHU0RTYwXHU4REVGXHU1Rjg0XHU3Njg0XHU3NTFGXHU2MjEwXHVGRjFCXHU2NTU5XHU4MEIyXHU4RDI4XHU5MUNGXHU4QkM0XHU0RjMwXHU1NDhDXHU1MjA2XHU2NzkwXHUzMDAyXHU3Q0ZCXHU3RURGXHU5NzAwXHU4OTgxXHU2NTJGXHU2MzAxXHU1MTY4XHU1NkZEXHU4MzAzXHU1NkY0XHU1MTg1XHU3Njg0XHU1OTFBXHU3RUE3XHU2NTU5XHU4MEIyXHU2NzNBXHU2Nzg0XHU2M0E1XHU1MTY1XHUzMDAyJyxcbiAgICBjbGFpbWFudDogJ1x1NjU1OVx1ODBCMlx1NEZFMVx1NjA2Rlx1NTMxNlx1NTE2Q1x1NTNGOCcsXG4gICAgY2xhaW1hbnRJZDogJ0VJQy0yMDI0LTAwNScsXG4gICAgY2xhaW1UaW1lOiAnMjAyNC0wMi0xNSAxMzo0NTowMCcsXG4gICAgZXN0aW1hdGVkQ29tcGxldGlvblRpbWU6ICcyMDI0LTA5LTIwJyxcbiAgICBvZmZlclByaWNlOiAnNTIwMDAwJyxcbiAgICBkZXZlbG9wbWVudFBsYW46ICdcdTU3RkFcdTRFOEVcdTY1NTlcdTgwQjJcdTg4NENcdTRFMUFcdTY4MDdcdTUxQzZcdTVGMDBcdTUzRDFcdUZGMENcdTUyMDZcdTZBMjFcdTU3NTdcdTVCOUVcdTczQjBcdUZGMENcdTkwMTBcdTZCNjVcdTk2QzZcdTYyMTAnLFxuICAgIHRlY2huaWNhbFNvbHV0aW9uOiAnXHU5MUM3XHU3NTI4XHU1RkFFXHU2NzBEXHU1MkExXHU2N0I2XHU2Nzg0XHVGRjBDXHU0RTkxXHU1MzlGXHU3NTFGXHU1RTk0XHU3NTI4XHVGRjBDXHU2NTJGXHU2MzAxXHU1OTFBXHU3OURGXHU2MjM3XHU2QTIxXHU1RjBGXHVGRjBDXHU2NTc0XHU1NDA4QUlcdTYzQThcdTgzNTBcdTVGMTVcdTY0Q0UnLFxuICAgIGF1ZGl0U3RhdHVzOiAnXHU1QkExXHU2ODM4XHU5MDFBXHU4RkM3JyxcbiAgICBhdWRpdFRpbWU6ICcyMDI0LTAyLTE2IDEwOjMwOjI2JyxcbiAgICBhdWRpdG9yOiAnXHU5MEQxXHU1QkExXHU2ODM4JyxcbiAgICBldmlkZW5jZVRpbWU6ICcyMDI0LTAyLTE2IDE1OjEwOjAwJyxcbiAgICBldmlkZW5jZUNoYWluOiAnY2hhaW4taGFzaC0wMDgnXG4gIH1cbl07XG5cbi8vIFx1NkEyMVx1NjJERlx1NjU3MFx1NjM2RVx1NzY3Qlx1OEJCMFx1NUI1OFx1OEJDMVx1NTIxN1x1ODg2OFxuZXhwb3J0IGNvbnN0IGRhdGFFdmlkZW5jZUxpc3Q6IERhdGFFdmlkZW5jZVtdID0gW1xuICB7XG4gICAgZXZpZGVuY2VObzogJ0RBVEEtMjAyNC0wMDAxJyxcbiAgICBldmlkZW5jZVRpbWU6ICcyMDI0LTAzLTEwIDE1OjMwOjQ1JyxcbiAgICBkYXRhTmFtZTogJ1x1NTdDRVx1NUUwMlx1NEVBNFx1OTAxQVx1NkQ0MVx1OTFDRlx1NjU3MFx1NjM2RVx1OTZDNicsXG4gICAgb3duZXJOYW1lOiAnXHU1MzE3XHU0RUFDXHU1RTAyXHU0RUE0XHU5MDFBXHU3QkExXHU3NDA2XHU1QzQwJyxcbiAgICBjcmVhdGVUaW1lOiAnMjAyNC0wMy0wOCAxMDoyMjoxOCcsXG4gICAgcmVnaXN0ZXJUeXBlOiAnXHU1MjFEXHU1OUNCXHU3NjdCXHU4QkIwJyxcbiAgICByZWdpc3RlclRpbWU6ICcyMDI0LTAzLTA5IDE0OjI1OjMzJyxcbiAgICBkYXRhRGVzY3JpcHRpb246ICdcdTUzMDVcdTU0MkJcdTUzMTdcdTRFQUNcdTVFMDJcdTRFM0JcdTg5ODFcdTkwNTNcdThERUZcdTc2ODRcdTRFQTRcdTkwMUFcdTZENDFcdTkxQ0ZcdTc2RDFcdTZENEJcdTY1NzBcdTYzNkVcdUZGMENcdTU0MkJcdThGNjZcdTZENDFcdTkxQ0ZcdTMwMDFcdTVFNzNcdTU3NDdcdThGNjZcdTkwMUZcdTdCNDlcdTYzMDdcdTY4MDcnLFxuICAgIG1hdGVyaWFsczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnXHU2NTcwXHU2MzZFXHU2ODM3XHU2NzJDXHU2NTg3XHU0RUY2JyxcbiAgICAgICAgdHlwZTogJ0NTVlx1NjU4N1x1NEVGNicsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9leGFtcGxlLmNvbS90cmFmZmljLXNhbXBsZS5jc3YnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHU4QkY0XHU2NjBFJyxcbiAgICAgICAgdHlwZTogJ1BERlx1NjU4N1x1Njg2MycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9leGFtcGxlLmNvbS90cmFmZmljLXN0cnVjdHVyZS5wZGYnXG4gICAgICB9XG4gICAgXSxcbiAgICBhdWRpdFN0YXR1czogJ1x1NUJBMVx1NjgzOFx1OTAxQVx1OEZDNycsXG4gICAgZGF0YVR5cGU6ICdcdTdFRDNcdTY3ODRcdTUzMTZcdTY1NzBcdTYzNkUnLFxuICAgIGRhdGFPcmlnaW46ICdcdTRFQTRcdTkwMUFcdTc2RDFcdTYzQTdcdTdDRkJcdTdFREZcdTkxQzdcdTk2QzYnLFxuICAgIHJlZ2lzdHJhbnQ6ICdcdTVGMjBcdTY2MEUnLFxuICAgIHNlY3VyaXR5TGV2ZWw6ICdcdTUxNkNcdTVGMDBcdTY1NzBcdTYzNkUnLFxuICAgIHN0b3JhZ2VMb2NhdGlvbjogJ1x1NTMxN1x1NEVBQ1x1NjU3MFx1NjM2RVx1NEUyRFx1NUZDMycsXG4gICAgZGF0YVNpemU6ICcxLjVUQicsXG4gICAgZm9ybWF0VHlwZTogJ0NTVicsXG4gICAgdXBkYXRlQ3ljbGU6ICdcdTZCQ0ZcdTY1RTVcdTY2RjRcdTY1QjAnXG4gIH0sXG4gIHtcbiAgICBldmlkZW5jZU5vOiAnREFUQS0yMDI0LTAwMDInLFxuICAgIGV2aWRlbmNlVGltZTogJzIwMjQtMDMtMTIgMDk6NDU6MjInLFxuICAgIGRhdGFOYW1lOiAnXHU1MzNCXHU3NTk3XHU1MDY1XHU1RUI3XHU2NTcwXHU2MzZFXHU5NkM2JyxcbiAgICBvd25lck5hbWU6ICdcdTRFMEFcdTZENzdcdTVFMDJcdTdCMkNcdTRFMDBcdTRFQkFcdTZDMTFcdTUzM0JcdTk2NjInLFxuICAgIGNyZWF0ZVRpbWU6ICcyMDI0LTAzLTEwIDA4OjE1OjM1JyxcbiAgICByZWdpc3RlclR5cGU6ICdcdTUyMURcdTU5Q0JcdTc2N0JcdThCQjAnLFxuICAgIHJlZ2lzdGVyVGltZTogJzIwMjQtMDMtMTEgMTY6MjA6MTgnLFxuICAgIGRhdGFEZXNjcmlwdGlvbjogJ1x1ODEzMVx1NjU0Rlx1NTQwRVx1NzY4NFx1OTVFOFx1OEJDQVx1NjBBM1x1ODAwNVx1NTdGQVx1Nzg0MFx1NTA2NVx1NUVCN1x1NjU3MFx1NjM2RVx1RkYwQ1x1NTMwNVx1NTQyQlx1NzUxRlx1NzQwNlx1NjMwN1x1NjgwN1x1NEY0Nlx1NEUwRFx1NTQyQlx1NEUyQVx1NEVCQVx1OEVBQlx1NEVGRFx1NEZFMVx1NjA2RicsXG4gICAgbWF0ZXJpYWxzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdcdTY1NzBcdTYzNkVcdTVCODlcdTUxNjhcdThCQzRcdTRGMzBcdTYyQTVcdTU0NEEnLFxuICAgICAgICB0eXBlOiAnUERGXHU2NTg3XHU2ODYzJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2V4YW1wbGUuY29tL2hlYWx0aC1zZWN1cml0eS5wZGYnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnXHU2NTcwXHU2MzZFXHU2ODNDXHU1RjBGXHU4QkY0XHU2NjBFJyxcbiAgICAgICAgdHlwZTogJ1dvcmRcdTY1ODdcdTY4NjMnLFxuICAgICAgICB1cmw6ICdodHRwOi8vZXhhbXBsZS5jb20vaGVhbHRoLWZvcm1hdC5kb2N4J1xuICAgICAgfVxuICAgIF0sXG4gICAgYXVkaXRTdGF0dXM6ICdcdTVCQTFcdTY4MzhcdTkwMUFcdThGQzcnLFxuICAgIGF1ZGl0UmVhc29uOiAnXHU2NTcwXHU2MzZFXHU1REYyXHU1QjhDXHU2MjEwXHU4MTMxXHU2NTRGXHU1OTA0XHU3NDA2XHVGRjBDXHU3QjI2XHU1NDA4XHU5NjkwXHU3OUMxXHU0RkREXHU2MkE0XHU4OTgxXHU2QzQyJyxcbiAgICBkYXRhVHlwZTogJ1x1N0VEM1x1Njc4NFx1NTMxNlx1NjU3MFx1NjM2RScsXG4gICAgZGF0YU9yaWdpbjogJ1x1NTMzQlx1OTY2Mlx1NEZFMVx1NjA2Rlx1N0NGQlx1N0VERicsXG4gICAgcmVnaXN0cmFudDogJ1x1Njc0RVx1NTIxQScsXG4gICAgc2VjdXJpdHlMZXZlbDogJ1x1NTE4NVx1OTBFOFx1NjU3MFx1NjM2RScsXG4gICAgc3RvcmFnZUxvY2F0aW9uOiAnXHU0RTBBXHU2RDc3XHU1MzNCXHU3NTk3XHU2NTcwXHU2MzZFXHU0RTJEXHU1RkMzJyxcbiAgICBkYXRhU2l6ZTogJzUwMEdCJyxcbiAgICBmb3JtYXRUeXBlOiAnSlNPTicsXG4gICAgdXBkYXRlQ3ljbGU6ICdcdTZCQ0ZcdTU0NjhcdTY2RjRcdTY1QjAnXG4gIH0sXG4gIHtcbiAgICBldmlkZW5jZU5vOiAnREFUQS0yMDI0LTAwMDMnLFxuICAgIGV2aWRlbmNlVGltZTogJzIwMjQtMDMtMTUgMTQ6MTg6MzYnLFxuICAgIGRhdGFOYW1lOiAnXHU3NTM1XHU1NTQ2XHU3NTI4XHU2MjM3XHU4ODRDXHU0RTNBXHU2NTcwXHU2MzZFJyxcbiAgICBvd25lck5hbWU6ICdcdTZERjFcdTU3MzNcdTRFOTFcdThEMkRcdTc5RDFcdTYyODBcdTY3MDlcdTk2NTBcdTUxNkNcdTUzRjgnLFxuICAgIGNyZWF0ZVRpbWU6ICcyMDI0LTAzLTEyIDExOjA1OjQyJyxcbiAgICByZWdpc3RlclR5cGU6ICdcdTUyMURcdTU5Q0JcdTc2N0JcdThCQjAnLFxuICAgIHJlZ2lzdGVyVGltZTogJzIwMjQtMDMtMTQgMTA6MzU6MTknLFxuICAgIGRhdGFEZXNjcmlwdGlvbjogJ1x1NzUyOFx1NjIzN1x1NTcyOFx1NzUzNVx1NTU0Nlx1NUU3M1x1NTNGMFx1NzY4NFx1NkQ0Rlx1ODlDOFx1MzAwMVx1NjUzNlx1ODVDRlx1MzAwMVx1OEQyRFx1NEU3MFx1N0I0OVx1ODg0Q1x1NEUzQVx1NjU3MFx1NjM2RVx1RkYwQ1x1NURGMlx1OEZEQlx1ODg0Q1x1NTNCQlx1NjgwN1x1OEJDNlx1NTMxNlx1NTkwNFx1NzQwNicsXG4gICAgbWF0ZXJpYWxzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdcdTY1NzBcdTYzNkVcdTY4MzdcdTY3MkMnLFxuICAgICAgICB0eXBlOiAnRXhjZWxcdTY1ODdcdTRFRjYnLFxuICAgICAgICB1cmw6ICdodHRwOi8vZXhhbXBsZS5jb20vZWNvbW1lcmNlLXNhbXBsZS54bHN4J1xuICAgICAgfVxuICAgIF0sXG4gICAgYXVkaXRTdGF0dXM6ICdcdTVCQTFcdTY4MzhcdTRFMERcdTkwMUFcdThGQzcnLFxuICAgIGF1ZGl0UmVhc29uOiAnXHU2NTcwXHU2MzZFXHU1M0JCXHU2ODA3XHU4QkM2XHU1MzE2XHU1OTA0XHU3NDA2XHU0RTBEXHU1QjhDXHU1MTY4XHVGRjBDXHU1QjU4XHU1NzI4XHU3NTI4XHU2MjM3XHU5NjkwXHU3OUMxXHU2Q0M0XHU5NzMyXHU5OENFXHU5NjY5JyxcbiAgICBkYXRhVHlwZTogJ1x1NTM0QVx1N0VEM1x1Njc4NFx1NTMxNlx1NjU3MFx1NjM2RScsXG4gICAgZGF0YU9yaWdpbjogJ1x1NzUzNVx1NTU0Nlx1NUU3M1x1NTNGMCcsXG4gICAgcmVnaXN0cmFudDogJ1x1NzM4Qlx1NzQzMycsXG4gICAgc2VjdXJpdHlMZXZlbDogJ1x1NEZERFx1NUJDNlx1NjU3MFx1NjM2RScsXG4gICAgc3RvcmFnZUxvY2F0aW9uOiAnXHU2REYxXHU1NzMzXHU2NTcwXHU2MzZFXHU0RTJEXHU1RkMzJyxcbiAgICBkYXRhU2l6ZTogJzJUQicsXG4gICAgZm9ybWF0VHlwZTogJ1BhcnF1ZXQnLFxuICAgIHVwZGF0ZUN5Y2xlOiAnXHU1QjlFXHU2NUY2XHU2NkY0XHU2NUIwJ1xuICB9LFxuICB7XG4gICAgZXZpZGVuY2VObzogJ0RBVEEtMjAyNC0wMDA0JyxcbiAgICBldmlkZW5jZVRpbWU6ICcyMDI0LTAzLTE4IDExOjMwOjI1JyxcbiAgICBkYXRhTmFtZTogJ1x1NkMxNFx1OEM2MVx1NzZEMVx1NkQ0Qlx1NjU3MFx1NjM2RScsXG4gICAgb3duZXJOYW1lOiAnXHU1NkZEXHU1QkI2XHU2QzE0XHU4QzYxXHU1QzQwJyxcbiAgICBjcmVhdGVUaW1lOiAnMjAyNC0wMy0xNiAwOToxMjo1NCcsXG4gICAgcmVnaXN0ZXJUeXBlOiAnXHU1MjFEXHU1OUNCXHU3NjdCXHU4QkIwJyxcbiAgICByZWdpc3RlclRpbWU6ICcyMDI0LTAzLTE3IDE1OjQwOjMzJyxcbiAgICBkYXRhRGVzY3JpcHRpb246ICdcdTUxNjhcdTU2RkRcdTU0MDRcdTU3MzBcdTUzM0FcdTZDMTRcdThDNjFcdTc2RDFcdTZENEJcdTdBRDlcdTc2ODRcdTZFMjlcdTVFQTZcdTMwMDFcdTZFN0ZcdTVFQTZcdTMwMDFcdTZDMTRcdTUzOEJcdTdCNDlcdTY1NzBcdTYzNkUnLFxuICAgIG1hdGVyaWFsczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnXHU2NTcwXHU2MzZFXHU2M0E1XHU1MTY1XHU4QkY0XHU2NjBFJyxcbiAgICAgICAgdHlwZTogJ1BERlx1NjU4N1x1Njg2MycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9leGFtcGxlLmNvbS93ZWF0aGVyLWFjY2Vzcy5wZGYnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnXHU2NTcwXHU2MzZFXHU2ODA3XHU1MUM2XHU2NTg3XHU2ODYzJyxcbiAgICAgICAgdHlwZTogJ1BERlx1NjU4N1x1Njg2MycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9leGFtcGxlLmNvbS93ZWF0aGVyLXN0YW5kYXJkLnBkZidcbiAgICAgIH1cbiAgICBdLFxuICAgIGF1ZGl0U3RhdHVzOiAnXHU1QkExXHU2ODM4XHU5MDFBXHU4RkM3JyxcbiAgICBkYXRhVHlwZTogJ1x1NjVGNlx1NUU4Rlx1NjU3MFx1NjM2RScsXG4gICAgZGF0YU9yaWdpbjogJ1x1NkMxNFx1OEM2MVx1NzZEMVx1NkQ0Qlx1N0FEOScsXG4gICAgcmVnaXN0cmFudDogJ1x1NTQ2OFx1NTA2NScsXG4gICAgc2VjdXJpdHlMZXZlbDogJ1x1NTE2Q1x1NUYwMFx1NjU3MFx1NjM2RScsXG4gICAgc3RvcmFnZUxvY2F0aW9uOiAnXHU1NkZEXHU1QkI2XHU2NTcwXHU2MzZFXHU0RTJEXHU1RkMzJyxcbiAgICBkYXRhU2l6ZTogJzVUQicsXG4gICAgZm9ybWF0VHlwZTogJ0hERjUnLFxuICAgIHVwZGF0ZUN5Y2xlOiAnXHU2QkNGXHU1QzBGXHU2NUY2XHU2NkY0XHU2NUIwJ1xuICB9LFxuICB7XG4gICAgZXZpZGVuY2VObzogJ0RBVEEtMjAyNC0wMDA1JyxcbiAgICBldmlkZW5jZVRpbWU6ICcyMDI0LTAzLTIwIDE2OjIyOjQ4JyxcbiAgICBkYXRhTmFtZTogJ1x1NEYwMVx1NEUxQVx1OEQyMlx1NTJBMVx1NjU3MFx1NjM2RScsXG4gICAgb3duZXJOYW1lOiAnXHU0RTJEXHU1NkZEXHU0RjAxXHU0RTFBXHU0RkUxXHU2MDZGXHU0RTJEXHU1RkMzJyxcbiAgICBjcmVhdGVUaW1lOiAnMjAyNC0wMy0xOCAxNDowNToyMicsXG4gICAgcmVnaXN0ZXJUeXBlOiAnXHU1M0Q4XHU2NkY0XHU3NjdCXHU4QkIwJyxcbiAgICByZWdpc3RlclRpbWU6ICcyMDI0LTAzLTE5IDExOjE1OjM2JyxcbiAgICBkYXRhRGVzY3JpcHRpb246ICdcdTRFMEFcdTVFMDJcdTUxNkNcdTUzRjhcdTUxNkNcdTVGMDBcdTc2ODRcdThEMjJcdTUyQTFcdTYyQTVcdTg4NjhcdTY1NzBcdTYzNkVcdUZGMENcdTUzMDVcdTU0MkJcdThENDRcdTRFQTdcdThEMUZcdTUwM0FcdTg4NjhcdTMwMDFcdTUyMjlcdTZEQTZcdTg4NjhcdTMwMDFcdTczQjBcdTkxRDFcdTZENDFcdTkxQ0ZcdTg4NjhcdTdCNDknLFxuICAgIG1hdGVyaWFsczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnXHU2NTcwXHU2MzZFXHU1M0Q4XHU2NkY0XHU4QkY0XHU2NjBFJyxcbiAgICAgICAgdHlwZTogJ1BERlx1NjU4N1x1Njg2MycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9leGFtcGxlLmNvbS9maW5hbmNlLWNoYW5nZS5wZGYnXG4gICAgICB9XG4gICAgXSxcbiAgICBhdWRpdFN0YXR1czogJ1x1NUJBMVx1NjgzOFx1OTAxQVx1OEZDNycsXG4gICAgZGF0YVR5cGU6ICdcdTdFRDNcdTY3ODRcdTUzMTZcdTY1NzBcdTYzNkUnLFxuICAgIGRhdGFPcmlnaW46ICdcdTUxNkNcdTVGMDBcdThEMjJcdTYyQTUnLFxuICAgIHJlZ2lzdHJhbnQ6ICdcdTUyMThcdTVGM0EnLFxuICAgIHNlY3VyaXR5TGV2ZWw6ICdcdTUxNkNcdTVGMDBcdTY1NzBcdTYzNkUnLFxuICAgIHN0b3JhZ2VMb2NhdGlvbjogJ1x1OTFEMVx1ODc4RFx1NjU3MFx1NjM2RVx1NEUyRFx1NUZDMycsXG4gICAgZGF0YVNpemU6ICc4MDBHQicsXG4gICAgZm9ybWF0VHlwZTogJ0V4Y2VsJyxcbiAgICB1cGRhdGVDeWNsZTogJ1x1NUI2M1x1NUVBNlx1NjZGNFx1NjVCMCdcbiAgfSxcbiAge1xuICAgIGV2aWRlbmNlTm86ICdEQVRBLTIwMjQtMDAwNicsXG4gICAgZXZpZGVuY2VUaW1lOiAnMjAyNC0wMy0yMiAxMDoxODozNScsXG4gICAgZGF0YU5hbWU6ICdcdTU3Q0VcdTVFMDJcdTc2RDFcdTYzQTdcdTVGNzFcdTUwQ0ZcdTY1NzBcdTYzNkUnLFxuICAgIG93bmVyTmFtZTogJ1x1NUU3Rlx1NURERVx1NUUwMlx1NTE2Q1x1NUI4OVx1NUM0MCcsXG4gICAgY3JlYXRlVGltZTogJzIwMjQtMDMtMjAgMDk6MzM6NDcnLFxuICAgIHJlZ2lzdGVyVHlwZTogJ1x1NTIxRFx1NTlDQlx1NzY3Qlx1OEJCMCcsXG4gICAgcmVnaXN0ZXJUaW1lOiAnMjAyNC0wMy0yMSAxNjo0MjoxNScsXG4gICAgZGF0YURlc2NyaXB0aW9uOiAnXHU1N0NFXHU1RTAyXHU0RTNCXHU4OTgxXHU4REVGXHU1M0UzXHU1NDhDXHU1MTZDXHU1MTcxXHU1MzNBXHU1N0RGXHU3Njg0XHU3NkQxXHU2M0E3XHU2NDQ0XHU1MENGXHU1OTM0XHU5MUM3XHU5NkM2XHU3Njg0XHU1RjcxXHU1MENGXHU2NTcwXHU2MzZFJyxcbiAgICBtYXRlcmlhbHM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1x1NjU3MFx1NjM2RVx1NEY3Rlx1NzUyOFx1NjM4OFx1Njc0M1x1NEU2NicsXG4gICAgICAgIHR5cGU6ICdQREZcdTY1ODdcdTY4NjMnLFxuICAgICAgICB1cmw6ICdodHRwOi8vZXhhbXBsZS5jb20vc3VydmVpbGxhbmNlLWF1dGgucGRmJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1x1NjU3MFx1NjM2RVx1NUI4OVx1NTE2OFx1N0JBMVx1NzQwNlx1ODlDNFx1NUI5QScsXG4gICAgICAgIHR5cGU6ICdXb3JkXHU2NTg3XHU2ODYzJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2V4YW1wbGUuY29tL3N1cnZlaWxsYW5jZS1zZWN1cml0eS5kb2N4J1xuICAgICAgfVxuICAgIF0sXG4gICAgYXVkaXRTdGF0dXM6ICdcdTVCQTFcdTY4MzhcdTkwMUFcdThGQzcnLFxuICAgIGRhdGFUeXBlOiAnXHU5NzVFXHU3RUQzXHU2Nzg0XHU1MzE2XHU2NTcwXHU2MzZFJyxcbiAgICBkYXRhT3JpZ2luOiAnXHU3NkQxXHU2M0E3XHU2NDQ0XHU1MENGXHU3Q0ZCXHU3RURGJyxcbiAgICByZWdpc3RyYW50OiAnXHU5NjQ4XHU2NjBFJyxcbiAgICBzZWN1cml0eUxldmVsOiAnXHU2NzNBXHU1QkM2XHU2NTcwXHU2MzZFJyxcbiAgICBzdG9yYWdlTG9jYXRpb246ICdcdTVFN0ZcdTVEREVcdTVCODlcdTUxNjhcdTY1NzBcdTYzNkVcdTRFMkRcdTVGQzMnLFxuICAgIGRhdGFTaXplOiAnMTBUQicsXG4gICAgZm9ybWF0VHlwZTogJ01QNC9KUEVHJyxcbiAgICB1cGRhdGVDeWNsZTogJ1x1NUI5RVx1NjVGNlx1NjZGNFx1NjVCMCdcbiAgfSxcbiAge1xuICAgIGV2aWRlbmNlTm86ICdEQVRBLTIwMjQtMDAwNycsXG4gICAgZXZpZGVuY2VUaW1lOiAnMjAyNC0wMy0yNSAxNTo0NToyMicsXG4gICAgZGF0YU5hbWU6ICdcdTUxOUNcdTRFQTdcdTU0QzFcdTRFRjdcdTY4M0NcdTY1NzBcdTYzNkUnLFxuICAgIG93bmVyTmFtZTogJ1x1NTE5Q1x1NEUxQVx1OTBFOFx1NEZFMVx1NjA2Rlx1NEUyRFx1NUZDMycsXG4gICAgY3JlYXRlVGltZTogJzIwMjQtMDMtMjMgMTE6Mjg6MzYnLFxuICAgIHJlZ2lzdGVyVHlwZTogJ1x1NTIxRFx1NTlDQlx1NzY3Qlx1OEJCMCcsXG4gICAgcmVnaXN0ZXJUaW1lOiAnMjAyNC0wMy0yNCAwOTozMDo0MicsXG4gICAgZGF0YURlc2NyaXB0aW9uOiAnXHU1MTY4XHU1NkZEXHU1NDA0XHU1MTlDXHU4RDM4XHU1RTAyXHU1NzNBXHU0RTNCXHU4OTgxXHU1MTlDXHU0RUE3XHU1NEMxXHU3Njg0XHU2NUU1XHU1NzQ3XHU0RUY3XHU2ODNDXHU2NTcwXHU2MzZFJyxcbiAgICBtYXRlcmlhbHM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1x1NjU3MFx1NjM2RVx1OTFDN1x1OTZDNlx1NjVCOVx1NkNENVx1OEJGNFx1NjYwRScsXG4gICAgICAgIHR5cGU6ICdQREZcdTY1ODdcdTY4NjMnLFxuICAgICAgICB1cmw6ICdodHRwOi8vZXhhbXBsZS5jb20vYWdyaS1jb2xsZWN0aW9uLnBkZidcbiAgICAgIH1cbiAgICBdLFxuICAgIGF1ZGl0U3RhdHVzOiAnXHU1QkExXHU2ODM4XHU5MDFBXHU4RkM3JyxcbiAgICBkYXRhVHlwZTogJ1x1N0VEM1x1Njc4NFx1NTMxNlx1NjU3MFx1NjM2RScsXG4gICAgZGF0YU9yaWdpbjogJ1x1NUUwMlx1NTczQVx1OEMwM1x1NzgxNCcsXG4gICAgcmVnaXN0cmFudDogJ1x1OEQ3NVx1N0VBMicsXG4gICAgc2VjdXJpdHlMZXZlbDogJ1x1NTE2Q1x1NUYwMFx1NjU3MFx1NjM2RScsXG4gICAgc3RvcmFnZUxvY2F0aW9uOiAnXHU1MTlDXHU0RTFBXHU2NTcwXHU2MzZFXHU0RTJEXHU1RkMzJyxcbiAgICBkYXRhU2l6ZTogJzIwMEdCJyxcbiAgICBmb3JtYXRUeXBlOiAnQ1NWJyxcbiAgICB1cGRhdGVDeWNsZTogJ1x1NkJDRlx1NjVFNVx1NjZGNFx1NjVCMCdcbiAgfSxcbiAge1xuICAgIGV2aWRlbmNlTm86ICdEQVRBLTIwMjQtMDAwOCcsXG4gICAgZXZpZGVuY2VUaW1lOiAnMjAyNC0wMy0yOCAxNDozNToxMicsXG4gICAgZGF0YU5hbWU6ICdcdTY2N0FcdTYxNjdcdTY1NTlcdTgwQjJcdTVCNjZcdTc1MUZcdTg4NENcdTRFM0FcdTY1NzBcdTYzNkUnLFxuICAgIG93bmVyTmFtZTogJ1x1NTMxN1x1NEVBQ1x1NjY3QVx1NjE2N1x1NjU1OVx1ODBCMlx1NzgxNFx1N0E3Nlx1OTY2MicsXG4gICAgY3JlYXRlVGltZTogJzIwMjQtMDMtMjUgMTA6MTU6MjgnLFxuICAgIHJlZ2lzdGVyVHlwZTogJ1x1NTIxRFx1NTlDQlx1NzY3Qlx1OEJCMCcsXG4gICAgcmVnaXN0ZXJUaW1lOiAnMjAyNC0wMy0yNiAxNjo0MDozMCcsXG4gICAgZGF0YURlc2NyaXB0aW9uOiAnXHU5MDFBXHU4RkM3XHU2NjdBXHU4MEZEXHU2NTU5XHU1QkE0XHU5MUM3XHU5NkM2XHU3Njg0XHU1QjY2XHU3NTFGXHU1QjY2XHU0RTYwXHU4ODRDXHU0RTNBXHU2NTcwXHU2MzZFXHVGRjBDXHU1MzA1XHU2MkVDXHU4QkZFXHU1ODAyXHU1M0MyXHU0RTBFXHU1RUE2XHUzMDAxXHU0RTkyXHU1MkE4XHU5ODkxXHU3Mzg3XHU3QjQ5XHU2MzA3XHU2ODA3JyxcbiAgICBtYXRlcmlhbHM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1x1NjU3MFx1NjM2RVx1OTFDN1x1OTZDNlx1NjVCOVx1Njg0OCcsXG4gICAgICAgIHR5cGU6ICdQREZcdTY1ODdcdTY4NjMnLFxuICAgICAgICB1cmw6ICdodHRwOi8vZXhhbXBsZS5jb20vZWR1Y2F0aW9uLWNvbGxlY3Rpb24ucGRmJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1x1NjU3MFx1NjM2RVx1NUI4OVx1NTE2OFx1OEJDNFx1NEYzMFx1NjJBNVx1NTQ0QScsXG4gICAgICAgIHR5cGU6ICdQREZcdTY1ODdcdTY4NjMnLFxuICAgICAgICB1cmw6ICdodHRwOi8vZXhhbXBsZS5jb20vZWR1Y2F0aW9uLXNlY3VyaXR5LnBkZidcbiAgICAgIH1cbiAgICBdLFxuICAgIGF1ZGl0U3RhdHVzOiAnXHU1QkExXHU2ODM4XHU5MDFBXHU4RkM3JyxcbiAgICBkYXRhVHlwZTogJ1x1N0VEM1x1Njc4NFx1NTMxNlx1NjU3MFx1NjM2RScsXG4gICAgZGF0YU9yaWdpbjogJ1x1NjY3QVx1ODBGRFx1NjU1OVx1NUJBNFx1N0NGQlx1N0VERicsXG4gICAgcmVnaXN0cmFudDogJ1x1OTRCMVx1NjYwRScsXG4gICAgc2VjdXJpdHlMZXZlbDogJ1x1NTE4NVx1OTBFOFx1NjU3MFx1NjM2RScsXG4gICAgc3RvcmFnZUxvY2F0aW9uOiAnXHU2NTU5XHU4MEIyXHU0RTkxXHU2NTcwXHU2MzZFXHU0RTJEXHU1RkMzJyxcbiAgICBkYXRhU2l6ZTogJzEuMlRCJyxcbiAgICBmb3JtYXRUeXBlOiAnSlNPTicsXG4gICAgdXBkYXRlQ3ljbGU6ICdcdTZCQ0ZcdTY1RTVcdTY2RjRcdTY1QjAnXG4gIH0sXG4gIHtcbiAgICBldmlkZW5jZU5vOiAnREFUQS0yMDI0LTAwMDknLFxuICAgIGV2aWRlbmNlVGltZTogJzIwMjQtMDMtMzAgMDk6MjU6NDgnLFxuICAgIGRhdGFOYW1lOiAnXHU2NjdBXHU4MEZEXHU1QkI2XHU1QzQ1XHU3NTI4XHU2MjM3XHU4ODRDXHU0RTNBXHU2NTcwXHU2MzZFJyxcbiAgICBvd25lck5hbWU6ICdcdTY2N0FcdTYxNjdcdTc1MUZcdTZEM0JcdTc5RDFcdTYyODBcdTY3MDlcdTk2NTBcdTUxNkNcdTUzRjgnLFxuICAgIGNyZWF0ZVRpbWU6ICcyMDI0LTAzLTI4IDEzOjEwOjIyJyxcbiAgICByZWdpc3RlclR5cGU6ICdcdTUyMURcdTU5Q0JcdTc2N0JcdThCQjAnLFxuICAgIHJlZ2lzdGVyVGltZTogJzIwMjQtMDMtMjkgMTY6MzA6MTUnLFxuICAgIGRhdGFEZXNjcmlwdGlvbjogJ1x1NjY3QVx1ODBGRFx1NUJCNlx1NUM0NVx1OEJCRVx1NTkwN1x1OTFDN1x1OTZDNlx1NzY4NFx1NzUyOFx1NjIzN1x1NzUxRlx1NkQzQlx1NEU2MFx1NjBFRlx1NjU3MFx1NjM2RVx1RkYwQ1x1NURGMlx1OEZEQlx1ODg0Q1x1NTMzRlx1NTQwRFx1NTMxNlx1NTkwNFx1NzQwNicsXG4gICAgbWF0ZXJpYWxzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdcdTY1NzBcdTYzNkVcdTk2OTBcdTc5QzFcdTRGRERcdTYyQTRcdTY1QjlcdTY4NDgnLFxuICAgICAgICB0eXBlOiAnUERGXHU2NTg3XHU2ODYzJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2V4YW1wbGUuY29tL3NtYXJ0LWhvbWUtcHJpdmFjeS5wZGYnXG4gICAgICB9XG4gICAgXSxcbiAgICBhdWRpdFN0YXR1czogJ1x1NUJBMVx1NjgzOFx1NEUwRFx1OTAxQVx1OEZDNycsXG4gICAgYXVkaXRSZWFzb246ICdcdTY1NzBcdTYzNkVcdTUzM0ZcdTU0MERcdTUzMTZcdTU5MDRcdTc0MDZcdTRFMERcdThEQjNcdUZGMENcdTVFRkFcdThCQUVcdThGREJcdTRFMDBcdTZCNjVcdTUyQTBcdTVGM0FcdTk2OTBcdTc5QzFcdTRGRERcdTYyQTRcdTYzQUFcdTY1QkQnLFxuICAgIGRhdGFUeXBlOiAnXHU1MzRBXHU3RUQzXHU2Nzg0XHU1MzE2XHU2NTcwXHU2MzZFJyxcbiAgICBkYXRhT3JpZ2luOiAnXHU2NjdBXHU4MEZEXHU1QkI2XHU1QzQ1XHU4QkJFXHU1OTA3JyxcbiAgICByZWdpc3RyYW50OiAnXHU1QjU5XHU0RUFFJyxcbiAgICBzZWN1cml0eUxldmVsOiAnXHU0RkREXHU1QkM2XHU2NTcwXHU2MzZFJyxcbiAgICBzdG9yYWdlTG9jYXRpb246ICdcdTZERjFcdTU3MzNcdTY2N0FcdTgwRkRcdTRFOTFcdTRFMkRcdTVGQzMnLFxuICAgIGRhdGFTaXplOiAnNzUwR0InLFxuICAgIGZvcm1hdFR5cGU6ICdKU09OJyxcbiAgICB1cGRhdGVDeWNsZTogJ1x1NUI5RVx1NjVGNlx1NjZGNFx1NjVCMCdcbiAgfSxcbiAge1xuICAgIGV2aWRlbmNlTm86ICdEQVRBLTIwMjQtMDAxMCcsXG4gICAgZXZpZGVuY2VUaW1lOiAnMjAyNC0wNC0wMiAxNToyMjozNicsXG4gICAgZGF0YU5hbWU6ICdcdTczQUZcdTU4ODNcdTc2RDFcdTZENEJcdTY1NzBcdTYzNkVcdTk2QzYnLFxuICAgIG93bmVyTmFtZTogJ1x1NTZGRFx1NUJCNlx1NzNBRlx1NTg4M1x1NEZERFx1NjJBNFx1OTBFOCcsXG4gICAgY3JlYXRlVGltZTogJzIwMjQtMDMtMzAgMTA6MTU6MjUnLFxuICAgIHJlZ2lzdGVyVHlwZTogJ1x1NTIxRFx1NTlDQlx1NzY3Qlx1OEJCMCcsXG4gICAgcmVnaXN0ZXJUaW1lOiAnMjAyNC0wNC0wMSAxNDoyMDoxOCcsXG4gICAgZGF0YURlc2NyaXB0aW9uOiAnXHU1MTY4XHU1NkZEXHU1NDA0XHU1NzMwXHU3M0FGXHU1ODgzXHU3NkQxXHU2RDRCXHU3QUQ5XHU5MUM3XHU5NkM2XHU3Njg0XHU3QTdBXHU2QzE0XHU4RDI4XHU5MUNGXHUzMDAxXHU2QzM0XHU4RDI4XHUzMDAxXHU1NjZBXHU1OEYwXHU3QjQ5XHU3M0FGXHU1ODgzXHU2NTcwXHU2MzZFJyxcbiAgICBtYXRlcmlhbHM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1x1NjU3MFx1NjM2RVx1OEQyOFx1OTFDRlx1NjJBNVx1NTQ0QScsXG4gICAgICAgIHR5cGU6ICdQREZcdTY1ODdcdTY4NjMnLFxuICAgICAgICB1cmw6ICdodHRwOi8vZXhhbXBsZS5jb20vZW52aXJvbm1lbnQtcXVhbGl0eS5wZGYnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnXHU3NkQxXHU2RDRCXHU3MEI5XHU1MjA2XHU1RTAzXHU4QkY0XHU2NjBFJyxcbiAgICAgICAgdHlwZTogJ0V4Y2VsXHU2NTg3XHU0RUY2JyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2V4YW1wbGUuY29tL21vbml0b3ItcG9pbnRzLnhsc3gnXG4gICAgICB9XG4gICAgXSxcbiAgICBhdWRpdFN0YXR1czogJ1x1NUJBMVx1NjgzOFx1OTAxQVx1OEZDNycsXG4gICAgZGF0YVR5cGU6ICdcdTY1RjZcdTVFOEZcdTY1NzBcdTYzNkUnLFxuICAgIGRhdGFPcmlnaW46ICdcdTczQUZcdTU4ODNcdTc2RDFcdTZENEJcdTdBRDknLFxuICAgIHJlZ2lzdHJhbnQ6ICdcdTU0MzRcdTUxOUInLFxuICAgIHNlY3VyaXR5TGV2ZWw6ICdcdTUxNkNcdTVGMDBcdTY1NzBcdTYzNkUnLFxuICAgIHN0b3JhZ2VMb2NhdGlvbjogJ1x1NTZGRFx1NUJCNlx1NzNBRlx1NTg4M1x1NjU3MFx1NjM2RVx1NEUyRFx1NUZDMycsXG4gICAgZGF0YVNpemU6ICczLjVUQicsXG4gICAgZm9ybWF0VHlwZTogJ0NTVi9QYXJxdWV0JyxcbiAgICB1cGRhdGVDeWNsZTogJ1x1NkJDRlx1NUMwRlx1NjVGNlx1NjZGNFx1NjVCMCdcbiAgfSxcbiAge1xuICAgIGV2aWRlbmNlTm86ICdEQVRBLTIwMjQtMDAxMScsXG4gICAgZXZpZGVuY2VUaW1lOiAnMjAyNC0wNC0wNSAxMTo0NTozMCcsXG4gICAgZGF0YU5hbWU6ICdcdTU3Q0VcdTVFMDJcdTUxNkNcdTUxNzFcdTRFQTRcdTkwMUFcdThGRDBcdTg0MjVcdTY1NzBcdTYzNkUnLFxuICAgIG93bmVyTmFtZTogJ1x1NEUwQVx1NkQ3N1x1NUUwMlx1NEVBNFx1OTAxQVx1NTlENFx1NTQ1OFx1NEYxQScsXG4gICAgY3JlYXRlVGltZTogJzIwMjQtMDQtMDIgMDk6MTA6MTUnLFxuICAgIHJlZ2lzdGVyVHlwZTogJ1x1NTIxRFx1NTlDQlx1NzY3Qlx1OEJCMCcsXG4gICAgcmVnaXN0ZXJUaW1lOiAnMjAyNC0wNC0wMyAxNjozMDo0MicsXG4gICAgZGF0YURlc2NyaXB0aW9uOiAnXHU0RTBBXHU2RDc3XHU1RTAyXHU1MTZDXHU0RUE0XHUzMDAxXHU1NzMwXHU5NEMxXHU3QjQ5XHU1MTZDXHU1MTcxXHU0RUE0XHU5MDFBXHU1REU1XHU1MTc3XHU3Njg0XHU4RkQwXHU4NDI1XHU2NTcwXHU2MzZFXHVGRjBDXHU1MzA1XHU2MkVDXHU1QkEyXHU2RDQxXHU5MUNGXHUzMDAxXHU4RkQwXHU4ODRDXHU3MkI2XHU2MDAxXHU3QjQ5JyxcbiAgICBtYXRlcmlhbHM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1x1NjU3MFx1NjM2RVx1OTFDN1x1OTZDNlx1NjVCOVx1Njg0OCcsXG4gICAgICAgIHR5cGU6ICdQREZcdTY1ODdcdTY4NjMnLFxuICAgICAgICB1cmw6ICdodHRwOi8vZXhhbXBsZS5jb20vcHVibGljLXRyYW5zaXQtY29sbGVjdGlvbi5wZGYnXG4gICAgICB9XG4gICAgXSxcbiAgICBhdWRpdFN0YXR1czogJ1x1NUJBMVx1NjgzOFx1OTAxQVx1OEZDNycsXG4gICAgZGF0YVR5cGU6ICdcdTdFRDNcdTY3ODRcdTUzMTZcdTY1NzBcdTYzNkUnLFxuICAgIGRhdGFPcmlnaW46ICdcdTRFQTRcdTkwMUFcdTRFMDBcdTUzNjFcdTkwMUFcdTdDRkJcdTdFREZcdTMwMDFcdThGNjZcdThGODZcdTdCQTFcdTc0MDZcdTdDRkJcdTdFREYnLFxuICAgIHJlZ2lzdHJhbnQ6ICdcdTkwRDFcdTZEOUInLFxuICAgIHNlY3VyaXR5TGV2ZWw6ICdcdTUxODVcdTkwRThcdTY1NzBcdTYzNkUnLFxuICAgIHN0b3JhZ2VMb2NhdGlvbjogJ1x1NEUwQVx1NkQ3N1x1NEVBNFx1OTAxQVx1NjU3MFx1NjM2RVx1NEUyRFx1NUZDMycsXG4gICAgZGF0YVNpemU6ICcyLjNUQicsXG4gICAgZm9ybWF0VHlwZTogJ0pTT04vUGFycXVldCcsXG4gICAgdXBkYXRlQ3ljbGU6ICdcdTZCQ0ZcdTY1RTVcdTY2RjRcdTY1QjAnXG4gIH0sXG4gIHtcbiAgICBldmlkZW5jZU5vOiAnREFUQS0yMDI0LTAwMTInLFxuICAgIGV2aWRlbmNlVGltZTogJzIwMjQtMDQtMDggMTY6NDA6MjInLFxuICAgIGRhdGFOYW1lOiAnXHU1MjM2XHU5MDIwXHU0RTFBXHU4QkJFXHU1OTA3XHU4RkQwXHU4ODRDXHU2NTcwXHU2MzZFJyxcbiAgICBvd25lck5hbWU6ICdcdTZDNUZcdTgyQ0ZcdTVERTVcdTRFMUFcdTY1NzBcdTVCNTdcdTUzMTZcdTc4MTRcdTdBNzZcdTk2NjInLFxuICAgIGNyZWF0ZVRpbWU6ICcyMDI0LTA0LTA1IDEzOjE1OjM2JyxcbiAgICByZWdpc3RlclR5cGU6ICdcdTUyMURcdTU5Q0JcdTc2N0JcdThCQjAnLFxuICAgIHJlZ2lzdGVyVGltZTogJzIwMjQtMDQtMDYgMTA6MjU6MTgnLFxuICAgIGRhdGFEZXNjcmlwdGlvbjogJ1x1NTIzNlx1OTAyMFx1NEUxQVx1NEYwMVx1NEUxQVx1NjY3QVx1ODBGRFx1OEJCRVx1NTkwN1x1NzY4NFx1OEZEMFx1ODg0Q1x1NzJCNlx1NjAwMVx1MzAwMVx1ODBGRFx1ODAxN1x1MzAwMVx1NEVBN1x1OTFDRlx1N0I0OVx1NjU3MFx1NjM2RScsXG4gICAgbWF0ZXJpYWxzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdcdTY1NzBcdTYzNkVcdTkxQzdcdTk2QzZcdTY1QjlcdTY4NDgnLFxuICAgICAgICB0eXBlOiAnUERGXHU2NTg3XHU2ODYzJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2V4YW1wbGUuY29tL21hbnVmYWN0dXJlLWNvbGxlY3Rpb24ucGRmJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1x1NjU3MFx1NjM2RVx1NUI4OVx1NTE2OFx1OEJDNFx1NEYzMFx1NjJBNVx1NTQ0QScsXG4gICAgICAgIHR5cGU6ICdXb3JkXHU2NTg3XHU2ODYzJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2V4YW1wbGUuY29tL21hbnVmYWN0dXJlLXNlY3VyaXR5LmRvY3gnXG4gICAgICB9XG4gICAgXSxcbiAgICBhdWRpdFN0YXR1czogJ1x1NUJBMVx1NjgzOFx1OTAxQVx1OEZDNycsXG4gICAgZGF0YVR5cGU6ICdcdTY1RjZcdTVFOEZcdTY1NzBcdTYzNkUnLFxuICAgIGRhdGFPcmlnaW46ICdcdTVERTVcdTRFMUFcdTcyNjlcdTgwNTRcdTdGNTFcdThCQkVcdTU5MDcnLFxuICAgIHJlZ2lzdHJhbnQ6ICdcdTlBNkNcdTY2NTMnLFxuICAgIHNlY3VyaXR5TGV2ZWw6ICdcdTRGRERcdTVCQzZcdTY1NzBcdTYzNkUnLFxuICAgIHN0b3JhZ2VMb2NhdGlvbjogJ1x1ODJDRlx1NURERVx1NURFNVx1NEUxQVx1NEU5MVx1NUU3M1x1NTNGMCcsXG4gICAgZGF0YVNpemU6ICc0LjhUQicsXG4gICAgZm9ybWF0VHlwZTogJ1BhcnF1ZXQvT1JDJyxcbiAgICB1cGRhdGVDeWNsZTogJ1x1NUI5RVx1NjVGNlx1NjZGNFx1NjVCMCdcbiAgfSxcbiAge1xuICAgIGV2aWRlbmNlTm86ICdEQVRBLTIwMjQtMDAxMycsXG4gICAgZXZpZGVuY2VUaW1lOiAnMjAyNC0wNC0xMCAwOTozNToxNScsXG4gICAgZGF0YU5hbWU6ICdcdTc1MzVcdTUyOUJcdTgwRkRcdTZFOTBcdTZEODhcdTgwMTdcdTY1NzBcdTYzNkUnLFxuICAgIG93bmVyTmFtZTogJ1x1NTZGRFx1NUJCNlx1NzUzNVx1N0Y1MVx1NjcwOVx1OTY1MFx1NTE2Q1x1NTNGOCcsXG4gICAgY3JlYXRlVGltZTogJzIwMjQtMDQtMDcgMTQ6MjA6MjgnLFxuICAgIHJlZ2lzdGVyVHlwZTogJ1x1NTNEOFx1NjZGNFx1NzY3Qlx1OEJCMCcsXG4gICAgcmVnaXN0ZXJUaW1lOiAnMjAyNC0wNC0wOSAxMToxNTozNicsXG4gICAgZGF0YURlc2NyaXB0aW9uOiAnXHU1MTY4XHU1NkZEXHU1NDA0XHU1NzMwXHU1MzNBXHU3NTM1XHU1MjlCXHU4MEZEXHU2RTkwXHU2RDg4XHU4MDE3XHU2NTcwXHU2MzZFXHVGRjBDXHU1MzA1XHU2MkVDXHU1REU1XHU0RTFBXHUzMDAxXHU1NTQ2XHU0RTFBXHUzMDAxXHU1QzQ1XHU2QzExXHU3NTI4XHU3NTM1XHU5MUNGXHU3QjQ5XHU1MjA2XHU3QzdCXHU3RURGXHU4QkExJyxcbiAgICBtYXRlcmlhbHM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1x1NjU3MFx1NjM2RVx1NTNEOFx1NjZGNFx1OEJGNFx1NjYwRScsXG4gICAgICAgIHR5cGU6ICdQREZcdTY1ODdcdTY4NjMnLFxuICAgICAgICB1cmw6ICdodHRwOi8vZXhhbXBsZS5jb20vcG93ZXItY2hhbmdlLnBkZidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcdTY1ODdcdTY4NjMnLFxuICAgICAgICB0eXBlOiAnV29yZFx1NjU4N1x1Njg2MycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9leGFtcGxlLmNvbS9wb3dlci1zdHJ1Y3R1cmUuZG9jeCdcbiAgICAgIH1cbiAgICBdLFxuICAgIGF1ZGl0U3RhdHVzOiAnXHU1QkExXHU2ODM4XHU5MDFBXHU4RkM3JyxcbiAgICBkYXRhVHlwZTogJ1x1N0VEM1x1Njc4NFx1NTMxNlx1NjU3MFx1NjM2RScsXG4gICAgZGF0YU9yaWdpbjogJ1x1NzUzNVx1N0Y1MVx1NzZEMVx1NkQ0Qlx1N0NGQlx1N0VERicsXG4gICAgcmVnaXN0cmFudDogJ1x1Njc0RVx1OEZEQicsXG4gICAgc2VjdXJpdHlMZXZlbDogJ1x1NTE4NVx1OTBFOFx1NjU3MFx1NjM2RScsXG4gICAgc3RvcmFnZUxvY2F0aW9uOiAnXHU1NkZEXHU1QkI2XHU3NTM1XHU3RjUxXHU2NTcwXHU2MzZFXHU0RTJEXHU1RkMzJyxcbiAgICBkYXRhU2l6ZTogJzMuMlRCJyxcbiAgICBmb3JtYXRUeXBlOiAnQ1NWL1BhcnF1ZXQnLFxuICAgIHVwZGF0ZUN5Y2xlOiAnXHU2QkNGXHU1QzBGXHU2NUY2XHU2NkY0XHU2NUIwJ1xuICB9LFxuICB7XG4gICAgZXZpZGVuY2VObzogJ0RBVEEtMjAyNC0wMDE0JyxcbiAgICBldmlkZW5jZVRpbWU6ICcyMDI0LTA0LTEyIDE0OjI4OjMzJyxcbiAgICBkYXRhTmFtZTogJ1x1NTE5Q1x1NEUxQVx1NzUxRlx1NEVBN1x1NzZEMVx1NkQ0Qlx1NjU3MFx1NjM2RScsXG4gICAgb3duZXJOYW1lOiAnXHU0RTJEXHU1NkZEXHU1MTlDXHU0RTFBXHU3OUQxXHU1QjY2XHU5NjYyJyxcbiAgICBjcmVhdGVUaW1lOiAnMjAyNC0wNC0xMCAwOTozMDoxNScsXG4gICAgcmVnaXN0ZXJUeXBlOiAnXHU1MjFEXHU1OUNCXHU3NjdCXHU4QkIwJyxcbiAgICByZWdpc3RlclRpbWU6ICcyMDI0LTA0LTExIDE2OjQ1OjIwJyxcbiAgICBkYXRhRGVzY3JpcHRpb246ICdcdTUxNjhcdTU2RkRcdTUxOUNcdTRFMUFcdTc1MUZcdTRFQTdcdTYwQzVcdTUxQjVcdTc2RDFcdTZENEJcdTY1NzBcdTYzNkVcdUZGMENcdTUzMDVcdTYyRUNcdTRGNUNcdTcyNjlcdTc1MUZcdTk1N0ZcdTcyQjZcdTYwMDFcdTMwMDFcdTU3MUZcdTU4RTRcdTZFN0ZcdTVFQTZcdTMwMDFcdTZDMTRcdThDNjFcdTY3NjFcdTRFRjZcdTdCNDknLFxuICAgIG1hdGVyaWFsczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnXHU2NTcwXHU2MzZFXHU5MUM3XHU5NkM2XHU3Q0ZCXHU3RURGXHU4QkY0XHU2NjBFJyxcbiAgICAgICAgdHlwZTogJ1BERlx1NjU4N1x1Njg2MycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9leGFtcGxlLmNvbS9hZ3JpY3VsdHVyZS1zeXN0ZW0ucGRmJ1xuICAgICAgfVxuICAgIF0sXG4gICAgYXVkaXRTdGF0dXM6ICdcdTVCQTFcdTY4MzhcdTkwMUFcdThGQzcnLFxuICAgIGRhdGFUeXBlOiAnXHU2REY3XHU1NDA4XHU2NTcwXHU2MzZFJyxcbiAgICBkYXRhT3JpZ2luOiAnXHU1MTlDXHU0RTFBXHU3MjY5XHU4MDU0XHU3RjUxXHU3Q0ZCXHU3RURGJyxcbiAgICByZWdpc3RyYW50OiAnXHU1RjIwXHU1MzRFJyxcbiAgICBzZWN1cml0eUxldmVsOiAnXHU1MTg1XHU5MEU4XHU2NTcwXHU2MzZFJyxcbiAgICBzdG9yYWdlTG9jYXRpb246ICdcdTUxOUNcdTRFMUFcdTc5RDFcdTVCNjZcdTk2NjJcdTY1NzBcdTYzNkVcdTRFMkRcdTVGQzMnLFxuICAgIGRhdGFTaXplOiAnMi44VEInLFxuICAgIGZvcm1hdFR5cGU6ICdKU09OL0NTVicsXG4gICAgdXBkYXRlQ3ljbGU6ICdcdTZCQ0ZcdTY1RTVcdTY2RjRcdTY1QjAnXG4gIH0sXG4gIHtcbiAgICBldmlkZW5jZU5vOiAnREFUQS0yMDI0LTAwMTUnLFxuICAgIGV2aWRlbmNlVGltZTogJzIwMjQtMDQtMTUgMTE6MzA6NDUnLFxuICAgIGRhdGFOYW1lOiAnXHU3NUFCXHU2MEM1XHU3NkQxXHU2RDRCXHU2NTcwXHU2MzZFJyxcbiAgICBvd25lck5hbWU6ICdcdTU2RkRcdTVCQjZcdTUzNkJcdTc1MUZcdTUwNjVcdTVFQjdcdTU5RDRcdTU0NThcdTRGMUEnLFxuICAgIGNyZWF0ZVRpbWU6ICcyMDI0LTA0LTEyIDE2OjIwOjMzJyxcbiAgICByZWdpc3RlclR5cGU6ICdcdTUzRDhcdTY2RjRcdTc2N0JcdThCQjAnLFxuICAgIHJlZ2lzdGVyVGltZTogJzIwMjQtMDQtMTQgMTA6MTU6MjgnLFxuICAgIGRhdGFEZXNjcmlwdGlvbjogJ1x1NTE2OFx1NTZGRFx1NzVBQlx1NjBDNVx1NzZEMVx1NkQ0Qlx1NjU3MFx1NjM2RVx1RkYwQ1x1NTMwNVx1NjJFQ1x1NEYyMFx1NjdEM1x1NzVDNVx1NTNEMVx1NzVDNVx1NzM4N1x1MzAwMVx1NTMzQVx1NTdERlx1NTIwNlx1NUUwM1x1N0I0OVx1RkYwQ1x1NURGMlx1OEZEQlx1ODg0Q1x1ODEzMVx1NjU0Rlx1NTkwNFx1NzQwNicsXG4gICAgbWF0ZXJpYWxzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdcdTY1NzBcdTYzNkVcdTUzRDhcdTY2RjRcdTc1MzNcdThCRjcnLFxuICAgICAgICB0eXBlOiAnUERGXHU2NTg3XHU2ODYzJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2V4YW1wbGUuY29tL2hlYWx0aC1jaGFuZ2UucGRmJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1x1NjU3MFx1NjM2RVx1NEZERFx1NUJDNlx1NTM0Rlx1OEJBRScsXG4gICAgICAgIHR5cGU6ICdQREZcdTY1ODdcdTY4NjMnLFxuICAgICAgICB1cmw6ICdodHRwOi8vZXhhbXBsZS5jb20vaGVhbHRoLWNvbmZpZGVudGlhbC5wZGYnXG4gICAgICB9XG4gICAgXSxcbiAgICBhdWRpdFN0YXR1czogJ1x1NUJBMVx1NjgzOFx1OTAxQVx1OEZDNycsXG4gICAgZGF0YVR5cGU6ICdcdTdFRDNcdTY3ODRcdTUzMTZcdTY1NzBcdTYzNkUnLFxuICAgIGRhdGFPcmlnaW46ICdcdTUzM0JcdTc1OTdcdTUzNkJcdTc1MUZcdTdDRkJcdTdFREYnLFxuICAgIHJlZ2lzdHJhbnQ6ICdcdTczOEJcdTUwNjUnLFxuICAgIHNlY3VyaXR5TGV2ZWw6ICdcdTRGRERcdTVCQzZcdTY1NzBcdTYzNkUnLFxuICAgIHN0b3JhZ2VMb2NhdGlvbjogJ1x1NTZGRFx1NUJCNlx1NTA2NVx1NUVCN1x1NjU3MFx1NjM2RVx1NEUyRFx1NUZDMycsXG4gICAgZGF0YVNpemU6ICcxLjhUQicsXG4gICAgZm9ybWF0VHlwZTogJ0NTVi9FeGNlbCcsXG4gICAgdXBkYXRlQ3ljbGU6ICdcdTZCQ0ZcdTY1RTVcdTY2RjRcdTY1QjAnXG4gIH1cbl07XG5cbi8vIFx1NUJGQ1x1NTFGQVx1NkEyMVx1NjJERlx1NjU3MFx1NjM2RVxuZXhwb3J0IHtcbiAgbG93U2VjdXJpdHlFdmlkZW5jZUxpc3QsXG4gIGhpZ2hTZWN1cml0eUV2aWRlbmNlTGlzdCxcbiAgcmVxdWlyZW1lbnRQdWJsaXNoRXZpZGVuY2VMaXN0LFxuICByZXF1aXJlbWVudENsYWltRXZpZGVuY2VMaXN0XG59OyAiLCAiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJEOlxcXFxjdXJzb3JDb2RlXFxcXFx1NjU3MFx1NjM2RVx1ODk4MVx1N0QyMFx1OEZEMFx1ODQyNVx1NUU3M1x1NTNGMFxcXFxcdTY1NzBcdTYzNkVcdTdCQTFcdTc0MDZcdTVCNTBcdTdDRkJcdTdFREZcXFxccGFja2FnZXNcXFxcZXZpZGVuY2UtbWFuYWdlXFxcXHNyY1xcXFxtb2NrXFxcXGluZGV4LnRzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIkQ6XFxcXGN1cnNvckNvZGVcXFxcXHU2NTcwXHU2MzZFXHU4OTgxXHU3RDIwXHU4RkQwXHU4NDI1XHU1RTczXHU1M0YwXFxcXFx1NjU3MFx1NjM2RVx1N0JBMVx1NzQwNlx1NUI1MFx1N0NGQlx1N0VERlxcXFxwYWNrYWdlc1xcXFxldmlkZW5jZS1tYW5hZ2VcXFxcc3JjXFxcXG1vY2tcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL0Q6L2N1cnNvckNvZGUvJUU2JTk1JUIwJUU2JThEJUFFJUU4JUE2JTgxJUU3JUI0JUEwJUU4JUJGJTkwJUU4JTkwJUE1JUU1JUI5JUIzJUU1JThGJUIwLyVFNiU5NSVCMCVFNiU4RCVBRSVFNyVBRSVBMSVFNyU5MCU4NiVFNSVBRCU5MCVFNyVCMyVCQiVFNyVCQiU5Ri9wYWNrYWdlcy9ldmlkZW5jZS1tYW5hZ2Uvc3JjL21vY2svaW5kZXgudHNcIjsvKipcbiAqIFx1NjU3MFx1NjM2RVx1NUI1OFx1OEJDMVx1N0JBMVx1NzQwNlx1NkEyMVx1NTc1N01vY2tcdTY3MERcdTUyQTFcbiAqIFx1NzUyOFx1NEU4RVx1NkEyMVx1NjJERkFQSVx1NjNBNVx1NTNFM1x1OEZENFx1NTZERVx1NjU3MFx1NjM2RVx1RkYwQ1x1ODlFM1x1NTFCM1x1NUYwMFx1NTNEMVx1OTYzNlx1NkJCNVx1NjNBNVx1NTNFM1x1NEUwRFx1NTNFRlx1NzUyOFx1OTVFRVx1OTg5OFxuICovXG5cbmltcG9ydCB7IERhdGFFdmlkZW5jZSB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgTW9ja01ldGhvZCB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2snXG5pbXBvcnQgeyBcbiAgbG93U2VjdXJpdHlFdmlkZW5jZUxpc3QsIFxuICBoaWdoU2VjdXJpdHlFdmlkZW5jZUxpc3QsXG4gIHJlcXVpcmVtZW50UHVibGlzaEV2aWRlbmNlTGlzdCxcbiAgcmVxdWlyZW1lbnRDbGFpbUV2aWRlbmNlTGlzdCxcbiAgZGF0YUV2aWRlbmNlTGlzdFxufSBmcm9tICcuL2V2aWRlbmNlJ1xuXG4vLyBcdTc1MjhcdTYyMzdcdTRGNTNcdTdDRkJcdTVCNThcdThCQzFNb2NrXHU2NTcwXHU2MzZFXG5jb25zdCB1c2VyRXZpZGVuY2VMaXN0ID0gW1xuICB7XG4gICAgZXZpZGVuY2VObzogJ1VFLTIwMjQtMDAxJyxcbiAgICB1c2VyQWNjb3VudDogJ3poYW5nc2FuQGV4YW1wbGUuY29tJyxcbiAgICB1c2VyVHlwZTogJ1x1NEUyQVx1NEVCQVx1NzUyOFx1NjIzNycsXG4gICAgYXV0aFN0YXR1czogJ1x1NURGMlx1OEJBNFx1OEJDMScsXG4gICAgYXV0aFRpbWU6ICcyMDI0LTAzLTE1IDEwOjIyOjE1JyxcbiAgICBhdXRoQ2hhbmdlVGltZTogJycsXG4gICAgcGVybWlzc2lvbkNoYW5nZVRpbWU6ICcyMDI0LTAzLTE3IDE0OjM1OjI3JyxcbiAgICBldmlkZW5jZVRpbWU6ICcyMDI0LTAzLTE4IDA5OjMyOjE1JyxcbiAgICByZWdpc3RlclRpbWU6ICcyMDI0LTAzLTAxIDE1OjMwOjIyJyxcbiAgICByZWdpc3RlckVtYWlsOiAnemhhbmdzYW5AZXhhbXBsZS5jb20nLFxuICAgIHJlZ2lzdGVyUGhvbmU6ICcxMzgwMDEzODAwMScsXG4gICAgZXZpZGVuY2VIYXNoOiAnYTFiMmMzZDRlNWY2ZzdoOGk5ajBrMWwybTNuNG81cDYnLFxuICAgIHBlcnNvbmFsSW5mbzoge1xuICAgICAgbmFtZTogJ1x1NUYyMFx1NEUwOScsXG4gICAgICBpZENhcmQ6ICcxMTAxMDExOTkwMDEwMTEyMzQnLFxuICAgICAgcGhvbmU6ICcxMzgwMDEzODAwMScsXG4gICAgICBmYWNlUmVjb2duaXRpb25TdGF0dXM6ICdcdTVERjJcdTkwMUFcdThGQzcnXG4gICAgfSxcbiAgICBhdXRoSW5mbzoge1xuICAgICAgYXVkaXRvcjogJ1x1Njc0RVx1NUJBMVx1NjgzOCcsXG4gICAgICBhdWRpdFRpbWU6ICcyMDI0LTAzLTE1IDEwOjIyOjE1JyxcbiAgICAgIGF1ZGl0Q29tbWVudDogJ1x1OEQ0NFx1NjU5OVx1OUY1MFx1NTE2OFx1RkYwQ1x1OEVBQlx1NEVGRFx1OUE4Q1x1OEJDMVx1OTAxQVx1OEZDNydcbiAgICB9LFxuICAgIHBlcm1pc3Npb25DaGFuZ2VSZWNvcmRzOiBbXG4gICAgICB7XG4gICAgICAgIG9wZXJhdG9yOiAnXHU3MzhCXHU3QkExXHU3NDA2JyxcbiAgICAgICAgY2hhbmdlVGltZTogJzIwMjQtMDMtMTcgMTQ6MzU6MjcnLFxuICAgICAgICByZWFzb246ICdcdTc1MjhcdTYyMzdcdTc1MzNcdThCRjdcdTY1NzBcdTYzNkVcdTUyMDZcdTY3OTBcdTY3NDNcdTk2NTAnLFxuICAgICAgICBiZWZvcmVQZXJtaXNzaW9uczogWydcdTY1NzBcdTYzNkVcdTZENEZcdTg5QzgnLCAnXHU2NTcwXHU2MzZFXHU0RTBCXHU4RjdEJ10sXG4gICAgICAgIGFmdGVyUGVybWlzc2lvbnM6IFsnXHU2NTcwXHU2MzZFXHU2RDRGXHU4OUM4JywgJ1x1NjU3MFx1NjM2RVx1NEUwQlx1OEY3RCcsICdcdTY1NzBcdTYzNkVcdTUyMDZcdTY3OTAnXVxuICAgICAgfVxuICAgIF0sXG4gICAgYmxvY2tjaGFpbkluZm86IHtcbiAgICAgIGNoYWluSWQ6ICdCQzEyMzQ1Njc4JyxcbiAgICAgIGJsb2NrSGVpZ2h0OiAnMzI1Njc4MicsXG4gICAgICB0cmFuc2FjdGlvbkhhc2g6ICcweDc2ZjNkMjRhNjQzNTk3Yjk1MTM4OTk1NTIxNjc1ZmI0ZjlkNjI5Y2QxMDNhYzViZTY1OGQyYTg5YzJjZTY5JyxcbiAgICAgIGNvbnNlbnN1c1RpbWU6ICcyMDI0LTAzLTE4IDA5OjMzOjA1J1xuICAgIH1cbiAgfSxcbiAge1xuICAgIGV2aWRlbmNlTm86ICdVRS0yMDI0LTAwMicsXG4gICAgdXNlckFjY291bnQ6ICdsaXNpQGNvbXBhbnkuY29tJyxcbiAgICB1c2VyVHlwZTogJ1x1NEYwMVx1NEUxQVx1NzUyOFx1NjIzNycsXG4gICAgYXV0aFN0YXR1czogJ1x1NURGMlx1OEJBNFx1OEJDMScsXG4gICAgYXV0aFRpbWU6ICcyMDI0LTAzLTEwIDE2OjQ1OjMzJyxcbiAgICBhdXRoQ2hhbmdlVGltZTogJzIwMjQtMDMtMTYgMTE6MjA6NDUnLFxuICAgIHBlcm1pc3Npb25DaGFuZ2VUaW1lOiAnJyxcbiAgICBldmlkZW5jZVRpbWU6ICcyMDI0LTAzLTE4IDEwOjE1OjIyJyxcbiAgICByZWdpc3RlclRpbWU6ICcyMDI0LTAzLTA1IDA5OjE1OjMwJyxcbiAgICByZWdpc3RlckVtYWlsOiAnbGlzaUBjb21wYW55LmNvbScsXG4gICAgcmVnaXN0ZXJQaG9uZTogJzEzOTAwMTM5MDAyJyxcbiAgICBldmlkZW5jZUhhc2g6ICdiMmMzZDRlNWY2ZzdoOGk5ajBrMWwybTNuNG81cDZxNycsXG4gICAgZW50ZXJwcmlzZUluZm86IHtcbiAgICAgIG5hbWU6ICdcdTY3RDBcdTY3RDBcdTc5RDFcdTYyODBcdTY3MDlcdTk2NTBcdTUxNkNcdTUzRjgnLFxuICAgICAgY3JlZGl0Q29kZTogJzkxMTEwMTA4TUEwMUM2UDUyWCcsXG4gICAgICBsZWdhbFBlcnNvbjogJ1x1Njc0RVx1NTZEQicsXG4gICAgICBsZWdhbFBlcnNvbklkQ2FyZDogJzExMDEwMTE5ODUwNTA3OTg3NicsXG4gICAgICBjb250YWN0UGhvbmU6ICcxMzkwMDEzOTAwMidcbiAgICB9LFxuICAgIGF1dGhJbmZvOiB7XG4gICAgICBhdWRpdG9yOiAnXHU2NzRFXHU1QkExXHU2ODM4JyxcbiAgICAgIGF1ZGl0VGltZTogJzIwMjQtMDMtMTAgMTY6NDU6MzMnLFxuICAgICAgYXVkaXRDb21tZW50OiAnXHU0RjAxXHU0RTFBXHU4RDQ0XHU4RDI4XHU3QjI2XHU1NDA4XHU4OTgxXHU2QzQyXHVGRjBDXHU4QkMxXHU0RUY2XHU5RjUwXHU1MTY4J1xuICAgIH0sXG4gICAgYXV0aENoYW5nZVJlY29yZHM6IFtcbiAgICAgIHtcbiAgICAgICAgY2hhbmdlVHlwZTogJ1x1ODA1NFx1N0NGQlx1NzUzNVx1OEJERFx1NTNEOFx1NjZGNCcsXG4gICAgICAgIGNoYW5nZVRpbWU6ICcyMDI0LTAzLTE2IDExOjIwOjQ1JyxcbiAgICAgICAgYmVmb3JlQ2hhbmdlOiB7XG4gICAgICAgICAgJ1x1ODA1NFx1N0NGQlx1NzUzNVx1OEJERCc6ICcwMTA2MjM0NTY3OCdcbiAgICAgICAgfSxcbiAgICAgICAgYWZ0ZXJDaGFuZ2U6IHtcbiAgICAgICAgICAnXHU4MDU0XHU3Q0ZCXHU3NTM1XHU4QkREJzogJzAxMDYyMzQ1Njc5J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBibG9ja2NoYWluSW5mbzoge1xuICAgICAgY2hhaW5JZDogJ0JDMTIzNDU2NzgnLFxuICAgICAgYmxvY2tIZWlnaHQ6ICczMjU3MDAxJyxcbiAgICAgIHRyYW5zYWN0aW9uSGFzaDogJzB4ODhhMmQzYjVjN2U5ZjFkNGE2YjhjMGUyZDRmNmE4YjBjMmQ0ZTZmOGEwYjJjNGQ2ZThmMGEyYzRlNmE4YjAnLFxuICAgICAgY29uc2Vuc3VzVGltZTogJzIwMjQtMDMtMTggMTA6MTY6MDUnXG4gICAgfVxuICB9LFxuICB7XG4gICAgZXZpZGVuY2VObzogJ1VFLTIwMjQtMDAzJyxcbiAgICB1c2VyQWNjb3VudDogJ3dhbmd3dUBleGFtcGxlLmNvbScsXG4gICAgdXNlclR5cGU6ICdcdTRFMkFcdTRFQkFcdTc1MjhcdTYyMzcnLFxuICAgIGF1dGhTdGF0dXM6ICdcdThCQTRcdThCQzFcdTRFMkQnLFxuICAgIGF1dGhUaW1lOiAnJyxcbiAgICBhdXRoQ2hhbmdlVGltZTogJycsXG4gICAgcGVybWlzc2lvbkNoYW5nZVRpbWU6ICcnLFxuICAgIGV2aWRlbmNlVGltZTogJzIwMjQtMDMtMTggMTE6MDU6MzMnLFxuICAgIHJlZ2lzdGVyVGltZTogJzIwMjQtMDMtMTcgMTU6MjA6MTAnLFxuICAgIHJlZ2lzdGVyRW1haWw6ICd3YW5nd3VAZXhhbXBsZS5jb20nLFxuICAgIHJlZ2lzdGVyUGhvbmU6ICcxMzcwMDEzNzAwMycsXG4gICAgZXZpZGVuY2VIYXNoOiAnYzNkNGU1ZjZnN2g4aTlqMGsxbDJtM240bzVwNnE3cjgnLFxuICAgIHBlcnNvbmFsSW5mbzoge1xuICAgICAgbmFtZTogJ1x1NzM4Qlx1NEU5NCcsXG4gICAgICBpZENhcmQ6ICcxMTAxMDExOTkyMDMwMzQ1NjcnLFxuICAgICAgcGhvbmU6ICcxMzcwMDEzNzAwMycsXG4gICAgICBmYWNlUmVjb2duaXRpb25TdGF0dXM6ICdcdTVGODVcdTlBOENcdThCQzEnXG4gICAgfSxcbiAgICBhdXRoSW5mbzoge1xuICAgICAgYXVkaXRvcjogJ1x1Njc0RVx1NUJBMVx1NjgzOCcsXG4gICAgICBhdWRpdFRpbWU6ICcnLFxuICAgICAgYXVkaXRDb21tZW50OiAnXHU3QjQ5XHU1Rjg1XHU0RUJBXHU4MTM4XHU4QkM2XHU1MjJCXHU5QThDXHU4QkMxJ1xuICAgIH0sXG4gICAgYmxvY2tjaGFpbkluZm86IHtcbiAgICAgIGNoYWluSWQ6ICdCQzEyMzQ1Njc4JyxcbiAgICAgIGJsb2NrSGVpZ2h0OiAnMzI1NzI1MCcsXG4gICAgICB0cmFuc2FjdGlvbkhhc2g6ICcweGMzZDRlNWY2YTdiOGM5ZDBlMWYyYTNiNGM1ZDZlN2Y4YTliMGMxZDJlM2Y0YTViNmM3ZDhlOWYwYTFiMmMzJyxcbiAgICAgIGNvbnNlbnN1c1RpbWU6ICcyMDI0LTAzLTE4IDExOjA2OjE1J1xuICAgIH1cbiAgfSxcbiAge1xuICAgIGV2aWRlbmNlTm86ICdVRS0yMDI0LTAwNCcsXG4gICAgdXNlckFjY291bnQ6ICd6aGFvbGl1QHRlY2gub3JnJyxcbiAgICB1c2VyVHlwZTogJ1x1NEYwMVx1NEUxQVx1NzUyOFx1NjIzNycsXG4gICAgYXV0aFN0YXR1czogJ1x1NjcyQVx1OEJBNFx1OEJDMScsXG4gICAgYXV0aFRpbWU6ICcnLFxuICAgIGF1dGhDaGFuZ2VUaW1lOiAnJyxcbiAgICBwZXJtaXNzaW9uQ2hhbmdlVGltZTogJycsXG4gICAgZXZpZGVuY2VUaW1lOiAnMjAyNC0wMy0xOCAxNDoyMjo0NycsXG4gICAgcmVnaXN0ZXJUaW1lOiAnMjAyNC0wMy0xOCAxNDoxMDoyNScsXG4gICAgcmVnaXN0ZXJFbWFpbDogJ3poYW9saXVAdGVjaC5vcmcnLFxuICAgIHJlZ2lzdGVyUGhvbmU6ICcxMzYwMDEzNjAwNCcsXG4gICAgZXZpZGVuY2VIYXNoOiAnZDRlNWY2ZzdoOGk5ajBrMWwybTNuNG81cDZxN3I4czknLFxuICAgIGJsb2NrY2hhaW5JbmZvOiB7XG4gICAgICBjaGFpbklkOiAnQkMxMjM0NTY3OCcsXG4gICAgICBibG9ja0hlaWdodDogJzMyNTc1MDAnLFxuICAgICAgdHJhbnNhY3Rpb25IYXNoOiAnMHhkNGU1ZjZnN2g4aTlqMGsxbDJtM240bzVwNnE3cjhzOXQwdTF2MnczeDR5NXo2YTdiOGM5ZDBlMWYyZzMnLFxuICAgICAgY29uc2Vuc3VzVGltZTogJzIwMjQtMDMtMTggMTQ6MjM6MTAnXG4gICAgfVxuICB9LFxuICB7XG4gICAgZXZpZGVuY2VObzogJ1VFLTIwMjQtMDA1JyxcbiAgICB1c2VyQWNjb3VudDogJ3N1bnFpQGRhdGEuY29tJyxcbiAgICB1c2VyVHlwZTogJ1x1NEYwMVx1NEUxQVx1NzUyOFx1NjIzNycsXG4gICAgYXV0aFN0YXR1czogJ1x1NURGMlx1OEJBNFx1OEJDMScsXG4gICAgYXV0aFRpbWU6ICcyMDI0LTAzLTE1IDExOjMwOjIyJyxcbiAgICBhdXRoQ2hhbmdlVGltZTogJycsXG4gICAgcGVybWlzc2lvbkNoYW5nZVRpbWU6ICcyMDI0LTAzLTE4IDE2OjM2OjA5JyxcbiAgICBldmlkZW5jZVRpbWU6ICcyMDI0LTAzLTE4IDE2OjM2OjA5JyxcbiAgICByZWdpc3RlclRpbWU6ICcyMDI0LTAzLTEwIDEwOjAwOjE1JyxcbiAgICByZWdpc3RlckVtYWlsOiAnc3VucWlAZGF0YS5jb20nLFxuICAgIHJlZ2lzdGVyUGhvbmU6ICcxMzUwMDEzNTAwNScsXG4gICAgZXZpZGVuY2VIYXNoOiAnZTVmNmc3aDhpOWowazFsMm0zbjRvNXA2cTdyOHM5dDAnLFxuICAgIGVudGVycHJpc2VJbmZvOiB7XG4gICAgICBuYW1lOiAnXHU2NTcwXHU2MzZFXHU3OUQxXHU2MjgwXHU4MEExXHU0RUZEXHU2NzA5XHU5NjUwXHU1MTZDXHU1M0Y4JyxcbiAgICAgIGNyZWRpdENvZGU6ICc5MTExMDEwOE1BMDFEN1E2M1knLFxuICAgICAgbGVnYWxQZXJzb246ICdcdTVCNTlcdTRFMDMnLFxuICAgICAgbGVnYWxQZXJzb25JZENhcmQ6ICcxMTAxMDExOTgwMTIxMjM0NTYnLFxuICAgICAgY29udGFjdFBob25lOiAnMTM1MDAxMzUwMDUnXG4gICAgfSxcbiAgICBhdXRoSW5mbzoge1xuICAgICAgYXVkaXRvcjogJ1x1NzM4Qlx1NUJBMVx1NjgzOCcsXG4gICAgICBhdWRpdFRpbWU6ICcyMDI0LTAzLTE1IDExOjMwOjIyJyxcbiAgICAgIGF1ZGl0Q29tbWVudDogJ1x1OEQ0NFx1NjU5OVx1NUI4Q1x1NjU3NFx1RkYwQ1x1N0IyNlx1NTQwOFx1OEJBNFx1OEJDMVx1ODk4MVx1NkM0MidcbiAgICB9LFxuICAgIHBlcm1pc3Npb25DaGFuZ2VSZWNvcmRzOiBbXG4gICAgICB7XG4gICAgICAgIG9wZXJhdG9yOiAnXHU2NzRFXHU3QkExXHU3NDA2JyxcbiAgICAgICAgY2hhbmdlVGltZTogJzIwMjQtMDMtMTggMTY6MzY6MDknLFxuICAgICAgICByZWFzb246ICdcdTYzRDBcdTUzNDdcdTRGMDFcdTRFMUFcdTY3NDNcdTk2NTBcdTdCNDlcdTdFQTcnLFxuICAgICAgICBiZWZvcmVQZXJtaXNzaW9uczogWydcdTY1NzBcdTYzNkVcdTZENEZcdTg5QzgnLCAnXHU2NTcwXHU2MzZFXHU0RTBCXHU4RjdEJywgJ1x1NTdGQVx1Nzg0MFx1NTIwNlx1Njc5MCddLFxuICAgICAgICBhZnRlclBlcm1pc3Npb25zOiBbJ1x1NjU3MFx1NjM2RVx1NkQ0Rlx1ODlDOCcsICdcdTY1NzBcdTYzNkVcdTRFMEJcdThGN0QnLCAnXHU1N0ZBXHU3ODQwXHU1MjA2XHU2NzkwJywgJ1x1OUFEOFx1N0VBN1x1NTIwNlx1Njc5MCcsICdcdTY1NzBcdTYzNkVcdTVCRkNcdTUxRkEnXVxuICAgICAgfVxuICAgIF0sXG4gICAgYmxvY2tjaGFpbkluZm86IHtcbiAgICAgIGNoYWluSWQ6ICdCQzEyMzQ1Njc4JyxcbiAgICAgIGJsb2NrSGVpZ2h0OiAnMzI1NzgwMCcsXG4gICAgICB0cmFuc2FjdGlvbkhhc2g6ICcweGU1ZjZnN2g4aTlqMGsxbDJtM240bzVwNnE3cjhzOXQwdTF2MnczeDR5NXo2YTdiOGM5ZDBlMWYyZzNoNCcsXG4gICAgICBjb25zZW5zdXNUaW1lOiAnMjAyNC0wMy0xOCAxNjozNzowMidcbiAgICB9XG4gIH1cbl07XG5cbi8vIFx1NjgwN1x1NTFDNlx1NTRDRFx1NUU5NFx1NjgzQ1x1NUYwRlxuY29uc3Qgc3VjY2VzcyA9IChkYXRhOiBhbnkpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb2RlOiAwLFxuICAgIG1lc3NhZ2U6ICdzdWNjZXNzJyxcbiAgICBkYXRhXG4gIH1cbn1cblxuLy8gXHU1MjA2XHU5ODc1XHU4QkY3XHU2QzQyXHU1OTA0XHU3NDA2XHU1MUZEXHU2NTcwXG5jb25zdCBoYW5kbGVQYWdlUXVlcnkgPSAobGlzdDogYW55W10sIHBhcmFtczogYW55KSA9PiB7XG4gIGNvbnN0IHsgcGFnZU51bSA9IDEsIHBhZ2VTaXplID0gMTAsIC4uLmZpbHRlcnMgfSA9IHBhcmFtc1xuICBcbiAgLy8gXHU4RkM3XHU2RUU0XHU2NTcwXHU2MzZFXG4gIGxldCBmaWx0ZXJlZExpc3QgPSBbLi4ubGlzdF1cbiAgXG4gIC8vIFx1NjgzOVx1NjM2RVx1OEZDN1x1NkVFNFx1Njc2MVx1NEVGNlx1N0I1Qlx1OTAwOVx1NjU3MFx1NjM2RVxuICBPYmplY3Qua2V5cyhmaWx0ZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKGZpbHRlcnNba2V5XSkge1xuICAgICAgZmlsdGVyZWRMaXN0ID0gZmlsdGVyZWRMaXN0LmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgLy8gXHU1OTA0XHU3NDA2XHU2NUY2XHU5NUY0XHU4MzAzXHU1NkY0XG4gICAgICAgIGlmIChrZXkuaW5jbHVkZXMoJ1N0YXJ0VGltZScpKSB7XG4gICAgICAgICAgY29uc3QgZmllbGROYW1lID0ga2V5LnJlcGxhY2UoJ1N0YXJ0VGltZScsICdUaW1lJylcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoaXRlbVtmaWVsZE5hbWVdKS5nZXRUaW1lKCkgPj0gbmV3IERhdGUoZmlsdGVyc1trZXldKS5nZXRUaW1lKClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGtleS5pbmNsdWRlcygnRW5kVGltZScpKSB7XG4gICAgICAgICAgY29uc3QgZmllbGROYW1lID0ga2V5LnJlcGxhY2UoJ0VuZFRpbWUnLCAnVGltZScpXG4gICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGl0ZW1bZmllbGROYW1lXSkuZ2V0VGltZSgpIDw9IG5ldyBEYXRlKGZpbHRlcnNba2V5XSkuZ2V0VGltZSgpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFx1NTkwNFx1NzQwNlx1NjY2RVx1OTAxQVx1NUI1N1x1NkJCNVx1RkYwQ1x1NkEyMVx1N0NDQVx1NTMzOVx1OTE0RFxuICAgICAgICBpZiAodHlwZW9mIGl0ZW1ba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gaXRlbVtrZXldLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyc1trZXldLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFx1N0NCRVx1Nzg2RVx1NTMzOVx1OTE0RFxuICAgICAgICByZXR1cm4gaXRlbVtrZXldID09PSBmaWx0ZXJzW2tleV1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxuICBcbiAgLy8gXHU4QkExXHU3Qjk3XHU1MjA2XHU5ODc1XHU2NTcwXHU2MzZFXG4gIGNvbnN0IHN0YXJ0SW5kZXggPSAoTnVtYmVyKHBhZ2VOdW0pIC0gMSkgKiBOdW1iZXIocGFnZVNpemUpXG4gIGNvbnN0IGVuZEluZGV4ID0gc3RhcnRJbmRleCArIE51bWJlcihwYWdlU2l6ZSlcbiAgY29uc3QgcGFnZUxpc3QgPSBmaWx0ZXJlZExpc3Quc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpXG4gIFxuICByZXR1cm4ge1xuICAgIGxpc3Q6IHBhZ2VMaXN0LFxuICAgIHRvdGFsOiBmaWx0ZXJlZExpc3QubGVuZ3RoXG4gIH1cbn1cblxuLy8gXHU1QkZDXHU1MUZBIG1vY2sgXHU2NTcwXHU2MzZFXHVGRjBDXHU5MDAyXHU5MTREIHZpdGUtcGx1Z2luLW1vY2tcbmV4cG9ydCBkZWZhdWx0IFtcbiAgLy8gXHU2NTcwXHU2MzZFXHU3QzdCXHU1QjU4XHU4QkMxXHU1MjE3XHU4ODY4XHU2M0E1XHU1M0UzXG4gIHtcbiAgICB1cmw6ICcvYXBpL2V2aWRlbmNlL2RhdGEvbGlzdCcsXG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICByZXNwb25zZTogKHJlcSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gcmVxLnF1ZXJ5IHx8IHt9XG4gICAgICAgIC8vIFx1NEY3Rlx1NzUyOFx1NjU3MFx1NjM2RVx1NzY3Qlx1OEJCMFx1NUI1OFx1OEJDMVx1NTIxN1x1ODg2OFxuICAgICAgICBjb25zdCBwYWdlUmVzdWx0ID0gaGFuZGxlUGFnZVF1ZXJ5KGRhdGFFdmlkZW5jZUxpc3QsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBzdWNjZXNzKHBhZ2VSZXN1bHQpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignXHU1OTA0XHU3NDA2XHU2NTcwXHU2MzZFXHU1QjU4XHU4QkMxXHU1MjE3XHU4ODY4XHU4QkY3XHU2QzQyXHU2NUY2XHU1MUZBXHU5NTE5OicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb2RlOiA1MDAsXG4gICAgICAgICAgbWVzc2FnZTogJ1x1NjcwRFx1NTJBMVx1NTY2OFx1NTE4NVx1OTBFOFx1OTUxOVx1OEJFRicsXG4gICAgICAgICAgZGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLy8gXHU2NTcwXHU2MzZFXHU3QzdCXHU1QjU4XHU4QkMxXHU4QkU2XHU2MEM1XHU2M0E1XHU1M0UzXG4gIHtcbiAgICB1cmw6IFJlZ0V4cCgnL2FwaS9ldmlkZW5jZS9kYXRhL2RldGFpbC8uKicpLFxuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgcmVzcG9uc2U6IChyZXEpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFx1NEVDRVVSTFx1NEUyRFx1NjNEMFx1NTNENmV2aWRlbmNlTm9cbiAgICAgICAgY29uc3QgdXJsID0gcmVxLnVybDtcbiAgICAgICAgY29uc3QgZXZpZGVuY2VOb01hdGNoID0gdXJsLm1hdGNoKC9cXC9hcGlcXC9ldmlkZW5jZVxcL2RhdGFcXC9kZXRhaWxcXC8oW15cXC9cXD9dKykvKTtcbiAgICAgICAgY29uc3QgZXZpZGVuY2VObyA9IGV2aWRlbmNlTm9NYXRjaCA/IGV2aWRlbmNlTm9NYXRjaFsxXSA6IG51bGw7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnXHU2M0E1XHU2NTM2XHU1MjMwXHU4QkU2XHU2MEM1XHU4QkY3XHU2QzQyXHVGRjBDVVJMOicsIHVybCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTYzRDBcdTUzRDZcdTc2ODRldmlkZW5jZU5vOicsIGV2aWRlbmNlTm8pO1xuICAgICAgICBjb25zb2xlLmxvZygnXHU1RjUzXHU1MjREXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XHU5NTdGXHU1RUE2OicsIGRhdGFFdmlkZW5jZUxpc3QubGVuZ3RoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1x1NjI0MFx1NjcwOWV2aWRlbmNlTm86JywgZGF0YUV2aWRlbmNlTGlzdC5tYXAoaXRlbSA9PiBpdGVtLmV2aWRlbmNlTm8pLmpvaW4oJywgJykpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFldmlkZW5jZU5vKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignXHU2NUUwXHU2Q0Q1XHU0RUNFVVJMXHU0RTJEXHU2M0QwXHU1M0Q2ZXZpZGVuY2VOb1x1NTNDMlx1NjU3MCcpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IDQwMCxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdcdTdGM0FcdTVDMTFcdTVGQzVcdTg5ODFcdTUzQzJcdTY1NzAnLFxuICAgICAgICAgICAgICBkYXRhOiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgLy8gXHU0RUNFXHU2NTcwXHU2MzZFXHU3NjdCXHU4QkIwXHU1QjU4XHU4QkMxXHU1MjE3XHU4ODY4XHU0RTJEXHU2N0U1XHU2MjdFXHU1MzM5XHU5MTREXHU3Njg0XHU4QkIwXHU1RjU1XG4gICAgICAgIGNvbnN0IGRldGFpbCA9IGRhdGFFdmlkZW5jZUxpc3QuZmluZChpdGVtID0+IGl0ZW0uZXZpZGVuY2VObyA9PT0gZXZpZGVuY2VObyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTY3RTVcdTYyN0VcdTUyMzBcdTc2ODRcdThCRTZcdTYwQzU6JywgZGV0YWlsID8gJ1x1NjI3RVx1NTIzMFx1NjU3MFx1NjM2RScgOiAnXHU2NzJBXHU2MjdFXHU1MjMwXHU2NTcwXHU2MzZFJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIWRldGFpbCkge1xuICAgICAgICAgIC8vIFx1NjI1M1x1NTM3MFx1NjI0MFx1NjcwOWV2aWRlbmNlTm9cdTRFRTVcdTRGQkZcdThDMDNcdThCRDVcbiAgICAgICAgICBjb25zb2xlLmxvZygnXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XHU0RTJEXHU3Njg0XHU2MjQwXHU2NzA5ZXZpZGVuY2VObzonLCBkYXRhRXZpZGVuY2VMaXN0Lm1hcChpdGVtID0+IGl0ZW0uZXZpZGVuY2VObykpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdcdTRGMjBcdTUxNjVcdTc2ODRldmlkZW5jZU5vOicsIGV2aWRlbmNlTm8pO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIFx1NUMxRFx1OEJENVx1OEZENFx1NTZERVx1N0IyQ1x1NEUwMFx1Njc2MVx1NjU3MFx1NjM2RVx1NEY1Q1x1NEUzQVx1NTkwN1x1NzUyOFx1NjVCOVx1Njg0OChcdTRFQzVcdTc1MjhcdTRFOEVcdThDMDNcdThCRDUpXG4gICAgICAgICAgY29uc3QgZmFsbGJhY2tEZXRhaWwgPSBkYXRhRXZpZGVuY2VMaXN0WzBdO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdcdTRGN0ZcdTc1MjhmYWxsYmFja1x1NjU3MFx1NjM2RTonLCBmYWxsYmFja0RldGFpbD8uZXZpZGVuY2VObyk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gXHU1NzI4XHU1RjAwXHU1M0QxXHU3M0FGXHU1ODgzXHU0RTJEXHVGRjBDXHU0RTNBXHU0RTg2XHU5MDdGXHU1MTREXHU2MkE1XHU5NTE5XHVGRjBDXHU4RkQ0XHU1NkRFXHU3QjJDXHU0RTAwXHU2NzYxXHU2NTcwXHU2MzZFXG4gICAgICAgICAgcmV0dXJuIHN1Y2Nlc3MoZmFsbGJhY2tEZXRhaWwgfHwgbnVsbCk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gXHU2QjYzXHU1RjBGXHU0RUUzXHU3ODAxXHU1RTk0XHU4QkU1XHU4RkQ0XHU1NkRFNDA0XHU5NTE5XHU4QkVGXG4gICAgICAgICAgLy8gcmV0dXJuIHtcbiAgICAgICAgICAvLyAgIGNvZGU6IDQwNCxcbiAgICAgICAgICAvLyAgIG1lc3NhZ2U6ICdcdTY3MkFcdTYyN0VcdTUyMzBcdTc2RjhcdTUxNzNcdTVCNThcdThCQzFcdTRGRTFcdTYwNkYnLFxuICAgICAgICAgIC8vICAgZGF0YTogbnVsbFxuICAgICAgICAgIC8vIH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBzdWNjZXNzKGRldGFpbCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdcdTU5MDRcdTc0MDZcdTY1NzBcdTYzNkVcdTVCNThcdThCQzFcdThCRTZcdTYwQzVcdThCRjdcdTZDNDJcdTY1RjZcdTUxRkFcdTk1MTk6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvZGU6IDUwMCxcbiAgICAgICAgICBtZXNzYWdlOiAnXHU2NzBEXHU1MkExXHU1NjY4XHU1MTg1XHU5MEU4XHU5NTE5XHU4QkVGJyxcbiAgICAgICAgICBkYXRhOiBudWxsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9LFxuICAvLyBcdTRGNEVcdTVCQzZcdTVGMDBcdTUzRDFcdTVCNThcdThCQzFcdThCRTZcdTYwQzVcdTYzQTVcdTUzRTNcbiAge1xuICAgIHVybDogUmVnRXhwKCcvYXBpL2V2aWRlbmNlL2xvdy1zZWN1cml0eS8uKicpLFxuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgcmVzcG9uc2U6IChyZXEpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFx1NEVDRVVSTFx1NEUyRFx1NjNEMFx1NTNENklEXG4gICAgICAgIGNvbnN0IHVybCA9IHJlcS51cmw7XG4gICAgICAgIGNvbnN0IGlkTWF0Y2ggPSB1cmwubWF0Y2goL1xcL2FwaVxcL2V2aWRlbmNlXFwvbG93LXNlY3VyaXR5XFwvKFteXFwvXFw/XSspLyk7XG4gICAgICAgIGNvbnN0IGlkID0gaWRNYXRjaCA/IGlkTWF0Y2hbMV0gOiBudWxsO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1x1NjNBNVx1NjUzNlx1NTIzMFx1NEY0RVx1NUJDNlx1NUYwMFx1NTNEMVx1NUI1OFx1OEJDMVx1OEJFNlx1NjBDNVx1OEJGN1x1NkM0Mlx1RkYwQ1VSTDonLCB1cmwpO1xuICAgICAgICBjb25zb2xlLmxvZygnXHU2M0QwXHU1M0Q2XHU3Njg0SUQ6JywgaWQpO1xuICAgICAgICBjb25zb2xlLmxvZygnXHU1RjUzXHU1MjREXHU0RjRFXHU1QkM2XHU1RjAwXHU1M0QxXHU1QjU4XHU4QkMxXHU1MjE3XHU4ODY4XHU5NTdGXHU1RUE2OicsIGxvd1NlY3VyaXR5RXZpZGVuY2VMaXN0Lmxlbmd0aCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignXHU2NUUwXHU2Q0Q1XHU0RUNFVVJMXHU0RTJEXHU2M0QwXHU1M0Q2SURcdTUzQzJcdTY1NzAnKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogNDAwLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1x1N0YzQVx1NUMxMVx1NUZDNVx1ODk4MVx1NTNDMlx1NjU3MCcsXG4gICAgICAgICAgICBkYXRhOiBudWxsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gXHU0RUNFXHU0RjRFXHU1QkM2XHU1RjAwXHU1M0QxXHU1QjU4XHU4QkMxXHU1MjE3XHU4ODY4XHU0RTJEXHU2N0U1XHU2MjdFXHU1MzM5XHU5MTREXHU3Njg0XHU4QkIwXHU1RjU1XG4gICAgICAgIGNvbnN0IGRldGFpbCA9IGxvd1NlY3VyaXR5RXZpZGVuY2VMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBpZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTY3RTVcdTYyN0VcdTUyMzBcdTc2ODRcdThCRTZcdTYwQzU6JywgZGV0YWlsID8gJ1x1NjI3RVx1NTIzMFx1NjU3MFx1NjM2RScgOiAnXHU2NzJBXHU2MjdFXHU1MjMwXHU2NTcwXHU2MzZFJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIWRldGFpbCkge1xuICAgICAgICAgIC8vIFx1NjI1M1x1NTM3MFx1NjI0MFx1NjcwOUlEXHU0RUU1XHU0RkJGXHU4QzAzXHU4QkQ1XG4gICAgICAgICAgY29uc29sZS5sb2coJ1x1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFx1NEUyRFx1NzY4NFx1NjI0MFx1NjcwOUlEOicsIGxvd1NlY3VyaXR5RXZpZGVuY2VMaXN0Lm1hcChpdGVtID0+IGl0ZW0uaWQpKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnXHU0RjIwXHU1MTY1XHU3Njg0SUQ6JywgaWQpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIFx1NUMxRFx1OEJENVx1OEZENFx1NTZERVx1N0IyQ1x1NEUwMFx1Njc2MVx1NjU3MFx1NjM2RVx1NEY1Q1x1NEUzQVx1NTkwN1x1NzUyOFx1NjVCOVx1Njg0OChcdTRFQzVcdTc1MjhcdTRFOEVcdThDMDNcdThCRDUpXG4gICAgICAgICAgY29uc3QgZmFsbGJhY2tEZXRhaWwgPSBsb3dTZWN1cml0eUV2aWRlbmNlTGlzdFswXTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnXHU0RjdGXHU3NTI4ZmFsbGJhY2tcdTY1NzBcdTYzNkU6JywgZmFsbGJhY2tEZXRhaWw/LmlkKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBcdTU3MjhcdTVGMDBcdTUzRDFcdTczQUZcdTU4ODNcdTRFMkRcdUZGMENcdTRFM0FcdTRFODZcdTkwN0ZcdTUxNERcdTYyQTVcdTk1MTlcdUZGMENcdThGRDRcdTU2REVcdTdCMkNcdTRFMDBcdTY3NjFcdTY1NzBcdTYzNkVcbiAgICAgICAgICByZXR1cm4gc3VjY2VzcyhmYWxsYmFja0RldGFpbCB8fCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3MoZGV0YWlsKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdcdTU5MDRcdTc0MDZcdTRGNEVcdTVCQzZcdTVGMDBcdTUzRDFcdTVCNThcdThCQzFcdThCRTZcdTYwQzVcdThCRjdcdTZDNDJcdTY1RjZcdTUxRkFcdTk1MTk6JywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgY29kZTogNTAwLFxuICAgICAgICAgICAgICBtZXNzYWdlOiAnXHU2NzBEXHU1MkExXHU1NjY4XHU1MTg1XHU5MEU4XHU5NTE5XHU4QkVGJyxcbiAgICAgICAgICAgICAgZGF0YTogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgfVxuICB9LFxuICAvLyBcdTlBRDhcdTVCQzZcdTVGMDBcdTUzRDFcdTVCNThcdThCQzFcdThCRTZcdTYwQzVcdTYzQTVcdTUzRTNcbiAge1xuICAgIHVybDogUmVnRXhwKCcvYXBpL2V2aWRlbmNlL2hpZ2gtc2VjdXJpdHkvLionKSxcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIHJlc3BvbnNlOiAocmVxKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBcdTRFQ0VVUkxcdTRFMkRcdTYzRDBcdTUzRDZJRFxuICAgICAgICBjb25zdCB1cmwgPSByZXEudXJsO1xuICAgICAgICBjb25zdCBpZE1hdGNoID0gdXJsLm1hdGNoKC9cXC9hcGlcXC9ldmlkZW5jZVxcL2hpZ2gtc2VjdXJpdHlcXC8oW15cXC9cXD9dKykvKTtcbiAgICAgICAgY29uc3QgaWQgPSBpZE1hdGNoID8gaWRNYXRjaFsxXSA6IG51bGw7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnXHU2M0E1XHU2NTM2XHU1MjMwXHU5QUQ4XHU1QkM2XHU1RjAwXHU1M0QxXHU1QjU4XHU4QkMxXHU4QkU2XHU2MEM1XHU4QkY3XHU2QzQyXHVGRjBDVVJMOicsIHVybCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTYzRDBcdTUzRDZcdTc2ODRJRDonLCBpZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTVGNTNcdTUyNERcdTlBRDhcdTVCQzZcdTVGMDBcdTUzRDFcdTVCNThcdThCQzFcdTUyMTdcdTg4NjhcdTk1N0ZcdTVFQTY6JywgaGlnaFNlY3VyaXR5RXZpZGVuY2VMaXN0Lmxlbmd0aCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignXHU2NUUwXHU2Q0Q1XHU0RUNFVVJMXHU0RTJEXHU2M0QwXHU1M0Q2SURcdTUzQzJcdTY1NzAnKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IDQwMCxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdcdTdGM0FcdTVDMTFcdTVGQzVcdTg5ODFcdTUzQzJcdTY1NzAnLFxuICAgICAgICAgICAgICAgIGRhdGE6IG51bGxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAvLyBcdTRFQ0VcdTlBRDhcdTVCQzZcdTVGMDBcdTUzRDFcdTVCNThcdThCQzFcdTUyMTdcdTg4NjhcdTRFMkRcdTY3RTVcdTYyN0VcdTUzMzlcdTkxNERcdTc2ODRcdThCQjBcdTVGNTVcbiAgICAgICAgY29uc3QgZGV0YWlsID0gaGlnaFNlY3VyaXR5RXZpZGVuY2VMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBpZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTY3RTVcdTYyN0VcdTUyMzBcdTc2ODRcdThCRTZcdTYwQzU6JywgZGV0YWlsID8gJ1x1NjI3RVx1NTIzMFx1NjU3MFx1NjM2RScgOiAnXHU2NzJBXHU2MjdFXHU1MjMwXHU2NTcwXHU2MzZFJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIWRldGFpbCkge1xuICAgICAgICAgIC8vIFx1NjI1M1x1NTM3MFx1NjI0MFx1NjcwOUlEXHU0RUU1XHU0RkJGXHU4QzAzXHU4QkQ1XG4gICAgICAgICAgY29uc29sZS5sb2coJ1x1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFx1NEUyRFx1NzY4NFx1NjI0MFx1NjcwOUlEOicsIGhpZ2hTZWN1cml0eUV2aWRlbmNlTGlzdC5tYXAoaXRlbSA9PiBpdGVtLmlkKSk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1x1NEYyMFx1NTE2NVx1NzY4NElEOicsIGlkKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBcdTVDMURcdThCRDVcdThGRDRcdTU2REVcdTdCMkNcdTRFMDBcdTY3NjFcdTY1NzBcdTYzNkVcdTRGNUNcdTRFM0FcdTU5MDdcdTc1MjhcdTY1QjlcdTY4NDgoXHU0RUM1XHU3NTI4XHU0RThFXHU4QzAzXHU4QkQ1KVxuICAgICAgICAgIGNvbnN0IGZhbGxiYWNrRGV0YWlsID0gaGlnaFNlY3VyaXR5RXZpZGVuY2VMaXN0WzBdO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdcdTRGN0ZcdTc1MjhmYWxsYmFja1x1NjU3MFx1NjM2RTonLCBmYWxsYmFja0RldGFpbD8uaWQpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIFx1NTcyOFx1NUYwMFx1NTNEMVx1NzNBRlx1NTg4M1x1NEUyRFx1RkYwQ1x1NEUzQVx1NEU4Nlx1OTA3Rlx1NTE0RFx1NjJBNVx1OTUxOVx1RkYwQ1x1OEZENFx1NTZERVx1N0IyQ1x1NEUwMFx1Njc2MVx1NjU3MFx1NjM2RVxuICAgICAgICAgIHJldHVybiBzdWNjZXNzKGZhbGxiYWNrRGV0YWlsIHx8IG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gc3VjY2VzcyhkZXRhaWwpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1x1NTkwNFx1NzQwNlx1OUFEOFx1NUJDNlx1NUYwMFx1NTNEMVx1NUI1OFx1OEJDMVx1OEJFNlx1NjBDNVx1OEJGN1x1NkM0Mlx1NjVGNlx1NTFGQVx1OTUxOTonLCBlcnJvcik7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgY29kZTogNTAwLFxuICAgICAgICAgICAgICBtZXNzYWdlOiAnXHU2NzBEXHU1MkExXHU1NjY4XHU1MTg1XHU5MEU4XHU5NTE5XHU4QkVGJyxcbiAgICAgICAgICAgIGRhdGE6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLy8gXHU5MDFBXHU3NTI4XHU1QjU4XHU4QkMxXHU1MjE3XHU4ODY4XHU2M0E1XHU1M0UzXG4gIHtcbiAgICB1cmw6ICcvYXBpL2V2aWRlbmNlL2xpc3QnLFxuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgcmVzcG9uc2U6IChyZXEpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHJlcS5xdWVyeSB8fCB7fVxuICAgICAgICAvLyBcdTY4MzlcdTYzNkVwcm9kdWN0VHlwZVx1NTNDMlx1NjU3MFx1NTFCM1x1NUI5QVx1OEZENFx1NTZERVx1NTRFQVx1NzlDRFx1N0M3Qlx1NTc4Qlx1NzY4NFx1NTIxN1x1ODg2OFxuICAgICAgICBsZXQgbGlzdDogYW55W10gPSBbXTtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaChwYXJhbXMucHJvZHVjdFR5cGUpIHtcbiAgICAgICAgICBjYXNlICdEQVRBX1JFU09VUkNFJzpcbiAgICAgICAgICBjYXNlICdEQVRBX1VTQUdFJzpcbiAgICAgICAgICBjYXNlICdEQVRBX0ZMT1cnOlxuICAgICAgICAgIGNhc2UgJ0RFVkVMT1BNRU5UJzpcbiAgICAgICAgICBjYXNlICdERUxJVkVSWSc6XG4gICAgICAgICAgY2FzZSAnUFJPRFVDVF9UUkFOU0FDVElPTic6XG4gICAgICAgICAgY2FzZSAnTE9XX1NFQ1VSSVRZJzpcbiAgICAgICAgICAgIGxpc3QgPSBsb3dTZWN1cml0eUV2aWRlbmNlTGlzdDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0hJR0hfU0VDVVJJVFknOlxuICAgICAgICAgICAgbGlzdCA9IGhpZ2hTZWN1cml0eUV2aWRlbmNlTGlzdDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBcdTlFRDhcdThCQTRcdThGRDRcdTU2REVcdTYyNDBcdTY3MDlcdTdDN0JcdTU3OEJcdTc2ODRcdTVCNThcdThCQzFcdTY1NzBcdTYzNkVcbiAgICAgICAgICAgIGxpc3QgPSBbXG4gICAgICAgICAgICAgICAgLi4ubG93U2VjdXJpdHlFdmlkZW5jZUxpc3QsIFxuICAgICAgICAgICAgICAgIC4uLmhpZ2hTZWN1cml0eUV2aWRlbmNlTGlzdFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhZ2VSZXN1bHQgPSBoYW5kbGVQYWdlUXVlcnkobGlzdCwgcGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3MocGFnZVJlc3VsdCk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignXHU1OTA0XHU3NDA2XHU1QjU4XHU4QkMxXHU1MjE3XHU4ODY4XHU4QkY3XHU2QzQyXHU2NUY2XHU1MUZBXHU5NTE5OicsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGNvZGU6IDUwMCxcbiAgICAgICAgICBtZXNzYWdlOiAnXHU2NzBEXHU1MkExXHU1NjY4XHU1MTg1XHU5MEU4XHU5NTE5XHU4QkVGJyxcbiAgICAgICAgICBkYXRhOiBudWxsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9LFxuICAvLyBcdTk3MDBcdTZDNDJcdTVCOUFcdTUyMzZcdTRFMEFcdTY3QjZcdTVCNThcdThCQzFcdTUyMTdcdTg4NjhcdTYzQTVcdTUzRTNcbiAge1xuICAgIHVybDogJy9hcGkvZXZpZGVuY2UvcmVxdWlyZW1lbnQvcHVibGlzaCcsXG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICByZXNwb25zZTogKHJlcSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1x1NjNBNVx1NjUzNlx1NTIzMFx1OTcwMFx1NkM0Mlx1NUI5QVx1NTIzNlx1NEUwQVx1NjdCNlx1NUI1OFx1OEJDMVx1NTIxN1x1ODg2OFx1OEJGN1x1NkM0MjonLCByZXEucXVlcnkpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gXHU5NzVFXHU1RTM4XHU4QkU2XHU3RUM2XHU3Njg0XHU2NUU1XHU1RkQ3XG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTU5MDRcdTc0MDZcdTk3MDBcdTZDNDJcdTVCOUFcdTUyMzZcdTRFMEFcdTY3QjZcdTVCNThcdThCQzFcdTUyMTdcdTg4NjhcdTY1NzBcdTYzNkUuLi4nKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1x1NTM5Rlx1NTlDQlx1NjU3MFx1NjM2RVx1OTU3Rlx1NUVBNjonLCByZXF1aXJlbWVudFB1Ymxpc2hFdmlkZW5jZUxpc3QubGVuZ3RoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1x1NjdFNVx1OEJFMlx1NTNDMlx1NjU3MDonLCBKU09OLnN0cmluZ2lmeShyZXEucXVlcnkpKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGhhbmRsZVBhZ2VRdWVyeShyZXF1aXJlbWVudFB1Ymxpc2hFdmlkZW5jZUxpc3QsIHJlcS5xdWVyeSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBcdThGRDRcdTU2REVcdTk3MDBcdTZDNDJcdTVCOUFcdTUyMzZcdTRFMEFcdTY3QjZcdTVCNThcdThCQzFcdTUyMTdcdTg4NjhcdTY1NzBcdTYzNkU6ICR7cmVzdWx0Lmxpc3QubGVuZ3RofSBcdTY3NjFcdThCQjBcdTVGNTVcdUZGMENcdTYwM0JcdThCQTEgJHtyZXN1bHQudG90YWx9IFx1Njc2MWApO1xuICAgICAgICBcbiAgICAgICAgLy8gXHU2ODA3XHU1MUM2QVBJXHU1NENEXHU1RTk0XHU2ODNDXHU1RjBGXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29kZTogMCxcbiAgICAgICAgICBtZXNzYWdlOiAnc3VjY2VzcycsXG4gICAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1x1NTkwNFx1NzQwNlx1OTcwMFx1NkM0Mlx1NUI5QVx1NTIzNlx1NEUwQVx1NjdCNlx1NUI1OFx1OEJDMVx1NTIxN1x1ODg2OFx1OEJGN1x1NkM0Mlx1NTFGQVx1OTUxOTonLCBlcnJvcik7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1x1OEJFNlx1N0VDNlx1OTUxOVx1OEJFRlx1NEZFMVx1NjA2RjonLCBlcnJvci5zdGFjayB8fCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGNvZGU6IDUwMCxcbiAgICAgICAgICBtZXNzYWdlOiAnXHU2NzBEXHU1MkExXHU1NjY4XHU1MTg1XHU5MEU4XHU5NTE5XHU4QkVGOicgKyAoZXJyb3IubWVzc2FnZSB8fCAnXHU2NzJBXHU3N0U1XHU5NTE5XHU4QkVGJyksXG4gICAgICAgICAgZGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLy8gXHU5NzAwXHU2QzQyXHU1QjlBXHU1MjM2XHU0RTBBXHU2N0I2XHU1QjU4XHU4QkMxXHU4QkU2XHU2MEM1XHU2M0E1XHU1M0UzXG4gIHtcbiAgICB1cmw6IFJlZ0V4cCgnL2FwaS9ldmlkZW5jZS9yZXF1aXJlbWVudC9wdWJsaXNoLy4qJyksXG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICByZXNwb25zZTogKHJlcSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXJsID0gcmVxLnVybDtcbiAgICAgICAgY29uc29sZS5sb2coJ1x1NjNBNVx1NjUzNlx1NTIzMFx1OTcwMFx1NkM0Mlx1NUI5QVx1NTIzNlx1NEUwQVx1NjdCNlx1NUI1OFx1OEJDMVx1OEJFNlx1NjBDNVx1OEJGN1x1NkM0Mlx1RkYwQ1VSTDonLCB1cmwpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZXZpZGVuY2VOb01hdGNoID0gdXJsLm1hdGNoKC9cXC9hcGlcXC9ldmlkZW5jZVxcL3JlcXVpcmVtZW50XFwvcHVibGlzaFxcLyhbXlxcL10rKS8pO1xuICAgICAgICBjb25zdCBldmlkZW5jZU5vID0gZXZpZGVuY2VOb01hdGNoID8gZXZpZGVuY2VOb01hdGNoWzFdIDogbnVsbDtcbiAgICAgICAgY29uc29sZS5sb2coJ1x1NjNEMFx1NTNENlx1NzY4NGV2aWRlbmNlTm86JywgZXZpZGVuY2VObyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIWV2aWRlbmNlTm8pIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdcdTY1RTBcdTZDRDVcdTRFQ0VVUkxcdTRFMkRcdTYzRDBcdTUzRDZldmlkZW5jZU5vXHU1M0MyXHU2NTcwJyk7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiA0MDAsXG4gICAgICAgICAgICBtZXNzYWdlOiAnXHU3RjNBXHU1QzExXHU1RkM1XHU4OTgxXHU1M0MyXHU2NTcwJyxcbiAgICAgICAgICAgIGRhdGE6IG51bGxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnXHU2N0U1XHU2MjdFXHU4QkIwXHU1RjU1XHVGRjBDZXZpZGVuY2VObzonLCBldmlkZW5jZU5vKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1x1NTNFRlx1NzUyOFx1NzY4NFx1OTcwMFx1NkM0Mlx1NUI5QVx1NTIzNlx1NEUwQVx1NjdCNlx1OEJCMFx1NUY1NVx1NjU3MDonLCByZXF1aXJlbWVudFB1Ymxpc2hFdmlkZW5jZUxpc3QubGVuZ3RoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFx1NEVDRVx1OTcwMFx1NkM0Mlx1NUI5QVx1NTIzNlx1NEUwQVx1NjdCNlx1NUI1OFx1OEJDMVx1NTIxN1x1ODg2OFx1NEUyRFx1NjdFNVx1NjI3RVx1NTMzOVx1OTE0RFx1NzY4NFx1OEJCMFx1NUY1NVxuICAgICAgICBjb25zdCBkZXRhaWwgPSByZXF1aXJlbWVudFB1Ymxpc2hFdmlkZW5jZUxpc3QuZmluZChpdGVtID0+IGl0ZW0uZXZpZGVuY2VObyA9PT0gZXZpZGVuY2VObyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTY3RTVcdTYyN0VcdTUyMzBcdTc2ODRcdThCRTZcdTYwQzU6JywgZGV0YWlsID8gJ1x1NjI3RVx1NTIzMFx1NjU3MFx1NjM2RScgOiAnXHU2NzJBXHU2MjdFXHU1MjMwXHU2NTcwXHU2MzZFJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIWRldGFpbCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdcdTVCNThcdThCQzFcdTUyMTdcdTg4NjhcdTRFMkRcdTc2ODRcdTYyNDBcdTY3MDlldmlkZW5jZU5vOicsIHJlcXVpcmVtZW50UHVibGlzaEV2aWRlbmNlTGlzdC5tYXAoaXRlbSA9PiBpdGVtLmV2aWRlbmNlTm8pLmpvaW4oJywgJykpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdcdTRGMjBcdTUxNjVcdTc2ODRldmlkZW5jZU5vOicsIGV2aWRlbmNlTm8pO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIFx1NUMxRFx1OEJENVx1OEZENFx1NTZERVx1N0IyQ1x1NEUwMFx1Njc2MVx1NjU3MFx1NjM2RVx1NEY1Q1x1NEUzQVx1NTkwN1x1NzUyOFx1NjVCOVx1Njg0OChcdTRFQzVcdTc1MjhcdTRFOEVcdThDMDNcdThCRDUpXG4gICAgICAgICAgY29uc3QgZmFsbGJhY2tEZXRhaWwgPSByZXF1aXJlbWVudFB1Ymxpc2hFdmlkZW5jZUxpc3RbMF07XG4gICAgICAgICAgY29uc29sZS5sb2coJ1x1NEY3Rlx1NzUyOGZhbGxiYWNrXHU2NTcwXHU2MzZFOicsIGZhbGxiYWNrRGV0YWlsPy5ldmlkZW5jZU5vKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBcdTU3MjhcdTVGMDBcdTUzRDFcdTczQUZcdTU4ODNcdTRFMkRcdUZGMENcdTRFM0FcdTRFODZcdTkwN0ZcdTUxNERcdTYyQTVcdTk1MTlcdUZGMENcdThGRDRcdTU2REVcdTdCMkNcdTRFMDBcdTY3NjFcdTY1NzBcdTYzNkVcbiAgICAgICAgICByZXR1cm4gc3VjY2VzcyhmYWxsYmFja0RldGFpbCB8fCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3MoZGV0YWlsKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdcdTU5MDRcdTc0MDZcdTk3MDBcdTZDNDJcdTVCOUFcdTUyMzZcdTRFMEFcdTY3QjZcdTVCNThcdThCQzFcdThCRTZcdTYwQzVcdThCRjdcdTZDNDJcdTY1RjZcdTUxRkFcdTk1MTk6JywgZXJyb3IpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCdcdThCRTZcdTdFQzZcdTk1MTlcdThCRUZcdTRGRTFcdTYwNkY6JywgZXJyb3Iuc3RhY2sgfHwgZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBjb2RlOiA1MDAsXG4gICAgICAgICAgbWVzc2FnZTogJ1x1NjcwRFx1NTJBMVx1NTY2OFx1NTE4NVx1OTBFOFx1OTUxOVx1OEJFRjonICsgKGVycm9yLm1lc3NhZ2UgfHwgJ1x1NjcyQVx1NzdFNVx1OTUxOVx1OEJFRicpLFxuICAgICAgICAgIGRhdGE6IG51bGxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIC8vIFx1OTcwMFx1NkM0Mlx1OEJBNFx1OTg4Nlx1OEJCMFx1NUY1NVx1NUI1OFx1OEJDMVx1NTIxN1x1ODg2OFx1NjNBNVx1NTNFM1xuICB7XG4gICAgdXJsOiAnL2FwaS9ldmlkZW5jZS9yZXF1aXJlbWVudC9jbGFpbScsXG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICByZXNwb25zZTogKHJlcSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1x1NjNBNVx1NjUzNlx1NTIzMFx1OTcwMFx1NkM0Mlx1OEJBNFx1OTg4Nlx1OEJCMFx1NUY1NVx1NUI1OFx1OEJDMVx1NTIxN1x1ODg2OFx1OEJGN1x1NkM0MjonLCByZXEucXVlcnkpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gXHU5NzVFXHU1RTM4XHU4QkU2XHU3RUM2XHU3Njg0XHU2NUU1XHU1RkQ3XG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTU5MDRcdTc0MDZcdTk3MDBcdTZDNDJcdThCQTRcdTk4ODZcdThCQjBcdTVGNTVcdTVCNThcdThCQzFcdTUyMTdcdTg4NjhcdTY1NzBcdTYzNkUuLi4nKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1x1NTM5Rlx1NTlDQlx1NjU3MFx1NjM2RVx1OTU3Rlx1NUVBNjonLCByZXF1aXJlbWVudENsYWltRXZpZGVuY2VMaXN0Lmxlbmd0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTY3RTVcdThCRTJcdTUzQzJcdTY1NzA6JywgSlNPTi5zdHJpbmdpZnkocmVxLnF1ZXJ5KSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZXN1bHQgPSBoYW5kbGVQYWdlUXVlcnkocmVxdWlyZW1lbnRDbGFpbUV2aWRlbmNlTGlzdCwgcmVxLnF1ZXJ5KTtcbiAgICAgICAgY29uc29sZS5sb2coYFx1OEZENFx1NTZERVx1OTcwMFx1NkM0Mlx1OEJBNFx1OTg4Nlx1OEJCMFx1NUY1NVx1NUI1OFx1OEJDMVx1NTIxN1x1ODg2OFx1NjU3MFx1NjM2RTogJHtyZXN1bHQubGlzdC5sZW5ndGh9IFx1Njc2MVx1OEJCMFx1NUY1NVx1RkYwQ1x1NjAzQlx1OEJBMSAke3Jlc3VsdC50b3RhbH0gXHU2NzYxYCk7XG4gICAgICAgIFxuICAgICAgICAvLyBcdTY4MDdcdTUxQzZBUElcdTU0Q0RcdTVFOTRcdTY4M0NcdTVGMEZcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb2RlOiAwLFxuICAgICAgICAgIG1lc3NhZ2U6ICdzdWNjZXNzJyxcbiAgICAgICAgICBkYXRhOiByZXN1bHRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignXHU1OTA0XHU3NDA2XHU5NzAwXHU2QzQyXHU4QkE0XHU5ODg2XHU4QkIwXHU1RjU1XHU1QjU4XHU4QkMxXHU1MjE3XHU4ODY4XHU4QkY3XHU2QzQyXHU1MUZBXHU5NTE5OicsIGVycm9yKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignXHU4QkU2XHU3RUM2XHU5NTE5XHU4QkVGXHU0RkUxXHU2MDZGOicsIGVycm9yLnN0YWNrIHx8IGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgY29kZTogNTAwLFxuICAgICAgICAgIG1lc3NhZ2U6ICdcdTY3MERcdTUyQTFcdTU2NjhcdTUxODVcdTkwRThcdTk1MTlcdThCRUY6JyArIChlcnJvci5tZXNzYWdlIHx8ICdcdTY3MkFcdTc3RTVcdTk1MTlcdThCRUYnKSxcbiAgICAgICAgICBkYXRhOiBudWxsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9LFxuICAvLyBcdTk3MDBcdTZDNDJcdThCQTRcdTk4ODZcdThCQjBcdTVGNTVcdTVCNThcdThCQzFcdThCRTZcdTYwQzVcdTYzQTVcdTUzRTNcbiAge1xuICAgIHVybDogUmVnRXhwKCcvYXBpL2V2aWRlbmNlL3JlcXVpcmVtZW50L2NsYWltLy4qJyksXG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICByZXNwb25zZTogKHJlcSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXJsID0gcmVxLnVybDtcbiAgICAgICAgY29uc29sZS5sb2coJ1x1NjNBNVx1NjUzNlx1NTIzMFx1OTcwMFx1NkM0Mlx1OEJBNFx1OTg4Nlx1OEJCMFx1NUY1NVx1NUI1OFx1OEJDMVx1OEJFNlx1NjBDNVx1OEJGN1x1NkM0Mlx1RkYwQ1VSTDonLCB1cmwpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZXZpZGVuY2VOb01hdGNoID0gdXJsLm1hdGNoKC9cXC9hcGlcXC9ldmlkZW5jZVxcL3JlcXVpcmVtZW50XFwvY2xhaW1cXC8oW15cXC9dKykvKTtcbiAgICAgICAgY29uc3QgZXZpZGVuY2VObyA9IGV2aWRlbmNlTm9NYXRjaCA/IGV2aWRlbmNlTm9NYXRjaFsxXSA6IG51bGw7XG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTYzRDBcdTUzRDZcdTc2ODRldmlkZW5jZU5vOicsIGV2aWRlbmNlTm8pO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFldmlkZW5jZU5vKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignXHU2NUUwXHU2Q0Q1XHU0RUNFVVJMXHU0RTJEXHU2M0QwXHU1M0Q2ZXZpZGVuY2VOb1x1NTNDMlx1NjU3MCcpO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogNDAwLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1x1N0YzQVx1NUMxMVx1NUZDNVx1ODk4MVx1NTNDMlx1NjU3MCcsXG4gICAgICAgICAgICBkYXRhOiBudWxsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1x1NjdFNVx1NjI3RVx1OEJCMFx1NUY1NVx1RkYwQ2V2aWRlbmNlTm86JywgZXZpZGVuY2VObyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTUzRUZcdTc1MjhcdTc2ODRcdThCQTRcdTk4ODZcdThCQjBcdTVGNTVcdTY1NzA6JywgcmVxdWlyZW1lbnRDbGFpbUV2aWRlbmNlTGlzdC5sZW5ndGgpO1xuICAgICAgICBcbiAgICAgICAgLy8gXHU0RUNFXHU5NzAwXHU2QzQyXHU4QkE0XHU5ODg2XHU4QkIwXHU1RjU1XHU1QjU4XHU4QkMxXHU1MjE3XHU4ODY4XHU0RTJEXHU2N0U1XHU2MjdFXHU1MzM5XHU5MTREXHU3Njg0XHU4QkIwXHU1RjU1XG4gICAgICAgIGNvbnN0IGRldGFpbCA9IHJlcXVpcmVtZW50Q2xhaW1FdmlkZW5jZUxpc3QuZmluZChpdGVtID0+IGl0ZW0uZXZpZGVuY2VObyA9PT0gZXZpZGVuY2VObyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTY3RTVcdTYyN0VcdTUyMzBcdTc2ODRcdThCRTZcdTYwQzU6JywgZGV0YWlsID8gJ1x1NjI3RVx1NTIzMFx1NjU3MFx1NjM2RScgOiAnXHU2NzJBXHU2MjdFXHU1MjMwXHU2NTcwXHU2MzZFJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIWRldGFpbCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdcdTVCNThcdThCQzFcdTUyMTdcdTg4NjhcdTRFMkRcdTc2ODRcdTYyNDBcdTY3MDlldmlkZW5jZU5vOicsIHJlcXVpcmVtZW50Q2xhaW1FdmlkZW5jZUxpc3QubWFwKGl0ZW0gPT4gaXRlbS5ldmlkZW5jZU5vKS5qb2luKCcsICcpKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnXHU0RjIwXHU1MTY1XHU3Njg0ZXZpZGVuY2VObzonLCBldmlkZW5jZU5vKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBcdTVDMURcdThCRDVcdThGRDRcdTU2REVcdTdCMkNcdTRFMDBcdTY3NjFcdTY1NzBcdTYzNkVcdTRGNUNcdTRFM0FcdTU5MDdcdTc1MjhcdTY1QjlcdTY4NDgoXHU0RUM1XHU3NTI4XHU0RThFXHU4QzAzXHU4QkQ1KVxuICAgICAgICAgIGNvbnN0IGZhbGxiYWNrRGV0YWlsID0gcmVxdWlyZW1lbnRDbGFpbUV2aWRlbmNlTGlzdFswXTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnXHU0RjdGXHU3NTI4ZmFsbGJhY2tcdTY1NzBcdTYzNkU6JywgZmFsbGJhY2tEZXRhaWw/LmV2aWRlbmNlTm8pO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIFx1NTcyOFx1NUYwMFx1NTNEMVx1NzNBRlx1NTg4M1x1NEUyRFx1RkYwQ1x1NEUzQVx1NEU4Nlx1OTA3Rlx1NTE0RFx1NjJBNVx1OTUxOVx1RkYwQ1x1OEZENFx1NTZERVx1N0IyQ1x1NEUwMFx1Njc2MVx1NjU3MFx1NjM2RVxuICAgICAgICAgIHJldHVybiBzdWNjZXNzKGZhbGxiYWNrRGV0YWlsIHx8IG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gc3VjY2VzcyhkZXRhaWwpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1x1NTkwNFx1NzQwNlx1OTcwMFx1NkM0Mlx1OEJBNFx1OTg4Nlx1OEJCMFx1NUY1NVx1NUI1OFx1OEJDMVx1OEJFNlx1NjBDNVx1OEJGN1x1NkM0Mlx1NjVGNlx1NTFGQVx1OTUxOTonLCBlcnJvcik7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1x1OEJFNlx1N0VDNlx1OTUxOVx1OEJFRlx1NEZFMVx1NjA2RjonLCBlcnJvci5zdGFjayB8fCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGNvZGU6IDUwMCxcbiAgICAgICAgICBtZXNzYWdlOiAnXHU2NzBEXHU1MkExXHU1NjY4XHU1MTg1XHU5MEU4XHU5NTE5XHU4QkVGOicgKyAoZXJyb3IubWVzc2FnZSB8fCAnXHU2NzJBXHU3N0U1XHU5NTE5XHU4QkVGJyksXG4gICAgICAgICAgZGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLy8gXHU2REZCXHU1MkEwXHU3NTI4XHU2MjM3XHU0RjUzXHU3Q0ZCXHU1QjU4XHU4QkMxXHU3NkY4XHU1MTczQVBJXG4gIHtcbiAgICB1cmw6ICcvYXBpL3YxL3VzZXItZXZpZGVuY2UvbGlzdCcsXG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICByZXNwb25zZTogKHJlcSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1x1NjNBNVx1NjUzNlx1NTIzMFx1NzUyOFx1NjIzN1x1NEY1M1x1N0NGQlx1NUI1OFx1OEJDMVx1NTIxN1x1ODg2OFx1OEJGN1x1NkM0MjonLCByZXEucXVlcnkpOyBcbiAgICAgIFxuICAgICAgLy8gXHU4OUUzXHU2NzkwXHU2N0U1XHU4QkUyXHU1M0MyXHU2NTcwXG4gICAgICBjb25zdCBwYXJhbXMgPSByZXEucXVlcnkgfHwge307XG4gICAgICBjb25zdCBwYWdlTnVtID0gcGFyc2VJbnQocGFyYW1zLnBhZ2VOdW0pIHx8IDE7XG4gICAgICBjb25zdCBwYWdlU2l6ZSA9IHBhcnNlSW50KHBhcmFtcy5wYWdlU2l6ZSkgfHwgMTA7XG4gICAgICBjb25zdCB1c2VyQWNjb3VudCA9IHBhcmFtcy51c2VyQWNjb3VudCB8fCAnJztcbiAgICAgIGNvbnN0IHVzZXJUeXBlID0gcGFyYW1zLnVzZXJUeXBlIHx8ICcnO1xuICAgICAgY29uc3QgYXV0aFN0YXR1cyA9IHBhcmFtcy5hdXRoU3RhdHVzIHx8ICcnO1xuICAgICAgY29uc3QgYXV0aFRpbWVTdGFydCA9IHBhcmFtcy5hdXRoVGltZVN0YXJ0IHx8ICcnO1xuICAgICAgY29uc3QgYXV0aFRpbWVFbmQgPSBwYXJhbXMuYXV0aFRpbWVFbmQgfHwgJyc7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdcdTU5MDRcdTc0MDZcdTc1MjhcdTYyMzdcdTRGNTNcdTdDRkJcdTVCNThcdThCQzFcdTUyMTdcdTg4NjhcdTY1NzBcdTYzNkUuLi4nKTtcbiAgICAgIFxuICAgICAgLy8gXHU2ODM5XHU2MzZFXHU2N0U1XHU4QkUyXHU2NzYxXHU0RUY2XHU4RkM3XHU2RUU0XHU2NTcwXHU2MzZFXG4gICAgICBsZXQgZmlsdGVyZWREYXRhID0gWy4uLnVzZXJFdmlkZW5jZUxpc3RdO1xuICAgICAgXG4gICAgICBpZiAodXNlckFjY291bnQpIHtcbiAgICAgICAgZmlsdGVyZWREYXRhID0gZmlsdGVyZWREYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0udXNlckFjY291bnQuaW5jbHVkZXModXNlckFjY291bnQpKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKHVzZXJUeXBlKSB7XG4gICAgICAgIGZpbHRlcmVkRGF0YSA9IGZpbHRlcmVkRGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLnVzZXJUeXBlID09PSB1c2VyVHlwZSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChhdXRoU3RhdHVzKSB7XG4gICAgICAgIGZpbHRlcmVkRGF0YSA9IGZpbHRlcmVkRGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLmF1dGhTdGF0dXMgPT09IGF1dGhTdGF0dXMpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoYXV0aFRpbWVTdGFydCAmJiBhdXRoVGltZUVuZCkge1xuICAgICAgICBmaWx0ZXJlZERhdGEgPSBmaWx0ZXJlZERhdGEuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgIGlmICghaXRlbS5hdXRoVGltZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZShpdGVtLmF1dGhUaW1lKS5nZXRUaW1lKCk7XG4gICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShhdXRoVGltZVN0YXJ0KS5nZXRUaW1lKCk7XG4gICAgICAgICAgY29uc3QgZW5kID0gbmV3IERhdGUoYXV0aFRpbWVFbmQpLmdldFRpbWUoKTtcbiAgICAgICAgICByZXR1cm4gdGltZSA+PSBzdGFydCAmJiB0aW1lIDw9IGVuZDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIFx1OEJBMVx1N0I5N1x1NTIwNlx1OTg3NVx1NjU3MFx1NjM2RVxuICAgICAgY29uc3Qgc3RhcnRJZHggPSAocGFnZU51bSAtIDEpICogcGFnZVNpemU7XG4gICAgICBjb25zdCBlbmRJZHggPSBzdGFydElkeCArIHBhZ2VTaXplO1xuICAgICAgY29uc3QgcGFnZURhdGEgPSBmaWx0ZXJlZERhdGEuc2xpY2Uoc3RhcnRJZHgsIGVuZElkeCk7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKGBcdThGRDRcdTU2REVcdTc1MjhcdTYyMzdcdTRGNTNcdTdDRkJcdTVCNThcdThCQzFcdTUyMTdcdTg4NjhcdTY1NzBcdTYzNkU6ICR7cGFnZURhdGEubGVuZ3RofSBcdTY3NjFcdThCQjBcdTVGNTVcdUZGMENcdTYwM0JcdThCQTEgJHtmaWx0ZXJlZERhdGEubGVuZ3RofSBcdTY3NjFgKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29kZTogMCxcbiAgICAgICAgbWVzc2FnZTogJ3N1Y2Nlc3MnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbGlzdDogcGFnZURhdGEsXG4gICAgICAgICAgdG90YWw6IGZpbHRlcmVkRGF0YS5sZW5ndGhcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIC8vIFx1ODNCN1x1NTNENlx1NzUyOFx1NjIzN1x1NEY1M1x1N0NGQlx1NUI1OFx1OEJDMVx1OEJFNlx1NjBDNVxuICB7XG4gICAgdXJsOiBSZWdFeHAoJy9hcGkvdjEvdXNlci1ldmlkZW5jZS9kZXRhaWwvKC4qKScpLFxuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgcmVzcG9uc2U6IChyZXEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdcdTYzQTVcdTY1MzZcdTUyMzBcdTc1MjhcdTYyMzdcdTRGNTNcdTdDRkJcdTVCNThcdThCQzFcdThCRTZcdTYwQzVcdThCRjdcdTZDNDJcdUZGMENVUkw6JywgcmVxLnVybCk7XG4gICAgICBcbiAgICAgIC8vIFx1NEVDRVVSTFx1NEUyRFx1NjNEMFx1NTNENlx1NUI1OFx1OEJDMVx1N0YxNlx1NTNGN1xuICAgICAgY29uc3QgbWF0Y2ggPSByZXEudXJsLm1hdGNoKC9cXC9hcGlcXC92MVxcL3VzZXItZXZpZGVuY2VcXC9kZXRhaWxcXC8oW14/XSspLyk7XG4gICAgICBjb25zdCBldmlkZW5jZU5vID0gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnO1xuICAgICAgY29uc29sZS5sb2coJ1x1NjNEMFx1NTNENlx1NzY4NGV2aWRlbmNlTm86JywgZXZpZGVuY2VObyk7XG4gICAgICBcbiAgICAgIC8vIFx1NjdFNVx1NjI3RVx1NUJGOVx1NUU5NFx1NzY4NFx1OEJCMFx1NUY1NVxuICAgICAgY29uc29sZS5sb2coJ1x1NjdFNVx1NjI3RVx1OEJCMFx1NUY1NVx1RkYwQ2V2aWRlbmNlTm86JywgZXZpZGVuY2VObyk7XG4gICAgICBjb25zb2xlLmxvZygnXHU1M0VGXHU3NTI4XHU3Njg0XHU3NTI4XHU2MjM3XHU0RjUzXHU3Q0ZCXHU1QjU4XHU4QkMxXHU4QkIwXHU1RjU1XHU2NTcwOicsIHVzZXJFdmlkZW5jZUxpc3QubGVuZ3RoKTtcbiAgICAgIFxuICAgICAgY29uc3QgZGV0YWlsID0gdXNlckV2aWRlbmNlTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5ldmlkZW5jZU5vID09PSBldmlkZW5jZU5vKTtcbiAgICAgIFxuICAgICAgY29uc29sZS5sb2coJ1x1NjdFNVx1NjI3RVx1NTIzMFx1NzY4NFx1OEJFNlx1NjBDNTonLCBkZXRhaWwgPyAnXHU2MjdFXHU1MjMwXHU2NTcwXHU2MzZFJyA6ICdcdTY3MkFcdTYyN0VcdTUyMzBcdTY1NzBcdTYzNkUnKTtcbiAgICAgIFxuICAgICAgaWYgKGRldGFpbCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvZGU6IDAsXG4gICAgICAgICAgbWVzc2FnZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIGRhdGE6IGRldGFpbFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb2RlOiA0MDQsXG4gICAgICAgICAgbWVzc2FnZTogJ1x1NjcyQVx1NjI3RVx1NTIzMFx1NUJGOVx1NUU5NFx1NzY4NFx1NUI1OFx1OEJDMVx1OEJCMFx1NUY1NScsXG4gICAgICAgICAgZGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLy8gXHU1QkZDXHU1MUZBXHU3NTI4XHU2MjM3XHU0RjUzXHU3Q0ZCXHU1QjU4XHU4QkMxXHU1MjE3XHU4ODY4XG4gIHtcbiAgICB1cmw6ICcvYXBpL3YxL3VzZXItZXZpZGVuY2UvZXhwb3J0JyxcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIHJlc3BvbnNlOiAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnXHU2M0E1XHU2NTM2XHU1MjMwXHU1QkZDXHU1MUZBXHU3NTI4XHU2MjM3XHU0RjUzXHU3Q0ZCXHU1QjU4XHU4QkMxXHU1MjE3XHU4ODY4XHU4QkY3XHU2QzQyJyk7XG4gICAgICBcbiAgICAgIC8vIE1vY2tcdTVCRkNcdTUxRkFcdTUyOUZcdTgwRkRcdUZGMENcdThGRDRcdTU2REVcdTYyMTBcdTUyOUZcdTZEODhcdTYwNkZcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvZGU6IDAsXG4gICAgICAgIG1lc3NhZ2U6ICdzdWNjZXNzJyxcbiAgICAgICAgZGF0YTogbmV3IEJsb2IoWydcdTc1MjhcdTYyMzdcdTRGNTNcdTdDRkJcdTVCNThcdThCQzFcdTVCRkNcdTUxRkFcdTY1NzBcdTYzNkVcdTZBMjFcdTYyREYnXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJyB9KVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIC8vIFx1NTIyMFx1OTY2NFx1NzUyOFx1NjIzN1x1NEY1M1x1N0NGQlx1NUI1OFx1OEJDMVxuICB7XG4gICAgdXJsOiBSZWdFeHAoJy9hcGkvdjEvdXNlci1ldmlkZW5jZS9kZWxldGUvKC4qKScpLFxuICAgIG1ldGhvZDogJ2RlbGV0ZScsXG4gICAgcmVzcG9uc2U6IChyZXEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdcdTYzQTVcdTY1MzZcdTUyMzBcdTUyMjBcdTk2NjRcdTc1MjhcdTYyMzdcdTRGNTNcdTdDRkJcdTVCNThcdThCQzFcdThCRjdcdTZDNDJcdUZGMENVUkw6JywgcmVxLnVybCk7XG4gICAgICBcbiAgICAgIC8vIFx1NEVDRVVSTFx1NEUyRFx1NjNEMFx1NTNENlx1NUI1OFx1OEJDMVx1N0YxNlx1NTNGN1xuICAgICAgY29uc3QgbWF0Y2ggPSByZXEudXJsLm1hdGNoKC9cXC9hcGlcXC92MVxcL3VzZXItZXZpZGVuY2VcXC9kZWxldGVcXC8oW14/XSspLyk7XG4gICAgICBjb25zdCBldmlkZW5jZU5vID0gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnO1xuICAgICAgXG4gICAgICBjb25zb2xlLmxvZygnXHU1MjIwXHU5NjY0XHU3Njg0ZXZpZGVuY2VObzonLCBldmlkZW5jZU5vKTtcbiAgICAgIFxuICAgICAgLy8gXHU2QTIxXHU2MkRGXHU1MjIwXHU5NjY0XHU2NENEXHU0RjVDXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb2RlOiAwLFxuICAgICAgICBtZXNzYWdlOiAnc3VjY2VzcycsXG4gICAgICAgIGRhdGE6IG51bGxcbiAgICAgIH07XG4gICAgfVxuICB9XG5dIGFzIE1vY2tNZXRob2RbXSAiXSwKICAibWFwcGluZ3MiOiAiO0FBSUEsSUFBTSxzQkFBMkM7RUFDL0MsSUFBSTtFQUNKLGFBQWE7RUFDYixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtJQUNqQjtJQUNBO0lBQ0E7SUFDQTtFQUNGO0VBQ0EsVUFBVTtJQUNSO01BQ0UsU0FBUztNQUNULFlBQVk7TUFDWixlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxTQUFTO01BQ1QsWUFBWTtNQUNaLGVBQWU7SUFDakI7SUFDQTtNQUNFLFNBQVM7TUFDVCxZQUFZO01BQ1osZUFBZTtJQUNqQjtFQUNGO0VBQ0EsYUFBYTtJQUNYO01BQ0UsTUFBTTtNQUNOLE1BQU07TUFDTixTQUFTO0lBQ1g7SUFDQTtNQUNFLE1BQU07TUFDTixNQUFNO01BQ04sU0FBUztJQUNYO0VBQ0Y7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
