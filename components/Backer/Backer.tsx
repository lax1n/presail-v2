import React from 'react'
import Image from 'next/image'
import styles from './Backer.module.css'

interface BackerProps {
  backerImgSrc: string
  name: string
  occupation: string
  companyImgSrc: string
  companyAlt?: string
}

const Backer: React.FC<BackerProps> = (props) => {
  const { name, occupation, backerImgSrc, companyImgSrc, companyAlt } = props

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
        alt={companyAlt}
        width={'100px'}
        height={'14px'}
      />
    </div>
  )
}

export default Backer