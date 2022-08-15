import React from 'react'
import type {GetStaticProps, NextPage} from 'next'
import HeroHeading from '../components/HeroHeading/HeroHeading'
import { useTranslation } from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Section from '../components/Section/Section'
import Button from '../components/Button/Button'
import TertiaryButtonGrid from '../components/TertiaryButtonGrid/TertiaryButtonGrid'
import SectionHeading from '../components/SectionHeading/SectionHeading'


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

      <br/>

      <SectionHeading
        num={'02'}
        header={'COLLECT CONTRIBUTIONS'}
        title={'Simplify the contribution process for you and your investors without any manual work.'}
        paragraph1={'Presail automatically reconciles every investor, project, sheet, and form. Configure access at a tier-based, whitelist, or public level. Set up multiple pools with different rules, fees & min/max limits.'}
        paragraph2={'Split SAFT deals are supported with multiple token prices. Enable KYC / AML at choice. And create a custom fundraising page with your specific requirements - be it terms, deal info, and brand.'}
        buttonLink={'Asset management'}
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