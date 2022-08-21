import React from 'react'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
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
            paragraph2={t('dealsManagement.paragraph2')}
            buttonLink={t('dealsManagement.buttonLink')}
            colorScheme={t('dealsManagement.colorScheme')}
            id={t('dealsManagement.num')}
          />
        </div>
        <div className={styles.allDealsWrapper} data-aos='fade-up'>
          <div className={styles.allDeals}>
            <Image
              alt={'Presail All Deals'}
              src='/images/01AllDeals.webp'
              width={'509'}
              height={'298'}
            />
          </div>
        </div>
      </div>
      <div className={'mb-[7.5rem]'}/>
    </Section>
  )
}

export default Section1