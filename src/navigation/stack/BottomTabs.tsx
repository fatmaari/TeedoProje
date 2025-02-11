import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import Products from "_screens/ProductsScreen/Products";
import Profile from "_screens/ProfileScreen/Profile";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabs= ()=>{
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
          }else if (route.name === 'Profil') {
          iconName ='person-outline' ;
          }
          return renderTabIcon(iconName,focused);
        },
        
      })}>
        <Tab.Screen options={{title:'Ürünler'}}name="Products" component={Products} />
        <Tab.Screen name="Profil" component={Profile} />
      </Tab.Navigator>
    );
  }
  export default BottomTabs;
  
  
  