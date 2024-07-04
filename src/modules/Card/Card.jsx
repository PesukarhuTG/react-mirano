import style from './Card.module.scss';
import cn from 'classnames';

const Card = ({ img, title, dateDelivery, price }) => {
  return (
    <article className={cn('goods__card', style.card)}>
      <img className={style.image} src={img} alt={title} />
      <div className={style.content}>
        <h3 className={style.title}>{title}</h3>
        <div className={style.footer}>
          <p className={style.dateDelivery}>{dateDelivery}</p>
          <button className={style.button}>{price}&nbsp;₽</button>
        </div>
      </div>
    </article>
  );
};

export default Card;
