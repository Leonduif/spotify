import React from 'react';
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('handle click');
        const newTrack = {
            title: this.props.track.title,
            artist: this.props.track.artist,
            album: this.props.track.album
        };

        // this.props.onAdd(newTrack);
    }

    render() {
        const title  = this.props.track.title;
        const artist = this.props.track.artist;
        const album  = this.props.track.album;

        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{title}</h3>
                    <p>{artist} | {album}</p>
                </div>
                <a className="Track-action" onClick={this.handleClick}>+</a>
            </div>
        );
    }
}

export default Track;
