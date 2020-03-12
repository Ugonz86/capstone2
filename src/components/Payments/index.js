import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

function Payments () {

   return (
  <div class="container">

    <div style={{backgroundColor: '#4265ff',
      borderRadius: '10px',
      margin: 'auto',
      width: '50%',
      marginBottom: '20px',
      padding: '10px',
      color: '#edeff5'}}>
    <h1 style={{color: '#333'}}>Payment Overview</h1>
    </div>

      <div style={{backgroundColor: '#4265ff', padding: '10px', position: 'relative', borderRadius: '10px', height: '100px', margin: 'auto', width: '50%', marginBottom: '20px' }}>
            <h2><Link style={{color: 'white'}} to={ROUTES.PAYMENTFORM}>Make a Payment</Link></h2>
        </div>

      <div style={{backgroundColor: '#4265ff', padding: '10px', position: 'relative', color: 'white', borderRadius: '10px', height: '100px', margin: 'auto', width: '50%', marginBottom: '20px' }}>
          <h2>Upcoming Payments</h2>
      </div>

      <div style={{backgroundColor: '#4265ff', padding: '10px', position: 'relative', color: 'white', borderRadius: '10px', height: '100px', margin: 'auto', width: '50%', marginBottom: '20px' }}>
          <h2>Payment History</h2>
      </div>

      <div style={{backgroundColor: '#4265ff', padding: '10px', position: 'relative', color: 'white', borderRadius: '10px', height: '100px', margin: 'auto', width: '50%' }}>
          <h2>Set Auto Payments</h2>
      </div>
  </div>
   );
}

export default Payments;