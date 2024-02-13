import * as S from './style'
import React, { useContext } from 'react'
import Image from 'next/image'
import { ShopContext } from '@/context/ShopContext'

interface Props {
  title: string
  thumbnail: string
  price: number
  original_price:number
  addToCart: (itemId: number) => void|undefined; 
  removeFromCart: (itemId: number) => void|undefined; 
}

const ProductDisplay = ({ product }: { product?: Props }) => {
  const context = useContext(ShopContext);

  if (!context || !product) {
    return <h1>Carregando...</h1>;
  }
  const { addToCart,cartItems } = context;
  const { title, price, thumbnail } = product;

  console.log(cartItems)
  return (
    <S.Container>
      <h1>{title}</h1>
      <S.ContainerLeft>
        <S.ContainerImgList>
          <Image src={thumbnail} width={100} height={100} alt='' />
          <Image src={thumbnail} width={100} height={100} alt='' />
          <Image src={thumbnail} width={100} height={100} alt='' />
          <Image src={thumbnail} width={100} height={100} alt='' />
        </S.ContainerImgList>
        <S.ContainerImgMain>
          <Image src={thumbnail} width={100} height={100} alt='' />
        </S.ContainerImgMain>
      </S.ContainerLeft>
      <S.ContainerRight>
        <S.ContainerRightPrices>
          <p>New Price : {price}</p>
          <p>Old Price : {product.original_price ? product.original_price : 'Promocao'}</p>
        </S.ContainerRightPrices>
        <button onClick={() => addToCart && addToCart({ title, price, order_backend: 0 })}>add to card</button>
      </S.ContainerRight>
    </S.Container>
  );
};

export default ProductDisplay;