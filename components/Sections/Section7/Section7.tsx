import React from 'react'
import Section from '@/components/Section/Section'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import {useTranslation} from 'next-i18next'
import styles from './Section7.module.css'

const Section7 = () => {
  const { t } = useTranslation('common')
  return (
    <Section  colorScheme={'dark'}>
      <div className={styles.sectionHeading}>
        <SectionHeading
          header={t('bestOption.header')}
          title={t('bestOption.title')}
          paragraph1={t('bestOption.paragraph1')}
          colorScheme={t('bestOption.colorScheme')}
        />
      </div>
    </Section>
  )
}

export default Section7