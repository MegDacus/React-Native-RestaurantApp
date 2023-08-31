import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, ActivityIndicator, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const BusinessShowScreen = ({route}) => {
    const {id} = route.params;
    const [business, setBusiness] = useState(null);

    const getBusiness = async (id) => {
        const response = await yelp.get(`/${id}`);
        setBusiness(response.data);
    };

    useEffect(() => {
        getBusiness(id);
    }, []);

    if (!business) {
        return <ActivityIndicator style={styles.spinner} size="large"/>;
    }

    return(
        <View>
            <Text style={styles.name}>{business.name}</Text>
            <FlatList
                horizontal
                data={business.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri: item }} /> 
                }}/>
            <View style={styles.contact}>
                <Text>{business.location.address1}</Text>
                <Text>{business.location.city}, {business.location.state}, {business.location.country}</Text>
                <Text>{business.display_phone}</Text>
                {business.hours.is_open_now ? 
                <Text style={{color: 'green'}}>Open Now</Text> 
                : <Text style={{color: 'red'}}>Closed</Text>
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 15
    },
    spinner: {
        marginTop: 100
    },
    image: {
        height: 200,
        width: 300,
        alignSelf: 'center',
        marginStart: 15
    },
    contact: {
        margin: 15
    }
});

export default BusinessShowScreen;