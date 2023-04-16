import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const [goalText, setGoalText] = useState("");

  const goalInputHandler = (newText) => {
    setGoalText(newText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(goalText);
    setGoalText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          style={styles.TextInput}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title={"Cancel"} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccccc",
    padding: 16,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});

export default GoalInput;
