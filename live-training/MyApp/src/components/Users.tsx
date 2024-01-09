import { ActivityIndicator, FlatList, Text, TextInput } from 'react-native';
import { useFetch } from '../hooks/fetch';
import { User } from '../types/user';
import { useState } from 'react';

export function Users() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data, error, loading, filteredData } = useFetch<User>(
    {
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'GET',
    },
    searchTerm
  );

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <TextInput
        onChangeText={(text) => {
          setSearchTerm(text);
        }}
        placeholder="Search for a user"
        style={{ borderWidth: 1, borderColor: 'black', padding: 10 }}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </>
  );
}
