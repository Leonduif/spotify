import React from 'react';
import TrackList from './../TrackList/TrackList';
import './SearchResults.css';

class SearchResults extends React.Component {
    addHandler(newTrack) {
        this.props.onAdd(newTrack);
    }

    render() {
        console.log('search results', this.props.tracks);
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.tracks} isAdding={true} />
            </div>
        );
    }
}

export default SearchResults;
