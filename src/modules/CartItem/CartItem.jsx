import style from './CartItem.module.scss';

const CartItem = ({ img, title, price }) => {
  return (
    <>
      <img className={style.img} src={img} alt={title} />
      <h4 className={style.itemTitle}>{title}</h4>
      <div className={style.counter}>
        <button className={style.counterBtn}>-</button>
        <input
          className={style.counterInput}
          type="number"
          max="99"
          min="0"
          value="1"
        />
        <button className={style.counterBtn}>+</button>
      </div>
      <p className={style.price}>{price}&nbsp;₽</p>
    </>
  );
};

export default CartItem;
