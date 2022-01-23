import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image,
} from "react-native";

export default App = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (text) => setLogin(text);
  const passwordHandler = (text) => setPassword(text);

  // const loadFonts = async () => {
  //   await Font.loadAsync({
  //     "Roboto-Regulat": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  //     "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  //   });
  // };

  const onLogin = () => {
    Alert.alert("Credentials", `login: ${login}, password: ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* <Image
          source={{ uri: "https://reactjs.org/logo-og.png" }}
          style={{ width: 70, height: 70 }}
        /> */}
        <Text>Hello React Native World!</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            autoFocus
            value={login}
            placeholder="Enter login"
            style={styles.input}
            onChangeText={loginHandler}
          />
        </KeyboardAvoidingView>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            secureTextEntry={true}
            value={password}
            placeholder="Enter password"
            style={styles.input}
            onChangeText={passwordHandler}
          />
        </KeyboardAvoidingView>

        <Button title="Log in" onPress={onLogin} style={styles.btn}></Button>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: "relative",
    fontFamily: "Roboto-Regular",
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: "#000",
      },
      android: {
        backgroundColor: "#fff",
      },
    }),
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,

    padding: 10,
    // borderBottomColor: "#000",
  },
  btn: {
    // width: 500,
    marginTop: 30,
    padding: 10,
  },
});
