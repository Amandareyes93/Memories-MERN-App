import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (posts = [], action) => {
  
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
  
    default:
      return posts;
  }
};







// import * as api from '../api/index';
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


// export const getPostAsync = createAsyncThunk(
//   'posts/getPosts',
//   async () => {
//     const {data} = await api.fetchPosts();
//     return data;
//   }
// );
// export const postsSlice = createSlice({
//   name: 'posts',
//   initialState: {
//     isLoading: false,
//     value: [],
//   },
//   reducers: {
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getPostAsync.pending, (state) => {
//         debugger
//         state.isLoading = true;
//       })
//       .addCase(getPostAsync.fulfilled, (state, action) => {
//         debugger
//         state.isLoading = false;
//         state.value = [{pepe: 'hola'}];
//       });
//   },
// });

// // Action creators are generated for each case reducer function
// export const {  } = postsSlice.actions;

// export default postsSlice.reducer;
