import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Product {//interface veri tiplerinin tanımlandığı yapılardır.
    id:number,
    title:string,
    price:number,
    description:string,
    rating:number,
    image: string
}
interface ProductState{
    products:Product[], //Productlardan oluşan bir arrayden oluşacak.
    selectedProduct: Product | null,//seçili üürn ya product türünde olacak yada boş olacak.
}
//STATE
const initialState:ProductState = {//initialstate için type olarak productState i atadık.
    products:[],
    selectedProduct: null
};


const productSlice = createSlice({
    name:'product',//bu slice a bir isim verdik.
    initialState,//yukarıda tanımladığımı başlangıç durumunu slice içine atadık.
    reducers:{
        //state i değiştiren fonksiyonları(actions) tanımladık.
        //Product dizini güncelleme:
        setProducts (state,action:PayloadAction<Product[]>) {//payload kısmı reducerın bir ürün dizisi beklediğini ifade eder.
            state.products=action.payload;},
        selectProduct (state,action:PayloadAction<Product>) {//payload kısmı reducerın bir ürün beklediğini ifade eder.
        state.selectedProduct=action.payload;},
},
})

export const { setProducts, selectProduct} = productSlice.actions;//fonksiyonlar action olarak dışa aktarılır. Bileşenlerde bunlar çağırılabilir.
export default productSlice.reducer;//bu slice ın reducerını dışar aktarır.

