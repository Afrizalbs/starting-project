import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 12,
    margin: 8,
    borderRadius: 10,
    backgroundColor: "#e0f7fa",
    elevation: 3,
  },
  goalText: {
    color: "#00796b",
    fontSize: 16,
  },
});
