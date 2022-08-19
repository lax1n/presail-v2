import React from 'react'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import Image from 'next/image'
import Section from '@/components/Section/Section'
import {useTranslation} from 'next-i18next'
import styles from './Section2.module.css'

const Section2 = () => {
  const { t } = useTranslation('common')
  return (
    <Section>
      <div className={styles.sectionGrid}>
        <SectionHeading
          num={t('collectContributions.num')}
          header={t('collectContributions.header')}
          title={t('collectContributions.title')}
          paragraph1={t('collectContributions.paragraph1')}
          paragraph2={t('collectContributions.paragraph2')}
          buttonLink={t('collectContributions.buttonLink')}
          colorScheme={t('collectContributions.colorScheme')}
          id={t('collectContributions.num')}
        />
        <div className={styles.collectContributions} data-aos={'fade-left'}>
          <Image
            alt={'Presail Collect Contributions'}
            src='/images/02CollectContributions.webp'
            layout={'fill'}
            objectFit={'contain'}
          />
        </div>
      </div>
      <div className={styles.chart} data-aos={'zoom-in'}>
        <Image
          alt={'Presail Chart'}
          src='/images/03Chart.webp'
          layout={'fill'}
          objectFit={'contain'}
        />
      </div>
      <SectionHeading
        num={t('assetManager.num')}
        header={t('assetManager.header')}
        title={t('assetManager.title')}
        paragraph1={t('assetManager.paragraph1')}
        buttonLink={t('assetManager.buttonLink')}
        colorScheme={t('assetManager.colorScheme')}
        id={t('assetManager.num')}
      />
      <div className={'mb-[12.5rem]'}/>
    </Section>
  )
}

export default Section2