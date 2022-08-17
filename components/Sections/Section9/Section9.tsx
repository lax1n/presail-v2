import React from 'react'
import Footer from '@/components/Footer/Footer'
import Section from '@/components/Section/Section'
import Image from 'next/image'
import styles from './Section9.module.css'
import {useTranslation} from 'next-i18next'
import FooterLinkGrid from '@/components/FooterLinkGrid/FooterLinkGrid'

const Section9 = () => {
  const { t } = useTranslation('common')
  return (
    <Section colorScheme={'dark'}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Image
            alt={'Presail Logo Light'}
            src='/images/PresailLight.svg'
            width={'112px'}
            height={'28px'}
          />
        </div>
        <div>
          <Footer
            date={t('footer.date')}
            description={t('footer.description')}
          />
        </div>
        <FooterLinkGrid/>
      </div>
    </Section>
  )
}

export default Section9