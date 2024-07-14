import { useEffect } from 'react';
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
      <Header />
      <main>
        <Hero />
        <Filter />
        <Goods />
        <Subscribe />
      </main>
      <Footer />
      <Order />
    </>
  );
};
