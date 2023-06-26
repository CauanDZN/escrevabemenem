import React, { useContext } from 'react';
import { Image, Button, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../auth/AuthContext';
import { FontAwesome } from '@expo/vector-icons';
import logo from '../public/ebe.png';

const UserScreen = ({ navigation }) => {
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
    <SafeAreaView className="flex-1 items-center justify-center bg-blue-950 p-8">
      <FontAwesome name="user" size={120} color="white" />

      <Text style={{ marginTop: 16, fontSize: 24, fontWeight: 'bold', color: 'white' }}>
        Usuário
      </Text>

      <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>
        email@gmail.com
      </Text>

      <TouchableOpacity
        onPress={handleLogout} 
        style={{ marginTop: 48, width: '100%', height: 50, backgroundColor: 'red', borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Sair do Aplicativo
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default UserScreen;
