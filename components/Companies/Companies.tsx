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
      alt: t('companies.weekendFund.alt'),
      src: t('companies.weekendFund.src'),
      width: t('companies.weekendFund.width'),
      height: t('companies.weekendFund.height')
    },
    {
      alt: t('companies.kraken.alt'),
      src: t('companies.kraken.src'),
      width: t('companies.kraken.width'),
      height: t('companies.kraken.height')
    },
    {
      alt: t('companies.sno.alt'),
      src: t('companies.sno.src'),
      width: t('companies.sno.width'),
      height: t('companies.sno.height')
    },
    {
      alt: t('companies.skyfall.alt'),
      src: t('companies.skyfall.src'),
      width: t('companies.skyfall.width'),
      height: t('companies.skyfall.height')
    },
    {
      alt: t('companies.gfc.alt'),
      src: t('companies.gfc.src'),
      width: t('companies.gfc.width'),
      height: t('companies.gfc.height')
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