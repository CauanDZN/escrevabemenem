import React, { useContext } from 'react';
import { Image, Button, SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from '../auth/AuthContext';
import logo from '../public/ebe.png';

const Repertoires = ({ navigation }) => {
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

  const repertoires = [
    {
      id: 1,
      name: 'Literatura brasileira',
    },
    {
      id: 2,
      name: 'História do Brasil',
    },
    {
      id: 3,
      name: 'Movimentos sociais',
    },
    // Adicione mais exemplos de repertórios aqui
  ];

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#001B5A', padding: 8 }}>
      <Image source={logo} style={{ height: 100, width: 100 }} />

      <ScrollView style={{ flex: 1, marginTop: 24 }}>
        {repertoires.map((repertoire) => (
          <TouchableOpacity
            key={repertoire.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: 8,
              padding: 16,
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              {repertoire.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Repertoires;
