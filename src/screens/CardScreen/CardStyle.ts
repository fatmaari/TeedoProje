import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
 
  productContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    rowGap: 10,
    columnGap:10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  productImage:{
    width: 100,
    height:100,
    borderRadius: 10,
  },
  productInfoContainer:{
    rowGap:10

  },
  addToCard:{
    flex:1,
    justifyContent:'center',
    backgroundColor: '#ff9f1c',
    borderRadius:10,
    padding:5
  },
    addButtonContainer:{
    flexDirection:'row',
    justifyContent:'center',
    columnGap:10
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    columnGap:5
  },
  button:{
    backgroundColor: '#ff9f1c',
    borderRadius:5,
    padding:5
  },
  iconStyle:{
    color: '#fff',
    padding:3
  },
  listEmptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  listHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },


  
});

export default styles;