

import React, { useEffect, useState } from 'react'
import * as S from './style'
import Item from '../item/Item';


type ItemType = {
  title: string;
  thumbnail?: string;
  installments: string;
  amount: string;
  price: number;
  
};

const Popular = () => {

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

  console.log()
  const itemsToShow = data.slice(2,6);

  return (
    <S.Container>
      <h1>Popular in Women</h1>
      <hr />
      <S.ContainerItem>
        {itemsToShow.map((item, index) => ( 
      <Item key={index} title={item.title} price={item.price}  img={item.thumbnail}/> 
        ))}
      </S.ContainerItem>

    </S.Container>
  )
}

export default Popular
