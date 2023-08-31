import React from "react";
import {View, Image, Text, StyleSheet} from 'react-native';

const BusinessCard = ({business}) => {

    return(
        <View style={styles.card}>
            <Image style={styles.image} source={{ uri: business.image_url }}/>
            <Text style={styles.name}>{business.name.length > 27 ? business.name.slice(0, 27) + '...' : business.name}</Text>
            <Text>{business.rating} Stars, {business.review_count} Reviews</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        marginStart: 15
    },
    image: {
        width: 200,
        height: 130,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
    }
});

export default BusinessCard;