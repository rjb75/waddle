import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../app/reducers/UserSlice';
import routingReducer from '../app/reducers/RoutingSlice';
import authReducer from '../app/reducers/AuthenticationSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    routing: routingReducer,
    auth: authReducer,
  },
});
