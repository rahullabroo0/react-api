// import {jest} from '@jest/globals';
const componentDidMount = require('./App');
const axios = require('axios');
// require('react-jsx');

jest.mock('axios');

axios.post('https://jsonplaceholder.typicode.com/albums', {
    id: 3,
    title: 'Album with a Vengeance'
})
