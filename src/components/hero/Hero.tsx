

import React from 'react'
import * as S from './style'
import Image from 'next/image'
import LogoMain from '../../../public/sale.png'
import Link from 'next/link'

const Hero = () => {
  return (
    <S.Container>
      <S.ContainerLeft>
        <div className='centralDiv'>
            <div className='handIcon'>
                <h2>Cell Phones Near You Always</h2>
               
                <div className='heroLatest'>
            <Link href='/shopcategory/ShopCategory?banner=%2F_next%2Fstatic%2Fmedia%2Fwomen.64447bfb.png'>
              <div>Second Hand</div>
            </Link>
           
        </div>
            </div>
            <Image src={LogoMain} width={100} height={100} alt=''/>
        </div>
        
      </S.ContainerLeft>
      <S.ContainerRight>
        
      </S.ContainerRight>
    </S.Container>
  )
}

export default Hero
