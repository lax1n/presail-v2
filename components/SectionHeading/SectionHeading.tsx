import React from 'react'
import styles from './SectionHeading.module.css'
import TertiaryDown from '../TertiaryDown/TertiaryDown'

interface SectionHeadingProps {
  num?: string
  header: string
  title: string
  paragraph1: string
  paragraph2?: string
  buttonLink?: string
}

const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { num, header, title, paragraph1, paragraph2, buttonLink } = props
  return (
    <div className={styles.width}>
      <div className={styles.num}>
        {num}
      </div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          {header}
        </div>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.line}/>
        <div className={styles.paragraph}>
          {paragraph1}
        </div>
        <br/>
        <div className={styles.paragraph}>
          {paragraph2}
        </div>
        <TertiaryDown link={buttonLink}/>
      </div>
    </div>
  )
}

export default SectionHeading