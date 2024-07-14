import style from './FilterRadio.module.scss';
import cn from 'classnames';

const FilterRadio = ({ handleTypeChange, activeFilter, value, title }) => {
  return (
    <>
      <input
        className={cn(style.radio)}
        type="radio"
        name="type"
        value={value}
        id={value}
        defaultChecked={activeFilter === value}
        onChange={handleTypeChange}
      />
      <label
        className={cn(style.label, style[`label_${value}`])}
        htmlFor={value}
      >
        {title}
      </label>
    </>
  );
};

export default FilterRadio;
