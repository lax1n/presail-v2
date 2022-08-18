import React from 'react'
import Caption from '@/components/Caption/Caption'
import Section from '@/components/Section/Section'
import styles from './Section8.module.css'
import {useTranslation} from 'next-i18next'
import { Trans } from 'react-i18next'
import Avatar from '@/components/Avatar/Avatar'
import Backer from '@/components/Backer/Backer'

const Section8 = () => {
  const { t } = useTranslation('common')
  return (
    <Section>
      <div className={styles.avatarGrid}>
        <Caption
          title={t('captionGetInTouch.title')}
          description={t('captionGetInTouch.description')}
        />
        <Avatar
          src={'/images/EvenPresail.webp'}
          name={'Even Bergan Bugge'}
          occupation={'Account Excecutive'}
          telegram={'@pacyos'}
          email={'even@presail.com'}
        />
      </div>
      <Caption
        title={t('captionBackers.title')}
        description={<Trans i18nKey='captionBackers.description' />}
        className={styles.captionBackers}
      />
      <div className={'ml-[25rem] mb-[2.75rem] grid grid-cols-2 max-w-[26rem] gap-8'}>
        <Backer
          name={'Avlok Kohli'}
          occupation ={'CEO, AngelList Venture'}
          backerImgSrc={'/images/AvlokKohli.webp'}
          companyImgSrc={'/images/AngelList.webp'}
          companyAlt={'AngelList logo'}
        />
        <Backer
          name={'Aleksander Larsen'}
          occupation ={'COO Sky Mavis / Axie Infinity'}
          backerImgSrc={'/images/Aleksander.webp'}
          companyImgSrc={'/images/SkyAxie.svg'}
          companyAlt={'AxieInfinity'}
        />
      </div>
    </Section>
  )
}

export default Section8