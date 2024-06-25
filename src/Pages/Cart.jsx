import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../Redux/Slices/cartSlice'
import { Link, Navigate } from 'react-router-dom'

function Cart() {

  const [cartTotal,setCartTotal] = useState(0)

  const oruCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()

  useEffect(()=>{
    if (oruCart?.length>0) {
      setCartTotal(oruCart?.map(item => item.totalPrice).reduce((t1,t2)=>t1+t2))
    } else {
      setCartTotal(0)
    }
  })

  const handleDecrement=(product)=>{
    if (product.quantity>1) {
      dispatch(decrementQuantity(product.id))
    } else {
      dispatch(removeCartItem(product.id))
    }
  }

  const checkout = () =>{
    dispatch(emptyCart())
    alert("Order Placed Thank you for Shoping with us")
    Navigate("/")
  }

  return (
    <div>
      <Header/>
      <div className='container' style={{marginTop:"150px"}}>
       {
        oruCart?.length>0 ?

        <div className='my-5'>
          <h1>Cart Summery</h1>
          <div className="row">
            <div className="col-lg-6">
              <table className='table'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>...</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    oruCart?.map((product,index)=>(
                      <tr key={product.id}>
                    <td>{index+1}</td>
                    <td>{product.title.slice(0,15)}...</td>
                    <td><img width={'50px'} height={'50px'} src={product.thumbnail} alt="Product" /></td>
                    <td>
                      <div className="d-flex">
                        <button onClick={()=>handleDecrement(product)} className='btn fw-bolder'>-</button>
                        <input style={{width:"50px"}} className='form-control fw-bolder' type="text" value={product.quantity} />
                        <button onClick={()=>dispatch(incrementQuantity(product?.id))} className='btn fw-bolder'>+</button>
                      </div>
                    </td>
                    <td>$ {product.totalPrice}</td>
                    <td><button onClick={()=>dispatch(removeCartItem(product?.id))} className='btn'><i className="fa-solid fa-trash"></i></button></td>
                  </tr>
                    ))
                    
                  }
                </tbody>
              </table>
                <div className="float-end">
                  <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger me-3'>Empty Cart</button>
                  <Link to={'/'} className='btn btn-primary'>Shope More</Link>
                </div>

            </div>
            <div className="col"></div>
            <div className="col-lg-5">
              <div className="border rounded shadow p-5">
                <h4>Total Amount : <span className='fw-bolder text-danger'>$ {cartTotal} </span></h4>
                <hr />
                <div className="d-grid">
                  <button onClick={checkout} className='btn btn-success'>Check Out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <div style={{ height:"75vh"}} className='d-flex flex-column align-items-center justify-content-center'>
        <h1>Cart is Empty</h1>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png" alt="empty cart" />
      </div>
        }
      </div>
    </div>
  )
}

export default Cart