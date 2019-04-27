import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router';

// Routes
import Routes from './routes';

// Components
import Header from '../components/header';

const Container = () => (
  <div>
    <Header />
    <Routes />
  </div>
);

export default withRouter(connect(null, null)(Container));
