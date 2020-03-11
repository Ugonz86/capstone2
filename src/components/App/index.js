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
import Edit from '../Company/Edit';

class App extends React.Component {

  constructor(props) {
    super(props)

    const newMasterCompanyList = {};

    let newCompanyId = v4();
    newMasterCompanyList[newCompanyId] = {
      name:'Seattle Light',
      utility:'Electricity',
      contact:'www.seattleLight.com'
    };

    newCompanyId = v4();
    newMasterCompanyList[newCompanyId] = {
      name:'Seattle Water',
      utility:'Water',
      contact:'www.seattleWater.com'
    };

    newCompanyId = v4();
    newMasterCompanyList[newCompanyId] = {
      name:'Seattle Farm',
      utility:'Insurance',
      contact:'www.seattleFarm.com'
    };

    newCompanyId = v4();
    newMasterCompanyList[newCompanyId] = {
      name:'Seattle Auto',
      utility:'Car Dealer',
      contact: 'www.seattleAuto.com'
    };

    newCompanyId = v4();
    newMasterCompanyList[newCompanyId] = {
      name:'Seattle Fi',
      utility:'Internet',
      contact:'www.seattleFi.com'
    };

    this.state = {
      masterCompanyList: newMasterCompanyList,
      selectedCompany: null
      
    };
    this.handleAddingNewCompanyToList = this.handleAddingNewCompanyToList.bind(this);
    this.handleChangingSelectedCompany = this.handleChangingSelectedCompany.bind(this);
    this.handleEditCompany = this.handleEditCompany.bind(this);
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

  handleManageCompany(managedCompany) {
    const newMasterCompanyList = Object.assign({}, this.state.masterCompanyList, {[managedCompany.id]: managedCompany});
    this.setState({masterCompanyList: newMasterCompanyList});
  }

  handleEditCompany(updatedCompany) {
    const newMasterCompanyList = Object.assign({}, this.state.masterCompanyList, {[updatedCompany.id]: updatedCompany});
    this.setState({masterCompanyList: newMasterCompanyList});
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
            <Route path='/CompanyList' render={()=><CompanyList companyList={this.state.masterCompanyList}/>} />
            <Route path='/edit' render={()=> <Edit onEditKeg={this.handleEditKeg}/>} />
            <Route exact path={ROUTES.NEWCOMPANY} render={()=><NewCompanyForm onNewCompanyCreation={this.handleAddingNewCompanyToList} />} />
            <Route exact path={ROUTES.PAYMENTFORM} render={()=> this.state.loaded && <PaymentForm paymentForm={ window.SqPaymentForm } />} />
          </Switch>
        </div>
      </Router>
    );
  }
   

}
export default withAuthentication(App);