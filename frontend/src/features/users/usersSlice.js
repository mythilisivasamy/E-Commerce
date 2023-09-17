import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const USER_URL = 'http://localhost:8000/api/user';
if (localStorage.getItem('userInfo') === 'undefined') {
  localStorage.setItem('userInfo', '');
}
// setting initial state of the user Slice
const initialState = {
  message: '',
  statusCode: '',
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
};

// Creating login to the user
export const signup = createAsyncThunk('user/signup', async (newUser) => {
  try {
    const response = await axios.post(`${USER_URL}/signup`, newUser);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async (updatedUser) => {
    try {
      const { token } = JSON.parse(localStorage.getItem('userInfo'));
      const response = await axios.put(`${USER_URL}/profile`, updatedUser, {
        headers: { authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);
// Authendicate login
export const login = createAsyncThunk('user/login', async (newUser) => {
  try {
    const response = await axios.post(`${USER_URL}/login`, newUser);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

// action creators for reducer function
const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setStatusCode: (state) => {
      state.statusCode = '';
      state.message = '';
    },
    setToken: (state) => {
      state.token = '';
    },
    signout: (state) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signup.pending, (state) => {
        state.message = 'Verifying';
        state.statusCode = '';
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.statusCode = action.payload.statusCode;
        localStorage.removeItem('userInfo');
      })
      .addCase(signup.rejected, (state, action) => {
        state.message = action.error.message;
      })
      .addCase(login.pending, (state) => {
        state.message = 'Verifying';
        state.statusCode = '';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.userInfo = action.payload?.userInfo;
        state.message = action.payload.message;
        state.statusCode = action.payload.statusCode;
        localStorage.setItem(
          'userInfo',
          JSON.stringify(action.payload?.userInfo)
        );
        localStorage.removeItem('shippingAddress');
      })
      .addCase(login.rejected, (state, action) => {
        state.message = action.error.message;
      })
      .addCase(updateProfile.pending, (state) => {
        state.message = 'Verifying';
        state.statusCode = '';
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.statusCode = action.payload.statusCode;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.message = action.error.message;
      });
  },
});

export const selectUserMessage = (state) => state.user.message;
export const selectUserStatusCode = (state) => state.user.statusCode;
export const selectUserInfo = (state) => state.user.userInfo;
export const selectEmail = (state) => state.user.email;
export const selectPassword = (state) => state.user.password;
export const { setStatusCode, setToken, signout } = usersSlice.actions;
export default usersSlice.reducer;
