import { useState,useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Col } from "react-bootstrap";


function Products() {
  const [products,setProducts]=useState([])

  function showProduts() {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setProducts(json))
  } 
  useEffect(() => {
  
    showProduts()
   
  }, [])

    return (
      <>
      <Row className="d-flex flex-wrap">
 {products.map((item,ind)=>{
  return( 

<Col lg={3} md={4} sm={6} xs={12} className="d-flex mb-3">
    <Card style={{ width: '18rem' }} className="flex-fill mt-3">
    <Card.Img variant="top" src={item.image}style={{ height: '20rem' }} />
    <Card.Body >
      <Card.Title>{item.title}</Card.Title>
      {/* <Card.Text >
        {item.description}
      </Card.Text> */}
      <Button variant="primary" >Add to Cart</Button>
    </Card.Body>
  </Card>
  </Col>
 
  )
  
 })}
  </Row>
      </>
    )
  }

export default Products