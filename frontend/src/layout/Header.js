import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

export function Header(){

  return(
    <Navbar className = 'navbar' bg="light" expand="lg">
      <Navbar.Brand href="home">단허브</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className = 'headerlink' to="/Info">정보/구인</Link>
          <Link className = 'headerlink' to="/Issue">이슈/질문</Link>
          <Link className = 'headerlink' to="/Free">자유</Link>
          <NavDropdown title="깃허브" id="basic-nav-dropdown">
            <NavDropdown.Item href="#/Git">깃허브 툴 사용하기</NavDropdown.Item>
            <NavDropdown.Item href="https://github.com">깃허브 바로가기</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <p className='search'>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </p>
        <p className='signbox'>
          <Link className='sign' to="/Signup">회원가입</Link>
          <Link className='sign' to="/Login">로그인</Link>
        </p>
        
      </Navbar.Collapse>      
    </Navbar>
  )
}

export default Header;