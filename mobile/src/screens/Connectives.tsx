import React, { useContext } from 'react';
import { Image, Button, SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from '../auth/AuthContext';
import logo from '../public/ebe.png';

const Connectives = ({ navigation }) => {
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

  const connectives = [
    {
      id: 1,
      name: 'Além disso',
    },
    {
      id: 2,
      name: 'Por outro lado',
    },
    {
      id: 3,
      name: 'De acordo com',
    },
    // Adicione mais exemplos de conectivos aqui
  ];

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#001B5A', padding: 8 }}>
      <Image source={logo} style={{ height: 100, width: 100 }} />

      <ScrollView style={{ flex: 1, marginTop: 24 }}>
        {connectives.map((connective) => (
          <TouchableOpacity
            key={connective.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: 8,
              padding: 16,
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              {connective.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Connectives;
