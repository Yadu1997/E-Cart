import React from 'react'
import Header from '../Components/Header'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../Redux/Slices/wishlistSlice'
import { addToCart } from '../Redux/Slices/cartSlice'

function Wishlist() {

  const ourWishlist = useSelector(state=>state.wishlistReducer)
  const oruCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()


  const handleCart = (product) => {
     const existingProduct = oruCart?.find(item=>item.id==product.id)
     if (existingProduct) {
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
      alert("Quantity increased")
     } else {
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
     }
  }

  return (
    
    <div>
      <Header/>
      {
        ourWishlist?.length>0 ?
       <div style={{marginTop:"150px"}}>
          <h1 style={{marginTop:"200px"}} className='fw-bolder text-center'>Wishlist</h1>
          <div className='my-5 container-fluid w-100'>
           <Row style={{marginTop:"10px"}}>

            {
              ourWishlist.map(product=>(
                <Col key={product?.id} sm={12} md={6} lg={4} xl={3}>
                <Card style={{ width: '18rem'}}>
              <Card.Img height={"180px"} variant="top" src={product?.thumbnail} />
              <Card.Body>
                <Card.Title className='text-center' >{product?.title}</Card.Title>
                <div className='d-flex justify-content-between'>
                  <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className='btn btn-light'><i className="fa-solid fa-xmark text-danger"></i></button>
                  <button onClick={()=>handleCart(product)} className='btn btn-light'><i className="fa-solid fa-cart-plus text-black"></i></button>
                </div>
              </Card.Body>
            </Card>
                </Col>
              ))
            }
              </Row>
         </div>
       </div>
        :
        <div style={{ height:"75vh"}} className='d-flex flex-column align-items-center justify-content-center'>
          <h1 className='mt-5'>Wishlist is Empty</h1>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png" alt="empty cart" />
        </div>
      }
    </div>
  )
}

export default Wishlist
