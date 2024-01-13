import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { AuthProvider } from './src/context/auth-context';
import { Router } from './src/components/Router';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </GluestackUIProvider>
  );
}
