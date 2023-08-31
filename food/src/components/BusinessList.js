import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import BusinessCard from "./BusinessCard";
import { useNavigation } from '@react-navigation/native'

const BusinessList = ({header, results}) => {
    const navigation = useNavigation()
    
    if (!results.length) {
        return null;
    }

    return(
        <View style={styles.container}>
            <Text style={styles.header}>{header}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("Business", {id: item.id})}>
                            <BusinessCard business={item}/>
                        </TouchableOpacity>
                    )
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginStart: 15,
        marginBottom: 5
    }
})

export default BusinessList;