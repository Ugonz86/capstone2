import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

function PaymentsPage () {
    return (
    <div style={{backgroundColor: '#4265ff', padding: '10px', position: 'relative', borderRadius: '10px', height: '100px', margin: 'auto', width: '50%', marginBottom: '20px' }}>
            <h2><Link style={{color: 'white'}} to={ROUTES.PAYMENTSPAGE}>Make a Payment</Link></h2>
    </div>
    );
}

export default PaymentsPage;