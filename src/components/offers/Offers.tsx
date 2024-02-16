

import React from 'react'
import * as S from './style'
import Image from 'next/image'
import Link from 'next/link'

const Offers = () => {
  return (
    
      <S.Container>
    
        <S.ContainerLeft>
          <h1>Exclusive</h1>
          <h1>Offers for You</h1>
      <p>ONLY ON BEST SELLERS PRODUCTS</p>
      <Link href='http://localhost:3000/shopcategory/ShopCategory?banner=%2F_next%2Fstatic%2Fmedia%2Fmen.93581f53.png'>Check Now</Link>
        </S.ContainerLeft>
        <S.ContainerRight>
          <Image src='/offer.png' alt='' width={250} height={250}/>
        </S.ContainerRight>
      </S.Container>
        
    
  )
}

export default Offers
