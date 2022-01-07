import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Footer.css';
import logo from './../../../img/croma_logo.png'

const Footer = () => {


    return (
        <Container>
            <Box sx={{ borderRadius: 3, background: 'linear-gradient(to top, #Ef827D 0%,#48a7a3 100%)',mt:3 }}>
                {/* this is for testing purpose */}
                {/* <div class="dummy_page">
                Mobile responsive footer
            </div> */}

                {/* <!-- FOOTER START --> */}
                <div className="footer">
                    <div className="contain">
                        <div className="col">
                         
                            <ul>
                            <li><img width='120px' src={logo} alt='logo'/></li>
                                <li>About</li>
                                <li>Mission</li>
                                <li>Services</li>
                                <li>Social</li>
                                <li>Get in touch</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h1>Products</h1>
                            <ul>
                                <li>About</li>
                                <li>Mission</li>
                                <li>Services</li>
                                <li>Social</li>
                                <li>Get in touch</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h1>Accounts</h1>
                            <ul>
                                <li>About</li>
                                <li>Mission</li>
                                <li>Services</li>
                                <li>Social</li>
                                <li>Get in touch</li>
                            </ul>
                        </div>
                        {/* <div className="col">
                            <h1>Resources</h1>
                            <ul>
                                <li>Webmail</li>
                                <li>Redeem code</li>
                                <li>WHOIS lookup</li>
                                <li>Site map</li>
                                <li>Web templates</li>
                                <li>Email templates</li>
                            </ul>
                        </div> */}
                        <div className="col">
                            <h1>Support</h1>
                            <ul>
                                <li>Contact us</li>
                                <li>Web chat</li>
                                <li>Open ticket</li>
                            </ul>
                        </div>
                        {/* <div className="col social">
                        <h1>Social</h1>
                        <ul>
                            <li><img alt="fb" src="https://svgshare.com/i/5fq.svg" width="32" style={{ width: "32px" }} /></li>
                            <li><img alt="fb" src="https://svgshare.com/i/5eA.svg" width="32" style={{ width: "32px" }} /></li>
                            <li><img alt="fb" src="https://svgshare.com/i/5f_.svg" width="32" style={{ width: "32px" }} /></li>
                        </ul>
                    </div> */}
                        <div className="clearfix"></div>
                    </div>
                </div>
                {/* <!-- END OF FOOTER --> */}
            </Box>
        </Container>
    );

}
export default Footer;
