import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import RootReducer from './rootReducer'
import {persistReducer, persistStore} from "redux-persist"


const persistConfig={
    key: "root",
    storage,
    whitelist:["AuthSlice"],
}
const persistedReducer= persistReducer(persistConfig, RootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck:false})
})

const persistor = persistStore(store)
export default persistor;