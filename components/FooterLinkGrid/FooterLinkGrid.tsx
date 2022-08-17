import React from 'react'
import FooterLink from '@/components/FooterLink/FooterLink'
import {useTranslation} from 'next-i18next'
import styles from './FooterLinkGrid.module.css'

const FooterLinkGrid = () => {
  const { t } = useTranslation('common')

  const footerLinkData: { name: string, href: string }[] = [
    {name: t('footerLink.github.name'), href: t('footerLink.github.href')},
    {name:t('footerLink.medium.name'), href: t('footerLink.medium.href')},
    {name:t('footerLink.linkedIn.name'), href: t('footerLink.linkedIn.href')},
    {name:t('footerLink.twitter.name'), href: t('footerLink.twitter.href')},
  ]

  return (
    <div className={styles.footerLinkGrid}>
      {footerLinkData.map((item)=>{
        return (
          <div key={item.name}>
            <FooterLink name={item.name} href={item.href} className={'mb-2'}/>
          </div>
        )
      })}
    </div>
  )
}

export default FooterLinkGrid