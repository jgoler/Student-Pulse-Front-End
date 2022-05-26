import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/LandingScreen';
import LogInScreen from './screens/LogInScreen';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function TestLandingScreen({ navigation }) {
  return <LandingScreen />;
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false, gestureEnabled: false }}
          name='LandingScreen'
          component={LandingScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='LogInScreen'
          component={LogInScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
