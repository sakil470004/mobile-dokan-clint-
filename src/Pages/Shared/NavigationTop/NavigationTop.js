import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
// my own
import logo from './../../../img/croma_logo.png'
import { Button, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
// import { HashLink } from 'react-router-hash-link';



// color 1 #FFDA00

export default function NavigationTop() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);



    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <NavLink smooth to='/home#serviceWeProvide'>
                    Service
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink smooth to='/home#reviewWeGot'>
                    Review
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to='/dashboard'>
                    Dashboard
                </NavLink>
            </MenuItem>

        </Menu>
    );

    // const { user, logout } = useAuth();

    return (
        <div >

            <Container>
                <Box sx={{ flexGrow: 1 }} >
                    <AppBar position="static" style={{ background: '#ffffff', boxShadow: 'none' }}>
                        <Toolbar>
                            <NavLink to='/home'>
                                <img style={{ margin: '5px' }} src={logo} width='180' alt='logo' />
                            </NavLink>
                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>


                                <NavLink style={{ color: 'black', textDecoration: 'none' }} to='/home'>
                                    <Button color="inherit"  >Home</Button>
                                </NavLink>


                                <NavLink smooth style={{ color: 'black', textDecoration: 'none' }} to='/home#serviceWeProvide'>
                                    <Button color="inherit"  >Services</Button>
                                </NavLink>

                                <NavLink smooth

                                    style={{ color: 'black', textDecoration: 'none' }} to='/home#reviewWeGot'>
                                    <Button color="inherit"  >Review</Button>
                                </NavLink>
                                <NavLink style={{ color: 'black', textDecoration: 'none' }} to='/dashboard'>
                                    <Button color="inherit"  >Dashboard</Button>
                                </NavLink>

                                {/* {!user?.displayName  */}
                                && <NavLink style={{ color: 'black', backgroundColor: '#FFDA00', textDecoration: 'none', borderRadius: '10px' }} to='/login'>
                                    <Button color="inherit"  >Login</Button>
                                </NavLink>
                                {/* } */}

                                {/* {user?.displayName && */}
                                <NavLink style={{ color: 'black', backgroundColor: '#FFDA00', textDecoration: 'none', borderRadius: '10px' }} to='/login'>
                                    <Button

                                        // onClick={logout}
                                        color="inherit"  >Logout</Button>
                                </NavLink>
                                {/* } */}
                            </Box>

                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                // color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                        </Toolbar>
                        {renderMobileMenu}
                        {renderMenu}
                    </AppBar>
                </Box>
            </Container>
        </div >

    );
}
