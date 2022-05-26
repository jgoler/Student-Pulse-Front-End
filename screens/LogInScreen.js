import { StyleSheet, Text, View, Button } from 'react-native';

const LogInScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In Screen</Text>
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

export default LogInScreen;
