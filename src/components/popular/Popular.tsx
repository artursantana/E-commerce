

import React, { useEffect, useState,useContext } from 'react'
import * as S from './style'
import Item from '../item/Item';
import { ShopContext } from '@/context/ShopContext';


type ItemType = {
  title?: string | undefined;
  thumbnail?: string;
  installments: string;
  amount: string;
  price: number;
  widthPage?: number | undefined;
  
};


const Popular = () => {

  const [data, setData] = useState<ItemType[]>([]);
  const { widthPage } = useContext(ShopContext) || {}

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

  const itemsToShow = data.slice(30,34);

  return (
    <S.Container>
      <h1>Popular in Women</h1>
      <hr />
      <S.ContainerItem widthPage={widthPage}>
        {itemsToShow.map((item, index) => ( 
      <Item key={index} title={item.title} price={item.price}  img={item.thumbnail}/> 
        ))}
      </S.ContainerItem>

    </S.Container>
  )
}

export default Popular
