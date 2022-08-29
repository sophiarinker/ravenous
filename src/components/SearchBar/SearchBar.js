import React from 'react';
import "./SearchBar.css";

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            term: "",
            location: "",
            sortBy: 'best_match'
        };

        this.handleSortByChange=this.handleSortByChange.bind(this);
        this.handleTermChange=this.handleTermChange.bind(this);
        this.handleLocationChange=this.handleLocationChange.bind(this);
        this.handleSearch=this.handleSearch.bind(this);
        this.handleSearchEnter=this.handleSearchEnter.bind(this);

        this.sortByOptions ={
            "Best Match": "best_match",
            "Highest Rated": "rating",
            "Most Reviewed": "review_count",
            "Near By": "distance"
        };
    }

    getSortByClass(sortByOption){
        if(this.state.sortBy === sortByOption){
            return 'active';
        }
            return "";
    }

    handleSortByChange(sortByOption){
        this.setState({sortBy : sortByOption});
        this.handleSearch();
    }

    handleTermChange(e){
        this.setState({term: e.target.value})
    }

    handleLocationChange(e){
        this.setState({location: e.target.value})
    }

    handleSearch(e){
        if(this.state.location != ""){
            this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        }else{
            alert("Please enter a location for your search")
        }
        
    }

    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(sortByOption =>{
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return (<li 
            className={this.getSortByClass(sortByOptionValue)} 
            key={sortByOptionValue}
            onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                {sortByOption}
                </li>);

        });
    }

    handleSearchEnter(e){
        if(e.key == "Enter"){
            this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
            e.preventDefault();
        } 
      }

    componentDidMount(){
        document.body.onkeydown = this.handleSearchEnter;
    }

    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Restaurants" onChange={this.handleTermChange} />
                    <input placeholder="Location" onChange={this.handleLocationChange}/>
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's eat</a>
                </div>
            </div>
        );
    };
};

export default SearchBar;