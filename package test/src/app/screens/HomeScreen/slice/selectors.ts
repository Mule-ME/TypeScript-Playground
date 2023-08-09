import {createSelector} from '@reduxjs/toolkit';

import {RootState} from 'store/types';
import {initialState} from '.';

const selectSlice = (state: RootState) => state?.homeScreen || initialState;

export const selectHomeScreen = createSelector([selectSlice], state => state);
