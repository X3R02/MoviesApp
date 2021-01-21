import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import MovieCard from '../components/MovieCard';
import { apiUrl } from '../data/utils';
import { useFetchMovies } from '../hooks/useFetchMovies';

const MainScreen = ({navigate}) => {

    const movies = useFetchMovies(apiUrl);
    console.log(movies);

    return (
        <ScrollView style={styles.container}>
            {
                movies.loading ?
                <Text>Por favor espere</Text> :
                movies.data.results.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        url={movie.poster_path}
                        original_title={movie.original_title}
                        navigate={navigate}
                    />
                ))
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    }
});

export default MainScreen;