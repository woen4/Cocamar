import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import styles from "./styles";
import LottieView from "lottie-react-native";
import axios from "axios";

const CameraScreen: React.FC = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const [cameraRef, setCameraRef] = useState();

  async function takePicture() {
    setModalVisible(!modalVisible);
    const photo = await cameraRef.takePictureAsync({
      base64: true,
    });

    const data = {
      image: photo.base64,
    };

    const response = await axios.post(
      "https://cocamar.herokuapp.com/classify-image",
      data
    );
    response.data.imageUri = photo.uri;

    navigation.navigate("ImageStats", response.data);
    setModalVisible(false);
  }

  return (
    <View style={styles.flexComponent}>
      <Modal
        animationType="fade"
        transparent={false}
        hardwareAccelerated
        visible={modalVisible}
        statusBarTranslucent
      >
        <LottieView
          autoPlay
          style={{
            backgroundColor: "#B8F4BB",
            flex: 1,
          }}
          source={require("../../assets/ai-lottie.json")}
        />
        <Text style={styles.textLoading}>Carregando...</Text>
      </Modal>
      <Camera
        ref={(ref) => {
          setCameraRef(ref);
        }}
        style={styles.flexComponent}
        type={Camera.Constants.Type.back}
      >
        <TouchableOpacity
          style={styles.externalButton}
          onPress={() => takePicture()}
        >
          <View style={styles.internalButton}></View>
        </TouchableOpacity>
      </Camera>
    </View>
  );
};

export default CameraScreen;
