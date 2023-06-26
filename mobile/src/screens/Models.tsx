import React, { useContext } from 'react';
import { Image, Button, SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from '../auth/AuthContext';
import logo from '../public/ebe.png';

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

  const redacoes = [
    {
      id: 1,
      titulo: 'Desafios da educação no século XXI',
      texto: 'A educação enfrenta diversos desafios no século XXI, sendo um deles...',
    },
    {
      id: 2,
      titulo: 'Impacto das redes sociais na sociedade',
      texto: 'As redes sociais têm exercido um grande impacto na sociedade contemporânea...',
    },
    {
      id: 3,
      titulo: 'Desigualdade de gênero no mercado de trabalho',
      texto: 'A desigualdade de gênero no mercado de trabalho é um problema persistente...',
    },
    // Adicione mais exemplos de redações aqui
  ];

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
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
              {redacao.titulo}
            </Text>
            <Text>{redacao.texto}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Models;
