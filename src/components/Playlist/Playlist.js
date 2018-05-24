import React from 'react';
import TrackList from './../TrackList/TrackList';
import './Playlist.css';

class Playlist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'New Playlist'
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const newName = event.target.value;
        this.setState({
            name: newName
        });
        console.log('changed playlist name');
    }

    render() {
        return (
            <div className="Playlist">
                <input value={this.state.name} onChange={this.handleChange} />
                <TrackList tracks={this.props.tracks} />
                <a className="Playlist-save">SAVE TO SPOTIFY</a>
            </div>
        );
    }
}

export default Playlist;