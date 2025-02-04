import { StyleSheet } from "react-native";

const styles =  StyleSheet.create({
    container:{
        padding:20,
        rowGap:20,
        backgroundColor:"#D7D6D2"

    },
    card:{
   
    },
    productImage: {
        width:'100%',
        objectFit:'contain',
        aspectRatio:16/9
    },
    productPrice:{
        color: "#000",
        fontSize:18,

    },
    productTitle:{
        fontWeight:500,
        fontSize:25,
        color:"#333"
    },
})
export default styles