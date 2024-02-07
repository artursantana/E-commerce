import * as S from './style';
import React, { useState, useEffect } from 'react';


type ItemType = {
  title: string;
  thumbnail: string;
  
};

const Item = () => {
  const [data, setData] = useState<ItemType[]>([]);

  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLB/search?q=celular')
      .then((res) => res.json())
      .then((newData) => {
        if (!newData || !newData.results || !Array.isArray(newData.results)) {
          throw new Error('Dados da API estão em um formato inesperado.');
        }
        setData(newData.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const itemsToShow = data.slice(0, 5);

  return (
    <S.Container>
      <div>
        {itemsToShow.map((item, index) => (
          <div key={index}>
            <p key={item.title}>{item.title}</p>
            
          </div>
        ))}
      </div>
     
      <p>asd</p>
      <S.ContaineritemPrices>
        <S.ContainerNewPrice>25 reias</S.ContainerNewPrice>
        <S.ContainerPriceOld>55 reias</S.ContainerPriceOld>
      </S.ContaineritemPrices>
    </S.Container>
  );
};

export default Item;
