import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // 状态页的标题
  title: "lyc8503's Status Page",
  // 显示在状态页头部的链接，可以将 `highlight` 设置为 `true` 来突出显示
  links: [
    { link: 'https://github.com/lyc8503', label: 'GitHub' },
    { link: 'https://blog.lyc8503.net/', label: '博客' },
    { link: 'mailto:me@lyc8503.net', label: '联系我', highlight: true },
  ],
  // [可选] 对监控项进行分组
  // 如果不配置，所有监控项会显示在同一个列表中
  // 如果配置了，监控项会按分组展示和排序；未列入分组的监控项会隐藏（但仍会继续监控）
  group: {
    '🌐 公开服务（示例分组名称）': ['foo_monitor', 'bar_monitor', '更多监控项ID...'],
    '🔐 私有服务': ['test_tcp_monitor'],
  },
  // [可选] 设置网站图标的路径，未指定时默认使用 '/favicon.png'
  // favicon: 'https://example.com/favicon.ico',
  // [可选] 设置Logo的路径，未指定时默认使用 '/logo.svg'
  // logo: 'https://example.com/logo.svg',
  // [可选] 维护相关配置
  maintenances: {
    // [可选] 即将到来的维护提醒的颜色，默认值为 'gray'（灰色）
    // 正在进行的维护提醒始终使用 MaintenanceConfig 中指定的颜色
    upcomingColor: 'gray',
  },
  // [可选] 自定义页脚HTML内容
  // customFooter: '',
}

const workerConfig: WorkerConfig = {
  // [可选] 除非状态发生变化，否则每隔N分钟写入一次KV存储，默认值为3
  kvWriteCooldownMinutes: 3,
  // 取消下面这行的注释可以为状态页和API启用HTTP基本认证，格式为 `<用户名>:<密码>`
  // passwordProtection: 'username:password',
  // 在这里定义所有监控项
  monitors: [
    // 示例 HTTP 监控项
    {
      // `id` 必须唯一；如果`id`保持不变，监控历史数据会被保留
      id: 'foo_monitor',
      // `name` 会显示在状态页和回调消息中
      name: '我的API监控',
      // `method` 必须是有效的HTTP请求方法
      method: 'POST',
      // `target` 是有效的URL地址
      target: 'https://example.com',
      // [可选] `tooltip` 仅在状态页中显示为该监控项的悬浮提示
      tooltip: '这是该监控项的悬浮提示',
      // [可选] `statusPageLink` 仅用于状态页中该监控项的点击跳转链接
      statusPageLink: 'https://example.com',
      // [可选] 如果设置为true，会隐藏该监控项在状态页中的延迟图表
      hideLatencyChart: false,
      // [可选] `expectedCodes` 是可接受的HTTP响应码数组，未指定时默认接受所有2xx状态码
      expectedCodes: [200],
      // [可选] 超时时间（毫秒），未指定时默认值为10000（10秒）
      timeout: 10000,
      // [可选] 要发送的请求头
      headers: {
        'User-Agent': 'Uptimeflare',
        Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [可选] 要发送的请求体
      body: 'Hello, world!',
      // [可选] 如果指定了该字段，响应内容必须包含此关键词才会被判定为正常
      responseKeyword: 'success',
      // [可选] 如果指定了该字段，响应内容必须不包含此关键词才会被判定为正常
      responseForbiddenKeyword: 'bad gateway',
      // [可选] 如果指定了该字段，会通过指定的代理来检查监控项（主要用于地域专属的检查）
      // 设置前请参考文档：https://github.com/lyc8503/UptimeFlare/wiki/Check-proxy-setup
      // 目前支持 `worker://`、`globalping://` 和 `http(s)://` 类型的代理
      checkProxy: 'https://xxx.example.com OR worker://weur',
      // [可选] 如果设置为true，当指定的代理不可用时，会回退到本地检查
      checkProxyFallback: true,
    },
    // 示例 TCP 监控项
    {
      id: 'test_tcp_monitor',
      name: '示例TCP监控',
      // TCP监控的`method`必须设置为`TCP_PING`
      method: 'TCP_PING',
      // TCP监控的`target`格式必须是 `主机:端口`
      target: '1.2.3.4:22',
      tooltip: '我的生产服务器SSH',
      statusPageLink: 'https://example.com',
      timeout: 5000,
    },
  ],
  // [可选] 通知相关配置
  notification: {
    // [可选] 通知Webhook配置；如果不配置，将不会发送任何通知
    // 更多信息参考Wiki：https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
    webhook: {
      // [必填] Webhook地址（示例：Telegram Bot API）
      url: 'https://api.telegram.org/bot123456:ABCDEF/sendMessage',
      // [可选] HTTP请求方法；当payloadType=param时默认是'GET'，其他情况默认是'POST'
      method: 'POST',
      // [可选] 要发送的请求头
      headers: {
        foo: 'bar',
      },
      // [必填] 指定载荷（payload）的编码方式
      // 可选值：'param'、'json' 或 'x-www-form-urlencoded'
      // 'param'：将URL编码的载荷追加到URL查询参数中
      // 'json'：以JSON格式作为请求体发送，自动设置Content-Type为'application/json'
      // 'x-www-form-urlencoded'：以URL编码格式作为请求体发送，自动设置Content-Type为'x-www-form-urlencoded'
      payloadType: 'x-www-form-urlencoded',
      // [必填] 要发送的载荷内容
      // $MSG 会被自动替换为人类可读的通知消息
      payload: {
        chat_id: 12345678,
        text: '$MSG',
      },
      // [可选] 调用Webhook的超时时间（毫秒），默认值为5000（5秒）
      timeout: 10000,
    },
    // [可选] 通知消息中使用的时区，默认值为 "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [可选] 发送通知前的宽限期（分钟）
    // 只有当监控项在首次故障后，连续N次检查都处于故障状态时，才会发送通知
    // 未指定时，故障发生后会立即发送通知
    gracePeriod: 5,
    // [可选] 禁用指定ID的监控项的通知功能
    skipNotificationIds: ['foo_monitor', 'bar_monitor'],
    // [可选] 在故障期间，如果错误原因发生变化，是否抑制额外的通知；默认值为false
    skipErrorChangeNotification: true,
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
      // 当任意监控项的状态发生变化时，会调用此回调函数
      // 可以在这里编写任意TypeScript代码
      // 此回调不遵循宽限期配置，状态变化时会立即触发
      // 如果需要实现宽限期逻辑，需要自行处理
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // 如果任意监控项存在持续的故障，此回调函数会每分钟调用一次
      // 可以在这里编写任意TypeScript代码
    },
  },
}

// 你可以在这里定义多个维护计划
// 在维护期间，状态页会显示对应的提醒
// 同时，相关的故障通知会被跳过（如果配置了通知的话）
// 如果不需要此功能，留空即可
// const maintenances: MaintenanceConfig[] = []
const maintenances: MaintenanceConfig[] = [
  {
    // [可选] 受此维护计划影响的监控项ID列表
    monitors: ['foo_monitor', 'bar_monitor'],
    // [可选] 未指定时默认显示 "Scheduled Maintenance"（计划内维护）
    title: '测试维护',
    // 维护说明，会显示在状态页上
    body: '这是一次测试维护，用于服务器软件升级',
    // 维护开始时间，支持UNIX时间戳或ISO 8601格式
    start: '2025-04-27T00:00:00+08:00',
    // [可选] 维护结束时间，支持UNIX时间戳或ISO 8601格式
    // 未指定时，会被视为持续进行中的维护
    end: '2025-04-30T00:00:00+08:00',
    // [可选] 状态页上维护提醒的颜色，默认值为 "yellow"（黄色）
    color: 'blue',
  },
  // 由于此配置文件是TypeScript文件，你甚至可以使用立即执行函数（IIFE）来生成定时维护计划
  // 以下示例展示了：每月15日的凌晨2点到4点（UTC+8）执行一次维护
  // 此方式可能存在风险：生成过多的维护条目会导致性能问题
  // 不确定的输出也可能引发bug或意外行为
  // 如果你不知道如何调试，请谨慎使用此方式
  ...(function () {
    const schedules = []
    const today = new Date()

    for (let i = -1; i <= 1; i++) {
      // JavaScript的Date对象会自动处理年份的滚动（比如12月+1会变成次年1月）
      const date = new Date(today.getFullYear(), today.getMonth() + i, 15)
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')

      schedules.push({
        title: `${year}/${parseInt(month)} - 测试定时维护`,
        monitors: ['foo_monitor'],
        body: '每月例行维护',
        start: `${year}-${month}-15T02:00:00.000+08:00`,
        end: `${year}-${month}-15T04:00:00.000+08:00`,
      })
    }
    return schedules
  })(),
]

// 不要删除这行代码，否则编译会失败
export { maintenances, pageConfig, workerConfig }
