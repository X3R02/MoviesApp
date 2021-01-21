import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import MovieCard from '../components/MovieCard';
import { apiUrl } from '../data/utils';
import { useFetchMovies } from '../hooks/useFetchMovies';

const MainScreen = ({navigate}) => {

    const [movies, setMovies] = useFetchMovies(apiUrl);
    const [results, setResults] = useState(movies.data);
    
    useEffect(() => {
        
        if(!movies.loading) {
            setResults({...results ,...movies.data});
        }

    }, [movies]);

    return (
        <ScrollView>
            <View style={styles.container}>
                {
                    movies.loading ?
                    <Text>Por favor espere</Text> :
                    results?.results.map((movie, i) => (
                        <View key={i}>
                            <MovieCard
                                key={movie.id}
                                url={movie.poster_path}
                                navigate={navigate}
                            />
                        </View>
                    ))
                }
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
  container: {
    alignContent: 'stretch',
    alignItems: 'stretch',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default MainScreen;