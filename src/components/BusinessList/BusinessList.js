import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';
import BusinessPage from "../BusinessPage/BusinessPage";
import Yelp from "../../util/Yelp";

class BusinessList extends React.Component{
    constructor(props){
        super(props);

        this.state= {showBusinessPage: false,
        currentBusiness: ""}

        this.renderBusinessPage=this.renderBusinessPage.bind(this);
        this.closePage=this.closePage.bind(this);
    }

    renderBusinessPage(currentBusiness){
        Yelp.fetchBusiness(currentBusiness.id).then(response =>{
            this.setState({showBusinessPage: true,
                currentBusiness: currentBusiness,
                businessExtras: response
            })
        })
        
      }
    
    closePage(){
        this.setState({showBusinessPage: false});
    }

    render(){
        return (
            <div>
                <div id="restaurant-page">
                    {this.state.showBusinessPage ? <BusinessPage currentBusiness={this.state.currentBusiness} businessExtras={this.state.businessExtras} closePage={this.closePage} />: <span></span>}
                </div>
                <div className="BusinessList">
                    {
                    this.props.businesses.map((business) => {
                        return <Business key={business.id} business={business} onClick={this.renderBusinessPage}/>
                    })
                    }
                </div>
            </div>
        );
    }
}

export default BusinessList;