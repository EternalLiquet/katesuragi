import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header.js';
import Sidebar from './components/common/Sidebar.js';

const App = () => {
  return (
    <div class="page-wrap">
      <Sidebar/>
      <section id="main">
        <Header/>
      </section>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
