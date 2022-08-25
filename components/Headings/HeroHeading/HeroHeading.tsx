import React from 'react'
import styles from './HeroHeading.module.css'
import classNames from 'classnames'

interface HeroHeadingProps {
  title: string
  subtitle: string
  className?: string
}

const HeroHeading: React.FC<HeroHeadingProps> = (props) => {
  const { title, subtitle, className } = props
  return (
    <div className={classNames(className)}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.line}/>
        <div className={styles.subtitle}>
          {subtitle}
        </div>
      </div>

    </div>
  )
}

export default HeroHeading