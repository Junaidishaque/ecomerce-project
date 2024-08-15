import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button , } from 'react-bootstrap';
import { MDBSpinner, MDBBtn } from 'mdb-react-ui-kit';
import Header from './Header';
import Footer from './Footer';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => {
        setProduct(json);
        setLoading(false); // Set loading to false once data is fetched
      });
  }, [id]);
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <MDBBtn disabled>
      <MDBSpinner size='sm' role='status' tag='span' className='me-2' />
      Loading...
    </MDBBtn>
    </div>
    );
  }

  return (
<>
    <Header/>
    <Card style={{ width: '18rem', margin: 'auto' }}>
      <Card.Img variant="top" src={product.image} style={{ height: '20rem' }} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Price: ${product.price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    <Footer/>
    </>
  );
}

export default ProductDetails;
