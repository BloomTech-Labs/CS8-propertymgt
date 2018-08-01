import React, { Component } from 'react';
import { LandingPage, Dashboard } from './Components';
import { Container, Grid, GridColumn, Gr } from 'semantic-ui-react';
import {} from 'react-router-dom';

export default class Home extends Component {



    render() {

        console.log('rendering dashsboard from home')
        return (
            < Dashboard />

        )
    }
}