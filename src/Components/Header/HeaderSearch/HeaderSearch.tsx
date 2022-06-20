import React, { ChangeEvent } from 'react';

import styles from './headerSearch.module.scss';

import searchImg from '../../../assets/images/header/search.svg';

const HeaderSearch: React.FC = () => {
  const [searchInput, setSearchInput] = React.useState('');

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className={styles.search}>
      <img src={searchImg} alt="" />
      <input
        value={searchInput}
        onChange={(e) => changeInputHandler(e)}
        type="text"
        placeholder="Поиск по блоку"
      />
    </div>
  );
};

export default HeaderSearch;
