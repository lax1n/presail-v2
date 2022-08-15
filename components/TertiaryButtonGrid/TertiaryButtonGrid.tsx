import React from 'react'
import TertiaryButton from '../TertiaryButton/TertiaryButton'
import styles from './TertiaryButtonGrid.module.css'

export const tertiaryButtonData = [
  ['01', 'Deals management'],
  ['02', 'Contributions'],
  ['03', 'Asset management'],
  ['04', 'Investor portal'],
  ['05', 'Token vesting'],
  ['06', 'AlloSwapᵀᴹ / OTC']
]

const TertiaryButtonGrid = () => {
  return (
    <div className={styles.buttonGrid}>
      {tertiaryButtonData.map((item)=>{
        return (
          <div key={item[0]}>
            <TertiaryButton num={item[0]} description={item[1]} className={'mb-2'}/>
          </div>
        )
      })}
    </div>
  )
}

export default TertiaryButtonGrid