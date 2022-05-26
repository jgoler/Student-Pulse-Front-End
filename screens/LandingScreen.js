import { StyleSheet, Text, View, Button } from 'react-native';

const LandingScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Landing Screen</Text>
      <Button
        title='Log In'
        onPress={() => props.navigation.navigate('LogInScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default LandingScreen;
