import React, { useContext, useState } from 'react';
import * as S from '../../app/stylePages/shopcategory/_style';
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
  const newData = data.slice(17, 33);

  const [filter,setFilter] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLElement>) => {
  setFilter((e.currentTarget as HTMLInputElement).value)
  }

  const handleClick = () => {
  const filtering = data.filter((itens)=>itens.title.toLowerCase().includes(filter.toLocaleLowerCase()))
  setFilteredData(filtering);
}
const [filteredData, setFilteredData] = useState(data);
  return (
    <>
      {data && data.length === 0 && <S.Container> <h1 className='loading'>Loading...</h1> </S.Container>}
      {data && data.length !== 0 && (
        <S.Container>
          <div className='banner'>
            <Image src={banner} width={300} height={300} alt="" />
            <h1>The Best New Phones on the Market</h1>
          </div>
           
        <S.ConatinerSearch>
        🌐<input type="text" onChange={handleChange} placeholder='example: iphone 14' /> <button onClick={handleClick}>Search</button>
          </S.ConatinerSearch>
        
          <S.ContainerFilterProducts>

            <div className='itens'>

              <div>{filteredData.length === 0 && <h1>Nothing yet ;( try keywords like &quot;samsung or iphone&quot;</h1>}</div>
              {
                filteredData && filteredData.map((element) => 
                <Item key={element.id} price={element.price} img={element.thumbnail} />)
              }
            </div>
          </S.ContainerFilterProducts>
        </S.Container>
      )}
    </>
  );
};

export default ShopCategory;
