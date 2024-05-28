import React from 'react';

const SideBar = () => {
  return (
    <div className="col-md-3 bg-light p-3">
      <h4>Filters</h4>
      <h5>Categories</h5>
      <ul className="list-group">
        <li className="list-group-item">Category 1</li>
        <li className="list-group-item">Category 2</li>
        <li className="list-group-item">Category 3</li>
      </ul>
      <h5 className="mt-3">Brands</h5>
      <ul className="list-group">
        <li className="list-group-item">Brand 1</li>
        <li className="list-group-item">Brand 2</li>
        <li className="list-group-item">Brand 3</li>
      </ul>
    </div>
  );
}

export default SideBar;
