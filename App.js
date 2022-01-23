import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello React Native World!</Text>
      <TextInput placeholder="Enter message" style={styles.input} />
      <Button title="Send"></Button>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
});
