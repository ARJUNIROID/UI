import React from "react";
import{
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
}from 'react-native'


const DeliveryCard  = () =>{
    return(
        <View style={{height:244,width:"100%",backgroundColor:"#292929",borderRadius:23,marginTop:30}}>
            <View style={{flexDirection:"row"}}>
            <View style={{flexDirection:"column"}}>
            <Text style={{fontSize:15,fontFamily:"Inter-Bold",color:"#fff",marginLeft:20,marginTop:30,}}>Deliver To</Text>
                <Text style={{fontSize:13,fontFamily:"Inter-Regular",color:"#fff",marginLeft:20}}>Lorem ipsum dolor sit 662002</Text>
                </View>
                <TouchableOpacity style={{backgroundColor:"#CF0C0C",width:88,height:36,marginLeft:40,marginTop:25,justifyContent:"center",alignItems:"center",borderRadius:30}}>
                    <Text style={{color:"#fff",fontSize:12}}>Change</Text>
                </TouchableOpacity>
            </View>
            <View
                    style={{
                        marginTop:20,
                        borderBottomColor: '#fff',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                <Image style={{height:23,width:248,marginLeft:20,marginTop:20}} source={require("../../assets/Group1.png")}/>
                <Image style={{height:23,width:248,marginLeft:20,marginTop:20}} source={require("../../assets/Group2.png")}/>
                <Image style={{height:23,width:248,marginLeft:20,marginTop:20}} source={require("../../assets/Group3.png")}/>
        </View>
    )
}


export default DeliveryCard;