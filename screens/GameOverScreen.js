import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  return (
    <View style={styles.rootContainer}>
      <Title>LOL!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/gameOver.png")}
        />
      </View>
      <View style={styles.sumamryContainer}>
        <Text style={styles.sumamryText}>
          Your phone needed {roundsNumber} rounds to guess the number{" "}
          {userNumber}.
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    marginTop: 50,
    // justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    borderColor: "white",
    borderWidth: 3,
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  sumamryContainer: {
    padding: 24,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "white",
    marginBottom: 24,
  },
  sumamryText: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
});
