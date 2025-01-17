import { useSelector, useDispatch } from 'react-redux';
import style from './Order.module.scss';
import cn from 'classnames';
import { closeModal } from '../../redux/modalSlice';
import { useCallback, useEffect } from 'react';

const Order = () => {
  const dispatch = useDispatch();
  const isOrderReady = false;
  const { isOpen } = useSelector((state) => state.modal);

  const handleModalClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  const handleClose = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      handleModalClose();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleModalClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleModalClose]);

  if (!isOpen) return null;

  return (
    <div className={style.order} onClick={handleClose}>
      <div className={style.wrapper}>
        {isOrderReady ? (
          <>
            <h2 className={style.title}>Заказ оформлен!</h2>
            <p className={style.id}>
              Ваш номер заказа: 971f365a-caa1-4cdb-9446-bad2eff047e1
            </p>
          </>
        ) : (
          <>
            <h2 className={style.title}>Оформить заказ</h2>
            <form className={style.form} id="order">
              <fieldset className={style.fieldset}>
                <legend className={style.legend}>Данные заказчика</legend>
                <div className={style.inputGroup}>
                  <input
                    className={style.input}
                    type="text"
                    name="name-buyer"
                    placeholder="Имя"
                  />
                  <input
                    className={style.input}
                    type="text"
                    name="phone-buyer"
                    placeholder="Телефон"
                  />
                </div>
              </fieldset>
              <fieldset className={style.fieldset}>
                <legend className={style.legend}>Данные получателя</legend>
                <div className={style.inputGroup}>
                  <input
                    className={style.input}
                    type="text"
                    name="name-recipient"
                    placeholder="Имя"
                  />
                  <input
                    className={style.input}
                    type="text"
                    name="phone-recipient"
                    placeholder="Телефон"
                  />
                </div>
              </fieldset>
              <fieldset className={style.fieldset}>
                <legend className={style.legend}>Адрес</legend>
                <div className={style.inputGroup}>
                  <input
                    className={style.input}
                    type="text"
                    name="street"
                    placeholder="Улица"
                  />
                  <input
                    className={cn(style.input, style.input_min)}
                    type="text"
                    name="house"
                    placeholder="Дом"
                  />
                  <input
                    className={cn(style.input, style.input_min)}
                    type="text"
                    name="apartment"
                    placeholder="Квартира"
                  />
                </div>
              </fieldset>
              <fieldset className={style.fieldset}>
                <div className={style.payment}>
                  <label className={style.labelRadio}>
                    <input
                      className={style.radio}
                      type="radio"
                      name="payment-online"
                      value="true"
                      defaultChecked
                    />
                    Оплата онлайн
                  </label>
                </div>
                <div className={style.delivery}>
                  <label htmlFor="delivery">Доставка 01.07</label>
                  <input type="hidden" name="delivery-date" value="01.07" />
                  <div className={style.selectWrapper}>
                    <select
                      className={style.select}
                      name="delivery-time"
                      id="delivery"
                    >
                      <option value="9-12">с 9:00 до 12:00</option>
                      <option value="12-15">с 12:00 до 15:00</option>
                      <option value="15-18">с 15:00 до 18:00</option>
                      <option value="18-21">с 18:00 до 21:00</option>
                    </select>
                  </div>
                </div>
              </fieldset>
            </form>
            <div className={style.footer}>
              <p className={style.total}>92100&nbsp;₽</p>
              <button className={style.button} type="submit" form="order">
                Заказать
              </button>
            </div>
          </>
        )}
        <button
          className={style.close}
          type="button"
          onClick={handleModalClose}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Order;
