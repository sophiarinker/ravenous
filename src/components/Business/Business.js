import React from 'react';
import './Business.css';


class Business extends React.Component{
  constructor(props){
    super(props);

    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(e){
    let currentBusiness= this.props.business;
    this.props.onClick(currentBusiness);
}
    render(){
        return (
          <div className="Business">
            <div className="image-container">
                <img src={this.props.business.imageSrc} alt={this.props.business.name} onClick={this.handleClick}/>
            </div>
              <h2>{this.props.business.name}</h2>
            <div className="Business-information">
              <div className="Business-address">
                <a target = "_blank" href={`https://maps.google.com/?q=${this.props.business.address}, ${this.props.business.city}, ${this.props.business.state}, ${this.props.business.zipCode}`}>
                  <p>{this.props.business.address}</p>
                  <p>{this.props.business.city}</p>
                  <p>{`${this.props.business.state} ${this.props.business.zipCode}`}</p>
                </a>
                <p>{this.props.business.phone}</p>
              </div>
              <div className="Business-reviews">
                <h3>{this.props.business.category.toUpperCase()}</h3>
                <h3 className="rating">{this.props.business.rating}</h3>
                <p>{`${this.props.business.reviewCount} reviews`}</p>
                <p>{this.props.business.is_closed ? "Closed" : "Open Now"}</p>
              </div>
            </div>
          </div>
        );
    }
}

export default Business;