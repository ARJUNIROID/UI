import React from "react";
import {TouchableOpacity,Text,StyleSheet, Dimensions} from "react-native"

const {heigt,width} = Dimensions.get("screen")
const setWidth = (w) => (width/100) * w;


const GenreCard = ({genreName,active, onPress }) => {
    return(
        <TouchableOpacity style={{...styles.container,
        backgroundColor:active ? "#0F52AB" : "#fff"}}
        activeOpacity={0.5}
        onPress={() => onPress(genreName)}
        >
            <Text style={{...styles.genreText, color: active ? "#fff" : "#000"}}>{genreName}</Text>
        </TouchableOpacity>
    )
}
 
const styles =StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
        backgroundColor:"#fff",
        paddingVertical:8,
        elevation:3,
        marginVertical:2,
        width:setWidth(25)
    },
    genreText:{
        fontSize:13,
        color:"#fff",
    }
});


export default GenreCard;