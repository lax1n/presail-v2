import React from 'react'
import Section from '@/components/Section/Section'
import SectionHeading from '@/components/Headings/SectionHeading/SectionHeading'
import {useTranslation} from 'next-i18next'
import Image from 'next/image'
import styles from './Section5.module.css'
import {ArrowRight} from 'phosphor-react'
import classNames from 'classnames'

const Section5 = () => {
  const { t } = useTranslation('common')
  return (
    <Section colorScheme={'dark'}>
      <div className={styles.securityBadgesDesktop} data-aos={'zoom-in'}>
        <Image
          alt={'Presail Security Badges'}
          src={'/images/Section5/SecurityBadgesHorizontal.svg'}
          width={'964px'}
          height={'160px'}
          className={styles.scoreScale}
        />
        <div className={classNames('group', styles.button)}>
          <button data-cal-link={'even-presail/30min'} data-cal-config={'/public/calconfig.json'}>
            Schedule a demo
          </button>
          <ArrowRight size={16} className={'group-active:animate-moveRight'}/>
        </div>
      </div>
      <div className={styles.securityBadgesMobile} data-aos={'zoom-in'}>
        <Image
          alt={'Presail Security Badges'}
          src={'/images/Section5/SecurityBadgesVertical.svg'}
          width={'310px'}
          height={'464px'}
        />
      </div>
      <div className={styles.sectionHeading}>
        <SectionHeading
          num={t('tokenVesting.num')}
          header={t('tokenVesting.header')}
          title={t('tokenVesting.title')}
          paragraph1={t('tokenVesting.paragraph1')}
          paragraph2={t('tokenVesting.paragraph2')}
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