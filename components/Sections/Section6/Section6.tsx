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
        colorScheme={t('alloSwap.colorScheme')}
        id={t('alloSwap.num')}
      />
      <div className={'mb-32'}></div>
    </Section>
  )
}

export default Section6