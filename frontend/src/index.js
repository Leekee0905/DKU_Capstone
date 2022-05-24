import React ,{useState,useEffect}from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Info from './Info';
import Issue from './Issue';
import Login from './signpage/Login';
import Free from './Free';
import Git from './Git';
import Signup from './signpage/Signup';
import reportWebVitals from './reportWebVitals';
import Header from './layout/Header';
import Write from './boardpage/Write';





function App() {

  return (
    <div>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Info" element={<Info />}></Route>
          <Route path="/Issue" element={<Issue />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Free/*" element={<Free />}></Route>
          <Route path="/Git" element={<Git />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path='/Write' element={<Write/>}/>
        </Routes>
    </div>
    
  );
}

/*if(!window.location.hash || window.location.hash==='#/'){
  window.location.hash = '#/Home';
}*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default App;