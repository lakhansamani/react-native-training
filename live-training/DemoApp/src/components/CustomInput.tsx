import { useState } from 'react';
import { TextInput, View, Text, TextInputProps } from 'react-native';

interface CustomInputProps extends TextInputProps {
  value: string;
  placeholder: string;
  label: string;
  onDataChange: (data: string) => void;
  onValidate?: (data: string) => string;
}

const CustomInput = (props: CustomInputProps) => {
  const [error, setError] = useState('');

  const handleInputChange = (text: string) => {
    if (props.onValidate) {
      const err = props.onValidate(text);
      if (err.trim()) {
        setError(err);
        return;
      }
      setError('');
    }
    props.onDataChange(text);
  };

  return (
    <View>
      <Text>{props.label}</Text>
      <TextInput onChangeText={handleInputChange} {...props} />
      {error && <Text>{error}</Text>}
    </View>
  );
};

export default CustomInput;
