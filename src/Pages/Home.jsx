import React, { useEffect } from 'react'
import Header from '../Components/Header'
import { Card, Col, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../Redux/Slices/productSlice'


function Home() {

  const dispatch = useDispatch()
  const {allProducts,error,loading} = useSelector(state=>state.productReducer)
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  return (
    
      <>
       <Header insideHome={true}/>
       <div className='my-5 container-fluid'>
        {
          loading ?
          <div className='text-center'>
            <Spinner animation="border" variant="danger" />
          </div>
          :
         <Row style={{marginTop:"200px"}}>

          {
            allProducts?.length > 0 ?
            allProducts?.map(product=>(
              <Col key={product?.id} sm={12} md={6} lg={4} xl={3} xxl={2}>
              <Card className='my-5 me-2' style={{ width: '18rem'}}>
            <Card.Img height={"180px"} variant="top" src={product.thumbnail} />
            <Card.Body>
              <Card.Title className='text-center' >{product?.title.slice(0,20)}...</Card.Title>
              <div className='text-center'>
                <Link to={`/${product?.id}/view`}>View More</Link>
              </div>
            </Card.Body>
          </Card>
              </Col>
            ))
           
          :
          <div className='text-center text-danger'>
           <h3> products not found</h3>
          </div>
          }
         </Row>
         }
       </div>
      </>
     
  )
}

export default Home
