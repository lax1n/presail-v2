import React from 'react'
import Image from 'next/image'
import Contact from '@/components/Contact/Contact'
import Button from '@/components/Button/Button'
import styles from './Avatar.module.css'
import classNames from 'classnames'

interface AvatarProps {
  src: string
  name: string
  occupation: string
  telegram: string
  email: string
  className?: string
}

const Avatar: React.FC<AvatarProps> = (props) => {
  const { src, name, occupation, telegram, email, className } = props
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Image
        src={src}
        alt={name}
        width={'96px'}
        height={'96px'}
      />
      <div className={styles.name}>
        {name}
      </div>
      <div className={styles.occupation}>
        {occupation}
      </div>
      <Contact
        src={'/images/Telegram.svg'}
        contactDetails={telegram}
        alt={'Telegram'}
      />
      <Contact
        src={'/images/Envelope.svg'}
        contactDetails={email}
        alt={'Email'}
      />
      <div className={'mt-4'}>
        <Button text={'Schedule Demo'}/>
      </div>
    </div>
  )
}

export default Avatar