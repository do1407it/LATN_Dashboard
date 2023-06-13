import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Pagination = () => {
   const { products } = useSelector((state) => state.productList)
   const { pages, page, keyword } = products
   return (
      pages > 1 && (
         <nav className='float-end mt-4' aria-label='Page navigation'>
            <ul className='pagination'>
               {[...Array(pages).keys()].map((x) => (
                  <li className={x + 1 === page ? 'page-item active' : 'page-item'} key={x + 1}>
                     <Link
                        className='page-link'
                        to={
                           keyword
                              ? `/products?keyword=${keyword}&pageNumber=${x + 1}`
                              : `/products?pageNumber=${x + 1}`
                        }
                     >
                        {x + 1}
                     </Link>
                  </li>
               ))}
            </ul>
         </nav>
      )
   )
}

export default Pagination
