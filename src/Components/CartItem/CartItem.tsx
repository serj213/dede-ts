import React, { ChangeEvent } from 'react';

import TextareaAutosize from 'react-textarea-autosize';

import CartState from './СartState/СartState';

import styles from './cartItem.module.scss';

import img from '../../assets/images/cartItem/img.png';

const CartItem: React.FC = () => {
  const [taskValue, setTaskValue] = React.useState('');

  const changeTaskValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTaskValue(e.target.value);
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cart__top}>
        <img src={img} alt="" />
      </div>
      <div className={styles.cart__content}>
        <h5 className={styles.cart__title}>Какая то задача</h5>
        <TextareaAutosize
          placeholder="опиши свою задачу"
          value={taskValue}
          onChange={(e) => changeTaskValue(e)}
        />
        <CartState />
      </div>
    </div>
  );
};

export default CartItem;
