import React, { useContext, useState } from 'react';
import { TextInput, Text, ActivityIndicator, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native';
import { AuthContext } from '../auth/AuthContext';
import logo from '../public/ebe.png';

const LoginScreen = ({ navigation }) => {
  const { login, loading } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('aluno'); // 'aluno' ou 'professor'

  const handleLogin = async () => {
    const userData = {
      username: username,
      password: password,
      loginType: loginType,
    };

    try {
      await login(userData);
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
        placeholderTextColor="gray" // Defina a cor do placeholder aqui
        value={username}
        onChangeText={setUsername}
        className="w-full h-14 border-white border-2 rounded-md text-white px-4 mt-4"
      />
      <TextInput
        placeholder="Senha"
        placeholderTextColor="gray" // Defina a cor do placeholder aqui
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        className="w-full h-14 border-white border-2 rounded-md text-white px-4 mt-4"
      />

      {/* Seletor de tipo de login */}
      
      <TouchableOpacity
        onPress={() => setLoginType('aluno')} 
        className={`w-full mt-8 h-10 rounded-md items-center justify-center ${loginType === 'aluno' ? 'bg-blue-500' : 'bg-blue-200'}`}
      >
        <Text className={`${loginType === 'aluno' ? 'text-white' : 'text-blue-900'} font-bold`}>
          Aluno
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setLoginType('professor')} 
        className={`w-full mt-2 h-10 rounded-md items-center justify-center ${loginType === 'professor' ? 'bg-blue-500' : 'bg-blue-200'}`}
      >
        <Text className={`${loginType === 'professor' ? 'text-white' : 'text-blue-900'} font-bold`}>
          Professor
        </Text>
      </TouchableOpacity>

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
