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
  const newData = data.slice(0, 5);

  return (
    <S.Container>
      <div className='banner'>
        <h1>Saldos -50%</h1>
        <Image src={banner} width={300} height={300} alt="" />
      </div>
      <S.ContainerIndexSort>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <S.ContainerCategorySort>
          Sort by <Image src="/" width={100} height={100} alt="" />
        </S.ContainerCategorySort>
      </S.ContainerIndexSort>
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
