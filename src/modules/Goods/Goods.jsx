import { Cart, Card } from '../';
import { goodsArray } from '../../goodsArray.js';

const Goods = () => {
  return (
    <section className="goods">
      <div className="container goods__container">
        <div className="goods__box">
          <h2 className="goods__title">Цветы</h2>

          <ul className="goods__list">
            {goodsArray.map((item) => (
              <li className="goods__item" key={item.id}>
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
