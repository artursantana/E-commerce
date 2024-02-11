

import * as S from './style'
import React, { ReactNode, useContext } from 'react'
import Image from 'next/image'
import { ShopContext } from '@/context/ShopContext'

interface Props {
  addToCart: (itemId: number) => void|undefined; 
  removeFromCart: (itemId: number) => void|undefined; 
}

const ProductDisplay = ({product}: any) => {
const { addToCart, removeFromCart } = useContext(ShopContext) as Props
  return (
    <S.Container>
       <h1>{product.title}</h1>
        <S.ContainerLeft>
            <S.ContainerImgList>
        <Image src={product.thumbnail} width={100} height={100} alt=''/>
        <Image src={product.thumbnail} width={100} height={100} alt=''/>
        <Image src={product.thumbnail} width={100} height={100} alt=''/>
        <Image src={product.thumbnail} width={100} height={100} alt=''/>
       
            </S.ContainerImgList>
            <S.ContainerImgMain>
            <Image src={product.thumbnail} width={100} height={100} alt=''/>
            </S.ContainerImgMain>
            
        </S.ContainerLeft>
        <S.ContainerRight>
        <S.ContainerRightPrices>
          <p>New Price : {product.price}</p>
          <p>Old Price : {product.original_price ? product.original_price : 'Promocao'}</p>
        </S.ContainerRightPrices>
        <button onClick={()=>{addToCart(product.price)}}>add to card</button>
        <button onClick={()=>{removeFromCart(product.price)}}>remove to card</button>
        </S.ContainerRight>
    </S.Container>
  )
}

export default ProductDisplay
