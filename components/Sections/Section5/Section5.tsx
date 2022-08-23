import React from 'react'
import Section from '@/components/Section/Section'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import {useTranslation} from 'next-i18next'
import Image from 'next/image'
import styles from './Section5.module.css'

const Section5 = () => {
  const { t } = useTranslation('common')
  return (
    <Section colorScheme={'dark'}>
      <div className={styles.score} data-aos={'zoom-in'}>
        <Image
          alt={'Presail Score'}
          src={'/images/Score.svg'}
          width={'964px'}
          height={'160px'}
          className={styles.scoreScale}
        />
      </div>
      <div className={styles.sectionHeading}>
        <SectionHeading
          num={t('tokenVesting.num')}
          header={t('tokenVesting.header')}
          title={t('tokenVesting.title')}
          paragraph1={t('tokenVesting.paragraph1')}
          buttonLink={t('tokenVesting.buttonLink')}
          colorScheme={t('tokenVesting.colorScheme')}
          id={t('tokenVesting.num')}
        />
      </div>
      <div className={'mb-[7.5rem]'}/>
    </Section>
  )
}

export default Section5