// import React from 'react'
// import { SafeAreaView,StatusBar } from 'react-native'
//  import Swiper from 'react-native-swiper'
 
// import Slide1 from "./Slide1"
// import Slide2 from "./Slide2"
// import Slide3 from "./Slide3"
 
// const SwiperComponent= ({navigation}) => {  
//     return (
//       <SafeAreaView style={{flex:1}}>
//         <StatusBar
//         barStyle={"dark-content"}
//         backgroundColor={"#fff"}
//         />
//       <Swiper loop={false}>
//        <Slide1/>
//        <Slide2/>
//        <Slide3 navigation={navigation}/>                                                                                                                             
//       </Swiper>
//       </SafeAreaView>
//     )
//   }

//   export default SwiperComponent;



import React,{useState} from 'react';
import { 
  View,
  Text,  
  Image
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
 
const slides = [
  {
    key: 1,
    title: 'SHOPPING FROM HOME',
    description:'Lorem ipsum dolor sit ametConsectetur adipiscing. Interger rat ide facilisis. Maximus accumsan',
    image: require("../../assets/gif1.gif"),
  },
  {
    key: 2,
    title: 'PRODUK ORIGINAL',
    description: 'Lorem ipsum dolor sit ametConsectetur adipiscing. Interger rat ide facilisis. Maximus accumsan',
    image: require("../../assets/gif2.gif"),
  },
  {
    key: 3,
    title: 'EXPRESS DELIVERY',
    description: 'Lorem ipsum dolor sit ametConsectetur adipiscing. Interger rat ide facilisis. Maximus accumsan',
    image: require("../../assets/gif3.gif"),
  }
];
 
 
export default function App({navigation}){

  const [showHomePage, setshowHomePage] =useState(false);

  const buttonLabel = (label) => {
    return(
      <View style={{
        padding:12
      }}>
        <Text style={{
          color:"#000",
          fontSize:15
        }}>
          {label}
        </Text>
      </View>
    )
  }
  if(!showHomePage) {
  return(
    <AppIntroSlider
    data={slides}
    renderItem={({item}) => {
      return(
        <View style={{flex:1,backgroundColor:"#fff"}}>
          <Image
          source={item.image}
          style={{
            height:324,
            width:328,
            marginLeft: "4.44%",
            marginRight: "4.44%",
            marginTop: "10.88%", 
            marginBottom: "5.62%"
          }}
          resizeMode="contain"
          />
          <Text style={{
             fontSize:18,
             fontFamily:"Inter-Bold",
             textAlign:"center"
          }}>
            {item.title}
          </Text>
          <Text style={{
              fontFamily:"Inter-Regular",
              fontSize:15,
              color:"#54758F",
              textAlign:"center",
              padding:30
          }}>
            {item.description}
          </Text>
        </View>
      )
    }}
    activeDotStyle={{
      backgroundColor:"#0CC92B",
      width:30,
      height:7
    }}
    dotStyle={{
      width:8,
      height:8,
      backgroundColor:"#0CC92B"
    }}
    showSkipButton 
    renderNextButton={() => buttonLabel("Next")}
    renderSkipButton={() => buttonLabel("Skip")}
    renderDoneButton={() => buttonLabel("Done")}
    onDone={() => navigation.navigate("MyBottom")} 
    />                                                                                 
  )
}
return(
<View style={{
  flex:1,
  justifyContent:"center",
  alignItems:"center"
}}>
  <Text>Swiper</Text>
</View>
)
}