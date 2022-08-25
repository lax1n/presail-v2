import React from 'react'
import SectionHeading from '@/components/Headings/SectionHeading/SectionHeading'
import Image from 'next/image'
import Section from '@/components/Section/Section'
import {useTranslation} from 'next-i18next'
import styles from './Section3.module.css'

const Section3 = () => {
  const { t } = useTranslation('common')
  return (
    <Section colorScheme={'dark'}>
      <div className={styles.sectionGridMobile}>
        <div  className={styles.investorManagerWrapperMobile}>
          <div className={styles.investorManagerMobile} data-aos={'fade-up'}>
            <Image
              alt={'Presail Investor Manager'}
              src='/images/Section3/InvestorManager.svg'
              width={'867px'}
              height={'516px'}
              className={styles.scaleInvestorManager}
            />
          </div>
        </div>
        <div className={styles.investorCardMobile} data-aos={'fade-left'}>
          <Image
            alt={'Presail Investor Card'}
            src='/images/Section3/InvestorCard.svg'
            width={'348px'}
            height={'412px'}
            className={styles.scaleInvestorCard}
          />
        </div>
      </div>
      <div className={styles.flexGridDesktop}>
        <div className={styles.investorCardDesktop} data-aos={'fade-left'}>
          <Image
            alt={'Presail Investor Card'}
            src='/images/Section3/InvestorCard.svg'
            width={'348px'}
            height={'412px'}
          />
        </div>
        <div className={styles.investorManagerDesktop} data-aos={'fade-up'}>
          <Image
            alt={'Presail Investor Manager'}
            src='/images/Section3/InvestorManager.svg'
            width={'694px'}
            height={'413px'}
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