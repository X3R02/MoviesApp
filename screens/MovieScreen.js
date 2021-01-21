import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getDimensions } from '../helpers/getDimensions';

const MovieScreen = ({route, navigation}) => {

    const params = route.params;
    const image = {
        uri: `https://image.tmdb.org/t/p/w500${params.backdrop_path}`,
        cache: 'only-if-cached'
    };

    console.log(params);

    return (
        <ScrollView>
            <View style={styles.container}>
                <ImageBackground
                    source={image}
                    style={styles.image}
                >
                    <Text style={styles.text}>
                        {params.original_title}
                    </Text>
                </ImageBackground>
            </View>
        </ScrollView>
    );
};

const dimensions = getDimensions();
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: "column"
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    height: 240,
    width: dimensions.width,
    backgroundColor: '#bf42f5',
  },
  text: {
    color: '#fff',
    fontSize: 32,
    height: 240,
    width: dimensions.width,
    backgroundColor: '#000000a0',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default MovieScreen;