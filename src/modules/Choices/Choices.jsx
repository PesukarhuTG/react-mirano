import style from './Choices.module.scss';

const Choices = ({ btnLabel, children, isOpen, onShow }) => {
  return (
    <div className={style.choices}>
      <button
        className={isOpen ? style.choices__btn_open : style.choices__btn}
        type="button"
        onClick={onShow}
      >
        {btnLabel}
      </button>

      {isOpen && <div className={style.choices__box}>{children}</div>}
    </div>
  );
};

export default Choices;
