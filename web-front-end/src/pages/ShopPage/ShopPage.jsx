import React, { useContext, useEffect, useState } from 'react';
import SideBar from './SideBar'
import ProductsShop from './ProductsShop'
import Pagination from './Pagination'
import { ShopContext } from '../../context/ShopContextProvider';

function ShopPage() {
  const { products } = useContext(ShopContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('date'); // Default sort order
  const [sortedProducts, setSortedProducts] = useState([]);
  const productsPerPage = 9; // Number of products per page

  // Function to sort products based on selected sort order
  const sortProducts = (products, order) => {
    switch (order) {
      case 'date':
        return [...products].sort((a, b) => new Date(b.attributes.date) - new Date(a.attributes.date));
      case 'price':
        return [...products].sort((a, b) => parseFloat(a.attributes.price) - parseFloat(b.attributes.price));
      case 'price-desc':
        return [...products].sort((a, b) => parseFloat(b.attributes.price) - parseFloat(a.attributes.price));
      default:
        return products;
    }
  };
  // Update sorted products when products or sort order changes
  useEffect(() => {
    setSortedProducts(sortProducts(products, sortOrder));
  }, [products, sortOrder]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle sort order change
  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className='ShopPage container-fluid' style={{ paddingTop: "110px" }}>
      <div className="row mb-4">
        <div className="col m-auto text-start">
          <h3 className='text-secondary'>SHOP</h3>
        </div>
        <div className="col d-flex align-items-center justify-content-end">
          <p className='mb-0 mr-2'>Affichage de {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, products.length)} sur {products.length} résultats</p>
          <form className='form-inline'>
            <select
              name="orderby"
              className='form-control w-auto'
              value={sortOrder}
              onChange={handleSortOrderChange}
              style={{ marginLeft: '5px' }}
            >
              <option value='date'>Tri du plus récent au plus ancien</option>
              <option value='price'>Tri par tarif croissant</option>
              <option value='price-desc'>Tri par tarif décroissant</option>
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
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={sortedProducts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  )
}

export default ShopPage