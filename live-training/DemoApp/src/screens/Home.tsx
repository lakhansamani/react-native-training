import { View, Text, Button } from 'react-native';
import { RouteProps } from '../constants/views';

const Home = (props: RouteProps) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 300,
        }}
      >
        Home
      </Text>
      <Button
        title="Go to Profile"
        onPress={() => {
          props.navigation.navigate('Profile', {
            user_id: '1',
          });
        }}
      />
    </View>
  );
};

export default Home;
