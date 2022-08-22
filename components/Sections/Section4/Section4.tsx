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
      <div className={styles.investorPortalWrapper}>
        <div className={styles.investorPortal} data-aos={'fade-left'}>
          <Image
            alt={'Presail Investor Portal'}
            src='/images/05InvestorPortal.webp'
            width={'570'}
            height={'449'}
          />
        </div>
      </div>
      <div className={'mt-10 mb-10 xs:ml-[2.45rem] sm:max-w-[80rem] sm:mx-auto'}>
        <Testimonial
          header={t('testimonial.header')}
          description={t('testimonial.description')}
          name={t('testimonial.name')}
          logoPath={t('testimonial.logoPath')}
        />
      </div>
    </Section>
  )
}

export default Section4