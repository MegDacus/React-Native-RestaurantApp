import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [term, setTerm ] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return ( 
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}/>
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            <Text style={{marginStart: 15, marginTop: 5}}>We have found {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        marginStart: 15,
        marginTop: 5
    }
});

export default SearchScreen;