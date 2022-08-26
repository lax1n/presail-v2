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
      <div className={styles.compliance} >
        <Image data-aos={'zoom-in'}
          alt={'Presail Compliance'}
          src={'/images/Section8/Compliance.svg'}
          width={'514px'}
          height={'148px'}
          className={'scale-125'}
        />
      </div>
      <div className={styles.complianceMobile}>
        <Image data-aos={'zoom-in'}
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
          src={'/images/Backers/EvenPresail.svg'}
          name={'Even Bergan Bugge'}
          occupation={'Account Excecutive'}
          telegram={'@pacyos'}
          email={'even@presail.com'}
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
          name={'Avlok Kohli'}
          occupation ={'CEO, AngelList Venture'}
          backerImgSrc={'/images/Backers/AvlokKohli.svg'}
          companyImgSrc={'/images/Backers/AngelList.svg'}
          companyImgWidth={'103px'}
          companyImgHeight={'14px'}
          companyImgAlt={'AngelList logo'}
        />
        <Backer
          name={'Aleksander Larsen'}
          occupation ={'COO Sky Mavis / Axie Infinity'}
          backerImgSrc={'/images/Backers/AleksanderLarsen.svg'}
          companyImgSrc={'/images/Backers/SkyAxie.svg'}
          companyImgWidth={'95px'}
          companyImgHeight={'14px'}
          companyImgAlt={'AxieInfinity'}
        />
      </div>
      <Companies
        className={'mb-[5.25rem]'}
      />
    </Section>
  )
}

export default Section8