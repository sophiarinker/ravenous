import React from 'react';
import "./BusinessPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'

class BusinessPage extends React.Component{
  constructor(props){
    super(props);

    this.renderImageGallery=this.renderImageGallery.bind(this);
    this.renderHours=this.renderHours.bind(this);
    this.handleClose=this.handleClose.bind(this);
  }

  handleClose(){
    this.props.closePage();
  }

  renderImageGallery(){
    let images= this.props.businessExtras.photos;
    return (
      <div className="image-gallery">
        {images.map(url => (<img key={url} src={url} />))}
      </div>
    )
  }

  renderHours(){
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const hoursArray = this.props.businessExtras.hours[0].open;
    return (
      <ul className='hours'>
        {week.map((item, index) => (<li key={item}><h4>{item}</h4><p>From: {hoursArray[index].start}</p><p>To: {hoursArray[index].end}</p></li>))}
      </ul>
    )
      
  }

    render(){
      window.scrollTo({
        top: 450,
        left:  0,
        behavior: "smooth"});
        return (
            <div className="Business-page">
              <button className="ex-out" onClick={this.handleClose}> X </button>
              <div className="head">
                <h2 className="currentBusiness-title">{this.props.currentBusiness.name}</h2>
              </div>
            <div className="business-etc">
              <a target="_blank" href={this.props.currentBusiness.url}><FontAwesomeIcon icon={faGlobe} className='icon' /></a>
              <a target = "_blank" href={`https://maps.google.com/?q=${this.props.currentBusiness.address}, ${this.props.currentBusiness.city}, ${this.props.currentBusiness.state}, ${this.props.currentBusiness.zipCode}`}>
              <FontAwesomeIcon icon={faMapLocationDot} className='icon' /></a>
              <p>{this.props.currentBusiness.is_closed ? "Closed" : "Open Now"}</p>
              <p>{this.props.currentBusiness.phone}</p>
            </div>

            <div className="currentBusiness-info">
              <img src={this.props.currentBusiness.imageSrc} alt={this.props.currentBusiness.name}/>
              <div className="currentBusiness-addressreviews">
                <h4>Address:</h4>
                <p>{this.props.currentBusiness.address}</p>
                <p>{this.props.currentBusiness.city}</p>
                <p>{`${this.props.currentBusiness.state} ${this.props.currentBusiness.zipCode}`}</p>
                <h4>Categories:</h4>
                <p>{this.props.currentBusiness.category.toUpperCase()}</p>
                <h4>Rating:</h4>
                <p className="currentBusiness-rating"> {this.props.currentBusiness.rating}</p>
                <p>{`${this.props.currentBusiness.reviewCount} reviews`}</p>
              </div>
            </div>
            
              {this.renderHours()}
              
              {this.renderImageGallery()}
          </div>
        )
    }
}

export default BusinessPage;