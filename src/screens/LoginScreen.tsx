import React, { useContext, useState } from 'react';
import { TextInput, Text, ActivityIndicator, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native';
import { AuthContext } from '../auth/AuthContext';
import logo from '../public/ebe.png';

const LoginScreen = ({ navigation }) => {
  const { login, loading } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const userData = {
      username: username,
      password: password,
    };

    try {
      await login(userData);
      console.log()
      // Navegar para a tela de HomeScreen após o login
      // (verifique se a rota está configurada corretamente)
    } catch (error) {
      console.log(error);
      // Lidar com erros durante o login
    }
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-blue-950 p-8">
      <Image source={logo} className='h-24 w-24'/>
      {/* Campos de entrada do login */}
      <TextInput
        placeholder="Nome"
        value={username}
        onChangeText={setUsername}
        className="w-full h-14 border-white border-2 rounded-md text-white px-4 mt-4"
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        className="w-full h-14 border-white border-2 rounded-md text-white px-4 mt-4"
      />

      <TouchableOpacity
        onPress={handleLogin} 
        className="w-full mt-8 h-14 bg-blue-500 rounded-md items-center justify-center"
      >
        <Text className="text-white font-bold">
          Login
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;