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

  const color = colorScheme === 'light' ? 'bg-brightGray': 'bg-gunMetal'

  return (
    <div className={color}>
      <div className={classNames(className, styles.section)}>
        {children}
      </div>
    </div>
  )
}

export default Section