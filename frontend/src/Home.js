import React from 'react';
import {Container, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Home.css'
function Home() {
  return (
    <div>
      <div></div>
      <div className='gap'></div>
      <Container className='boardcontainer'>
        <main>
          <Card>
            <ListGroup>
              <h3><Link  to="Info">정보/구인</Link></h3>
              <ListGroupItem action href='#/Info'>정보글입니다</ListGroupItem>
              <ListGroupItem action href='#/Info'>정보글입니다</ListGroupItem>
              <ListGroupItem action href='#/Info'>정보글입니다</ListGroupItem>
              <ListGroupItem action href='#/Info'>정보글입니다</ListGroupItem>
            </ListGroup>
          </Card>
          <Card>
            <ListGroup>
              <h3><Link to="Issue">이슈/질문</Link></h3>
              <ListGroupItem action href='#/Issue'>이슈 글입니다</ListGroupItem>
              <ListGroupItem action href='#/Issue'>이슈 글입니다</ListGroupItem>
              <ListGroupItem action href='#/Issue'>이슈 글입니다</ListGroupItem>
              <ListGroupItem action href='#/Issue'>이슈 글입니다</ListGroupItem>
              <ListGroupItem action href='#/Issue'>이슈 글입니다</ListGroupItem>
              <ListGroupItem action href='#/Issue'>이슈 글입니다</ListGroupItem>
            </ListGroup>
          </Card>
          <Card>
            <ListGroup>
              <h3><Link to="Free">자유</Link></h3>
              <ListGroupItem action href='#/Free'>자유게시판</ListGroupItem>
              <ListGroupItem action href='#/Free'>자유게시판</ListGroupItem>
              <ListGroupItem action href='#/Free'>자유게시판</ListGroupItem>
              <ListGroupItem action href='#/Free'>자유게시판</ListGroupItem>
              <ListGroupItem action href='#/Free'>자유게시판</ListGroupItem>
            </ListGroup>
            
          </Card>
        </main>
      </Container>
    </div>
  );
}

export default Home;