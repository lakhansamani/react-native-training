import { Spinner } from '@gluestack-ui/themed';
import { createContext, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

interface AuthData {
  token: string;
  email: string;
  id: string;
}
export const AuthContext = createContext({
  authData: {
    token: '',
    email: '',
    id: '',
  },
  setAuthData: (authData: AuthData) => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authData, setAuthData] = useState<AuthData>({
    token: '',
    email: '',
    id: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isComponentMounted = true;
    const getAuthData = async () => {
      const token = await SecureStore.getItemAsync('token');
      const email = await SecureStore.getItemAsync('email');
      const id = await SecureStore.getItemAsync('id');
      if (!isComponentMounted) {
        return;
      }
      setAuthData({
        token: token || '',
        email: email || '',
        id: id || '',
      });
      setLoading(false);
    };
    getAuthData();

    return () => {
      isComponentMounted = false;
    };
  }, []);

  const handleSetAuthData = async (authData: AuthData) => {
    await SecureStore.setItemAsync('token', authData.token);
    await SecureStore.setItemAsync('email', authData.email);
    await SecureStore.setItemAsync('id', authData.id);
    setAuthData(authData);
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <AuthContext.Provider
      value={{
        authData,
        setAuthData: handleSetAuthData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
