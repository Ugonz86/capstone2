import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Payments = () => (
  <div style={{display: 'table', textAlign: 'center', width: '100%', backgroundColor: '#edeff5'}}>
    <br/>
    <div style={{backgroundColor: '#4265ff', position: 'relative', color: 'white', borderRadius: '4px', height: '100px', margin: '20px 40px', }}>
        <h2>Upcoming payments here</h2>
    </div>

    <div style={{backgroundColor: '#4265ff', position: 'relative', color: 'white', borderRadius: '4px', height: '100px', margin: '20px 40px', }}>
        <h2>Payment history here</h2>
    </div>
   
    <div style={{backgroundColor: '#4265ff', position: 'relative', borderRadius: '4px', height: '100px', margin: '20px 40px', }}>
        <h2><Link style={{color: 'white'}} to={ROUTES.PAYMENTFORM}>Make a payment here</Link></h2>
    </div>
  </div>
  
);

export default Payments;