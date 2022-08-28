import React from 'react';
import './App.css';
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import BusinessPage from "../BusinessPage/BusinessPage";
import Yelp from "../../util/Yelp";
import ReactDOM from 'react-dom';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={businesses: []}
    this.searchYelp=this.searchYelp.bind(this);
    this.renderBusinessPage=this.renderBusinessPage.bind(this);
  }
  searchYelp(term, location, sortBy){
    Yelp.search(term, location, sortBy).then(businesses =>{
      this.setState({businesses: businesses})
    });
  }

  renderBusinessPage(){
    ReactDOM.render(<BusinessPage />, document.getElementById('restaurant-page'));
  }

  render(){
    return (
      <div className="App">
        <h1>vittles</h1>
        <div id="restaurant-page"></div>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} onClick={this.renderBusinessPage} />
      </div>
    );
  }
}

export default App;
