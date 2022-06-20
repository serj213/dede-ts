import React from 'react';

import styles from './sidebarSublist.module.scss';

type tasksItemType = { id: number; text: string };

interface SidebarSublistProp {
  tasks: tasksItemType[];
}

const SidebarSublist: React.FC<SidebarSublistProp> = ({ tasks }) => {
  return (
    <ul className={styles.sublist}>
      {tasks.length > 0 &&
        tasks.map((item: any) => {
          return (
            <li key={item.id}>
              <span>{item.text}</span>
            </li>
          );
        })}
    </ul>
  );
};

export default SidebarSublist;
