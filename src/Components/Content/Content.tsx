import React from 'react';

import styles from './content.module.scss';

interface contentProps {
  children: React.ReactNode;
}

const Content: React.FC<contentProps> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

export default Content;
