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
      
      /*
       1. FlexBox - flex属性
       当一个(元素)组件，定义了flex属性时，表示该元素是可伸缩的。当然flex的
       属性值是大于0的时候才伸缩，其小于和等于0的时候不伸缩
       */
      // <View style={styles.style_0}>
      //       <View style={styles.style_1}></View>
      //       <View style={styles.style_1}></View>
      //       <View style={{flex:10, borderWidth:1, borderColor: 'black'}}></View>
      // </View>

      /*
        2. FlexBox - flexDirection
        flexDirection在React-Native中只有两个属性，一个是row(横向伸缩)和column(纵向伸缩)。
      */

      // <View style={styles.style_0}>
          
      //     <View style={styles.style_1}>
      //         <Text style={{marginTop: 40, fontSize: 25}}>1/4高</Text>
      //         <Text style={{marginTop: 40, fontSize: 25}}>1/4高</Text>
      //     </View>

      //     <View style={[styles.style_1, {flexDirection: 'column'}]}>
      //         <Text style={{marginTop: 40, fontSize: 25}}>1/4高</Text>
      //         <Text style={{marginTop: 40, fontSize: 25}}>1/4高</Text>
      //     </View>

      //     <View style={{flex: 10, borderWidth: 1, borderColor: 'red',}}>
      //         <Text style={{marginTop: 40, fontSize: 25}}>1/2高</Text>
      //     </View>

      // </View>

      /*
        3. FlexBox - alignSelf: 对齐方式
        alignSelf的对齐方式主要有四种: flex-start, flex-end, center, auto, 
        stretch
      */

      // <View style={styles.style_0}>

      //   <View style={[styles.view, ]}>
      //     <Text>自由摆放</Text>
      //   </View>

      //   <View style={[styles.view, styles.center]}>
      //     <Text>居中摆放</Text>
      //   </View>

      //   <View style={[styles.view, styles.left]}>
      //     <Text>左对齐</Text>
      //   </View>

      //   <View style={[styles.view, styles.right]}>
      //     <Text>右对齐</Text>
      //   </View>

      // </View>

      /*
        4. 水平/垂直居中
        alignItems是alignSelf的变种, 跟alignSelf的功能类似, 可用于水平居中;
        justifyContent用于垂直居中, 属性较多可以了解一下.
      */
      <View style={styles.style_0}>
        <View style={[styles.view, ]}>
          <Text>方框在水平和垂直方向上都居中</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({

  /*
    1-2:
  style_0:{
    flex: 1,
    borderWidth: 1,  
    borderColor: 'red',
  },
  style_1:{

    // border: '1px solid red',

    flex: 5,

    flexDirection: 'row',

    height: 40,
    borderWidth: 1,
    borderColor: 'red',
  }
  */

  // 3. alignSelf: 对齐方式

  // style_0: {

  //   flex: 1,
  //   borderColor: 'red',
  //   borderWidth: 0.5,

  // },
  // view: {
  //   borderWidth: 5,
  //   borderColor: 'blue',
  //   width: 100,
  //   height: 40
  // },
  // center: {
  //   alignSelf: 'center'
  // },
  // left: {
  //   alignSelf: 'flex-start'
  // },
  // right: {
  //   alignSelf: 'flex-end'
  // }

  // 4. 水平/垂直居中
  style_0: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    borderWidth: 3,
    height: 50,
    borderColor: 'blue',
  }

});

AppRegistry.registerComponent('NewWorld', () => NewWorld);
