import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../auth/AuthContext'
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import Models from '../screens/Models';
import Repertoires from '../screens/Repertoires';
import Connectives from '../screens/Connectives';
import ConnectiveList from '../screens/ConnectiveList';

const Stack = createStackNavigator();

const Navigation = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          // Se o usuário estiver autenticado, exibir a rota da HomeScreen
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Models" component={Models} />
            <Stack.Screen name="Repertoires" component={Repertoires} />
            <Stack.Screen name="Connectives" component={Connectives} />
            <Stack.Screen name="ConnectiveList" component={ConnectiveList} />
          </>
        ) : (
          // Caso contrário, exibir a rota de autenticação (Login e Signup)
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;