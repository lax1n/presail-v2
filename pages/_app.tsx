import '../globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)