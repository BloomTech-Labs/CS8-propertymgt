import React, { Component } from 'react';
import { LandingPage, Dashboard, LoginForm } from './Components';
import { Container, Grid, GridColumn, Gr } from 'semantic-ui-react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Amplify, { Auth } from 'aws-amplify';
import AmplifyConfig from '../../Config/Auth';

Amplify.configure(AmplifyConfig);

class Home extends Component {

    state = {
        isLoggedIn: true
    }

    // componentDidMount() {

    //     Auth.currentSession()
    //     .then(data => {
    //         this.setState({isLoggedIn: true})
    //         console.log(data);
    //     // data.idToken.payload['custom:access_level'] == 'admin' ?
    //     // this.props.history.push('/admin/dashboard') :
    //     // this.props.history.push('/tenant/dashboard');
    //     })
    //     .catch(err => console.log(err))
    // }

    render() {
        // console.log(this.state.isLoggedIn)
    let status = this.isLoggedIn ? (<Dashboard />) : (<LandingPage />)
        console.log('rendering dashsboard from home')
        return (
            <Container>
                {/* { this.isLoggedIn ? (<Dashboard />) : (<LandingPage />) } */}
                {status}
                <Switch>
                    <Route path='/login' component={LoginForm} />
                </Switch>
            </Container>

        )
    }
}

export default Home