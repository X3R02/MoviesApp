import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import MovieCard from '../components/MovieCard';
import { config } from '../data/config';
import { useFetchMovies } from '../hooks/useFetchMovies';

const MainScreen = ({navigation, route}) => {

    const [movies] = useFetchMovies(route.params.apiUrl);
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
                                navigate={navigation.navigate}
                                movie={movie}
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