import React from 'react'
import Section from '@/components/Section/Section'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import {useTranslation} from 'next-i18next'
import Lottie from 'lottie-react'
import vestingBar from '@/public/images/Vesting progress.json'
import styles from './Section6.module.css'

const Section6 = () => {
  const { t } = useTranslation('common')
  return (
    <Section>
      <div className={styles.vestingBarWrapper}>
        <div className={styles.vestingBar}>
          <Lottie animationData={vestingBar} loop={false} />
        </div>
      </div>
      <div className={styles.sectionHeading}>
        <SectionHeading
          num={t('alloSwap.num')}
          header={t('alloSwap.header')}
          title={t('alloSwap.title')}
          paragraph1={t('alloSwap.paragraph1')}
          colorScheme={t('alloSwap.colorScheme')}
          id={t('alloSwap.num')}
        />
      </div>
      <div className={'mb-32'}></div>
    </Section>
  )
}

export default Section6