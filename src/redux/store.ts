import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key:'root',
    storage: AsyncStorage,
    whiteList:['auth','card'], 
}

const persistedReducer = persistReducer (persistConfig, rootReducer)
export const store = configureStore({
reducer:persistedReducer,

middleware: getDefaultMiddleware =>//varsayılan middleware kullanıldı.
    getDefaultMiddleware({
      serializableCheck: false,//Serileştirme hatalarını önlemek için serializableCheck: false yapılıyor.
    })

});
export const persistor = persistStore(store);//Redux store'unu alır ve persist edilen (kalıcı) bir store oluşturur.
export type RootState = ReturnType<typeof store.getState>;//store.getState() çağrıldığında, Redux store'unun tüm state’ini döndürür.
//ReturnType<typeof store.getState> → store.getState() fonksiyonunun döndürdüğü tipi otomatik olarak çıkarır.
//RootState, tüm state yapısını temsil eden bir tip tanımıdır.
export type AppDispatch = typeof store.dispatch;//store.dispatch fonksiyonunun tipini alır.
//AppDispatch, Redux’ta aksiyonları dispatch etmek için kullanılabilecek özel bir tip olur.
