import { Text, View, StyleSheet, Dimensions } from "react-native";
import colors from "../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    padding: deviceWidth < 390 ? 12 : 24,
    margin: deviceWidth < 390 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontSize: deviceWidth < 390 ? 28 : 36,
    fontWeight: "bold",
  },
});
