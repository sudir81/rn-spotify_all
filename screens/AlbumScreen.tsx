import { useRoute } from "@react-navigation/core";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {}, []);
  return (
    <View>
      <Text style={styles.title}>ALbum Screen</Text>
    </View>
  );
};

export default AlbumScreen;

const styles = StyleSheet.create({
  title: {
    color: "white",
  },
});
