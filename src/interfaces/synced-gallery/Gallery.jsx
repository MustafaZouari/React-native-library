import { image } from "faker";
import React, { useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { API_KEY } from "./config";

import { height, width } from "../../utilities/Distances";

const API_URL = `https://api.pexels.com/v1/search?query=nature&orientation=portrait&size=small&per_page=20`;

const fetchImages = async () => {
  const data = await fetch(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  });
  const { photos } = await data.json();
  return photos;
};

const Gallery = () => {
  const [images, setImages] = React.useState(null);

  useEffect(() => {
    const fetchImagesFromPexels = async () => {
      const images = await fetchImages();
      setImages(images);
    };
    fetchImagesFromPexels();
  }, []);

  if (!images) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
        renderItem={({ item, index }) => {
          return (
            <View style={{ width, height }}>
              <Image
                source={{ uri: item.src.portrait }}
                style={[StyleSheet.absoluteFillObject]}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
export default Gallery;
