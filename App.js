import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function FriendDetailsScreen({ navigation, route }) {
  const { friendName, justification, imitation } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{friendName}</Text>
      <Text>{justification}</Text>
      <Text>Imitação desejada: {imitation}</Text>
      <Button title="Voltar para a tela anterior" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Escolha seus amigos' }}
        />
        <Stack.Screen
          name="FriendDetails1"
          component={FriendDetailsScreen}
          options={{ title: 'Detalhes do Amigo 1' }}
        />
        <Stack.Screen
          name="FriendDetails2"
          component={FriendDetailsScreen}
          options={{ title: 'Detalhes do Amigo 2' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Selecione um amigo para ver os detalhes:</Text>
      <Button
        title="Thiago"
        onPress={() =>
          navigation.navigate('FriendDetails1', {
            friendName: 'Thiago',
            justification: 'Esse cara aqui é maneiro, o melhor dessa sala, confio muito nele pois ele me trata bem (na medida do possível), age igual gente (99% do tempo) e tem personalidade (uma legal, ainda).',
            imitation: 'Vanderlei Luxemburgo'
          })
        }
      />
      <Button
        title="Heloísa"
        onPress={() =>
          navigation.navigate('FriendDetails2', {
            friendName: 'Heloísa',
            justification: 'Confio pois ela me ajuda nos momentos ruins igual o Thiago e também me proporciona momentos bons, amo os nossos interesses compartilhados também.',
            imitation: 'Laura do Carrossel'
          })
        }
      />
    </View>
  );
}

export default App;