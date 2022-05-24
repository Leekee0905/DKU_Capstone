import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BoardItem = (props) => {
  const { id, title, content } = props.board;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Link to={'/board/' + id} className="btn btn-primary">
          상세보기
        </Link>
      </Card.Body>
    </Card>
  );
};

export default BoardItem;