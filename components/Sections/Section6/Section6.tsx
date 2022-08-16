import React from 'react'
import Section from '../../Section/Section'
import SectionHeading from '../../SectionHeading/SectionHeading'
import {useTranslation} from 'next-i18next'

const Section6 = () => {
  const { t } = useTranslation('common')
  return (
    <Section>
      <SectionHeading
        num={t('alloSwap.num')}
        header={t('alloSwap.header')}
        title={t('alloSwap.title')}
        paragraph1={t('alloSwap.paragraph1')}
        buttonLink={t('alloSwap.buttonLink')}
        colorScheme={t('alloSwap.colorScheme')}
        id={t('alloSwap.num')}
      />
    </Section>
  )
}

export default Section6