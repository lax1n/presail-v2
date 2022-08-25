import React from 'react'
import Section from '@/components/Section/Section'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import {useTranslation} from 'next-i18next'
import styles from './Section7.module.css'
import Image from 'next/image'

const Section7 = () => {
  const { t } = useTranslation('common')
  return (
    <Section  colorScheme={'dark'}>
      <div className={styles.wrapper}>
        <div className={styles.alloSwap}>
          <Image data-aos={'fade-left'}
            alt={'Presail AlloSwap OTC'}
            src={'/images/Section7/AlloSwapOTC.svg'}
            width={'377px'}
            height={'392px'}
          />
        </div>
        <div className={styles.sectionHeading}>
          <SectionHeading
            header={t('bestOption.header')}
            title={t('bestOption.title')}
            paragraph1={t('bestOption.paragraph1')}
            colorScheme={t('bestOption.colorScheme')}
          />
        </div>
      </div>
    </Section>
  )
}

export default Section7