import { NativeStackScreenProps } from '@react-navigation/native-stack';

export interface ProfileProps {
  user_id: string;
}

export type HomeScreenRoutes = {
  Home: undefined;
  Profile: ProfileProps;
};

export interface RouteProps extends NativeStackScreenProps<HomeScreenRoutes> {}
