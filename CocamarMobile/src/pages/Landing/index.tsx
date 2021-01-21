import React, { useState, useEffect } from "react";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import { Text, View, Image, SafeAreaView, Alert } from "react-native";
import styles from "./styles";

const Landing = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);

  async function openCamera() {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      navigation.navigate("Camera");
    } else {
      Alert.alert(
        "Oops!",
        "Precisamos de sua permissão para usar a câmera",
        [
          {
            text: "Tudo bem!",
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.logoImg}
          resizeMode="contain"
          source={require("../../assets/cocamar-logo.png")}
        ></Image>
        <Text style={styles.logoTxt}>Cocamar</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionTitle}>
          Sua ferramenta para{"\n"}reconhecimento{"\n"}de pragas
        </Text>
        <Text style={styles.descriptionSubtitle}>
          Usamos inteligência artificial para{"\n"}identificar pragas em
          plantações
        </Text>
      </View>
      <RectButton onPress={openCamera} style={styles.button}>
        <View style={styles.buttonIcon}>
          <Icon name="arrow-right" size={24} color="#fff"></Icon>
        </View>
        <Text style={styles.buttonText}>
          <Text>Vamos lá!</Text>
        </Text>
      </RectButton>
    </SafeAreaView>
  );
};

export default Landing;
