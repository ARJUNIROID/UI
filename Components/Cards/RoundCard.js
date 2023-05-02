import React,{useState} from "react";
import {
    Image,
    SafeAreaView,
    View
} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";


const RoundCard = (props) => {
    const [border,setBorder] = useState(false)
    return (
        <TouchableOpacity onPress={()=> setBorder(!border)}>
        <SafeAreaView style={{ height:70,width:70,borderWidth: border ? 1 : 0,borderRadius:50,borderColor:"#270A5A",justifyContent:"center",alignItems:"center",borderStyle:"dashed"}}>
            <View style={{ height:60,width:60,backgroundColor:props.info.color,justifyContent:"center",alignItems:"center",borderRadius:50 }}>
            <Image
                style={{width: 40, height: 50 }}
                source={props.info.image}
                >
            </Image>
            </View>
        </SafeAreaView>
        </TouchableOpacity>
    )
}

export default RoundCard;