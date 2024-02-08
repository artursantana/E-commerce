




import React from 'react'
import * as S from './style'
import Image from 'next/image'

const Footer = () => {
  return (
    <S.Container>
        <S.ContainerLogo>
        <Image src='/' width={100} height={100} alt=''/>
        <p>E-commerce</p>
        </S.ContainerLogo>
        <S.ContainerLinks>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </S.ContainerLinks>
        <S.ContainerSocialIcon>
            <div className='IconContainer'>
            <Image src='/' width={100} height={100} alt=''/>
            </div>
            <div className='IconContainer'>
            <Image src='/' width={100} height={100} alt=''/>
            </div>
            <div className='IconContainer'>
            <Image src='/' width={100} height={100} alt=''/>
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
