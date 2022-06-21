import React from 'react';

import HeaderFilters from './HeaderFilters/HeaderFilters';
import HeaderSearch from './HeaderSearch/HeaderSearch';

import styles from './header.module.scss';

import userImg from '../../assets/images/header/user.png';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__body}>
        <h1 className={styles.namePage}>Задачи</h1>

        <div className={styles.header__links}>
          <HeaderFilters />
          <a>Важное</a>
          <a>Выполнено</a>
        </div>

        <div className={styles.header__right}>
          <HeaderSearch />
          <img className={styles.user} src={userImg} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
