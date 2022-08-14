import React from 'react'
import styles from './Button.module.css'
import classNames from 'classnames'

interface ButtonProps {
  text: string
  className?: string
}

const Button: React.FC<ButtonProps> = (props) => {
  const { text, className } = props

  return (
    <button  className={classNames(styles.btn, className)}>
      {text}
    </button>
  )
}

export default Button