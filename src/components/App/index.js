import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import SignOutPage from '../SignOut';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import Payments from '../Payments';
import PaymentsPage from '../Payments/PaymentsPage';
import { v4 } from 'uuid';
import CompanyList from '../CompanyList';
import PaymentList from '../Payments/PaymentsList';
import PaymentForm from '../PaymentForm';
import NewPaymentForm from '../Payments/NewPaymentForm';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import NewCompanyForm from '../NewCompanyForm';
import Edit from '../Company/Edit';

class App extends React.Component {

  constructor(props) {
    super(props)

    const newMasterCompanyList = {};
    const newMasterPaymentList = {};

    let newCompanyId = v4();
    newMasterCompanyList[newCompanyId] = {
      name:'SeattleLight',
      utility:'Electricity',
      contact:'www.seattleLight.com'
    };

    newCompanyId = v4();
    newMasterCompanyList[newCompanyId] = {
      name:'SeattleWater',
      utility:'Water',
      contact:'www.seattleWater.com'
    };

    newCompanyId = v4();
    newMasterCompanyList[newCompanyId] = {
      name:'SeattleFarm',
      utility:'Insurance',
      contact:'www.seattleFarm.com'
    };

    newCompanyId = v4();
    newMasterCompanyList[newCompanyId] = {
      name:'SeattleAuto',
      utility:'Car Dealer',
      contact: 'www.seattleAuto.com'
    };

    newCompanyId = v4();
    newMasterCompanyList[newCompanyId] = {
      name:'SeattleFi',
      utility:'Internet',
      contact:'www.seattleFi.com'
    };

    this.state = {
      masterCompanyList: newMasterCompanyList,
      selectedCompany: null,
      masterPaymentList: newMasterPaymentList,
      selectedPayment: null
     
    };

    let newPaymentId = v4();
    newMasterPaymentList[newPaymentId] = {
      name:'SeattleLight',
      date: '05-25-2020',
      amount: '50'
    };

    newPaymentId = v4();
    newMasterPaymentList[newPaymentId] = {
      name:'SeattleWater',
      date: '05-28-2020',
      amount: '100'
    };

    newPaymentId = v4();
    newMasterPaymentList[newPaymentId] = {
      name:'SeattleAuto',
      date: '05-30-2020',
      amount: '300'
    };
    
    this.handleAddingNewCompanyToList = this.handleAddingNewCompanyToList.bind(this);
    this.handleAddingNewPaymentToList = this.handleAddingNewPaymentToList.bind(this);
    this.handleChangingSelectedCompany = this.handleChangingSelectedCompany.bind(this);
    this.handleChangingSelectedPayment = this.handleChangingSelectedPayment.bind(this);
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

  handleAddingNewPaymentToList(newPayment){
    var newPaymentId = v4();
    var newMasterPaymentList = Object.assign({}, this.state.masterPaymentList, {
      [newPaymentId]: newPayment
    });
    this.setState({masterPaymentList: newMasterPaymentList});
  }

  handleChangingSelectedCompany(companyId){
    this.setState({selectedCompany: companyId});
  }

  handleManageCompany(managedCompany) {
    const newMasterCompanyList = Object.assign({}, this.state.masterCompanyList, {[managedCompany.id]: managedCompany});
    this.setState({masterCompanyList: newMasterCompanyList});
  }

  handleChangingSelectedPayment(paymentId){
    this.setState({selectedPayment: paymentId});
  }

  handleManagePayment(managedPayment) {
    const newMasterPaymentList = Object.assign({}, this.state.masterPaymentList, {[managedPayment.id]: managedPayment});
    this.setState({masterPaymentList: newMasterPaymentList});
  }

  handleEditCompany(updatedCompany) {
    const newMasterCompanyList = Object.assign({}, this.state.masterCompanyList, {[updatedCompany.id]: updatedCompany});
    this.setState({masterCompanyList: newMasterCompanyList});
  }

  render(){
    return (
      <Router>
        <div>
        <h1>HELLO</h1>
        <Navigation />
        <br/><br/>
          <Switch>
          
            <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route exact path={ROUTES.SIGN_OUT} component={SignOutPage} />
            <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route exact path={ROUTES.PAYMENTS} component={Payments} />
            <Route exact path={ROUTES.NEWPAYMENTFORM} component={NewPaymentForm} />
            <Route exact path={ROUTES.PAYMENTSPAGE} component={PaymentsPage} />
            <Route path='/CompanyList' render={()=><CompanyList companyList={this.state.masterCompanyList}/>} />
            <Route path='/paymentslist' render={()=><PaymentList paymentList={this.state.masterPaymentList}/>} />
            <Route path='/edit' render={()=> <Edit onEditPayment={this.handleEditPayment}/>} />
            <Route exact path={ROUTES.NEWCOMPANY} render={()=><NewCompanyForm onNewCompanyCreation={this.handleAddingNewCompanyToList} />} />
            <Route exact path={ROUTES.NEWPAYMENT} render={()=><NewPaymentForm onNewPaymentCreation={this.handleAddingNewPaymentToList} />} />
            <Route exact path={ROUTES.PAYMENTFORM} render={()=> this.state.loaded && <PaymentForm paymentForm={ window.SqPaymentForm } />} />
          </Switch>
        </div>
      </Router>
    );
  }
   

}
export default withAuthentication(App);