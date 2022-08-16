import React from 'react'
import SectionHeading from '../../SectionHeading/SectionHeading'
import Image from 'next/image'
import Section from '../../Section/Section'
import {useTranslation} from 'next-i18next'
import styles from './Section3.module.css'

const Section3 = () => {
  const { t } = useTranslation('common')
  return (
    <Section colorScheme={'dark'}>
      <div className={styles.sectionGrid}>
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
        <div className={styles.investorCard}>
          <Image
            alt={'Presail Investor Card'}
            src='/images/04InvestorCard.webp'
            layout={'fill'}
            objectFit={'contain'}
          />
        </div>
      </div>
    </Section>
  )
}

export default Section3