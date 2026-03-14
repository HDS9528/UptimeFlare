// UptimeFlare 状态页配置文件
// 简化版配置，完整功能参考 `uptime.config.full.ts`

// 导入必要的类型定义（请勿修改）
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

/**
 * 状态页面配置
 * 控制前端展示的标题、链接等信息
 */
const pageConfig: PageConfig = {
  // 状态页标题
  title: "洋芋蛋蛋的服务状态页",
  
  // 页面头部展示的链接（可设置 highlight 突出显示）
  links: [
    { link: 'https://gsyy.eu.org/', label: 'GitHub' },
    { link: 'https://gsyy.eu.org/', label: 'Blog' },
    { link: 'mailto:chenxiangyang2017@outlook.com', label: 'Email Me', highlight: true },
  ],
}

/**
 * 监控 Worker 配置
 * 定义监控项、通知规则等核心功能
 */
const workerConfig: WorkerConfig = {
  // 监控项列表
  monitors: [
    // ========== 洋芋蛋蛋主站 ==========
    {
      id: 'gsyy_main',                // 唯一标识（保持不变可保留历史数据）
      name: '洋芋蛋蛋主站',           // 监控名称（状态页/通知中显示）
      method: 'GET',                  // HTTP 请求方法
      target: 'https://gsyy.eu.org',  // 监控目标 URL
      tooltip: '洋芋蛋蛋个人博客/技术分享站',  // 状态页悬浮提示
      statusPageLink: 'https://gsyy.eu.org',    // 状态页点击跳转链接
      expectedCodes: [200],           // 期望的响应码（默认 2xx）
      timeout: 10000,                 // 超时时间（毫秒，默认 10000）
      
      // 请求头配置
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },

    // ========== 黑老大的旅行足迹 ==========
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

    // ========== 推送工具 ==========
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
      // 可选：验证响应是否包含成功关键词
       responseKeyword: 'ok',
    },

    // ========== 必应壁纸 ==========
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

    // ========== GitHub 文件加速 ==========
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

    // ========== Docker代理 ==========
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

  // 通知配置（使用Bark推送）
  notification: {
    // Webhook 通知配置（适配Bark接口）
    webhook: {
      // 你的Bark推送地址（已包含你的专属Token）
      url: 'https://bark.gsyy.eu.org/y5Lf3dVoTARBd5ytu2po5X',
      // Bark使用GET请求，参数拼接在URL上
      method: 'GET',
      payloadType: 'param',
      // Bark的消息参数格式
      payload: {
        title: '服务状态提醒', // 推送标题
        body: '$MSG',         // $MSG 自动替换为监控通知内容
        sound: 'bell',        // 推送提示音（可选）
        isArchive: 1          // 1=保存到历史记录，0=不保存（可选）
      },
      timeout: 10000, // 请求超时时间
    },
    timeZone: 'Asia/Shanghai',  // 通知时间时区（北京时间）
    gracePeriod: 5,             // 通知延迟5分钟（连续失败5分钟才发送，避免误报）
  },

/**
 * 维护窗口配置
 * 维护期间状态页会显示提示，且跳过故障通知
 */
const maintenances: MaintenanceConfig[] = [
  // 示例维护配置（根据需要启用/修改）
  // {
  //   monitors: ['gsyy_main'],  // 受影响的监控项ID
  //   title: '服务器维护',
  //   body: '服务器例行维护，预计持续1小时',
  //   start: '2024-01-01T00:00:00+08:00',
  //   end: '2024-01-01T01:00:00+08:00',
  //   color: 'blue',
  // },
]

// 导出配置（请勿修改）
export { maintenances, pageConfig, workerConfig }
