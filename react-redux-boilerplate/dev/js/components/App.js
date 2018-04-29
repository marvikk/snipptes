import React, { Component } from 'react';
import { connect } from 'react-redux';
require('../../scss/style.scss');

class App extends Component {

    render() {

        return (
            <div>
                {this.props.myData}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        myData: state.reducerData
    }
}

export default connect(mapStateToProps)(App);
