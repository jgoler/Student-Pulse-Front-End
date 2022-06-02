import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  useFonts,
  Quicksand_700Bold,
  Quicksand_600SemiBold,
  Quicksand_400Regular
} from '@expo-google-fonts/quicksand';
import google_logo from '../assets/google_logo.png';
import facebook_logo from '../assets/facebook_logo.jpeg';
import twitter_logo from '../assets/twitter_logo.png';

const LogInScreen = props => {
  let [fontsLoaded] = useFonts({
    Quicksand_600SemiBold
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
      <View style={styles.header}>
        <View style={styles.IconContainer}>
          <Icon name='pulse-sharp' size={80} color='white' />
        </View>
        <Text style={styles.title}>Student Pulse</Text>
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          placeholder='Email Address'
          placeholderTextColor='rgba(255, 255, 255, 0.7)'
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder='Password'
          placeholderTextColor='rgba(255, 255, 255, 0.7)'
        ></TextInput>
        <View style={styles.button}>
          <Button title='Sign in' color='black' />
        </View>
        <View>
          <Text style={styles.otherOptionsIndicator}>Or sign in with</Text>
        </View>
        <View style={styles.otherOptions}>
          <View style={styles.option}>
            <Image style={styles.googleLogo} source={google_logo} />
          </View>
          <View style={styles.option}>
            <Image style={styles.facebookLogo} source={facebook_logo} />
          </View>
          <View style={styles.option}>
            <Image style={styles.twitterLogo} source={twitter_logo} />
          </View>
        </View>
      </View>
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
    fontSize: 30,
    fontFamily: 'Quicksand_600SemiBold'
  },
  IconContainer: {
    alignItems: 'center'
  },
  header: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    flex: 2.5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, .4)',
    height: 60,
    paddingHorizontal: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: 'white',
    marginTop: 0.2
  },
  button: {
    marginTop: '15%',
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: 'white',
    marginBottom: '10%'
  },
  otherOptionsIndicator: {
    fontSize: 12,
    fontFamily: 'Quicksand_400Regular'
  },
  otherOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    height: '30%'
  },
  option: {
    borderWidth: 2,
    borderColor: 'white',
    width: 60,
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  googleLogo: {
    width: 30,
    height: 30
  },
  facebookLogo: {
    width: 40,
    height: 40
  },
  twitterLogo: {
    width: 55,
    height: 55
  }
});

export default LogInScreen;
