import {
  SET_DETAIL_ITEM_ID,
  REMOVE_DETAIL_ITEM_ID,
  CHANGE_SHOW_DETAIL,
} from "./ItemActions";

const initialState = {
  showDetailId: -1,
  showDetail: false,
};

const itemReducer = (state, action) => {
  switch (action.type) {
    case SET_DETAIL_ITEM_ID:
      return { ...state, showDetailId: action.data };
    case REMOVE_DETAIL_ITEM_ID:
      return { ...state, showDetailId: -1 };
    case CHANGE_SHOW_DETAIL:
      return { ...state, showDetail: !state.showDetail };

    default:
      return state || initialState;
  }
};

export default itemReducer;
