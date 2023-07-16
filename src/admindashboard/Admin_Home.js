import React, { Fragment } from 'react';
import { Table } from 'react-bootstrap';
import './Admin_Home.css';
import Dashboard from '../Component/Dashboard';

function Admin_Home() {
  return (
    <div>
      <Dashboard>
    <div className="adcontaine">
      
      <div><h1 className="h1">Today Bookings</h1></div><br />    
            <Table>
              <thead>
                <tr>
                  <th>Head</th>
                  <th>Body</th>
                </tr>
              </thead>
              <tbody>
                {/* Add your table data here */}
              </tbody>
            </Table> 
    </div>
    </Dashboard>
    </div>
  );
}

export default Admin_Home;
