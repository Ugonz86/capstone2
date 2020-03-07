import React from 'react'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Landing = () => (
    <div>
    <br/>
        <h2>All Your Personal Payments in One Place</h2>
        <p>Pay any invoice with a bank transferm credit or debit card for FREE.</p>
        <br/>
        <p><Link to={ROUTES.SIGN_UP}>Sign Up Now</Link></p>
    </div>
)



export default Landing