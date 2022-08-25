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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
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