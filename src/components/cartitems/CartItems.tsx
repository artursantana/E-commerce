// CartItems.tsx
import React, { useContext } from 'react';
import Image from 'next/image';
import { ShopContext } from '@/context/ShopContext';


const CartItems: React.FC = () => {
  const context = useContext(ShopContext);
  if(!context){
    return <div>carregando...</div>
  }
  const { data, removeFromCart, cartItems,addToCart } = context

  return (
    <div>
      <h1>Cart Items</h1>
      {data.map((product:any) => {

        const { title, price, thumbnail } = product;
        const quantityInCart = cartItems[price] || 0;

        
          return (
            <div key={price}>
              <Image src={thumbnail} width={100} height={100} alt={title} />
              <p>{title}</p>
              <p>{price}</p>
              <button>{quantityInCart}</button>
              <p>{price * quantityInCart}</p>
              <button onClick={() => addToCart && addToCart({ title, price, order_backend: 0 })}>+</button>
              <button onClick={() => removeFromCart && removeFromCart(product.price)}>-</button>
            </div>
          );
        
      })}
    </div>
  );
};

export default CartItems;
