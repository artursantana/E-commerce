
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
      <S.ContaineritemPrices>
        {img && (
          <Link href={`/product/Product?price=${price}`}>
            <img src={img} width={100} height={100} alt={`Product image - ${price}`}/>
          </Link>
        )}
        <S.ContainerNewPrice>R$ {price}</S.ContainerNewPrice>
        <S.ContainerPriceOld>valor em dolar</S.ContainerPriceOld>
      </S.ContaineritemPrices>
    </S.Container>
  );
  
};



export default Item;
