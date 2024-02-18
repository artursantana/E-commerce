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
  const { title, price, thumbnail, } = product;


  const titleResume = title.slice(0,30)

  console.log(product)
  return (
    <S.Container>
      <S.SubContainer>
      
      <S.ContainerLeft>
        <S.ContainerImgList>
          <Image src={thumbnail} width={100} height={100} alt='' />
          <Image src={thumbnail} width={100} height={100} alt='' />
          <Image src={thumbnail} width={100} height={100} alt='' />
          <Image src={thumbnail} width={100} height={100} alt='' />
        </S.ContainerImgList>
        <S.ContainerImgMain>
          <Image src={thumbnail} width={100} height={100} alt='' />
        <h1>{titleResume}</h1>
        </S.ContainerImgMain>
      </S.ContainerLeft>
    
      <S.ContainerRight>
        <S.ContainerRightPrices>
          <h1><span>New Price</span> : {price}</h1>
          <h3>Old Price : {product.original_price ? product.original_price : 'Promocao'}</h3>
        </S.ContainerRightPrices>
        <S.Description>
          <hr />
        <h1>Description</h1>
        <p>Id : {product.id}</p>
        <p>Condition : {product.condition}</p>
        <p>Official Store Name : {product.official_store_name}</p>
        <p>Type : {product.listing_type_id}</p>
        <p>Brand : {product.attributes[0].value_name}</p>
      </S.Description>
        <button onClick={() => addToCart && addToCart({ title, price, order_backend: 0 })}>add to card</button>
      </S.ContainerRight>
      </S.SubContainer>
    </S.Container>
  );
};

export default ProductDisplay;