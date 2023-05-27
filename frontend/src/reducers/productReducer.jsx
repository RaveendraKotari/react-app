import { ADD_PRODUCT, DELETE_PRODUCT, FAIL_REQUEST, GET_PRODUCT_LIST, GET_PRODUCT_OBJ, MAKE_REQUEST } from "../actions/actionTypes"

const initialstate = {
    loading: true,
    productList: [],
    productObj: {},
    errMessage: ""
}
export const productReducer = (state=initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            } 
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errMessage: action.payload
            }
        case GET_PRODUCT_LIST:
            return {
                loading: false,
                errMessage: "",
                productList: action.payload,
                productObj: {}
            }

        case GET_PRODUCT_OBJ:
            return {
                ...state,
                loading: false,
                productObj: action.payload,
            }

        case DELETE_PRODUCT:
            return {
                ...state,
                loading: false,
            }
        
        case ADD_PRODUCT:
            return {
                ...state,
                loading: false
            }
        default: return state
    }
}