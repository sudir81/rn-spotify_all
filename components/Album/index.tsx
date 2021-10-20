import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { album } from "../types";

const Album = (props: album) => {
  const navigation = useNavigation();

  const onPress = () => {
    console.warn(`${props.albumData.artistsHeadline} album pressed`);
    navigation.navigate("AlbumScreen", {
      id: props.albumData.id,
      headline: props.albumData.artistsHeadline,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{ uri: props.albumData.imageUri }}
          style={styles.image}
        />
        <Text style={styles.text}>{props.albumData.artistsHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Album;

const styles = StyleSheet.create({
  container: {
    width: 155,
    margin: 10,
  },
  image: {
    width: "100%",
    height: 155,
  },
  text: {
    color: "grey",
    marginTop: 10,
  },
});
