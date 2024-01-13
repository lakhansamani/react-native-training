import { Heading, Box, Text } from '@gluestack-ui/themed';
import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';

export const Home = () => {
  const { userData } = useContext(AuthContext);

  return (
    <Box
      w="$full"
      h="$full"
      bg="$coolGray200"
      justifyContent="center"
      alignItems="center"
    >
      <Heading>Home</Heading>
      <Text>{userData.email}</Text>
    </Box>
  );
};
