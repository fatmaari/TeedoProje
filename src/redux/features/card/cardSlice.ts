import { createSlice,PayloadAction } from "@reduxjs/toolkit"

interface CardItem {
    id:number,
    title:string,
    price:number,
    image:string,
    quantity:number
}
interface CardState {
    items:CardItem[],
    totalQuantity:number,
    totalPrice:number
}
const initialState:CardState = {
    items:[],
    totalQuantity:0,
    totalPrice:0
}
const cardSlice = createSlice({
name:'card',
initialState,
reducers: {
    addToCard: (state, action:PayloadAction<CardItem>)=>{
        const existingItem= state.items.find(item=>item.id==action.payload.id);//sepetimde yeni eklediğim ürün var mı yokmu onu kontrol ediyorum.
        if(existingItem){
            existingItem.quantity +=action.payload.quantity//mevcut ürünün quantity si üzerine action payloaddan gelen quantity eklendi.
        }else{
            state.items.push(action.payload)
        }
        state.totalPrice += action.payload.price * action.payload.quantity;
        state.totalQuantity += action.payload.quantity;

    },
    //Bu fonksiyon, iki parametre alır. 1)state: Sepetin mevcut durumu (içindeki ürünler, toplam fiyat, toplam adet vs.) 
    //2)action:PayloadAction<{id:number; change:number}> ====> güncellenecek ürünün ıd si ve kaç adet değişeceği
    updateQuantity:( state, action:PayloadAction<{id:number; change:number}>)=>{

        const existingItem= state.items.find(item=>item.id==action.payload.id)//state.items içindeki ürünleri tek tek dolaşarak güncellenmesi gereken ID'ye sahip olanı buluyor.

        if(existingItem) {

            existingItem.quantity +=action.payload.change;

            if(existingItem.quantity <=0 ){//Eğer quantity sıfırın altına düşerse,
                state.items =state.items.filter(item=>item.id!==action.payload.id)//ürün sepetten tamamen kaldırılır.
                //filter() fonksiyonu, bu ürünü hariç tutarak yeni bir liste oluşturur.
            }else{
                state.totalQuantity += action.payload.change;
                state.totalPrice += existingItem.price * action.payload.change;
            }
        }
    },
    //Bu fonksiyon iki parametre alıyor 1)state → Mevcut sepet durumu (içinde ürünler, toplam fiyat, toplam adet vs. var)
    //2)action.payload → Silinecek ürünün ID’si (bu ID’yi kullanarak ilgili ürünü bulacağız)
    removeFromCard:( state, action:PayloadAction<number>)=>{

        const itemIndex= state.items.findIndex(item=>item.id==action.payload)//Sepet içindeki (state.items) ürünler tek tek kontrol edilir.
        //Eğer id’si action.payload’a eşit olan bir ürün bulunursa, o ürünün dizideki (array içindeki) sırası itemIndex olarak kaydedilir.
        //Eğer ürün bulunamazsa, findIndex() -1 döndürür.

        if (itemIndex !== -1) {
            state.totalQuantity -= state.items[itemIndex].quantity;
            state.totalPrice -= state.items[itemIndex].price * state.items[itemIndex].quantity;
            state.items.splice(itemIndex, 1); //splice() fonksiyonu kullanılarak bulunan ürün diziden (sepetteki items listesinden) tamamen çıkarılır.
            //Artık o ürün sepette görünmez ve hiç eklenmemiş gibi olur.
          }
    },
    clearCard: state=>{
        state.items=[],
        state.totalPrice=0,
        state.totalQuantity=0
    }

}
})
export const {addToCard,updateQuantity,removeFromCard,clearCard} =cardSlice.actions;
export default cardSlice.reducer;