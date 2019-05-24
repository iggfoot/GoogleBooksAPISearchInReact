import React from 'react';
import Results from './Results';

class Search extends React.Component {
    state = {
        items: [],
        searchData:  ""
    };

    getSearchData = (textEntered) =>  {
        this.setState({
            searchData: textEntered
        }) 
    }
    getBookApiData() {
        fetch('https://www.googleapis.com/books/v1/volumes?q=flowers&key=AIzaSyA89crpu-JFdCvqPCmeT_Actax5YxdzfZ0')
        .then(response => response.json())
        .then(books => this.setState({items:books.items}))
    }

    render() {
        return (
        <div>
            <label>SEARCH</label>
            <input type="text"></input>
            <button>Search Here</button>
            <label>Print Type</label>
            <input type="text"></input>
            <label>Book Type</label>
            <input type="text"></input>
            <Results bookData={this.state.items}/>
        </div>
        )
    }

}

export default Search;