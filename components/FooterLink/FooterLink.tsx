import React from 'react'
import Link from 'next/link'
import {ArrowRight} from 'phosphor-react'
import styles from './FooterLink.module.css'
import classNames from 'classnames'

interface FooterLinkProps {
  name: string
  href: string
  className?: string
}

const FooterLink: React.FC<FooterLinkProps> = (props) => {
  const { name, href, className } = props
  return (
    <Link href={href} passHref>
      <div className={classNames('group', styles.wrapper, className)}>
        <a>{name}</a>
        <ArrowRight size={14} className={'group-active:animate-moveRight'}/>
      </div>
    </Link>
  )
}

export default FooterLink