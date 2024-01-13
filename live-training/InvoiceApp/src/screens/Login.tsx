import {
  Box,
  Button,
  ButtonText,
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  Input,
  InputField,
} from '@gluestack-ui/themed';
import { useContext, useState } from 'react';
import { API } from '../config/api';
import { AuthContext, UserDataInterface } from '../context/auth-context';

interface LoginData {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
}

export const Login = () => {
  const [data, setData] = useState<LoginData>({
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
  });
  const contextData = useContext(AuthContext);

  const handleSubmit = async () => {
    const isEmailValid = data.email && data.email.trim();
    const isPasswordValid = data.password && data.password.trim();

    if (isEmailValid && isPasswordValid) {
      // allow login
      try {
        const res = await fetch(`${API}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: data.email.toLowerCase(),
            password: data.password,
          }),
        });
        const jsonData: UserDataInterface = await res.json();
        console.log(JSON.stringify(jsonData, null, 2));

        contextData.setUserData(jsonData);
      } catch (err) {
        console.log(err);
      }
    } else {
      const updatedValues = { ...data };

      if (!data.email) {
        updatedValues.emailError = 'Email is required';
      } else {
        updatedValues.emailError = '';
      }

      if (!data.password) {
        updatedValues.passwordError = 'Password is requird';
      } else {
        updatedValues.passwordError = '';
      }

      setData(updatedValues);
    }
  };

  return (
    <Box
      w="$full"
      h="$full"
      bg="$coolGray200"
      justifyContent="center"
      alignItems="center"
    >
      <Heading mt="$10">Welcome!</Heading>
      <Heading>Invoicing on your tips</Heading>

      <Box bg="$white" padding="$5" width="$3/4" borderRadius="$md" mt="$5">
        <FormControl isRequired isInvalid={Boolean(data.emailError)}>
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              type="text"
              onChangeText={(email) => {
                setData({
                  ...data,
                  email: email,
                });
              }}
              value={data.email}
              keyboardType="email-address"
              placeholderTextColor="#dfdfdf"
            />
          </Input>
          <FormControlError>
            <FormControlErrorText>{data.emailError}</FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl isRequired isInvalid={Boolean(data.passwordError)}>
          <FormControlLabel mt="$5">
            <FormControlLabelText>Password</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              type="password"
              value={data.password}
              onChangeText={(password) => {
                setData({
                  ...data,
                  password,
                });
              }}
              placeholderTextColor="#dfdfdf"
            />
          </Input>
          <FormControlError>
            <FormControlErrorText>{data.passwordError}</FormControlErrorText>
          </FormControlError>
        </FormControl>

        <Button mt="$10" onPress={handleSubmit}>
          <ButtonText>Login</ButtonText>
        </Button>
      </Box>
    </Box>
  );
};
