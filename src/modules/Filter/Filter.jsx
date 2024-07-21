import style from './Filter.module.scss';
import cn from 'classnames';
import { Choices, FilterRadio } from '../';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveFilter,
  setMinPrice,
  setMaxPrice,
} from '../../redux/filterSlice';

const filterTypes = [
  { value: 'bouquets', title: 'Цветы' },
  { value: 'toys', title: 'Игрушки' },
  { value: 'postcards', title: 'Открытки' },
];

const Filter = ({ setTitleGoods }) => {
  const dispatch = useDispatch();
  const [openChoice, setOpenChoice] = useState(-1);

  const { activeFilter, minPrice, maxPrice } = useSelector(
    (state) => state.filter
  );

  const handleChoicesToggle = (index) => {
    setOpenChoice(openChoice === index ? null : index);
  };

  const handleTypeChange = ({ target }) => {
    const { value } = target;
    dispatch(setActiveFilter(value));
    setTitleGoods(filterTypes.find((item) => item.value === value).title);
  };

  const handlePriceChange = ({ target }) => {
    const { value, name } = target;
    if (name === 'minPrice') {
      dispatch(setMinPrice(!isNaN(parseInt(value, 10)) ? value : ''));
    }

    if (name === 'maxPrice') {
      dispatch(setMaxPrice(!isNaN(parseInt(value, 10)) ? value : ''));
    }
  };

  useEffect(() => {
    setOpenChoice(-1);
    dispatch(setMinPrice('')), dispatch(setMaxPrice(''));
    setTitleGoods(
      filterTypes.find((item) => item.value === activeFilter).title
    );
  }, [dispatch, activeFilter, setTitleGoods]);

  return (
    <section className={style.filter}>
      <h2 className="visually-hidden"></h2>
      <div className="container">
        <form className={style.form}>
          <fieldset className={cn(style.group)}>
            {filterTypes.map((item) => (
              <FilterRadio
                key={item.value}
                handleTypeChange={handleTypeChange}
                activeFilter={activeFilter}
                {...item}
              />
            ))}
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
                  defaultValue={minPrice}
                  onChange={handlePriceChange}
                />
                <input
                  className={style.inputPrice}
                  type="text"
                  name="maxPrice"
                  placeholder="до"
                  defaultValue={maxPrice}
                  onChange={handlePriceChange}
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
