import React from 'react'
import styles from './Footer.module.css'

interface FooterProps {
  date: string
  description: string
}

const Footer: React.FC<FooterProps> = (props) => {
  const { date, description } = props
  return (
    <div className={styles.wrapper}>
      <div className={styles.date}>
        {date}
      </div>
      <div className={styles.description}>
        {description}
      </div>
    </div>
  )
}

export default Footer