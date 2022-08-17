import React from 'react'
import TertiaryButton from '../TertiaryButton/TertiaryButton'
import styles from './TertiaryButtonGrid.module.css'
import {useTranslation} from 'next-i18next'

const TertiaryButtonGrid = () => {
  const { t } = useTranslation('common')

  const tertiaryButtonData: { num: string, description: string }[] = [
    {
      num: t('tertiaryButton.dealsManagement.num'),
      description: t('tertiaryButton.dealsManagement.description')
    },
    {
      num: t('tertiaryButton.contributions.num'),
      description: t('tertiaryButton.contributions.description')
    },
    {
      num: t('tertiaryButton.assetManagement.num'),
      description: t('tertiaryButton.assetManagement.description')
    },
    {
      num: t('tertiaryButton.investorPortal.num'),
      description: t('tertiaryButton.investorPortal.description')
    },
    {
      num: t('tertiaryButton.tokenVesting.num'),
      description: t('tertiaryButton.tokenVesting.description')
    },
    {
      num: t('tertiaryButton.alloSwap.num'),
      description: t('tertiaryButton.alloSwap.description')
    },
  ]

  return (
    <div className={styles.buttonGrid}>
      {tertiaryButtonData.map((item)=>{
        return (
          <div key={item.num}>
            <TertiaryButton num={item.num} description={item.description} className={'mb-2'}/>
          </div>
        )
      })}
    </div>
  )
}

export default TertiaryButtonGrid