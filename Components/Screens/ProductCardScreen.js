import React, { useState } from "react";
import {
    View,
    StyleSheet,
    ImageBackground,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native"
import { Text } from "react-native-animatable";
import Icon from "react-native-vector-icons/MaterialIcons"
import RoundCard from "../Cards/RoundCard";
import ItemSperator from "../Cards/ItemSperator"
import Specifications from "../Cards/Specifications"

const RoundCardData = [
    {
        id: "1",
        image: require('../../assets/headphone3.png'),
        color: "#270A5A"
    },
    {
        id: "2",
        image: require('../../assets/headphone3.png'),
        color: "#FF5A5A"
    },
    {
        id: "3",
        image: require('../../assets/headphone3.png'),
        color: "#2B87FF"
    },
    {
        id: "4",
        image: require('../../assets/headphone3.png'),
        color: "#242627"
    }
]


const ProductCardScreen = ({ navigation }) => {
    return (
        <ScrollView style={Styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={"#1A102D"}
            />
            <ImageBackground
                style={{ height: 276, width: "100%" }}
                source={require("../../assets/productCardScreen.png")}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => navigation.navigate("MyBottom")}>
                        <Icon name="chevron-left" size={40} color="#fff" style={{ marginLeft: "6%", marginTop: 6, marginLeft: 8 }} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 16, marginRight: 13 }}>
                        <TouchableOpacity style={{ marginRight: 16 }}>
                            <Image style={{ width: 15.75, height: 19.5 }} source={require("../../assets/Vector.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginRight: 4 }}>
                            <Image style={{ width: 22, height: 19 }} source={require("../../assets/Vector1.png")} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            <View style={{ backgroundColor: "#fff", height: 930, width: "100%", borderTopEndRadius: 30 }}>
                <View style={{ flexDirection: "row", marginTop: 40 }}>
                    <View style={{ flexDirection: "column", marginLeft: 30 }}>
                        <Text style={{ fontFamily: "Inter-Bold", fontSize: 18, color: "#262626" }}>Beats SOLO 3</Text>
                        <Text style={{ fontFamily: "Inter-Light", fontSize: 10, color: "#3A3A3A" }}>Beats By Dre.</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: "30%", marginTop: 10 }}>
                        <TouchableOpacity style={{ marginRight: 10, width: 20, height: 20, borderWidth: 2, borderColor: "#000", justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
                            <Text style={{ fontSize: 12, fontWeight: "bold", color: "#000" }}>-</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000" }}>01</Text>
                        <TouchableOpacity style={{ marginLeft: 10, width: 20, height: 20, borderWidth: 2, borderColor: "#000", justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
                            <Text style={{ fontSize: 12, fontWeight: "bold", color: "#000" }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginLeft: 30, marginTop: 10 }}>
                    <Text style={{ fontSize: 20, color: "#026DF9", fontFamily: "Inter-Bold" }}>$</Text>
                    <Text style={{ fontSize: 20, color: "#026DF9", fontFamily: "Inter-Bold" }}>245</Text>
                </View>
                <View style={{ flexDirection: "row", marginLeft: 30, marginTop: 10 }}>
                    <View style={{ width: 48, height: 22, backgroundColor: "#D4F7FF", borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 10, color: "#222222", fontFamily: "Inter-Light" }}>5.5</Text>
                    </View>
                    <Text style={{ fontSize: 10, fontFamily: "Inter-Light", marginTop: 4, marginLeft: 5 }}>(62 Review)</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: "#000", fontSize: 15, fontFamily: "Inter-Bold", marginLeft: 30 }}>Colors</Text>
                    <FlatList
                        style={{ marginTop: 10, marginBottom: 20 }}
                        data={RoundCardData}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => <ItemSperator width={20} />}
                        ListHeaderComponent={() => <ItemSperator width={20} />}
                        ListFooterComponent={() => <ItemSperator width={20} />}
                        renderItem={({ item }) => (
                            <RoundCard info={item} />
                        )}
                    />
                </View>
                <View>
                    <Text style={{ fontSize: 15, fontFamily: "Inter-Bold", marginLeft: 30, color: "#000" }}>Product Description</Text>
                    <Text style={{ textAlign: "center", fontSize: 13, color: "#838383", marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do Lorem ipsum dolor sit amet,
                        adipiscing elit, sed doLorem ipsum dolor sit amet,
                        consectetur adipiscing.</Text>
                </View>
                <View
                    style={{
                        marginTop:20,
                        marginLeft:20,
                        marginRight:20,
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                <View>
            <Specifications/>
            </View>
            
            </View>
            
            
        </ScrollView>

    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A102D"
    }
})

export default ProductCardScreen;