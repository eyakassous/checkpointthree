import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
         <div className='main-footer'>
            <div className='footer_middle'>
            <div className='container'>
                <div className='row'>
                    { /*column 1*/}
                    <div className='col-md-3 col-sm-6'>
                        <h4>Lorem ipsum</h4>
                        <ul className='list-unstyled'>
                            <li>Lorem ispum</li>
                            <li>Lorem ispum</li>
                            <li>Lorem ispum</li>
                            <li>Lorem ispum</li>
                        </ul>
                    </div>
                    { /*column 2*/}
                    <div className='col-md-3 col-sm-6'>
                        <h4>Lorem ipsum</h4>
                        <ul className='list-unstyled'>
                            <li>Lorem ispum</li>
                            <li>Lorem ispum</li>
                            <li>Lorem ispum</li>
                            <li>Lorem ispum</li>
                        </ul>
                    </div>
                    { /*column 3*/}
                    <div className='col-md-3 col-sm-6'>
                        <h4>Lorem ipsum</h4>
                        <ul className='list-unstyled'>
                            <li>Lorem ispum</li>
                            <li>Lorem ispum</li>
                            <li>Lorem ispum</li>
                            <li>Lorem ispum</li>
                        </ul>
                    </div>
                    { /*column 4*/}
                    <div className='col-md-3 col-sm-6'>
                        <h4>Lorem ipsum</h4>
                        <ul className='list-unstyled'>
                            <li>Lorem ispum</li>
                            <li>Lorem ispum</li>
                            <li>Lorem ispum</li>
                            <li>Lorem ispum</li>
                        </ul>
                    </div>
                </div>
                {/* FOTER BBOTTOM */}
                <div className='footer-bottom'>
                    <p className='text-xs-center'>
                        &copy;{new Date().getFullYear()} City Guide App -All Rights Reserved
                    </p>
                </div>
            </div>
            </div>
         </div>
    )
}
export default Footer;

// const FooterContainer = styled.footer
// .footer_middle {
//      background: var(--mainDark);
// }

;

