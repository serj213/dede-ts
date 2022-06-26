import React, { ChangeEvent } from 'react';

import TextareaAutosize from 'react-textarea-autosize';

import CartState from './СartState/СartState';
import PopupEdit from '../popupEdit/PopupEdit';

import { cartType } from '../../types/CartType';

import styles from './cartItem.module.scss';

import importantImg from '../../assets/images/cartItem/important.svg';
import ActiveimportantImg from '../../assets/images/cartItem//important-active.svg';
import editImg from '../../assets/images/cartItem/edit.svg';

const CartItem: React.FC<cartType> = ({ img, name, text, stateTask, addedImportant }) => {
  const [taskValue, setTaskValue] = React.useState(text);
  const [importantActive, setImportantActive] = React.useState(addedImportant);
  const [visiblePopupEdit, setVisiblePopupEdit] = React.useState(false);

  const changeTaskValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTaskValue(e.target.value);
  };

  const changeImportantHandler = () => {
    setImportantActive(!importantActive);
  };

  const openPopupEdit = () => {
    setVisiblePopupEdit(!visiblePopupEdit);
  };

  return (
    <div className={styles.cart}>
      <button onClick={changeImportantHandler} className={styles.cart__important}>
        <img src={importantActive ? ActiveimportantImg : importantImg} alt="" />
      </button>
      <button className={styles.cart__edit}>
        <img onClick={openPopupEdit} src={editImg} alt="" />
        {visiblePopupEdit && <PopupEdit />}
      </button>
      <div className={styles.cart__top}>
        <img src={img} alt="" />
      </div>
      <div className={styles.cart__content}>
        <h5 className={styles.cart__title}>{name}</h5>
        <TextareaAutosize
          placeholder="опиши свою задачу"
          value={taskValue}
          onChange={(e) => changeTaskValue(e)}
        />
        <CartState stateTask={stateTask} />
      </div>
    </div>
  );
};

export default CartItem;
