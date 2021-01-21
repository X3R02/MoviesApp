import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { config } from '../data/config';

const ConfigScreen = () => {

    const [configState, setConfigState] = useState(config);

    const handleChangeSelector = () => {
        if(config.selector === 'top_rated') {
            config.selector = 'popular';
        } else if (config.selector === 'popular') {
            config.selector = 'top_rated';
        }
        setConfigState({...config});
    };

    const handleLanguageChange = () => {
        if(config.lang === 'en-US') {
            config.lang = 'es-MX';
        } else if (config.lang === 'es-MX') {
            config.lang = 'en-US';
        }
        setConfigState({...config});
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLanguageChange}
                >
                    <Text style={styles.textButton}>
                        {
                            config.lang === 'en-US' ?
                            'Language' :
                            'Lenguaje'
                        }
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleChangeSelector}
                >
                    <Text style={styles.textButton}>
                        {
                            (configState.selector === 'popular') ? 
                            'Popular' :
                            'Top rated'
                        }
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 40,
    },
    button: {
        backgroundColor: '#bf42f5',
        textAlign: 'center',
        marginTop: 10,
    },
    textButton: {
        fontSize: 20,
        color: '#fff',
        padding: 10,
    }
});

export default ConfigScreen;