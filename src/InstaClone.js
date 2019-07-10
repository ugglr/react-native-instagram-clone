import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class InstaClone extends Component {
  render() {
    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
        <View style={styles.tempNav}>
          <Text>Instagram</Text>
        </View>
        <View style={styles.userBar}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={styles.userPic}
              source={{
                uri:
                  "https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=567%2C580&ssl=1"
              }}
            />
            <Text>ProfileName</Text>
          </View>
        </View>
        <Image
          style={{ width: "100%", height: 100 }}
          source={{
            uri:
              "https://www.thelabradorsite.com/wp-content/uploads/2019/03/Cute-puppy-Names-Over-200-Adorable-Ideas-LS-long.jpg"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%",
    height: 56,
    marginTop: 20,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },
  userBar: {
    width: 100 + "%",
    height: 50,
    backgroundColor: "rgb(0,255,255)",
    flexDirection: "row",
    marginHorizontal: 10
  },
  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "rgb(0,0,0)"
  }
});

export default InstaClone;
