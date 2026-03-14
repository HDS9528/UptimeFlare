import { Divider } from '@mantine/core'
import { pageConfig } from '@/uptime.config'

export default function Footer() {
  // ========== 注释说明 ==========
  // 默认底部版权文字：包含 Uptimeflare 开源信息、作者链接
  // 如需恢复默认版权：取消注释下面这行，注释掉空字符串即可
  // const defaultFooter =
  //   '<p style="text-align: center; font-size: 12px; margin-top: 10px;"> Open-source monitoring and status page powered by <a href="https://github.com/lyc8503/UptimeFlare" target="_blank">Uptimeflare</a>, made with ❤ by <a href="https://github.com/lyc8503" target="_blank">lyc8503</a>. </p>'
  
  // 修改后：清空默认底部文字，隐藏版权信息
  const defaultFooter = '';

  return (
    <>
      {/* ========== 注释说明 ========== */}
      {/* 底部分割线：隐藏后消除 Footer 区域的分割线 */}
      {/* 如需恢复分割线：取消注释下面这行即可 */}
      {/* <Divider mt="lg" /> */}
      
      {/* ========== 注释说明 ========== */}
      {/* 底部版权文字容器：渲染自定义/默认 Footer 内容 */}
      {/* 因 defaultFooter 已设为空字符串，此处无内容渲染 */}
      <div dangerouslySetInnerHTML={{ __html: pageConfig.customFooter ?? defaultFooter }} />
    </>
  )
}
