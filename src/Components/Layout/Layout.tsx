import React from 'react';

import styles from './layout.module.scss';

interface layoutPros {
  children: React.ReactNode;
}

const Layout: React.FC<layoutPros> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
