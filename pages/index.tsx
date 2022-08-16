import React from 'react'
import type {GetStaticProps, NextPage} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import AllSections from '../components/Sections/AllSections/AllSections'

const Home: NextPage = () => {
  return <AllSections/>
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common'])),
  },
})