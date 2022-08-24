import React from 'react'
import styles from './Button.module.css'
import classNames from 'classnames'
import '@calcom/embed-react'
import Cal from '@calcom/embed-react'

interface ButtonProps {
  text: string
  className?: string
}

const Button: React.FC<ButtonProps> = (props) => {
  const { text, className } = props

  return (
    <div>
      <Cal calLink={'even-presail/30min'} className={'hidden'}/>
      <button data-cal-link={'even-presail/30min'} data-cal-config={'/public/calconfig.json'} className={classNames(styles.btn, className)}>
        {text}
      </button>
    </div>
  )
}

export default Button