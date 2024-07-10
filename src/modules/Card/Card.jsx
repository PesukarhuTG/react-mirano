import { useDispatch } from 'react-redux';
import style from './Card.module.scss';
import cn from 'classnames';
import { addItemToCart } from '../../redux/cartSlice';
import { useState } from 'react';

const Card = ({ id, img, title, price, dateDelivery }) => {
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState(`${price} ₽`);

  const handleAddToCart = () => {
    dispatch(addItemToCart({ id, img, title, price }));
  };

  return (
    <article className={cn('goods__card', style.card)}>
      <img className={style.image} src={img} alt={title} />
      <div className={style.content}>
        <h3 className={style.title}>{title}</h3>
        <div className={style.footer}>
          <p className={style.dateDelivery}>{dateDelivery}</p>
          <button
            className={style.button}
            onClick={handleAddToCart}
            onMouseEnter={() => setButtonText('В корзину')}
            onMouseLeave={() => setButtonText(`${price} ₽`)}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
