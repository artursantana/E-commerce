

import Link from 'next/link'
import * as S from './style'
import React, { useState } from 'react'

type Props = {
  Shop: string
  Man: string
  Women: string
  Kids: string
}

const Navbar = () => {

  const [selectMenu, setSelectMenu] = useState<string | undefined>(undefined)

  return (
    <S.Container>
      <S.ContainerLogo>
      <h1>Logo</h1>
      <p>Ecommerce</p>
    </S.ContainerLogo>
    <S.ContainerMenu>
        <Link href='/shop/Shop'>
          <li onClick={()=>{setSelectMenu('Shop')}}>Shop{selectMenu ==='Shop' ? <hr/>:<></>}</li>
        </Link>
        <Link href='/shopcategory/ShopCategory'>
          <li onClick={()=>{setSelectMenu('Man')}}>Man{selectMenu ==='Man' ? <hr/>:<></>}</li>
        </Link>
        <Link href='/shopcategory/ShopCategory'>
          <li onClick={()=>{setSelectMenu('Women')}}>Women{selectMenu ==='Women' ? <hr/>:<></>}</li>
        </Link>
        <Link href='/shopcategory/ShopCategory'>
          <li onClick={()=>{setSelectMenu('Kids')}}>Kids{selectMenu ==='Kids' ? <hr/>:<></>}</li>
        </Link>
        
    </S.ContainerMenu>
    <S.ContainerLoginCar>
        <button>Login</button>
        <h1>icon car</h1>
        <div className="carCount">0</div>
    </S.ContainerLoginCar>
    </S.Container>
  )
}

export default Navbar
