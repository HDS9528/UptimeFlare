
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "洋芋蛋蛋的服务状态页",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://gsyy.eu.org', label: '洋芋蛋蛋主站' },
    { link: 'https://map.gsyy.eu.org', label: '旅行足迹' },
    { link: 'mailto:chenxiangyang2017@outlook.com', label: 'Email Me', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // 洋芋蛋蛋主站
    {
      id: 'gsyy_main',
      name: '洋芋蛋蛋主站',
      method: 'GET',
      target: 'https://gsyy.eu.org',
      tooltip: '洋芋蛋蛋个人博客/技术分享站',
      statusPageLink: 'https://gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // 黑老大的旅行足迹
    {
      id: 'gsyy_map',
      name: '黑老大的旅行足迹',
      method: 'GET',
      target: 'https://map.gsyy.eu.org',
      tooltip: '旅行足迹地图服务',
      statusPageLink: 'https://map.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // Bark推送工具
    {
      id: 'gsyy_bark',
      name: 'Bark推送工具',
      method: 'GET',
      target: 'https://bark.gsyy.eu.org',
      tooltip: 'Bark推送服务接口',
      statusPageLink: 'https://bark.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
      responseKeyword: 'ok',
    },
    // 必应壁纸
    {
      id: 'gsyy_image',
      name: '必应壁纸服务',
      method: 'GET',
      target: 'https://image.gsyy.eu.org',
      tooltip: '必应壁纸相关服务',
      statusPageLink: 'https://image.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // GitHub文件加速
    {
      id: 'gsyy_github',
      name: 'GitHub文件加速',
      method: 'GET',
      target: 'https://github.gsyy.eu.org',
      tooltip: '基于Cloudflare的GitHub加速工具',
      statusPageLink: 'https://github.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // Docker代理
    {
      id: 'gsyy_docker',
      name: 'Docker代理服务',
      method: 'GET',
      target: 'https://docker.gsyy.eu.org',
      tooltip: 'Docker镜像代理服务',
      statusPageLink: 'https://docker.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
  ],
  // [Optional] Notification settings
  notification: {
    // [Optional] Notification webhook settings, if not specified, no notification will be sent
    webhook: {
      // 你的Bark推送专属地址
      url: 'https://bark.gsyy.eu.org/y5Lf3dVoTARBd5ytu2po5X',
      method: 'GET',
      payloadType: 'param',
      payload: {
        title: '服务状态提醒',
        body: '$MSG',
        sound: 'bell',
        isArchive: 1,
      },
      timeout: 10000,
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 5,
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature

const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
