import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Pressable,
  Button,
} from "react-native";

function Layout2({ route, navigation }) {
 
  const Database = [
    {
      id: 1,
      productName: "Pinarello",
      productPrice: 1800,
      discount: 15,
      Description:
        "We create dream bikes, designed to stir emotions and push the boundaries of performance.",
      productImg: require("../db/image/bifour_-removebg-preview.png"),
      type: "roadbike",
    },
    {
      id: 2,
      productName: "Pina Mountain",
      productPrice: 1700,
      discount: 15,
      Description:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
      productImg: require("../db/image/bione-removebg-preview.png"),
      type: "mountain",
    },
    {
      id: 3,
      productName: "Pina Bike",
      productPrice: 1500,
      discount: 15,
      Description:
        "Conquer every mountain and crush every finish line with the greatest bikes on the road today.",
      productImg: require("../db/image/bithree_removebg-preview.png"),
      type: "roadbike",
    },
    {
      id: 4,
      productName: "Pinarello",
      productPrice: 1500,
      discount: 15,
      Description:
        "Conquer every mountain and crush every finish line with the greatest bikes on the road today.",
      productImg: require("../db/image/bitwo-removebg-preview.png"),
      type: "roadbike",
    },
    {
      id: 5,
      productName: "Pinarello",
      productPrice: 1500,
      discount: 15,
      Description:
        "Conquer every mountain and crush every finish line with the greatest bikes on the road today.",
      productImg: require("../db/image/bitwo-removebg-preview.png"),
      type: "mountain",
    },
    {
      id: 6,
      productName: "Pinarello",
      productPrice: 1500,
      discount: 15,
      Description:
        "Conquer every mountain and crush every finish line with the greatest bikes on the road today.",
      productImg: require("../db/image/bitwo-removebg-preview.png"),
      type: "mountain",
    },
  ];
  var [text, setText] = useState("");
  useEffect(() => {
    setText(route.params);
  }, [route.params]);

  const [state, setState] = useState(Database);
  return (
    <View style={styles.container}>


      <View style={styles.content}>
        <View style={styles.content1}>
          <TouchableOpacity
            onPress={() => {
              setState(Database);
            }}
          >
            <View style={styles.btn1C1}>
              <Text style={styles.textC1}>All</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              const newArr = Database.filter((item) => {
                return item.type == "roadbike";
              });
              console.log(newArr);
              setState(newArr);
            }}
          >
            <View style={styles.btn1C1}>
              <Text style={styles.textC1}>Roadbike</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              const newArr = Database.filter((item) => {
                return item.type == "mountain";
              });
              setState(newArr);
            }}
          >
            <View style={styles.btn1C1}>
              <Text style={styles.textC1}>Mountain</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.content2}>
          <FlatList
            data={state}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity
                    style={styles.c2}
                    onPress={() => {
                      navigation.navigate("Layout3", item.id);
                    }}
                  >
                    <Image
                      source={item.productImg}
                      style={styles.imgC2}
                    ></Image>
                    <Text style={styles.textC2}>{item.productName}</Text>
                    <Text style={styles.text1C2}>${item.productPrice}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            numColumns={2}
          ></FlatList>
        </View>
      </View>
      <Button title="Goback" onPress={()=>{navigation.navigate("Layout1")}}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text1: {
    fontWeight: "700",
    fontSize: "25px",
    color: "rgba(233, 65, 65, 1)",
  },

  content: {
    flex: 1,
  },

  content1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  btn1C1: {
    width: "99px",
    height: "32px",
    borderRadius: "5px",
    borderWidth: "1px",
    borderColor: "rgba(233, 65, 65, 0.53)",
    alignItems: "center",
    justifyContent: "center",
  },
  textC1: {
    fontWeight: "400",
    fontSize: "20px",
    textAlign: "center",
  },
  content2: {
    flex: 8,
  },

  c2: {
    width: "167px",
    height: "200px",
    borderRadius: "10px",
    backgroundColor: "rgba(247, 186, 131, 0.15)",
    margin: "10px",
    alignItems: "center",
    justifyContent: "center",
  },

  imgC2: {
    width: "135px",
    height: "127px",
    resizeMode: "contain",
  },
  textC2: {
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "24.91px",
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.6)",
  },
  text1C2: {
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "24.91px",
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
  },
});

export default Layout2;
