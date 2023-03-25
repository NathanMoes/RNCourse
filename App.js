import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{ margin: 10, borderColor: "red", borderWidth: 2, padding: 10 }}
      >
        Communism was a mistake! Capitalism will reign!
      </Text>
      <Button title="click me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
