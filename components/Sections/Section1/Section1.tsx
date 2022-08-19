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
        <div className={styles.allDeals} data-aos='fade-up'>
          <Image
            alt={'Presail All Deals'}
            src='/images/01AllDeals.webp'
            layout={'fill'}
            objectFit={'contain'}
          />
        </div>
      </div>
      <div className={'mb-[7rem]'}/>
    </Section>
  )
}

export default Section1