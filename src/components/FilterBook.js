import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {filterBooks} from '../actions/index';

class FilterBook extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.changeFilterText = this.changeFilterText.bind(this);
    }

    changeFilterText(event) {
        this.setState({
            term: event.target.value
        })
    }

    render(){
        return (
            <div className="input-group">
                <input type="text"
                       className="form-control"
                       value={this.state.term}
                       onChange={this.changeFilterText}
                       placeholder="Filter books"/>
                <span className="input-group-btn">
                    <button onClick={() => {this.props.filterBooks(this.state.term)}} className="btn btn-primary" type="button">Search</button>
                </span>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({filterBooks}, dispatch);
}

// Envolver componente en un container y devolver el container.
export default connect(mapStateToProps, mapDispatchToProps)(FilterBook);