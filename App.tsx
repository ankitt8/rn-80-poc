/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Text, StyleSheet, View } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text>Project using command npx @react-native-community/cli@latest init MyAppWithoutRNW --version 0.80.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
});

export default App;
