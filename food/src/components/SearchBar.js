import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {

    return ( 
        <View style={styles.bar}>
            <Ionicons style={styles.icon} name="search" />
            <TextInput 
            style={styles.input}
            placeholder="Search Bar"
            value={term}
            onChangeText={onTermChange}
            autoCapitalize="none"
            autoCorrect={false}
            onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 15
    },
    input: {
        fontSize: 18,
        flex: 1
    },
    icon: {
        fontSize: 30,
        marginHorizontal: 15,
        alignSelf: 'center'
    }
});

export default SearchBar;