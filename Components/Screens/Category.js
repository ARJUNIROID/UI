import React from "react";
import {
    View,
    StyleSheet,
    Text
}from "react-native"


const Category =() =>{
    return(
        <View style={Styles.container}>
            <Text style={{fontSize:20,fontWeight:"bold"}}>Coming soon !</Text>
        </View>
    )
}

const Styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default Category;