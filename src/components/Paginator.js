import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {totalBooks} from '../actions/index';

class Paginator extends Component
{
    render(){
        return (
            <div>
                PAGINATOR {this.props.total_books}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        total_books: state.total_books
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({totalBooks}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);