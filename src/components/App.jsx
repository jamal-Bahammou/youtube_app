import React from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';

const KEY = 'AIzaSyCzxthSXubY4v7UrSXZFp8KL2XQ1SDrvRI';

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onTermSubmit('nayeon');
	}

	onTermSubmit = async term => {
		const reponse = await youtube.get('/search', {
			params: {
				q: term,
				part: 'snippet',
				maxResults: 7,
				key: KEY
			}
		});
		this.setState({
			videos: reponse.data.items,
			selectedVideo: reponse.data.items[0]
		});
	};

	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className='ui container' style={{ marginTop: '10px' }}>
				<SearchBar onTermSubmit={this.onTermSubmit} />
				<div className='ui grid'>
					<div className='ui row'>
						<div className='eleven wide column'>
							{this.state.selectedVideo && (
								<VideoDetail video={this.state.selectedVideo} />
							)}
						</div>
						<div className='five wide column'>
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={this.state.videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
