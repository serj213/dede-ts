import React from 'react';

import Sidebar from './Components/Sidebar/Sidebar';
import Layout from './Components/Layout/Layout';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';

const App: React.FC = () => {
  return (
    <Layout>
      <Sidebar />
      <Content />
    </Layout>
  );
};

export default App;
