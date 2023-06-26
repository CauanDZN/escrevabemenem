import React, { useContext } from 'react';
import { Image, Button, SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from '../auth/AuthContext';
import logo from '../public/ebe.png';
import { connectives } from '../utils/connectives';

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

  const introducaoConnectives = connectives.slice(0, 12);
  const desenvolvimento1Connectives = connectives.slice(12, 23);
  const desenvolvimento2Connectives = connectives.slice(23, 34);
  const conclusaoConnectives = connectives.slice(34, 49);
  const enfaseConnectives = connectives.slice(68, 74);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#001B5A', padding: 8 }}>
      <Image source={logo} style={{ height: 100, width: 100 }} />

      <ScrollView style={{ flex: 1, marginTop: 24 }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>Introdução</Text>
        {introducaoConnectives.map((connective) => (
          <TouchableOpacity
            key={connective.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: 8,
              padding: 16,
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 16 }}>{connective.name}</Text>
          </TouchableOpacity>
        ))}

        <Text style={{ marginTop: 30, color: 'white', fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Desenvolvimento 1</Text>
        {desenvolvimento1Connectives.map((connective) => (
          <TouchableOpacity
            key={connective.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: 8,
              padding: 16,
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 16 }}>{connective.name}</Text>
          </TouchableOpacity>
        ))}

        <Text style={{ marginTop: 30, color: 'white', fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Desenvolvimento 2</Text>
        {desenvolvimento2Connectives.map((connective) => (
          <TouchableOpacity
            key={connective.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: 8,
              padding: 16,
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 16 }}>{connective.name}</Text>
          </TouchableOpacity>
        ))}

        <Text style={{ marginTop: 30, color: 'white', fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Conclusão</Text>
        {conclusaoConnectives.map((connective) => (
          <TouchableOpacity
            key={connective.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: 8,
              padding: 16,
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 16 }}>{connective.name}</Text>
          </TouchableOpacity>
        ))}

        <Text style={{ marginTop: 30, color: 'white', fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Para afirmar, dar ênfase</Text>
        {enfaseConnectives.map((connective) => (
          <TouchableOpacity
            key={connective.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: 8,
              padding: 16,
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 16 }}>{connective.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Connectives;
