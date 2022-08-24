import React from 'react'
import Image from 'next/image'
import HeroHeading from '@/components/HeroHeading/HeroHeading'
import Button from '@/components/Button/Button'
import TertiaryButtonGrid from '@/components/TertiaryButtonGrid/TertiaryButtonGrid'
import Section from '@/components/Section/Section'
import {useTranslation} from 'next-i18next'
import styles from './Section0.module.css'
import Lottie from 'lottie-react'
import preSailTableDesktop from '@/public/images/Section0/PresailTableDesktop.json'
import preSailTableMobile from '@/public/images/Section0/preSailTableMobile.json'
import notifications from '@/public/images/Section0/Notifications.json'

const Section0 = () => {
  const { t } = useTranslation('common')
  return (
    <Section>
      <div className={styles.sectionGrid}>
        <div>
          <div className={styles.logo}>
            <Image
              alt={'Presail Logo'}
              src='/images/Section0/Presail.svg'
              width={'112px'}
              height={'28px'}
            />
          </div>
          <HeroHeading
            title={t('heroHeading.title')}
            subtitle={t('heroHeading.subtitle')}
            className={styles.margin}
          />

          <Button
            text={t('button.text')}
            className={styles.margin}
          />
          <div className={styles.margin}>
            <TertiaryButtonGrid/>
          </div>
        </div>
        <div className={styles.table}>
          <div className={styles.tableDesktop}>
            <Lottie animationData={preSailTableDesktop} loop={true} />
          </div>
          <div className={styles.tableMobile}>
            <Lottie animationData={preSailTableMobile} loop={true} />
          </div>
          <div className={styles.notifications}>
            <Lottie animationData={notifications} loop={false} />
          </div>
        </div>
      </div>
      <div className={styles.socialProofDesktop}>
        <Image
          alt={'Presail Social Proof'}
          src='/images/Section0/socialProofHorizontal.svg'
          width={'726px'}
          height={'149px'}
        />
      </div>
      <div className={styles.socialProofMobile}>
        <Image
          alt={'Presail Social Proof Vertical'}
          src='/images/Section0/socialProofVertical.svg'
          width={'294px'}
          height={'402px'}
        />
      </div>
      <div className={'mb-[11.438rem]'}/>
    </Section>
  )
}

export default Section0