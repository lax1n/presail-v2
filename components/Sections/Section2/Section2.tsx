import React from 'react'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import Image from 'next/image'
import Section from '@/components/Section/Section'
import {useTranslation} from 'next-i18next'
import styles from './Section2.module.css'
import {ArrowRight} from 'phosphor-react'

const Section2 = () => {
  const { t } = useTranslation('common')
  return (
    <Section style={'static'}>
      <div className={styles.sectionGrid}>
        <div className={styles.margin}>
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
        </div>
        <div className={styles.collectContributionsWrapper} data-aos={'fade-left'}>
          <div className={styles.collectContributions}>
            <Image
              alt={'Presail Create Deal'}
              src='/images/Section2/CreateDeal.svg'
              width={'440px'}
              height={'800px'}
            />
          </div>
        </div>
      </div>
      <div className={styles.supportedChainsDesktop}>
        <Image
          alt={'Presail Supported Chains'}
          src='/images/Section2/SupportedChainsDesktop.svg'
          width={'535px'}
          height={'183px'}
        />
      </div>
      <div className={styles.supportedChainsMobile}>
        <Image
          alt={'Presail Supported Chains'}
          src='/images/Section2/SupportedChainsMobile.svg'
          width={'307px'}
          height={'232px'}
        />
      </div>
      <div className={styles.chartWrapper}>
        <div className={styles.chart} data-aos={'zoom-in'}>
          <div className={styles.chartScroll}>
            <Image
              alt={'Presail Chart'}
              src='/images/Section2/Flowchart.svg'
              width={'965px'}
              height={'460px'}
            />
          </div>
        </div>
        <div className={styles.swipeWrapper}>
          <div className={styles.swipe}>Swipe</div>
          <ArrowRight size={16} className={'items-stretch'}/>
        </div>
      </div>
      <div className={styles.assetManager}>
        <SectionHeading
          num={t('assetManager.num')}
          header={t('assetManager.header')}
          title={t('assetManager.title')}
          paragraph1={t('assetManager.paragraph1')}
          buttonLink={t('assetManager.buttonLink')}
          colorScheme={t('assetManager.colorScheme')}
          id={t('assetManager.num')}
        />
      </div>
      <div className={'mb-[12.5rem]'}/>
    </Section>
  )
}

export default Section2