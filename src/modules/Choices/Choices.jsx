import style from './Choices.module.scss';
import { useState } from 'react';

const Choices = ({ btnLabel, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((oldIsOpen) => !oldIsOpen);
  };

  return (
    <div className={style.choices}>
      <button
        className={isOpen ? style.choices__btn_open : style.choices__btn}
        type="button"
        onClick={handleToggle}
      >
        {btnLabel}
      </button>

      {isOpen && <div className={style.choices__box}>{children}</div>}
    </div>
  );
};

export default Choices;
