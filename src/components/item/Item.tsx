import * as S from './style';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface ItemProps {
  key: number;
  img?: string | undefined;
  price: number;
  title?: string | undefined;
}

const Item: React.FC<ItemProps> = ({ img, price }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: '/product/Product',
      query: { price, img },
    });
  };

  return (
    <div>
    <S.Container>
      <S.ContaineritemPrices>
        {img && (
          <div onClick={handleClick}>
            <Image src={img} width={100} height={100} alt={`Product image - ${price}`} />
          </div>
        )}
        <S.ContainerNewPrice>R$ {price}</S.ContainerNewPrice>
        <S.ContainerPriceOld>dolar</S.ContainerPriceOld>
      </S.ContaineritemPrices>
    </S.Container>
    </div>
  );
};

export default Item;
