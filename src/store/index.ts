import { configureStore } from "@reduxjs/toolkit";
import {menuSlice} from "./MenuSlice";

const store = configureStore({
    reducer: {
        menu: menuSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
