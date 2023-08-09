import {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from 'store/utils/toolkit';
import {useInjectReducer, useInjectSaga} from 'store/utils/redux-injectors';
import {homeScreenSaga} from './saga';
import {HomeScreenState} from './types';

export const initialState: HomeScreenState = {};

const slice = createSlice({
  name: 'homeScreen',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const {actions: homeScreenActions} = slice;

export const useHomeScreenSlice = () => {
  useInjectReducer({key: slice.name, reducer: slice.reducer});
  useInjectSaga({key: slice.name, saga: homeScreenSaga});
  return {actions: slice.actions};
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 * const { actions } = useHomeScreenSlice();
 *
 * const onButtonClick = (evt) => {
 * dispatch(actions.someAction());
 * };
 * }
 */
