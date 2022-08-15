import React from 'react'
import {ArrowDown} from 'phosphor-react'
import styles from './TertiaryDown.module.css'
import classNames from 'classnames'

interface TertiaryDownProps {
  link?: string
}

const TertiaryDown: React.FC<TertiaryDownProps> = (props) => {
  const { link } = props

  return (

    <button className={classNames('group', styles.wrapper)}>
      <span className={'group-active:animate-moveDown'}>
        <ArrowDown size={16}/>
      </span>
      <span className={styles.link}>{link}</span>
    </button>
  )
}

export default TertiaryDown