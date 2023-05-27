import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { FetchProductList, removeProduct } from '../services/productService'
import { Link } from "react-router-dom"

const Home = (props) =>  {
  const [refresh, setRefresh] = useState(false);
  useEffect( () => {
    props.loadProduct();
  }, [])

  const handleDelete = (id) => {
    if(window.confirm("Are you sure want to delete?")) {
      props.removeProduct(id);
      window.location.reload();
    }
  }

  return (
    <div>Home
      {
        props.product.productList && props.product.productList.map( item => 
        <div key={item._id}>
          <div>{item.name}</div>
          <Link to={'/product/edit/'+item._id}>Edit</Link>
          <button onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        )
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    product: state.product
  }
}

const mapDispatchToProps = (dispatch) => {
  return  {
    loadProduct: () => dispatch(FetchProductList()),
    removeProduct: (id) => dispatch(removeProduct(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
