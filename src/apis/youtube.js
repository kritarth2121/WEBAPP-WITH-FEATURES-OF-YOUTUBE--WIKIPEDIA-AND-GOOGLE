import axios from 'axios';

const key ="AIzaSyB1so2JSVlGwiWE4u_sUFsKYPzarWcnNAQ";

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : key,
        type : 'video',
    }
});