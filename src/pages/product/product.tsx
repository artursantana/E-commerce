import { useEffect, useState } from 'react';
import * as S from '../../app/stylePages/product/_style';
import ProductDisplay from '../../components/productdisplay/ProductDisplay';
import { useRouter } from 'next/router';

interface ProductProps {
  id: string
  condition: string
  official_store_name: string
  listing_type_id: string
  attributes: { value_name: string }[];
  title: string
  thumbnail: string
  price: number
  original_price:number
}

interface ProductData {
  id: string
  condition: string
  official_store_name: string
  listing_type_id: string
  attributes: { value_name: string }[];
  title: string
  thumbnail: string
  price: number
  original_price:number
}

const Product: React.FC = () => {
  const [data, setData] = useState<ProductData[]>([]); 
  const router = useRouter();

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

  const { price } = router.query;
  const parsedPrice = typeof price === 'string' ? parseFloat(price) : undefined;
  let product: ProductProps | undefined;

  if (parsedPrice !== undefined && Array.isArray(data) && data.length > 0) {
    product = data.find((e) => Math.abs(e.price - parsedPrice) < 0.01);
  }

  return (
    <S.Container>
      <div>
        {product ? <ProductDisplay product={product} /> : <p>Product not found</p>}
      </div>
    </S.Container>
  );
};

export default Product;
