import React from 'react'
import SectionHeading from '@/components/Headings/SectionHeading/SectionHeading'
import Image from 'next/image'
import Section from '@/components/Section/Section'
import {useTranslation} from 'next-i18next'
import styles from './Section1.module.css'

const Section1 = () => {
  const { t } = useTranslation('common')
  return (
    <Section colorScheme={'dark'}>
      <div className={styles.sectionGrid}>
        <div className={styles.margin}>
          <SectionHeading
            num={t('dealsManagement.num')}
            header={t('dealsManagement.header')}
            title={t('dealsManagement.title')}
            paragraph1={t('dealsManagement.paragraph1')}
            buttonLink={t('dealsManagement.buttonLink')}
            colorScheme={t('dealsManagement.colorScheme')}
            id={t('dealsManagement.num')}
          />
        </div>
        <div className={styles.allDealsWrapper}>
          <div className={styles.allDeals} data-aos='fade-up'>
            <Image
              alt={'Presail All Deals'}
              src='/images/Section1/AllDeals.svg'
              width={'611'}
              height={'358'}
              className={styles.scale}
            />
          </div>
        </div>
      </div>
      <div className={'mb-[7.5rem]'}/>
    </Section>
  )
}

export default Section1