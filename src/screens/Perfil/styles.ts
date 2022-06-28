import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: colors.white
  }
  , link: {
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  icon: {
    fontSize: 24,
    padding: 5
  },
  input: {
    fontSize: 20
  }
})


export default styles;