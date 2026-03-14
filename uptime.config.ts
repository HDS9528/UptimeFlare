import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

// 页面配置
const pageConfig: PageConfig = {
  title: "我的网站监控状态页",
  links: [
    { link: 'https://your-domain.com', label: '官网' },
    { link: 'mailto:admin@your-domain.com', label: '联系管理员', highlight: true },
  ],
}

// 核心监控配置
const workerConfig: WorkerConfig = {
  monitors: [
    // 监控自己的网站（HTTP）
    {
      id: 'my_website',
      name: '我的个人网站',
      method: 'GET',
      target: 'https://your-domain.com',
      expectedCodes: [200],
      timeout: 8000,
      headers: {
        'User-Agent': 'Uptimeflare/MyMonitor',
      },
    },
    // 监控数据库端口（TCP）
    {
      id: 'mysql_server',
      name: 'MySQL数据库',
      method: 'TCP_PING',
      target: '192.168.1.100:3306',
      timeout: 5000,
    },
  ],
  // 钉钉告警示例
  notification: {
    webhook: {
      url: 'https://oapi.dingtalk.com/robot/send?access_token=你的钉钉机器人TOKEN',
      payloadType: 'json',
      payload: {
        msgtype: 'text',
        text: {
          content: '$MSG',
        },
      },
      timeout: 5000,
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 3, // 3分钟连续失败才告警
  },
}

// 维护配置（可选）
const maintenances: MaintenanceConfig[] = [
  {
    monitors: ['my_website'],
    title: '每周六凌晨维护',
    body: '网站每周六0-2点进行服务器升级，期间可能无法访问',
    start: '2026-03-15T00:00:00+08:00',
    end: '2026-03-15T02:00:00+08:00',
    color: 'green',
  },
]

export { maintenances, pageConfig, workerConfig }
