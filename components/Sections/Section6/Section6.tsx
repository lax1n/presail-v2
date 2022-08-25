import React from 'react'
import Section from '@/components/Section/Section'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import {useTranslation} from 'next-i18next'
import Lottie, {Action} from 'lottie-react'
import vestingBar from '@/public/images/Section6/VestingProgress.json'
import styles from './Section6.module.css'

interface Interactivity {
  mode: 'scroll' | 'cursor'
  actions: Action[]
}

const Section6 = () => {
  const { t } = useTranslation('common')

  const interactivity: Interactivity = {
    mode: 'scroll',
    actions: [
      {
        visibility: [0.1, 1.0],
        type: 'loop',
        frames: [0],
      },
    ]
  }

  return (
    <Section>
      <div className={styles.wrapper}>
        <div className={styles.vestingBarWrapper}>
          <div className={styles.vestingBar}>
            <Lottie
              animationData={vestingBar}
              loop={false}
              interactivity={interactivity}
            />
          </div>
        </div>
        <div className={styles.sectionHeading}>
          <SectionHeading
            num={t('alloSwap.num')}
            header={t('alloSwap.header')}
            title={t('alloSwap.title')}
            paragraph1={t('alloSwap.paragraph1')}
            paragraph2={t('alloSwap.paragraph2')}
            colorScheme={t('alloSwap.colorScheme')}
            id={t('alloSwap.num')}
          />
        </div>
      </div>
      <div className={'mb-32'}></div>
    </Section>
  )
}

export default Section6