import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const percentualWindow = (width * height) / 10000;

const styles = StyleSheet.create({
  flexComponent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  externalButton: {
    width: percentualWindow * 2.5,
    height: percentualWindow * 2.5,
    borderRadius: percentualWindow * 2,
    backgroundColor: "#fff",
    alignSelf: "flex-end",
    marginBottom: "6%",
    alignItems: "center",
    justifyContent: "center",
  },
  internalButton: {
    width: percentualWindow * 2.15,
    height: percentualWindow * 2.15,
    borderRadius: percentualWindow * 2,
    borderColor: "#00622f",
    borderWidth: percentualWindow * 0.07,
  },
  closeModal: {
    width: percentualWindow * 2.5,
    height: percentualWindow * 2.5,
    borderRadius: percentualWindow * 2,
    backgroundColor: "#f80",
    alignSelf: "flex-end",
    marginBottom: "6%",
    alignItems: "center",
    justifyContent: "center",
  },
  textLoading: {
    position: "absolute",
    left: "27%",
    top: "65%",
    fontSize: 24,
    marginLeft: "4%",
    fontFamily: "Ubuntu_700Bold",
    color: "#00622f",
  },
});

export default styles;
