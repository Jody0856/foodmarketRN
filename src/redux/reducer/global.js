const initGlobalState = {
  isError: false,
  message: 'Errors',
  isLoading: false,
};

export const globalReducer = (state = initGlobalState, action) => {
  if (action.type === 'SET_ERROR') {
    return {
      ...state,
      isError: action.value.isError,
      message: action.value.message,
    };
  }

  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      isLoading: action.value,
    };
  }

  return state;
};

const initCity = {
  city: [],
};
export const cityReducer = (state = initCity, action) => {
  if (action.type === 'SET_CITY') {
    return {
      ...state,
      city: action.value,
    };
  }
  return state;
};
