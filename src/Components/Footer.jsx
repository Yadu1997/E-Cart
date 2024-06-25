import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:""}} className=' bg-info w-100 p-5'>
      <div className="d-lg-flex justify-content-around p-5">
        <div style={{width:'350px'}} className="intro d-md-flex flex-column">
          <h3 className='fw-bolder'><i className="fa-solid fa-cart-shopping"></i>E-Cart</h3>
          <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet esse praesentium quidem sunt beatae pariatur. Quos repellat obcaecati, ipsa, deleniti quis quod optio animi ab, eaque consequuntur doloremque fugiat?</p>
        </div>
        <div className="links d-flex flex-column">
          <h3>Links</h3>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist Page</Link>
          <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h3>Guides</h3>
          <a style={{textDecoration:'none', color:'white'}} href="">React</a>
          <a style={{textDecoration:'none', color:'white'}} href="">Bootstrap</a>
          <a style={{textDecoration:'none', color:'white'}} href="">Fontawesome</a>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <div className="d-flex">
            <input type="text" placeholder='Enter Your Email Here' className='form-control' />
            <button className='btn btn-info ms-2'><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="icon d-flex justify-content-between mt-2">
            <a style={{textDecoration:'none', color:'white'}} href=""><i className="fa-brands fa-instagram fs-3"></i></a>
            <a style={{textDecoration:'none', color:'white'}} href=""><i className="fa-brands fa-facebook fs-3"></i></a>
            <a style={{textDecoration:'none', color:'white'}} href=""><i className="fa-brands fa-twitter fs-3"></i></a>
            <a style={{textDecoration:'none', color:'white'}} href=""><i className="fa-brands fa-github fs-3"></i></a>
          </div>
        </div>
      </div>
      <p style={{color:'white',fontWeight:"bolder", fontSize:"20px"}} className='text-center'>Copy right © Media Player 2024, Inc.</p>
    </div>
  )
}

export default Footer
