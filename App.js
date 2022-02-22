import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { FontAwesome ,FontAwesome5 } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

import TelaInicial  from './componentes/TelaInicial';
import TelaContato from './componentes/TelaContato';
import TelaCatalogo from './componentes/TelaCatalogo';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
            headerTitleAlign:'center',
            headerStyle:{
              backgroundColor:'#680707',
              height:75
            },
            headerTitleStyle:{
              color:'white',
              fontWeight:'bold'
            },
            tabBarStyle:{
              height:55,
            },
            tabBarLabelStyle:{
              fontSize:15,
              fontWeight:'bold'
            },
            tabBarActiveTintColor:'#fff',
            tabBarInactiveTintColor:'#680707',
            tabBarActiveBackgroundColor:'#680707'
        }}
      >
        <Tabs.Screen 
        name="Início" 
        component={TelaInicial}
        options={{
          tabBarIcon:({color})=>(
            <FontAwesome name="home" size={30} color={color} />
          )
        }}
        />
        <Tabs.Screen 
        name="Catalogo" 
        component={TelaCatalogo}
        options={{
          tabBarIcon:({color})=>(
            <FontAwesome5 name="wine-bottle" size={30} color={color} />
          )
        }}
        />
        <Tabs.Screen 
        name="Contato" 
        component={TelaContato}
        options={{
          tabBarIcon:({color})=>(
            <FontAwesome name="address-book" size={30} color={color} />
          )
        }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

