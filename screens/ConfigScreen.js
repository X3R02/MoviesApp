import React from 'react';
import { Button, ScrollView, StyleSheet, View } from 'react-native';

const ConfigScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Button color="#bf42f5" title="Languaje"/>
                <Button color="#bf42f5" title="Popular"/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 30,
    },
});

export default ConfigScreen;