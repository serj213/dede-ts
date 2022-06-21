import React from 'react';
import styles from './cartBox.module.scss';

interface CartBoxProp {
  children: React.ReactNode;
}

const CartBox: React.FC<CartBoxProp> = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};

export default CartBox;
