import { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AuthContext } from '../context/auth';
import { Login } from '../screens/Login';
import { Routes } from '../types/router';
import { AddInvoice } from '../screens/AddInvoice';
import { Profile } from '../screens/Profile';
import { HomeStack } from './HomeStack';

const Tab = createBottomTabNavigator<Routes>();

export const Tabs = () => {
  const { authData } = useContext(AuthContext);
  if (!authData.token) {
    return <Login />;
  }

  return (
    <>
      <Tab.Navigator initialRouteName="HomeStack">
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            title: 'Home',
            unmountOnBlur: true,
          }}
        />
        <Tab.Screen
          name="AddInvoice"
          component={AddInvoice}
          options={{
            tabBarLabel: 'Add Invoice',
            title: 'Add Invoice',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
          }}
        />
      </Tab.Navigator>
    </>
  );
};
