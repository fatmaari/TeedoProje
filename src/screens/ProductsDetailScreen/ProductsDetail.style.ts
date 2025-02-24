import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
    },
    productDescription: {
        fontSize: 15,
        color: '#353535',
    },
    productImage: {
        
        aspectRatio:16/9
    },
    productTitle:{
        fontWeight:500,
        fontSize:16,
        color:"#003566"
    },
    productPrice:{
            color:'#ffff',
            fontSize:16,
            backgroundColor:'#ff9f1c',
            padding:5,
            borderRadius:10,
    },
    productInfoContainer:{
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center'

    },
    productContainer:{
       borderRadius:10,
       backgroundColor:'#FFFF',
       padding:10,
       rowGap:10,
    }


})
export default styles;