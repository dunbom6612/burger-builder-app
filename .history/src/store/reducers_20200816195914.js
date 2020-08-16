import * as actionsTypes from "./actions";

const initialState = {
  ingredients: null,
  totalPrice: 4,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD_INGREDIENTS:
      return {};
    case actionsTypes.REMOVE_INGREDIENTS:
      return {};
    default:
      return state;
  }
};

export default reducer;
