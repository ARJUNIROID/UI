import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"

const RoundCard = (props) => {
    const [liked, setLiked] = useState(false)
    return (
        <SafeAreaView style={{ marginBottom: 20 }}>
            <ImageBackground
                style={{ ...styles.container, width: 200, height: 270 }}
                imageStyle={{ borderRadius: 20 }}
                source={props.info.image}>
                <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
                    <View style={{ flexDirection: "column", marginRight: 30 }}>
                        <Text style={{ color: "#fff", fontSize: 15, fontFamily: "Inter-Bold" }}>{props.info.title}</Text>
                        <Text style={{ color: "#fff", fontSize: 9, fontFamily: "Inter-Light" }}>{props.info.description}</Text>
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
                            style={{ marginLeft: "4%" }}
                        />
                    </ TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.touchableOpacity}>
                    <Text style={{ color: "#fff" }}>Know more</Text>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    )
}


const deviceWidth = Math.round(Dimensions.get('window').width);
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


export default RoundCard;