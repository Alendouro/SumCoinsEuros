import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Platform,
} from "react-native";

export default function App() {
  const [value, onChangeText] = React.useState("Enter the Weight in Grams...");
  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const onPress = () => setCount((prevCount) => prevCount + 1);

  // 1ª When a coin is selected it must change the background color
  const state = {
    backgroundColor: "black",
    backgroundColor2: "black",
    pressed: false,
  };

  const changeColor = () => {
    if (!this.state.pressed) {
      this.setState({
        pressed: true,
        backgroundColor: "red",
        backgroundColor2: "black",
      });
    } else {
      this.setState({
        pressed: false,
        backgroundColor: "black",
        backgroundColor2: "red",
      });
    }
  };
  // 2ª When a coin is selected there must be a state variable that has the weight of the coin

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.font}>Contador de Moedas €€</Text>
      </View>
      <View style={styles.coinsContainer}>
        <View style={styles.rowCoins}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Image
              style={styles.tinyLogo}
              source={require("./assets/2_Euro_Coin.png")}
            />
          </TouchableOpacity>

          <Image
            style={styles.tinyLogo}
            source={require("./assets/1_Euro_Coin.png")}
          />
          <Image
            style={styles.tinyLogo}
            source={require("./assets/50_Cent_Coin.png")}
          />
        </View>
        <View style={styles.rowCoins}>
          <Image
            style={styles.tinyLogo}
            source={require("./assets/20_Cent_Coin.png")}
          />
          <Image
            style={styles.tinyLogo}
            source={require("./assets/10_Cent_Coin.png")}
          />
          <Image
            style={styles.tinyLogo}
            source={require("./assets/5_Cent_Coin.png")}
          />
        </View>
        <View style={styles.rowCoins}>
          <TextInput
            style={{
              height: 50,
              width: 380,
              borderColor: "gray",
              borderWidth: 1,
              textAlign: "center",
              borderRadius: 30,
              fontWeight: "bold",
            }}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            autoFocus={true}
            keyboardType={"numeric"}
          />
        </View>
      </View>
      <View style={{ alignItems: "center", justifyContent: "flex-end" }}>
        <Text>Count: {count}</Text>
      </View>
      <StatusBar style="auto" />
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 70,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  coinsContainer: {
    paddingTop: 40,
  },
  rowCoins: {
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  center: {
    alignItems: "center",
  },
  font: {
    fontSize: 24,
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
