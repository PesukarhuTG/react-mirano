import style from './Choices.module.scss';

const Choices = ({ btnLabel, children, openChoice, onToggle }) => {
  return (
    <div className={style.choices}>
      <button
        className={openChoice ? style.choices__btn_open : style.choices__btn}
        type="button"
        onClick={onToggle}
      >
        {btnLabel}
      </button>

      {openChoice && <div className={style.choices__box}>{children}</div>}
    </div>
  );
};

export default Choices;
