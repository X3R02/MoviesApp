import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { getDimensions } from '../helpers/getDimensions';

const MovieCard = ({url}) => {

    const image = { uri: `https://image.tmdb.org/t/p/w500${url}` };
    
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image}/>
        </View>
    );
};

const dimensions = getDimensions();
const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: dimensions.height / 2,
    width: dimensions.width / 2,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // height: dimensions.height / 2,
    // width: dimensions.width / 2,
  },
});

export default MovieCard;