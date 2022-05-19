import React from 'react';
import {Header} from '../layout/Header';
import {Table} from 'react-bootstrap';

export function List(){
  return (
  <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>title</th>
          <th>Username</th>
          <th>time</th>
          <th>views</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>hi</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  </div>
  )
  
}

export default List;