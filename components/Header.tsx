import { Container, Group, Image } from '@mantine/core'
import classes from '@/styles/Header.module.css'
import { pageConfig } from '@/uptime.config'
import { PageConfigLink } from '@/types/config'
import { useTranslation } from 'react-i18next'

export default function Header({ style }: { style?: React.CSSProperties }) {
  const { t } = useTranslation('common')
  const linkToElement = (link: PageConfigLink, i: number) => {
    return (
      <a
        key={i}
        href={link.link}
        target={link.link.startsWith('/') ? undefined : '_blank'}
        className={classes.link}
        data-active={link.highlight}
      >
        {link.label}
      </a>
    )
  }

  // ========== 注释说明 ==========
  // 原代码包含 Incidents（故障/事件）链接 + 配置文件的自定义链接
  // 改为空数组，隐藏所有头部链接（Incidents + 官网/联系管理员等）
  // 如需恢复：取消注释下面这行，注释掉空数组行
  // const links = [{ label: t('Incidents'), link: '/incidents' }, ...(pageConfig.links || [])]
  const links = [];

  return (
    <header className={classes.header} style={style}>
      <Container size="md" className={classes.inner}>
        {/* ========== 注释说明 ========== */}
        {/* Logo 图片区域：包含 Logo 图片和跳转链接 */}
        {/* 如需恢复 Logo：取消注释整个 <div> 块即可 */}
        {/*
        <div>
          <a
            href={location.pathname == '/' ? 'https://github.com/lyc8503/UptimeFlare' : '/'}
            target={location.pathname == '/' ? '_blank' : undefined}
          >
            <Image
              src={pageConfig.logo ?? '/logo.svg'}
              h={56}
              w={{ base: 140, sm: 190 }}
              fit="contain"
              alt="logo"
            />
          </a>
        </div>
        */}

        {/* ========== 注释说明 ========== */}
        {/* 大屏端（sm及以上）显示的头部链接组 */}
        {/* 如需恢复：取消注释该 <Group> 块即可 */}
        {/*
        <Group gap={5} visibleFrom="sm">
          {links?.map(linkToElement)}
        </Group>
        */}

        {/* ========== 注释说明 ========== */}
        {/* 小屏端（sm以下）显示的头部链接组（仅高亮/内部链接） */}
        {/* 如需恢复：取消注释该 <Group> 块即可 */}
        {/*
        <Group gap={5} hiddenFrom="sm">
          {links?.filter((link) => link.highlight || link.link.startsWith('/')).map(linkToElement)}
        </Group>
        */}
      </Container>
    </header>
  )
}
