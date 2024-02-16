




import React from 'react'
import * as S from './style'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/logo.png'
import LogoFooter from '../../../public/sale.webp'

const Footer = () => {
  return (
    <S.Container>
        <S.ContainerLogo>
        <Image src={Logo} width={100} height={100} alt=''/>
        <p>E-commerce</p>
        </S.ContainerLogo>
        <S.ContainerLinks>
            <Link href='/shop/Shop'>Shop</Link>
            <Link href='/shopcategory/ShopCategory?banner=%2F_next%2Fstatic%2Fmedia%2Fmen.93581f53.png'>NewPhones</Link>
            <Link href='/cart/Cart'>Car</Link>
        </S.ContainerLinks>
        <S.ContainerSocialIcon>
            <div className='IconContainer'>
            <Image src={LogoFooter} width={100} height={100} alt=''/>
            </div>
            <div className='IconContainer'>
            <Image src={LogoFooter} width={100} height={100} alt=''/>
            </div>
            <div className='IconContainer'>
            <Image src={LogoFooter} width={100} height={100} alt=''/>
            </div>
        </S.ContainerSocialIcon>
        <S.footercopyright>
            <hr />
            Copyright @ 2024 - All Right Reserve.
        </S.footercopyright>
    </S.Container>
  )
}

export default Footer
