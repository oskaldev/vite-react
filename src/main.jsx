import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from 'components/screens/home/Home';
import Layout from 'components/layouts/Layout';
import TodoProdiver from 'providers/TodoProdiver';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoProdiver>
      <Layout>
        <Home />
      </Layout>
    </TodoProdiver>
  </React.StrictMode>,
);
