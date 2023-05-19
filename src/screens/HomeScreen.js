import React, { useContext } from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { AuthContext } from '../auth/AuthContext';

const HomeScreen = () => {
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
    <SafeAreaView>
      <Text>Bem-vindo(a)!</Text>
      {/* Botão de logout */}
      <Button title="Logout" onPress={handleLogout} />
    </SafeAreaView>
  );
}

export default HomeScreen