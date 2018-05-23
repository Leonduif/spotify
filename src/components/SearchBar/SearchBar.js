import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { searchValue: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event) {
        event.preventDefault();
        console.log('handle search', this.state.searchValue);
    }

    handleChange(event) {
        const newSearchValue = event.target.value;
        this.setState({
            searchValue: newSearchValue
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song Title" value={this.state.searchValue} onChange={this.handleChange} />
                <a onClick={this.handleSearch}>SEARCH</a>
            </div>
        );
    }
}

export default SearchBar;
