import React from 'react'
import Caption from '@/components/People/Caption/Caption'
import Section from '@/components/Section/Section'
import styles from './Section8.module.css'
import {useTranslation} from 'next-i18next'
import { Trans } from 'react-i18next'
import Avatar from '@/components/People/Avatar/Avatar'
import Backer from '@/components/People/Backer/Backer'
import Companies from '@/components/Companies/Companies'
import Image from 'next/image'

const Section8 = () => {
  const { t } = useTranslation('common')
  return (
    <Section>
      <div className={styles.compliance} data-aos={'zoom-in'}>
        <Image
          alt={'Presail Compliance'}
          src={'/images/Section8/Compliance.svg'}
          width={'514px'}
          height={'148px'}
          className={'scale-125'}
        />
      </div>
      <div className={styles.complianceMobile} data-aos={'zoom-in'}>
        <Image
          alt={'Presail Compliance'}
          src={'/images/Section8/ComplianceMobile.svg'}
          width={'144px'}
          height={'416px'}
          className={'object-cover'}
        />
      </div>
      <div className={styles.avatarGrid}>
        <Caption
          title={t('captionGetInTouch.title')}
          description={t('captionGetInTouch.description')}
        />
        <Avatar
          src={t('avatar.src')}
          name={t('avatar.name')}
          occupation={t('avatar.occupation')}
          telegram={t('avatar.telegram')}
          email={t('avatar.email')}
        />
      </div>
      <div className={styles.smallCaption}>
        <Caption
          title={t('captionBackers.title')}
          description={<Trans i18nKey='captionBackers.description' />}
          className={styles.captionBackers}
        />
      </div>
      <div className={styles.backerGrid}>
        <Backer
          name={t('backerAvlok.name')}
          occupation ={t('backerAvlok.occupation')}
          backerImgSrc={t('backerAvlok.backerImgSrc')}
          companyImgSrc={t('backerAvlok.companyImgSrc')}
          companyImgWidth={t('backerAvlok.companyImgWidth')}
          companyImgHeight={t('backerAvlok.companyImgHeight')}
          companyImgAlt={t('backerAvlok.companyAlt')}
        />
        <Backer
          name={t('backerAleksander.name')}
          occupation ={t('backerAleksander.occupation')}
          backerImgSrc={t('backerAleksander.backerImgSrc')}
          companyImgSrc={t('backerAleksander.companyImgSrc')}
          companyImgWidth={t('backerAleksander.companyImgWidth')}
          companyImgHeight={t('backerAleksander.companyImgHeight')}
          companyImgAlt={t('backerAleksander.companyAlt')}
        />
      </div>
      <Companies
        className={'mb-[5.25rem]'}
      />
    </Section>
  )
}

export default Section8