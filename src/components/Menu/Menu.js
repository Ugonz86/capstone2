// import React, { Component } from "react";
// import { Link } from 'react-router-dom';
// import * as ROUTES from '../../constants/routes';
// import "./styles.css";
 
// class Menu extends Component {
//   render() {
//     var visibility = "hide";
 
//     if (this.props.menuVisibility) {
//       visibility = "show";
//     }
 
//     return (
//       <div id="flyoutMenu"
//            onMouseDown={this.props.handleMouseDown} 
//            className={visibility}>
        
//         <h2><Link style={{color: '#edeff5', textDecoration: 'none'}} to={ROUTES.HOME}>Home</Link></h2>
    
//         <h2><Link style={{color: '#edeff5', textDecoration: 'none'}} to={ROUTES.ACCOUNT}>Account</Link></h2>
            
//         {/* <Link to={ROUTES.ADMIN}>Admin</Link> */}
        
//         <h2><Link style={{color: '#edeff5', textDecoration: 'none'}} to={ROUTES.COMPANYLIST}>Utilities</Link></h2>
        
//         <h2><Link style={{color: '#edeff5', textDecoration: 'none'}} to={ROUTES.PAYMENTS}>Payments</Link></h2>
      
//         {/* <SignOutButton /> */}
        
//       </div>
//     );
//   }
// }
// // const NavigationAuth = () => (
// //   <p></p>
// // );
// // const NavigationNonAuth = () => (
// //   <p>
// //     {/* <Link style={{right: '0'}} to={ROUTES.SIGN_IN}>Sign In</Link> */}
// //   </p>

// // );

// export default Menu;