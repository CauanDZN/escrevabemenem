import React, { useContext } from 'react';
import { Image, Button, SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from '../auth/AuthContext';
import logo from '../public/ebe.png';
import { redacoes } from '../utils/themes';

const Models = ({ navigation }) => {
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

  const handleRedacaoSelection = (redacao) => {
    // Redirecionar para a tela de escrita de redação
    navigation.navigate('WriteRedacao', { redacao });
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#001B5A', padding: 8 }}>
      <Image source={logo} style={{ height: 100, width: 100 }} />

      <ScrollView style={{ flex: 1, marginTop: 24 }}>
        {redacoes.map((redacao) => (
          <TouchableOpacity
            key={redacao.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: 8,
              padding: 16,
              marginBottom: 16,
            }}
            onPress={() => handleRedacaoSelection(redacao)}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
              {redacao.title}
            </Text>
            <Text>{redacao.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Models;
