import React from 'react'
import {ArrowDown} from 'phosphor-react'
import styles from './TertiaryDown.module.css'
import classNames from 'classnames'
import {colorScheme} from '../Section/Section'

interface TertiaryDownProps {
  link?: string
  colorScheme?: colorScheme
}

const TertiaryDown: React.FC<TertiaryDownProps> = (props) => {
  const { link, colorScheme='light' } = props

  const buttonStyle = classNames(styles.wrapper, {
    [styles.light]: colorScheme === 'light',
    [styles.dark]: colorScheme === 'dark',
  })

  return (
    <button className={classNames('group', buttonStyle)}>
      <span className={'group-active:animate-moveDown'}>
        <ArrowDown size={16}/>
      </span>
      <span className={styles.link}>{link}</span>
    </button>
  )
}

export default TertiaryDown