import React from 'react';
import ReactDOM from 'react-dom';
import './BusinessList.css';
import Business from '../Business/Business';
import BusinessPage from "../BusinessPage/BusinessPage";

class BusinessList extends React.Component{
    handleClick(ID){
        this.props.selectBusiness(ID);
    }

    renderBusinessPage(ID){
        ReactDOM.render(<BusinessPage />, document.getElementById('restaurant-page'));
      }

    render(){
        return (
            <div className="BusinessList">
                {
                this.props.businesses.map((business) => {
                    return <Business key={business.id} business={business}/>
                })
                }
            </div>
        );
    }
}

export default BusinessList;