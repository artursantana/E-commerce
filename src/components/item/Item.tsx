
import * as S from './style';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ItemProps {
  key: number
  img?: string | undefined;
  price: number;
  title?: string | undefined;
}

const Item: React.FC<ItemProps> = ({ img, price }) => {

  return (
    <S.Container>
      <Link href={{ pathname:'/product/Product', query:{price}}}>
      <S.ContaineritemPrices>
        {img && (
            <Image src={img} width={100} height={100} alt={`Product image - ${price}`}/>
        )}
        <S.ContainerNewPrice>R$ {price}</S.ContainerNewPrice>
        <S.ContainerPriceOld>valor em dolar</S.ContainerPriceOld>
      </S.ContaineritemPrices>
      </Link>
    </S.Container>
  );
  
};



export default Item;
