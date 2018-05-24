import React from 'react';
import TrackList from './../TrackList/TrackList';
import './Playlist.css';

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = { playlistName: 'New Playlist' };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        const newName = event.target.value;
        this.setState({
            playlistName: newName
        });
        console.log('changed playlist name');
    }

    handleClick(event) {
        event.preventDefault();
        this.props.onSave(this.state.name);
        console.log('save to spotify');
    }

    render() {
        return (
            <div className="Playlist">
                <input value={this.state.name} onChange={this.handleChange} />
                <TrackList tracks={this.props.tracks} isAdding={false} />
                <a className="Playlist-save" onClick={this.handleClick}>SAVE TO SPOTIFY</a>
            </div>
        );
    }
}

export default Playlist;