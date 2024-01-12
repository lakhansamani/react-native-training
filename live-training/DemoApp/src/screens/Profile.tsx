import { View, Text, Button } from 'react-native';
import { ProfileProps, RouteProps } from '../constants/views';

const Profile = (props: RouteProps) => {
  const params: ProfileProps = props.route?.params as ProfileProps;

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
        Profile {params.user_id}
        <Button
          title="Go Back"
          onPress={() => {
            props.navigation.pop();
          }}
        />
      </Text>
    </View>
  );
};

export default Profile;
