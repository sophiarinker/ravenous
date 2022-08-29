import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';
import BusinessPage from "../BusinessPage/BusinessPage";

class BusinessList extends React.Component{
    constructor(props){
        super(props);

        this.state= {showBusinessPage: false}

        this.renderBusinessPage=this.renderBusinessPage.bind(this);
    }

    renderBusinessPage(){
        this.setState({showBusinessPage: true})
      }

    render(){
        return (
            <div>
                <div id="restaurant-page">
                    {this.state.showBusinessPage ? <BusinessPage />: <span></span>}
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