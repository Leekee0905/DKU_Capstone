import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Item=()=>{
  return (
    <div>
      <Card>
        <Card.Title>ads</Card.Title>
        <Link to={'/Free/post/'} className="btn btn-primary" variant="primary">상세보기</Link>
      </Card>
    </div>
  )
}

export default Item;