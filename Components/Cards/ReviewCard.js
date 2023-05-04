import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    View
}from "react-native"



const ReviewCard =(props) =>{
    return(
        <SafeAreaView style={Styles.container}>
           <View style={{flexDirection:"row"}}>
                <Image style={{width:40,height:40}} source={require("../../assets/user-profile.png")}/>
                <View style={{flexDirection:"column",marginLeft:20}}>
                    <Text style={{fontSize:15,fontFamily:"Inter-SemiBold",color:"#000"}}>{props.info.Name}</Text>
                    <Text style={{fontSize:10,fontFamily:"Inter-Regular",color:"#000"}}>5 Spetember 2018</Text>
            </View>
            <Image style={{marginTop:15,marginLeft:50}} source={require("../../assets/blackstar.png")}/>
           </View>
           <Text style={{textAlign:"left",marginTop:10,color:"#696969"}}>{props.info.description}</Text>
        </SafeAreaView>
    )
}

const Styles =StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        marginBottom:30
    }
})

export default ReviewCard;