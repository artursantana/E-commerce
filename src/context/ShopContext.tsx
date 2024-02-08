import { createContext, useState, useEffect, ReactNode } from "react";

type ItemType = {
  title: string;
  price: number;
};

type ShopContextType = {
  data: ItemType[];
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

  const contextValue: ShopContextType = { data };

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
