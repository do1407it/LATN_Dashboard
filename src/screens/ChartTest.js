import React from 'react'

const ChartTest = () => {
   const [fromtDate, setFromtDate] = React.useState('')
   const [toDate, setToDate] = React.useState('')
   const [data, setData] = React.useState(0)

   React.useEffect(() => {
      fetch(`http://localhost:9005/api/orders/thongke?fromDate=${fromtDate}&toDate=${toDate}`)
         .then((res) => res.json())
         .then((data) => {
            setData(data)
         })
         .catch((err) => setData(err))
   }, [fromtDate, toDate])

   return (
      <>
         <label htmlFor='product_name' className='form-label'>
            From date
         </label>
         <input
            type='date'
            placeholder='Type here'
            className='form-control py-3'
            id='product_name'
            value={fromtDate}
            onChange={(e) => setFromtDate(e.target.value)}
         />

         <label htmlFor='product_name2' className='form-label'>
            To date
         </label>
         <input
            type='date'
            placeholder='Type here'
            className='form-control py-3'
            id='product_name2'
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
         />

         <h2>Tổng số đơn hàng: {data}</h2>
      </>
   )
}

export default ChartTest
