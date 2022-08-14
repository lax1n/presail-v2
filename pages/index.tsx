import React from 'react'
import type {GetStaticProps, NextPage} from 'next'
import HeroHeading from '../components/HeroHeading/HeroHeading'
import { useTranslation } from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Section from '../components/Section/Section'
import Button from '../components/Button/Button'
import TertiaryButtonGrid from '../components/TertiaryButtonGrid/TertiaryButtonGrid'


const Home: NextPage = () => {
  const { t } = useTranslation('common')
  return (
    <Section>
      <HeroHeading
        title={t('heroHeading.title')}
        subtitle={t('heroHeading.subtitle')}
        className={'mt-20 mb-12'}
      />

      <Button
        text={t('button.text')}
        className={'mb-12'}
      />

      <TertiaryButtonGrid/>
    </Section>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common'])),
  },
})