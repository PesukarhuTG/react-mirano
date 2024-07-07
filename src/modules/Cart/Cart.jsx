import style from './Cart.module.scss';
import cn from 'classnames';
import { CartItem } from '../';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../redux/cartSlice';
import { openModal } from '../../redux/modalSlice.js';

const Cart = () => {
  const { isOpen, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handlerCartClose = () => {
    dispatch(toggleCart());
  };

  const handlerModalOpen = () => {
    dispatch(openModal());
  };

  if (!isOpen) return null;

  return (
    <section className={cn(style.cart, style.open)}>
      <div className={style.container}>
        <div className={style.header}>
          <h3 className={style.title}>Ваш заказ</h3>

          <button className={style.close} onClick={handlerCartClose}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="5"
                y="5.70715"
                width="1"
                height="25"
                transform="rotate(-45 5 5.70715)"
                fill="#D17D2F"
              />
              <rect
                x="22.6777"
                y="5"
                width="1"
                height="25"
                transform="rotate(45 22.6777 5)"
                fill="#D17D2F"
              />
            </svg>
          </button>
        </div>

        <p className={style.dateDelivery}>сегодня в 14:00</p>

        <ul className={style.list}>
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </ul>

        <div className={style.footer}>
          <button className={style.orderBtn} onClick={handlerModalOpen}>
            Оформить
          </button>
          <p className={cn(style.price, style.priceTotal)}>0&nbsp;₽</p>
        </div>
      </div>
    </section>
  );
};

export default Cart;
