import React, { useContext } from 'react';
import { Image, Button, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import logo from '../public/ebe.png';
import { AuthContext } from '../auth/AuthContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Materials = () => {
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

      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>
        Bem-vindo(a)!
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Models")}
        style={{ width: '100%', marginTop: 16, height: 40, backgroundColor: '#0E45A0', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Modelos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Repertoires")}
        style={{ width: '100%', marginTop: 16, height: 40, backgroundColor: '#0E45A0', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Repertórios
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Connectives")}
        style={{ width: '100%', marginTop: 16, height: 40, backgroundColor: '#0E45A0', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Conectivos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleLogout}
        style={{ width: '100%', marginTop: 24, height: 40, backgroundColor: '#FF0000', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Sair do Aplicativo
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Materials;
