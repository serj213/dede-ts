import React from 'react';

import styles from './cartState.module.scss';

const СartState = () => {
  const [activeState, setActiveState] = React.useState(0);
  const [visibleStates, setVisibleStates] = React.useState(false);

  const stateCart = [
    {
      stateId: 0,
      text: 'выполнено',
    },
    {
      stateId: 1,
      text: 'перерыв',
    },
    {
      stateId: 2,
      text: 'в процессе',
    },
  ];

  const changeActiveState = (index: number) => {
    setActiveState(index);
    setVisibleStates(false);
  };

  return (
    <div className={styles.result}>
      <div onClick={() => setVisibleStates(true)} className={styles.result__top}>
        {stateCart[activeState].text}
      </div>

      {visibleStates && (
        <ul className={styles.result__list}>
          {stateCart.length > 0 &&
            stateCart.map((item) => {
              return (
                <li key={item.stateId} onClick={() => changeActiveState(item.stateId)}>
                  {item.text}
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default СartState;
