import { Reducer } from "redux";
import { addItemToCart } from "../utils/cartUtils";

import {
  ICartState,
  CartActions,
  CartActionTypes,
} from "../types/cartTypes";

const initialCartState: ICartState = {
  hidden: true,
  cartItems: [],
};

export const cartReducer: Reducer<ICartState, CartActions> = (
  state = initialCartState,
  action
) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};