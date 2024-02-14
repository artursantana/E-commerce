// CartItems.tsx
import React, { useContext } from 'react';
import Image from 'next/image';
import { ShopContext } from '@/context/ShopContext';
import * as S from './style'

const CartItems: React.FC = () => {
  const context = useContext(ShopContext);
  if (!context) {
    return <div>Carregando...</div>;
  }
  const { data, removeFromCart, cartItems, addToCart } = context;

  
  const cartItemsToShow = data.filter((product: any) => cartItems[product.price] > 0);

  return (
    <S.Container>
      <S.ContainerHeader>
        <p>Products</p>
        <p>Title</p>
        <p>Quantity</p>
        <p>price</p>
        <p>Total</p>
      </S.ContainerHeader>
      <hr />
     
      {cartItemsToShow.map((product: any) => {
        const { title, price, thumbnail } = product;
        const quantityInCart = cartItems[price];

        return (
          <S.ContainerCartItemAdd key={price}>
              <Image src={thumbnail} width={100} height={100} alt={title} /> 
            <p>{title.slice(0,20)}</p>
            <div>
              <button onClick={() => addToCart && addToCart(product)}>+</button>
              <p>{quantityInCart}</p>
              <button onClick={() => removeFromCart && removeFromCart(product.price)}>-</button>
            </div>
            <p>$ {price}</p>
            <p>$ {price * quantityInCart}</p>
            
          </S.ContainerCartItemAdd>
        );
      })}
    </S.Container>
  );
};

export default CartItems;
