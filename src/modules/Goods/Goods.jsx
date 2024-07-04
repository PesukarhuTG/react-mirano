import style from './Goods.module.scss';
import cn from 'classnames';
import { Cart, Card } from '../';
import { goodsArray } from '../../goodsArray.js';

const Goods = () => {
  return (
    <section className={style.goods}>
      <div className={cn('container', style.container)}>
        <div className={style.box}>
          <h2 className={style.title}>Цветы</h2>

          <ul className={style.list}>
            {goodsArray.map((item) => (
              <li className={style.item} key={item.id}>
                <Card {...item} />
              </li>
            ))}
          </ul>
        </div>
        <Cart />
      </div>
    </section>
  );
};

export default Goods;
