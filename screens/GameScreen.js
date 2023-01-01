import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import GuessLogItem from "../components/GuessLogItem";

function generateRandomNumber(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  }
  return rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  // console.log("rendered!");
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  // every time a new number is guessed the component rerenders
  // so when the guessNumber === useNumber then the funciton rerenders
  // once more which causes the function:
  // generateRandomNumber(minBoundary, MaxNumber, userNumber) to run infinitely
  // because minBoundary is equal to maxBoundary
  // so we hard code this here
  // we can also use the useMemo hook :D

  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (direction === "lower" && currentGuess > userNumber) {
      maxBoundary = currentGuess - 1;
    } else if (direction === "greater" && currentGuess < userNumber) {
      minBoundary = currentGuess + 1;
    } else {
      Alert.alert("Don't lie!", "You know the correct answer...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    const newRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setGuessRounds((prevGuessRounds) => [newRandomNumber, ...prevGuessRounds]);
  }

  const totalRounds = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView style={styles.scrollableContainer}>
          {guessRounds.map((guessRound, idx) => (
            <GuessLogItem roundNumber={totalRounds - idx} guess={guessRound} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 50,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  scrollableContainer: {
    paddingRight: 10,
  },
});
