import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';

import { connect } from 'react-redux';
import s from './container.css'

class Container extends Component {
  render() {
    return (
      <Layout>
        <div className={s.wrap} >
          {this.props.children}
        </div>
      </Layout>
    );
  }
}
export default connect(state => state)(Container)