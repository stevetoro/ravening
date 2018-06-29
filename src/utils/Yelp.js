import { apiKey } from './config';

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
const searchEndpoint = 'https://api.yelp.com/v3/businesses/search?';

const headers = { Authorization: `Bearer ${apiKey}` };

const Yelp = {
  search: async (term, location, sortBy) => {
    const response = await fetch(`${corsAnywhere}${searchEndpoint}term=${term}&location=${location}&sort_by=${sortBy}`, { headers });
    const json = await response.json();

    if (json.businesses)
      return json.businesses.map(business => ({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count
      }));
      
    return [];
  }
};

export default Yelp;