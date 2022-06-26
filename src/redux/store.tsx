import { configureStore } from '@reduxjs/toolkit';

import { taskSlices } from './slices/TaskSlices';

export const store = configureStore({
  reducer: {
    carts: taskSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
