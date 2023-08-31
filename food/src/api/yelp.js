import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer tpj_vkZ3VrsU1uBge5_REQteM-M2hkoA4RCyvNUiOTGebO6y06SOjLG5oOkYXGwq3cWwzMCrQXFp9N0vRFeNrC8pjWtOwi_-s4BKHlJShOgxlOvVCN1AZSXLdujuZHYx'
    }
});