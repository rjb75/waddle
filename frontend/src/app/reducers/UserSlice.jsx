import { createSlice } from "@reduxjs/toolkit";
import counterSlice from "../../features/counter/counterSlice";


 class User{
  nickname;
  email;
}

const initialState = {
  nickname: "defaultUser", // String -> can keep like this or set to be another value
  email: "defaultEmail",  // String -> can keep like this or set to another value
  pin: null, // Number -> set as null to begin with, but can be changd to another value
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => { // Sets the user, takes payload of nickname as String and the email as a String
      state.nickname = action.payload.userName;
      state.email = action.payload.email;
    },
    setNickname: (state, action) => { // Sets the nickname, takes the payload of nickname as a String
      state.nickname = action.payload;
    },
    setEmail: (state, action) => { // Sets the email, takes the payload of email as a String
      state.email = action.payload;
    }
  }
});

export const { setUser, setNickname, setEmail } = userSlice.actions;


// For getting the user's nickname
export const selectNickname = (state) => state.user.nickname;
// For getting the user's email
export const selectEmail = (state) => state.user.email;

export default userSlice.reducer;