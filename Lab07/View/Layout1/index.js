import { StyleSheet, Text, View,Button,Image,SafeAreaView } from 'react-native';
export default function Layout1() {
    return ( 
        <SafeAreaView style={{flex: 1, paddingTop: 20}}>
            <View style={styles.container}>
                <View style={styles.style1}>
                    <Text style={styles.text1}>A premium online store for</Text>
                    <Text style={styles.text1}>sporter and their stylish choice</Text>
                </View>
                <View style={styles.style2}>
                    <Image 
                    source={require("../../assets/bifourremovebgpreview.png")}
                    style={{width:250, height:235,}}
                    />
                </View>
                <View style={styles.style3}>
                    <Text style={styles.text2}> POWER BIKE {'\n'}SHOP</Text>
                </View>
                <View style={styles.style4}>
                    <Button title='Get Started' > </Button>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin:'10px',
    },
    style1:{
        flex:2,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    style2:{
        flex:4,
        backgroundColor:'#E941411A',
        borderRadius:'20px',
        justifyContent:'center',
        alignItems:'center',
    },
    style3:{
        flex:1,
        paddingTop:'10px',
    },
    style4:{
        flex:2,
        justifyContent:'flex-end',
    },text1:{
        fontSize:20,
        fontWeight:'bold',
        fontFamily:'VT323',
        textAlign:'center',
    },
    text2:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        fontFamily:'Ubuntu',
    },

});