import React, { useEffect, useState, useRef } from 'react';
import * as S from './style';
import Item from '../item/Item';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

type ItemType = {
  title: string;
  thumbnail: string;
  installments: string;
  amount: string;
  price: string;
};

const NewCollections: React.FC = () => {
  const [data, setData] = useState<ItemType[]>([]);
  const wrap = useRef<HTMLDivElement>(null);

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

  const handleLeftCarousel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (wrap.current) {
      wrap.current.scrollLeft -= 200;
    }
  };

  const handleRightCarousel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (wrap.current) {
      wrap.current.scrollLeft += 200;
    }
  };

  const itemsToShow = data.slice(40, 50);

  return (
    <S.Container>
      <h1>New collections</h1>
      <hr />
      <div className='wrap' ref={wrap}>
        <S.ContainerColletions>
          {itemsToShow.map((item, index) => (
            <Item key={index} title={item.title} price={item.price} img={item.thumbnail} />
          ))}
        </S.ContainerColletions>
      </div>
      <div className='buttons'>
        <button onClick={handleLeftCarousel}><FontAwesomeIcon icon={faArrowLeft} /></button>
        <button onClick={handleRightCarousel}><FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
    </S.Container>
  );
};

export default NewCollections;
