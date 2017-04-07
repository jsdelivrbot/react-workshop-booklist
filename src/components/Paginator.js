import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {totalBooks} from '../actions/index';
import {currentPage} from '../actions/index';

class Paginator extends Component
{
    constructor(props) {
        super(props);
        this.totalPag = 0;
        this.elementXPag = 10;
        this.props.currentPage(1);
    }

    setTotalPag() {
        this.totalPag = Math.ceil(this.props.total_books/this.elementXPag);
        return this.totalPag;
    }

    addPage() {
        console.log("ADDPAGE: " + this.props.current_page + " :: " + this.totalPag);
        if (this.props.current_page < this.totalPag) {
            this.props.currentPage(this.props.current_page+1);
        }
    }

    subPage() {
        console.log("SUBPAGE: " + this.props.current_page + " :: " + this.totalPag);
        if (this.props.current_page > 1) {
            this.props.currentPage(this.props.current_page-1);
        }
    }

    render(){
        return (
            <div>
                <div>Total: {this.props.total_books}</div>
                <div>Pag. Primera</div>
                <div>
                    <button onClick={() => {this.subPage()}} className="btn btn-primary" type="button">Pag. ant</button>
                </div>
                <div>{this.props.current_page} / {this.setTotalPag()}</div>
                <div>
                    <button onClick={() => {this.addPage()}} className="btn btn-primary" type="button">Pag. seg</button>
                </div>
                <div>Pag. Ultima</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        total_books: state.total_books,
        current_page: state.current_page
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({totalBooks, currentPage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);