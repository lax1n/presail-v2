import React from 'react'
import Section from '../../Section/Section'
import SectionHeading from '../../SectionHeading/SectionHeading'
import {useTranslation} from 'next-i18next'

const Section7 = () => {
  const { t } = useTranslation('common')
  return (
    <Section  colorScheme={'dark'}>
      <div className={'ml-[25rem] mb-[6.813rem]'}>
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