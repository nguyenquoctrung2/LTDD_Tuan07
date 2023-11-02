import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Database } from "../db/db";
const Layout3 = ({ route }) => {
  const id = route.params;
  const [product, setProduct] = useState({});
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = () => {
    for (let i = 0; i < Database.length; i++) {
      if (Database[i].id === id) {
        setProduct(Database[i]);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.imgC} source={product.productImg}></Image>
      </View>
      <Text style={styles.textName}>{product.productName}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.discount}>{product.discount}% OFF</Text>
        <Text style={styles.discount}>{product.productPrice}$</Text>
      </View>

      <Text style={styles.textD}>Description</Text>
      <Text style={styles.textDD}>{product.Description}</Text>

      <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
        <View style={styles.btn}>
          <Text style={{ fontSize: "25px", fontWeight: "400", color: "white" }}>
            Add to card
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    width: "359px",
    height: "388px",
    backgroundColor: "rgba(233, 65, 65, 0.1)",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  imgC: {
    width: "297px",
    height: "340px",
    resizeMode: "contain",
  },

  textName: {
    fontSize: "15px",
    fontWeight: "400",
  },

  textDiscount: {
    fontSize: "15px",
    fontWeight: "400",
    color: "rgba(0, 0, 0, 0.59)",
  },

  textPrice: {
    textDecorationLine: "line-through",
    fontSize: "15px",
    fontWeight: "400",
  },
  textD: {
    fontSize: "15px",
    fontWeight: "400",
  },
  textDD: {
    color: "rgba(0, 0, 0, 0.57)",
    fontSize: "12px",
    fontWeight: "400",
  },

  btn: {
    width: "269px",
    height: "54px",
    borderRadius: "30px",
    backgroundColor: "rgba(233, 65, 65, 1)",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    top:'50px'
  },
});

export default Layout3;
