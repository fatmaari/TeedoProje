import { combineReducers } from "@reduxjs/toolkit"
import productReducer from './features/product/productSlice';
import cardReducer from './features/card/cardSlice'


const rootReducer = combineReducers({
  product: productReducer,
  card: cardReducer,
  
})

export default rootReducer