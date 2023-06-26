import React, { useContext } from 'react';
import { Image, Button, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import logo from '../public/ebe.png';
import { AuthContext } from '../auth/AuthContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Materials = () => {
  const navigation = useNavigation();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
      // Navegar para a tela de login após o logout
      // (opcional, dependendo do fluxo da sua aplicação)
      // navigation.navigate('Login');
    } catch (error) {
      console.log(error);
      // Lidar com erros durante o logout
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#001B5A', padding: 8 }}>
      <Image source={logo} style={{ height: 100, width: 100 }} />

      <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
        Materiais disponíveis:
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Models')} 
        className="w-full mt-4 h-14 bg-blue-500 rounded-full items-center justify-center"
      >
        <Text className="text-white font-bold">
          Modelos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Repertoires")} 
        className="w-full mt-4 h-14 bg-blue-500 rounded-full items-center justify-center"
      >
        <Text className="text-white font-bold">
          Repertórios
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Connectives")} 
        className="w-full mt-4 h-14 bg-blue-500 rounded-full items-center justify-center"
      >
        <Text className="text-white font-bold">
          Conectivos
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Materials;
