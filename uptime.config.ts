// 导入必要的类型定义（请勿修改）
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

/**
 * 状态页面配置
 */
const pageConfig: PageConfig = {
  title: "洋芋蛋蛋的服务状态页",
  links: [
    { link: 'https://gsyy.eu.org/', label: '洋芋蛋蛋主站' },
    { link: 'https://map.gsyy.eu.org/', label: '旅行足迹' },
    { link: 'mailto:chenxiangyang2017@outlook.com', label: '联系我', highlight: true },
  ],
  group: {
    '🌐 核心站点': ['gsyy_main'],
    '🗺️ 特色服务': ['gsyy_map'],
    '🔧 工具服务': [
      'gsyy_bark', 
      'gsyy_image', 
      'gsyy_analytics', 
      'gsyy_imbad', 
      'gsyy_memos', 
      'gsyy_ip',
      'gsyy_moepush',
      'gsyy_nodewarden',
      'gsyy_sms',
      'gsyy_newsnow',
      'gsyy_chat',
      'gsyy_movecar'
    ],
    '💻 开发工具': [
      'gsyy_github', 
      'gsyy_docker', 
      'gsyy_workers',
      'gsyy_renewhelper'
    ]
  },
  maintenances: { upcomingColor: 'gray' },
}

/**
 * 监控 Worker 配置
 */
const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    // ========== 核心站点 ==========
    {
      id: 'gsyy_main',
      name: '洋芋蛋蛋主站',
      method: 'GET',
      target: 'https://gsyy.eu.org',
      tooltip: '核心站点 | 洋芋蛋蛋个人博客/技术分享站',
      statusPageLink: 'https://gsyy.eu.org',
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
      name: '笔记服务',
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
      id: 'gsyy_ip',
      name: 'IP地址查询服务',
      method: 'GET',
      target: 'https://ip.gsyy.eu.org',
      tooltip: '工具服务 | IP地址查询/定位服务',
      statusPageLink: 'https://ip.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        'X-Monitor-Group': '工具服务'
      },
    },
    {
      id: 'gsyy_moepush',
      name: '萌推消息推送服务',
      method: 'GET',
      target: 'https://moepush.gsyy.eu.org',
      tooltip: '工具服务 | 萌推消息推送接口服务',
      statusPageLink: 'https://moepush.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        'X-Monitor-Group': '工具服务'
      },
    },
    {
      id: 'gsyy_nodewarden',
      name: 'Bitwarden密码管理',
      method: 'GET',
      target: 'https://nodewarden.gsyy.eu.org',
      tooltip: '工具服务 | NodeWarden (Bitwarden兼容) 密码管理服务',
      statusPageLink: 'https://nodewarden.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        'X-Monitor-Group': '工具服务'
      },
    },
    // 新增：信息转发推送服务
    {
      id: 'gsyy_sms',
      name: '信息转发推送服务',
      method: 'GET',
      target: 'https://sms.gsyy.eu.org/health',
      tooltip: '工具服务 | 信息转发推送健康检测接口',
      statusPageLink: 'https://sms.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        'X-Monitor-Group': '工具服务'
      },
      responseKeyword: 'ok',
    },
    // 新增：每日新闻
    {
      id: 'gsyy_newsnow',
      name: '每日新闻',
      method: 'GET',
      target: 'https://newsnow.gsyy.eu.org',
      tooltip: '工具服务 | 每日新闻资讯服务',
      statusPageLink: 'https://newsnow.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        'X-Monitor-Group': '工具服务'
      },
    },
    // 新增：在线聊天室
    {
      id: 'gsyy_chat',
      name: '在线聊天室',
      method: 'GET',
      target: 'https://chat.gsyy.eu.org',
      tooltip: '工具服务 | 在线聊天室服务',
      statusPageLink: 'https://chat.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        'X-Monitor-Group': '工具服务'
      },
    },
    // 新增：挪车服务
    {
      id: 'gsyy_movecar',
      name: '挪车服务',
      method: 'GET',
      target: 'https://movecar.gsyy.eu.org',
      tooltip: '工具服务 | 匿名挪车通知服务',
      statusPageLink: 'https://movecar.gsyy.eu.org',
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
      tooltip: '开发工具 | GitHub加速工具',
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
    {
      id: 'gsyy_workers',
      name: 'Cloudflare Workers服务',
      method: 'GET',
      target: 'https://workers.gsyy.eu.org/',
      tooltip: '开发工具 | Cloudflare Workers 自定义服务',
      statusPageLink: 'https://workers.gsyy.eu.org/',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        'X-Monitor-Group': '开发工具'
      },
    },
    {
      id: 'gsyy_renewhelper',
      name: '续期服务助手',
      method: 'GET',
      target: 'https://renewhelper.gsyy.eu.org',
      tooltip: '开发工具 | 自动续期辅助服务',
      statusPageLink: 'https://renewhelper.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        'X-Monitor-Group': '开发工具'
      },
    },
  ],

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
        icon: 'https://day.app/assets/images/avatar.jpg'
      },
      timeout: 10000,
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 3,
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
      console.log(`监控项 ${monitor.id} 状态变化：${isUp ? '恢复' : '故障'}，原因：${reason}`);
    },
    onIncident: async () => {},
  },
}

/**
 * 维护窗口配置
 */
const maintenances: MaintenanceConfig[] = [
  ...(function () {
    const schedules = []
    const today = new Date()
    for (let i = 0; i <= 2; i++) {
      const date = new Date(today.getFullYear(), today.getMonth() + i, 1)
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')

      schedules.push({
        title: `${year}/${month} 例行维护`,
        monitors: [
          'gsyy_github', 
          'gsyy_docker', 
          'gsyy_workers',
          'gsyy_renewhelper',
          'gsyy_ip',
          'gsyy_moepush',
          'gsyy_nodewarden',
          'gsyy_sms',
          'gsyy_newsnow',
          'gsyy_chat',
          'gsyy_movecar'
        ], 
        body: '开发工具+工具服务每月例行维护',
        start: `${year}-${month}-01T01:00:00.000+08:00`,
        end: `${year}-${month}-01T03:00:00.000+08:00`,
        color: 'gray',
      })
    }
    return schedules
  })(),
]

export { maintenances, pageConfig, workerConfig }
