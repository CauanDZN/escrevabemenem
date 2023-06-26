import React, { useContext } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../auth/AuthContext';
import { FontAwesome } from '@expo/vector-icons';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import Models from '../screens/Models';
import Repertoires from '../screens/Repertoires';
import Connectives from '../screens/Connectives';
import ConnectiveList from '../screens/ConnectiveList';
import UserScreen from '../screens/UserScreen';
import Materials from '../screens/Materials';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const MaterialsStack = createStackNavigator();
const UserStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    {/* outras telas relacionadas à "Home" */}
  </HomeStack.Navigator>
);

const MaterialsStackScreen = () => (
  <MaterialsStack.Navigator>
    <MaterialsStack.Screen name="Materials" component={Materials} options={{ headerShown: false }} />
    {/* outras telas relacionadas a "Materials" */}
    <MaterialsStack.Screen name="Models" component={Models} options={{ title: 'Exemplos de Redação' }} />
    <MaterialsStack.Screen name="Repertoires" component={Repertoires} options={{ title: 'Repertórios' }} />
    <MaterialsStack.Screen name="Connectives" component={Connectives} options={{ title: 'Conectivos' }} />
    <MaterialsStack.Screen name="ConnectiveList" component={ConnectiveList} options={{ title: 'Lista de Conectivos' }} />
  </MaterialsStack.Navigator>
);

const UserStackScreen = () => (
  <UserStack.Navigator>
    <UserStack.Screen name="User" component={UserScreen} options={{ headerShown: false }} />
    {/* outras telas relacionadas a "User" */}
  </UserStack.Navigator>
);

const Navigation = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Materials') {
                iconName = 'folder';
              } else if (route.name === 'User') {
                iconName = 'user';
              }

              return <FontAwesome name={iconName} size={size} color={color} />;
            },
            tabBarLabel: ({ color, focused }) => {
              let labelName;

              if (route.name === 'Home') {
                labelName = 'Início';
              } else if (route.name === 'Materials') {
                labelName = 'Materiais';
              } else if (route.name === 'User') {
                labelName = 'Usuário';
              }

              return (
                <Text style={{ color, fontSize: 12, fontWeight: focused ? 'bold' : 'normal' }}>
                  {labelName}
                </Text>
              );
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }} />
          <Tab.Screen name="Materials" component={MaterialsStackScreen} options={{ headerShown: false }} />
          <Tab.Screen name="User" component={UserStackScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
