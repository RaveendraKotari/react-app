import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FetchProductObj } from '../services/productService';


const UpdateProduct = () => {

  const dispatch = useDispatch();
  const { code } = useParams(); 

  const productObj = useSelector((state) => state.product.productObj)
  console.log("checkkk", code, productObj);

  useEffect(() => {
    dispatch(FetchProductObj(code));
  }, []);

  return (
    <>
{productObj.name}
    </>
  )
}

export default UpdateProduct;
