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

  // 隐藏所有头部链接（Incidents + 自定义链接）
  // 恢复方式：注释下行，取消注释下下行
  const links = [];
  // const links = [{ label: t('Incidents'), link: '/incidents' }, ...(pageConfig.links || [])]

  return (
    <header className={classes.header} style={style}>
      <Container size="md" className={classes.inner}>
        {/* Logo 区域已注释隐藏，恢复取消注释即可 */}
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

        {/* 大屏端链接组已隐藏，恢复取消注释即可 */}
        {/*
        <Group gap={5} visibleFrom="sm">
          {links?.map(linkToElement)}
        </Group>
        */}

        {/* 小屏端链接组已隐藏，恢复取消注释即可 */}
        {/*
        <Group gap={5} hiddenFrom="sm">
          {links?.filter((link) => link.highlight || link.link.startsWith('/')).map(linkToElement)}
        </Group>
        */}
      </Container>
    </header>
  )
}
