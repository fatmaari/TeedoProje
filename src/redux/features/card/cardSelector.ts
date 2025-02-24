import { RootState } from "src/redux/store";


export const selectCardItems = (state: RootState) => state.card.items;
export const selectCardTotalPrice = (state: RootState) => state.card.totalPrice;
export const selectCardTotalQuantity = (state: RootState) =>
  state.card.items.reduce((total, item) => total + item.quantity, 0);