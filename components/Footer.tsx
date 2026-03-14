import { Divider } from '@mantine/core'
import { pageConfig } from '@/uptime.config'

export default function Footer() {
  // 默认底部版权文字，隐藏后设为空字符串
  // 恢复默认版权：注释下行，取消注释下下行
  const defaultFooter = '';
  // const defaultFooter =
  //   '<p style="text-align: center; font-size: 12px; margin-top: 10px;"> Open-source monitoring and status page powered by <a href="https://github.com/lyc8503/UptimeFlare" target="_blank">Uptimeflare</a>, made with ❤ by <a href="https://github.com/lyc8503" target="_blank">lyc8503</a>. </p>';

  return (
    <>
      {/* 底部分割线已隐藏，恢复取消注释即可 */}
      {/* <Divider mt="lg" /> */}
      
      {/* 底部版权容器：因 defaultFooter 为空，无内容渲染 */}
      <div dangerouslySetInnerHTML={{ __html: pageConfig.customFooter ?? defaultFooter }} />
    </>
  )
}
