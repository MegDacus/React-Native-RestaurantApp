import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import BusinessList from "../components/BusinessList";

const SearchScreen = () => {
    const [term, setTerm ] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return ( 
        <>
            <SearchBar
                style={styles.bar} 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}/>
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            <ScrollView>
                <BusinessList results={filterResultsByPrice('$')} header="Cost Effective"/>
                <BusinessList results={filterResultsByPrice('$$')} header="Bit Pricer"/>
                <BusinessList results={filterResultsByPrice('$$$')}  header="Big Spender"/>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        marginTop: 5
    }
});

export default SearchScreen;