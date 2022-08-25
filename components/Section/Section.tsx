import React from 'react'
import classNames from 'classnames'
import styles from './Section.module.css'

export type colorScheme = 'light' | 'dark'

interface SectionProps {
  className?: string
  colorScheme?: colorScheme
  children?: React.ReactNode
}

const Section: React.FC<SectionProps> = (props) => {
  const { children, className, colorScheme='light' } = props

  const sectionStyle = classNames(styles.section, {
    [styles.light]: colorScheme === 'light',
    [styles.dark]: colorScheme === 'dark',
  })

  return (
    <div className={classNames(className, sectionStyle)}>
      {children}
    </div>
  )
}

export default Section