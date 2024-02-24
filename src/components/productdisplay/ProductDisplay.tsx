import * as S from './style'
import React, { useContext } from 'react'
import Image from 'next/image'
import { ShopContext } from '@/context/ShopContext'

interface ProductProps {
  id: string
  condition: string
  official_store_name: string
  listing_type_id: string
  attributes: { value_name: string }[];
  title: string
  thumbnail: string
  price: number
  original_price:number
  
}


const ProductDisplay = ({ product }: { product: ProductProps }) => {


  const context = useContext(ShopContext);

  if (!context || !product) {
    return <h1>Carregando...</h1>;
  }
  const { addToCart,widthPage } = context;
  const { id,condition,official_store_name,listing_type_id,attributes,original_price,title, price, thumbnail, } = product;

  const titleResume = title.slice(0,30)

  return (
    <S.Container>
      <S.SubContainer widthPage={widthPage}>
      
      <S.ContainerLeft>
        <S.ContainerImgList>
          <Image src={thumbnail} width={100} height={100} priority={true} alt='' />
          <Image src={thumbnail} width={100} height={100} priority={true} alt='' />
          <Image src={thumbnail} width={100} height={100} priority={true} alt='' />
          <Image src={thumbnail} width={100} height={100} priority={true}alt='' />
        </S.ContainerImgList>
        <S.ContainerImgMain widthPage={widthPage}>
          <Image src={thumbnail} width={100} height={100} priority={true} alt='' />
        <h1>{titleResume}</h1>
        </S.ContainerImgMain >
      </S.ContainerLeft>
    
      <S.ContainerRight>
        <S.ContainerRightPrices>
          <h1><span>New Price: </span>  {price}</h1>
          <h3>Old Price : {product.original_price ? product.original_price : 'Promocao'}</h3>
        </S.ContainerRightPrices>
        <S.Description>
          <hr />
        <h1>Description</h1>
        <p>Id : {product.id}</p>
        <p>Condition : {product.condition}</p>
        <p>Official Store Name : {product.official_store_name}</p>
        <p>Type : {product.listing_type_id}</p>
        <p>Brand: {typeof product.attributes[0] === 'object' ? product.attributes[0].value_name : 'N/A'}</p>
      </S.Description>
        <button onClick={() => addToCart && addToCart({ id,condition,official_store_name,listing_type_id,attributes,original_price,title, price,thumbnail, order_backend: 0 })}>add to card</button>
      </S.ContainerRight>
      </S.SubContainer>
    </S.Container>
  );
};

export default ProductDisplay;