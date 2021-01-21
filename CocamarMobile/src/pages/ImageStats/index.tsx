import React, { useEffect, useState, useCallback } from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";
import styles from "./styles";
import { AppLoading } from "expo";

interface ImageStatsProps {
  imageUri: string;
  images: [
    {
      classifiers: [
        {
          classes: [
            {
              class: string;
              score: number;
            }
          ];
        }
      ];
    }
  ];
}

const ImageStats: React.FC = () => {
  const navigation = useNavigation();

  const [pragas, setPragas] = useState<number[]>([]);
  const imageInfo = useRoute().params as ImageStatsProps;

  const loadStats = () => {
    const classes = imageInfo.images[0].classifiers[0].classes;
    let praga = [0, 0, 0, 0];
    classes.forEach((classModel) => {
      const score = Math.round(classModel.score * 100);
      if (classModel.class === "lagarta_da_soja") {
        praga[0] = score;
      } else if (classModel.class === "percevejo_marrom") {
        praga[1] = score;
      } else if (classModel.class === "percevejo_verde") {
        praga[2] = score;
      } else if (classModel.class === "percevejo_pequeno") {
        praga[3] = score;
      }
    });
    setPragas(praga);
  };
  useEffect(() => {
    loadStats();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <>
        <Image style={styles.image} source={{ uri: imageInfo.imageUri }} />
        <View style={styles.stats}>
          <Text style={styles.title}>Estatísticas</Text>
          <View style={styles.unitInfo}>
            <Text style={styles.name}>Lagarta da soja: </Text>
            <Text style={styles.value}>{pragas[0]}%</Text>
          </View>
          <View style={styles.unitInfo}>
            <Text style={styles.name}>Percevejo marrom: </Text>
            <Text style={styles.value}>{pragas[1]}%</Text>
          </View>
          <View style={styles.unitInfo}>
            <Text style={styles.name}>Percejo verde: </Text>
            <Text style={styles.value}>{pragas[2]}%</Text>
          </View>
          <View style={styles.unitInfo}>
            <Text style={styles.name}>Percevejo pequeno: </Text>
            <Text style={styles.value}>{pragas[3]}%</Text>
          </View>
          <RectButton
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.buttonTakePhoto}
          >
            <Icon name="camera" size={28} color="#fff"></Icon>
          </RectButton>
        </View>
      </>
    </SafeAreaView>
  );
};

export default ImageStats;
