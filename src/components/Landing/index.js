import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Fade from 'react-reveal/Fade';

const Landing = () => (
  <div style={{marginTop: '200px'}}>
    <Fade top>
      <Link style={{  textAlign: 'left', fontSize: '60px'}} to={ROUTES.HOME}>Welcome!</Link>
    </Fade>
  </div>
);






export default Landing;