import { createContext, useState, useEffect, ReactNode } from "react";

type ItemType = {
  title: string;
  price: number;
  order_backend: number
};

type ShopContextType = {
  data: ItemType[];
  cartItems: Record<number, number>;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
};

type ShopContextProviderProps = {
  children: ReactNode;
};

export const ShopContext = createContext<ShopContextType | undefined>(undefined);

const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
 
  const [data, setData] = useState<ItemType[]>([]);
  

  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLB/search?q=celular')
      .then((res) => res.json())
      .then((newData) => {
        if (!newData || !newData.results || !Array.isArray(newData.results)) {
          throw new Error('Dados da API estão em um formato inesperado.');
        }
        setData(newData.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  
  
const getDefaultCart = () => {
  const cart: Record<number, number> = {}
  for (let index = 0; index < data.length; index++) {
    cart[index] = 0
  }
  return cart;
}

const addToCart = (itemId: number) => {
  setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  
}

const removeFromCart = (itemId: number) => {
  setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}
const [cartItems,setCartItems] = useState<Record<number, number>>(getDefaultCart())


  
const contextValue: ShopContextType = { data, cartItems,addToCart,removeFromCart };

console.log(cartItems)

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
