import { IS_LOADING, IS_SUCCESS, IS_ERROR } from '../constants/searchTypes'

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      }
    case IS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: action.payload,
      }
    case IS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      }
    default:
      throw new Error()
  }
}

export default dataFetchReducer
