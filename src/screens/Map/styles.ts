import {StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create  ({
   container: {
       flex: 1,
       alignItems: "center",
       justifyContent: "center",
    padding: 20
  },

  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
 Map: {
   width: Dimensions.get("window").width,
   height: Dimensions.get("window").height,
  },
  posicao: {
    justifyContent: 'center',
    position: "absolute",
    top:10,
    left: 35,
    zIndex: 1,
    width: "85%"
  },
  google: {
    width: Dimensions.get("window").width,
  },
  rowSearch: {
    flexDirection:'row',
    justifyContent: 'space-between',
    backgroundColor: colors.red,
    borderRadius: 5,
    margin: 5,
    alignItems: "center",
    width: "50",
    height:10,
  },
  input:{
    width: "76%"
  },
  icon: {
    fontSize: 24,
    padding: 5
  },
  
})

export default styles