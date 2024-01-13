import { FC, ReactNode, createContext, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Box, Spinner } from '@gluestack-ui/themed';

export interface UserDataInterface {
  token: string;
  email: string;
  id: string;
}

export interface AuthContextInterface {
  userData: UserDataInterface;
  setUserData: (data: UserDataInterface) => void;
}

export const AuthContext = createContext<AuthContextInterface>({
  userData: {
    token: '',
    email: '',
    id: '',
  },
  setUserData: (data) => {},
});

export const AuthProvider: FC<{
  children: ReactNode;
}> = (props) => {
  const [userData, setUserData] = useState<UserDataInterface>({
    token: '',
    email: '',
    id: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isComponentMounted = true;

    async function getDataFromStore() {
      const token = await SecureStore.getItemAsync('token');
      const email = await SecureStore.getItemAsync('email');
      const id = await SecureStore.getItemAsync('id');

      if (isComponentMounted) {
        setUserData({
          token: token || '',
          email: email || '',
          id: id || '',
        });
        setLoading(false);
      }
    }

    getDataFromStore();

    return () => {
      isComponentMounted = false;
    };
  }, []);

  const handleSetUserData = async (data: UserDataInterface) => {
    await SecureStore.setItemAsync('token', data.token);
    await SecureStore.setItemAsync('email', data.email);
    await SecureStore.setItemAsync('id', data.id);
    setUserData(data);
  };

  if (loading) {
    return (
      <Box h="100%" w="100%" justifyContent="center" alignItems="center">
        <Spinner />
      </Box>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData: handleSetUserData,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
