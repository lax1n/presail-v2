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
      {/*<div className={styles.investorPortalWrapper} data-aos={'fade-left'}>*/}
      {/*  <div className={styles.investorPortal}>*/}
      {/*    <Image*/}
      {/*      alt={'Presail Investor Portal'}*/}
      {/*      src='/images/05InvestorPortal.webp'*/}
      {/*      width={'570'}*/}
      {/*      height={'449'}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className={'mt-10 mb-10 md:max-w-[80rem] md:mx-auto'}>
        <Testimonial
          header={t('testimonial.header')}
          description={t('testimonial.description')}
          name={t('testimonial.name')}
          logoPath={t('testimonial.logoPath')}
          className={'md:ml-[18rem] md:mt-[6rem] md:mb-[10rem]'}
        />
      </div>
    </Section>
  )
}

export default Section4