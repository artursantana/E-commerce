import { ShopContext } from '@/context/ShopContext';
import { useContext } from 'react';
import * as S from './style';
import BreadCrum from '@/components/breadcrum/BreadCrum';
import { useRouter } from 'next/router';
import ProductDisplay from '@/components/productdisplay/ProductDisplay';

const Product: React.FC = () => {

  const { data } = useContext(ShopContext)!;

  const router = useRouter();
  const searchValue = router;
  console.log('router : ',searchValue)

  
  const product = data.find((e) => {
    return e.price === Number(searchValue);
    
  });
  console.log('product : ',product)


  return (
    <S.Container>
      <div>
        <BreadCrum product={product?.title} />
        <ProductDisplay product={product}/>
      </div>
    </S.Container>
  );
};

export default Product;
