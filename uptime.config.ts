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
  // 监控项列表
  monitors: [
    // ========== 洋芋蛋蛋主站 ==========
    {
      id: 'gsyy_main',                // 唯一标识（保持不变可保留历史数据）
      name: '洋芋蛋蛋主站',           // 监控名称（状态页/通知中显示）
      method: 'GET',                  // HTTP 请求方法
      target: 'https://gsyy.eu.org',  // 监控目标 URL
      tooltip: '核心站点 | 洋芋蛋蛋个人博客/技术分享站',  // 状态页悬浮提示（含分组）
      statusPageLink: 'https://gsyy.eu.org',    // 状态页点击跳转链接
      expectedCodes: [200],           // 期望的响应码（默认 2xx）
      timeout: 10000,                 // 超时时间（毫秒，默认 10000）
      // 请求头配置（存储分组信息，规避类型报错）
      headers: {
        'User-Agent': 'Uptimeflare',
        'X-Monitor-Group': '核心站点' // 分组信息（供推送解析）
      },
    },

    // ========== 黑老大的旅行足迹 ==========
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

    // ========== 推送工具 ==========
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
      // 验证响应是否包含成功关键词
      responseKeyword: 'ok',
    },

    // ========== 必应壁纸 ==========
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

    // ========== GitHub 文件加速 ==========
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

    // ========== Docker代理 ==========
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

  // 通知配置（使用Bark推送）
  notification: {
    // Webhook 通知配置（适配Bark接口）
    webhook: {
      // 你的Bark推送地址（已包含你的专属Token）
      url: 'https://bark.gsyy.eu.org/y5Lf3dVoTARBd5ytu2po5X',
      // Bark使用GET请求，参数拼接在URL上
      method: 'GET',
      payloadType: 'param',
      // Bark的消息参数格式（解析分组+补全功能）
      payload: {
        title: '服务状态提醒',
        // 解析tooltip中的分组（兼容所有UptimeFlare版本）
        body: '【{{tooltip.split("|")[0]}}】$MSG',
        sound: 'bell',        // 推送提示音
        isArchive: 1,         // 1=保存到历史记录
        group: '网站监控',    // Bark端一级分类
        // 点击推送跳转状态页（替换为你的实际状态页地址）
        url: 'https://gsyy.eu.org',
        // 自定义图标（示例地址，可替换为自己的）
        icon: 'https://cdn.jsdelivr.net/gh/DIYgod/Bark@master/assets/icon.png'
      },
      timeout: 10000, // 请求超时时间
    },
    timeZone: 'Asia/Shanghai',  // 通知时间时区（北京时间）
    gracePeriod: 5,             // 通知延迟5分钟（避免误报）
  },
}

/**
 * 维护窗口配置
 * 维护期间状态页会显示提示，且跳过故障通知
 */
const maintenances: MaintenanceConfig[] = [
  // 示例维护配置（按需启用）
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
