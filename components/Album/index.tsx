import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { album } from "../types";

export type AlbumProps = {
  album: { id: string; imageUri: string; artistsHeadline: string };
};

const Album = (props: album) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.albumData.imageUri }} style={styles.image} />
      <Text style={styles.text}>{props.albumData.artistsHeadline}</Text>
    </View>
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
