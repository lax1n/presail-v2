import React from 'react'
import type {GetStaticProps, NextPage} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import AllSections from '../components/Sections/AllSections/AllSections'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Presail</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AllSections/>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common'])),
  },
})