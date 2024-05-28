import React, { useState } from 'react';
import SideBar from './SideBar';
import ProductsShop from './ProductsShop';
import { PRODUCTS } from '../../products'; 

export default function ShopPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9; //nb of p per page (9)

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = PRODUCTS.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='ShopPage container-fluid' style={{ paddingTop: "110px" }}>
      <div className="row mb-4">
      <div className="col m-auto text-start">
          <h3 className='text-secondary'>SHOP</h3>
        </div>
        <div className="col d-flex align-items-center justify-content-end">
          <p className='mb-0 mr-2'>Affichage de {indexOfFirstProduct + 1}–{indexOfLastProduct} sur {PRODUCTS.length} résultats</p>
          <form className='form-inline'>
            <select
              name="orderby"
              className='form-control w-auto'
              style={{ marginLeft: '5px' }}
            >
              <option value='popularity'>Sort by popularity</option>
              <option value='date'>Tri du plus récent au plus ancien</option>
              <option value='price'>Tri par tarif croissant</option>
              <option value='price-desc'>Tri par tarif décroissant</option>
              <input type='hidden' name='paged' value={1} />
            </select>
          </form>
        </div>
      </div>

      <div className="row">
          <SideBar />

        <div className="col-md-9 p-3 mt-0">
          <h4>Products</h4>
          <div className="row">
            {currentProducts.map((product) => (
              <ProductsShop key={product.id} data={product} />
            ))}
          </div>
          {/* Pagination */}
          <nav>
            <ul className="pagination justify-content-center">
              {[...Array(Math.ceil(PRODUCTS.length / productsPerPage))].map((_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button onClick={() => paginate(index + 1)} className="page-link">
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
