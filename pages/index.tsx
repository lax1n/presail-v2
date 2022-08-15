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
    <>
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
      </Section>
      <Section colorScheme={'dark'}>
        <SectionHeading
          num={t('section1.num')}
          header={t('section1.header')}
          title={t('section1.title')}
          paragraph1={t('section1.paragraph1')}
          paragraph2={t('section1.paragraph2')}
          buttonLink={t('section1.buttonLink')}
          colorScheme={t('section1.colorScheme')}
          id={t('section1.num')}
        />
      </Section>
      <Section>
        <SectionHeading
          num={t('section2.num')}
          header={t('section2.header')}
          title={t('section2.title')}
          paragraph1={t('section2.paragraph1')}
          paragraph2={t('section2.paragraph2')}
          buttonLink={t('section2.buttonLink')}
          colorScheme={t('section2.colorScheme')}
          id={t('section2.num')}
        />
      </Section>
      <Section>
        <SectionHeading
          num={t('section3.num')}
          header={t('section3.header')}
          title={t('section3.title')}
          paragraph1={t('section3.paragraph1')}
          buttonLink={t('section3.buttonLink')}
          colorScheme={t('section3.colorScheme')}
          id={t('section3.num')}
        />
      </Section>
      <Section colorScheme={'dark'}>
        <SectionHeading
          num={t('section4.num')}
          header={t('section4.header')}
          title={t('section4.title')}
          paragraph1={t('section4.paragraph1')}
          paragraph2={t('section4.paragraph2')}
          buttonLink={t('section4.buttonLink')}
          colorScheme={t('section4.colorScheme')}
          id={t('section4.num')}
        />
      </Section>
      <Section colorScheme={'dark'}>
        <SectionHeading
          num={t('section5.num')}
          header={t('section5.header')}
          title={t('section5.title')}
          paragraph1={t('section5.paragraph1')}
          buttonLink={t('section5.buttonLink')}
          colorScheme={t('section5.colorScheme')}
          id={t('section5.num')}
        />
      </Section>
      <Section>
        <SectionHeading
          num={t('section6.num')}
          header={t('section6.header')}
          title={t('section6.title')}
          paragraph1={t('section6.paragraph1')}
          buttonLink={t('section6.buttonLink')}
          colorScheme={t('section6.colorScheme')}
          id={t('section6.num')}
        />
      </Section>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common'])),
  },
})