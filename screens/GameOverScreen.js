import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width < 390) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView styles={styles.screen}>
      <View
        style={[styles.rootContainer, { marginTop: height < 400 ? 20 : 50 }]}
      >
        <Title>LOL!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
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
    </ScrollView>
  );
}

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: { flex: 1 },
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 390 ? 150 : 300,
    // height: deviceWidth < 390 ? 150 : 300,
    // borderRadius: deviceWidth < 390 ? 75 : 150,
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
