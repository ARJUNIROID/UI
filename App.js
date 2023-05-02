import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
           
import Swiper from "./Components/Swiper/Swiper";
import Home from "./Components/Screens/Home";
import Category from "./Components/Screens/Category";
import MyCart from "./Components/Screens/MyCart";
import Profile from "./Components/Screens/Profile";
import ProductCardScreen from "./Components/Screens/ProductCardScreen"


const stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function Mystack() {
    return (  
        <stack.Navigator>
            <stack.Screen
                name='Swiper'
                component={Swiper}
                options={{ headerShown: false }}
            />
            <stack.Screen
                name="MyBottom"
                component={MyBottom}
                options={{ headerShown: false }}
            />
            <stack.Screen
            name="ProductCardScreen"
            component={ProductCardScreen}
            options={{ headerShown: false}}
            />
        </stack.Navigator>
    )
}


function MyBottom() {
    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12 },
                tabBarItemStyle: { width: 100 },
                tabBarStyle: { backgroundColor: "#000" }
            }}>
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarActiveTintColor: "#0CC92B",
                    tabBarInactiveTintColor: "#828282",
                    tabBarIcon: ({ focused }) =>
                        focused ? <Icon name="home" size={24} color="#0CC92B" /> : <Icon name="home" size={24} color="#fff" />
                }} />
            <BottomTab.Screen
                name="Category"
                component={Category}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: "#0CC92B",
                    tabBarInactiveTintColor: "#828282",
                    tabBarIcon: ({ focused }) =>
                        focused ? <Icon name="grid-view" size={24} color="#0CC92B" /> : <Icon name="grid-view" size={24} color="#fff" />
                }} />
            <BottomTab.Screen
                name="MyCart"
                component={MyCart}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: "#0CC92B",
                    tabBarInactiveTintColor: "#828282",
                    tabBarIcon: ({ focused }) =>
                        focused ? <Icon name="shopping-cart" size={24} color="#0CC92B" /> : <Icon name="shopping-cart" size={24} color="#fff" />
                }} />
            <BottomTab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: "#0CC92B",
                    tabBarInactiveTintColor: "#828282",
                    tabBarIcon: ({ focused }) =>
                        focused ? <Icon name="person" size={24} color="#0CC92B" /> : <Icon name="person" size={24} color="#fff" />
                }} />
        </BottomTab.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <Mystack />
        </NavigationContainer>
    )
}
