import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../app/reducers/UserSlice';
import routingReducer from '../app/reducers/RoutingSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    routing: routingReducer,
  },
});
