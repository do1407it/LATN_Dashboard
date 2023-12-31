import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listUsers } from '../../redux/actions/UserActions'
const UserComponent = () => {
   const dispatch = useDispatch()
   const { users, loading, error } = useSelector((state) => state.userList)

   useEffect(() => {
      dispatch(listUsers())
   }, [dispatch])

   return (
      <section className='content-main'>
         <div className='content-header'>
            <h2 className='content-title'>Customers</h2>
            <div>
               <Link to='#' className='btn btn-primary'>
                  <i className='material-icons md-plus'></i> Create new
               </Link>
            </div>
         </div>

         <div className='card mb-4'>
            <header className='card-header'>
               <div className='row gx-3'>
                  <div className='col-lg-4 col-md-6 me-auto'>
                     <input type='text' placeholder='Search...' className='form-control' />
                  </div>
                  <div className='col-lg-2 col-6 col-md-3'>
                     <select className='form-select'>
                        <option>Show 20</option>
                        <option>Show 30</option>
                        <option>Show 40</option>
                        <option>Show all</option>
                     </select>
                  </div>
                  <div className='col-lg-2 col-6 col-md-3'>
                     <select className='form-select'>
                        <option>Status: all</option>
                        <option>Active only</option>
                        <option>Disabled</option>
                     </select>
                  </div>
               </div>
            </header>

            {/* Card */}
            <div className='card-body'>
               <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4'>
                  {loading ? (
                     <div className='text-center'>
                        <div className='spinner-border text-primary' role='status'>
                           <span className='visually-hidden'>Loading...</span>
                        </div>
                     </div>
                  ) : error ? (
                     <div className='text-center'>
                        <div className='alert alert-danger' role='alert'>
                           {error}
                        </div>
                     </div>
                  ) : (
                     users.map((user) => (
                        <div className='col' key={user._id}>
                           <div className='card card-user shadow-sm'>
                              <div className='card-header'>
                                 <img
                                    className='img-md img-avatar'
                                    src={user?.image.length ? user?.image : 'images/13.png'}
                                    alt='User pic'
                                 />
                              </div>
                              <div className='card-body'>
                                 <h5 className='card-title mt-5'>{user?.name}</h5>
                                 <div className='card-text text-muted'>
                                    <p className='m-0'>
                                       {user?.isAdmin ? (
                                          <span className='badge bg-success'>Admin</span>
                                       ) : (
                                          <span className='badge bg-warning'>User</span>
                                       )}
                                    </p>
                                    <p>{user?.email}</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))
                  )}
               </div>

               {/* nav */}
               <nav className='float-end mt-4' aria-label='Page navigation'>
                  <ul className='pagination'>
                     <li className='page-item disabled'>
                        <Link className='page-link' to='#'>
                           Previous
                        </Link>
                     </li>
                     <li className='page-item active'>
                        <Link className='page-link' to='#'>
                           1
                        </Link>
                     </li>
                     <li className='page-item'>
                        <Link className='page-link' to='#'>
                           Next
                        </Link>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      </section>
   )
}

export default UserComponent
