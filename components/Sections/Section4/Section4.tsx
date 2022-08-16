import React from 'react'
import Testimonial from '../../Testimonial/Testimonial'
import Section from '../../Section/Section'
import {useTranslation} from 'next-i18next'

const Section4 = () => {
  const { t } = useTranslation('common')
  return (
    <Section>
      <Testimonial
        header={t('testimonial.header')}
        description={t('testimonial.description')}
        name={t('testimonial.name')}
        logoPath={t('testimonial.logoPath')}
      />
    </Section>
  )
}

export default Section4