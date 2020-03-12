import React from 'react';
import PaymentIcon from 'react-payment-icons';

const HomePage = () => (

  <div style={{backgroundColor: '#edeff5'}}>
    <br/>
    <div style={{backgroundColor: '#4265ff', color: '#edeff5', width: '75%', margin: 'auto', borderRadius: '10px', padding: '20px'}}>
    <h1>All Your Personal Payments in One Place.</h1>
    <h3>Pay any invoice with a bank transferm credit or debit card for FREE.</h3>
    <br/>
   
    <style jsx global>{`
      #signUpLink{
        background-color: #333;
        color: #edeff5;
        border-radius: 10px;
        padding: 10px;
        font-weight: bold;
        font-size: 30px;
      }
      #signUpLink:hover{
        background-color: black;
        color: #edeff5;
      }
    `}</style>
 
    </div>
    <br/>
    <h1>How <span style={{ color: '#4265ff', fontWeight: 'bold', fontStyle: 'italic'}}>e</span>Bills Works?</h1>
    <br/>
    <div style={{display: 'flex', width: '75%', margin: 'auto'}}>
      <br/>
      <div style={{backgroundColor: '#4265ff', color: '#edeff5', width: '33.3%', borderRadius: '10px', padding: '20px', marginRight: '10px'}}>
        <h3>Select utility company</h3>
        <p>You can select or add a company to make your payments.</p>
      </div>
      <div style={{backgroundColor: '#4265ff', color: '#edeff5', width: '33.3%', borderRadius: '10px', padding: '20px', marginRight: '10px'}}>
        <h3>Pay by card or bank</h3>
        <p>Make easy payments or set up auto-payments.</p>
      </div>
      <div style={{backgroundColor: '#4265ff', color: '#edeff5', width: '33.3%', borderRadius: '10px', padding: '20px'}}>
        <h3>Track Payments</h3>
        <p>See your payment history</p>
      </div>
    </div>
    <br/>
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
    </div>
  </div>
);

export default HomePage;
