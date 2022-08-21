import React from 'react'
import classNames from 'classnames'
import styles from './Section.module.css'

export type colorScheme = 'light' | 'dark'

export type style = 'static' | 'dynamic'

interface SectionProps {
  className?: string
  colorScheme?: colorScheme
  children?: React.ReactNode
  style?: style
}

const Section: React.FC<SectionProps> = (props) => {
  const { children, className, colorScheme='light', style='dynamic' } = props

  const sectionStyle = classNames(styles.section, {
    [styles.light]: colorScheme === 'light',
    [styles.dark]: colorScheme === 'dark',
  })

  const section = classNames(sectionStyle, {
    [styles.static]: style === 'static',
  })

  return (
    <div className={classNames(className, section)}>
      {children}
    </div>
  )
}

export default Section