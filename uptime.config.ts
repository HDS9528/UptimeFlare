// 导入必要的类型定义（请勿修改）
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

/**
 * 状态页面配置
 * 控制前端展示的标题、链接、分组等信息
 */
const pageConfig: PageConfig = {
  // 状态页的标题
  title: "洋芋蛋蛋的服务状态页",
  // 显示在状态页头部的链接，可以将 `highlight` 设置为 `true` 来突出显示
  links: [
    { link: 'https://gsyy.eu.org/', label: '洋芋蛋蛋主站' },
    { link: 'https://map.gsyy.eu.org/', label: '旅行足迹' },
    { link: 'mailto:chenxiangyang2017@outlook.com', label: '联系我', highlight: true },
  ],
  // [可选] 对监控项进行分组
  group: {
    '🌐 核心站点': ['gsyy_main'],
    '🗺️ 特色服务': ['gsyy_map'],
    '🔧 工具服务': [
      'gsyy_bark', 
      'gsyy_image', 
      'gsyy_analytics', 
      'gsyy_imbad', 
      'gsyy_memos', 
      'gsyy_cloudpaste'
    ],
    '💻 开发工具': ['gsyy_github', 'gsyy_docker']
  },

  // [可选] 设置网站图标的路径，未指定时默认使用 '/favicon.png'
  // favicon: 'https://gsyy.eu.org/favicon.ico',
  // [可选] 设置Logo的路径，未指定时默认使用 '/logo.svg'
  // logo: 'https://gsyy.eu.org/logo.svg',
  // [可选] 维护相关配置
  maintenances: {
    upcomingColor: 'gray',
  },
  // [可选] 自定义页脚HTML内容
  //customFooter: '<p>洋芋蛋蛋的服务监控 © 2026</p>',
}

/**
 * 监控 Worker 配置
 * 定义监控项、通知规则、回调函数等核心功能
 */
const workerConfig: WorkerConfig = {
  // [可选] 除非状态发生变化，否则每隔N分钟写入一次KV存储，默认值为3
  kvWriteCooldownMinutes: 3,
  // 取消下面这行的注释可以为状态页和API启用HTTP基本认证
  // passwordProtection: 'yangyu:123456',
  // 在这里定义所有监控项
  monitors: [
    // ========== 核心站点 ==========
    {
      id: 'gsyy_main',
      name: '洋芋蛋蛋主站',
      method: 'GET',
      target: 'https://gsyy.eu.org',
      tooltip: '核心站点 | 洋芋蛋蛋个人博客/技术分享站',
      statusPageLink: 'https://gsyy.eu.org',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        'X-Monitor-Group': '核心站点'
      },
    },

    // ========== 特色服务 ==========
    {
      id: 'gsyy_map',
      name: '黑老大的旅行足迹',
      method: 'GET',
      target: 'https://map.gsyy.eu.org',
      tooltip: '特色服务 | 旅行足迹地图服务',
      statusPageLink: 'https://map.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        'X-Monitor-Group': '特色服务'
      },
    },

    // ========== 工具服务 ==========
    {
      id: 'gsyy_bark',
      name: 'Bark推送工具',
      method: 'GET',
      target: 'https://bark.gsyy.eu.org',
      tooltip: '工具服务 | Bark推送服务接口',
      statusPageLink: 'https://bark.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        'X-Monitor-Group': '工具服务'
      },
      responseKeyword: 'ok',
    },
    {
      id: 'gsyy_image',
      name: '必应壁纸服务',
      method: 'GET',
      target: 'https://image.gsyy.eu.org',
      tooltip: '工具服务 | 必应壁纸相关服务',
      statusPageLink: 'https://image.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        'X-Monitor-Group': '工具服务'
      },
    },
    {
      id: 'gsyy_analytics',
      name: '网站分析服务',
      method: 'GET',
      target: 'https://analytics.gsyy.eu.org',
      tooltip: '工具服务 | 网站访问数据分析服务',
      statusPageLink: 'https://analytics.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        'X-Monitor-Group': '工具服务'
      },
    },
    {
      id: 'gsyy_imbad',
      name: '图床服务',
      method: 'GET',
      target: 'https://imbad.gsyy.eu.org/',
      tooltip: '工具服务 | 图床服务',
      statusPageLink: 'https://imbad.gsyy.eu.org/',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        'X-Monitor-Group': '工具服务'
      },
    },
    {
      id: 'gsyy_memos',
      name: 'Memos笔记服务',
      method: 'GET',
      target: 'https://memos.gsyy.eu.org',
      tooltip: '工具服务 | 轻量级笔记/备忘录服务',
      statusPageLink: 'https://memos.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        'X-Monitor-Group': '工具服务'
      },
    },
    {
      id: 'gsyy_cloudpaste',
      name: '云粘贴板服务',
      method: 'GET',
      target: 'https://cloudpaste.gsyy.eu.org',
      tooltip: '工具服务 | 跨设备云粘贴板工具',
      statusPageLink: 'https://cloudpaste.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        'X-Monitor-Group': '工具服务'
      },
    },

    // ========== 开发工具 ==========
    {
      id: 'gsyy_github',
      name: 'GitHub文件加速',
      method: 'GET',
      target: 'https://github.gsyy.eu.org',
      tooltip: '开发工具 | 基于Cloudflare的GitHub加速工具',
      statusPageLink: 'https://github.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        'X-Monitor-Group': '开发工具'
      },
    },
    {
      id: 'gsyy_docker',
      name: 'Docker代理服务',
      method: 'GET',
      target: 'https://docker.gsyy.eu.org',
      tooltip: '开发工具 | Docker镜像代理服务',
      statusPageLink: 'https://docker.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        'X-Monitor-Group': '开发工具'
      },
    },
  ],

  // [可选] 通知相关配置（修正缩进，和monitors同级）
  notification: {
    webhook: {
      url: 'https://bark.gsyy.eu.org/y5Lf3dVoTARBd5ytu2po5X/',
      method: 'GET',
      headers: {},
      payloadType: 'param',
      payload: {
        title: '服务状态提醒',
        body: '$MSG',
        sound: 'bell',
        isArchive: '1',
        group: '网站监控',
        url: 'https://up.gsyy.eu.org',
        icon: 'https://cdn.jsdelivr.net/gh/DIYgod/Bark@master/assets/icon.png'
      },
      timeout: 10000,
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 3,
    skipErrorChangeNotification: false,
  },

  // [可选] 状态变化回调函数（修正缩进，和notification同级）
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      console.log(`监控项 ${monitor.id} 状态变化：${isUp ? '恢复' : '故障'}，原因：${reason}`);
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // 故障持续逻辑
    },
  },
} // ← 关键：补全workerConfig的闭合}

/**
 * 维护窗口配置
 * 维护期间状态页会显示提示，且跳过故障通知
 */
const maintenances: MaintenanceConfig[] = [
  // 示例维护配置（按需启用）
  // {
  //   monitors: ['gsyy_main'],
  //   title: '服务器例行维护',
  //   body: '服务器软件升级，预计持续1小时',
  //   start: '2026-04-01T00:00:00+08:00',
  //   end: '2026-04-01T01:00:00+08:00',
  //   color: 'blue',
  // },
  // 示例：每月1日凌晨1点到3点的例行维护
  ...(function () {
    const schedules = []
    const today = new Date()

    for (let i = 0; i <= 2; i++) {
      const date = new Date(today.getFullYear(), today.getMonth() + i, 1)
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')

      schedules.push({
        title: `${year}/${month} 例行维护`,
        monitors: ['gsyy_github', 'gsyy_docker'],
        body: '开发工具类服务每月例行维护',
        start: `${year}-${month}-01T01:00:00.000+08:00`,
        end: `${year}-${month}-01T03:00:00.000+08:00`,
        color: 'gray',
      })
    }
    return schedules
  })(),
]

// 导出配置（请勿修改）
export { maintenances, pageConfig, workerConfig }
