import React from 'react'
import {ArrowDown} from 'phosphor-react'
import styles from './TertiaryDown.module.css'
import classNames from 'classnames'
import {colorScheme} from '../Section/Section'
import {Link} from 'react-scroll'

interface TertiaryDownProps {
  link?: string
  id: string
  colorScheme?: colorScheme
}

const TertiaryDown: React.FC<TertiaryDownProps> = (props) => {
  const { link, id, colorScheme='light' } = props

  const buttonStyle = classNames(styles.wrapper, {
    [styles.light]: colorScheme === 'light',
    [styles.dark]: colorScheme === 'dark',
  })

  return (
    <Link
      to={id} spy={true} smooth={true}
      className={classNames('group', buttonStyle)}>
      <span className={'group-active:animate-moveDown'}>
        <ArrowDown size={16}/>
      </span>
      <span className={styles.link}>{link}</span>
    </Link>
  )
}

export default TertiaryDown