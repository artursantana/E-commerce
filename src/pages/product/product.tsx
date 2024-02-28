// Em Product.tsx
import { ShopContext } from '@/context/ShopContext';
import { useContext } from 'react';
import * as S from '../../app/stylePages/product/_style';
import ProductDisplay from '@/components/productdisplay/ProductDisplay';
import { useRouter } from 'next/router';


const Product: React.FC = () => {
  const { data } = useContext(ShopContext)!;
  const router = useRouter();
  console.log(data)

  const { price } = router.query;
  const parsedPrice = typeof price === 'string' ? parseFloat(price) : undefined;
  const product = parsedPrice !== undefined ? data.find((e) => e.price === parsedPrice) : undefined;

  console.log(product ? `tudo certo ${product}` : `nao deu certo ${product}`)
  return (
    
    <S.Container>
      <div>
      {/*product ? (<ProductDisplay product={product}/>) : (<p>Product not found</p>)*/
      <p>artur</p>
      }
      
      </div>
    </S.Container>
  );
};

export default Product;
