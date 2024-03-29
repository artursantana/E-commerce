

import React from 'react'
import * as S from './style'
import Image from 'next/image'
import LogoMain from '../../../public/sale.svg'
import Link from 'next/link'

const Hero = () => {
  return (
    <S.Container>
      <S.ContainerLeft>
        <div className='centralDiv'>
            <div className='handIcon'>
                <h2><span>Cell Phones</span> Near You Always</h2>
               
                <div className='heroLatest'>
            <Link href='/shopcategory/ShopCategorySecondHand?banner=%2F_next%2Fstatic%2Fmedia%2Fwomen.47ee1840.svg'>
              Second Hand
            </Link>
           
        </div>
            </div>
            <Image src={LogoMain} width={100} height={100} alt=''/>
        </div>
        
      </S.ContainerLeft>
      <S.ContainerRight>
        <hr />
      </S.ContainerRight>
    </S.Container>
  )
}

export default Hero
