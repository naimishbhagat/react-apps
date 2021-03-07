const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    if (action.type === "CLEAR_CART") {
      return { ...state, cart: [] };
    }
    if (action.type === "REMOVE") {
      const id = action.payload;
      return { ...state, cart: state.cart.filter((item) => item.id !== id) };
    }
    return { ...state, cart: state.cart.filter((item) => item.id !== id) };
  }
  if (action.type === "INCREASE") {
    const id = action.payload;
    let tempCart = state.cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "DECREASE") {
    const id = action.payload;
    let tempCart = state.cart
      .map((item) => {
        if (item.id === id) {
          let itemAmount = item.amount - 1;
          return { ...item, amount: itemAmount };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: tempCart };
  }
  if (action.type === "GET_TOTAL") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.amount += amount;
        cartTotal.total += itemTotal;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );

    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, loading: false, cart: action.payload };
  }
  return state;
};
export default reducer;
