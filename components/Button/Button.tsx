import React from 'react'
import styles from './Button.module.css'
import classNames from 'classnames'
import '@calcom/embed-react'

interface ButtonProps {
  text: string
  className?: string
}

const Button: React.FC<ButtonProps> = (props) => {
  const { text, className } = props

  return (
    <button data-cal-link="even-presail/30min" className={classNames(styles.btn, className)}>
      {text}
    </button>
  )
}

export default Button