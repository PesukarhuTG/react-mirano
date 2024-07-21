import style from './Goods.module.scss';
import cn from 'classnames';
import { Cart, Card } from '../';
import { fetchGoods } from '../../redux/goodsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { API_URL } from '../../const';

const Goods = ({ title }) => {
  const dispatch = useDispatch();
  const { activeFilter, minPrice, maxPrice } = useSelector(
    (state) => state.filter
  );

  const {
    items: goodsList,
    status: goodsStatus,
    error,
  } = useSelector((state) => state.goods);

  useEffect(() => {
    dispatch(fetchGoods({ type: activeFilter, minPrice, maxPrice }));
  }, [dispatch, activeFilter, minPrice, maxPrice]);

  let content = null;

  if (goodsStatus === 'loading') {
    content = <p>Идет загрузка товаров...</p>;
  }

  if (goodsStatus === 'success') {
    if (!goodsList.length) {
      content = <p>К сожалению, по вашему запросу товары не найдены :/</p>;
    } else {
      content = (
        <ul className={style.list}>
          {goodsList.map((item) => (
            <li className={style.item} key={item.id}>
              <Card
                id={item.id}
                img={`${API_URL}/${item.photoUrl}`}
                price={item.price}
                title={item.name}
                dateDelivery="сегодня в 14:00"
              />
            </li>
          ))}
        </ul>
      );
    }
  }

  if (goodsStatus === 'failed') {
    content = <p>Ууупс, произошла ошибка: {error}</p>;
  }

  return (
    <section className={style.goods}>
      <div className={cn('container', style.container)}>
        <div className={style.box}>
          <h2 className={style.title}>{title}</h2>
          {content}
        </div>
        <Cart />
      </div>
    </section>
  );
};

export default Goods;
