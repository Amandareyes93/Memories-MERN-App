import { combineReducers } from 'redux';

import posts from './posts';

export const reducers = combineReducers({ posts });






// import { configureStore } from '@reduxjs/toolkit'
// import counter from './counter'
// import posts from './posts'

// export default configureStore({
//   reducer: {
//     counter,
//     posts
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//     serializableCheck: false
//   }),
// })
