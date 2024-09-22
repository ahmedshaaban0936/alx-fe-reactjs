// src/services/githubService.js

import axios from 'axios';

export const fetchUserData = async (username = '', location = '', minRepos = '') => {
    // Build the query based on the provided parameters
    const query = [];

    if (username) query.push(`user:${username}`);
    if (location) query.push(`location:${location}`);
    if (minRepos) query.push(`repos:>${minRepos}`);

    try {
        // Make the API call with the constructed query
        const response = await axios.get(`https://api.github.com/search/users?q=${query.join(' ')}`);
        
        // Return the list of users from the response
        return response.data.items;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return []; // Return an empty array in case of an error
    }
};
