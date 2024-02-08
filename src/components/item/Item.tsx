import * as S from './style';
import React from 'react';
import Image from 'next/image';

interface ItemProps {
  img?: string | undefined
  price: number;
  thumbnail?: any;
}

const Item: React.FC<ItemProps> = ({  img, price }) => {
  
  return (
    <S.Container>
      <S.ContaineritemPrices>
     {img && <Image src={img} width={100} height={100} alt="" />}
        <S.ContainerNewPrice>R$ {price}</S.ContainerNewPrice>
        <S.ContainerPriceOld>valor em dolar</S.ContainerPriceOld>
      </S.ContaineritemPrices>
    </S.Container>
  );
};

export default Item;
