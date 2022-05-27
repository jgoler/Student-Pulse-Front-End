import { StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import {
  useFonts,
  Quicksand_700Bold,
  Quicksand_600SemiBold
} from '@expo-google-fonts/quicksand';

const LandingScreen = props => {
  let [fontsLoaded] = useFonts({
    Quicksand_700Bold
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={
          (['rgba(0,0,0,0)', 'transparent'], ['rgba(0,0,0,0)', 'transparent'])
        }
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 300
        }}
      />
      <Icon name='pulse-sharp' size={120} color='white' />
      <Text style={styles.title}>Student Pulse</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#73b4a8'
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Quicksand_700Bold'
  }
});

export default LandingScreen;
