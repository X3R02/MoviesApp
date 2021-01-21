import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import configData from '../data/config.json';

const ConfigScreen = () => {

    const handleChangeSelector = () => {
        if(configdata.lang === 'en-US') {
            configData.lang = 'es-MX';
        } else if (configData.lang === 'es-MX') {
            configData.lang = 'en-US';
        }
        console.log(configData);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.textButton}>
                        Language
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleChangeSelector}
                >
                    <Text style={styles.textButton}>
                        Popular
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