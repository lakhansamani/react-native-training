import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login';

export const Router = () => {
  const contextData = useContext(AuthContext);

  if (contextData.userData.token) {
    return <Home />;
  }

  return <Login />;
};
