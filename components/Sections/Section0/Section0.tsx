import React from 'react'
import Image from 'next/image'
import HeroHeading from '@/components/HeroHeading/HeroHeading'
import Button from '@/components/Button/Button'
import TertiaryButtonGrid from '@/components/TertiaryButtonGrid/TertiaryButtonGrid'
import Section from '@/components/Section/Section'
import {useTranslation} from 'next-i18next'
import styles from './Section0.module.css'
import Lottie from 'lottie-react'
import preSailTable from '@/public/images/PresailTable.json'
import notifications from '@/public/images/Notefications.json'

const Section0 = () => {
  const { t } = useTranslation('common')
  return (
    <Section>
      <div className={styles.sectionGrid}>
        <div>
          <div className={styles.logo}>
            <Image
              alt={'Presail Logo'}
              src='/images/Presail.svg'
              width={'112px'}
              height={'28px'}
            />
          </div>
          <HeroHeading
            title={t('heroHeading.title')}
            subtitle={t('heroHeading.subtitle')}
            className={'mb-12'}
          />

          <Button
            text={t('button.text')}
            className={'mb-12 ml-[7.5rem]'}
          />

          <TertiaryButtonGrid/>
        </div>
        <div className={'mt-[5.5rem]'}>
          <Lottie animationData={preSailTable} loop={true} />
          <div className={styles.notifications}>
            <Lottie animationData={notifications} loop={true} />
          </div>
        </div>
      </div>
      <Image
        alt={'Presail Social Proof'}
        src='/images/socialProofNumbersHorizontal.svg'
        width={'726px'}
        height={'149px'}
      />
      <div className={'mb-[11.438rem]'}/>
    </Section>
  )
}

export default Section0