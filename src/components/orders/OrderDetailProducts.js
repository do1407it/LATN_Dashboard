import React from 'react'
import { Link } from 'react-router-dom'

const OrderDetailProducts = ({ loading, order }) => {
   return (
      <table className='table border table-lg'>
         <thead>
            <tr>
               <th style={{ width: '40%' }}>Product</th>
               <th style={{ width: '20%' }}>Unit Price</th>
               <th style={{ width: '20%' }}>Quantity</th>
               <th style={{ width: '20%' }} className='text-end'>
                  Total
               </th>
            </tr>
         </thead>
         <tbody>
            {order &&
               order?.orderItems.map((item) => (
                  <tr>
                     <td>
                        <Link className='itemside' to='#'>
                           <div className='left'>
                              <img
                                 src={item?.image}
                                 alt='product'
                                 style={{ width: '40px', height: '40px' }}
                                 className='img-xs'
                              />
                           </div>
                           <div className='info'>Velcro Sneakers For Boys & Girls (Blue) </div>
                        </Link>
                     </td>
                     <td>${item?.price}</td>
                     <td>{item?.qty}</td>
                     <td className='text-end'>${item?.price * item?.qty}</td>
                  </tr>
               ))}

            <tr>
               <td colSpan='4'>
                  <article className='float-end'>
                     <dl className='dlist'>
                        <dt>Subtotal:</dt>{' '}
                        <dd>
                           $
                           {order?.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)}
                        </dd>
                     </dl>
                     <dl className='dlist'>
                        <dt>Shipping cost:</dt> <dd>${order?.shippingPrice}</dd>
                     </dl>
                     <dl className='dlist'>
                        <dt>Tax:</dt>
                        <dd>${order?.taxPrice}</dd>
                     </dl>
                     <dl className='dlist'>
                        <dt>Grand total:</dt>
                        <dd>
                           <b className='h5'>${order?.totalPrice}</b>
                        </dd>
                     </dl>

                     <dl className='dlist'>
                        <dt className='text-muted'>Status:</dt>
                        <dd>
                           {order?.isPaid ? (
                              <span className='badge rounded-pill alert alert-success text-success'>
                                 Payment done
                              </span>
                           ) : (
                              <span className='badge rounded-pill alert alert-danger text-danger'>
                                 Payment not done
                              </span>
                           )}
                        </dd>
                     </dl>
                  </article>
               </td>
            </tr>
         </tbody>
      </table>
   )
}

export default OrderDetailProducts
