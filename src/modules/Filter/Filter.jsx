import style from './Filter.module.scss';
import cn from 'classnames';
import { Choices, FilterRadio } from '../';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeType, changePrice } from '../../redux/filtersSlice';

const filterTypes = [
  { value: 'bouquets', title: 'Цветы' },
  { value: 'toys', title: 'Игрушки' },
  { value: 'postcards', title: 'Открытки' },
];

const Filter = ({ setTitleGoods }) => {
  const dispatch = useDispatch();
  const [openChoice, setOpenChoice] = useState(-1);

  const filters = useSelector((state) => state.filters);

  const handleChoicesToggle = (index) => {
    setOpenChoice(openChoice === index ? null : index);
  };

  const handleTypeChange = ({ target }) => {
    const { value } = target;
    dispatch(changeType(value));
    setTitleGoods(filterTypes.find((item) => item.value === value).title);
  };

  const handlePriceChange = ({ target }) => {
    const { value, name } = target;
    dispatch(changePrice({ name, value }));
  };

  useEffect(() => {
    setOpenChoice(-1);
    dispatch(changePrice('')), dispatch(changePrice(''));
    setTitleGoods(
      filterTypes.find((item) => item.value === filters.type).title
    );
  }, [dispatch, filters.type, setTitleGoods]);

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
                type={filters.type}
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
                  defaultValue={filters.minPrice}
                  onChange={handlePriceChange}
                />
                <input
                  className={style.inputPrice}
                  type="text"
                  name="maxPrice"
                  placeholder="до"
                  defaultValue={filters.maxPrice}
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
