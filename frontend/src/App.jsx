import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import UpdateProduct from "./components/UpdateProduct"
import AddProduct from "./components/AddProduct"
import Error from "./components/Error"
import { Provider } from "react-redux"
import Store from "./store/store"
import Practice from './components/studies/Practice'
import PracticeTest from './components/studies/PracticeTest'
import { UseRef } from './components/studies/UseRef'
import { UseImperative } from './components/studies/UseImperative'
import { UseContext } from './components/studies/UseContext'
import { UseCallback } from './components/studies/UseCallback'
import { JavaScript } from './components/studies/javascript'
import UseForwardRef from './components/studies/UseForwardRef'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={Store}>
      <Main>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/product/edit/:code' element={<UpdateProduct />} />
          <Route exact path='/addproduct' element={<UseForwardRef />} />
          <Route exact path='/practice' element={<Practice />} />
          <Route exact path='/test' element={<PracticeTest />} />
          <Route exact path='/useref' element={<UseRef />} />
          <Route exact path='/useimperative' element={<UseImperative />} />
          <Route exact path='/usecontext' element={<UseContext />} />
          <Route exact path='/usecallback' element={<UseCallback />} />
          <Route exact path='/javascript' element={<JavaScript />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </Main>
    </Provider>
  )
}

export default App
