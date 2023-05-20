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

      <Text className="text-2xl font-bold">
        Bem-vindo(a)!
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Models")} 
        className="w-full mt-4 h-14 bg-blue-500 rounded-md items-center justify-center"
      >
        <Text className="text-white font-bold">
          Modelos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Repertoires")} 
        className="w-full mt-4 h-14 bg-blue-500 rounded-md items-center justify-center"
      >
        <Text className="text-white font-bold">
          Repertórios
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Connectives")} 
        className="w-full mt-4 h-14 bg-blue-500 rounded-md items-center justify-center"
      >
        <Text className="text-white font-bold">
          Conectivos
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={handleLogout} 
        className="w-full mt-12 h-14 bg-red-500 rounded-md items-center justify-center"
      >
        <Text className="text-white font-bold">
          Sair do Aplicativo
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreen