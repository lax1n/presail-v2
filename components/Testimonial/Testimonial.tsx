import React from 'react'
import styles from './Testimonial.module.css'
import Image from 'next/image'
import classNames from 'classnames'

interface TestimonialProps {
  header?: string
  description: string
  name?: string
  logoPath?: string
  className?: string
}

const Testimonial: React.FC<TestimonialProps> = (props) => {
  const { header, description, name, logoPath, className } = props
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.quoteLeft}>
        <Image
          alt={''}
          src='/images/QuoteLeft.svg'
          width={'20px'}
          height={'20px'}
        />
      </div>
      <div className={'ml-8'}>
        <div className={styles.header}>
          {header}
        </div>

        <div className={'inline-flex'}>
          <div className={styles.testimonial}>
            {description}
          </div>
          <div className={styles.quoteRight}>
            <Image
              alt={''}
              src='/images/QuoteRight.svg'
              width={'20px'}
              height={'20px'}
            />
          </div>
        </div>
        <div className={styles.line}/>
        <div className={styles.items}>
          <div className={styles.name}>
            {name}
          </div>
          {logoPath &&
          <div className={styles.logo}>
            <Image
              alt={''}
              src={logoPath}
              width={'81px'}
              height={'16px'}
            />
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Testimonial