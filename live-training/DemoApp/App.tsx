import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Tab from './src/components/Tab';
import { views } from './src/constants/views';

export default function App() {
  const [currentView, setCurrentView] = useState<string | undefined>();
  return (
    <View style={styles.container}>
      <Tab
        tabItems={views}
        currentTabItem={currentView}
        onChange={setCurrentView}
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
