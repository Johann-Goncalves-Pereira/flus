import * as React from "react";
import { ImageBackground, StyleSheet, Image } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../../types";
import { TextInput } from "react-native-gesture-handler";

export default function WelcomeScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [text, onChangeText] = React.useState("Useless Text");
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={{
          width: 1024,
          height: 1940,
          uri: "https://picsum.photos/1024/1940",
        }}
      >
        <View style={styles.titleContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/images/do.png")}
          />
          <Text style={styles.title}>Welcome Back</Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Email"
              style={styles.input}
              onChangeText={onChangeText}
              // value={text}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Password"
              style={styles.input}
              onChangeText={onChangeText}
              // value={text}
            />
          </View>
          <View style={styles.signUpContainer}>
            <Text style={styles.signUp}>You don't have a account?</Text>
            <Text dataDetectorType="link" style={styles.signUpLink}>
              Sign UP
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },

  titleContainer: {
    alignItems: "center",
    backgroundColor: "#0000",
  },

  logo: {
    marginBottom: 20,
    width: 100,
    height: 100,
  },

  title: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "600",
  },

  inputContainer: {
    backgroundColor: "#0000",
  },

  inputWrapper: {
    overflow: "hidden",
    borderRadius: 50,
    marginTop: 25,
  },

  input: {
    height: 50,
    width: 300,
    paddingHorizontal: 30,
  },

  signUpContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#0000",
    marginTop: 10,
  },

  signUp: {
    alignSelf: "center",
    color: "#fff",
  },

  signUpLink: {
    marginLeft: 5,
    color: "#61dafb",
  },
});
