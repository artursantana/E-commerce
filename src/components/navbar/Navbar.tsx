import Link from 'next/link';
import * as S from './style';
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Men from '../../../public/men.png';
import Women from '../../../public/women.png';
import Logo from '../../../public/logo.png';
import { ShopContext } from '@/context/ShopContext'

const Navbar = () => {
  const [selectMenu, setSelectMenu] = useState<string | undefined>(undefined);
  const { getTotalCartItem } = useContext(ShopContext)
  
  console.log(getTotalCartItem)

 

  return (
    <>
    <S.Container>
      <S.ContainerLogo>
        <Image src={Logo} width={100} height={100} alt="artur" />
        <p>Ecommerce</p>
      </S.ContainerLogo>
      <S.ContainerMenu>
        <Link href='/shop/Shop'>
          <li onClick={() => setSelectMenu('Shop')}>
            Shop{selectMenu === 'Shop' ? <hr /> : <></>}
          </li>
        </Link>

        <Link href={{ pathname: '/shopcategory/NewPhones', query: { banner: Men.src } }}>
          <li onClick={() => setSelectMenu('New Phones')}>
            New Phones{selectMenu === 'New Phones' ? <hr /> : <></>}
          </li>
        </Link>

        <Link href={{ pathname: '/shopcategory/ShopCategorySecondHand', query: { banner: Women.src } }}>
          <li onClick={() => setSelectMenu('Second Hand')}>
            Second Hand{selectMenu === 'Second Hand' ? <hr /> : <></>}
          </li>
        </Link>

        <Link href={{ pathname: '/product/Product' }}>
          <li onClick={() => setSelectMenu('Product')}></li>
        </Link>
      </S.ContainerMenu>
      <S.ContainerLoginCar>
        <Link href='/login/Login'>
          <button>Login</button>
        </Link>
        <Link href='/cart/Cart'>
          <Image src='/smallCar.png' width={60} height={60} alt='' />
        </Link>
        <div className="carCount">{getTotalCartItem()}</div>
      </S.ContainerLoginCar>
    </S.Container>
    <hr />
    </>
  );
};

export default Navbar;
