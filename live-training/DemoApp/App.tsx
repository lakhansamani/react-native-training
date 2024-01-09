import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Tab from './src/components/Tab';
import { views } from './src/constants/views';
import CustomInput from './src/components/CustomInput';

export default function App() {
  const [currentView, setCurrentView] = useState<string | undefined>();
  const [email, setEmail] = useState('');

  const validateEmail = (data: string): string => {
    // regex validation and send error string
    if (!data.trim()) {
      return 'Email is required';
    }
    return '';
  };

  return (
    <View style={styles.container}>
      <Tab
        tabItems={views}
        currentTabItem={currentView}
        onChange={setCurrentView}
      />
      <CustomInput
        label="Email Address"
        placeholder="Enter email"
        value={email}
        onDataChange={setEmail}
        onValidate={validateEmail}
      />
      {currentView === 'Home' && <Home />}
      {currentView === 'Profile' && <Profile />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
