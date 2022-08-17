import React from 'react'
import styles from './Caption.module.css'
import classNames from 'classnames'

interface CaptionProps {
  title: string
  description: string
  className?: string
}

const Caption: React.FC<CaptionProps> = (props) => {
  const { title, description, className } = props

  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.description}>
        {description}
      </div>
    </div>
  )
}

export default Caption