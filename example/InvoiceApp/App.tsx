import { NavigationContainer } from '@react-navigation/native';
import { GluestackUIProvider, VStack, Box } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import { AuthProvider } from './src/context/auth';
import { Tabs } from './src/routes/Tabs';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <AuthProvider>
          <Tabs />
        </AuthProvider>
      </GluestackUIProvider>
    </NavigationContainer>
  );
}
