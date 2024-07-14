import style from './CartItem.module.scss';

const CartItem = ({ img, title, price, count }) => {
  return (
    <li className={style.item}>
      <img className={style.img} src={img} alt={title} />
      <h4 className={style.title}>{title}</h4>
      <div className={style.counter}>
        <button className={style.counterBtn}>-</button>
        <input
          className={style.counterInput}
          type="number"
          max="99"
          min="0"
          defaultValue={count}
        />
        <button className={style.counterBtn}>+</button>
      </div>
      <p className={style.price}>{price}&nbsp;₽</p>
    </li>
  );
};

export default CartItem;
