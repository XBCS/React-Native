/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class NewWorld extends Component {
  render() {
    return (
      
      <View style={styles.style_0}>
            <View style={styles.style_1}></View>
            <View style={styles.style_1}></View>
            <View style={{flex:10, borderWidth:1, borderColor: 'black'}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style_0:{
    flex: 1,
    borderWidth: 1,  
    borderColor: 'red',
  },
  style_1:{
    // border: '1px solid red',
    flex: 5,
    height: 40,
    borderWidth: 1,
    borderColor: 'red',
  }

});

AppRegistry.registerComponent('NewWorld', () => NewWorld);
