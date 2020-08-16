import * as actionsTypes from "./actions";

const initialState = {
  ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      mear: 0
  },
  totalPrice: 4,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD_INGREDIENTS:
      return {
          ...state,
          ingredients: {
              ...state.ingredients,          // nested object
              [action.ingredientName]: state.ingredients[action.ingredientName] + 1

          }
      };
    case actionsTypes.REMOVE_INGREDIENTS:
      return {
        ...state,
        ingredients: {
            ...state.ingredients,          // nested object
            [action.ingredientName]: state.ingredients[action.ingredientName] -1 

        }
    };;
    default:
      return state;
  }
};

export default reducer;
