import style from './Filter.module.scss';
import cn from 'classnames';
import { Choices } from '../';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const [openChoice, setOpenChoice] = useState(null);

  const { activeFilter } = useSelector((state) => state.filter);

  const handleChoicesToggle = (index) => {
    setOpenChoice(openChoice === index ? null : index);
  };

  useEffect(() => {
    setOpenChoice(null);
  }, [dispatch, activeFilter]);

  return (
    <section className={style.filter}>
      <h2 className="visually-hidden"></h2>
      <div className="container">
        <form className={style.form}>
          <fieldset className={cn(style.group)}>
            <input
              className={cn(style.radio)}
              type="radio"
              name="type"
              value="bouquets"
              id="flower"
              defaultChecked={activeFilter === 'bouquets' ? true : false}
              onChange={() => dispatch(setActiveFilter('bouquets'))}
            />
            <label
              className={cn(style.label, style.label_flower)}
              htmlFor="flower"
            >
              Цветы
            </label>

            <input
              className={style.radio}
              type="radio"
              name="type"
              value="toys"
              id="toys"
              defaultChecked={activeFilter === 'toys' ? true : false}
              onChange={() => dispatch(setActiveFilter('toys'))}
            />
            <label className={cn(style.label, style.label_toys)} htmlFor="toys">
              Игрушки
            </label>

            <input
              className={style.radio}
              type="radio"
              name="type"
              value="postcards"
              id="postcard"
              defaultChecked={activeFilter === 'postcards' ? true : false}
              onChange={() => dispatch(setActiveFilter('postcards'))}
            />
            <label
              className={cn(style.label, style.label_postcard)}
              htmlFor="postcard"
            >
              Открытки
            </label>
          </fieldset>

          <fieldset className={cn(style.group, style.group_choices)}>
            <Choices
              btnLabel="Цена"
              openChoice={openChoice === 0}
              onToggle={() => handleChoicesToggle(0)}
            >
              <fieldset className={style.price}>
                <input
                  className={style.inputPrice}
                  type="text"
                  name="minPrice"
                  placeholder="от"
                />
                <input
                  className={style.inputPrice}
                  type="text"
                  name="maxPrice"
                  placeholder="до"
                />
              </fieldset>
            </Choices>

            <Choices
              btnLabel="Тип товара"
              openChoice={openChoice === 1}
              onToggle={() => handleChoicesToggle(1)}
            >
              <ul className={style.typeList}>
                <li className={style.typeItem}>
                  <button className={style.typeButton} type="button">
                    Монобукеты
                  </button>
                </li>
                <li className={style.typeItem}>
                  <button className={style.typeButton} type="button">
                    Авторские букеты
                  </button>
                </li>
                <li className={style.typeItem}>
                  <button className={style.typeButton} type="button">
                    Цветы в коробке
                  </button>
                </li>
                <li className={style.typeItem}>
                  <button className={style.typeButton} type="button">
                    Цветы в корзине
                  </button>
                </li>
                <li className={style.typeItem}>
                  <button className={style.typeButton} type="button">
                    Букеты из сухоцветов
                  </button>
                </li>
              </ul>
            </Choices>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Filter;
