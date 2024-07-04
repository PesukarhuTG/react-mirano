import style from './Choices.module.scss';

const Choices = ({ btnLabel, children }) => {
  return (
    <div className={style.choices}>
      <button className={style.choices__btn} type="button">
        {btnLabel}
      </button>

      <div className={style.choices__box}>{children}</div>
    </div>
  );
};

export default Choices;
