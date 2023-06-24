import React from 'react';
import { AuthProvider } from './src/auth/AuthContext';
import Navigation from './src/routes/Navigation';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
      <StatusBar style="auto" />
    </AuthProvider>
  );
};

export default App;