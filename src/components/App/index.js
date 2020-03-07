import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import { v4 } from 'uuid';
import CompanyList from '../CompanyList';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import NewCompanyControl from '../NewCompanyControl';

class App extends React.Component {

    constructor(props) {
        super(props);
      
    const newMasterCompanyList = {};

    let newCompanyId = v4();
    newMasterCompanyList[newCompanyId] = {
      name:'Seattle Light',
      utility:'Electricity',
      contact:'www.seattle.com',
      timeAdded:''
    };
    newCompanyId = v4();
    newMasterCompanyList[newCompanyId] = {
      name:'Seattle Water',
      utility:'Water',
      contact:'www.seattle.com',
      timeAdded:''
    };
    newCompanyId = v4();
    newMasterCompanyList[newCompanyId] = {
      name:'Seattle Farm',
      utility:'Insurance',
      contact:'www.seattle.com',
      timeAdded:''
    };
    newCompanyId = v4();
    newMasterCompanyList[newCompanyId] = {
      name:'Seattle Auto',
      utility:'Car Dealer',
      contact:'www.seattle.com',
      timeAdded:''
    };
    newCompanyId = v4();
    newMasterCompanyList[newCompanyId] = {
      name:'Seattle Fi',
      utility:'Internet',
      contact:'www.seattle.com',
      timeAdded:''
    };

    this.state = {
      masterCompanyList: [],
      selectedCompany: null
    };
    this.handleAddingNewCompanyToList = this.handleAddingNewCompanyToList.bind(this);
    this.handleChangingSelectedCompany = this.handleChangingSelectedCompany.bind(this);
    }

  handleAddingNewCompanyToList(newCompany){
      var newCompanyId = v4()
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
                <Route exact path={ROUTES.ADMIN} component={AdminPage} />
                <Route exact path={ROUTES.COMPANYLIST} render={()=><CompanyList companyList={this.state.masterCompanyList} onCompanySelection={this.handleChangingSelectedCompany}
            selectedCompany={this.state.selectedCompany}/>} />
                <Route exact path={ROUTES.NEWCOMPANY} render={()=><NewCompanyControl onNewCompanyCreation={this.handleAddingNewCompanyToList} />} />
                {/* <Route exact path={ROUTES.COMPANYLIST} component={CompanyList} />
                <Route exact path={ROUTES.NEWCOMPANY} component={NewCompanyControl} /> */}
                </Switch>
                </div>
            </Router>
          );
    }

  }
export default withAuthentication(App);