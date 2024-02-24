import Link from 'next/link';
import * as S from './style';
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Men from '../../../public/men.png';
import Women from '../../../public/women.png';
import Logo from '../../../public/logo.png';
import { ShopContext } from '@/context/ShopContext'
import { usePathname } from 'next/navigation';



const Navbar = () => {
  
  const pathname = usePathname()

  const context = useContext(ShopContext);

  if (!context) {
    return null;
  }

  const { getTotalCartItem, widthPage } = context;

  return (
    <>
    <S.Container widthPage={widthPage}>
      <S.ContainerLogo widthPage={widthPage}>
        <Image src={Logo} width={100} height={100} alt="artur" />
        <p>Ecommerce</p>
      </S.ContainerLogo>
      <S.ContainerMenu>
        <Link href='/shop/Shop' >
          <li className={pathname === '/shop/Shop' ? 'select' : ''}>
            Shop
          </li>
        </Link>

        <Link href={{ pathname: '/shopcategory/NewPhones', query: { banner: Men.src } }}>
        <li className={pathname === '/shopcategory/NewPhones' ? 'select' : ''}>
            NewPhones
          </li>
        </Link>

        <Link href={{ pathname: '/shopcategory/ShopCategorySecondHand', query: { banner: Women.src } }}>
        <li className={pathname === '/shopcategory/ShopCategorySecondHand' ? 'select' : ''}>
            SecondHand
          </li>
        </Link>

        <Link href={{ pathname: '/product/Product' }}>
        </Link>
      </S.ContainerMenu>
      <S.ContainerLoginCar widthPage={widthPage}>
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
