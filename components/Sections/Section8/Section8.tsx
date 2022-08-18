import React from 'react'
import Caption from '@/components/Caption/Caption'
import Section from '@/components/Section/Section'
import styles from './Section8.module.css'
import {useTranslation} from 'next-i18next'
import { Trans } from 'react-i18next'
import Avatar from '@/components/Avatar/Avatar'

const Section8 = () => {
  const { t } = useTranslation('common')
  return (
    <Section>
      <div className={styles.avatarGrid}>
        <Caption
          title={t('captionGetInTouch.title')}
          description={t('captionGetInTouch.description')}
        />
        <Avatar
          avatarImgPath={'/images/EvenPresail.webp'}
          name={'Even Bergan Bugge'}
          occupation={'Account Excecutive'}
          telegram={'@pacyos'}
          email={'even@presail.com'}
        />
      </div>
      <Caption
        title={t('captionBackers.title')}
        description={<Trans i18nKey='captionBackers.description' />}
        className={styles.captionBackers}
      />
    </Section>
  )
}

export default Section8