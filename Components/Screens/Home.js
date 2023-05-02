import React,{useState} from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    StatusBar,
    TextInput,
    FlatList,
    TouchableOpacity,
    Text,
    Image,
    Animated
}from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import GenreCard from "../Cards/GenreCard"
import ItemSperator from "../Cards/ItemSperator"
import ProductCard from "../Cards/ProductCard"
import Swiper2 from "../Swiper/Swiper2"
import ProductCard2 from "../Cards/ProductCard2"

const Genres = [ "Headsets" , "Laptops", "Mobiles" , "TV’s" , "Cases", "Speakers" ];
const Product = [
    {
      id: "1",
      title: "Beats SOLO 3",
      description:" Beats By Dre",
      image: require('../../assets/head.png')
     
      
    },
    {
      id: "2",
      title: "Beats SOLO 3",
      description:" Beats By Dre",
      image: require('../../assets/head.png')
    },
    {
      id: "3",
      title: "Beats SOLO 3",
      description:" Beats By Dre",
      image: require('../../assets/head.png')
    }
  ]

  const Product2 = [
    {
      id: "1",
      title: "Beats SOLO 3",
      description:" Beats By Dre",
      image: require('../../assets/headphone2.png'),
      price:"246"
    },
    {
      id: "2",
      title: "Beats SOLO 3",
      description:" Beats By Dre",
      image: require('../../assets/headphone2.png'),
      price:"246"
    },
    {
      id: "3",
      title: "Beats SOLO 3",
      description:" Beats By Dre",
      image: require('../../assets/headphone2.png'),
      price:"246"
    }
  ]

const Home =({navigation}) =>{
    const [activeGenre,setActiveGenre] = useState('All');
    const scrollX = React.useRef(new Animated.Value(0)).current;
    return(
        <ScrollView style={{flex:1,backgroundColor:"#fff"}}>        
            <StatusBar
            barStyle={"dark-content"}
            backgroundColor={"#fff"}
            />
        <View style={{flexDirection:"row",marginLeft:"68%",marginTop:"7%"}}>
          <TouchableOpacity>
           <Icon name="search-outline" size={28} color="#000"/>
           </TouchableOpacity>
           <TouchableOpacity>
           <Icon name="heart-outline" size={28} color="#000" style={{marginLeft:"6%"}}/>
           </TouchableOpacity>
           <TouchableOpacity>
           <Icon name="notifications-outline" size={28} color="#000" style={{marginLeft:"6%"}}/>
           </TouchableOpacity>
        </View>
        {/* <Text style={{fontSize:ontFamily:"Inter-Bold",color:"#aaaaaa"}}>Best</Text></Text>
        <View style={{alignItems:"center",justifyContent:"center"}32,fontFamily:"Inter-Bold",alignSelf:"center",marginTop:"10%"}}>
        Find your <Text style={{fontSize:32,f}>
            <Text style={{fontSize:32,fontFamily:"Inter-Bold"}}>Appliances</Text>
        </View> */}
        <Image style={{marginLeft:"20%",marginTop:"10%"}} source={require("../../assets/Mobiles.png")}/>
        <View style={Styles.searchSection}>
      
        <TextInput
        style={Styles.input}
        placeholder="search product"
        placeholderTextColor={"#fff"}
        underlineColorAndroid="transparent"
        color="#fff"
        />
        <TouchableOpacity>
          <Icon style={Styles.searchIcon} name="search-outline" size={20} color="#fff"/>
          </TouchableOpacity>
        </View>
        <View style={Styles.genreListcontainer}>
        <FlatList
        data={Genres}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <ItemSperator width={20}/>}
        ListHeaderComponent={() => <ItemSperator width={20}/>}
        ListFooterComponent={() => <ItemSperator width={20}/>}
        renderItem={({ item }) => (
        <GenreCard 
        genreName={item}
        active={item === activeGenre ? true : false}
        onPress={setActiveGenre}
        /> 
        )}
       />
      </View>
      <View>
      <FlatList
        data={Product}
        horizontal
        ItemSeparatorComponent={() => <ItemSperator width={20}/>}
        ListHeaderComponent={() => <ItemSperator width={20}/>}
        ListFooterComponent={() => <ItemSperator width={20}/>}
        renderItem={({ item }) => {
          return <ProductCard info={item} navigation={navigation}/>
        }}
        keyExtractor={(Product) => Product.id.toString()}
      />
    </View>
      <Swiper2/>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:"10%"}}>
        <Text style={{fontSize:18,fontFamily:"Inter-SemiBold",color:"#000",marginLeft:"5%"}}>Latest Upgrade</Text>
        <TouchableOpacity style={{marginRight:"5%",marginTop:"2%"}}>
        <Text style={{fontSize:12,color:"#000",fontFamily:"Inter-SemiBold"}}>View all</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:"10%",marginBottom:"10%"}}>
      <FlatList
        data={Product2}
        horizontal
        ItemSeparatorComponent={() => <ItemSperator width={20}/>}
        ListHeaderComponent={() => <ItemSperator width={20}/>}
        ListFooterComponent={() => <ItemSperator width={20}/>}
        renderItem={({ item }) => {
            console.log("test nav:",navigation)
          return (
            <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate("ProductCardScreen")}>
          <ProductCard2 info={item} navigation={navigation}/>
          </TouchableOpacity>
          )
        }}
        keyExtractor={(Product) => Product.id.toString()}
      />
    </View>
    <View style={{height:217,width:328,backgroundColor:"#030303",borderRadius:20,margin:15}}>
    </View>
    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:"10%"}}>
        <Text style={{fontSize:18,fontFamily:"Inter-SemiBold",color:"#000",marginLeft:"5%"}}>Others</Text>
        <TouchableOpacity style={{marginRight:"5%",marginTop:"2%"}}>
        <Text style={{fontSize:12,color:"#000",fontFamily:"Inter-SemiBold"}}>View all</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:"10%",marginBottom:"15%"}}>
      <FlatList
        data={Product2}
        horizontal
        ItemSeparatorComponent={() => <ItemSperator width={20}/>}
        ListHeaderComponent={() => <ItemSperator width={20}/>}
        ListFooterComponent={() => <ItemSperator width={20}/>}
        decelerationRate={0}
        bounces={false}
        renderItem={({ item}) => {
          return <ProductCard2 info={item} />
        }}
        keyExtractor={(Product) => Product.id.toString()} 
      />
    </View>
        </ScrollView>
    )
}

const Styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    searchSection: {
        flexDirection: 'row',
        borderWidth:1,
        borderColor:"#000",
        width:"85%",
        height:50,
        marginLeft:"8%",
        borderRadius:30,
        marginTop:"10%",
        backgroundColor:"#131215"
    },                                        
    searchIcon: {
        padding: 12,
        paddingRight:20
    },
    input: {
        width:"80%",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        color: '#424242',
        backgroundColor:"#131215",
        borderRadius:30
    },
    genreListcontainer:{
        paddingVertical:40,
      }
})

export default Home;


