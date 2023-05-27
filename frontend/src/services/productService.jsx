import axios from "axios"
import { ADD_PRODUCT, DELETE_PRODUCT, FAIL_REQUEST, GET_PRODUCT_LIST, GET_PRODUCT_OBJ, MAKE_REQUEST } from "../actions/actionTypes"

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    }
}

export const failRequest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err
    }
}

export const getProductList = (data) => {
    return {
        type: GET_PRODUCT_LIST,
        payload: data
    }
}

export const getProductObj = (data) => {
    return {
        type: GET_PRODUCT_OBJ,
        payload: data
    }
}

export const deleteProduct = () => {
    return {
        type: DELETE_PRODUCT
    }
}

export const addProduct = () => {
    return {
        type: ADD_PRODUCT
    }
}

export const FetchProductList=()=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.get('http://localhost:3000/products').then(res=>{
            const productlist=res.data;
            dispatch(getProductList(productlist));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     //}, 2000);
    }
}

export const FetchProductObj = (id) => {
    return(dispatch) => {
        dispatch(makeRequest());
        axios.get('http://localhost:3000/products/'+id)
        .then(res=> {
            const productObj = res.data;
            console.log("disdis", productObj);
            dispatch(getProductObj(productObj));
        })
        .catch(err => {
            dispatch(failRequest(err.message));
        })
    }
}

export const removeProduct = (id) => {
    return(dispatch) => {
        dispatch(makeRequest());
        axios.delete('http://localhost:3000/products/'+id)
        .then(res=> {
            dispatch(deleteProduct());
        })
        .catch(err => {
            dispatch(failRequest(err.message));
        })
    }
}

export const addNewProduct = (productObj) => {
    return(dispatch) => {
        dispatch(makeRequest());
        axios.post("http://localhost:3000/products", productObj)
        .then( res => {
            console.log(res);
            dispatch(addProduct());
        })
        .catch( err => {
            console.log(err);
            dispatch(failRequest(err.message));
        })
    }
}