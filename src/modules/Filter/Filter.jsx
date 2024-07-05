import style from './Filter.module.scss';
import cn from 'classnames';
import { Choices } from '../';
import { useState } from 'react';

const Filter = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className={style.filter}>
      <h2 className="visually-hidden"></h2>
      <div className="container">
        <form className={style.form}>
          <fieldset className={style.group}>
            <input
              className={style.radio}
              type="radio"
              name="type"
              value="bouquets"
              id="flower"
              defaultChecked
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
              isOpen={activeIndex === 0}
              onShow={() => setActiveIndex(0)}
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
              isOpen={activeIndex === 1}
              onShow={() => setActiveIndex(1)}
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
