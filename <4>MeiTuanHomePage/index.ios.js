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

class MeiTuanHomePage extends Component {
  render() {
    return (
      <View style={[styles.height160, styles.row]}>
          <View style={[styles.height160, styles.part_1_left]}>
            <Text style={[styles.font30]}>1</Text>
          </View>

          <View style={[styles.height160, styles.part_1_right,]}>
            <Text style={[styles.font30]}>2</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

    row: {
      flexDirection: 'row',
    },
    font30: {
      fontSize: 90,
    },
    height160: {
      height: 160
    },
    part_1_left: {
      flex: 1,
      borderWidth: 1,
      borderColor: 'red'
    },
    part_1_right: {
      flex: 2,
      borderWidth: 1,
      borderColor: 'red'
    }

});

AppRegistry.registerComponent('MeiTuanHomePage', () => MeiTuanHomePage);
