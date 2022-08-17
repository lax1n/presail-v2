import React from 'react'
import Section from '@/components/Section/Section'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import {useTranslation} from 'next-i18next'

const Section5 = () => {
  const { t } = useTranslation('common')
  return (
    <Section colorScheme={'dark'}>
      <SectionHeading
        num={t('tokenVesting.num')}
        header={t('tokenVesting.header')}
        title={t('tokenVesting.title')}
        paragraph1={t('tokenVesting.paragraph1')}
        buttonLink={t('tokenVesting.buttonLink')}
        colorScheme={t('tokenVesting.colorScheme')}
        id={t('tokenVesting.num')}
      />
    </Section>
  )
}

export default Section5