import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";


type ItemType = {
  title: string;
  price: number;
  order_backend: number;

  id: string
  condition: string
  official_store_name: string
  listing_type_id: string
  attributes: { value_name: string }[];
  thumbnail: string
  original_price:number
};


type ShopContextType = {
  widthPage: number | undefined;
  data: ItemType[];
  cartItems: Record<number, number>;
  addToCart: (item: ItemType) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartItem: () => number;
};

type ShopContextProviderProps = {
  children: ReactNode;
};

export const ShopContext = createContext<ShopContextType | undefined>(undefined);

const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const [data, setData] = useState<ItemType[]>([]);
  const [CountCar,setCountCard] = useState(0)
  const [widthPage, setWidthPage] = useState<number>()
  

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }

    fetch('https://api.mercadolibre.com/sites/MLB/search?q=celular')
      .then((res) => res.json())
      .then((newData) => {
        if (!newData || !newData.results || !Array.isArray(newData.results)) {
          throw new Error('Dados da API estão em um formato inesperado.');
        }
        setData(newData.results);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }, []);

  const getTotalCartItem = () => {
    let totalitem = 0
    for(const item in  cartItems){
      if(cartItems[item]>0){
        totalitem += cartItems[item]
      }
    }
    return totalitem
  }

  const getDefaultCart = () => {
    const cart: Record<number, number> = {};
    for (let index = 0; index < data.length; index++) {
      cart[index] = 0;
    }
    return cart;
  };
  const [cartItems, setCartItems] = useState<Record<number, number>>({});

  const addToCart = (item: ItemType) => {
    setCartItems((prev) => ({ ...prev, [item.price]: (prev[item.price] || 0) + 1 }));
    setCountCard(CountCar+1)
    alert('item adicionado')
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: Math.max((prev[itemId] || 0) - 1, 0) }));
    setCountCard(CountCar-1)
  };

  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Erro ao salvar no localStorage:', error);
    }
  }, [cartItems]);

  useEffect(() => {

    setWidthPage(window.innerWidth);

    const handleResize = () => {
      setWidthPage(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);


  }, []);

  const contextValue: ShopContextType = { widthPage,getTotalCartItem, data, cartItems, addToCart, removeFromCart };

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
