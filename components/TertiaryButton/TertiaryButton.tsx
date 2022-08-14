import React from 'react'
import styles from './TertiaryButton.module.css'
import {ArrowRight} from 'phosphor-react'
import classNames from 'classnames'

interface TertiaryButtonProps {
  num: string
  text: string
  className?: string
}

const TertiaryButton: React.FC<TertiaryButtonProps> = (props) => {
  const { num, text, className } = props
  return (
    <button
      className={classNames(styles.btn, className)}>
      <span className={styles.num}>{num}</span>
      <span>{text}</span>
      <span className={styles.arrow}>
        <ArrowRight size={16}/>
      </span>
    </button>
  )
}

export default TertiaryButton