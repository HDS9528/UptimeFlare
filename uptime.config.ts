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
  // 如果不配置，所有监控项会显示在同一个列表中
  // 如果配置了，监控项会按分组展示和排序；未列入分组的监控项会隐藏（但仍会继续监控）
  group: {
    '🌐 核心站点': ['gsyy_main'],
    '🗺️ 特色服务': ['gsyy_map'],
    '🔧 工具服务': [
      'gsyy_bark', 
      'gsyy_image', 
      'gsyy_analytics', 
      'gsyy_gallery', 
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
    // [可选] 即将到来的维护提醒的颜色，默认值为 'gray'（灰色）
    // 正在进行的维护提醒始终使用 MaintenanceConfig 中指定的颜色
    upcomingColor: 'gray',
  },
  // [可选] 自定义页脚HTML内容
   customFooter: '<p>洋芋蛋蛋的服务监控 © 2026</p>',
}

/**
 * 监控 Worker 配置
 * 定义监控项、通知规则、回调函数等核心功能
 */
const workerConfig: WorkerConfig = {
  // [可选] 除非状态发生变化，否则每隔N分钟写入一次KV存储，默认值为3
  kvWriteCooldownMinutes: 3,
  // 取消下面这行的注释可以为状态页和API启用HTTP基本认证，格式为 `<用户名>:<密码>`
  // passwordProtection: 'yangyu:123456',
  // 在这里定义所有监控项
  monitors: [
    // ========== 核心站点 ==========
    {
      // `id` 必须唯一；如果`id`保持不变，监控历史数据会被保留
      id: 'gsyy_main',
      // `name` 会显示在状态页和回调消息中
      name: '洋芋蛋蛋主站',
      // `method` 必须是有效的HTTP请求方法
      method: 'GET',
      // `target` 是有效的URL地址
      target: 'https://gsyy.eu.org',
      // [可选] `tooltip` 仅在状态页中显示为该监控项的悬浮提示
      tooltip: '核心站点 | 洋芋蛋蛋个人博客/技术分享站',
      // [可选] `statusPageLink` 仅用于状态页中该监控项的点击跳转链接
      statusPageLink: 'https://gsyy.eu.org',
      // [可选] 如果设置为true，会隐藏该监控项在状态页中的延迟图表
      hideLatencyChart: false,
      // [可选] `expectedCodes` 是可接受的HTTP响应码数组，未指定时默认接受所有2xx状态码
      expectedCodes: [200],
      // [可选] 超时时间（毫秒），未指定时默认值为10000（10秒）
      timeout: 10000,
      // [可选] 要发送的请求头
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
      // [可选] 如果指定了该字段，响应内容必须包含此关键词才会被判定为正常
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
      id: 'gsyy_gallery',
      name: '图库服务',
      method: 'GET',
      target: 'https://gallery.gsyy.eu.org',
      tooltip: '工具服务 | 个人图库/图片托管服务',
      statusPageLink: 'https://gallery.gsyy.eu.org',
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

// [可选] 通知相关配置
notification: {
  // [可选] 通知Webhook配置；如果不配置，将不会发送任何通知
  // 更多信息参考Wiki：https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
  webhook: {
    // [必填] Webhook地址（Bark推送地址，末尾加/兼容所有版本）
    url: 'https://bark.gsyy.eu.org/y5Lf3dVoTARBd5ytu2po5X/',
    // [可选] HTTP请求方法；当payloadType=param时默认是'GET'
    method: 'GET',
    // [可选] 要发送的请求头（Bark GET接口无需额外请求头）
    headers: {},
    // [必填] 指定载荷（payload）的编码方式
    payloadType: 'param', // GET方式用param，参数拼URL
    // [必填] 要发送的载荷内容（适配Bark GET接口参数）
    // $MSG 会被自动替换为人类可读的通知消息
    payload: {
      title: '服务状态提醒',
      text: '$MSG', // Bark GET接口标准参数名（示例里是text，和这里一致）
      sound: 'bell',
      isArchive: '1',
      group: '网站监控',
      url: 'https://up.gsyy.eu.org'
    },
    // [可选] 调用Webhook的超时时间（毫秒），默认值为5000（5秒）
    timeout: 10000,
  },
  // [可选] 通知消息中使用的时区，默认值为 "Etc/GMT"
  timeZone: 'Asia/Shanghai',
  // [可选] 发送通知前的宽限期（分钟）
  gracePeriod: 0, // 测试阶段设0，排查完改回5
  // [可选] 禁用指定ID的监控项的通知功能
  // skipNotificationIds: ['gsyy_main'],
  // [可选] 在故障期间，如果错误原因发生变化，是否抑制额外的通知；默认值为false
  skipErrorChangeNotification: false,
},
callbacks: {
  onStatusChange: async (
    env: any,
    monitor: any,
    isUp: boolean,
    timeIncidentStart: number,
    timeNow: number,
    reason: string
  ) => {
    // 可选：添加日志，方便排查推送问题
    console.log(`监控项 ${monitor.id} 状态变化：${isUp ? '恢复' : '故障'}，原因：${reason}`);
  },
  onIncident: async (
    env: any,
    monitor: any,
    timeIncidentStart: number,
    timeNow: number,
    reason: string
  ) => {
    // 可选：故障持续时的自定义逻辑
  },
},

  

/**
 * 维护窗口配置
 * 维护期间状态页会显示提示，且跳过故障通知
 */
const maintenances: MaintenanceConfig[] = [
  // 示例维护配置（按需启用）
  // {
  //   // [可选] 受此维护计划影响的监控项ID列表
  //   monitors: ['gsyy_main'],
  //   // [可选] 未指定时默认显示 "Scheduled Maintenance"（计划内维护）
  //   title: '服务器例行维护',
  //   // 维护说明，会显示在状态页上
  //   body: '服务器软件升级，预计持续1小时',
  //   // 维护开始时间，支持UNIX时间戳或ISO 8601格式
  //   start: '2026-04-01T00:00:00+08:00',
  //   // [可选] 维护结束时间
  //   end: '2026-04-01T01:00:00+08:00',
  //   // [可选] 状态页上维护提醒的颜色，默认值为 "yellow"（黄色）
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

// 不要删除这行代码，否则编译会失败
export { maintenances, pageConfig, workerConfig }
