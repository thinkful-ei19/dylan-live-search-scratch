import React, { Component } from 'react';
import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

class LiveSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  setSearchTerm(term) {
    this.setState({
      term
    });
  }

  render() {
    const filteredCharacters = this.props.characters.filter(character => character.name.toLowerCase().includes(this.state.term));
    return (
      <div>
        <SearchForm searchTerm={term => this.setSearchTerm(term)} />
        <CharacterCount characterCount={filteredCharacters.length} />
        <CharacterList characterList={filteredCharacters} />
      </div>
    );
  }
}

export default LiveSearch;