import Link from 'next/link';
import * as S from './style';
import React, { ReactNode, useState } from 'react';
import { useRouter } from 'next/navigation';

import ShopCategory from '@/pages/shopcategory/ShopCategory';
import Men from '../../../public/men.png';
import Women from '../../../public/women.png';

import Image from 'next/image';

const Navbar = () => {
  const [selectMenu, setSelectMenu] = useState<string | undefined>(undefined);
  const router = useRouter();

  return (
    <S.Container>
      <S.ContainerLogo>
        <Image src={Men.src} width={100} height={100} alt="artur" />
        <p>Ecommerce</p>
      </S.ContainerLogo>
      <S.ContainerMenu>
        <Link href='/shop/Shop'>
          <li onClick={() => setSelectMenu('Shop')}>
            Shop{selectMenu === 'Shop' ? <hr /> : <></>}
          </li>
        </Link>

        <Link href={{ pathname: '/shopcategory/ShopCategory', query: { banner: Men.src } }}>
          <li onClick={() => setSelectMenu('Man')}>
            Man{selectMenu === 'Man' ? <hr /> : <></>}
          </li>
        </Link>

        <Link href={{ pathname: '/shopcategory/ShopCategory', query: { banner: Women.src } }}>
          <li onClick={() => setSelectMenu('Women')}>
            Women{selectMenu === 'Women' ? <hr /> : <></>}
          </li>
        </Link>

        <Link href={{ pathname: '/product/Product'}}>
        <li onClick={() => setSelectMenu('Product')}>
          
        </li>
      </Link>

      </S.ContainerMenu>
      <S.ContainerLoginCar>
        <Link href='/login/Login'>
          <button>Login</button>
        </Link>
        <h1>icon car</h1>
        <div className="carCount">0</div>
      </S.ContainerLoginCar>
    </S.Container>
  );
};

export default Navbar;
