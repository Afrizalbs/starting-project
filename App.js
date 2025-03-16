import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [search, setSearch] = useState("");
  const [goals, setGoals] = useState([]);

  function handleSearchInput(params) {
    setSearch(params);
  }

  function addGoal() {
    setGoals((currentGoals) => [...currentGoals, search]);
    // setSearch("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.charInput}
          placeholder="Enter Goal"
          value={search}
          onChangeText={(value) => handleSearchInput(value)}
        />
        <Pressable
          style={styles.searchButton}
          onPress={addGoal}
          disabled={search.trim().length === 0}
        >
          <Text style={styles.btnText}>Add Goal</Text>
        </Pressable>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(data) => {
            return <GoalItem text={data.item} />;
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
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  charInput: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 7.5,
    paddingVertical: 11,
  },
  searchButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 11,
    paddingHorizontal: 16,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
  },
  btnText: {
    color: "#00796b",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 0.25,
  },
  goalsContainer: {
    flex: 5,
  },
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
