

import * as S from './style'
import React, { ReactNode } from 'react'
import Image from 'next/image'


const ProductDisplay = ({product}: any) => {

    console.log(product)
  return (
    <S.Container>
        <S.ContainerLeft>
            <S.ContainerImg>
        <Image src={product.thumbnail} width={100} height={100} alt=''/>
        <Image src={product.thumbnail} width={100} height={100} alt=''/>
        <Image src={product.thumbnail} width={100} height={100} alt=''/>
        <Image src={product.thumbnail} width={100} height={100} alt=''/>
        <h1>{product.title}</h1>
       
            </S.ContainerImg>
        </S.ContainerLeft>
        <S.ContainerRight>

        </S.ContainerRight>
    </S.Container>
  )
}

export default ProductDisplay
