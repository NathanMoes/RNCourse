import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVis, setModalVis] = useState(false);

  const deleteGoalHandler = (id) => {
    setGoals((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  };

  const addGoalHandler = (goalText) => {
    setGoals((prev) => {
      return [...prev, { text: goalText, id: Math.random().toString() }];
    });
    setModalVis(false);
  };

  const endAddGoalHandler = () => {
    setModalVis(false);
  };

  const modleToggle = () => setModalVis(true);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title={"Add new goal"}
          color={"#5e0acc"}
          onPress={modleToggle}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalVis}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDelete={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
