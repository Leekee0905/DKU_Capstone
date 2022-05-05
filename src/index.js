import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import Home from './Home';
import Info from './Info';
import Board from './Board';
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/*" element={<Home />}></Route>
          <Route path="/Info" element={<Info />}></Route>
          <Route path="/Board" element={<Board />}></Route>
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