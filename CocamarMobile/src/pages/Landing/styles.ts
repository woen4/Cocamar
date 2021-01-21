import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const percentualWindow = (width * height) / 10000;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: "8%",
    paddingRight: "8%",
  },
  logoImg: {
    width: percentualWindow * 2,
    height: percentualWindow * 2,
  },
  logo: {
    flexDirection: "row",
    marginTop: "24%",
    alignItems: "center",
  },
  logoTxt: {
    fontSize: 32,
    marginLeft: "4%",
    fontFamily: "Ubuntu_700Bold",
    color: "#00622f",
  },
  description: {
    marginTop: "16%",
    justifyContent: "space-between",
    height: "20%",
  },
  descriptionTitle: {
    fontSize: 32,
    fontFamily: "Ubuntu_700Bold",
    color: "#00622f",
  },
  descriptionSubtitle: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    color: "#6C6C80",
  },
  button: {
    backgroundColor: "#00622f",
    height: "7.5%",
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: "116%",
    alignSelf: "flex-end",
  },

  buttonIcon: {
    height: "100%",
    width: "20%",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
});

export default styles;
