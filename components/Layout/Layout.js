/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import Header from './Header';
import Footer from './Footer';
import * as b from 'react-bootstrap';
import s from './Layout.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Layout extends React.Component {

  render() {
    return (
      <div ref={node => (this.root = node)}>
        <Header/>
          <div {...this.props}  /> 
        <Footer/>
      </div>
    );
  }
}

export default Layout;
