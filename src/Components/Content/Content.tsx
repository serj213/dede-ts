import React from 'react';

import Header from '../Header/Header';

import styles from './content.module.scss';

const Content: React.FC = () => {
  return (
    <div className={styles.content}>
      <Header />
    </div>
  );
};

export default Content;
