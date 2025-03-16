import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function handleSearchInput(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoal() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.charInput}
        placeholder="Enter Goal"
        value={enteredGoalText}
        onChangeText={(value) => handleSearchInput(value)}
      />
      <Pressable
        style={styles.searchButton}
        onPress={addGoal}
        disabled={enteredGoalText.trim().length === 0}
      >
        <Text style={styles.btnText}>Add Goal</Text>
      </Pressable>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
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
});
