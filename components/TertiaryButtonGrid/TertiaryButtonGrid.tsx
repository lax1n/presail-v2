import React from 'react'
import TertiaryButton from '../TertiaryButton/TertiaryButton'
import styles from './TertiaryButtonGrid.module.css'

export const tertiaryButtonData: { num: string, description: string }[] = [
  {num: '01', description: 'Deals management'},
  {num: '02', description: 'Contributions'},
  {num: '03', description: 'Asset management'},
  {num: '04', description: 'Investor portal'},
  {num: '05', description: 'Token vesting'},
  {num: '06', description: 'AlloSwapᵀᴹ / OTC'}
]

const TertiaryButtonGrid = () => {
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