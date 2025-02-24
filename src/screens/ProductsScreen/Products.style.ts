import { StyleSheet,Platform } from "react-native";

const styles =  StyleSheet.create({
    container:{
        flex:1,
        rowGap:20,
        backgroundColor:"#D7D6D2"

    },
    productContainer:{
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        rowGap: 10,
        flex:1
    },
    productImage: {
        
        aspectRatio:16/9
    },
    productPrice:{
        color:'#ffff',
        fontSize:14,
        backgroundColor:'#ff9f1c',
        padding:5,
        borderRadius:10,
    },
    productTitle:{
        fontWeight:500,
        fontSize:16,
        color:"#003566"
    },
   
    productRatingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 8,
      },
      productRating: {
        fontSize: 14,
        color: Platform.OS === 'ios' ? '#ff9f1c' : '#ff4365',
      },
      productBottomInfoContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      columnWrapperStyle: {
        justifyContent: 'space-between',
        columnGap: 10,
      },
      addToCard: {
        flex:1,
        justifyContent:'center',
        backgroundColor: '#ff9f1c',
        borderRadius:10,
        padding:5
        }
})
export default styles