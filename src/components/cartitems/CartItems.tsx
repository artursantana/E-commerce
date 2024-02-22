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
      <table>
        <S.ContainerHeader>
          <tr>
            <td>Products</td>
            <td>Title</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Total</td>
          </tr>
          
        </S.ContainerHeader>
       
        
        <S.ContainerBody>
        
          {cartItemsToShow.map((product: any) => (
            <tr key={product.price}>
              <td>
                <Image src={product.thumbnail} width={100} height={100} alt={product.title} />
              </td>
              <td>{product.title.slice(0, 20)}</td>
              <td>
                <button onClick={() => addToCart && addToCart(product)}>+</button>
                <p>{cartItems[product.price]}</p>
                <button onClick={() => removeFromCart && removeFromCart(product.price)}>-</button>
              </td>
              <td>$ {product.price}</td>
              <td>$ {product.price * cartItems[product.price]}</td>
            </tr>
          ))}
        </S.ContainerBody>
        
      </table>
    </S.Container>
  );
};

export default CartItems;