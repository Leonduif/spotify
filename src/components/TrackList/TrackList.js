import React from 'react';
import Track from './../Track/Track';
import './TrackList.css';

class TrackList extends React.Component {
    render() {

        const tracks = this.props.tracks.map(track => {
            return <Track key={track.id} track={track} isAdding={this.props.isAdding} />;
        });

        return (
            <div className="TrackList">
                {tracks}
            </div>
        );
    }
}

export default TrackList;
