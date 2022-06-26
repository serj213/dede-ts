import React from 'react';
import { useAppSelector } from '../redux/hooks';

import CartBox from '../Components/CartBox/CartBox';
import CartItem from '../Components/CartItem/CartItem';
import img from '../assets/images/cartItem/img.png';

const Target: React.FC = () => {
  const carts = [
    {
      id: 0,
      img: img,
      name: 'Какая то задача',
      text: 'efdf',
      stateTask: 0,
      addedImportant: false,
    },
    {
      id: 1,
      img: img,
      name: 'Какая то вторая задача',
      text: 'Здесь какой то текст',
      stateTask: 1,
      addedImportant: true,
    },
  ];

  return <CartBox>{carts.length > 0 && carts.map((cart) => <CartItem {...cart} />)}</CartBox>;
};
export default Target;
