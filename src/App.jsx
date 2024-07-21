import { useEffect, useState } from 'react';
import {
  Header,
  Hero,
  Filter,
  Goods,
  Subscribe,
  Footer,
  Order,
} from './modules';
import { useDispatch } from 'react-redux';
import { registerCart } from './redux/cartSlice';

export const App = () => {
  const dispatch = useDispatch();

  const [titleGoods, setTitleGoods] = useState('');

  useEffect(() => {
    // тк нельзя внутри использовать await перед dispatch, создаем функцию
    const initializeСart = async () => {
      dispatch(registerCart());
      //todo dispatch(getCart()); получени корзины
    };

    initializeСart();
  }, [dispatch]);

  return (
    <>
      <Header setTitleGoods={setTitleGoods} />
      <main>
        <Hero />
        <Filter setTitleGoods={setTitleGoods} />
        <Goods title={titleGoods} />
        <Subscribe />
      </main>
      <Footer />
      <Order />
    </>
  );
};
