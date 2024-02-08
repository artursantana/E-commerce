

import React from 'react'
import * as S from './style'
import Image from 'next/image'

const Offers = () => {
  return (
    <S.Container>
      <S.ContainerLeft>

        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
    <p>ONLY ON BEST SELLERS PRODUCTS</p>
    <button>Check Now</button>
      </S.ContainerLeft>
      <S.ContainerRight>
        <Image src='/' alt='' width={100} height={100}/>
      </S.ContainerRight>
    </S.Container>
  )
}

export default Offers
