import { configureStore } from "@reduxjs/toolkit";
import threadReducer from "../features/Threads/ThreadSlice";


const store = configureStore({
    reducer: {
        threadReducer : threadReducer,
    }
})
export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import postReducer from "../features/Posts/PostSlice";


// const store = configureStore({
//     reducer: {
//         postReducer: postReducer,
//     }
// })
// export default store;