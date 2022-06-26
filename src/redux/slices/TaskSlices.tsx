import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { cartType } from '../../types/CartType';

// interface Tcarts {
//   // carts: cartType[];
// }

const initialState = {
  carts: [
    {
      id: 0,
      img: '../../../public/images/img.png',
      name: 'Какая то задача',
      text: 'efdf',
      stateTask: 0,
      addedImportant: false,
    },
    {
      id: 1,
      img: '../../../public/images/img.png',
      name: 'Какая то вторая задача',
      text: 'Здесь какой то текст',
      stateTask: 1,
      addedImportant: true,
    },
  ],
};

export const taskSlices = createSlice({
  name: 'carts',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

// export const { getCarts } = taskSlices.actions;

export default taskSlices.reducer;
