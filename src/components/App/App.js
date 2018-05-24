import React from 'react';
import SearchBar from './../SearchBar/SearchBar';
import SearchResults from './../SearchResults/SearchResults';
import Playlist from './../Playlist/Playlist';
// import Spotify from './../../util/Spotify';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: [{
                title: 'Let it be',
                artist: 'The Beatles',
                album: 'Let it be',
                id: 1
            }],
            playlistTracks: [],
            playlistName: ''
        }

        this.addHandler = this.addHandler.bind(this);
        this.saveHandler = this.saveHandler.bind(this);
    }

    addHandler(newTrack) {
        this.setState({
            playlistTracks: this.state.playlistTracks.concat(newTrack)
        });
    }

    saveHandler(playlistName) {
        this.setState({ playlistName });
    }

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                        <SearchResults tracks={this.state.searchResults} onAdd={this.addHandler} />
                        <Playlist tracks={this.state.playlistTracks} onSave={this.saveHandler} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
