import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../Redux/Slices/wishlistSlice'
import { addToCart } from '../Redux/Slices/cartSlice'

function View() {
  const {id} = useParams()
  
  const [product,setProduct] = useState({})
  

  const userWishlist = useSelector(state=>state.wishlistReducer)
  console.log(userWishlist);
  const dispatch = useDispatch()

  const yourCart = useSelector(state=>state.cartReducer)

  useEffect(()=>{
    if (localStorage.getItem("allProducts")) {
      const allProducts = JSON.parse(localStorage.getItem("allProducts"))
      setProduct(allProducts.find(item=>item.id==id))
    } else {
      console.log('local storage is empty');
    }
  },[])

  console.log(product);


  const handleWishlist = () =>{
    if (userWishlist?.includes(product)) {
      alert("item already in the wishlist")
    } else {
      dispatch(addToWishlist(product))
    }
  }


  const handleCart = () =>{
    const existingProduct= yourCart?.find(item=>item.id==product.id)
    if (existingProduct) {
      dispatch(addToCart(product))
      alert("Quantity is increased")
    } else {
      dispatch(addToCart(product))
    }
  }

  return (
    <div>
        <Header/>
         <div style={{height:"75vh"}} className='container d-flex justify-content-around align-items-center '>
          <div className="row w-100">
            <div className="col-lg-6">
              <img width={"500px"} height={"350px"} src={product?.thumbnail} alt="" />
            </div>
            
            <div className="col-lg-6">
              <h3>PID : {product?.id}</h3>
              <h3>Name : <span className='fw-bolder'>{product?.title}</span></h3>
              <h3>Price : <span className='text-danger fw-bolder'>$ {product?.price}</span></h3>
              <p><span className='fs-3'>Discription</span> : <span className='fw-bolder'>{product?.description}</span> </p>
              <p></p>
              <div className='d-flex justify-content-between align-items-center'>
                <button onClick={handleWishlist} className='btn btn-light'> <i className="fa-solid fa-heart text-danger"></i> Add to Wishlist</button>
                <button onClick={handleCart} className='btn btn-light'> <i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>
              </div>
            </div>
          </div>
         </div>
    </div>
  )
}

export default View
