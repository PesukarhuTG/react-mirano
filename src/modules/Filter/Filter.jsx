import sFilter from './Filter.module.scss';
import sChoices from './Choices.module.scss';
import cn from 'classnames';

const Filter = () => {
  return (
    <section className={sFilter.filter}>
      <h2 className="visually-hidden"></h2>
      <div className="container">
        <form className={sFilter.form}>
          <fieldset className={sFilter.group}>
            <input
              className={sFilter.radio}
              type="radio"
              name="type"
              value="bouquets"
              id="flower"
              defaultChecked
            />
            <label
              className={cn(sFilter.label, sFilter.label_flower)}
              htmlFor="flower"
            >
              Цветы
            </label>

            <input
              className={sFilter.radio}
              type="radio"
              name="type"
              value="toys"
              id="toys"
            />
            <label
              className={cn(sFilter.label, sFilter.label_toys)}
              htmlFor="toys"
            >
              Игрушки
            </label>

            <input
              className={sFilter.radio}
              type="radio"
              name="type"
              value="postcards"
              id="postcard"
            />
            <label
              className={cn(sFilter.label, sFilter.label_postcard)}
              htmlFor="postcard"
            >
              Открытки
            </label>
          </fieldset>

          <fieldset className={cn(sFilter.group, sFilter.group_choices)}>
            <div className={cn(sFilter.choices, sChoices.choices)}>
              <button
                className={cn(sFilter.select, sChoices.choicesBtn)}
                type="button"
              >
                Цена
              </button>

              <div className={cn(sChoices.choices__box, sFilter.choicesBox)}>
                <fieldset className={sFilter.price}>
                  <input
                    className={sFilter.inputPrice}
                    type="text"
                    name="minPrice"
                    placeholder="от"
                  />
                  <input
                    className={sFilter.inputPrice}
                    type="text"
                    name="maxPrice"
                    placeholder="до"
                  />
                </fieldset>
              </div>
            </div>

            <div
              className={cn(
                sFilter.choices,
                sFilter.choicesBox_type,
                sChoices.choices
              )}
            >
              <button
                className={cn(sFilter.select, sChoices.choicesBtn)}
                type="button"
              >
                Тип товара
              </button>

              <div
                className={cn(
                  sChoices.choices__box,
                  sFilter.choicesBox,
                  sFilter.choicesBox_type
                )}
              >
                <ul className={sFilter.typeList}>
                  <li className={sFilter.typeItem}>
                    <button className={sFilter.typeButton} type="button">
                      Монобукеты
                    </button>
                  </li>
                  <li className={sFilter.typeItem}>
                    <button className={sFilter.typeButton} type="button">
                      Авторские букеты
                    </button>
                  </li>
                  <li className={sFilter.typeItem}>
                    <button className={sFilter.typeButton} type="button">
                      Цветы в коробке
                    </button>
                  </li>
                  <li className={sFilter.typeItem}>
                    <button className={sFilter.typeButton} type="button">
                      Цветы в корзине
                    </button>
                  </li>
                  <li className={sFilter.typeItem}>
                    <button className={sFilter.typeButton} type="button">
                      Букеты из сухоцветов
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Filter;
