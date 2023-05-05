// import React from "react";
// import {
//     View,
//     StyleSheet,
//     Text
// }from "react-native"


// const Profile =() =>{
//     return(
//         <View style={Styles.container}>
//             <Text style={{fontSize:20,fontWeight:"bold"}}>Coming soon !</Text>
//         </View>
//     )
// }

// const Styles =StyleSheet.create({
//     container:{
//         flex:1,
//         alignItems:"center",
//         justifyContent:"center"
//     }
// })
// export default Profile;


import React, {useRef} from 'react';
import {Animated, View, StyleSheet, PanResponder, Text} from 'react-native';

const App = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: {x: 1, y: 1},
       
        }).start();
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag & Release this box!</Text>
      <Animated.View
        style={{
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        }}
        {...panResponder.panHandlers}>
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: 'yellow',
    borderRadius: 100,
  },
});

export default App;
 


// import React, {useRef} from 'react';
// import {
//   Animated,
//   Text,
//   View,
//   StyleSheet,
//   Button,
//   SafeAreaView,
// } from 'react-native';

// const App = () => {
//   // fadeAnim will be used as the value for opacity. Initial Value: 0
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   const fadeIn = () => {
//     // Will change fadeAnim value to 1 in 5 seconds
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 5000,
//       useNativeDriver: true,
//     }).start();
//   };

//   const fadeOut = () => {
//     // Will change fadeAnim value to 0 in 3 seconds
//     Animated.timing(fadeAnim, {
//       toValue: 0,
//       duration: 3000,
//       useNativeDriver: true,
//     }).start();
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Animated.View
//         style={[
//           styles.fadingContainer,
//           {
//             // Bind opacity to animated value
//             opacity: fadeAnim,
//           },
//         ]}>
//         <Text style={styles.fadingText}>Fading View!</Text>
//       </Animated.View>
//       <View style={styles.buttonRow}>
//         <Button title="Fade In View" onPress={fadeIn} />
//         <Button title="Fade Out View" onPress={fadeOut} />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   fadingContainer: {
//     padding: 20,
//     backgroundColor: 'powderblue',
//   },
//   fadingText: {
//     fontSize: 28,
//   },
//   buttonRow: {
//     flexBasis: 100,
//     justifyContent: 'space-evenly',
//     marginVertical: 16,
//   },
// });

// export default App;