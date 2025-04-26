import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function showModal() {
    setIsModalVisible(true);
  }

  function closeModal() {
    setIsModalVisible(false);
  }

  function addGoal(enteredGoalText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
    closeModal();
  }

  function removeGoal(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Button title="Add New Goal" color="#00796b" onPress={showModal} />
      <GoalInput
        onAddGoal={addGoal}
        onCancel={closeModal}
        visible={isModalVisible}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(data) => {
            return (
              <GoalItem
                id={data.item.id}
                text={data.item.text}
                onDeleteItem={removeGoal}
              />
            );
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
