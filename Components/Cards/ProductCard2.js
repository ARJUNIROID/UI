import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import Icon2 from "react-native-vector-icons/FontAwesome"


const ProductCard2 = (props,{navigation}) => {
    console.log("productCard>>>>>",navigation)
    const [liked, setLiked] = useState(false)
    return (
        <SafeAreaView style={{ height: 250, width: 195, backgroundColor: "#0C4CA0",borderRadius:30 }}>
            <View
                style={{ width: 195, height: 210, borderRadius: 100 }}
                >
                <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
                    <View style={{ flexDirection: "column", marginRight: 30 }}>
                        <Text style={{ color: "#fff", fontSize: 15, fontFamily: "Inter-Bold" }}>{props.info.title}</Text>
                        <Text style={{ color: "#fff", fontSize: 9, fontFamily: "Inter-Light"}}>{props.info.description}</Text>
                    </View>
                    < TouchableOpacity
                        onPress={() => {
                            setLiked(!liked)
                        }}
                    >
                        <Icon
                            name={liked ? "heart" : "heart-outline"}
                            color={liked ? "#FE251B" : "#fff"}
                            size={28}
                            style={{ marginLeft: "2%" }}
                        />
                    </ TouchableOpacity>
                    </View>
                    <Image style={{ marginLeft:50,marginTop:20}} source={props.info.image}/> 
                    <View style={{ flexDirection: "row", marginRight: 30 }}>
                        <Text style={{ color: "#fff", fontSize: 13, fontFamily: "Inter-Bold",marginLeft:20,marginTop:10}}>${props.info.price}</Text>
                    </View>
            </View> 
            <TouchableOpacity onPress={() => navigation.navigate("ProductCardScreen")}>
            <View style={{ width: 195, height: 40, backgroundColor: "#00305B",borderBottomLeftRadius: 30, borderBottomEndRadius: 30 ,justifyContent:"center", alignItems:"center"}}>
                <Icon2 name="angle-double-down" color="#fff" size={28}/>
            </View>
            </TouchableOpacity> 
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        height: 340,
        width: 230,
        borderRadius: 12,
        elevation: 5,
        marginVertical: 2,
    },
    imageStyle: {
        width: 220,
        height: 270,
        borderWidth: 10,
        borderRadius: 30
    },
    touchableOpacity: {
        marginTop: "80%",
        marginLeft: "10%",
        width: "50%",
        height: "13%",
        borderWidth: 2,
        borderColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    }
})


export default ProductCard2;