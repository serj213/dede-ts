import { log } from 'console';
import React from 'react';

import styles from './headerFilters.module.scss';

const HeaderFilters: React.FC = () => {
  const [visibleList, setVisibleList] = React.useState(false);
  const [activeFilter, setActiveFilter] = React.useState(0);
  const popupRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const ousideClick = (e: MouseEvent) => {
      if (popupRef.current && !e.composedPath().includes(popupRef.current)) {
        setVisibleList(false);
      }
    };

    document.body.addEventListener('click', ousideClick);

    return () => document.body.removeEventListener('click', ousideClick);
  }, []);

  const filtersData = [
    {
      name: 'Имя',
      filterId: 0,
    },
    {
      name: 'Состояние',
      filterId: 1,
    },

    {
      name: 'Дата создания',
      filterId: 2,
    },
  ];

  const changeActiveFilter = (filterId: number) => {
    setActiveFilter(filterId);
    setVisibleList(false);
  };

  return (
    <div ref={popupRef} className={`${styles.filters} ${visibleList && styles.filtersActive}`}>
      <div onClick={() => setVisibleList(!visibleList)} className={styles.filters__top}>
        <span>Фильтр</span>
        <svg
          width="12"
          height="6"
          viewBox="0 0 12 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M4.18313 0.733867L0.249227 4.57318C0.0895983 4.7299 0 4.9419 0 5.16288C0 5.38386 0.0895983 5.59586 0.249227 5.75258C0.328901 5.83098 0.423693 5.89321 0.528134 5.93567C0.632574 5.97814 0.744597 6 0.857739 6C0.970881 6 1.0829 5.97814 1.18734 5.93567C1.29179 5.89321 1.38658 5.83098 1.46625 5.75258L5.39159 1.9049C5.47126 1.8265 5.56605 1.76427 5.67049 1.72181C5.77493 1.67934 5.88696 1.65748 6.0001 1.65748C6.11324 1.65748 6.22526 1.67934 6.3297 1.72181C6.43414 1.76427 6.52894 1.8265 6.60861 1.9049L10.5339 5.75258C10.6942 5.91009 10.912 5.99901 11.1394 5.9998C11.3669 6.00058 11.5853 5.91316 11.7467 5.75676C11.9081 5.60036 11.9992 5.3878 12 5.16584C12.0008 4.94387 11.9112 4.73069 11.751 4.57318L7.81706 0.733867C7.33497 0.263946 6.68146 -4.29153e-06 6.0001 -4.29153e-06C5.31873 -4.29153e-06 4.66523 0.263946 4.18313 0.733867Z" />
        </svg>
      </div>

      {visibleList && (
        <ul className={styles.filters__list}>
          {filtersData.map((filter) => {
            return (
              <li
                className={activeFilter === filter.filterId ? styles.active : ''}
                onClick={() => changeActiveFilter(filter.filterId)}
                key={filter.filterId}>
                {filter.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default HeaderFilters;
