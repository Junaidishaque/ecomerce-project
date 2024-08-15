import { useState,useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MDBSpinner, MDBBtn } from 'mdb-react-ui-kit';
function Products() {
  const [products,setProducts]=useState([])
  const [loading, setLoading] = useState(true);

  function showProduts() {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json => {
      setProducts(json);
      setLoading(false); // Set loading to false once data is fetched
    });
    
  } 
  useEffect(() => {
  
    showProduts()
   
  }, [])
  if (loading) {
    return (
      <>
<div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <MDBBtn disabled>
      <MDBSpinner size='sm' role='status' tag='span' className='me-2' />
      Loading...
    </MDBBtn>
    </div>
    </>
        );
  }
  return (
      <>
      <Row className="d-flex flex-wrap">
 {products.map((item,ind)=>{
  return( 

<Col key={item.id} lg={3} md={4} sm={6} xs={12} className="d-flex mb-3">
    <Card style={{ width: '18rem' }} className="flex-fill mt-3">
    <Card.Img variant="top" src={item.image}style={{ height: '20rem' }} />
    <Card.Body >
      <Card.Title>{item.title}</Card.Title>
      {/* <Card.Text >
        {item.description}
      </Card.Text> */}
     {/* <Link to={"./details"}> <Button variant="primary">Add to Cart</Button></Link> */}
     <Link to={`/details/${item.id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
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