import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 5,
    margin: 10,
    alignItems: "center",
    width: "95%",
    padding: 10,
  },
  topicos: {
    flexDirection: "row",
  },
  topic: {
    backgroundColor: colors.white,
    margin: 5,
    borderRadius: 5,
    padding: 5
  },
  cardOrange:{
    backgroundColor:colors.red,
    margin:5,
    borderRadius: 5,
    minHeight: 100

  }
})

export default styles