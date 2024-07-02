import { Cart } from '../';
import { goodsArray } from '../../goodsArray.js';

const Goods = () => {
  return (
    <section className="goods">
      <div className="container goods__container">
        <div className="goods__box">
          <h2 className="goods__title">Цветы</h2>

          <ul className="goods__list">
            {goodsArray.map(({ id, img, title, dateDelivery, price }) => (
              <li className="goods__item" key={id}>
                <article className="goods__card card">
                  <img className="card__image" src={img} alt={title} />
                  <div className="card__content">
                    <h3 className="card__title">{title}</h3>
                    <div className="card__footer">
                      <p className="card__date-delivery">{dateDelivery}</p>
                      <button className="card__button">{price}₽</button>
                    </div>
                  </div>
                </article>
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
