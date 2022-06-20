import React from 'react';

import SidebarMiddle from './SidebarMiddle/SidebarMiddle';

import styles from './sidebar.module.scss';

import logo from '../.././assets/images/sidebar/logo.svg';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__logo}>
        <a href="#">
          <img src={logo} alt="" />
        </a>
      </div>
      <SidebarMiddle />
    </aside>
  );
};

export default Sidebar;
