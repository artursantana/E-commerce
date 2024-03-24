import React, { useEffect, useState } from 'react';
import * as S from './style';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface ItemProps {
  img?: string | undefined;
  price: number; // preço em Real Brasileiro (BRL)
}

const Item: React.FC<ItemProps> = ({ img, price }) => {
  const [rates, setRates] = useState<any>(null);
  const [convertedPrices, setConvertedPrices] = useState<any>(null);

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(data => {
        setRates(data.rates);

      
        const converted = {
          USD: price / data.rates.BRL, 
          EUR: (price / data.rates.BRL) * data.rates.EUR, 
          BRL: price 
        };

        setConvertedPrices(converted);
      })
      .catch(error => {
        console.error('Erro ao obter taxas de câmbio:', error);
      });
  }, [price]);

  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: `/product/product`,
      query: { price, img },
    });
  };

  return (
    <S.Container>
      <S.ContaineritemPrices>
        {img && (
          <div onClick={handleClick}>
            <Image src={img} width={100} height={100} alt={`Product image - ${price}`} />
          </div>
        )}
        {convertedPrices && (
          <>
            <S.ContainerPrice><span className='spanbrl'>R$</span>{convertedPrices.BRL.toFixed(2)}</S.ContainerPrice>
            <S.ContainerPrice><span className='spanusd'>$</span>{convertedPrices.USD.toFixed(2)}</S.ContainerPrice>
            <S.ContainerPrice><span className='spaneur'>€</span>{convertedPrices.EUR.toFixed(2)}</S.ContainerPrice>
          </>
        )}
      </S.ContaineritemPrices>
    </S.Container>
  );
};

export default Item;
