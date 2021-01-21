import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import MovieCard from '../components/MovieCard';
import { apiUrl } from '../data/utils';
import { getDimensions } from '../helpers/getDimensions';
import { useFetchMovies } from '../hooks/useFetchMovies';

const MainScreen = ({navigate}) => {

    const movies = useFetchMovies(apiUrl);
    console.log(movies);

    return (
        <ScrollView>
            <View style={styles.container}>
                {
                    movies.loading ?
                    <Text>Por favor espere</Text> :
                    movies.data.results.map((movie, i) => (
                        <View style={styles.containerImages}>
                            <MovieCard
                                key={movie.id}
                                url={movie.poster_path}
                                navigate={navigate}
                            />
                            <MovieCard
                                key={movie[i + 1]?.id}
                                url={movie[i + 1]?.poster_path}
                                navigate={navigate}
                            />
                        </View>
                    ))
                }
            </View>
        </ScrollView>
    );
};

const dimensions = getDimensions();
const styles = StyleSheet.create({
  container: {
    alignContent: 'stretch',
    alignItems: 'stretch',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 'auto',
    width: 'auto',
  },
  containerImages: {
    // flex: 1,
    // flexDirection: 'row',
    // height: dimensions.height,
    // width: dimensions.width,
  }
});

export default MainScreen;