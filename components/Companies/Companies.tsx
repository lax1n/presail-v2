import React from 'react'
import {useTranslation} from 'next-i18next'
import Image from 'next/image'
import styles from './Companies.module.css'
import classNames from 'classnames'

interface CompaniesProps {
  className?: string
}

const Companies: React.FC<CompaniesProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('common')

  const companyData: { alt: string, src: string, width: string, height: string }[] = [
    {
      alt: 'Weekend Fund',
      src: '/images/Companies/WeekendFund.svg',
      width: '160px',
      height: '32px'
    },
    {
      alt: 'Kraken Ventures',
      src: '/images/Companies/KrakenVentures.svg',
      width: '184px',
      height: '16px'
    },
    {
      alt: 'SNO',
      src: '/images/Companies/sno.svg',
      width: '62px',
      height: '32px'
    },
    {
      alt: 'Skyfall',
      src: '/images/Companies/Skyfall.svg',
      width: '160px',
      height: '40px'
    },
    {
      alt: 'GFC',
      src: '/images/Companies/GFC.svg',
      width: '59px',
      height: '24px'
    },
  ]

  return (
    <div className={classNames(styles.companiesGrid, className)}>
      {companyData.map((item)=>{
        return (
          <div key={item.alt}>
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Companies