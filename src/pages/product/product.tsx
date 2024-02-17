import { ShopContext } from '@/context/ShopContext';
import { useContext } from 'react';
import * as S from './style';
import ProductDisplay from '@/components/productdisplay/ProductDisplay';
import { useRouter } from 'next/router';

const Product: React.FC = () => {
  const { data } = useContext(ShopContext)!;
  const router = useRouter();

  const { price } = router.query;
  const parsedPrice = Array.isArray(price) ? price[0] : price;
  const product = data.find((e) => e.price === parseFloat(parsedPrice));

  return (
    <S.Container>
      <div>

        <ProductDisplay product={product} />
      </div>
    </S.Container>
  );
};

export default Product;
