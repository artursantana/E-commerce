

import * as S from './style'
import React from 'react'
import Image from 'next/image'

const ProductDisplay = ({product}: any) => {


    
  return (
    <S.Container>
        <S.ContainerLeft>
            <S.ContainerImg>
        <Image src='/' width={100} height={100} alt=''/>
        <Image src='/' width={100} height={100} alt=''/>
        <Image src='/' width={100} height={100} alt=''/>
        <Image src='/' width={100} height={100} alt=''/>
            </S.ContainerImg>
        </S.ContainerLeft>

        <S.ContainerRight>

        </S.ContainerRight>
    </S.Container>
  )
}

export default ProductDisplay
