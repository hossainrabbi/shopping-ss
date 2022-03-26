import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useProductsContext } from '../contexts/ProductsContext';
import Product from './Product';

export default function Products() {
  const { loading, error, products } = useProductsContext();
  const [pageNumber, setPageNumber] = useState(0);

  const usersParPage = 8;
  const pagesVisited = pageNumber * usersParPage;

  const displayProducts = products.slice(
    pagesVisited,
    pagesVisited + usersParPage
  );

  const pageCount = Math.ceil(products.length / usersParPage);

  if (loading) {
    return <div className="main__container">Loading...</div>;
  }

  if (error) {
    return <div className="main__container">Server site Error</div>;
  }

  return displayProducts.length > 0 ? (
    <section className="main__container pt-16 mb-36">
      <h2 className="header_title">Products</h2>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {displayProducts.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={({ selected }) => setPageNumber(selected)}
        containerClassName={'flex justify-center items-center gap-x-4 py-10'}
        previousLinkClassName="btn_normal"
        nextLinkClassName="btn_normal"
        pageLinkClassName="btn_normal"
        activeLinkClassName="btn_normal bg-gray-900 text-gray-200"
        disabledLinkClassName="btn_normal text-gray-500 hover:text-gray-500 hover:bg-gray-200 cursor-not-allowed"
      />
    </section>
  ) : (
    <div className="main__container">Product not Found</div>
  );
}
