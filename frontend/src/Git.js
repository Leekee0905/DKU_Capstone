import React from 'react';
import { Container,Button, Card } from 'react-bootstrap';

function Git(){
  return(
      <div>
        <h2>Git</h2>
        <Container>
          <Button>new repository</Button>
          <Button>Add Local Repository</Button>
          <Button>Clone Repository</Button>
          <Button>Issue</Button>
          <Button>Current Repository</Button>
          <Card>
            <Card.Title>Profile</Card.Title>
          </Card>
          <Card>
            <Card.Title>Name</Card.Title>
          </Card>
          <Card>
            <Card.Title>NickName</Card.Title>
          </Card>
        </Container>
      </div>
  )
}

export default Git;