import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
// import AdminPage from '../Admin';
import Payments from '../Payments';
import { v4 } from 'uuid';
import CompanyList from '../CompanyList';
import PaymentForm from '../PaymentForm';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import NewCompanyForm from '../NewCompanyForm';

class App extends React.Component {

  constructor(props) {
    super(props)

    const newMasterCompanyList = {};

    this.state = {
      loaded: false,
      masterCompanyList: newMasterCompanyList,
      
    }
    this.handleAddingNewCompanyToList = this.handleAddingNewCompanyToList.bind(this);
  }

  componentWillMount(){
    const that = this;
    let sqPaymentScript = document.createElement('script');
    sqPaymentScript.src = "https://js.squareup.com/v2/paymentform";
    sqPaymentScript.type = "text/javascript"
    sqPaymentScript.async = false;
    sqPaymentScript.onload = ()=>{that.setState({
      loaded: true
    })};
    document.getElementsByTagName("head")[0].appendChild(sqPaymentScript);
  }
 

  handleAddingNewCompanyToList(newCompany){
    var newCompanyId = v4();
    var newMasterCompanyList = Object.assign({}, this.state.masterCompanyList, {
      [newCompanyId]: newCompany
    });
    this.setState({masterCompanyList: newMasterCompanyList});
  }

  handleChangingSelectedCompany(companyId){
    this.setState({selectedCompany: companyId});
  }

  render(){
    return (
      
      <Router>
        <div>
        
        <Navigation />
          <Switch>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
          
            <Route exact path={ROUTES.PAYMENTS} component={Payments} />
            {/* <Route exact path={ROUTES.ADMIN} component={AdminPage} /> */}
            {/* <Route exact path={ROUTES.COMPANYLIST} render={()=><CompanyList companyList={this.state.masterCompanyList} onCompanySelection={this.handleChangingSelectedCompany}
            selectedCompany={this.state.selectedCompany}/>} />
                <Route exact path={ROUTES.NEWCOMPANY} render={()=><NewCompanyForm onNewCompanyCreation={this.handleAddingNewCompanyToList} />} /> */}
            <Route path='/CompanyList' render={()=><CompanyList companyList={this.state.masterCompanyList} onCompanySelection={this.handleChangingSelectedCompany}
              selectedCompany={this.state.selectedCompany}/>} />
            <Route exact path={ROUTES.NEWCOMPANY} component={NewCompanyForm} />
            <Route exact path={ROUTES.PAYMENTFORM} render={()=> this.state.loaded && <PaymentForm paymentForm={ window.SqPaymentForm } />} />
          </Switch>
        </div>
      </Router>
    );
  }
   

}
export default withAuthentication(App);