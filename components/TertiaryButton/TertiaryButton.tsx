import React from 'react'
import styles from './TertiaryButton.module.css'
import {ArrowRight} from 'phosphor-react'
import classNames from 'classnames'
import {Link} from 'react-scroll'

interface TertiaryButtonProps {
  num: string
  description: string
  className?: string
}

const TertiaryButton: React.FC<TertiaryButtonProps> = (props) => {
  const { num, description, className } = props
  return (
    <Link
      to={num} spy={true} smooth={true}
      className={classNames(styles.btn, className)}>
      <span className={styles.num}>{num}</span>
      <span>{description}</span>
      <span className={styles.arrow}>
        <ArrowRight size={16}/>
      </span>
    </Link>
  )
}

export default TertiaryButton