import React, { Component } from 'react';
import { LandingPage } from './Components';
import { Container, Grid, GridColumn, Menu } from 'semantic-ui-react';
import { Link, Route, Switch } from 'react-router-dom';
import { 
    AdminProperties,
    AdminWorkOrders,
    AdminAddTenant,
    AdminBilling,
    AdminSettings,
    TenantDashboard,
    TenantBilling,
    TenantWorkOrders,
    TenantSettings
        
} from './Components';

export default class Dashboard extends Component {
    
    state = {
        isAdmin: false,
        activeItem: 'home'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        let display = this.state.isAdmin 
        return (
            <Container>
                {display ? (<SideBarAdmin handleItemClick={this.handleItemClick} activeItem={this.state.activeItem} />
                ) : (<SideBarTenant handleItemClick={this.handleItemClick} activeItem={this.state.activeItem} />
                ) }
            </Container>
        )
    }
}

const SideBarAdmin = (props) => {

    return (
        <Grid container>
                <Grid.Column width={4}>
                    <Menu inverted pointing vertical stackable>
                        {/* <Menu.Item name='Home' active={props.activeItem === 'home'} onClick={props.handleItemClick} /> */}
                    
                        <Link to="/admin/properties">
                        <Menu.Item
                            name='Properties'
                            active={props.activeItem === 'Properties'}
                            onClick={props.handleItemClick}
                        >
                            Properties
                        </Menu.Item>
                        </Link>

                        <Link to="/admin/workorders">
                        <Menu.Item
                            name='friends'
                            active={props.activeItem === 'Word Orders'}
                            onClick={props.handleItemClick}
                        >
                        Work Orders
                        </Menu.Item>
                        </Link>


                        <Link to="/admin/addtenant">
                        <Menu.Item
                            name='friends'
                            active={props.activeItem === 'Add Tenant'}
                            onClick={props.handleItemClick}
                        >
                        Add Tenant
                        </Menu.Item>
                        </Link>


                        <Link to="/admin/billing">
                        <Menu.Item
                            name='friends'
                            active={props.activeItem === 'Billing'}
                            onClick={props.handleItemClick}
                        >
                        Billing
                        </Menu.Item>
                        </Link>

                        <Link to="/admin/settings">
                        <Menu.Item
                            name='friends'
                            active={props.activeItem === 'Settings'}
                            onClick={props.handleItemClick}
                        >
                        Settings
                        </Menu.Item>
                        </Link>
                    </Menu>
                </Grid.Column>
                <Grid.Column  width={12}>
                    <Container fluid>
                    <Switch>
                        <Route path="/admin/properties" component={AdminProperties} />
                        <Route path="/admin/workorders" component={AdminWorkOrders} />
                        <Route path="/admin/addtenant" component={AdminAddTenant} />
                        <Route path="/admin/billing" component={AdminBilling} />
                        <Route path="/admin/settings" component={AdminSettings} />  
                    </Switch>
                    </Container>
            </Grid.Column>
        </Grid>

    );
};

const SideBarTenant = (props) => {
    return (

            <Grid container>
                <Grid.Column width={4}>
                    <Menu inverted  pointing vertical stackable>
                        {/* <Menu.Item name='Home' active={props.activeItem === 'home'} onClick={props.handleItemClick} /> */}
                    
                        <Link to="/tenant/dashboard">
                        <Menu.Item
                            name='Dashboard'
                            active={props.activeItem === 'Dashboard'}
                            onClick={props.handleItemClick}
                        >
                            Dashboard
                        </Menu.Item>
                        </Link>

                        <Link to="/tenant/payments">
                        <Menu.Item
                            name='Billing'
                            active={props.activeItem === 'Billing'}
                            onClick={props.handleItemClick}
                        >
                        Billing
                        </Menu.Item>
                        </Link>


                        <Link to="/tenant/workorders">
                        <Menu.Item
                            name='WorkOrder'
                            active={props.activeItem === 'WorkOrder'}
                            onClick={props.handleItemClick}
                        >
                        Work Orders
                        </Menu.Item>
                        </Link>


                        <Link to="/tenant/settings">
                        <Menu.Item
                            name='Settings'
                            active={props.activeItem === 'Settings'}
                            onClick={props.handleItemClick}
                        >
                        Settings
                        </Menu.Item>
                        </Link>
                    </Menu>
                </Grid.Column>
                <Grid.Column  width={12}>
                    <Container fluid>
                    <Switch>
                    <Route path="/tenant/dashboard" component={TenantDashboard} />
                    <Route path="/tenant/payments" component={TenantBilling} />
                    <Route path="/tenant/workorders" component={TenantWorkOrders} />
                    <Route path="/tenant/settings" component={TenantSettings} />
                    </Switch>
                    </Container>
            </Grid.Column>
        </Grid>
    );
  };