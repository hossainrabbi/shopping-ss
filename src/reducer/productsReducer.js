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
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case 'INCREMENT_QTY':
      return {
        ...state,
        cart: state.cart.filter((cartItem) =>
          cartItem.id === action.payload.id
            ? (cartItem.qty = cartItem.qty + 1)
            : cartItem.qty
        ),
      };
    case 'DECREMENT_QTY':
      return {
        ...state,
        cart: state.cart.filter((cartItem) =>
          cartItem.id === action.payload.id
            ? (cartItem.qty = cartItem.qty > 1 ? cartItem.qty - 1 : 1)
            : cartItem.qty
        ),
      };
    default:
      return state;
  }
};
