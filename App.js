import { useState, useEffect } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [search, setSearch] = useState("");
  const [charData, setCharData] = useState([]);

  function handleSearchInput(params) {
    setSearch(params);
  }

  function getCharacterFromApi(params) {
    // alert(params);
    const options = { method: "GET" };

    fetch(
      `https://genshin-db-api.vercel.app/api/v5/characters?query=${search}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setCharData(response);
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  // useEffect(() => {}, [search]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.charInput}
          placeholder="Enter Character Name"
          value={search}
          onChangeText={(value) => handleSearchInput(value)}
        />
        <Pressable
          style={styles.searchButton}
          onPress={() => getCharacterFromApi(search)}
        >
          <Text style={styles.btnText}>SEARCH</Text>
        </Pressable>
      </View>
      <View style={styles.goalsContainer}>
        <Text>{charData.description}</Text>
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
    gap: 5,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  charInput: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    padding: 7.5,
  },
  searchButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
  },
  btnText: {
    color: "pink",
    fontWeight: "500",
    letterSpacing: 0.25,
  },
  goalsContainer: {
    flex: 8,
    // backgroundColor: "#cca",
  },
});
