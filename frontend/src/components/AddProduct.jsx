import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addNewProduct } from '../services/productService';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const AddProduct = () => {
    const [name, setName] = useState("ffdf");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const productObj = {name, quantity, price}
        dispatch(addNewProduct(productObj));
        navigate('/');
    }

  return (
    <div>
    <form onSubmit={handlesubmit}>
        <div className="space-y-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    name
                </label>
                <div className="mt-2">
                    <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Quantity
                </label>
                <div className="mt-2">
                    <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                    id="email"
                    name="email"
                    type="number"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>
            </div>
        </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link type="button" to={'/'} className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </Link>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
      {/* <form onSubmit={handlesubmit}>
          <div className="card">
              <div className="card-header" style={{ textAlign: 'left' }}>
                  <h2>Add User</h2>
              </div>
              <div className="card-body" style={{ textAlign: 'left' }}>
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="form-group">
                              <label>Name</label>
                              <input value={name} onChange={e => setName(e.target.value)} className="form-control"></input>
                          </div>
                      </div>
                      <div className="col-lg-12">
                          <div className="form-group">
                              <label>Quantity</label>
                              <input value={quantity} onChange={e => setQuantity(e.target.value)} className="form-control"></input>
                          </div>
                      </div>
                      <div className="col-lg-12">
                          <div className="form-group">
                              <label>Price</label>
                              <input value={price} onChange={e => setPrice(e.target.value)} className="form-control"></input>
                          </div>
                      </div>    
                      {/* <div className="col-lg-12">
                          <div className="form-group">
                              <label>Role</label>
                              <select value={role} onChange={e => rolechange(e.target.value)} className="form-control">
                                  <option value="admin">Admin</option>
                                  <option value="staff">Staff</option>
                              </select>
                          </div>
                      </div>

                  </div>
              </div>
              <div className="card-footer" style={{ textAlign: 'left' }}>
                  <button className="btn btn-primary" type="submit">Submit</button> |
                  <Link className="btn btn-danger" to={'/'}>Back</Link>
              </div>

          </div> */}
      </form>
  </div>
  )
}

export default AddProduct;
