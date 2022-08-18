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
          src={t('avatar.src')}
          name={t('avatar.name')}
          occupation={t('avatar.occupation')}
          telegram={t('avatar.telegram')}
          email={t('avatar.email')}
        />
      </div>
      <Caption
        title={t('captionBackers.title')}
        description={<Trans i18nKey='captionBackers.description' />}
        className={styles.captionBackers}
      />
      <div className={styles.backerGrid}>
        <Backer
          name={t('backerAvlok.name')}
          occupation ={t('backerAvlok.occupation')}
          backerImgSrc={t('backerAvlok.backerImgSrc')}
          companyImgSrc={t('backerAvlok.companyImgSrc')}
          companyAlt={t('backerAvlok.companyAlt')}
        />
        <Backer
          name={t('backerAleksander.name')}
          occupation ={t('backerAleksander.occupation')}
          backerImgSrc={t('backerAleksander.backerImgSrc')}
          companyImgSrc={t('backerAleksander.companyImgSrc')}
          companyAlt={t('backerAleksander.companyAlt')}
        />
      </div>
    </Section>
  )
}

export default Section8