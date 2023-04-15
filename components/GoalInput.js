import { View, TextInput, Button, StyleSheet } from "react-native";
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
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        style={styles.TextInput}
        value={goalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccccc",
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
