import { IS_LOADING, IS_SUCCESS, IS_ERROR } from '../constants/searchTypes';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case IS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case IS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      throw new Error();
  }
};

export default dataFetchReducer;
