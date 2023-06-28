import React, { useContext, useState } from 'react';
import { Image, Button, SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from '../auth/AuthContext';
import logo from '../public/ebe.png';

const WriteRedacao = ({ navigation, route }) => {
  const { user, logout } = useContext(AuthContext);
  const [redacao, setRedacao] = useState('');

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

  const handleSubmitRedacao = () => {
    // Enviar a redação para o servidor ou executar outras ações necessárias
    console.log('Redação enviada:', redacao);
    // Redirecionar de volta para a tela de seleção de redação
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#001B5A', padding: 8 }}>
      <Image source={logo} style={{ height: 100, width: 100 }} />

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 24, color: 'white' }}>
        {route.params.redacao.title}
      </Text>
      <Text style={{ color: 'white' }}>{route.params.redacao.description}</Text>

      <Text style={{ color: 'white', marginTop: 24 }}>{route.params.redacao.motivator}</Text>

      <TextInput
        style={{ backgroundColor: '#fff', borderRadius: 8, padding: 16, marginTop: 24, marginBottom: 16, width: '100%' }}
        multiline
        placeholder="Escreva sua redação aqui"
        value={redacao}
        onChangeText={setRedacao}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          borderRadius: 8,
          padding: 16,
        }}
        onPress={handleSubmitRedacao}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          Enviar Redação
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default WriteRedacao;
