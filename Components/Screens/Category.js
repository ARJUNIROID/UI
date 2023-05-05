// import React, {useEffect, useState} from 'react';
// import {ActivityIndicator, FlatList, Text, View} from 'react-native';

// const App = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   const getMovies = async () => {
//     try {
//       const response = await fetch('https://reactnative.dev/movies.json');
//       const json = await response.json();
//       setData(json.movies);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     getMovies();
//   }, []);

//   return (
//     <View style={{flex: 1, padding: 24, justifyContent:"center",alignItems:"center"}}>
//       {isLoading ? (
//         <ActivityIndicator color="#000" size="large"/>
//       ) : (
//         <FlatList
//           data={data}
//           keyExtractor={({id}) => id}
//           renderItem={({item}) => (
//             <Text>
//               {item.id},{item.title}, {item.releaseYear}
//             </Text>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// export default App;

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

