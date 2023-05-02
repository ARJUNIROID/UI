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
    image: require("../../assets/Group.png"),
  },
  {
    key: 2,
    title: 'PRODUK ORIGINAL',
    image: require("../../assets/Group.png"),
  },
  {
    key: 3,
    title: 'EXPRESS DELIVERY',
    image: require("../../assets/Group.png"),
  }
];
 
 
export default function App(){

  const [showHomePage, setshowHomePage] =useState(false);
  
  if(!showHomePage) {
  return(
    <AppIntroSlider
    style={{height:338,width:500,marginTop:"5%",backgroundColor:"#030303",}}
    data={slides}
    renderItem={({item}) => {
      return(
        <View>
          <Image
          source={item.image}
          style={{
            height:200,
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
        </View>
      )
    }}
    showDoneButton={false}
    showNextButton={false}
    activeDotStyle={{
      backgroundColor:"#66B3EB",
      width:20,
      height:4,
      marginBottom:"13%"
    }}
    dotStyle={{
      width:20,
      height:4,
      backgroundColor:"gray",
      marginBottom:"13%"
    }}
    />                                                                               
  )
}
}