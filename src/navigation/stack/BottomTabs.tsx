import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import Products from "_screens/ProductsScreen/Products";
import Profile from "_screens/ProfileScreen/Profile";
import Card from "_screens/CardScreen/Card";
import { Platform } from "react-native";
import { useSelector } from "react-redux";
import { selectCardTotalQuantity } from "src/redux/features/card/cardSelector";

const Tab = createBottomTabNavigator();

const BottomTabs= ()=>{
  const totolQantity =useSelector(selectCardTotalQuantity)
    const renderTabIcon = (
      iconName: React.ComponentProps<typeof Ionicons>['name'],
      focused: boolean
    ) => {
      return <Ionicons name={iconName} size={24} color={focused ? 'black' : 'gray'} />;
    };
  
    return (
      <Tab.Navigator initialRouteName='Products'
      screenOptions={({route})=>({
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 75 : 60,
        },
       
        tabBarIcon: ({ focused }) => {
          let iconName:React.ComponentProps<typeof Ionicons>['name'] = 'home-outline'; 
  
          if (route.name === 'Products') {
            iconName = 'home-outline';
          }else if(route.name === 'Card'){
            iconName = 'cart-outline';
          }else if (route.name === 'Profil') {
          iconName ='person-outline' ;
          }
          return renderTabIcon(iconName,focused);
        },
        
      })}>
        <Tab.Screen options={{tabBarLabel:'Ürünlerim', headerTitle:'Ürünler'}}name="Products" component={Products} /> 
        <Tab.Screen options={{
          tabBarLabel: 'Sepetim',
          tabBarBadge:totolQantity,
          headerTitle: 'Sepetim',}}name="Card" component={Card} />
        <Tab.Screen options={{tabBarLabel:'Profil', headerTitle:'Profil'}} name="Profil" component={Profile} />
      </Tab.Navigator>
    );
  }
  export default BottomTabs;
  
  
  