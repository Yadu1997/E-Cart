import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../Redux/Slices/productSlice'

function Header({insideHome}) {

  const dispatch = useDispatch()
  const yourWishlist = useSelector(state=>state.wishlistReducer)
  const yourCart = useSelector(state=>state.cartReducer)

  return (
    <div className='position-relative'>
      <Navbar expand="lg" style={{zIndex:"1"}} className="bg-info w-100 position-fixed top-0">
      <Container>
        <Navbar.Brand><Link style={{textDecoration:'none', color:'white', fontSize:'35px'}} to={'/'}><i className="fa-solid fa-cart-shopping"></i> <span className='fw-bolder'>E</span>-<span className='fw-bolder' style={{color:'black'}}>Cart</span></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            {
              insideHome &&
              // <Nav.Link >
                <div className='my-3'><input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{width:'400px'}} type="text" placeholder='Search Here' className='form-control me-3'/></div>
              // </Nav.Link>
            }
            {/* <Nav.Link > */}
             <div className='my-3'> <Link className='fs-4  me-3' style={{textDecoration:'none', color:'white'}} to={'/wishlist'}> <i className="fa-solid fa-heart text-danger"></i> Wishlist <Badge>{yourWishlist?.length}</Badge> </Link></div>
            {/* </Nav.Link> */}
            {/* <Nav.Link > */}
              <div className='my-3'><Link className='fs-4 ' style={{textDecoration:'none', color:'white'}} to={'/cart'}> <i className="fa-solid fa-cart-plus text-black"></i> Cart <Badge>{yourCart?.length}</Badge> </Link></div>
            {/* </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
