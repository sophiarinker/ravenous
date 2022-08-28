const apiKey = "5NgeF2wtSpJ1jBAjJZXo4RlU-L8XhbXJf24Tbzywx9D-Y1KnbcPwFlStoX1mZHEReUy5H4lNg4IuWre7HJpOGTwJSxj3DFlncBbkNKzyIoG0JDMUlw3PscomLlwKY3Yx";
const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { 
            headers: {
              Authorization: `Bearer ${apiKey}` 
            }
          }).then(response =>{
            return response.json();
        }).then(jsonResponse =>{
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business =>({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                        phone: business.display_phone,
                        is_closed: business.closed,
                        url: business.url
                    }));
            }
        });
    }
};

export default Yelp;