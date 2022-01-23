import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
    Switch,
    Route,
    Link,

    useRouteMatch
} from "react-router-dom";

import DashboardHome from './DashboardHome/DashboardHome';
import logo from './../../img/croma_logo.png'
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AdminRoute from './AdminRoute/AdminRoute';
import AddMobile from './AddService/AddMobile';
import OrderList from './OrderLIst/OrderLIst';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import SendReview from './SendReview/SendReview';
import RemoveProduct from './RemoveProduct/RemoveProduct';

const drawerWidth = 150;

function Dashboard(props) {


    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    const { admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [responsiveDrawer, setResponsiveDrawer] = React.useState('My Order')
    const handleDrawerName = (e) => {
        setResponsiveDrawer(e)
        // console.log(e)
    }
    const drawer = (
        <div >
            <Box sx={{ height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <NavLink to='/home'>
                    <img width='120' alt='logo' src={logo} />
                </NavLink>
            </Box>
            <Divider />
            <Box sx={{ textAlign: 'left', ml: 2, textDecoration: 'none' }}>
                <Link to='/allproduct' style={{ textDecoration: 'none' }}><Button color="inherit">Products</Button></Link>
                <Link to={`${url}/sendReview`} style={{ textDecoration: 'none' }}><Button color="inherit">Send Review</Button></Link>
                <br />
                <Link to={`${url}`} style={{ textDecoration: 'none' }}><Button color="inherit" onClick={() => handleDrawerName('My Order')}>My Order</Button></Link>
                {admin && <Box>
                    <Link to={`${url}/orderList`} style={{ textDecoration: 'none' }}><Button color="inherit" onClick={() => handleDrawerName('Order List')} >Order List</Button></Link>
                    <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none' }}><Button color="inherit" onClick={() => handleDrawerName('Make Admin')}>Make Admin</Button></Link>
                    <Link to={`${url}/addProduct`} style={{ textDecoration: 'none' }}><Button color="inherit" onClick={() => handleDrawerName('Add Mobile')}>Add Mobile</Button></Link>
                    <Link to={`${url}/removeProduct`} style={{ textDecoration: 'none' }}><Button color="inherit" onClick={() => handleDrawerName('Remove Mobile')}>Remove Mobile</Button></Link>
                </Box>}
            </Box>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar
                style={{ backgroundColor: '#222' }}
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {responsiveDrawer}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >

                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome />
                    </Route>
                    <Route path={`${path}/sendReview`}>
                        <SendReview />
                    </Route>

                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/orderList`}>
                        <OrderList />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddMobile />
                    </AdminRoute>
                    <AdminRoute path={`${path}/removeProduct`}>
                        <RemoveProduct />
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}


Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


export default Dashboard;
