import React, { useContext } from 'react';
import * as S from './style';
import { ShopContext } from '@/context/ShopContext';
import Image from 'next/image';
import Item from '../../components/item/Item';
import { useRouter } from 'next/router';




interface Props {
  banner: string;
}

const ShopCategory: React.FC<Props> = ({ banner }) => {
  const router = useRouter();
  banner = router.query.banner as string;

  const { data } = useContext(ShopContext)!;
  const newData = data.slice(0, 16);

  return (
    <S.Container>
      <div className='banner'>
        <h1>Number 1 Store for Used Phones</h1>
        <Image src={banner} width={300} height={300} alt="" />
      </div>
      
      <S.ContainerProducts>
        <div className='itens'>
          {newData.map((item, index) => (
            item.title && (
              <Item key={index} price={item.price} img={item.thumbnail} />
            )
          ))}
        </div>
      </S.ContainerProducts>
    </S.Container>
  );
};

export default ShopCategory;
