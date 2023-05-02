// import React from "react";
// import {
//     View,
//     StyleSheet,
//     Text
// }from "react-native"


// const MyCart =() =>{
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

// export default MyCart;


import * as Animatable from 'react-native-animatable';
import {
    TouchableWithoutFeedback,
    View,
    Text
}from "react-native"
import React from 'react'; 


const ExampleView = () =>  {
  handleViewRef = ref => this.view = ref;

  const zoomOut = {
    0: {
      opacity: 1,
      scale: 1,
    },
    0.5: {
      opacity: 1,
      scale: 0.3,
    },
    1: {
      opacity: 0,
      scale: 0,
    },
  };


  bounce = () => this.view.wobble(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));

    return (
        <View style={{ flex:1, justifyContent:"center",alignItems:"center"}}>
        <TouchableWithoutFeedback onPress={this.bounce}>
        <Animatable.View ref={this.handleViewRef}>
          <Text style={{fontSize:30}}>Bounce me!</Text>
        </Animatable.View>
      </TouchableWithoutFeedback>
      <Animatable.Text animation={zoomOut} style={{fontSize:30}}>Zooom out</Animatable.Text>
      </View>
    );
  }


  export default ExampleView;