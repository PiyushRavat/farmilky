import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
//LoggedIn
import HomeScreen from '../Screens/Home';
import ProductDetails from '../Screens/ProductDetails';
import CartDetails from '../Screens/CartDetails';
import Support from '../Screens/Support'
import FAQ from '../Screens/FAQ'


import Drawer from '../Screens/Drawer';

const ScreenStack = createStackNavigator({
    Home: HomeScreen,
    ProductDetailsScreen: ProductDetails,
    CartDetailsScreen: CartDetails,
    SupportScreen: Support,
    FAQScreen: FAQ,


}, {
    initialRouteName: "Home",
    headerMode: 'none',
})

const DrawerNavigator = createDrawerNavigator({
    Screens: ScreenStack
}, {
    contentComponent: Drawer,
    drawerPosition: 'left',
});

const AppNavigator = createStackNavigator({
    Drawer: DrawerNavigator
}, {
    initialRouteName: 'Drawer',
    headerMode: 'none',
});

export default createAppContainer(AppNavigator);    