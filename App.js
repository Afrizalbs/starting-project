import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoal(enteredGoalText) {
    setGoals((currentGoals) => [...currentGoals, enteredGoalText]);
  }

  function removeGoal(goal) {
    console.log("deleted");
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoal} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(data) => {
            return <GoalItem text={data.item} onDeleteItem={removeGoal} />;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    height: 200,
  },
  goalsContainer: {
    flex: 5,
  },
});
