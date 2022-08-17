import React from 'react'
import styles from './SectionHeading.module.css'
import TertiaryDown from '../TertiaryDown/TertiaryDown'
import classNames from 'classnames'
import {colorScheme} from '../Section/Section'

interface SectionHeadingProps {
  num?: string
  header: string
  title: string
  paragraph1: string
  paragraph2?: string
  buttonLink?: string
  id?: string
  colorScheme?: colorScheme
}

const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { num, header, title, paragraph1, paragraph2, buttonLink, id, colorScheme='light' } = props

  const numStyle = classNames(styles.num, {
    [styles.headerLight]: colorScheme === 'light',
    [styles.headerDark]: colorScheme === 'dark',
  })

  const headerStyle = classNames(styles.header, {
    [styles.headerLight]: colorScheme === 'light',
    [styles.headerDark]: colorScheme === 'dark',
  })

  const titleStyle = classNames(styles.title, {
    [styles.titleLight]: colorScheme === 'light',
    [styles.titleDark]: colorScheme === 'dark',
  })

  const paragraphStyle = classNames(styles.paragraph, {
    [styles.paragraphLight]: colorScheme === 'light',
    [styles.paragraphDark]: colorScheme === 'dark',
  })

  const nextId = '0' + (parseInt(id!) + 1).toString() // example: id = '01', nextId = '02'

  return (
    <div className={styles.width} id={id}>
      <div className={numStyle}>
        {num}
      </div>
      <div className={styles.wrapper}>
        <div className={headerStyle}>
          {header}
        </div>
        <div className={titleStyle}>
          {title}
        </div>
        <div className={styles.line}/>
        <div className={paragraphStyle}>
          {paragraph1}
        </div>
        {paragraph2 &&
          <>
            <br/>
            <div className={paragraphStyle}>
              {paragraph2}
            </div>
          </>
        }
        {id && <TertiaryDown link={buttonLink} id={nextId} colorScheme={colorScheme}/>}
      </div>
    </div>
  )
}

export default SectionHeading