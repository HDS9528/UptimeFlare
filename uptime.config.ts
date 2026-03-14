// UptimeFlare 状态页配置文件
// 简化版配置，完整功能参考 `uptime.config.full.ts`

// 导入必要的类型定义（请勿修改）
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

/**
 * 状态页面配置
 * 控制前端展示的标题、链接等信息
 */
const pageConfig: PageConfig = {
  title: "洋芋蛋蛋的服务状态页",
  links: [
    { link: 'https://gsyy.eu.org/', label: '洋芋蛋蛋主站' },
    { link: 'https://map.gsyy.eu.org/', label: '旅行足迹' },
    { link: 'mailto:chenxiangyang2017@outlook.com', label: '联系我', highlight: true },
  ],
}

/**
 * 监控 Worker 配置
 * 定义监控项、通知规则等核心功能
 */
const workerConfig: WorkerConfig = {
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
  // Bark通知配置
  notification: {
    webhook: {
      url: 'https://bark.gsyy.eu.org/y5Lf3dVoTARBd5ytu2po5X',
      method: 'GET',
      payloadType: 'param',
      payload: {
        title: '服务状态提醒',
        body: '$MSG',
        sound: 'bell',
        isArchive: 1
      },
      timeout: 10000,
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 5,
  },
} // ========== 这里是关键！必须有这个闭合大括号 ==========

/**
 * 维护窗口配置
 */
const maintenances: MaintenanceConfig[] = [
  // 示例维护配置（取消注释可启用）
  // {
  //   monitors: ['gsyy_main'],
  //   title: '服务器维护',
  //   body: '服务器例行维护，预计持续1小时',
  //   start: '2024-01-01T00:00:00+08:00',
  //   end: '2024-01-01T01:00:00+08:00',
  //   color: 'blue',
  // },
]

// 导出配置（请勿修改）
export { maintenances, pageConfig, workerConfig }
