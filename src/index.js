import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = "AIzaSyDa5L8MFDBLAp5A-JiVtR9F0oZh0Oksivk";
//components
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';

class App  extends Component{
    constructor(props) {
        super(props);
        this.state = {
            videos : [],
            selectedVideo : null
        }
        this.videoSearch('music');
    }

    videoSearch(term){
        YTSearch({
            key: API_KEY,
            term
        },(videos)=>{
            console.log({videos});
            this.setState({
                videos,
                selectedVideo : videos[0]
            });
        })
    }

    render() {
        const videoSearch = _.debounce(term => this.videoSearch(term), 500);
        return (
            <div>
                <SearchBar
                    onSearchInput={term => videoSearch(term)}
                />
                <VideoDetails video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={ video => {this.setState({selectedVideo:video})} }
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App />, document.querySelector(".container")
);