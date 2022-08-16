import React from 'react'
import type {GetStaticProps, NextPage} from 'next'
import HeroHeading from '../components/HeroHeading/HeroHeading'
import { useTranslation } from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Section from '../components/Section/Section'
import Button from '../components/Button/Button'
import TertiaryButtonGrid from '../components/TertiaryButtonGrid/TertiaryButtonGrid'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import Image from 'next/image'


const Home: NextPage = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <Section>
        <div className={'grid grid-cols-2'}>
          <div>
            <div className={'items-start ml-[2rem] sm:ml-[7.5rem] mt-[9.563rem] mb-12'}>
              <Image
                alt={'Presail Logo'}
                src='/images/Presail.svg'
                width={'112px'}
                height={'28px'}
              />
            </div>
            <HeroHeading
              title={t('heroHeading.title')}
              subtitle={t('heroHeading.subtitle')}
              className={'mb-12'}
            />

            <Button
              text={t('button.text')}
              className={'mb-12'}
            />

            <TertiaryButtonGrid/>
          </div>
          <div className={'mt-[5.5rem]'}>
            <Image
              alt={'Presail Table'}
              src='/images/Table.svg'
              width={'652px'}
              height={'536px'}
            />
          </div>
        </div>
        <Image
          alt={'Presail Social Proof'}
          src='/images/socialProofNumbersHorizontal.svg'
          width={'726px'}
          height={'149px'}
        />
        <div className={'mb-[11.438rem]'}/>
      </Section>
      <Section colorScheme={'dark'}>
        <div className={'grid grid-cols-2'}>
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
          <div className={'relative w-[33.313rem] h-[20.563rem] -mt-[6.5rem]'}>
            <Image
              alt={'Presail All Deals'}
              src='/images/01AllDeals.webp'
              layout={'fill'}
              objectFit={'contain'}
            />
          </div>
        </div>
        <div className={'mb-[7rem]'}/>
      </Section>
      <Section>
        <div className={'grid grid-cols-2'}>
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
          <div className={'relative w-[23.063rem] h-[44.188rem] -mt-[9.5rem]'}>
            <Image
              alt={'Presail Collect Contributions'}
              src='/images/02CollectContributions.webp'
              layout={'fill'}
              objectFit={'contain'}
            />
          </div>
        </div>
        <div className={'relative w-[60.313rem] h-[28.75rem] mt-[5.5rem] ml-[7.5rem] sm:ml-[13rem]'}>
          <Image
            alt={'Presail Chart'}
            src='/images/03Chart.webp'
            layout={'fill'}
            objectFit={'contain'}
          />
        </div>
        <SectionHeading
          num={t('section3.num')}
          header={t('section3.header')}
          title={t('section3.title')}
          paragraph1={t('section3.paragraph1')}
          buttonLink={t('section3.buttonLink')}
          colorScheme={t('section3.colorScheme')}
          id={t('section3.num')}
        />
        <div className={'mb-[12.5rem]'}/>
      </Section>
      <Section colorScheme={'dark'}>
        <div className={'grid grid-cols-2'}>
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
          <div className={'relative w-[21.75rem] h-[25.75rem] -mt-[18.5rem]'}>
            <Image
              alt={'Presail Investor Card'}
              src='/images/04InvestorCard.webp'
              layout={'fill'}
              objectFit={'contain'}
            />
          </div>
        </div>
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