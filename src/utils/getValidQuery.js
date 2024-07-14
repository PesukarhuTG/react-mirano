export const getValidQuery = (filters) => {
  const validFilters = {};

  for (const key in filters) {
    //если в объекте есть свойство и у фильтра есть значение (не пустое и не 0)
    if (Object.hasOwnProperty.call(filters, key) && filters[key]) {
      validFilters[key] = filters[key];
    }
  }

  return validFilters;
};
