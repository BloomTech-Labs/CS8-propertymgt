import React, { Component } from 'react';
import './App.css';
import { NavBar, Home } from './Components/Common/Components';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        <Home />
      </Container>
    );
  }
}

// import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
// import { Container } from 'semantic-ui-react';
// import Login from './Components/UserAuth/Login';
// import LandingProto from './Components/LandingPage/LandingPrototype';
// import AdminNavigation from './Components/Admin/Navigation/AdminNavigation';
// import TenantNavigation from './Components/Tenant/Navigation/TenantNavigation';

// import Amplify, { Auth } from 'aws-amplify';
// import AmplifyConfig from './Config/Auth';

// Amplify.configure(AmplifyConfig);

// const LandingPage = () => {
//   return (
//     <Container>
//       <LandingProto />
//     </Container>
//   );
// };

// class App extends Component {
//   state = {
//     authenticated: true
//   }
//   componentWillMount() {
//     console.log('App did mount');

//     let jwtToken = async () =>
//         (await Auth.currentSession()).getAccessToken().getJwtToken()

//         jwtToken().then(data => {
//           console.log(data)
//           this.setState({
//             authenticated : true
//           })
//         }).catch(err => {
//           console.log(err)
//           this.setState({
//             authenticated : false
//           })
//         })

//     // Auth.currentSession()
//     //   .then(data => {
//     //     data.idToken.payload['custom:access_level'] == 'admin' ?
//     //       this.props.history.push('/admin/dashboard') :
//     //       this.props.history.push('/tenant/dashboard');
//     //   }).catch(err => console.log(err))
//   }
//   render() {
//     return (
//       <div>
//         <Switch>
//           <Route exact path="/" component={LandingPage} />
//           <Route path="/login" component={Login} />
//           <AuthRoute path="/admin/(.+)"  component={AdminNavigation} />
//           <AuthRoute path="/tenant/(.+)" component={TenantNavigation} />
//         </Switch>
//       </div>
//     );
//   }
// }

// // const Routes = (props) => (
// //     <Switch>
// //       <Route exact path="/" component={LandingPage} />
// //       <Route path="/login" component={Login} />
// //       <AuthRoute path="/admin/(.+)" authing={props.authenticated} component={AdminNavigation} />
// //       <AuthRoute path="/tenant/(.+)" component={TenantNavigation} />
// //       {/* <PrivateRoute path="/tenant/(.+)" component={TenantNavigation} /> */}
// //     </Switch>

// // )

// // export default Routes

// const AuthCheck =  => {
//   // return await Auth.currentAuthenticatedUser()
//   // .then(user => {
//   //   return user
//   // })
//   // .catch(err =>{
//   //   return err
//   // });
//   return false
// }

// // const PrivateRoute = ({ component: Component, ...rest }) => (
// //   <Route {...rest} render={(props) => (
// //     AuthCheck() === true ? <Component {...props} /> : <Redirect to={{pathname: "/login"}}
// //   )} />
// // )
// const AuthRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props, authing) =>
//       AuthCheck() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/login"
//           }}
//         />
//       )
//     }
//   />
// );

export default App;
