import React from 'react';
import {Container, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Home.css'
function Home() {
  return (
    <div>
      <h3>Home</h3>
      <div className='gap'></div>
      <Container className='topleft'>
        <Card >
          <Card.Title>ads</Card.Title>
        </Card>
        <Card >
          <Card.Title>ads</Card.Title>
        </Card>
        <Card>
          <Card.Title>ads</Card.Title>
        </Card>
        <Card>
          <Card.Title>ads</Card.Title>
        </Card>
      </Container>

      <Container className='topright'>
      <Card className='topboard'>
          <Card.Title>ads</Card.Title>
        </Card>
        <Card className='topboard'>
          <Card.Title>ads</Card.Title>
        </Card>
        <Card>
          <Card.Title>ads</Card.Title>
        </Card>
        <Card>
          <Card.Title>ads</Card.Title>
        </Card>
      </Container>

      <Container className='bottomcenter'>
      <Card>
          <Card.Title>ads</Card.Title>
        </Card>
        <Card >
          <Card.Title>ads</Card.Title>
        </Card>
        <Card>
          <Card.Title>ads</Card.Title>
        </Card>
        <Card>
          <Card.Title>ads</Card.Title>
        </Card>
      </Container>
    </div>
  );
}

export default Home;