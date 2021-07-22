import { SET_BUSINESS_LIST, SET_SELECTED_BUSINESS } from "../Action";

const initialState = {
  businessList: [],
  selectedBusiness: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUSINESS_LIST:
      return {
        ...state,
        businessList: action.list,
      };
    case SET_SELECTED_BUSINESS:
      return {
        ...state,
        selectedBusiness: action.details,
      };
    default:
      return state;
  }
};

export default appReducer;
