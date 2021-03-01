import React from "react";
import { useEffect } from "react";
import { View, Text } from "react-native";
import { API_KEY } from "./config";

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
  const [images, setImages] = React.useState([]);

  useEffect(() => {
    const fetchImagesFromPexels = async () => {
      const images = await fetchImages();
      console.log(images);
    };
    fetchImagesFromPexels();
  }, []);

  return (
    <View>
      <Text>GAllery</Text>
    </View>
  );
};

export default Gallery;
