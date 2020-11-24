import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import CreateCompany from './Companies/new.js'
import SignUp from './SignUp'
import Login from './Login'
import Home from './Home'
import Company from './Companies'
import Header from './header'
import ShowCompany from './Companies/show'
import CashManagment from './CashManagment'
import CreateCashManagment from './CashManagment/new'
function App() {
  return (
      <Router>
    <Header />
      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/sign-up" exact>
            <SignUp />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/companies" exact>
            <Company />
          </Route>
           <Route path="/companies/new" exact>
            <CreateCompany />
          </Route>
          <Route path="/companies/:id" exact>
            <ShowCompany />
          </Route>
          <Route path="/companies/:id/cash_mangments" exact>
            <CashManagment />
          </Route>
          <Route path="/companies/:id/cash_mangments/new" exact>
            <CreateCashManagment />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
