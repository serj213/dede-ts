import React from 'react';
import styles from './popupEdit.module.scss';

const PopupEdit = () => {
  return (
    <div className={styles.popupEdit}>
      <button>Изменить</button>
      <button>Удалить</button>
    </div>
  );
};

export default PopupEdit;
