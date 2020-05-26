import React from 'react';
import PaymentIcon from 'react-payment-icons';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Fade from 'react-reveal/Fade';

const HomePage = () => (
  
  <div className= "companyStyle">
  <style jsx global>{`
          .companyStyle{
          {/* background-color: #4265ff; */}
          border-radius: 10px;
          margin: auto;
          width: 75%;
          padding: 10px;
          margin-bottom: 20px;
          color: #edeff5;
        }
          `}</style>
    <div style={{fontWeight: 'bold'}}>
      <Fade top>
      <br/>
        <Link style={{fontSize: '70px', textShadow: 'grey 1px 1px 3px' }} to={ROUTES.HOME}><span style={{ color: '#4265ff', fontWeight: 'bold', fontStyle: 'italic', textShadow: '#0b2180 1px 1px 3px'}}>e</span>Bills</Link><br/>
      </Fade>
    </div>
    <br/>
    <div style={{backgroundColor: '#4265ff', color: '#edeff5', margin: 'auto', borderRadius: '10px', padding: '20px', boxShadow: '#0b2180 1px 1px 3px'}}>
    <h1 style={{textShadow: '#0b2180 1px 1px 3px'}}>All Your Personal Payments in One Place</h1>
    <h3>Pay any invoice with a credit or debit card</h3>
    <br/>
   
    </div>
    <br/>
    <h1 style={{color: '#333', textShadow: 'lightgrey 1px 1px 1px'}}>How It Works?</h1>
    <br/>
    <div style={{display: 'flex', margin: 'auto'}}>
      <br/>
      <div style={{backgroundColor: '#4265ff', color: '#edeff5', width: '33.3%', borderRadius: '10px', padding: '20px', marginRight: '10px', boxShadow: '#0b2180 1px 1px 3px'}}>
        <h3 style={{textShadow: '#0b2180 1px 1px 3px'}}>Select utility company</h3>
        <p>You can select or add a company to make your payments.</p>
      </div>
      <div style={{backgroundColor: '#4265ff', color: '#edeff5', width: '33.3%', borderRadius: '10px', padding: '20px', marginRight: '10px', boxShadow: '#0b2180 1px 1px 3px'}}>
        <h3 style={{textShadow: '#0b2180 1px 1px 3px'}}>Pay by card or bank</h3>
        <p>Make easy payments or set up auto-payments.</p>
      </div>
      <div style={{backgroundColor: '#4265ff', color: '#edeff5', width: '33.3%', borderRadius: '10px', padding: '20px', boxShadow: '#0b2180 1px 1px 3px'}}>
        <h3 style={{textShadow: '#0b2180 1px 1px 3px'}}>Track Payments</h3>
        <p>See your payment history.</p>
      </div>
    </div>
    <br/>
    <h1 style={{color: '#333', textShadow: 'lightgrey 1px 1px 1px'}}>Refer us to your friends and family!</h1>
    
    <br/>
    <div style={{width:'100%', margin: 'auto'}}>
      <PaymentIcon
        id="visa"
        style={{ margin: 10, width: 100, filter: '#4265ff', color: '#4265ff' }}
        className="payment-icon"
      />
       <PaymentIcon
        id="mastercard"
        style={{ margin: 10, width: 100 }}
        className="payment-icon"
      />
      <PaymentIcon
        id="discover"
        style={{ margin: 10, width: 100 }}
        className="payment-icon"
      />
      <PaymentIcon
        id="amex"
        style={{ margin: 10, width: 100 }}
        className="payment-icon"
      />
      <PaymentIcon
        id="paypal"
        style={{ margin: 10, width: 100 }}
        className="payment-icon"
      />

      {/* <PaymentIcon
        id="applepay"
        style={{ margin: 10, width: 100 }}
        className="payment-icon"
      /> */}

      
    </div>
   
  </div>
  
);

export default HomePage;
