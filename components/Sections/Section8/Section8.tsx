import React from 'react'
import Caption from '@/components/Caption/Caption'
import Section from '@/components/Section/Section'
import styles from './Section8.module.css'
import {useTranslation} from 'next-i18next'

const Section8 = () => {
  const { t } = useTranslation('common')
  return (
    <Section>
      <Caption
        title={t('captionGetInTouch.title')}
        description={t('captionGetInTouch.description')}
        className={styles.captionGetInTouch}
      />
      <Caption
        title={t('captionBackers.title')}
        description={t('captionBackers.description')}
        className={styles.captionBackers}
      />
    </Section>
  )
}

export default Section8