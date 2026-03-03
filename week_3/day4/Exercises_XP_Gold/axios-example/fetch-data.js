const axios = require('axios');

async function fetchPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const data = await response.data;
        data.map((data)=>{
            console.log("title of post: ",data.title);
        })
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = {fetchPosts};