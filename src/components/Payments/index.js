import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Payments = () => (
  <div class="container">

    <div style={{backgroundColor: '#4265ff',
              borderRadius: '10px',
              margin: 'auto',
              width: '50%',
              
              marginBottom: '20px',
              color: '#edeff5'}}>
    <h1 style={{color: '#333'}}>Payment overview</h1>
    </div>

    
      <div style={{backgroundColor: '#4265ff', position: 'relative', color: 'white', borderRadius: '10px', height: '100px', margin: 'auto', width: '50%', marginBottom: '20px' }}>
          <h2>Upcoming payments here</h2>
      </div>

      <div style={{backgroundColor: '#4265ff', position: 'relative', color: 'white', borderRadius: '10px', height: '100px', margin: 'auto', width: '50%', marginBottom: '20px' }}>
          <h2>Payment history here</h2>
      </div>

      <div style={{backgroundColor: '#4265ff', position: 'relative', color: 'white', borderRadius: '10px', height: '100px', margin: 'auto', width: '50%', marginBottom: '20px' }}>
          <h2>Set Auto Payment here</h2>
      </div>
      
      <div style={{backgroundColor: '#4265ff', position: 'relative', borderRadius: '10px', height: '100px', margin: 'auto', width: '50%' }}>
          <h2><Link style={{color: 'white'}} to={ROUTES.PAYMENTFORM}>Make a payment here</Link></h2>
      </div>
    
  </div>
);

export default Payments;