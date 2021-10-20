import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Album from "../Album";
import { albumCategory } from "../types";

const AlbumCategory = (props: albumCategory) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.albumCategory.title}</Text>
      <FlatList
        data={props.albumCategory.albums}
        renderItem={({ item }) => <Album albumData={item} />}
        horizontal={true}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default AlbumCategory;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  },
});
