import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Modal,
  Image,
} from "react-native";
import ListImage from "../assets/list.png";

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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={ListImage} style={styles.image} />
        <TextInput
          style={styles.charInput}
          placeholder="Enter Goal"
          value={enteredGoalText}
          onChangeText={(value) => handleSearchInput(value)}
        />
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={addGoal}
            disabled={enteredGoalText.trim().length === 0}
          >
            <Text style={styles.btnText}>Add Goal</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={props.onCancel}>
            <Text style={styles.btnTextCancel}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#007074",
  },
  charInput: {
    width: "100%",
    borderColor: "#FFC1B4",
    backgroundColor: "#D1F8EF",
    color: "#00796b",
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 7.5,
    paddingVertical: 11,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 11,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    width: "40%",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#D1F8EF",
  },
  btnText: {
    color: "#00796b",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 0.25,
  },
  btnTextCancel: {
    color: "#F38C79",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 0.25,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
});
