import React from 'react'

const Projects = () => {
  return (
    <div className='table'>
      <table id='t01'>
          <tr>
            <th id='sn'> S/N </th>
            <th> Project</th>
            <th> Link</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Todo App</td>
            <td>http://localhost:274</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Birthday Reminder app</td>
            <td>http://localhost:275</td>
          </tr>
          <tr>
            <td>3</td>
            <td>eShop (e-commerce)</td>
            <td>http://localhost:276</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Portfolio web site</td>
            <td>http://localhost:273</td>
          </tr>
      </table>
    </div>
  )
}

export default Projects