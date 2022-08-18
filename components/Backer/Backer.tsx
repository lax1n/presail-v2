import React from 'react'
import Image from 'next/image'
import styles from './Backer.module.css'

interface BackerProps {
  backerImgSrc: string
  name: string
  occupation: string
  companyImgSrc: string
  companyImgWidth: string
  companyImgHeight: string
  companyImgAlt?: string
}

const Backer: React.FC<BackerProps> = (props) => {
  const {
    name,
    occupation,
    backerImgSrc,
    companyImgSrc,
    companyImgWidth,
    companyImgHeight,
    companyImgAlt
  } = props

  return (
    <div className={styles.wrapper}>
      <Image
        src={backerImgSrc}
        alt={name}
        width={'96px'}
        height={'96px'}
      />
      <div className={styles.name}>
        {name}
      </div>
      <div className={styles.occupation}>
        {occupation}
      </div>
      <Image
        src={companyImgSrc}
        alt={companyImgAlt}
        width={companyImgWidth}
        height={companyImgHeight}
      />
    </div>
  )
}

export default Backer