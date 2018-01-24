import * as React from 'react';
import SearchResultList from "../views/lists/SearchResultList";
import SearchRepository from "../../repositories/search/SearchRepositoryImpl";
import SearchResult from "../../repositories/models/SearchResult";


class App extends React.Component {
    searchResult: Array<SearchResult> = [];
    searchValue: string;

    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="input-group w-75 mx-auto p-5">
                        <input onChange={this.onChangeInput.bind(this)}
                               onKeyDown={this.onKeyDownInput.bind(this)}
                               type="text"
                               className="form-control"
                               placeholder="Search crypto currencies, projects or transactions hash"/>
                        <span className="input-group-btn">
                            <button onClick={this.doSearch.bind(this)} className="btn btn-primary"
                                    type="button">Crypto search!</button>
                        </span>
                    </div>
                    <SearchResultList result={this.searchResult}/>
                </div>
            </div>
        );
    }

    onKeyDownInput(event: any) {
        if (event.keyCode == 13) {
            this.doSearch();
        }
    }

    onChangeInput(event: any) {
        this.searchValue = event.target.value;
    }

    doSearch() {
        console.log("load!");
        this.searchResult.length = 0;
        this.setState({speed: this.searchResult});

        SearchRepository.doSearch(this.searchValue, 1, 100).then((items) => {
            for (let value of items) {
                this.searchResult.push(value);
            }
            this.setState({speed: this.searchResult});
        });
    }
}

export default App;
