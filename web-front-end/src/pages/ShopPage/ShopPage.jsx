import React, { useContext, useState, useEffect } from 'react';
import SideBar from './SideBar';
import ProductsShop from './ProductsShop';
import Pagination from './Pagination';
import { ShopContext } from '../../context/ShopContextProvider';

function ShopPage() {
  const { products } = useContext(ShopContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('date'); // Default sort order
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
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

  // Filter and sort products based on selected category and sort order
  useEffect(() => {
    let filteredProducts = products;
    if (selectedCategory) {
      filteredProducts = products.filter(product => product.attributes.category_id === selectedCategory);
    }
    if (selectedBrand) {
      filteredProducts = filteredProducts.filter(product => product.attributes.brand_id === selectedBrand);
    }
    setSortedProducts(sortProducts(filteredProducts, sortOrder));
  }, [products, sortOrder, selectedCategory, selectedBrand]);

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1); e
  };

  const handleBrandChange = (brandId) => {
    setSelectedBrand(brandId);
    setCurrentPage(1); 
  };

  return (
    <div className='ShopPage container-fluid' style={{ paddingTop: '110px' }}>
      <div className="row mb-4">
        <div className="col m-auto text-start ">
          <h3 className='text-secondary '>SHOP/PRODUCTS</h3>
        </div>
        <div className="col d-flex align-items-center justify-content-end">
          <p className='mb-0 mr-2'>Affichage de {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, sortedProducts.length)} sur {sortedProducts.length} résultats</p>
          <form className='form-inline'>
            <select
              name="orderby"
              className='form-control w-auto'
              style={{ marginLeft: '5px' }}
              value={sortOrder}
              onChange={handleSortOrderChange}
            >
              <option value='date'>Tri du plus récent au plus ancien</option>
              <option value='price'>Tri par tarif croissant</option>
              <option value='price-desc'>Tri par tarif décroissant</option>
            </select>
          </form>
        </div>
      </div>

      <div className="row ">
        <SideBar onCategoryChange={handleCategoryChange} onBrandChange={handleBrandChange} />
        <div className="col-md-9 p-3 mt-0 ">
         
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
  );
}

export default ShopPage;
