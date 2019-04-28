import { connect } from 'react-redux';
import React from 'react';

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

export default connect(null, null)(Container);
