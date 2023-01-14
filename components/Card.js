import { Dimensions, StyleSheet, View } from "react-native";
import colors from "../constants/colors";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: deviceWidth < 390 ? 18 : 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: colors.primary700,
    elevation: 4,
  },
});
