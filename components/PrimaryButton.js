import { Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        // style = {({pressed}) => pressed ? [styles.buttonInnerContainer, {color: 'xyz'}]: styles.buttonInnterContainer}
        android_ripple={{ color: colors.primary600 }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden", // to make the ripple effect outside the container to cut off
  },
  buttonInnerContainer: {
    backgroundColor: colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
