// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryImg from '../assets/accessoriesc.jpg';
export default function CategoryHome() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/categories')
      .then(res => {
        console.log('Response data:', res.data);
        setCategories(res.data.data); 
      })
      .catch(error => {
        console.error("There was an error fetching the categories!", error);
      });
  }, []);

  return (
    <div className='CategoryHome'>
      <section className="container-fluid bg-dark py-5">
        <div className="title text-center text-light">
          <p>FOR YOU AND EVERYONE</p>
          <h2 className="position-relative d-inline-block">Our Products</h2>
        </div>
        <div className={`row row-cols-1 row-cols-md-${categories.length <= 3 ? categories.length : 4} g-3 mt-1`}>
          {categories.map((category) => (
            <div className="col" key={category.id}>
              <div className="card h-100 border-0">
                <img src={CategoryImg} className="card-img-top" alt={category.attributes.name} />
                <div className="card-body">
                  <h2 className="card-title">{category.attributes.name}</h2>
                  <button className="btn btn-primary px-5 ">Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
