import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterBooks } from '../actions/index';
import { currentPage } from '../actions/index';

export class FilterBook extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.changeFilterText = this.changeFilterText.bind(this);
        this.keyPressEnter = this.keyPressEnter.bind(this);
        this.KeyPressBackspace = this.KeyPressBackspace.bind(this);
    }

    cleanFilter() {
        this.state.term = '';
    }

    changeFilterText(event) {
        this.setState({
            term: event.target.value
        })
    }

    onClickFilter() {
        this.props.filterBooks(this.state.term);
        this.props.currentPage(1);
    }

    keyPressEnter(event) {
        if (event.key === 'Enter') {
            this.onClickFilter();
        }
    }

    KeyPressBackspace(event) {
        if (event.key === 'Backspace' && this.state.term.length < 2) {
            this.cleanFilter();
            this.keyPressEnter({key: 'Enter'});
        }
    }

    render(){
        return (
            <div className="input-group">
                <input type="text"
                       className="form-control"
                       value={this.state.term}
                       onChange={this.changeFilterText}
                       onKeyPress={this.keyPressEnter}
                       onKeyDown={this.KeyPressBackspace}
                       placeholder="Filter books"/>
                <span className="input-group-btn">
                    <button
                        onClick={() => {this.onClickFilter()}}
                        className="btn btn-primary"
                        type="button">
                        Search
                    </button>
                </span>
            </div>
        );
    }
}

function mapStateToProps() {
    return {}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ filterBooks, currentPage }, dispatch);
}

// Envolver componente en un container y devolver el container.
export default connect(mapStateToProps, mapDispatchToProps)(FilterBook);