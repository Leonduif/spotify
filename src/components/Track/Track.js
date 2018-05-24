import React from 'react';
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
    }

    handleAddClick() {
        console.log('handle add click');
        // const newTrack = {
        //     title: this.props.track.title,
        //     artist: this.props.track.artist,
        //     album: this.props.track.album
        // };

        // this.props.onAdd(newTrack);
    }

    handleRemoveClick() {
        console.log('handle remove click');
    }

    render() {
        const title  = this.props.track.title;
        const artist = this.props.track.artist;
        const album  = this.props.track.album;
        const button = this.props.isAdding ? <a className="Track-action" onClick={this.handleAddClick}>+</a> : <a className="Track-action" onClick={this.handleRemoveClick}>-</a>;

        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{title}</h3>
                    <p>{artist} | {album}</p>
                </div>
                {button}
            </div>
        );
    }
}

export default Track;
