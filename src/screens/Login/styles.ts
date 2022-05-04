import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.white,
    marginBottom: 20,
  },
  formRow: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor:colors.white,
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    color: colors.red,
    padding: 5
  },
  input: {
    fontSize: 18,
    padding: 5,
    width: "80%"
  },
  icon: {
    fontSize: 24,
    color: colors.black,
    padding: 10
  },
  buttonRow: {
    flexDirection:"row",
    justifyContent: "space-between",

  }
})

export default styles;