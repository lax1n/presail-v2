import React from 'react'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import Image from 'next/image'
import Section from '@/components/Section/Section'
import {useTranslation} from 'next-i18next'
import styles from './Section3.module.css'

const Section3 = () => {
  const { t } = useTranslation('common')
  return (
    <Section colorScheme={'dark'}>
      <div className={styles.sectionGrid}>
        <div  className={styles.investorManagerWrapper}>
          <div className={styles.investorManager} data-aos={'fade-up'}>
            <Image
              alt={'Presail Investor Manager'}
              src='/images/Section3/InvestorManager.webp'
              width={'520px'}
              height={'308px'}
              className={styles.scaleInvestorManager}
            />
          </div>
        </div>
        <div className={styles.investorCard} data-aos={'fade-left'}>
          <Image
            alt={'Presail Investor Card'}
            src='/images/Section3/InvestorCard.webp'
            width={'348px'}
            height={'412px'}
            className={styles.scaleInvestorCard}
          />
        </div>
      </div>
      <div className={styles.sectionHeading}>
        <SectionHeading
          num={t('investorPortal.num')}
          header={t('investorPortal.header')}
          title={t('investorPortal.title')}
          paragraph1={t('investorPortal.paragraph1')}
          paragraph2={t('investorPortal.paragraph2')}
          buttonLink={t('investorPortal.buttonLink')}
          colorScheme={t('investorPortal.colorScheme')}
          id={t('investorPortal.num')}
        />
      </div>
      <div className={'mb-[6.375rem]'}/>
    </Section>
  )
}

export default Section3