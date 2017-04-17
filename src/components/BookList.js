import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBooks } from '../actions/index';
import { totalBooks } from '../actions/index';
import { elementsXPage } from '../actions/index';
import { currentPage } from '../actions/index';

class BookList extends Component {

    constructor(props) {
        super(props);
        this.total = 0;
    }

    //Método del ciclo de vida del componente al cargarlo...
    componentDidMount() {
        this.props.fetchBooks();
    }

    //Método del ciclo de vida del componente después de renderizar
    componentDidUpdate() {
        this.props.totalBooks(this.total);
    }

    showCurrentElementsXPage(books) {
        let limitMax = this.props.current_page * this.props.elements_x_page;
        let limitMin = limitMax - this.props.elements_x_page;
        return books.filter((element,index) => index >= limitMin && index < limitMax);
    }

    getFilterBooks() {
        let filterLowerCase = this.props.filter_book.toString().toLowerCase();
        return this.props.books.filter((book) => book.title.toLowerCase().indexOf(filterLowerCase) != -1 );
    }

    render(){

        let books = this.getFilterBooks().map((book) => {
            return <div key={book.id}>{book.title} - {book.author} - {book.isbn}</div>
        });

        this.total = books.length;

        return (
            <div>
                <div>Book List</div>
                <div style={{height:'250px', width:'400px', overflow:'auto', border:'1px solid black'}}>
                {this.showCurrentElementsXPage(books)}
                </div>
            </div>
        )
    }
}

//Mapear estado de aplicación a propiedades del objeto
function mapStateToProps(state) {
    //Devuelvo estado de la aplicación, que contiene la lista de libros.
    //Si hay cambios en la lista el estado se entera del cambio
    return {
        books: state.books,
        filter_book: state.filter_book,
        elements_x_page: state.elements_x_page,
        current_page: state.current_page
    }
}

//Mapear el despachar acciones de mi aplicación a propiedades del objeto
//Vinculo a una propiedad de mi componente una acción definida
function mapDispatchToProps(dispatch){
    // fetchBooks se saca de la definición de acciones
    // Se define la propiedad fetchBooks a la acción fetchBooks
    // Si se llama igual se puede colapsar {fetchBooks: fetchBooks}
    // queda como {fetchBooks}
    return bindActionCreators({ fetchBooks, totalBooks, elementsXPage, currentPage }, dispatch);
}

// Envolver componente en un container y devolver el container.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);