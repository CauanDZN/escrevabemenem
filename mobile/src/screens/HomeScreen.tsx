import React, { useContext } from 'react';
import { Image, Button, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../auth/AuthContext';
import logo from '../public/ebe.png';

const HomeScreen = ({ navigation }) => {
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
      <Image source={logo} className='h-24 w-24'/>

      <Text className="text-2xl font-bold text-white">
        Bem-vindo(a)!
      </Text>
      
      <TouchableOpacity
        onPress={handleLogout} 
        className="w-full mt-12 h-14 bg-red-500 rounded-full items-center justify-center"
      >
        <Text className="text-white font-bold">
          Sair do Aplicativo
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreen