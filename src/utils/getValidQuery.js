export const getValidQuery = (filters) => {
  const validFilters = {};

  for (const key in filters) {
    //если у фильтра есть значение (не пустое и не 0)
    if (filters[key]) {
      validFilters[key] = filters[key];
    }
  }

  return validFilters;
};
