import React from 'react'
import ApiList from './ApiList';
import { movie } from './Api';

const ApiData = () => {
  return (
    <div>
      <h1>Movie Api-Data</h1>
      <div className='container mt-4'>
        <tr className='row bg-info'>
          <th className='col-lg-2'>Id</th>
          <th className='col-lg-5'>Movie Name</th>
          <th className='col-lg-5'>Year</th>
        </tr>
      </div>
      <ApiList movie={movie} />
    </div>
  )
}

export default ApiData
