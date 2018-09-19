const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate,
});

const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate,
});

const setText = (text = '') => ({
  type: 'SET_TEXT',
  text,
});

const sortByAmount = (sortBy = '') => ({
  type: 'SORT_BY_AMOUNT',
  sortBy,
});

const sortByDate = (sortBy = '') => ({
  type: 'SORT_BY_DATE',
  sortBy,
});

export { setEndDate, setStartDate, setText, sortByAmount, sortByDate };
