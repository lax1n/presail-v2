import React from 'react'
import type {GetStaticProps, NextPage} from 'next'
import HeroHeading from '../components/HeroHeading/HeroHeading'
import { useTranslation } from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Section from '../components/Section/Section'


const Home: NextPage = () => {
  const { t } = useTranslation('common')
  return (
    <Section>
      <HeroHeading
        title={t('heroHeading.title')}
        subtitle={t('heroHeading.subtitle')}
        className={'mt-20 mb-4'}
      />
    </Section>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common'])),
  },
})