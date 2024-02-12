




import { ShopContext } from '@/context/ShopContext'
import React, { useContext } from 'react'
import * as S from './style'
import Image from 'next/image'


interface ProductProps {
  thumbnail: string;
  name: string;
  price: number;
  
}

const CartItems: React.FC = () => {

  const {data, cartItems ,removeFromCart} = useContext(ShopContext)

  return (
    <S.Container>
<S.ContainerMain>
  <p>Products</p>
  <p>Title</p>
  <p>Price</p>
  <p>Quatity</p>
  <p>Total</p>
  <p>Remove</p>
</S.ContainerMain>
<hr />
<S.ContainerCartItem>
  <S.ContainerCartItemFormat>

    <Image src='/' width={100} height={100} alt=''/>
    <p></p>
    <p></p>
    <button></button>
    <p></p>
   <button onClick={()=>{removeFromCart()}}>Remove</button>
   <hr />
   {data.map((e: ProductProps) => {
           
           console.log(cartItems)
            if (cartItems === 0) {
              return (
                <div key={e.price}>
                  <Image src={e.thumbnail} width={100} height={100} alt="" />
                  <p>{e.name}</p>
                  <p>{e.price}</p>
                  <button>click</button>
                  <p>vezes</p>
                  <button onClick={() => removeFromCart(e.price)}>Remove</button>
                </div>
              );
            }
            return null;
          })}
  </S.ContainerCartItemFormat>
</S.ContainerCartItem>
    </S.Container>
  )
}

export default CartItems
