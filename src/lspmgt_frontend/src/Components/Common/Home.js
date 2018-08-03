import React, { Component } from 'react';
import { LandingPage, Dashboard, LoginForm } from './Components';
import { Container, Grid, GridColumn, Gr } from 'semantic-ui-react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Amplify, { Auth } from 'aws-amplify';
import AmplifyConfig from '../../Config/Auth';
import { connect } from 'react-redux';
import { getUserStatus } from '../Redux/Actions';


Amplify.configure(AmplifyConfig);

class Home extends Component {

    state={
        allow: false
    }
    componentDidMount() {
        this.props.getUserStatus()
        console.log('------------->>>> ', this.props.isAdmin)
        this.setState({
            allow: this.props.isAdmin
        })
    }


    render() {
        console.log('show state --> ', this.state);
        console.log('show props --> ', this.props);
        // if (this.state.isLoggedIn) {
        //     console.log('signing in and redirecting')
        //     return <Redirect to='/dashboard'/>
        //   }

        if (this.props.isAdmin) {
            return <Dashboard />
        }
        return (
            <Container fluid>
                <LandingPage />
                <Route path='/login' component={LoginForm} />
            </Container>
        )
    }
}

const mapStateToProps = state => {
    console.log('this is maptoprops --> ', state);
    return {
        getUser: state,
        isAdmin: state.isAdmin

    };
};

export default withRouter(connect(mapStateToProps, { getUserStatus })(Home));
