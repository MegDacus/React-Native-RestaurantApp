import { useEffect, useState } from "react";
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('hi there!')
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    location: 'san jose',
                    limit: 50
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Uh oh! There was a problem with your search.')
        }
    };

    useEffect(() => {
        searchApi('pasta')
    }, []);

    return [searchApi, results, errorMessage];
};