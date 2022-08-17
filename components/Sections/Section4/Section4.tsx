import React from 'react'
import Testimonial from '@/components/Testimonial/Testimonial'
import Section from '@/components/Section/Section'
import {useTranslation} from 'next-i18next'
import Image from 'next/image'
import styles from './Section4.module.css'

const Section4 = () => {
  const { t } = useTranslation('common')
  return (
    <Section>
      <div className={styles.investorPortal}>
        <Image
          alt={'Presail Investor Portal'}
          src='/images/05InvestorPortal.webp'
          layout={'fill'}
          objectFit={'contain'}
        />
      </div>
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