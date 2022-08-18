import React from 'react'
import Image from 'next/image'
import styles from './Contact.module.css'

interface ContactProps {
  src: string
  alt: string
  contactDetails: string
}

const Contact: React.FC<ContactProps> = (props) => {
  const { src, alt, contactDetails } = props

  return (
    <div className={styles.wrapper}>
      <Image
        src={src}
        alt={alt}
        width={'16px'}
        height={'16px'}
      />
      <div className={styles.contactDetails}>
        {contactDetails}
      </div>
    </div>
  )
}

export default Contact