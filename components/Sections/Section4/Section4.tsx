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
        <div className={styles.investorPortal}>
          <Image data-aos={'fade-left'}
            alt={'Presail Investor Portal'}
            src='/images/Section4/InvestorPortal.svg'
            width={'752'}
            height={'593'}
            className={styles.investorPortalScale}
          />
        </div>
      </div>
      <div className={styles.testimonial}>
        <Testimonial
          header={t('testimonial.header')}
          description={t('testimonial.description')}
          name={t('testimonial.name')}
          logoPath={t('testimonial.logoPath')}
        />
      </div>
      <div className={'mb-[3rem] xs:mb-[6.5rem]'}/>
    </Section>
  )
}

export default Section4