import axios from 'axios';

const KEY = 'AIzaSyCzxthSXubY4v7UrSXZFp8KL2XQ1SDrvRI';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 7,
		key: KEY
	}
});
