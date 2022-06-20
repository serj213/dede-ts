import React from 'react';

import HeaderFilters from './HeaderFilters/HeaderFilters';
import HeaderSearch from './HeaderSearch/HeaderSearch';

import styles from './header.module.scss';

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
        </div>
      </div>
    </header>
  );
};

export default Header;
