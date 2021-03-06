import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
import Loadable from 'react-loadable';

/* Code Splitting with help of react-loadable*/
function Loading({ error }) {
  if (error) {
    return (<div>
      <span>Ohhh So Sorryyyyyy!!!!</span>
      <span>We got an error: {error}</span>
    </div>);
  } else {
    return <h3>Loading...</h3>;
  }
}

const Dashboard = Loadable({
    loader : () => import('./Pages/Dashboard'),
    loading : Loading
})
const Login = Loadable({
  loader : () => import('./Pages/Login'),
  loading : Loading
})
const EditDashboard = Loadable({
  loader : () => import('./Pages/EditDashboard'),
  loading : Loading
})

const MainRoutes = (store) => (
  <>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path={`/${store.store.userName}`} component={Dashboard}/>
      <Route path='/Login' component={Login}/>
      <Route path='/Edit' component={EditDashboard}/>
    </Switch>
  </>
)

export default MainRoutes;