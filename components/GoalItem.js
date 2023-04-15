import { StyleSheet, View, Text } from "react-native";

const GoalItem = () => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalItemText}>{itemData.item.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    color: "white",
  },
});

export default GoalItem;
