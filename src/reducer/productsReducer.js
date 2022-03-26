export const productsInitialState = {
  cart: [],
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    default:
      return state;
  }
};
