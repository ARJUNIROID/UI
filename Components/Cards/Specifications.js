import React from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from "react-native"
import ItemSperator from "./ItemSperator";


const Specifications = (props) => {
    return (
        <View style={{backgroundColor:"#fff",width:500}}>
            <View>
                <View style={{flexDirection:"row",marginLeft:20,marginTop:20}}>
                    <View style={{width:170}}>
                    <Text style={{fontSize:11,fontFamily:"Inter-Medium",color:"#000"}}>{props.info.title}</Text>
                    </View>
                    <View style={{flexDirection:"column"}}>
                    <Text style={{marginLeft:30,fontSize:11,fontFamily:"Inter-Regular"}}>{props.info.description}</Text>
                    <Text style={{marginLeft:30,fontSize:11,fontFamily:"Inter-Regular"}}>{props.info.description2}</Text>
                    </View>
                </View>
                <View
                    style={{
                        marginTop:10,
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
                  {/* <View style={{flexDirection:"row",marginLeft:20,marginTop:20}}>
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
            <View style={{flexDirection:"row",marginTop:20,marginLeft:15}}>
                <TouchableOpacity style={{height:44,width:154,backgroundColor:"#CF0C0C",borderRadius:7,justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:14,color:"#fff",fontFamily:"Inter-Regular"}}>Buy Now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:44,flexDirection:"row",width:154,borderColor:"#CF0C0C",borderWidth:2,marginLeft:20,borderRadius:7,justifyContent:"center",alignItems:"center"}}>
                    <Image source={require("../../assets/cart.png")}/>
                    <Text style={{fontSize:14,marginLeft:10,fontFamily:"Inter-Regular",color:"#525252"}}>Add to cart</Text>
                </TouchableOpacity>
            </View> */}
        {/* </View>
        </View>
    )
} */}

const Styles = StyleSheet.create({
    
})

export default Specifications;