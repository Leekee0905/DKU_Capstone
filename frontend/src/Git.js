import React from 'react';
import { Container,Card } from 'react-bootstrap';
import './Git.css'

function Git(){
  return(
      <div>
        <h2>Git</h2>
        <Container className="block-example border border-dark">
            <button className='b'>new repository</button>
            <button className='b'>Add Local Repository</button>
            <button className='b'>Clone Repository</button >
            <button className='b'>Issue</button>
            <button className='b'>Current Repository</button>

            <Card className='gitui'>
              <Card.Title>Profile</Card.Title>
            </Card>
            <Card className='gitui'>
              <Card.Title>Name</Card.Title>
            </Card>
            <Card className='gitui'>
              <Card.Title>NickName</Card.Title>
            </Card>
        </Container>
      </div>
  )
}

export default Git;