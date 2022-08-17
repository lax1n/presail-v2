import React from 'react'
import FooterLink from '../FooterLink/FooterLink'

export const footerLinkData: { name: string, href: string }[] = [
  {name:'Github', href: 'https://github.com/'},
  {name:'Medium', href: 'https://medium.com/'},
  {name:'LinkedIn', href: 'https://www.linkedin.com/'},
  {name: 'Twitter', href: 'https://twitter.com/'},
]

const FooterLinkGrid = () => {
  return (
    <div className={'grid grid-cols-1'}>
      {footerLinkData.map((item)=>{
        return (
          <div key={item.name}>
            <FooterLink name={item.name} href={item.href} className={'mb-2'}/>
          </div>
        )
      })}
    </div>
  )
}

export default FooterLinkGrid