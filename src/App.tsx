import React from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Layout from './Components/Layout/Layout';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Target from './pages/Target';
import Account from './pages/Account';

const App: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('target');
  }, []);

  return (
    <Layout>
      <Sidebar />
      <Content>
        <Header />
        <Routes>
          <Route path="target" element={<Target />} />
          <Route path="account" element={<Account />} />
        </Routes>
      </Content>
    </Layout>
  );
};

export default App;
