import { useDispatch } from 'react-redux';
import style from './Card.module.scss';
import cn from 'classnames';
import { addItemToCart } from '../../redux/cartSlice';

const Card = ({ id, img, title, dateDelivery, price }) => {
  const dispatch = useDispatch();

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
          <button className={style.button} onClick={handleAddToCart}>
            {price}&nbsp;₽
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
