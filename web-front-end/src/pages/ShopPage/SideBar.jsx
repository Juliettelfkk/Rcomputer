import React, { useEffect, useState } from 'react'
import axios from 'axios';


function SideBar() {
  const [categories, setCategories] = useState([]);
  const [brands , setBrands]= useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/categories')
      .then(res => {
        console.log('Response data:', res.data); //log data to check if it's fetching
        setCategories(res.data.data); 
      })
      .catch(error => {
        console.error("There was an error fetching the categories!", error);
      });


      axios.get('http://127.0.0.1:8000/api/brands')
      .then(res => {
        console.log('Brands Response data:', res.data);
        setBrands(res.data.data); 
      })
      .catch(error => {
        console.error("There was an error fetching the brands!", error);
      });
  }, []);

  return (
    <div className="col-md-3 bg-light p-3 ">
      <h2>Filters</h2>

      <h4  className="mt-3">Categories</h4>
      <ul className="list-group">
        {categories.map(category => (
          <li key={category.id} className="list-group-item">
            <input className="form-check-input mr-2" type="radio" id={category.id} name="category" value={category.id}  />
            <label  className="form-check-label" htmlFor={category.id} >{category.attributes.name}</label>
          </li>
        ))}
      </ul>

      <h4 className="mt-3">Brands</h4>
      <ul className="list-group">
        {brands.map(brand=>(
        <li key={brand.id} className="list-group-item">
          <input  className="form-check-input mr-2" type='radio'id={brand.id} name='brand' value={brand.id} />
          <label className="form-check-label" htmlFor={brand.id}>{brand.attributes.name}</label>
        </li>
        ))}
      
      </ul>
    </div>
  )
}

export default SideBar