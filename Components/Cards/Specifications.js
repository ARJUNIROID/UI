import React from "react";
import {
    View,
    StyleSheet,
    Text
} from "react-native"


const Specifications = () => {
    return (
        <View>
            <View style={{ marginTop: 15, marginLeft: 20 }}>
                <Text style={{ fontSize: 15, fontFamily: "Inter-Bold", color: "#000" }}>Specifications</Text>
            </View>
            <View>
                <View style={{flexDirection:"row",marginLeft:20,marginTop:20}}>
                    <Text style={{fontSize:11,fontFamily:"Inter-Medium",color:"#000"}}>Transducer type</Text>
                    <Text style={{marginLeft:"40%",fontSize:11,fontFamily:"Inter-Regular"}}>dynamic</Text>
                </View>
                <View
                    style={{
                        marginTop:20,
                        marginLeft:20,
                        marginRight:20,
                        borderBottomColor: '#AEB0BA',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                  <View style={{flexDirection:"row",marginLeft:20,marginTop:20}}>
                    <Text style={{fontSize:11,fontFamily:"Inter-Medium",color:"#000"}}>Operating principle</Text>
                    <Text style={{marginLeft:"36%",fontSize:11,fontFamily:"Inter-Regular"}}>closed</Text>
                </View>
                <View
                    style={{
                        marginTop:20,
                        marginLeft:20,
                        marginRight:20,
                        borderBottomColor: '#AEB0BA',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                  <View style={{flexDirection:"row",marginLeft:20,marginTop:20}}>
                    <Text style={{fontSize:11,fontFamily:"Inter-Medium",color:"#000"}}>Nominal frequency response</Text>
                    <Text style={{marginLeft:"22%",fontSize:11,fontFamily:"Inter-Regular"}}>5-40.000 Hz</Text>
                </View>
                <View
                    style={{
                        marginTop:20,
                        marginLeft:20,
                        marginRight:20,
                        borderBottomColor: '#AEB0BA',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                <View style={{flexDirection:"row",marginLeft:20,marginTop:20}}>
                    <Text style={{fontSize:11,fontFamily:"Inter-Medium",color:"#000"}}>Nominal impedance</Text>
                    <Text style={{marginLeft:"36%",fontSize:11,fontFamily:"Inter-Regular"}}>250 </Text>
                </View>
                <View
                    style={{
                        marginTop:20,
                        marginLeft:20,
                        marginRight:20,
                        borderBottomColor: '#AEB0BA',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                <View style={{flexDirection:"row",marginLeft:20,marginTop:20}}>
                    <Text style={{fontSize:11,fontFamily:"Inter-Medium",color:"#000"}}>Nominal SPL</Text>
                    <Text style={{marginLeft:"47%",fontSize:10,fontFamily:"Inter-Regular"}}>102 db (1 mW/500 Hz)</Text>
                </View>
                <View
                    style={{
                        marginTop:20,
                        marginLeft:20,
                        marginRight:20,
                        borderBottomColor: '#AEB0BA',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                <View style={{flexDirection:"row",marginLeft:20,marginTop:20}}>
                    <Text style={{fontSize:11,fontFamily:"Inter-Medium",color:"#000"}}>Nominal T.H.D</Text>
                    <Text style={{marginLeft:"45%",fontSize:10,fontFamily:"Inter-Regular"}}>0.05%(1mW/500Hz)</Text>
                </View>
                <View
                    style={{
                        marginTop:20,
                        marginLeft:20,
                        marginRight:20,
                        borderBottomColor: '#AEB0BA',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                <View style={{flexDirection:"row",marginLeft:20,marginTop:20}}>
                    <Text style={{fontSize:11,fontFamily:"Inter-Medium",color:"#000"}}>Sound coupling to the ear</Text>
                    <Text style={{marginLeft:"28%",fontSize:11,fontFamily:"Inter-Regular"}}>circumaural</Text>
                </View>
                <View
                    style={{
                        marginTop:20,
                        marginLeft:20,
                        marginRight:20,
                        borderBottomColor: '#AEB0BA',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                <View style={{flexDirection:"row",marginLeft:20,marginTop:20}}>
                    <Text style={{fontSize:11,fontFamily:"Inter-Medium",color:"#000"}}>Ambient noise attenuation</Text>
                    <View style={{flexDirection:"column"}}>
                    <Text style={{marginLeft:"25%",fontSize:11,fontFamily:"Inter-Regular"}}>approx.1.8 dBA (velours)approx.1.8 dBA (velours)</Text>
                    </View>
                </View>
                <View
                    style={{
                        marginTop:20,
                        marginLeft:20,
                        marginRight:20,
                        borderBottomColor: '#AEB0BA',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    
})

export default Specifications;