import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "洋芋蛋蛋的服务状态页",
  links: [
    { link: 'https://gsyy.eu.org/', label: '洋芋蛋蛋主站' },
    { link: 'https://map.gsyy.eu.org/', label: '旅行足迹' },
    { link: 'mailto:chenxiangyang2017@outlook.com', label: '联系我', highlight: true }
  ]
};

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'gsyy_main',
      name: '洋芋蛋蛋主站',
      method: 'GET',
      target: 'https://gsyy.eu.org',
      tooltip: '洋芋蛋蛋个人博客/技术分享站',
      statusPageLink: 'https://gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    {
      id: 'gsyy_map',
      name: '黑老大的旅行足迹',
      method: 'GET',
      target: 'https://map.gsyy.eu.org',
      tooltip: '旅行足迹地图服务',
      statusPageLink: 'https://map.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    {
      id: 'gsyy_bark',
      name: 'Bark推送工具',
      method: 'GET',
      target: 'https://bark.gsyy.eu.org',
      tooltip: 'Bark推送服务接口',
      statusPageLink: 'https://bark.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' },
      responseKeyword: 'ok'
    },
    {
      id: 'gsyy_image',
      name: '必应壁纸服务',
      method: 'GET',
      target: 'https://image.gsyy.eu.org',
      tooltip: '必应壁纸相关服务',
      statusPageLink: 'https://image.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    {
      id: 'gsyy_github',
      name: 'GitHub文件加速',
      method: 'GET',
      target: 'https://github.gsyy.eu.org',
      tooltip: '基于Cloudflare的GitHub加速工具',
      statusPageLink: 'https://github.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    {
      id: 'gsyy_docker',
      name: 'Docker代理服务',
      method: 'GET',
      target: 'https://docker.gsyy.eu.org',
      tooltip: 'Docker镜像代理服务',
      statusPageLink: 'https://docker.gsyy.eu.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    }
  ],
  notification: {
    webhook: {
      url: 'https://bark.gsyy.eu.org/y5Lf3dVoTARBd5ytu2po5X',
      method: 'GET',
      payloadType: 'param',
      payload: { title: '服务状态提醒', body: '$MSG', sound: 'bell', isArchive: 1 },
      timeout: 10000
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 5
  }
}; // 强制添加分号，避免解析歧义

const maintenances: MaintenanceConfig[] = [];

export { maintenances, pageConfig, workerConfig };
