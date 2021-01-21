import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const percentualWindow = (width * height) / 10000;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "35%",
    marginTop: "-5%",
  },
  stats: {
    width: "100%",
    height: "65%",
    alignItems: "center",
    paddingTop: "3%",
  },
  title: {
    fontSize: 32,
    fontFamily: "Ubuntu_700Bold",
    color: "#00622f",
    marginBottom: "5%",
  },
  unitInfo: {
    width: "75%",
    backgroundColor: "#fff",
    height: "10%",
    elevation: 3,
    borderRadius: 8,
    paddingHorizontal: "3%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",

    marginVertical: "5%",
  },
  name: {
    fontSize: 24,
    fontFamily: "Roboto_500Medium",
    color: "#00622f",
  },
  value: {
    fontSize: 24,
    fontFamily: "Roboto_500Medium",
    color: "#00622f",
  },
  buttonTakePhoto: {
    width: percentualWindow * 3,
    height: percentualWindow * 3,
    backgroundColor: "#00622f",
    borderRadius: percentualWindow * 2,
    marginTop: "20%",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "7%",
  },
});

export default styles;
