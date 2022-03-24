import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Product.css'
const Product = ({product, increaseCart}) => {
    const {name, img} = product
    return (
        <div className='col-md-4'>
            <Card style={{ width: '18rem',height: '500px' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk.
    </Card.Text>
    <Button variant="primary" onClick={()=>increaseCart(product)}>Add to Cart</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Product;
