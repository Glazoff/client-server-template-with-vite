const defaultState = {
  theme: 'light',
};

export const themeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SWITCH_THEME':
      return { ...state, theme: action.payload };
    case 'GET_THEME':
      return state;
  }
};
