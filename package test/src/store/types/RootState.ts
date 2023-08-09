import {HomeScreenState} from 'app/screens/HomeScreen/slice/types';
// [IMPORT NEW CONTAINER STATE ABOVE] < Needed for generating containers seamlessly

export interface RootState {
  homeScreen?: HomeScreenState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
