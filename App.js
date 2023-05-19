import React from 'react';
import { AuthProvider } from './src/auth/AuthContext';
import Navigation from './src/routes/Navigation';

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;