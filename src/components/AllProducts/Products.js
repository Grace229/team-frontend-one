import { Fragment, useState } from 'react';

import Pagination from './Pagination';

import first from '../../assets/redBench.png';

import classes from './Products.module.css';
import Filter from './Filter';
import TitleBar from './TitleBar';
import { useFormClassNames } from 'rsuite';

const productsPerPage = 4;
const bestSeller = <p className={classes.tag}>Best Seller</p>;

const Products = props => {
  const [currentPage, setCurrentPage] = useState(1);

  const products = props.products;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const visibleProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <Fragment>
      {visibleProducts.map(list => (
        <div className={classes.products} key={list.id}>
          {list.image === first && bestSeller}
          <div className={classes.image}>
            <img src={list.image} alt={list.name} />
          </div>
          <button className={classes.button}>ADD TO CART</button>
          <p className={classes.description}>{list.description}</p>
          <p className={classes.name}>{list.name}</p>
          <p className={classes.price}>{list.price}</p>
        </div>
      ))}

      <Pagination
        products={products}
        curPage={currentPage}
        setCurPage={setCurrentPage}
        proPerPage={productsPerPage}
      />
    </Fragment>
  );
};

export default Products;
