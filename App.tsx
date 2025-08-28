/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

class App extends React.Component {
  UNSAFE_componentWillMount() {
    // Runs right before the first render (legacy/unsafe)
    console.warn('UNSAFE_componentWillMount called');
    // Example (not recommended): pre-render state updates
    // this.setState({ ready: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Project using command npx @react-native-community/cli@latest init
          MyAppWithoutRNW --version 0.80.0
        </Text>
      </View>
    );
  }
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
